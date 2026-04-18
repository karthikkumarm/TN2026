"""
ECI Affidavit Portal - Full TN 2026 Candidate Scraper
=====================================================
Strategy:
1. Use headed Playwright to bypass Akamai WAF
2. Set filters (TN, 2026, AC-GENERAL, Phase 1)
3. Submit form to get first results page
4. Use browser context request API for fast pagination (no rendering)
5. Parse HTML with regex for candidate data + photo URLs
6. Download candidate photos to public/assets/photos/
7. Save structured JSON with local photo paths
"""
import json
import sys
import time
import re
from pathlib import Path
from html import unescape
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(line_buffering=True)

STEALTH_JS = """
Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3,4,5] });
Object.defineProperty(navigator, 'languages', { get: () => ['en-US','en'] });
window.chrome = { runtime: {} };
"""

BASE_URL = "https://affidavit.eci.gov.in"
OUTPUT_FILE = "tn_candidates_2026.json"
PHOTOS_DIR = Path("public/assets/photos")


def slugify(text):
    """Create a filesystem-safe slug from text."""
    text = text.strip().lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    return text[:60]


def parse_candidates_from_html(html):
    """Parse candidate data from page HTML using regex."""
    candidates = []

    # Split by candidate rows - each starts with <td class="text-center"> containing img-bx
    rows = re.split(r'<tr>\s*<td class="text-center">', html)

    for row_html in rows[1:]:  # skip first split part (before first <tr>)
        photo_match = re.search(r'<img src="([^"]+)"[^>]*class="het-90"', row_html)
        name_match = re.search(r'<h4 class="bg-(?:blu|red|grn|ylw|org)[^"]*">(.*?)</h4>', row_html, re.DOTALL)
        party_match = re.search(r'Party\s*:</strong>\s*(.*?)</p>', row_html, re.DOTALL)
        status_match = re.search(
            r'Status\s*:</strong>\s*(?:<strong>)?(?:<font[^>]*>)?(.*?)(?:</font>)?(?:</strong>)?\s*</p>',
            row_html, re.DOTALL,
        )
        state_match = re.search(r'State\s*:</strong>\s*(.*?)</p>', row_html, re.DOTALL)
        const_match = re.search(r'Constituency\s*:</strong>\s*(.*?)</p>', row_html, re.DOTALL)
        profile_match = re.search(
            r'<a href="(https://affidavit\.eci\.gov\.in/show-profile/[^"]+)"', row_html
        )

        if name_match:
            def _clean(m):
                if not m:
                    return ''
                t = unescape(m.group(1).strip())
                return re.sub(r'<[^>]+>', '', t).strip()

            candidates.append({
                'name': _clean(name_match),
                'party': _clean(party_match),
                'status': _clean(status_match),
                'state': _clean(state_match),
                'constituency': _clean(const_match),
                'photo_url': photo_match.group(1) if photo_match else '',
                'profile_url': profile_match.group(1) if profile_match else '',
                'photo_local': '',
            })

    return candidates


def get_pagination_info_from_html(html):
    """Extract total count and last page number from HTML."""
    total_match = re.search(r'of\s*<span[^>]*>(\d[\d,]*)</span>\s*results', html)
    total = int(total_match.group(1).replace(',', '')) if total_match else 0

    page_nums = re.findall(r'aria-label="Go to page (\d+)"', html)
    max_page = max(int(n) for n in page_nums) if page_nums else 1

    return total, max_page


def extract_pagination_base_url(html):
    """Extract the base pagination URL pattern from 'Next' link."""
    next_match = re.search(r'<a href="([^"]+)"[^>]*rel="next"', html)
    if next_match:
        url = unescape(next_match.group(1))
        url = url.replace('http://', 'https://')
        return re.sub(r'page=\d+', 'page={}', url)
    return None


def save_json(candidates, extra=None):
    """Save candidates to JSON file."""
    output = {
        "election": "Assembly GEN-BYE-Election-MAR-MAY-2026",
        "state": "Tamil Nadu",
        "source": BASE_URL,
        "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "total_candidates": len(candidates),
        "candidates": candidates,
    }
    if extra:
        output.update(extra)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)


def run():
    PHOTOS_DIR.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        print("=" * 60)
        print("ECI TN 2026 Candidate Scraper")
        print("=" * 60)

        # ── Launch browser ──────────────────────────────────────
        print("\n[1/7] Launching headed Chromium...")
        browser = p.chromium.launch(
            headless=False,
            args=['--disable-blink-features=AutomationControlled', '--no-sandbox'],
        )
        ctx = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1920, "height": 1080},
            locale="en-US",
            timezone_id="Asia/Kolkata",
        )
        ctx.add_init_script(STEALTH_JS)
        page = ctx.new_page()

        # ── Load homepage (establishes Akamai session) ──────────
        print("[2/7] Loading homepage to establish session...")
        page.goto(f"{BASE_URL}/", wait_until="domcontentloaded", timeout=60000)
        time.sleep(2)
        print(f"  Title: {page.title()}")
        if "Access Denied" in page.content():
            print("ERROR: Blocked by WAF on homepage. Try again or use VPN.")
            browser.close()
            return

        # ── Load candidate-affidavit page ───────────────────────
        print("[3/7] Loading candidate-affidavit page...")
        page.goto(
            f"{BASE_URL}/candidate-affidavit",
            wait_until="networkidle", timeout=60000,
        )
        time.sleep(3)
        if "Access Denied" in page.content():
            print("ERROR: Blocked by WAF. Try again.")
            browser.close()
            return

        # ── Set filters ─────────────────────────────────────────
        print("[4/7] Setting filters...")

        # 4a: Election Type (top-level dropdown)
        et_opts = page.evaluate("""
            Array.from(document.querySelector('#electionType').options)
                .map(o => ({value: o.value, text: o.text}))
        """)
        print(f"  ElectionType options: {[o['text'] for o in et_opts]}")
        target_et = next(
            (o for o in et_opts if "2026" in o["text"] or "MAR-MAY" in o["text"]),
            None,
        )
        if target_et:
            page.select_option("#electionType", target_et["value"])
            time.sleep(2)
            print(f"  -> Selected: {target_et['text']}")
        else:
            print("  WARNING: 2026 election type not found!")

        # 4b: Election sub-type (AC - GENERAL)
        time.sleep(1)
        election_opts = page.evaluate("""
            Array.from(document.querySelector('#election').options)
                .map(o => ({value: o.value, text: o.text}))
        """)
        print(f"  Election options: {[o['text'] for o in election_opts]}")
        ac_gen = next(
            (o for o in election_opts if "GENERAL" in o["text"].upper()), None,
        )
        if ac_gen:
            page.select_option("#election", ac_gen["value"])
            time.sleep(2)
            print(f"  -> Selected: {ac_gen['text']}")

        # 4c: State = Tamil Nadu
        time.sleep(1)
        state_opts = page.evaluate("""
            Array.from(document.querySelector('#states').options)
                .map(o => ({value: o.value, text: o.text}))
        """)
        print(f"  State options: {[o['text'] for o in state_opts[:5]]}...")
        tn = next((o for o in state_opts if "Tamil" in o["text"]), None)
        if tn:
            page.select_option("#states", tn["value"])
            time.sleep(2)
            print(f"  -> Selected: {tn['text']}")
        else:
            print("  WARNING: Tamil Nadu not found!")

        # 4d: Phase = 1
        time.sleep(1)
        phase_opts = page.evaluate("""
            Array.from(document.querySelector('#phase').options)
                .map(o => ({value: o.value, text: o.text}))
        """)
        print(f"  Phase options: {phase_opts}")
        ph1 = next((o for o in phase_opts if o["text"].strip() == "1"), None)
        if ph1:
            page.select_option("#phase", ph1["value"])
            time.sleep(3)
            print(f"  -> Selected phase: {ph1['text']} (value={ph1['value']})")

        # 4e: Constituency = All (leave default)
        print("  -> Constituency: All (default)")

        # ── Submit filter form ──────────────────────────────────
        print("[5/7] Submitting filter...")
        page.screenshot(path="eci_pre_filter.png")

        filter_btn = page.query_selector(
            "button.btn.search.btn-primary, button:has-text('Filter')"
        )
        if filter_btn:
            filter_btn.click()
        else:
            page.evaluate(
                "document.getElementById('CandidateCustomFilter').submit()"
            )

        page.wait_for_load_state("networkidle", timeout=30000)
        time.sleep(3)
        page.screenshot(path="eci_post_filter.png")

        # ── Parse first page + pagination info ──────────────────
        first_html = page.content()

        if "Access Denied" in first_html:
            print("ERROR: Blocked after filter submission.")
            browser.close()
            return

        total_results, max_page = get_pagination_info_from_html(first_html)
        print(f"  Total results: {total_results}, Pages: {max_page}")

        if total_results == 0:
            print("WARNING: No results. Dumping page for debug...")
            with open("eci_debug_no_results.html", "w", encoding="utf-8") as f:
                f.write(first_html)
            page.screenshot(path="eci_no_results.png")
            browser.close()
            return

        base_url = extract_pagination_base_url(first_html)
        print(f"  Pagination base URL: {base_url}")

        # Parse page 1
        all_candidates = parse_candidates_from_html(first_html)
        print(f"  Page 1: {len(all_candidates)} candidates")

        if all_candidates:
            c = all_candidates[0]
            print(f"  Sample: {c['name']} | {c['party']} | {c['constituency']}")

        # ── Paginate through all pages ──────────────────────────
        print(f"\n[6/7] Scraping pages 2-{max_page}...")
        use_api = True  # Try fast ctx.request first

        for pg in range(2, max_page + 1):
            url = base_url.format(pg) if base_url else None
            if not url:
                break

            retries = 0
            while retries < 3:
                try:
                    if use_api:
                        resp = ctx.request.get(url, timeout=20000)
                        if resp.status == 403:
                            print(f"  Page {pg}: 403 via API - switching to browser")
                            use_api = False
                            retries += 1
                            continue
                        html = resp.text()
                    else:
                        page.goto(url, wait_until="domcontentloaded", timeout=30000)
                        time.sleep(1)
                        html = page.content()

                    if "Access Denied" in html:
                        print(f"  Page {pg}: WAF block. Retrying in 5s...")
                        time.sleep(5)
                        retries += 1
                        continue

                    candidates = parse_candidates_from_html(html)
                    all_candidates.extend(candidates)
                    break  # success

                except Exception as e:
                    print(f"  Page {pg}: Error ({e}). Retry {retries+1}/3")
                    retries += 1
                    time.sleep(3)

            if pg % 25 == 0 or pg == max_page:
                print(f"  Page {pg}/{max_page} ({len(all_candidates)} candidates)")

            if pg % 100 == 0:
                save_json(all_candidates)
                print("  [checkpoint saved]")

        print(f"\n  Total candidates scraped: {len(all_candidates)}")
        save_json(all_candidates)
        print(f"  Saved to {OUTPUT_FILE}")

        # ── Download photos ─────────────────────────────────────
        print(f"\n[7/7] Downloading candidate photos...")
        with_photos = [c for c in all_candidates if c.get('photo_url')]
        print(f"  Candidates with photos: {len(with_photos)}/{len(all_candidates)}")

        downloaded = 0
        skipped = 0
        failed = 0

        for i, cand in enumerate(all_candidates):
            photo_url = cand.get('photo_url', '')
            if not photo_url:
                continue

            const_slug = slugify(cand.get('constituency', 'unknown'))
            name_slug = slugify(cand.get('name', f'candidate-{i}'))
            const_dir = PHOTOS_DIR / const_slug
            const_dir.mkdir(parents=True, exist_ok=True)

            ext = Path(urlparse(photo_url).path).suffix or '.jpg'
            local_path = const_dir / f"{name_slug}{ext}"
            rel_path = str(local_path).replace('\\', '/')

            cand['photo_local'] = rel_path

            if local_path.exists() and local_path.stat().st_size > 100:
                skipped += 1
                continue

            try:
                resp = ctx.request.get(photo_url, timeout=15000)
                if resp.ok:
                    body = resp.body()
                    if len(body) > 100:
                        local_path.write_bytes(body)
                        downloaded += 1
                    else:
                        cand['photo_local'] = cand['photo_url']
                        failed += 1
                else:
                    cand['photo_local'] = cand['photo_url']
                    failed += 1
            except Exception:
                cand['photo_local'] = cand['photo_url']
                failed += 1

            total_done = downloaded + skipped + failed
            if total_done % 100 == 0:
                print(
                    f"  Photos: {downloaded} new, {skipped} cached, "
                    f"{failed} failed ({total_done}/{len(with_photos)})"
                )
            if total_done % 500 == 0:
                save_json(all_candidates)

        print(
            f"\n  Photos done: {downloaded} downloaded, "
            f"{skipped} cached, {failed} failed"
        )

        # ── Final save with summaries ───────────────────────────
        constituencies = {}
        for c in all_candidates:
            const = c.get('constituency', 'UNKNOWN')
            if const not in constituencies:
                constituencies[const] = {'total': 0, 'accepted': 0, 'rejected': 0}
            constituencies[const]['total'] += 1
            st = c.get('status', '').lower()
            if st == 'accepted':
                constituencies[const]['accepted'] += 1
            elif st == 'rejected':
                constituencies[const]['rejected'] += 1

        parties = {}
        for c in all_candidates:
            party = c.get('party', 'Unknown')
            parties[party] = parties.get(party, 0) + 1

        save_json(all_candidates, extra={
            "constituency_count": len(constituencies),
            "constituencies_summary": constituencies,
            "party_summary": dict(sorted(parties.items(), key=lambda x: -x[1])),
        })

        print(f"\n{'=' * 60}")
        print("SCRAPE COMPLETE")
        print(f"  Candidates: {len(all_candidates)}")
        print(f"  Constituencies: {len(constituencies)}")
        print(f"  Parties: {len(parties)}")
        print(f"  Output: {OUTPUT_FILE}")
        print(f"  Photos: {PHOTOS_DIR}/")
        print(f"{'=' * 60}")

        browser.close()


if __name__ == "__main__":
    run()
