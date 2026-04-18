"""
ECI Affidavit Portal Scraper - Discover API and scrape TN 2026 candidate data
https://affidavit.eci.gov.in/
Filters: AC-General, Assembly GEN-BYE-Election-MAR-MAY-2026, Tamil Nadu, Phase 1
"""
import requests
import json
import sys
import time

sys.stdout.reconfigure(line_buffering=True)

BASE = "https://affidavit.eci.gov.in"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "application/json, text/html, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://affidavit.eci.gov.in/candidate-affidavit",
    "X-Requested-With": "XMLHttpRequest",
}

session = requests.Session()
session.headers.update(HEADERS)

# Step 1: Hit the main page to get cookies/CSRF
print("Step 1: Getting main page for session cookies...")
r = session.get(f"{BASE}/candidate-affidavit")
print(f"  Status: {r.status_code}, Cookies: {dict(session.cookies)}")

# Look for CSRF token in HTML
csrf = None
if 'csrf-token' in r.text:
    import re
    m = re.search(r'<meta name="csrf-token" content="([^"]+)"', r.text)
    if m:
        csrf = m.group(1)
        print(f"  CSRF Token: {csrf[:30]}...")
        session.headers["X-CSRF-TOKEN"] = csrf

# Look for any API/AJAX URLs in the page source
print("\nStep 2: Scanning page source for API endpoints...")
import re
api_patterns = re.findall(r'(?:url|href|src|action|endpoint|api)["\s:=]+["\']?(/[a-zA-Z0-9/_-]+)', r.text[:50000])
unique_apis = list(set(api_patterns))
print(f"  Found {len(unique_apis)} potential endpoints:")
for ep in sorted(unique_apis)[:30]:
    print(f"    {ep}")

# Also look for fetch/axios calls
fetch_patterns = re.findall(r'(?:fetch|axios|\.get|\.post)\s*\(\s*["\']([^"\']+)["\']', r.text[:100000])
print(f"\n  Fetch/axios calls found: {fetch_patterns[:20]}")

# Look for any JS files that might contain API URLs
js_files = re.findall(r'src="(/js/[^"]+)"', r.text)
print(f"\n  JS files: {js_files[:10]}")

# Step 3: Try common API patterns for candidate data
print("\nStep 3: Trying common API patterns...")
test_urls = [
    "/api/candidates",
    "/api/candidate",
    "/api/candidate-affidavit",
    "/candidate-affidavit/filter",
    "/candidate-affidavit/search",
    "/candidate/filter",
    "/candidate/search",
    "/api/filter",
    "/api/states",
    "/api/elections",
    "/get-candidates",
    "/get-states",
    "/filter-candidates",
]

for url in test_urls:
    try:
        r2 = session.get(f"{BASE}{url}", timeout=10)
        content_type = r2.headers.get('content-type', '')
        snippet = r2.text[:200].replace('\n', ' ').strip()
        if r2.status_code != 404:
            print(f"  {url} -> {r2.status_code} ({content_type[:40]}) : {snippet[:100]}")
    except Exception as e:
        print(f"  {url} -> ERROR: {e}")

# Step 4: Try POST with filter params
print("\nStep 4: Trying POST with filter parameters...")
filter_data = {
    "state": "Tamil Nadu",
    "election": "Assembly GEN-BYE-Election-MAR-MAY-2026",
    "type": "AC - GENERAL",
    "phase": "1",
}

for url in ["/candidate-affidavit", "/candidate-affidavit/filter", "/api/candidates", "/filter-candidates"]:
    try:
        r3 = session.post(f"{BASE}{url}", data=filter_data, timeout=10)
        content_type = r3.headers.get('content-type', '')
        snippet = r3.text[:300].replace('\n', ' ').strip()
        if r3.status_code != 404:
            print(f"  POST {url} -> {r3.status_code} ({content_type[:40]})")
            # Check if response contains Tamil Nadu data
            if 'Tamil Nadu' in r3.text or 'Tamilnadu' in r3.text.lower():
                print(f"    *** Contains Tamil Nadu data! ***")
            if r3.status_code == 200 and 'json' in content_type:
                print(f"    JSON Response: {r3.text[:500]}")
            else:
                print(f"    Snippet: {snippet[:200]}")
    except Exception as e:
        print(f"  POST {url} -> ERROR: {e}")

# Step 5: Try JSON post
print("\nStep 5: Trying JSON POST...")
json_headers = {**session.headers, "Content-Type": "application/json"}
for url in ["/candidate-affidavit", "/api/candidates", "/api/candidate-affidavit"]:
    try:
        r4 = session.post(f"{BASE}{url}", json=filter_data, headers=json_headers, timeout=10)
        content_type = r4.headers.get('content-type', '')
        if r4.status_code != 404:
            print(f"  JSON POST {url} -> {r4.status_code} ({content_type[:40]})")
            print(f"    Response: {r4.text[:300]}")
    except Exception as e:
        print(f"  JSON POST {url} -> ERROR: {e}")

# Step 6: Check JS files for API URLs
print("\nStep 6: Checking JS files for API URLs...")
for js_url in js_files[:5]:
    try:
        r5 = session.get(f"{BASE}{js_url}", timeout=10)
        if r5.status_code == 200:
            # Search for API endpoints in JS
            api_calls = re.findall(r'["\'](/(?:api|candidate|filter|search|get)[^"\']*)["\']', r5.text)
            route_calls = re.findall(r'(?:route|url|path|endpoint)\s*[:=]\s*["\']([^"\']+)["\']', r5.text)
            if api_calls or route_calls:
                print(f"  {js_url}:")
                for a in set(api_calls):
                    print(f"    API: {a}")
                for a in set(route_calls):
                    print(f"    Route: {a}")
            # Look for Vue/React component data fetching
            data_fetches = re.findall(r'(?:fetch|axios|http|ajax)\s*[.(]\s*["\']([^"\']+)["\']', r5.text)
            if data_fetches:
                print(f"  Data fetches in {js_url}: {list(set(data_fetches))[:10]}")
    except Exception as e:
        print(f"  {js_url} -> ERROR: {e}")

print("\n=== Discovery complete ===")
