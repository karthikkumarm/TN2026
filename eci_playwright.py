"""
ECI Affidavit Portal Discovery - Playwright with stealth
"""
import json
import sys
import time
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(line_buffering=True)

STEALTH_JS = """
Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3,4,5] });
Object.defineProperty(navigator, 'languages', { get: () => ['en-US','en'] });
window.chrome = { runtime: {} };
const origQuery = window.navigator.permissions.query;
window.navigator.permissions.query = (p) =>
  p.name === 'notifications'
    ? Promise.resolve({ state: Notification.permission })
    : origQuery(p);
"""

def try_launch(p, headless):
    label = "headless" if headless else "headed"
    print(f"\n--- Trying {label} Chromium ---")
    browser = p.chromium.launch(
        headless=headless,
        args=[
            '--disable-blink-features=AutomationControlled',
            '--no-sandbox',
            '--disable-dev-shm-usage',
        ]
    )
    ctx = browser.new_context(
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        viewport={"width": 1920, "height": 1080},
        locale="en-US",
        timezone_id="Asia/Kolkata",
    )
    ctx.add_init_script(STEALTH_JS)
    page = ctx.new_page()

    api_reqs = []
    def on_req(req):
        u = req.url
        if any(k in u.lower() for k in ['candidate','filter','api','affidavit','election','state']):
            api_reqs.append({"method": req.method, "url": u,
                             "post": req.post_data if req.method=="POST" else None})
    def on_resp(resp):
        u = resp.url
        if any(k in u.lower() for k in ['candidate','filter','api','affidavit','election','state']):
            ct = resp.headers.get("content-type","")
            print(f"  RESP {resp.status} {ct[:40]} {u[:120]}")
    page.on("request", on_req)
    page.on("response", on_resp)

    # Load homepage first (may set cookies / pass JS challenge)
    print("  Loading homepage...")
    try:
        page.goto("https://affidavit.eci.gov.in/", wait_until="domcontentloaded", timeout=60000)
        time.sleep(3)
        title = page.title()
        print(f"  Title: {title}")
        page.screenshot(path=f"eci_{label}_home.png")
        if "Access Denied" in page.content():
            print(f"  *** Blocked on homepage ({label}) ***")
            browser.close()
            return None, None, None
    except Exception as e:
        print(f"  Error: {e}")
        browser.close()
        return None, None, None

    # Now navigate to candidate page
    print("  Loading candidate-affidavit page...")
    try:
        page.goto("https://affidavit.eci.gov.in/candidate-affidavit",
                   wait_until="networkidle", timeout=60000)
        time.sleep(5)
        title = page.title()
        print(f"  Title: {title}")
        page.screenshot(path=f"eci_{label}_candidates.png")
        html = page.content()
        if "Access Denied" in html:
            print(f"  *** Blocked on candidate page ({label}) ***")
            browser.close()
            return None, None, None
    except Exception as e:
        print(f"  Error: {e}")
        browser.close()
        return None, None, None

    print(f"  SUCCESS! Page loaded. HTML length: {len(html)}")
    return browser, page, api_reqs

def inspect_page(page):
    print("\n=== PAGE INSPECTION ===")
    
    selects = page.query_selector_all("select")
    print(f"\n<select> elements: {len(selects)}")
    for i, sel in enumerate(selects):
        name = sel.get_attribute("name") or sel.get_attribute("id") or f"sel_{i}"
        opts = sel.query_selector_all("option")
        texts = [o.inner_text().strip() for o in opts[:15]]
        print(f"  [{i}] {name} ({len(opts)} opts): {texts}")

    for css in ["ng-select","[class*=ng-select]","[class*=dropdown]","[class*=select]",
                "[role=listbox]","[role=combobox]","[class*=filter]","mat-select"]:
        els = page.query_selector_all(css)
        if els:
            print(f"\n'{css}' elements: {len(els)}")
            for i, el in enumerate(els[:8]):
                tag = el.evaluate("e=>e.tagName")
                cls = (el.get_attribute("class") or "")[:80]
                txt = el.inner_text()[:120].replace("\n"," ")
                print(f"  [{i}] <{tag}> class='{cls}' text='{txt}'")

    inputs = page.query_selector_all("input")
    print(f"\n<input> elements: {len(inputs)}")
    for i, inp in enumerate(inputs[:20]):
        attrs = {a: inp.get_attribute(a) or "" for a in ["name","id","type","placeholder","value","class"]}
        print(f"  [{i}] {attrs}")

    buttons = page.query_selector_all("button, [type=submit], .btn, [class*=btn]")
    print(f"\nButtons: {len(buttons)}")
    for i, btn in enumerate(buttons[:15]):
        txt = btn.inner_text().strip()[:60]
        cls = (btn.get_attribute("class") or "")[:60]
        print(f"  [{i}] '{txt}' class='{cls}'")

    body = page.inner_text("body")
    print(f"\nBody text (first 2000 chars):\n{body[:2000]}")
    
    # Check for Angular/React framework
    html = page.content()
    for fw in ["ng-version","__NEXT","__NUXT","data-reactroot","_app_"]:
        if fw in html:
            print(f"\nFramework marker found: {fw}")

    return body, html

def run():
    with sync_playwright() as p:
        # Try headless first, then headed
        for headless in [True, False]:
            browser, page, api_reqs = try_launch(p, headless)
            if page:
                body, html = inspect_page(page)
                print(f"\nCaptured {len(api_reqs)} API requests:")
                for r in api_reqs[:30]:
                    print(f"  {r['method']} {r['url'][:150]}")
                    if r['post']:
                        print(f"    POST: {r['post'][:200]}")
                browser.close()
                break
        else:
            print("\n*** Both headless and headed blocked by WAF ***")
            print("Consider using a VPN or manual browser session.")

    print("\n=== Done ===")

if __name__ == "__main__":
    run()
