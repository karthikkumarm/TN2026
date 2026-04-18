# TN 2026 — Tamil Nadu Assembly Election Analysis

Static site with manifesto fiscal analysis + complete ECI candidate directory.

## Deploy on Vercel

```bash
npm i -g vercel
vercel
```

## Structure

- `index.html` — Main page (tabs: Overview, Scorecard, Ideal Manifesto, Stress Test, Missing Policies, Candidates)
- `tn_candidates_2026.json` — 7,070 candidates scraped from ECI Affidavit Portal
- `public/assets/photos/` — 5,557 candidate photos organized by constituency
- `vercel.json` — Vercel deployment config

## Data Source

- **Candidates**: [ECI Affidavit Portal](https://affidavit.eci.gov.in/) — Assembly GEN-BYE-Election-MAR-MAY-2026, Tamil Nadu
- **Manifesto Analysis**: Independent fiscal evaluation of DMK, ADMK, TVK, NTK manifestos
