"""Analyze the ECI page dump HTML to understand card structure and pagination."""
import re
import sys

html = open('eci_page_dump.html', 'r', encoding='utf-8').read()
print(f'HTML length: {len(html)}')

# Look for 'show-profile' links
profiles = re.findall(r'show-profile/([^"]+)', html)
print(f'Total show-profile links: {len(profiles)}')

# Look for card patterns
for pattern_name, pattern in [
    ('card candidate', r'class="card candidate'),
    ('card-body', r'class="card-body'),
    ('card-title', r'class="card-title'),
    ('card ', r'class="card '),
]:
    matches = re.findall(pattern, html)
    print(f'  "{pattern_name}": {len(matches)}')

# Find candidate names via card-title
names = re.findall(r'<h5[^>]*class="card-title[^"]*"[^>]*>([^<]+)', html)
print(f'\nCard titles (h5): {len(names)}')
if names:
    print(f'  First 10: {names[:10]}')

# Alternative name patterns
names2 = re.findall(r'<h[3-6][^>]*>([A-Z][A-Z\s.]+)</h', html)
print(f'Uppercase heading names: {len(names2)}')
if names2:
    print(f'  First 10: {names2[:10]}')

# Find Party mentions
parties = re.findall(r'Party\s*:\s*([^\n<]+)', html)
print(f'\nParty mentions: {len(parties)}')
if parties:
    print(f'  First 15: {parties[:15]}')

# Find Status mentions
statuses = re.findall(r'Status\s*:\s*([^\n<]+)', html)
print(f'Status mentions: {len(statuses)}')
if statuses:
    print(f'  First 15: {statuses[:15]}')

# Find Constituency mentions
constits = re.findall(r'Constituency\s*:\s*([^\n<]+)', html)
print(f'Constituency mentions: {len(constits)}')
if constits:
    from collections import Counter
    c = Counter(constits)
    print(f'  Unique constituencies: {len(c)}')
    print(f'  Top 10: {c.most_common(10)}')

# Check for pagination
print('\nPagination markers:')
for p in ['paginate', 'pagination', 'page-item', 'page-link', 'next', 'previous', 
           'Load More', 'Show More', 'loadmore', 'scrolling', 'infinite']:
    count = html.lower().count(p.lower())
    if count:
        print(f'  "{p}": {count}')

# Find status count h2 tags
status_h2 = re.findall(r'<h2[^>]*>(\d+)</h2>', html)
print(f'\nStatus count h2 numbers: {status_h2}')

# Check if data is loaded via AJAX or all in page
print(f'\nTotal "Tamil Nadu" mentions: {html.count("Tamil Nadu")}')
print(f'Total "View more" mentions: {html.count("View more")}')

# Check the CandidateCustomFilter response
print('\n--- API Responses ---')
import json
try:
    api = json.load(open('eci_api_responses.json', 'r'))
    for r in api:
        print(f"  URL: {r['url'][:80]}")
        print(f"  Status: {r['status']}, Body len: {r['body_len']}")
        print(f"  Snippet: {r['body_snippet'][:300]}")
        print()
except:
    print("  No API responses file")

# Extract a sample candidate card HTML
card_start = html.find('show-profile')
if card_start > 0:
    # Go back to find card container
    block_start = html.rfind('<div', max(0, card_start - 2000), card_start)
    block_end = html.find('View more', card_start)
    if block_end > 0:
        block_end = html.find('</div>', block_end) + 6
    sample = html[block_start:block_end]
    print(f'\nSample card HTML ({len(sample)} chars):')
    print(sample[:1500])
