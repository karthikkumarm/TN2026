/* ============================================================
 * TN 2026 — Chunk Loader (encrypted, cached, integrity-checked)
 * ============================================================
 * Strategy:
 *   1. App boot fetches /chunks/manifest.json (tiny, ~2 KB).
 *      manifest = { version, chunks: { id: { url, sha256, size, enc: bool } } }
 *   2. For each requested chunk:
 *        a. Look up in IndexedDB by id.
 *        b. If hit AND stored sha256 === manifest sha256 → use cached payload (offline-first).
 *        c. Else fetch from network, verify SHA-256 matches manifest, decrypt if enc, store in IDB.
 *   3. ServiceWorker handles raw HTTP caching for chunks (cache-first with network fallback).
 *   4. AES-GCM key is derived from a per-build constant fed in via dataset attribute on the
 *      bootstrap script tag (this raises the bar against casual scraping; not security against
 *      a determined client-side attacker — that's a fundamental browser limit).
 * ============================================================ */

(function () {
  'use strict';

  const DB_NAME = 'tn26-cache';
  const DB_VERSION = 1;
  const STORE = 'chunks';
  const META_STORE = 'meta';

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
        if (!db.objectStoreNames.contains(META_STORE)) db.createObjectStore(META_STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbGet(store, key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, 'readonly');
      const r = tx.objectStore(store).get(key);
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });
  }
  async function idbSet(store, key, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, 'readwrite');
      const r = tx.objectStore(store).put(value, key);
      r.onsuccess = () => resolve();
      r.onerror = () => reject(r.error);
    });
  }
  async function idbDel(store, key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, 'readwrite');
      const r = tx.objectStore(store).delete(key);
      r.onsuccess = () => resolve();
      r.onerror = () => reject(r.error);
    });
  }
  async function idbKeys(store) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(store, 'readonly');
      const r = tx.objectStore(store).getAllKeys();
      r.onsuccess = () => resolve(r.result || []);
      r.onerror = () => reject(r.error);
    });
  }

  async function sha256Hex(buf) {
    const h = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /** Derive a per-build AES-GCM key from a passphrase + salt (manifest version). */
  async function deriveKey(passphrase, salt) {
    const enc = new TextEncoder();
    const baseKey = await crypto.subtle.importKey(
      'raw', enc.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveKey']
    );
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
      baseKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );
  }

  /** Decrypt an AES-GCM blob produced by build_mammoth.js (format: [12-byte IV | ciphertext]). */
  async function decryptChunk(blob, key) {
    const u8 = new Uint8Array(blob);
    const iv = u8.slice(0, 12);
    const ct = u8.slice(12);
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
    return pt;
  }

  // ---------- public loader ----------
  let _manifest = null;
  let _key = null;
  let _basePath = '';
  let _passphrase = '';

  async function init({ manifestUrl, passphrase, basePath } = {}) {
    _basePath = basePath || '';
    _passphrase = passphrase || '';
    const url = manifestUrl || (_basePath + 'chunks/manifest.json');
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error('manifest fetch failed: ' + res.status);
    _manifest = await res.json();
    if (_passphrase && _manifest.salt) {
      _key = await deriveKey(_passphrase, _manifest.salt);
    }
    // Garbage-collect IDB entries no longer in manifest
    try {
      const keys = await idbKeys(STORE);
      const valid = new Set(Object.keys(_manifest.chunks || {}));
      for (const k of keys) {
        if (!valid.has(k)) await idbDel(STORE, k);
      }
    } catch (e) { /* non-fatal */ }
    await idbSet(META_STORE, 'manifest', _manifest);
    return _manifest;
  }

  /** Load a chunk by id. Returns ArrayBuffer (caller decodes). Cache-first w/ integrity check. */
  async function load(id) {
    if (!_manifest) throw new Error('chunk-loader not initialised');
    const entry = _manifest.chunks[id];
    if (!entry) throw new Error('unknown chunk: ' + id);

    // Try cache
    try {
      const cached = await idbGet(STORE, id);
      if (cached && cached.sha256 === entry.sha256 && cached.payload) {
        return cached.encrypted && _key ? await decryptChunk(cached.payload, _key) : cached.payload;
      }
    } catch (e) { /* fall through */ }

    // Network
    const url = _basePath + entry.url;
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) throw new Error('chunk fetch failed: ' + id + ' (' + res.status + ')');
    const buf = await res.arrayBuffer();

    // Integrity check on raw bytes
    const got = await sha256Hex(buf);
    if (got !== entry.sha256) {
      throw new Error('integrity check failed for chunk ' + id + ' (expected ' + entry.sha256.slice(0, 12) + ', got ' + got.slice(0, 12) + ')');
    }

    // Persist (raw + encrypted-flag)
    try {
      await idbSet(STORE, id, { sha256: entry.sha256, payload: buf, encrypted: !!entry.enc, ts: Date.now() });
    } catch (e) { /* non-fatal */ }

    return entry.enc && _key ? await decryptChunk(buf, _key) : buf;
  }

  async function loadJSON(id) {
    const buf = await load(id);
    const txt = new TextDecoder('utf-8').decode(buf);
    return JSON.parse(txt);
  }

  async function loadText(id) {
    const buf = await load(id);
    return new TextDecoder('utf-8').decode(buf);
  }

  /** Force-refresh from network (ignores cache). */
  async function refresh(id) {
    try { await idbDel(STORE, id); } catch (e) {}
    return load(id);
  }

  /** Wipe entire cache (e.g. user "clear cache" affordance). */
  async function purge() {
    const keys = await idbKeys(STORE);
    for (const k of keys) await idbDel(STORE, k);
    await idbDel(META_STORE, 'manifest');
  }

  /** Return sizes + last-update for diagnostics. */
  async function status() {
    const keys = await idbKeys(STORE);
    const out = { manifestVersion: _manifest && _manifest.version, cachedChunks: [] };
    for (const k of keys) {
      const v = await idbGet(STORE, k);
      if (v) out.cachedChunks.push({ id: k, bytes: v.payload.byteLength, ts: v.ts });
    }
    return out;
  }

  window.TN26Chunks = { init, load, loadJSON, loadText, refresh, purge, status };
})();
