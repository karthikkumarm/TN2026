(function(){
'use strict';

/* ═══════════════════════════════════════════════════════════
   STATE COMPARISON DATA
   Source: RBI State Finances, MOSPI, DES, Census 2011/NFHS-5
   All INR figures: Lakh Crore (L Cr) or Crore (Cr)
   ═══════════════════════════════════════════════════════════ */
var STATE_COMPARISON = {
  tn: { name:'Tamil Nadu', abbr:'TN', rank:2, gsdp:28.03, gsdpGrowth:9.8, perCapita:3.27, pop:7.91,
    exports:33.8, fdi:4.2, literacy:82.9, hdi:0.708, msmUnits:14.7, itRev:2.8,
    ownTaxRev:2.05, fiscalDeficit:3.2, debtGsdp:25.1, mfrShare:21 },
  mh: { name:'Maharashtra', abbr:'MH', rank:1, gsdp:37.04, gsdpGrowth:8.9, perCapita:2.82, pop:12.47,
    exports:52.1, fdi:11.2, literacy:84.8, hdi:0.696, msmUnits:12.1, itRev:4.5,
    ownTaxRev:2.89, fiscalDeficit:2.9, debtGsdp:18.6, mfrShare:19 },
  ka: { name:'Karnataka', abbr:'KA', rank:3, gsdp:24.28, gsdpGrowth:10.2, perCapita:3.12, pop:6.82,
    exports:27.4, fdi:5.8, literacy:77.0, hdi:0.682, msmUnits:8.3, itRev:5.6,
    ownTaxRev:1.72, fiscalDeficit:3.0, debtGsdp:22.4, mfrShare:15 },
  gj: { name:'Gujarat', abbr:'GJ', rank:4, gsdp:22.15, gsdpGrowth:9.1, perCapita:2.72, pop:7.07,
    exports:65.3, fdi:3.6, literacy:82.4, hdi:0.672, msmUnits:11.2, itRev:0.9,
    ownTaxRev:1.38, fiscalDeficit:2.4, debtGsdp:19.1, mfrShare:25 },
  up: { name:'Uttar Pradesh', abbr:'UP', rank:5, gsdp:21.73, gsdpGrowth:7.4, perCapita:0.78, pop:23.15,
    exports:15.2, fdi:1.1, literacy:73.0, hdi:0.596, msmUnits:9.0, itRev:0.3,
    ownTaxRev:1.15, fiscalDeficit:3.5, debtGsdp:32.8, mfrShare:10 },
  ts: { name:'Telangana', abbr:'TS', rank:6, gsdp:14.68, gsdpGrowth:11.1, perCapita:3.48, pop:3.94,
    exports:18.6, fdi:3.1, literacy:72.8, hdi:0.669, msmUnits:3.8, itRev:2.4,
    ownTaxRev:0.98, fiscalDeficit:3.1, debtGsdp:23.5, mfrShare:12 },
  kl: { name:'Kerala', abbr:'KL', rank:9, gsdp:10.98, gsdpGrowth:6.8, perCapita:2.86, pop:3.56,
    exports:9.2, fdi:0.4, literacy:96.2, hdi:0.779, msmUnits:2.5, itRev:0.6,
    ownTaxRev:0.72, fiscalDeficit:3.8, debtGsdp:38.5, mfrShare:8 },
  ap: { name:'Andhra Pradesh', abbr:'AP', rank:7, gsdp:14.24, gsdpGrowth:8.5, perCapita:2.44, pop:5.27,
    exports:12.8, fdi:1.8, literacy:67.7, hdi:0.650, msmUnits:5.1, itRev:0.5,
    ownTaxRev:0.68, fiscalDeficit:3.4, debtGsdp:31.2, mfrShare:11 }
};

/* What MH/KA do that TN can learn from */
var GAP_ANALYSIS = [
  { area:'IT/GCC Concentration', leader:'KA', leaderVal:'\u20b95.6L Cr (Bengaluru)', tnVal:'\u20b92.8L Cr',
    gap:'KA has 2x IT revenue. TN lacks a second tech hub — Coimbatore/Madurai could be developed with Tier-II IT parks, better flight connectivity, and GCC incentives.',
    opportunity:'Attract 50+ new GCCs by offering 20% cost advantage over Bengaluru. Coimbatore already has PSG, Amrita talent pool. Estimated potential: \u20b91.2L Cr additional IT revenue by FY28.' },
  { area:'Export Value', leader:'GJ', leaderVal:'$65.3B', tnVal:'$33.8B',
    gap:'Gujarat exports 2x TN. Key diff: Chemicals/Petrochemicals (Reliance Jamnagar), Gems & Jewellery (Surat), and a massive port ecosystem (Mundra, Kandla). TN lacks a dedicated chemical/petrochem corridor.',
    opportunity:'SIPCOT Cuddalore + Nagapattinam can host petrochem cluster. TN has existing refinery (CPCL Chennai, Narimanam). Gap: \u20b92L Cr in chemical exports.' },
  { area:'FDI Share', leader:'MH', leaderVal:'$11.2B', tnVal:'$4.2B',
    gap:'MH gets 2.5x FDI due to financial services (Mumbai) + pharma cluster (Pune). TN lacks a financial centre and has lower pharma presence.',
    opportunity:'GIFT City equivalent in Chennai (IFSC), Pharma cluster in Hosur/Krishnagiri (proximity to Bengaluru pharma). Potential: $2B additional FDI/year.' },
  { area:'Fiscal Health', leader:'GJ', leaderVal:'Debt/GSDP: 19.1%', tnVal:'25.1%',
    gap:'TN debt/GSDP is manageable but rising. Freebies culture adds \u20b920-30K Cr/year. GJ keeps lower debt by limiting welfare spending and prioritising industrial incentives.',
    opportunity:'Performance-linked welfare (conditionality) + asset monetization of surplus PSU land (\u20b92-3L Cr potential). Aim: reduce debt/GSDP to 22% by FY28.' },
  { area:'Logistics/Port', leader:'GJ', leaderVal:'3 major + 40 minor ports', tnVal:'3 major + 15 minor',
    gap:'Gujarat handles 40% of India cargo. Mundra is India\'s largest private port. TN\'s Ennore (Kamarajar) is underutilised. Tuticorin expansion is slow.',
    opportunity:'Outer harbour at Ennore for transshipment (competing with Colombo). Dedicated freight corridor link to Chennai Port. Potential: save \u20b94,000 Cr/year in transshipment cost.' },
  { area:'Per Capita Income', leader:'TS', leaderVal:'\u20b93.48L', tnVal:'\u20b93.27L',
    gap:'Telangana has surpassed TN in per-capita income driven by IT/Pharma/Services in Hyderabad. TN\'s rural economy drags the average down despite strong industrial base.',
    opportunity:'Rural agri-processing + value-added exports from districts. Eg: Turmeric processing (Erode), Cashew processing (Cuddalore), Banana chips (Theni). Target: \u20b90.5L per-capita uplift by FY28.' }
];

/* ═══════════════════════════════════════════════════════════
   COUNTRY COMPARISON DATA
   Source: World Bank, IMF WEO, UNCTAD, WTO
   TN GSDP at current exchange (1 USD = ~83 INR)
   ═══════════════════════════════════════════════════════════ */
var COUNTRY_COMPARISON = [
  { country:'Tamil Nadu (state)', gdp:337, gdpGrowth:9.8, pop:79.1, perCapita:4260, exports:33.8,
    fdiStock:28, mfrPct:21, literacy:82.9, hdi:0.708, flag:'\ud83c\uddee\ud83c\uddf3',
    note:'If TN were a country, its GDP ($337B) would rank ~35th globally, between Colombia and the Philippines.' },
  { country:'Vietnam', gdp:430, gdpGrowth:6.5, pop:100, perCapita:4300, exports:371,
    fdiStock:220, mfrPct:25, literacy:95.8, hdi:0.726, flag:'\ud83c\uddfb\ud83c\uddf3',
    note:'Vietnam\'s export machine ($371B) dwarfs TN. Key: FTAs with EU/CPTPP, cheap labor, Samsung/Apple supply chains. TN can compete on auto/textile but needs better FTAs.' },
  { country:'Thailand', gdp:512, gdpGrowth:3.2, pop:72, perCapita:7100, exports:287,
    fdiStock:280, mfrPct:27, literacy:94.1, hdi:0.800, flag:'\ud83c\uddf9\ud83c\udded',
    note:'Thailand\'s auto hub (Eastern Economic Corridor) is a model for Chennai corridor. TN has similar auto density but lower per-capita due to larger population.' },
  { country:'Malaysia', gdp:407, gdpGrowth:4.1, pop:34, perCapita:12000, exports:312,
    fdiStock:175, mfrPct:23, literacy:95.0, hdi:0.803, flag:'\ud83c\uddf2\ud83c\uddfe',
    note:'Malaysia\'s semiconductor + palm oil + petroleum create 3-pillar economy. TN can replicate with auto+textile+IT as 3 pillars. Key gap: semiconductor fab — TN should bid aggressively.' },
  { country:'Poland', gdp:748, gdpGrowth:3.5, pop:38, perCapita:19700, exports:390,
    fdiStock:260, mfrPct:20, literacy:99.8, hdi:0.876, flag:'\ud83c\uddf5\ud83c\uddf1',
    note:'Poland transformed post-EU with nearshoring. TN can be India\'s Poland — the nearshore hub for MNCs needing India exposure. Special Economic Corridors along NH connectivity.' },
  { country:'Bangladesh', gdp:460, gdpGrowth:5.8, pop:170, perCapita:2700, exports:56,
    fdiStock:20, mfrPct:29, literacy:74.7, hdi:0.661, flag:'\ud83c\udde7\ud83c\udde9',
    note:'Bangladesh dominates RMG ($47B garment exports). TN (Tiruppur) does \u20b940K Cr. Opportunity: if TN targets technical textiles + brand partnerships, can 3x textile exports.' },
  { country:'Ireland', gdp:530, gdpGrowth:5.9, pop:5.1, perCapita:104000, exports:420,
    fdiStock:1300, mfrPct:38, literacy:99.0, hdi:0.945, flag:'\ud83c\uddee\ud83c\uddea',
    note:'Ireland\'s pharma/tech hub strategy: low corporate tax + English + talent. TN has English literacy + talent. Chennai IFSC + competitive tax zone could replicate at smaller scale.' }
];

/* ═══════════════════════════════════════════════════════════
   RESOURCE → BY-PRODUCT VALUE CHAINS
   Source: IBM (Indian Bureau of Mines), TN DGM, MSME cluster data
   ═══════════════════════════════════════════════════════════ */
var RESOURCE_CHAINS = [
  { resource:'Granite / Black Galaxy Stone', districts:['Krishnagiri','Dharmapuri','Madurai'],
    rawValue:'\u20b9800/sq.ft (raw block)', processedValue:'\u20b93,500-12,000/sq.ft (polished slab/tile)',
    multiplier:'4-15x', chain:[
      {step:'Quarrying',investment:'\u20b92-5 Cr',output:'Raw granite blocks',jobs:50},
      {step:'Cutting & Sizing',investment:'\u20b91-3 Cr',output:'Slabs (gangsaw)',jobs:30},
      {step:'Polishing',investment:'\u20b90.5-1 Cr',output:'Mirror-finish tiles/slabs',jobs:25},
      {step:'Edge Profiling & CNC',investment:'\u20b91-2 Cr',output:'Countertops, monuments',jobs:20},
      {step:'Export Packaging',investment:'\u20b920-50L',output:'Containerised for US/EU market',jobs:10}
    ], exportPotential:'$2.1B (India\'s granite export). TN share: 35%. Top buyers: USA, UK, UAE, Japan.',
    license:'Mining lease (DGM) + Pollution clearance (TNPCB) + DGFT IEC for export',
    targetAudience:'US construction firms, European architects, Middle East luxury projects' },
  { resource:'Ilmenite / Garnet (Beach Sand Minerals)', districts:['Tuticorin','Tirunelveli','Kanyakumari'],
    rawValue:'\u20b94,000/ton (raw sand)', processedValue:'\u20b960,000-2,00,000/ton (TiO2 pigment)',
    multiplier:'15-50x', chain:[
      {step:'Dredging & Separation',investment:'\u20b910-20 Cr',output:'Ilmenite, rutile, zircon, garnet',jobs:100},
      {step:'Ilmenite→Synthetic Rutile',investment:'\u20b950-100 Cr',output:'Upgraded feedstock (92% TiO2)',jobs:60},
      {step:'Rutile→TiO2 Pigment',investment:'\u20b9500-1,000 Cr',output:'Titanium dioxide (paint/plastics)',jobs:200},
      {step:'Garnet→Abrasives',investment:'\u20b95-10 Cr',output:'Waterjet cutting abrasive, sandblasting',jobs:40},
      {step:'Zircon→Ceramics',investment:'\u20b910-30 Cr',output:'Advanced ceramics, refractories',jobs:50}
    ], exportPotential:'$800M globally for TiO2. India produces 8% of world ilmenite. TN has 70% of India\'s beach sand mineral reserves.',
    license:'Atomic mineral license (Dept of Atomic Energy) + TNPCB + IBM registration',
    targetAudience:'Paint manufacturers (Asian Paints, AkzoNobel), ceramics industry, aerospace (zirconia)' },
  { resource:'Limestone / Calcium Carbonate', districts:['Ariyalur','Perambalur','Tirunelveli','Salem'],
    rawValue:'\u20b9500/ton (raw limestone)', processedValue:'\u20b94,000-15,000/ton (precipitated CaCO3)',
    multiplier:'8-30x', chain:[
      {step:'Quarrying',investment:'\u20b91-3 Cr',output:'Raw limestone lumps',jobs:40},
      {step:'Calcination (Kiln)',investment:'\u20b93-5 Cr',output:'Quick lime (CaO) → Cement, steel flux',jobs:30},
      {step:'Hydration',investment:'\u20b90.5-1 Cr',output:'Hydrated lime (water treatment, construction)',jobs:15},
      {step:'Precipitation (PCC)',investment:'\u20b95-15 Cr',output:'PCC for paper, paint, pharma, toothpaste',jobs:40},
      {step:'Nano CaCO3',investment:'\u20b910-20 Cr',output:'Nano-calcium for pharma, polymer industry',jobs:25}
    ], exportPotential:'\u20b94,000 Cr domestic market. Export: $500M (precipitated CaCO3). TN has Ariyalur cement belt.',
    license:'Mining lease (DGM TN) + TNPCB consent + BIS for pharma-grade CaCO3',
    targetAudience:'Cement companies, paper mills, pharma (Cipla, Dr Reddy\'s), paint (Asian Paints)' },
  { resource:'Cotton → Textile Value Chain', districts:['Tiruppur','Coimbatore','Dindigul','Salem','Erode'],
    rawValue:'\u20b960/kg (raw cotton)', processedValue:'\u20b91,200-3,000/kg (finished garment)',
    multiplier:'20-50x', chain:[
      {step:'Ginning',investment:'\u20b91-2 Cr',output:'Lint cotton (fibre separated from seed)',jobs:30},
      {step:'Spinning',investment:'\u20b910-30 Cr',output:'Yarn (count 20s-80s)',jobs:200},
      {step:'Weaving/Knitting',investment:'\u20b92-10 Cr',output:'Grey fabric (knitted/woven)',jobs:100},
      {step:'Dyeing & Processing',investment:'\u20b95-15 Cr',output:'Finished fabric (dyed, printed, mercerised)',jobs:80},
      {step:'Cutting & Stitching (CMT)',investment:'\u20b90.5-3 Cr',output:'T-shirts, polo shirts, dresses',jobs:300},
      {step:'Branding & Export',investment:'\u20b91-5 Cr',output:'Branded/private-label garments for H&M, Zara, Walmart',jobs:50}
    ], exportPotential:'Tiruppur alone exports \u20b935,000 Cr/year. India textile: $44B. TN share: 22%. Growth area: technical textiles (medical, geo, agro-tex).',
    license:'FSSAI (if textile touches food), AEPC RCMC, Oeko-Tex (buyer requirement), GOTS (organic)',
    targetAudience:'H&M, Zara, Walmart, Primark, Nike/Adidas (sportswear), medical textile buyers (3M, Medline)' },
  { resource:'Coconut → Multi-Product Chain', districts:['Coimbatore','Tiruppur','Pollachi','Thanjavur','Kanyakumari'],
    rawValue:'\u20b925/coconut', processedValue:'\u20b9200-500/coconut equivalent (all products)',
    multiplier:'8-20x', chain:[
      {step:'Copra Drying',investment:'\u20b910-30L',output:'Dried copra for oil extraction',jobs:10},
      {step:'Oil Extraction',investment:'\u20b950L-2 Cr',output:'Virgin coconut oil (VCO), cooking oil',jobs:20},
      {step:'Coir Processing',investment:'\u20b920-50L',output:'Coir rope, mats, grow bags, geotextiles',jobs:40},
      {step:'Shell→Activated Carbon',investment:'\u20b91-5 Cr',output:'Activated carbon (water filters, pharma, gold recovery)',jobs:30},
      {step:'Coconut Water Packaging',investment:'\u20b92-5 Cr',output:'Packaged tender coconut water (Tetra Pak)',jobs:25},
      {step:'Coconut Cream/Milk',investment:'\u20b91-3 Cr',output:'Canned coconut milk for export (vegan market)',jobs:20}
    ], exportPotential:'India coconut: \u20b925,000 Cr. TN is #3 producer. Activated carbon: $800M global. VCO: $4B global market growing 10%/year.',
    license:'FSSAI (food products) + APEDA RCMC (agri export) + Organic cert (NPOP/USDA)',
    targetAudience:'Health food stores (Whole Foods, Holland & Barrett), pharma (activated carbon), cosmetics (Unilever, L\'Oréal)' },
  { resource:'Shrimp / Prawn Aquaculture', districts:['Nagapattinam','Ramanathapuram','Cuddalore','Tuticorin'],
    rawValue:'\u20b9200/kg (farm gate)', processedValue:'\u20b9800-1,500/kg (IQF export)',
    multiplier:'4-7x', chain:[
      {step:'Hatchery (SPF Broodstock)',investment:'\u20b92-5 Cr',output:'Post-larvae (PL) for farms',jobs:20},
      {step:'Grow-out Farm (Vannamei)',investment:'\u20b91-3 Cr/hectare',output:'Harvested shrimp (30-40 count)',jobs:15},
      {step:'Processing (HACCP plant)',investment:'\u20b910-30 Cr',output:'Peeled, deveined, IQF shrimp',jobs:200},
      {step:'Value-Added (Breaded/Marinated)',investment:'\u20b95-10 Cr',output:'Ready-to-cook products',jobs:50},
      {step:'Export (Cold chain)',investment:'\u20b92-5 Cr',output:'Air-freight/reefer to US/EU/Japan',jobs:30}
    ], exportPotential:'India: $7.2B seafood export. TN share: 8% (\u20b94,800 Cr). Andhra leads with 65%. TN can double with Vannamei expansion in Palk Bay.',
    license:'CAA (Coastal Aquaculture Authority) + MPEDA RCMC + EU-approved processing plant + FSSAI',
    targetAudience:'US importers (Red Lobster, Sysco), EU retailers (Tesco, Carrefour), Japanese sushi chains' }
];

/* ═══════════════════════════════════════════════════════════
   CRISIS RESILIENCE DATA
   Source: RBI, CSO, TN DES, NDMA, industry reports
   ═══════════════════════════════════════════════════════════ */
var CRISIS_RESILIENCE = {
  diversificationStrength: {
    title:'Decentralised Industrial Structure',
    summary:'TN\'s economy is spread across 15+ sectors and 38 districts. No single industry >21% of GSDP. This is why TN recovered from 2008 global crisis, 2015 Chennai floods, and COVID-19 faster than concentrated economies.',
    sectors:[
      {name:'Auto & Components',share:7.2,hub:'Chennai-Hosur corridor'},
      {name:'Textiles & Garments',share:5.8,hub:'Tiruppur-Coimbatore-Salem'},
      {name:'IT/ITES/BPO',share:8.5,hub:'Chennai-OMR, Coimbatore'},
      {name:'Heavy Engineering',share:3.2,hub:'Trichy-Chennai'},
      {name:'Pharma & Medical Devices',share:2.1,hub:'Chennai, Hosur'},
      {name:'Food Processing',share:3.8,hub:'Thanjavur, Krishnagiri, Theni'},
      {name:'Leather & Footwear',share:2.4,hub:'Ambur, Vaniyambadi, Ranipet'},
      {name:'Chemicals & Fertilisers',share:2.8,hub:'Cuddalore, Manali'},
      {name:'Cement & Minerals',share:1.9,hub:'Ariyalur, Salem, Karur'},
      {name:'Agriculture & Allied',share:12.5,hub:'Delta, Western TN'},
      {name:'Construction & Real Estate',share:8.2,hub:'State-wide'},
      {name:'Banking & Financial Services',share:5.4,hub:'Chennai'},
      {name:'Tourism & Hospitality',share:2.8,hub:'Chennai, Madurai, Ooty, Rameswaram'},
      {name:'Marine & Fisheries',share:1.2,hub:'Coastal districts'},
      {name:'Renewable Energy',share:1.5,hub:'Tirunelveli, Kanyakumari, Ramanathapuram'}
    ]
  },
  crisisPlaybook:[
    { crisis:'Flood / Cyclone (Chennai 2015, Gaja 2018, Michaung 2023)',
      impact:'Supply chain disruption 2-4 weeks, \u20b925,000-50,000 Cr damage, 500K+ people displaced',
      recovery:'TN recovered 85% industrial output within 45 days (2015). Key: MSME distributed model — factories in Tiruppur/Coimbatore continued while Chennai was hit.',
      essentials:'1. Emergency fund (3 months opex), 2. Inventory buffer (2 weeks raw material), 3. Cloud backups of all business data, 4. Insurance (commercial + flood rider), 5. Alternate supplier list from non-flood-zone districts',
      citizenAction:'Keep \u20b950K emergency cash + essential documents in waterproof container. Register on TNSDMA app. Know your ward\'s evacuation route.' },
    { crisis:'Pandemic (COVID-19, 2020-21)',
      impact:'GDP contraction 8.2% in Q1-FY21. Auto sector: -40%, Textiles: -30%, IT: +15% (WFH). 12L MSME jobs at risk.',
      recovery:'TN was among first states to restart industrial ops (May 2020 SOP). IT sector grew throughout. \u20b912,000 Cr relief package. Full recovery by Q3-FY22.',
      essentials:'1. Digital presence (website/e-commerce), 2. WFH infrastructure, 3. Diversified client base (not single-buyer dependent), 4. Government scheme awareness (ECLGS loans), 5. Health insurance for workforce',
      citizenAction:'Build 6-month emergency fund. Learn digital skills. Keep health insurance active. Have a remote-work backup plan for your role.' },
    { crisis:'Global Recession / Export Shock (2008-09)',
      impact:'TN exports dipped 18%. Auto sector orders from US/EU fell 25%. IT hiring frozen for 2 quarters.',
      recovery:'Domestic market absorption + government spending sustained demand. TN diversified export markets (added Africa, ASEAN). Recovery in 14 months.',
      essentials:'1. Domestic + export revenue mix (don\'t be 100% export), 2. Multiple market exposure (US + EU + ASEAN + Africa), 3. Cost flexibility (contract labour for surge capacity), 4. Working capital line pre-approved with bank',
      citizenAction:'Don\'t put all savings in one asset class. Have domestic business revenue stream. Build skills that are recession-proof (healthcare, essential services).' },
    { crisis:'Single-Industry Collapse (What-if: Auto EV Transition)',
      impact:'If ICE (internal combustion) demand drops 50% by 2030, 2.5L direct jobs and 8L indirect jobs at risk in TN auto corridor.',
      recovery:'TN\'s advantage: already attracting EV players (Ola, Ather, TVS iQube, Hyundai EV). \u20b950,000 Cr EV investments committed. Reskilling 1L workers via Naan Mudhalvan.',
      essentials:'1. Reskill into EV components (battery, motor, BMS), 2. Diversify into non-auto sectors, 3. EV ancillary investment (charging infra, battery recycling), 4. Government: accelerate EV policy benefits',
      citizenAction:'If in auto sector: learn EV technology, battery management, power electronics. These skills will be in demand. Start upskilling now, not when the transition hits.' }
  ]
};

/* ═══════════════════════════════════════════════════════════
   TN ACHIEVEMENTS TIMELINE (2004-2026)
   Source: TN DES, Budget documents, media archives
   ═══════════════════════════════════════════════════════════ */
var TN_ACHIEVEMENTS = [
  { year:2004, title:'First State to launch Right to Food (Noon Meal Scheme expansion)',
    detail:'Expanded mid-day meal to cover 69L students across all government schools. Reduced child malnutrition by 12% in 5 years.',
    metric:{ label:'Students Fed Daily', value:'69,00,000' }},
  { year:2006, title:'Tidel Park Phase II + IT Corridor OMR',
    detail:'Established India\'s second-largest IT park. OMR (Old Mahabalipuram Road) IT corridor attracted TCS, CTS, Wipro, Infosys campuses.',
    metric:{ label:'IT Jobs Created', value:'4,50,000+' }},
  { year:2008, title:'Hyundai Chennai becomes largest export hub',
    detail:'Hyundai\'s Sriperumbudur plant exported its 10 lakh car. Chennai became India\'s auto export capital.',
    metric:{ label:'Cars Exported', value:'10,00,000' }},
  { year:2010, title:'CMCHIS (Chief Minister\'s Comprehensive Health Insurance Scheme)',
    detail:'Free health insurance covering surgeries for families earning <\u20b972,000/year. Later expanded as Makkalai Thedi Maruthuvam.',
    metric:{ label:'Families Covered', value:'1,57,00,000' }},
  { year:2011, title:'Free laptop scheme for students',
    detail:'First state to distribute free laptops to all 11th/12th standard students. 54L laptops distributed in Phase 1.',
    metric:{ label:'Laptops Distributed', value:'54,00,000' }},
  { year:2013, title:'Renewable energy leadership',
    detail:'TN crossed 7,000 MW wind energy capacity — highest in India. Muppandal wind farm (Tirunelveli) is Asia\'s largest onshore wind farm.',
    metric:{ label:'Wind Capacity', value:'7,154 MW' }},
  { year:2014, title:'Chennai Metro Phase I operational',
    detail:'First underground metro in South India. 45 km Phase I connecting Wimco Nagar to Airport.',
    metric:{ label:'Daily Ridership', value:'1,20,000' }},
  { year:2015, title:'Amma Two-Wheeler Scheme',
    detail:'50% subsidy on scooters for working women. 2.75L scooters distributed. Increased women workforce participation in TN.',
    metric:{ label:'Scooters Given', value:'2,75,000' }},
  { year:2017, title:'GST implementation — TN adapts first',
    detail:'TN was among first states to align with GST. Revenue-neutral transition. Established SGST helpline for MSMEs.',
    metric:{ label:'GST Registered Businesses', value:'8,50,000+' }},
  { year:2019, title:'Global Investors Meet (GIM 2019)',
    detail:'304 MoUs signed worth \u20b93.03L Cr. FDI commitments from Foxconn, Pegatron, Dell, BMW.',
    metric:{ label:'Investment MoUs', value:'\u20b93,03,000 Cr' }},
  { year:2020, title:'COVID-19 response — Model state',
    detail:'First state to implement containment zones, mass testing, and doorstep ration delivery. Kept CFR below 1.3%.',
    metric:{ label:'Tests Conducted', value:'3,50,00,000+' }},
  { year:2021, title:'Naan Mudhalvan skill platform launch',
    detail:'Industry-linked skilling for 5L+ youth/year. Partnerships with TCS, Infosys, Google, Microsoft for certification.',
    metric:{ label:'Youth Skilled/Year', value:'5,00,000+' }},
  { year:2022, title:'Foxconn iPhone manufacturing at Sriperumbudur',
    detail:'Apple\'s supply chain diversification to TN. Foxconn, Pegatron, Salcomp. \u20b947,000 Cr investment. 50,000+ direct jobs.',
    metric:{ label:'Investment', value:'\u20b947,000 Cr' }},
  { year:2023, title:'Semiconductor MoU — TN in Fab race',
    detail:'MoU with Tata Electronics for OSAT (Outsourced Semiconductor Assembly and Test) facility. TN positioning for India Semiconductor Mission.',
    metric:{ label:'Proposed Investment', value:'\u20b98,000 Cr' }},
  { year:2024, title:'GIM 2024 — Record \u20b96.64L Cr',
    detail:'Largest-ever investment meet. 59,000+ MoUs including Hyundai EV, Ola Gigafactory, and data centre clusters.',
    metric:{ label:'MoU Value', value:'\u20b96,64,000 Cr' }},
  { year:2025, title:'EV ecosystem acceleration',
    detail:'Ola Futurefactory (Krishnagiri), TVS iQube expansion, Hyundai Creta EV. TN targets 50,000 EV jobs by 2026.',
    metric:{ label:'EV Jobs Target', value:'50,000' }},
  { year:2026, title:'TN GSDP crosses \u20b930L Cr milestone (projected)',
    detail:'If 10% growth sustains, TN GSDP will cross \u20b930L Cr, solidifying rank as India\'s 2nd largest economy.',
    metric:{ label:'GSDP (Projected)', value:'\u20b930,00,000 Cr' }}
];

/* ═══════════════════════════════════════════════════════════
   BUSINESS GAP & OPPORTUNITY MATRIX
   Where TN has under-penetration vs demand
   ═══════════════════════════════════════════════════════════ */
var BUSINESS_GAPS = [
  { sector:'Cold Chain & Logistics', currentCoverage:'35%', nationalDemand:'\u20b950,000 Cr',
    gap:'65% of TN\'s agri produce lacks cold chain. 30% wastage in fruits/vegetables.',
    opportunity:'Build 200 cold storage units across delta + western TN. Solar-powered (subsidy available under MIDH). \u20b92-5 Cr per unit. ROI: 18-22% with NABARD financing.',
    steps:['Get NABARD project report template','Apply for MIDH subsidy (35-55%)','Identify mandis with >500 ton/day throughput','Partner with FPOs for guaranteed utilisation','Connect to Zomato/BigBasket for last-mile'] },
  { sector:'EV Charging Infrastructure', currentCoverage:'12%', nationalDemand:'\u20b920,000 Cr',
    gap:'TN has 1,200 charging stations vs 15,000 needed by 2027. Highway coverage is <5%.',
    opportunity:'Fast-charging stations on NH44, NH48, NH45. \u20b930-80L per station. Government subsidy: 25% under FAME-III. Land available at TNEB substations.',
    steps:['Apply for TNEB open-access connection','Register as EVSE provider with BEE','Install CCS2 + CHAdeMO chargers','Partner with Tata Power/Ather Grid for network','Target 15-20% ROI via per-kWh pricing'] },
  { sector:'Waste-to-Value Processing', currentCoverage:'18%', nationalDemand:'\u20b935,000 Cr',
    gap:'TN generates 15,000 ton/day solid waste. Only 18% is processed. E-waste: 1,500 ton/year from IT corridor.',
    opportunity:'Biogas from wet waste (\u20b92-5 Cr plant, 2 MW output). Plastic recycling (pyrolysis oil). E-waste precious metal recovery (gold, silver, palladium). Tyre recycling (carbon black).',
    steps:['Survey corporation waste data via TNPCB','Get CPCB authorisation for e-waste/hazardous','Apply for Swachh Bharat mission grant','Set up MRF (Material Recovery Facility)','Sell outputs: biogas to TANGEDCO, rPET to brand owners'] },
  { sector:'Healthcare Diagnostics (Tier-2/3)', currentCoverage:'28%', nationalDemand:'\u20b91,20,000 Cr',
    gap:'Advanced diagnostics (MRI, CT, molecular testing) available only in Chennai, Coimbatore, Madurai. 25 districts have zero MRI.',
    opportunity:'Mobile diagnostic units or mini-labs in district HQs. NABL accreditation. Tele-radiology with AI. \u20b91-3 Cr per setup. Tie up with government insurance (CMCHIS).',
    steps:['Get NABL accreditation (6-12 months)','Register on CMCHIS empanelment portal','Invest in refurbished MRI/CT (50-70% cheaper)','Set up tele-radiology hub in Chennai','Partner with PHCs for sample collection'] },
  { sector:'Data Centres', currentCoverage:'15%', nationalDemand:'\u20b91,50,000 Cr',
    gap:'India needs 2,000 MW data centre capacity by 2028. TN has ~150 MW (Chennai). Hyderabad/Mumbai lead.',
    opportunity:'TN has submarine cable landing (Chennai), stable power, cool climate in Nilgiris for cooling. ELCOT offering land at \u20b920L/acre.',
    steps:['Apply for TN Data Centre Policy incentives','Acquire 5-10 acre ELCOT land','Get TNEB dedicated feeder (20+ MW)','Obtain Uptime Institute Tier-III certification','Target enterprise/cloud customers (AWS, Azure overflow)'] },
  { sector:'Agri-Tech & Precision Farming', currentCoverage:'8%', nationalDemand:'\u20b975,000 Cr',
    gap:'Only 8% of TN farms use any technology (drones, soil sensors, satellite data). Average farm: 0.8 hectare.',
    opportunity:'FPO-based model: 1 agri-tech unit serves 500 farmers. Drone spraying (\u20b9400/acre vs \u20b91,200 manual). IoT soil monitoring. AI crop advisory.',
    steps:['Register as drone service provider (DGCA)','Partner with 5+ FPOs in one district','Get TNAU (agricultural university) technical tie-up','Apply for AIF (Agri Infrastructure Fund) financing','Scale via SaaS model: \u20b9500/acre/season subscription'] }
];

/* INR Formatter — converts numbers to Indian notation */
function formatINR(num, decimals) {
  if (typeof decimals === 'undefined') decimals = 0;
  if (num >= 10000000) return '\u20b9' + (num / 10000000).toFixed(decimals) + ' Cr';
  if (num >= 100000) return '\u20b9' + (num / 100000).toFixed(decimals) + ' L';
  if (num >= 1000) return '\u20b9' + (num / 1000).toFixed(decimals) + 'K';
  return '\u20b9' + num.toFixed(decimals);
}

/* Indian number formatting with commas: 1,23,45,678 */
function indianCommas(n) {
  var s = Math.round(n).toString();
  if (s.length <= 3) return s;
  var last3 = s.slice(-3);
  var rest = s.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
}

window.StateComparisonData = {
  STATE_COMPARISON: STATE_COMPARISON,
  GAP_ANALYSIS: GAP_ANALYSIS,
  COUNTRY_COMPARISON: COUNTRY_COMPARISON,
  RESOURCE_CHAINS: RESOURCE_CHAINS,
  CRISIS_RESILIENCE: CRISIS_RESILIENCE,
  TN_ACHIEVEMENTS: TN_ACHIEVEMENTS,
  BUSINESS_GAPS: BUSINESS_GAPS,
  formatINR: formatINR,
  indianCommas: indianCommas
};

})();
