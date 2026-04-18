import json

d = json.load(open('tn_candidates_2026.json', encoding='utf-8'))
print('=== DATA VALIDATION ===')
print(f"Total candidates: {d['total_candidates']}")
print(f"Constituencies: {d['constituency_count']}")
print(f"Parties: {len(d['party_summary'])}")

# Status breakdown
statuses = {}
for c in d['candidates']:
    s = c.get('status', '')
    statuses[s] = statuses.get(s, 0) + 1
print(f"Status breakdown: {statuses}")

# Top 10 parties
print("\nTop 10 parties:")
for i, (p, cnt) in enumerate(list(d['party_summary'].items())[:10]):
    print(f"  {i+1}. {p}: {cnt}")

# Photo stats
with_local = sum(1 for c in d['candidates'] if c.get('photo_local', '').startswith('public/'))
with_remote = sum(1 for c in d['candidates'] if c.get('photo_local', '').startswith('http'))
no_photo = sum(1 for c in d['candidates'] if not c.get('photo_local', ''))
print(f"\nPhotos: {with_local} local, {with_remote} remote fallback, {no_photo} none")

# Sample constituencies
consts = list(d['constituencies_summary'].keys())[:5]
print(f"\nSample constituencies: {consts}")
print(f"All constituency count: {len(d['constituencies_summary'])}")

# Check a few photo paths exist
from pathlib import Path
checked = 0
exists = 0
for c in d['candidates'][:100]:
    pl = c.get('photo_local', '')
    if pl.startswith('public/'):
        checked += 1
        if Path(pl).exists():
            exists += 1
print(f"\nPhoto file check (first 100): {exists}/{checked} exist on disk")
