/* ============================================================
 * TN 2026 — Service Worker (cache-first for /chunks/, network for HTML)
 * ============================================================
 * Strategy:
 *   - HTML / manifest.json: network-first (so updates are picked up immediately)
 *   - /chunks/* : cache-first, with background revalidation
 *   - Same-origin only
 * ============================================================ */

const CACHE_NAME = 'tn26-mo67wyi7';
const CHUNK_PREFIX = '/chunks/';

self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // manifest.json + index.html — network-first
  if (url.pathname.endsWith('/manifest.json') || url.pathname.endsWith('/index.html') || url.pathname === '/' || url.pathname.match(/^\/[^/]*$/)) {
    e.respondWith((async () => {
      try {
        const res = await fetch(req, { cache: 'no-cache' });
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, res.clone());
        return res;
      } catch (err) {
        const cached = await caches.match(req);
        return cached || new Response('Offline', { status: 503 });
      }
    })());
    return;
  }

  // /chunks/* — cache-first
  if (url.pathname.indexOf(CHUNK_PREFIX) >= 0) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      if (cached) {
        // background revalidate (don't await)
        fetch(req).then(res => { if (res && res.ok) cache.put(req, res); }).catch(() => {});
        return cached;
      }
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (err) {
        return new Response('Chunk unavailable', { status: 503 });
      }
    })());
    return;
  }
});
