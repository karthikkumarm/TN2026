import json

d = json.load(open('tn_candidates_2026.json', encoding='utf-8'))
consts = {}
for c in d['candidates']:
    cn = c['constituency']
    if cn not in consts:
        consts[cn] = {'total': 0, 'accepted': 0, 'rejected': 0, 'parties': {}}
    consts[cn]['total'] += 1
    if c['status'] == 'Accepted':
        consts[cn]['accepted'] += 1
    else:
        consts[cn]['rejected'] += 1
    p = c['party']
    consts[cn]['parties'][p] = consts[cn]['parties'].get(p, 0) + 1

for name in sorted(consts.keys()):
    info = consts[name]
    top3 = sorted(info['parties'].items(), key=lambda x: -x[1])[:3]
    top3_str = ', '.join(f"{p}:{n}" for p, n in top3)
    print(f"{name}|{info['total']}|{info['accepted']}|{top3_str}")
