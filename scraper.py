"""
TN 2026 Candidate Data Extractor
Source: myneta.info (ADR) — Association for Democratic Reforms
Uses TN 2021 data as baseline (TN 2026 database not yet populated on myneta.info)
"""

import requests
from bs4 import BeautifulSoup
import json
import sys
import io
import time

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stdout.reconfigure(line_buffering=True)

BASE = "https://www.myneta.info/TamilNadu2021/"
HEADERS = {"User-Agent": "Mozilla/5.0 (civic research bot)"}


def scrape_constituency_list():
    """Get all 234 constituency IDs and names"""
    r = requests.get(BASE, headers=HEADERS, timeout=30)
    soup = BeautifulSoup(r.text, "lxml")
    constituencies = []
    seen = set()
    for link in soup.select("a[href*='constituency_id']"):
        href = link["href"]
        if "show_candidates" not in href:
            continue
        cid = href.split("constituency_id=")[-1].split("&")[0]
        name = link.text.strip()
        if cid.isdigit() and cid not in seen:
            seen.add(cid)
            constituencies.append({"id": cid, "name": name})
    return constituencies


def scrape_candidates(constituency_id, constituency_name):
    """Scrape all candidates for a constituency"""
    url = f"{BASE}index.php?action=show_candidates&constituency_id={constituency_id}"
    r = requests.get(url, headers=HEADERS, timeout=30)
    soup = BeautifulSoup(r.text, "lxml")
    candidates = []

    # Find the candidate table (has header row with 'Candidate', 'Party', etc.)
    for table in soup.find_all("table"):
        header_row = table.find("tr")
        if not header_row:
            continue
        header_text = header_row.get_text()
        if "Candidate" not in header_text or "Party" not in header_text:
            continue

        rows = table.find_all("tr")[1:]  # skip header
        for row in rows:
            cols = row.find_all("td")
            if len(cols) < 8:
                continue

            name_text = cols[1].get_text(strip=True)
            name_clean = name_text.replace("Winner", "").replace("\xa0", " ").strip()

            name_link = cols[1].find("a")
            candidate_url = ""
            if name_link:
                href = name_link.get("href", "")
                if href:
                    candidate_url = BASE + href if not href.startswith("http") else href

            assets_text = cols[6].get_text(strip=True).replace("\xa0", " ")
            liabilities_text = cols[7].get_text(strip=True).replace("\xa0", " ")

            candidates.append({
                "name": name_clean,
                "party": cols[2].get_text(strip=True) if len(cols) > 2 else "",
                "criminal_cases": cols[3].get_text(strip=True) if len(cols) > 3 else "0",
                "education": cols[4].get_text(strip=True) if len(cols) > 4 else "",
                "age": cols[5].get_text(strip=True) if len(cols) > 5 else "",
                "total_assets": assets_text,
                "total_liabilities": liabilities_text,
                "affidavit_url": candidate_url,
                "constituency": constituency_name,
                "constituency_id": constituency_id,
                "is_winner": "Winner" in name_text
            })
        break

    return candidates


if __name__ == "__main__":
    print("Fetching constituency list...")
    constituencies = scrape_constituency_list()
    print(f"Found {len(constituencies)} constituencies")

    all_data = {
        "election": "Tamil Nadu 2021 (Latest Available — 2026 data pending on ADR/myneta.info)",
        "source": "myneta.info (Association for Democratic Reforms)",
        "scraped_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "constituencies": constituencies,
        "candidates": []
    }

    for i, c in enumerate(constituencies):
        print(f"[{i+1}/{len(constituencies)}] Scraping {c['name']}...")
        candidates = scrape_candidates(c["id"], c["name"])
        all_data["candidates"].extend(candidates)
        time.sleep(0.5)

    with open("tn_candidates_2026.json", "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Done. Saved {len(all_data['candidates'])} candidates across {len(constituencies)} constituencies.")
