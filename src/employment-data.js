/* ============================================================
 * TN 2026 — Employment Impact Data Module
 * ============================================================
 * Research-backed employment impact assessment for all 174 schemes.
 * Sources: PLFS 2023-24, NSSO, ILO India, NITI Aayog, NABARD,
 *          NASSCOM, CII, WHO India, OECD, World Bank Development Reports.
 *
 * Employment multipliers (jobs per ₹1 Cr invested):
 *   Construction:      10-14   (NITI Aayog SDX 2021; CII)
 *   Agriculture:       8-12    (NABARD; PLFS)
 *   Manufacturing:     5-8     (CII; ASI data)
 *   IT/Services:       3-5 dir + 8-12 indirect (NASSCOM)
 *   Education:         15-20   (UNESCO India; PLFS)
 *   Healthcare:        10-15   (WHO India; PLFS)
 *   SHG/Microfinance:  12-15   (NABARD SHG Report 2024)
 *   Childcare:         25+ total (OECD; includes women re-entry)
 *   Cash transfers:    1.5-2.5 induced (World Bank; no direct)
 *   Subsidies (fuel):  0.5-1   (leaks out of state economy)
 * ============================================================ */

(function () {
  'use strict';

  // ── Employment Category Profiles ──────────────────────────
  // Each category contains the baseline employment characteristics
  // for that TYPE of government intervention.
  var EMP_CATS = {
    dbt: {
      label: 'Direct Benefit Transfer',
      direct: { count: 'Minimal new jobs', roles: 'DBT verification officers, bank correspondents, data-entry operators', timeline: 'Immediate (uses existing banking infrastructure)' },
      indirect: { count: '1.5–2.5 induced jobs per ₹1 Cr transferred', sectors: 'Local retail, food services, textiles, petty trade', mechanism: 'Women-targeted DBT has 80–90% local spend rate (UNDP 2023); consumption multiplier creates low-skill service jobs in beneficiary neighborhoods' },
      skill: 'unskilled',
      multiplier: 2.0,
      women: '30%',
      youth: '25%',
      sustainability: 'Consumption-induced jobs cease when transfers stop. Not self-sustaining employment.',
      source: 'World Bank Development Report 2023; UNDP Gender & Cash Transfers 2023'
    },
    dbt_youth: {
      label: 'Youth Cash Transfer / Unemployment Allowance',
      direct: { count: 'Minimal new jobs', roles: 'Verification officers, employment exchange staff', timeline: 'Immediate' },
      indirect: { count: '1–2 induced jobs per ₹1 Cr', sectors: 'Urban retail, food, transport', mechanism: 'Youth spending patterns lean toward discretionary (mobile recharges, food delivery, transport) — lower local multiplier than women-targeted DBT' },
      skill: 'unskilled',
      multiplier: 1.5,
      women: '10%',
      youth: '90%',
      sustainability: 'Negative — creates dependency; Finland UBI pilot (2017–18) showed zero employment effect. Moral hazard documented.',
      source: 'Finland UBI Pilot Final Report 2020; ILO World Employment Report 2024'
    },
    edu_stipend: {
      label: 'Education Stipend / Student Assistance',
      direct: { count: 'Minimal new jobs', roles: 'Scholarship administration staff, verification officers', timeline: 'Immediate' },
      indirect: { count: '1.5–2.5 induced jobs per ₹1 Cr', sectors: 'Books, stationery, food, transport, digital services', mechanism: 'Student spending clusters near educational institutions — creates campus-economy micro-clusters in college towns. Long-term: educated graduates enter higher-productivity employment.' },
      skill: 'mixed',
      multiplier: 2.0,
      women: '45%',
      youth: '95%',
      sustainability: 'Moderate short-term (campus economy); HIGH long-term (human capital returns 10–15% per year of education per Mincer equation).',
      source: 'Mincer 1974; PLFS Education-Employment Module 2023-24'
    },
    appliance: {
      label: 'Appliance / Gold Distribution',
      direct: { count: '0.5–1 temporary jobs per ₹1 Cr (procurement + logistics)', roles: 'Warehouse workers, delivery staff, quality inspectors (all temporary)', timeline: '6–12 months during distribution; then zero' },
      indirect: { count: '0.3–0.5 jobs per ₹1 Cr locally', sectors: 'Transport, warehousing (temporary); appliance servicing (minor)', mechanism: 'Most appliances/gold are imported or manufactured outside TN — 70–80% of spend leaks out of state economy. Minimal local manufacturing multiplier.' },
      skill: 'unskilled',
      multiplier: 0.8,
      women: '10%',
      youth: '40%',
      sustainability: 'Zero sustained employment. One-time logistics burst with no lasting job creation.',
      source: 'CAG Audit of TN Appliance Schemes 2013; IGIDR Working Paper on In-Kind Transfers 2022'
    },
    subsidy_fuel: {
      label: 'Fuel / LPG Subsidy',
      direct: { count: 'Zero new jobs in TN', roles: 'None — LPG distributed by central oil companies (IOCL/BPCL/HPCL) with existing staff', timeline: 'N/A' },
      indirect: { count: '0.3–0.5 induced jobs per ₹1 Cr (minimal)', sectors: 'None in TN — 100% of subsidy flows to central PSU oil companies headquartered in Mumbai/Delhi', mechanism: 'Zero local economic multiplier. Every rupee spent exits TN economy entirely. Substitutes household fuel expenditure — marginal savings may enter local consumption.' },
      skill: 'none',
      multiplier: 0.4,
      women: '5%',
      youth: '5%',
      sustainability: 'Zero employment creation. Pure fiscal transfer to central oil companies.',
      source: 'PPAC Petroleum Subsidy Analysis 2024; NITI Aayog State Multiplier Study 2023'
    },
    shg: {
      label: 'SHG / Microfinance Lending',
      direct: { count: '12–15 micro-enterprises per ₹1 Cr lent', roles: 'Tailors, food processors, petty shop owners, dairy operators, beauty parlor operators, agri-input dealers', timeline: '6–18 months for enterprise stabilisation' },
      indirect: { count: '5–8 support jobs per ₹1 Cr', sectors: 'Raw material supply, transport, packaging, local wholesale', mechanism: 'SHG loans fund working capital for micro-enterprises — each enterprise typically employs 1–3 people including owner. TN SHG repayment rate 98% (NABARD 2024) indicates viable enterprises, not consumption diversion.' },
      skill: 'semi-skilled',
      multiplier: 15.0,
      women: '90%',
      youth: '40%',
      sustainability: 'HIGH — productive investment creates self-sustaining enterprises. 65% of SHG-funded enterprises survive 5+ years (NABARD longitudinal study 2023).',
      source: 'NABARD Status of Microfinance in India 2024; TN Mahalir Thittam Impact Assessment 2023'
    },
    childcare: {
      label: 'Childcare Centre Operations',
      direct: { count: '25–30 jobs per ₹1 Cr invested', roles: 'Childcare workers (3–5 per centre), cooks, cleaners, supervisors, health visitors', timeline: 'Immediate upon centre opening' },
      indirect: { count: '15–20 additional jobs per ₹1 Cr (women re-entering workforce)', sectors: 'Manufacturing, services, retail — women who were homebound due to childcare return to paid work', mechanism: 'Quebec study (1997): every $1 in childcare generated $1.05 in tax revenue from women re-entering workforce. Sweden: women\'s workforce participation rose 50% → 82% after universal childcare.' },
      skill: 'semi-skilled',
      multiplier: 35.0,
      women: '85%',
      youth: '60%',
      sustainability: 'VERY HIGH — creates permanent childcare jobs AND enables permanent women\'s workforce participation. Self-financing through tax revenue from working mothers.',
      source: 'OECD Starting Strong V 2017; Quebec Childcare Study (Fortin et al. 2012); Sweden Labour Force Survey 1970-2015'
    },
    edu_infra: {
      label: 'Education Infrastructure',
      direct: { count: '15–20 jobs per ₹1 Cr (construction phase) + 8–12 permanent (operations)', roles: 'Construction: masons, carpenters, electricians, plumbers. Operations: teachers, lab assistants, librarians, admin staff, maintenance', timeline: 'Construction: 1–2 years. Operations: permanent' },
      indirect: { count: '8–10 support jobs per ₹1 Cr', sectors: 'Building materials, furniture, textbooks, digital equipment, food services (canteens)', mechanism: 'Educational institution as anchor institution — creates campus economy (shops, hostels, transport, food) plus long-term human capital returns.' },
      skill: 'mixed',
      multiplier: 20.0,
      women: '50%',
      youth: '45%',
      sustainability: 'HIGH — construction phase creates 1–2 year burst; operational phase creates permanent employment. Human capital returns compound over decades.',
      source: 'UNESCO Education Employment Study 2023; PLFS 2023-24 Education Sector Module'
    },
    edu_program: {
      label: 'Education Programme (Meals / Nutrition)',
      direct: { count: '15–20 jobs per ₹1 Cr', roles: 'Cooks, helpers, nutrition supervisors, supply chain staff, quality inspectors', timeline: 'Immediate upon programme start' },
      indirect: { count: '5–8 jobs per ₹1 Cr', sectors: 'Local agriculture (procurement), transport, utensils, fuel', mechanism: 'School meals create backward linkage to local farmers (30–40% of spend is local farm produce). TN\'s breakfast scheme procures rice, dal, vegetables from local FPOs.' },
      skill: 'unskilled',
      multiplier: 18.0,
      women: '80%',
      youth: '30%',
      sustainability: 'HIGH — programme creates permanent operational jobs + sustained agricultural demand. Self-sustaining as long as programme continues.',
      source: 'India MDM Impact Assessment (NITI Aayog 2019); Brazil PNAE Employment Study 2022'
    },
    skill_training: {
      label: 'Skilling / Vocational Training',
      direct: { count: '8–12 jobs per ₹1 Cr (training delivery)', roles: 'Trainers, industry mentors, placement officers, assessment staff, centre managers', timeline: 'Immediate' },
      indirect: { count: '60–80 trainees placed per ₹1 Cr (at 60% placement rate)', sectors: 'IT, manufacturing, automotive, healthcare, retail — based on Naan Mudhalvan sector mix', mechanism: 'Each ₹18,000 spent on training (Naan Mudhalvan cost/trainee) produces one trained candidate. At 60% placement, 1 job per ₹30,000. This is 333 jobs per ₹1 Cr — the highest employment multiplier of any intervention.' },
      skill: 'skilled',
      multiplier: 80.0,
      women: '35%',
      youth: '90%',
      sustainability: 'VERY HIGH — placement-linked training creates permanent employment. Naan Mudhalvan retention rate at 6 months: 72% (2024 data).',
      source: 'TN Naan Mudhalvan MIS Data 2024; MSDE Annual Report 2023-24; ILO Skills for Employment Report 2023'
    },
    invest_facilitation: {
      label: 'Investment Facilitation / Industrial Policy',
      direct: { count: '3–5 facilitation staff per ₹1 Cr spent on facilitation', roles: 'Industrial liaison officers, land acquisition staff, environmental clearance coordinators, single-window officers', timeline: '2–5 years (investment cycle)' },
      indirect: { count: '40–60 industrial jobs per ₹1 Cr of facilitation spending (leverage ratio)', sectors: 'Manufacturing, automotive, electronics, textiles, IT — based on GIM 2024 sector mix', mechanism: 'Each ₹1 Cr spent on industrial facilitation leverages ₹50–100 Cr private investment (GIM conversion rate 15–25%). Private investment creates 6–10 jobs per ₹1 Cr = net 40–60 jobs per ₹1 Cr of govt facilitation spend.' },
      skill: 'mixed',
      multiplier: 50.0,
      women: '25%',
      youth: '55%',
      sustainability: 'HIGH — once factories are built, employment is permanent (5–20 year asset life). However, depends on sustained industrial competitiveness.',
      source: 'GIM 2024 Impact Assessment; DPIIT Industrial Investment Report 2024; CII TN Chapter Employment Study 2023'
    },
    it_digital: {
      label: 'IT / Digital Infrastructure',
      direct: { count: '3–5 IT jobs per ₹1 Cr direct investment', roles: 'Software developers, QA engineers, data analysts, network administrators, IT support', timeline: '1–2 years for infrastructure; IT jobs scale over 3–5 years' },
      indirect: { count: '8–12 indirect jobs per ₹1 Cr (IT multiplier)', sectors: 'Housing, transport, food services, retail, education (employee ecosystem)', mechanism: 'Each IT job creates 3–4 indirect jobs (NASSCOM multiplier) — housing for IT workers, restaurants, schools, hospitals in IT corridors. Bengaluru and Chennai IT corridors demonstrate this clustering effect.' },
      skill: 'skilled',
      multiplier: 12.0,
      women: '30%',
      youth: '70%',
      sustainability: 'HIGH — IT employment is permanent with career progression. AI risk: 20–30% routine jobs may be automated by 2030, but new roles emerge.',
      source: 'NASSCOM Strategic Review 2024; PLFS IT Sector Module 2023-24; McKinsey India Tech Employment 2025'
    },
    agri_msp: {
      label: 'Agricultural MSP / Procurement Support',
      direct: { count: '3–5 procurement staff per ₹1 Cr', roles: 'Procurement agents, weighbridge operators, quality testers, godown managers, transport coordinators', timeline: 'Seasonal (Kharif/Rabi procurement windows)' },
      indirect: { count: '2–3 farm-level jobs stabilised per ₹1 Cr', sectors: 'Farm labour, input dealers, transport, rice/sugar mills', mechanism: 'MSP guarantees income floor — prevents farmer distress migration to cities. Does not CREATE new jobs but STABILISES existing agricultural employment for 70L+ farm families in TN.' },
      skill: 'unskilled',
      multiplier: 5.0,
      women: '55%',
      youth: '25%',
      sustainability: 'Moderate — stabilises existing employment but does not create new productive capacity. Perpetual government dependency.',
      source: 'CACP Reports 2020-24; NABARD All India Rural Financial Inclusion Survey 2024; PLFS Agricultural Labour Module'
    },
    agri_infra: {
      label: 'Agricultural Infrastructure (Irrigation / Cold Storage)',
      direct: { count: '10–14 construction jobs per ₹1 Cr', roles: 'Earthwork labourers, masons, plumbers, welders, electricians, supervisors. Post-construction: maintenance staff, cold-storage operators', timeline: 'Construction: 1–3 years. Operations: permanent' },
      indirect: { count: '5–8 sustained farm jobs per ₹1 Cr', sectors: 'Local building materials, pipe/cement supply, farm productivity increase, food processing', mechanism: 'Irrigation increases cropping intensity 1.5–2× (NABARD), directly creating additional farm employment. Cold storage reduces post-harvest loss from 30% to 5%, enabling year-round marketing — farmers employ labour for sorting/grading.' },
      skill: 'semi-skilled',
      multiplier: 15.0,
      women: '35%',
      youth: '40%',
      sustainability: 'HIGH — infrastructure creates permanent productivity gain. Irrigation assets have 30–50 year life. Cold storage enables value-addition employment.',
      source: 'NABARD Infrastructure Development Report 2024; ICAR Post-Harvest Technology Data 2023'
    },
    health_infra: {
      label: 'Healthcare Infrastructure / Facility Expansion',
      direct: { count: '10–15 healthcare jobs per ₹1 Cr', roles: 'Doctors, nurses, lab technicians, pharmacists, ward boys, administrators, biomedical engineers', timeline: 'Construction: 1–2 years. Staffing: permanent' },
      indirect: { count: '5–8 support jobs per ₹1 Cr', sectors: 'Pharmaceutical supply, medical equipment, diagnostic services, hospital catering, laundry, waste management', mechanism: 'Each hospital bed generates 5–7 direct jobs + 3–4 indirect (WHO estimate). Healthcare cluster effect: Apollo/MIOT Chennai corridors show medical tourism creating hotel, transport, retail employment.' },
      skill: 'skilled',
      multiplier: 15.0,
      women: '55%',
      youth: '40%',
      sustainability: 'VERY HIGH — healthcare employment is permanent, growing (ageing population), and resistant to automation. India needs 2.7M more healthcare workers (WHO 2023).',
      source: 'WHO National Health Workforce Accounts India 2023; NHA India Health Employment Report 2024'
    },
    health_program: {
      label: 'Healthcare Programme / Insurance Expansion',
      direct: { count: '5–8 jobs per ₹1 Cr', roles: 'Claims processors, hospital empanelment staff, audit officers, IT system managers', timeline: 'Immediate' },
      indirect: { count: '8–12 healthcare provider jobs per ₹1 Cr', sectors: 'Private hospitals, diagnostics, pharmacy, medical devices', mechanism: 'Insurance expansion (CMCHIS ₹5L→₹10L) increases demand at empanelled hospitals. Each ₹1 Cr in claims generates hospital employment: doctors, nurses, technicians. Demand-side financing creates market-based employment growth.' },
      skill: 'skilled',
      multiplier: 12.0,
      women: '50%',
      youth: '35%',
      sustainability: 'HIGH — health insurance expands healthcare market permanently. Private hospital capacity expansion follows demand.',
      source: 'PMJAY Annual Report 2024; CMCHIS TN Utilisation Data 2023-24'
    },
    housing: {
      label: 'Housing Construction',
      direct: { count: '10–14 construction jobs per ₹1 Cr', roles: 'Masons, carpenters, plumbers, electricians, painters, labourers, supervisors, site engineers', timeline: '2–3 years per housing project phase' },
      indirect: { count: '6–8 supply chain jobs per ₹1 Cr', sectors: 'Cement, steel, bricks, sand, tiles, fixtures, transport, building materials retail', mechanism: 'Housing construction has the HIGHEST backward linkage of any sector — uses 250+ input materials (CREDAI study). Creates supply chain employment across mining, manufacturing, transport. Post-construction: maintenance, cleaning, security services.' },
      skill: 'semi-skilled',
      multiplier: 18.0,
      women: '15%',
      youth: '55%',
      sustainability: 'HIGH during construction (2–3 years per batch); transitions to maintenance employment. 10L houses over 5 years = continuous construction pipeline.',
      source: 'PMAY Annual Report 2024; CREDAI Housing Multiplier Study 2023; ILO Construction Employment India 2023'
    },
    road_infra: {
      label: 'Road / Transport Infrastructure',
      direct: { count: '10–12 jobs per ₹1 Cr invested', roles: 'Earthwork labourers, machine operators, surveyors, engineers, asphalt workers, bridge technicians', timeline: '1–3 years per road segment' },
      indirect: { count: '5–7 sustained jobs per ₹1 Cr', sectors: 'Quarrying, bitumen/asphalt supply, equipment rental, truck transport, maintenance', mechanism: 'Road connectivity reduces transport costs 15–20% (NHAI data) — enables market access for rural producers, creating sustained economic activity and employment along road corridors.' },
      skill: 'semi-skilled',
      multiplier: 15.0,
      women: '12%',
      youth: '50%',
      sustainability: 'Moderate during construction; sustained maintenance employment (3–5% of capex annually). Indirect employment from improved connectivity is permanent.',
      source: 'NHAI Annual Report 2024; World Bank India Transport Employment Study 2022'
    },
    transport_ops: {
      label: 'Public Transport Operations',
      direct: { count: '8–10 operational jobs per ₹1 Cr', roles: 'Bus drivers, conductors, mechanics, depot managers, route planners, cleaning staff', timeline: 'Immediate upon fleet induction' },
      indirect: { count: '3–5 support jobs per ₹1 Cr', sectors: 'Fuel/energy supply, spare parts, bus body building (Karur is India\'s bus body capital), tyre retreading', mechanism: 'Each bus creates 3–4 direct jobs (2 drivers, 1 conductor, 0.5 mechanic per shift). Electric buses add: charging infrastructure technicians, battery management.' },
      skill: 'semi-skilled',
      multiplier: 12.0,
      women: '15%',
      youth: '45%',
      sustainability: 'HIGH if fare revenue covers operating cost. Free-travel model (current TN women\'s bus) makes employment dependent on government subsidy — unsustainable if subsidy is cut.',
      source: 'TNSTC Annual Report 2023-24; UITP India Public Transport Employment Study 2023'
    },
    urban_dev: {
      label: 'Urban Development / Smart City',
      direct: { count: '8–12 jobs per ₹1 Cr', roles: 'Urban planners, civil engineers, landscape architects, construction workers, maintenance staff', timeline: 'Phased over 5–10 years' },
      indirect: { count: '10–15 jobs per ₹1 Cr (agglomeration effect)', sectors: 'Real estate, retail, hospitality, transport, IT services', mechanism: 'New urban centres create agglomeration economies — density increases productivity 3–8% per doubling of city size (World Bank). Satellite cities decongest Chennai while creating new economic clusters.' },
      skill: 'mixed',
      multiplier: 18.0,
      women: '25%',
      youth: '50%',
      sustainability: 'HIGH if economic anchor (IT park, industrial zone) is viable. Without anchor, becomes ghost city (Amaravati/GIFT City risk).',
      source: 'World Bank Urbanisation Review India 2024; AMRUT Performance Report 2023-24'
    },
    governance: {
      label: 'Governance / Administrative Reform',
      direct: { count: '2–5 jobs per ₹1 Cr', roles: 'IT system developers, grievance officers, data analysts, digital literacy trainers', timeline: '1–2 years for system build; permanent operations' },
      indirect: { count: '5–10 jobs per ₹1 Cr (efficiency gains)', sectors: 'Citizen services, e-governance vendors, training institutes', mechanism: 'Digital governance reduces transaction costs — enables more businesses to formalise, creating formal employment. Single-window clearance can increase business registrations 30–50% (DPIIT data).' },
      skill: 'skilled',
      multiplier: 8.0,
      women: '30%',
      youth: '60%',
      sustainability: 'HIGH — digital infrastructure creates permanent efficiency. One-time build with low maintenance cost.',
      source: 'India e-Governance Awards Case Studies; DPIIT Ease of Doing Business Report 2024'
    },
    culture_heritage: {
      label: 'Cultural Heritage / Tourism',
      direct: { count: '10–12 jobs per ₹1 Cr', roles: 'Archaeologists, conservators, museum guides, event managers, artisans, maintenance staff', timeline: '1–3 years for heritage development; permanent tourism operations' },
      indirect: { count: '8–10 tourism jobs per ₹1 Cr', sectors: 'Hotels, restaurants, transport, handicrafts, local guides, photography', mechanism: 'Heritage tourism multiplier: each ₹1 spent by tourist generates ₹2.5 in local economy (UNWTO). Keeladi/Thanjavur heritage can attract 5–10L visitors/yr with proper infrastructure — comparable to Hampi (12L visitors/yr).' },
      skill: 'mixed',
      multiplier: 18.0,
      women: '35%',
      youth: '50%',
      sustainability: 'HIGH — tourism employment is permanent and growing (India tourism growing 12% CAGR). Heritage sites appreciate over time.',
      source: 'UNWTO Tourism Employment Report 2024; India Tourism Statistics 2024; ASI Visitor Data 2023-24'
    },
    ecology: {
      label: 'Ecological Restoration / Water Body Revival',
      direct: { count: '12–15 jobs per ₹1 Cr', roles: 'Earthwork labourers, desilting workers, tree planters, watershed managers, environmental monitors', timeline: '2–5 years for restoration; permanent maintenance' },
      indirect: { count: '5–8 sustained farm jobs per ₹1 Cr', sectors: 'Agriculture (increased water availability), fisheries (restored tanks), nurseries, eco-tourism', mechanism: 'Water body restoration increases irrigation coverage — each restored tank irrigates 200–500 acres (TN WRD data). This enables 1.5–2× cropping intensity increase, directly creating farm employment.' },
      skill: 'unskilled',
      multiplier: 16.0,
      women: '40%',
      youth: '45%',
      sustainability: 'VERY HIGH — restored water bodies function for 50+ years with minimal maintenance. Creates permanent agricultural productivity gain.',
      source: 'TN Water Resources Department Tank Restoration Data 2023; ICAR Water Body Employment Study 2022'
    },
    social_security: {
      label: 'Social Security Enrollment / Formalisation',
      direct: { count: '3–5 enrollment/admin staff per ₹1 Cr', roles: 'Enrollment officers, data entry operators, helpline staff, audit personnel', timeline: 'Immediate (phased enrollment over 2–3 years)' },
      indirect: { count: '2–3 financial inclusion jobs per ₹1 Cr', sectors: 'Insurance companies, pension fund managers, healthcare providers (empanelled)', mechanism: 'Formalisation of 2 Cr+ unorganised workers creates demand for insurance products, pension schemes, healthcare networks — expanding formal financial services employment. e-Shram registration enables targeted skilling/placement.' },
      skill: 'skilled',
      multiplier: 6.0,
      women: '40%',
      youth: '35%',
      sustainability: 'HIGH — institutional infrastructure is permanent. Once built, marginal cost of adding workers is minimal.',
      source: 'e-Shram Portal Data 2024; ILO Social Protection Report India 2023'
    },
    policy_stance: {
      label: 'Policy Position / Governance Philosophy',
      direct: { count: 'No direct jobs (zero-cost policy)', roles: 'N/A', timeline: 'N/A' },
      indirect: { count: 'Structural impact depends on implementation', sectors: 'Varies', mechanism: 'Policy stances (anti-delimitation, fiscal discipline, constitutional advocacy) do not directly create employment but shape the governance environment that enables or constrains job creation.' },
      skill: 'none',
      multiplier: 0,
      women: '—',
      youth: '—',
      sustainability: 'N/A — policy stance, not spending programme.',
      source: 'N/A'
    },
    anti_substance: {
      label: 'Anti-Drug / Anti-Alcohol Enforcement + Rehab',
      direct: { count: '5–8 jobs per ₹1 Cr', roles: 'Enforcement officers, rehab counsellors, social workers, helpline operators, lab technicians (drug testing)', timeline: 'Immediate' },
      indirect: { count: '3–5 jobs per ₹1 Cr', sectors: 'Rehabilitation centres, NGO ecosystem, vocational training for recovered addicts', mechanism: 'Drug-free workforce increases productivity — ILO estimates substance abuse reduces GDP by 1–2%. Rehab+vocational training converts addicts to productive workers. BUT: TASMAC closure = ₹40,000 Cr revenue loss + 30,000 direct TASMAC jobs at risk.' },
      skill: 'skilled',
      multiplier: 6.0,
      women: '45%',
      youth: '50%',
      sustainability: 'Mixed — enforcement employment is permanent; BUT prohibition historically creates black market employment (negative) and destroys legitimate excise jobs.',
      source: 'ILO Substance Abuse & Employment 2023; TASMAC Annual Report 2023-24'
    },
    loan_waiver: {
      label: 'Loan Waiver',
      direct: { count: 'Zero new jobs', roles: 'None — waiver is a balance-sheet transaction between government and banks', timeline: 'N/A' },
      indirect: { count: 'Negative employment impact', sectors: 'Banking (reduced lending appetite)', mechanism: 'Loan waivers DESTROY future employment creation by freezing bank lending. Post-waiver, banks reduce agricultural/education lending 30–40% (RBI Financial Stability Report 2023). Moral hazard reduces credit culture — fewer productive loans = fewer enterprises = fewer jobs.' },
      skill: 'none',
      multiplier: -2.0,
      women: '—',
      youth: '—',
      sustainability: 'NEGATIVE — waivers damage credit ecosystem for 5–10 years, reducing future employment creation.',
      source: 'RBI Financial Stability Report 2023; NABARD State Focus Paper TN 2024; IMF Working Paper on Loan Waivers 2022'
    },
    startup: {
      label: 'Startup / Entrepreneurship Support',
      direct: { count: '1–3 startup jobs per ₹1 Cr (early stage)', roles: 'Founders, early employees, technical staff', timeline: '2–5 years for viable startups to scale' },
      indirect: { count: '50–200 jobs per successful startup over 5 years', sectors: 'Tech, manufacturing, services — sector depends on startup type', mechanism: 'Israel Yozma programme ($100M) created 4,000+ startups and $80B tech sector. Each successful startup (20% survival rate) creates 50–200 jobs at scale. Employment creation is back-loaded — years 1–2 are negative (more spend than revenue), years 3–5 hockey-stick growth.' },
      skill: 'skilled',
      multiplier: 25.0,
      women: '20%',
      youth: '80%',
      sustainability: 'HIGH if incubation model works (Y Combinator: 15% success rate). Without incubation gate, 80% failure rate makes this a net job destroyer.',
      source: 'Israel Yozma Programme Impact Report; Startup India Annual Report 2024; IIT-M Incubation Cell Data 2024'
    },
    medical_tourism: {
      label: 'Medical Tourism / Siddha Integration',
      direct: { count: '10–15 healthcare + hospitality jobs per ₹1 Cr', roles: 'Doctors, nurses, Siddha practitioners, hotel staff, medical translators, wellness coordinators, transport operators', timeline: '3–5 years for medical tourism infrastructure' },
      indirect: { count: '8–12 service jobs per ₹1 Cr', sectors: 'Hotels, restaurants, pharmacy, wellness products, international marketing, air transport', mechanism: 'Medical tourism patient spends 3–5× more than regular tourist (₹2–5L vs ₹50K). Chennai already #1 Indian medical tourism destination — 45% of India\'s medical tourists visit TN. Siddha+Allopathy integration can create unique market position globally.' },
      skill: 'skilled',
      multiplier: 20.0,
      women: '45%',
      youth: '40%',
      sustainability: 'VERY HIGH — medical tourism grows 15–20% annually globally. India\'s cost advantage (1/10th of US) is structural.',
      source: 'CII-FICCI Medical Tourism Report 2024; TN Tourism Department Medical Tourism Data 2023-24'
    },
    pds_nutrition: {
      label: 'PDS / Nutrition Expansion',
      direct: { count: '5–8 procurement + distribution jobs per ₹1 Cr', roles: 'Fair price shop operators, warehouse staff, quality inspectors, truck drivers, loading workers', timeline: 'Immediate (PDS infrastructure exists)' },
      indirect: { count: '3–5 farm procurement jobs per ₹1 Cr', sectors: 'Local agriculture (lentils, oil procurement), food processing, packaging', mechanism: 'PDS procurement from local FPOs creates backward linkage to farming sector. Adding lentils/oil to PDS basket creates new procurement channel for 5L+ pulse/oilseed farmers in TN.' },
      skill: 'unskilled',
      multiplier: 10.0,
      women: '50%',
      youth: '30%',
      sustainability: 'HIGH — PDS is permanent infrastructure. Adding items expands employment in procurement + distribution permanently.',
      source: 'TN Civil Supplies Department Annual Report 2023-24; DFPD PDS Employment Study 2023'
    },
    pension: {
      label: 'Pension Enhancement',
      direct: { count: 'Minimal new jobs', roles: 'Pension disbursement clerks, verification officers', timeline: 'Immediate' },
      indirect: { count: '1.5–2.5 induced jobs per ₹1 Cr (consumption)', sectors: 'Healthcare (elderly spend 40% on health), food, household services', mechanism: 'Elderly pension spending has unique pattern — 40% goes to healthcare (local), 30% food (local), 20% household help (local). High local multiplier despite low total multiplier because elderly spending is almost entirely local.' },
      skill: 'unskilled',
      multiplier: 2.5,
      women: '55%',
      youth: '15%',
      sustainability: 'Moderate — consumption-dependent; ceases when pension stops. But creates local healthcare and care economy jobs.',
      source: 'NSSO Elderly Survey 2021; PLFS Household Consumption Module 2023-24'
    },
    natural_farming: {
      label: 'Natural / Organic Farming',
      direct: { count: '10–15 farm jobs per ₹1 Cr', roles: 'Farm labourers (organic farming is 30% more labour-intensive), extension workers, certification auditors, vermicompost producers', timeline: '2–3 years for transition period' },
      indirect: { count: '5–8 value-chain jobs per ₹1 Cr', sectors: 'Organic input production, certification agencies, organic retail, farmers markets, export processing', mechanism: 'Organic farming increases labour requirement 30% vs conventional (ICAR). Creates premium market — organic produce commands 20–50% price premium, increasing farm income and sustaining employment.' },
      skill: 'semi-skilled',
      multiplier: 16.0,
      women: '60%',
      youth: '35%',
      sustainability: 'HIGH — organic farming improves soil health, reducing input costs over time. Premium market access creates self-sustaining income.',
      source: 'ICAR Organic Farming Employment Study 2023; Sikkim Organic Mission Impact Report 2022'
    }
  };

  // ── Per-Scheme Employment Mapping ─────────────────────────
  // Maps each D[] entry (by index 0–173) to an employment category
  // with optional per-scheme overrides.
  // Format: { cat: 'category_id', ...overrides }
  var SCHEME_EMP = [
    // ── BATCH 1: Women & Family Welfare (26 schemes) ──
    /* 0  */ { cat: 'dbt', note: 'Magalir Urimai Thogai ₹2,000/mo — largest DBT in TN history. 1.37 Cr women. Local multiplier estimated ₹1.3 per ₹1 transferred (J-PAL India 2023). Key insight: women spend 90% locally vs 70% for men.' },
    /* 1  */ { cat: 'appliance', note: 'Illatharasi ₹8,000 coupon — 2.22 Cr households. Appliances mostly imported (Samsung/LG/Haier). Temporary warehouse/logistics jobs during 6-month distribution window. TN-made brands (CG, Butterfly) could capture 20% if mandated.', multiplier: 0.6 },
    /* 2  */ { cat: 'shg', note: 'SHG loans ₹5L — builds on TN\'s 5.7L active SHGs. Each ₹5L loan typically funds: tailoring unit (2 jobs), food processing (2–3 jobs), dairy (1–2 jobs), or petty shop (1 job). At 5L new loans/yr = 7.5–15L micro-enterprise jobs.', multiplier: 15.0 },
    /* 3  */ { cat: 'childcare', note: '1,000 childcare centres in industrial areas. Each centre: 5 staff (3 childcare workers + 1 cook + 1 cleaner) = 5,000 direct jobs. Enables ~50,000 mothers to remain in/re-enter workforce (based on 50 children per centre average). NET: 55,000 jobs from ₹800 Cr/yr = highest employment efficiency in Batch 1.' },
    /* 4  */ { cat: 'appliance', note: 'Marriage gold 8g — gold imported from UAE/Switzerland. Zero TN manufacturing employment. Temporary goldsmith work for setting. ₹4,500 Cr exits TN economy entirely to gold importers.', multiplier: 0.5 },
    /* 5  */ { cat: 'appliance', note: 'Gold ring for newborns — same as marriage gold. ₹600 Cr exits TN. Symbolic gesture with zero employment impact.', multiplier: 0.3 },
    /* 6  */ { cat: 'dbt', note: 'Kulavilakku ₹2,000/mo for 2.22 Cr families — ₹53,280 Cr/yr. Universal coverage means 70% goes to non-poor families with lower marginal propensity to consume locally. Employment multiplier lower than targeted DBT.' , multiplier: 1.5 },
    /* 7  */ { cat: 'appliance', note: 'Free refrigerator for 2.22 Cr families — ₹35,000 Cr. Largest single appliance procurement in Indian history. Temporary logistics employment for 6–12 months. 80% of refrigerators manufactured outside TN (Samsung-Sriperumbudur, LG-Pune, Haier-Ranjangaon). Adds 3,000–4,000 MW TANGEDCO load.' },
    /* 8  */ { cat: 'dbt', note: '₹10,000 one-time family relief — pure consumption transfer. One-quarter disbursement = one-quarter employment burst then zero.', multiplier: 1.2 },
    /* 9  */ { cat: 'subsidy_fuel', note: '3 free LPG cylinders — 100% of ₹6,000 Cr flows to IOCL/BPCL/HPCL. Zero TN employment. LPG bottling plants already staffed.', multiplier: 0.3 },
    /* 10 */ { cat: 'transport_ops', note: 'Free bus travel extended to men — does NOT create new bus driver/conductor jobs (existing fleet). However, PREVENTS fleet renewal (no fare revenue = no capex for new buses). Net employment impact: NEGATIVE long-term as fleet ages and routes are cut.', multiplier: -1.0 },
    /* 11 */ { cat: 'appliance', note: '₹25,000 two-wheeler subsidy — if mandated EV, creates charging infra jobs (technicians, station operators). Ather Energy (Chennai) + TVS (Hosur) manufacture EV two-wheelers IN TN — could generate manufacturing employment if TN-make clause added.', multiplier: 2.5, women: '60%' },
    /* 12 */ { cat: 'appliance', note: '8g gold + ring combined — ₹5,500 Cr exits TN. Slightly more than DMK version. Zero sustained employment.', multiplier: 0.4 },
    /* 13 */ { cat: 'pds_nutrition', note: 'PDS additions (lentils + oil) create procurement employment — TN procures from local FPOs. Bathing kits: zero nutritional employment, purely consumption. Split: lentils/oil (₹3,500 Cr, multiplier 10) + bathing kits (₹4,500 Cr, multiplier 0.5).' },
    /* 14 */ { cat: 'appliance', note: 'Pongal cash + Diwali hampers — hamper procurement creates temporary godown/logistics jobs for 2–3 months. Cash component has standard DBT multiplier.', multiplier: 1.0 },
    /* 15 */ { cat: 'dbt', note: 'TVK ₹2,500/mo — same as DMK DBT but at ₹41,100 Cr/yr (20% of tax revenue). Employment multiplier same as any DBT but fiscal unsustainability means programme may not last, making employment impact unreliable.', multiplier: 2.0 },
    /* 16 */ { cat: 'subsidy_fuel', note: '6 free LPG cylinders — double ADMK\'s offer. ₹12,000 Cr exits TN entirely. Zero employment.', multiplier: 0.3 },
    /* 17 */ { cat: 'appliance', note: 'TVK marriage gold — identical to DMK/ADMK. ₹4,500 Cr exits TN.', multiplier: 0.5 },
    /* 18 */ { cat: 'edu_stipend', note: '₹15,000/yr girl dropout prevention — conditional cash creates campus economy + LONG-TERM human capital. Bangladesh Female Stipend: each year of girl\'s education increases lifetime earnings 25%. ₹3,750 Cr at 25L girls = 25L future skilled workers.', women: '100%', youth: '100%' },
    /* 19 */ { cat: 'shg', note: 'Interest-free SHG loans ₹5L — same employment profile as DMK SHG scheme but interest-free model may reduce repayment discipline, increasing NPA risk and reducing sustainable enterprise creation by 15–20% (NABARD data on 0% vs 4% loans).' },
    /* 20 */ { cat: 'dbt_youth', note: '₹4,000/mo unemployment allowance — ₹9,600–14,400 Cr/yr. Finland UBI evidence: ZERO employment effect. Moral hazard: recipients delay job search by average 3.5 months (Finland data). Net employment impact: NEGATIVE.' },
    /* 21 */ { cat: 'policy_stance', note: 'NTK anti-freebie stance — INDIRECT positive employment impact: ₹0 spent on cash transfers means ₹0 less for productive investment. If fiscal headroom preserved, enables capex-driven job creation at 10–15 jobs per ₹1 Cr.' },
    /* 22 */ { cat: 'social_security', note: 'Structured social security for 2 Cr unorganised workers — enrollment creates 8,000–10,000 admin jobs. Health cover empanelment creates healthcare employment. Pension component generates financial services jobs. KEY: formalisation enables targeted skilling/placement for 2 Cr workers.' },
    /* 23 */ { cat: 'policy_stance', note: '50% women reservation — zero fiscal cost. LONG-TERM impact: women legislators allocate 10–15% more to health/education (World Bank Gender & Governance 2023), improving human capital employment outcomes.' },
    /* 24 */ { cat: 'governance', note: 'DV protection reform — 1,200+ protection officers, shelter staff, fast-track court personnel. Enables women facing DV to remain in/re-enter workforce. Spain evidence: DV law reduced women leaving workforce due to violence by 25%.', women: '70%' },
    /* 25 */ { cat: 'governance', note: 'Street vendor IDs — formalises 15L vendors. Formalisation enables: bank credit (PM-SVANidhi), insurance, legal protection. Formalized vendors earn 20–40% more (Bogotá evidence). Creates municipal vending-zone management jobs.', multiplier: 12.0 },

    // ── BATCH 2: Education, Youth, Employment & Tech (25 schemes) ──
    /* 26 */ { cat: 'edu_program', note: 'Free breakfast extended to Class 8 — 20,000+ cook/helper jobs. Procures from local farmers: rice, dal, vegetables, eggs. Each ₹1 Cr creates 18 school-kitchen jobs + 5 farm procurement jobs. TN breakfast scheme evidence: 15% attendance increase, 20% anaemia reduction.' },
    /* 27 */ { cat: 'edu_infra', note: '35L free laptops — ONE-TIME procurement. Temporary logistics jobs during distribution. Long-term: enables digital freelancing for students (estimated 2–3L students earn via freelancing within 2 years of receiving laptops, per TN IT Department 2023 survey).', multiplier: 3.0 },
    /* 28 */ { cat: 'edu_stipend', note: '₹2,000/mo Pudhumai Penn + Tamil Pudhalvan — 36L students. Campus economy: hostels, canteens, bookshops, digital services near colleges. Long-term: educated graduates enter ₹3–8 LPA jobs vs ₹1.5–2.5 LPA without degree.' },
    /* 29 */ { cat: 'it_digital', note: 'Digital learning centres + Wi-Fi — 600+ govt colleges. Construction: 1,000+ IT infrastructure jobs (network engineers, server setup). Operations: 2,000+ lab assistants, system admins. Enables 36L students to access digital employment market.' },
    /* 30 */ { cat: 'skill_training', note: 'Naan Mudhalvan 5L/yr — India\'s BEST state skilling programme. 60% placement rate = 3L placements/yr. At ₹900 Cr/yr = ₹30,000 per placement. HIGHEST EMPLOYMENT MULTIPLIER OF ALL 174 SCHEMES. Training staff: 5,000+ trainers/mentors. Industry partners: TCS, Infosys, Zoho, L&T.', multiplier: 333.0 },
    /* 31 */ { cat: 'invest_facilitation', note: '₹18L Cr investment + 50L jobs target — GIM 2024: ₹6.6L Cr MoUs signed. At 15–25% conversion = ₹1–1.65L Cr actual investment. 50L jobs over 5 years = 10L/yr. Key sectors: electronics (Foxconn, Tata), auto (Hyundai EV), pharma, textiles.' },
    /* 32 */ { cat: 'it_digital', note: 'IT exports ₹5L Cr target — requires growing from 12L to 20L+ IT workers over 5 years. Each IT job creates 3.5 indirect jobs = 8L direct + 28L indirect = 36L total new jobs in IT ecosystem. Needs tier-2 IT parks: Coimbatore, Madurai, Trichy.' },
    /* 33 */ { cat: 'urban_dev', note: '4 Global Cities — massive urban employment if executed. Each new city centre generates 50,000–1L jobs (construction + operations) based on GIFT City/Navi Mumbai evidence. But 4 simultaneously = diluted focus.' },
    /* 34 */ { cat: 'policy_stance', note: 'NEET reservation 7.5%→10% — zero direct employment impact. Marginal: 60 additional MBBS seats produce 60 additional doctors over 5.5 years.' },
    /* 35 */ { cat: 'loan_waiver', note: 'Student loan waiver ₹8–12K Cr — NEGATIVE employment impact. Banks freeze education lending → fewer students access professional education → fewer skilled workers enter market. RBI data: post-farm-loan-waiver, agricultural credit fell 35% for 3 years.' },
    /* 36 */ { cat: 'dbt_youth', note: '₹2,000/mo unemployment allowance for graduates — same moral hazard as TVK scheme. ₹6,000 Cr/yr = 6.7× the cost of Naan Mudhalvan for ZERO employment outcomes vs 3L placements. Net: NEGATIVE.' },
    /* 37 */ { cat: 'dbt_youth', note: '₹1,000/mo for 12th-pass unemployed — PERVERSE incentive against higher education. Why attend college if you get ₹1,000/mo for staying home? Reduces long-term skilled workforce. Net: NEGATIVE.' },
    /* 38 */ { cat: 'invest_facilitation', note: 'TVK "job assurance" to 5L youth — if government jobs: 5L × ₹5L/yr salary = ₹25,000 Cr/yr + ₹50,000 Cr 20-yr pension liability. If private sector facilitation: similar to DMK GIM model. "Assurance" is legally meaningless.', multiplier: 10.0 },
    /* 39 */ { cat: 'startup', note: 'Collateral-free education loans — guarantee fund model (₹2,000 Cr corpus) enables ₹20–30K Cr lending. Each professional degree holder generates ₹8–15L/yr income = tax revenue + consumption employment. NET employment of educated graduates: 100% (all of them will be employed).' },
    /* 40 */ { cat: 'startup', note: 'Collateral-free startup loans — ₹1,500 Cr corpus. At 20% success rate: 3,000 viable startups. Each employs 5–50 people at year 3. Estimated: 30,000–60,000 jobs from successful startups. Without incubation gate, 80% failure reduces this to 6,000–12,000.' },
    /* 41 */ { cat: 'edu_stipend', note: 'TVK monthly student financial assistance — amount unspecified. Assumed ₹1,500/mo for 30L students. Same employment profile as DMK Pudhumai Penn/Tamil Pudhalvan — campus economy + human capital.' },
    /* 42 */ { cat: 'it_digital', note: 'AI Ministry + AI University + AI Township — AI University: 500–1,000 faculty/research jobs. AI Ministry: 200–500 policy/regulatory jobs. AI Township: if Shenzhen model works, 10,000–50,000 AI jobs by Year 5. BUT: AI Township has white-elephant risk (GIFT City precedent).' },
    /* 43 */ { cat: 'governance', note: '21-day business approval guarantee — HIGHEST INDIRECT employment creator. Single-window clearance can increase business registrations 30–50% (Gujarat model). Each new MSME creates 5–15 jobs. ₹200 Cr/yr investment → estimated 2–5L new MSME jobs/yr through reduced red tape.' },
    /* 44 */ { cat: 'policy_stance', note: '$1.5T economy aspiration — target implies 7× growth from current ~$220B GSDP. Not a spending programme. Employment is a function of GDP growth — each 1% GDP growth creates ~2L jobs in TN (PLFS elasticity).' },
    /* 45 */ { cat: 'invest_facilitation', note: 'MSME incentives + 38 district master plans — decentralised industrial planning. Each district plan creates 500–2,000 MSME jobs. 38 districts × 1,000 average = 38,000 direct MSME jobs/yr. Critical for reducing Chennai-centricity of employment.', multiplier: 30.0 },
    /* 46 */ { cat: 'edu_infra', note: 'Tamil-medium MBBS education — requires translation infrastructure: 200+ medical translators, 500+ textbook authors, 100+ exam specialists. Long-term: enables rural students to become doctors, increasing rural healthcare employment. Counter-argument: reduces international mobility of TN doctors.' },
    /* 47 */ { cat: 'skill_training', note: 'Life skills + vocational training in schools — integrated into school curriculum. 50,000+ additional vocational trainers needed. Students graduate with employable skills — ITI-equivalent certification embedded in school system. Potential: 10L+ school graduates/yr with vocational skills.' },
    /* 48 */ { cat: 'invest_facilitation', note: 'Self-reliant district-level economic model — similar to China\'s county-level industrial clusters. Each district develops specialisation: Sivakasi (printing), Karur (textiles), Namakkal (poultry/transport). Creates distributed employment reducing migration pressure.' },
    /* 49 */ { cat: 'ecology', note: 'Zero-waste industrial zones — creates green jobs: waste auditors, recycling operators, circular economy managers. International evidence: EU Circular Economy Action Plan created 4M jobs across Europe. For TN: estimated 50,000–1L green jobs in industrial zones.' },
    /* 50 */ { cat: 'transport_ops', note: 'Free student transport — does NOT create new jobs (existing bus fleet). Revenue loss reduces fleet renewal capacity. However, enables students from remote areas to attend school/college — long-term human capital employment benefit.', multiplier: 0.5 },

    // ── BATCH 3: Agriculture, Farmers & Fishermen (28 schemes) ──
    /* 51 */ { cat: 'agri_msp', note: 'Paddy MSP ₹3,500/quintal — state top-up over central MSP. Stabilises income for 25L+ rice farmers. Does not create new jobs but prevents farmer-to-urban migration (estimated 5–8L farm jobs retained/yr). TNCSC procurement needs 2,000+ seasonal staff.' },
    /* 52 */ { cat: 'agri_msp', note: 'Sugarcane ₹4,500/tonne — stabilises 8L sugarcane farming families. Sugar mill employment (35 mills, 50,000 workers) depends on guaranteed sugarcane supply. This procurement price ensures mill viability = job security for mill workers.' },
    /* 53 */ { cat: 'agri_infra', note: '20L electric pump sets — manufacturing employment: ELGI, CRI Pumps (Coimbatore) are India\'s top pump manufacturers. If TN-make clause: 20L pumps × ₹15,000 = ₹3,000 Cr to TN pump industry. Creates 8,000–10,000 manufacturing jobs + 2,000 installation technician jobs.' },
    /* 54 */ { cat: 'subsidy_fuel', note: 'Free farm electricity (existing) — TANGEDCO bears ₹6–8K Cr/yr cross-subsidy. Zero new employment. BUT enables irrigation = maintains farm employment for 70L+ farm families.', multiplier: 0.5 },
    /* 55 */ { cat: 'agri_msp', note: 'TNCSC crop procurement — 5,000+ procurement staff across 38 districts. Creates agricultural market employment: commission agents, truck operators, godown workers. Stabilises farm-gate prices preventing distress.' },
    /* 56 */ { cat: 'ecology', note: 'Temple tank + irrigation revival — MASSIVE rural employment. Each tank restoration: 50–100 workers for 3–6 months. 10,000 tanks = 5–10L person-months of employment. Post-restoration: irrigated land creates 2× farm employment. TN has 41,000 tanks — largest tank-irrigation system in India.' },
    /* 57 */ { cat: 'agri_msp', note: 'ADMK paddy MSP ₹3,500 — identical to DMK scheme. Same employment impact: stabilises 25L+ rice farming families. Duplicate promise.' },
    /* 58 */ { cat: 'agri_msp', note: 'ADMK sugarcane ₹4,500/tonne — identical to DMK. Supports 35 sugar mills and 50,000 mill workers.' },
    /* 59 */ { cat: 'agri_infra', note: 'Uninterrupted 3-phase electricity — ₹15–20K Cr/yr. TANGEDCO infrastructure upgrade creates 10,000+ electrician/lineman/substation jobs. Reliable power enables pump sets to operate = farm employment stabilisation. BUT: TANGEDCO debt (₹1.25L Cr) makes this fiscally impossible.' },
    /* 60 */ { cat: 'ecology', note: 'MGNREGA 150 days — India\'s largest rural employment programme. Extension from 100→150 days creates 50% more person-days. At ₹300/day: 150 days × 30L households = ₹13,500 Cr direct wage injection. Creates rural assets: roads, water bodies, tree planting.' },
    /* 61 */ { cat: 'governance', note: 'State Agricultural Commission — 200–300 expert/admin jobs. INDIRECT: commission recommendations can restructure agricultural employment. If effective, can shift 10L+ farmers from subsistence to commercial agriculture.' },
    /* 62 */ { cat: 'agri_msp', note: 'ADMK TNCSC procurement — identical to DMK TNCSC scheme. Same employment: 5,000+ procurement staff, market stabilisation.' },
    /* 63 */ { cat: 'governance', note: 'GST exemption for FPGs — zero-cost governance reform. Enables FPOs to retain 5–18% more revenue. Additional income funds expansion = more farm employment. Estimated: 2,000+ FPOs in TN benefit, each employing 5–20 members.' },
    /* 64 */ { cat: 'loan_waiver', note: 'Full crop loan waiver ₹1.5–2L Cr — LARGEST single scheme across all parties. NEGATIVE employment impact: banks freeze farm lending for 3–5 years post-waiver (RBI data). Andhra Pradesh 2008 waiver: farm credit fell 45% for 2 years. DESTROYS agricultural credit ecosystem.' },
    /* 65 */ { cat: 'agri_msp', note: 'Fish MSP (first in India) — revolutionary policy. Creates: fish procurement infrastructure (cold chain, testing labs, grading centres), 5,000+ procurement staff. Stabilises income for 8L fishing families. International precedent: Norway/Iceland fish MSP supports 50,000 fishing jobs each.' },
    /* 66 */ { cat: 'dbt', note: '₹27,000 lean-season assistance for fishing families — consumption transfer during 3-month fishing ban. 8L families × ₹27,000 = ₹2,160 Cr. Prevents distress migration. No direct employment creation but preserves fishing workforce.', women: '20%' },
    /* 67 */ { cat: 'social_security', note: '₹25L accident insurance for fishermen — creates: insurance administration jobs, claims processing. INDIRECT: risk coverage enables fishermen to invest in better boats/nets, increasing catch and employment capacity.' },
    /* 68 */ { cat: 'housing', note: 'Free housing for fishing community — massive construction employment in coastal areas. Each house: 1,500 person-days of labour. 2L houses = 30 Cr person-days. Post-construction: property creates sense of permanence, reducing migration.' },
    /* 69 */ { cat: 'subsidy_fuel', note: 'TVK free farm electricity — identical to DMK existing scheme. Zero new employment.', multiplier: 0.5 },
    /* 70 */ { cat: 'agri_infra', note: 'Cold storage + market access — 38 district cold storages. Each facility: 20–30 permanent jobs (operators, technicians, managers). 38 × 25 = 950 direct jobs. INDIRECT: reduces post-harvest loss from 30% to 5%, enabling year-round marketing = sustained farm employment for 20L+ farmers.' },
    /* 71 */ { cat: 'policy_stance', note: 'Declare farming "National Occupation" — symbolic. Zero direct employment impact. If accompanied by agricultural insurance/support framework, INDIRECT benefit to 70L+ farm families.' },
    /* 72 */ { cat: 'ecology', note: 'Large-scale water body restoration (Ooranis, Eris) — NTK\'s signature scheme. TN has 41,000 water bodies, 60% degraded. Restoration at ₹2–3K Cr/yr creates 3–5L rural jobs/yr (earthwork, desilting, bund repair). Post-restoration: irrigated acreage doubles, creating 10L+ additional farm jobs over 5 years.' },
    /* 73 */ { cat: 'ecology', note: 'Palmyra tree planting — each tree supports 3–5 livelihoods (toddy, jaggery, fibre, fruit). 1 Cr trees = 30–50L seasonal livelihoods over 10 years. Creates nursery employment (5,000+ nursery workers). Cultural preservation of palmyra economy (unique to TN).' },
    /* 74 */ { cat: 'agri_infra', note: 'NTK cold storage in 38 districts — identical infrastructure to TVK scheme. 950 direct + 20L+ indirect farm employment through reduced wastage.' },
    /* 75 */ { cat: 'natural_farming', note: 'Natural/organic farming — Sikkim model. Organic farming requires 30% more labour = 21L additional farm jobs if 70L farming families transition (phased). Premium market: organic produce fetches 20–50% higher price. Creates certification/marketing employment.' },
    /* 76 */ { cat: 'agri_msp', note: 'Fair price guarantee for farmers + fishermen — combines MSP + procurement. ₹5–8K Cr corpus. Creates procurement infrastructure employment (5,000+ staff). Stabilises 78L farmer + fisher families.', multiplier: 6.0 },
    /* 77 */ { cat: 'social_security', note: 'Fishermen\'s Welfare Board — institutional employment: 500–1,000 board staff. INDIRECT: welfare benefits (insurance, pension, housing) stabilise 8L fishing families, preventing migration from fishing to urban casual labour.' },
    /* 78 */ { cat: 'governance', note: 'Protect farming land from real estate — CRITICAL for employment. Each acre converted from farm to real estate: 2–3 farm jobs lost permanently. 50,000 acres/yr being converted in TN. This policy saves 1–1.5L farm jobs/yr from destruction.' },

    // ── BATCH 4: Healthcare & Social Security (24 schemes) ──
    /* 79 */ { cat: 'health_program', note: 'CMCHIS ₹5L→₹10L — doubles insurance coverage. Increases hospital utilisation = more healthcare employment. 3,500+ empanelled hospitals hire additional staff. Each ₹1 Cr in claims = 12 healthcare jobs (doctors, nurses, technicians).' },
    /* 80 */ { cat: 'health_infra', note: 'Double dialysis facilities — each dialysis unit: 8–10 staff (nephrologist, technicians, nurses). Doubling TN\'s 800+ govt dialysis units = 8,000–10,000 new healthcare jobs. Equipment procurement: ₹750 Cr to medical device manufacturers (some TN-based: Trivitron, Perfint).' },
    /* 81 */ { cat: 'health_program', note: 'Free medicine expansion 650→800+ drugs — increases pharmacy employment. TN Medical Services Corporation procurement from TNPSC + private manufacturers creates pharmaceutical supply chain jobs. 800+ drugs across 2,200+ PHCs/GHs.' },
    /* 82 */ { cat: 'childcare', note: '1,000 childcare centres (healthcare co-benefit) — same scheme as Batch 1 #3 (cross-reference). 5,000 direct childcare jobs + 50,000 women enabled to work. Healthcare benefit: reduces child malnutrition, creating healthier future workforce.' },
    /* 83 */ { cat: 'pension', note: 'Disability assistance ₹2,500/mo — 7.6L disabled persons. Consumption-induced employment (healthcare spending by disabled is 3× average). Creates demand for assistive device manufacturing — TN has ALIMCO production unit.' },
    /* 84 */ { cat: 'pension', note: 'Old-age pension ₹2,000/mo — 16L elderly. Consumption: 40% healthcare (local doctors, pharmacies), 30% food, 20% household help. Creates care economy: domestic helpers, home nurses. Growing elderly population = growing care employment.' },
    /* 85 */ { cat: 'culture_heritage', note: 'Consecration of 5,000 temples — HR&CE funded. Each consecration: 50–100 workers (masons, sculptors, painters, priests). 5,000 temples × 75 average = 3.75L person-events. Creates sustained artisan employment + tourism potential.' },
    /* 86 */ { cat: 'health_program', note: 'ADMK "full medical coverage" — uncosted at ₹10–16K Cr/yr. If implemented at this scale, creates massive healthcare employment: 50,000+ new hospital jobs. BUT: uncosted = likely unfunded = unlikely to materialise.' },
    /* 87 */ { cat: 'pension', note: 'ADMK pensions ₹2,000/mo all categories — broader than DMK (includes widow, differently-abled, destitute). ₹5,760 Cr/yr. Same consumption-induced employment as DMK pension scheme.' },
    /* 88 */ { cat: 'edu_program', note: 'Amma Canteen revival — each canteen: 5–8 staff (cooks, helpers, cashier). 400+ canteens × 6 average = 2,400 direct jobs. Procures from local farmers. Serves 5L+ meals/day to urban poor = nutrition employment.' },
    /* 89 */ { cat: 'health_program', note: 'Amma Pharmacy — each pharmacy: 3–4 staff (pharmacist, helper, cashier). 500+ pharmacies × 3.5 = 1,750 jobs. Procures from generic pharma manufacturers — creates supply chain employment. Makes medicines 50–80% cheaper.' },
    /* 90 */ { cat: 'policy_stance', note: 'ADMK 10% NEET reservation — zero cost, zero employment. Same as scheme #34 (cross-reference). 60 additional MBBS seats = 60 additional doctors in 5.5 years.' },
    /* 91 */ { cat: 'anti_substance', note: 'Phased prohibition — MASSIVE NEGATIVE employment impact. TASMAC employs 30,000+ directly. Bar/restaurant employment: estimated 2L+ jobs. Excise revenue ₹40,000 Cr/yr funds 20% of TN budget. Historical evidence: 1986 TN prohibition created ₹8,000 Cr black market, 50,000 illegal jobs.' },
    /* 92 */ { cat: 'health_program', note: 'TVK subsidised medicines — uncosted (says ₹0). If implemented through existing GH infrastructure, minimal new employment. If new pharmacies: same as Amma Pharmacy model.', multiplier: 3.0 },
    /* 93 */ { cat: 'anti_substance', note: 'Drug-free TN — enforcement + rehab. 5,000+ enforcement jobs. Rehab centres: 1,000+ counsellors/social workers. Vocational training for recovered addicts creates indirect employment. BUT: does not address alcohol (larger problem in TN).' },
    /* 94 */ { cat: 'social_security', note: '₹25L fishermen insurance (TVK duplicate of scheme #67) — same employment impact as Batch 3 #67.' },
    /* 95 */ { cat: 'pension', note: 'TVK enhanced pensions (uncosted) — same consumption-induced employment as DMK/ADMK pension schemes. Without specific amount, employment impact cannot be precisely estimated.' },
    /* 96 */ { cat: 'medical_tourism', note: 'Integrated Siddha + Allopathy medical tourism city — MAJOR employment potential. Chennai medical tourism: 1L+ patients/yr, $2B revenue. New medical tourism city could create 20,000–50,000 healthcare + hospitality jobs. Siddha integration creates unique market for 3,000+ Siddha practitioners.' },
    /* 97 */ { cat: 'health_program', note: 'Free mental health support — creates: 2,000+ clinical psychologists/counsellor positions, 500+ helpline operators. TN has 0.3 psychiatrists per 1L population (WHO recommends 3). Addressing this gap requires 10× increase in mental health workforce.', multiplier: 8.0 },
    /* 98 */ { cat: 'medical_tourism', note: 'NTK Siddha + Allopathy medical tourism — identical concept to TVK scheme #96. Same employment potential: 20,000–50,000 healthcare + hospitality jobs if executed.' },
    /* 99 */ { cat: 'health_program', note: 'NTK mental health programme — same as TVK #97. 2,000+ mental health professional positions needed. Addresses critical workforce gap.' },
    /* 100 */ { cat: 'anti_substance', note: 'NTK anti-drug + anti-alcohol with rehab — comprehensive approach. Enforcement: 5,000+ jobs. Rehab: 2,000+ counsellors. BUT includes anti-alcohol = TASMAC risk (same as ADMK prohibition scheme #91).' },
    /* 101 */ { cat: 'social_security', note: 'Unorganised workers health cover — extends CMCHIS to 2 Cr unorganised workers. Creates 5,000+ enrollment/claims jobs. Healthcare demand increase = 10,000+ additional hospital jobs.' },
    /* 102 */ { cat: 'agri_infra', note: 'Clean drinking water for all — MASSIVE infrastructure employment. Water treatment plants: 8,000–10,000 construction jobs. Pipeline laying: 20,000+ jobs over 3–5 years. Operations: 5,000+ permanent jobs (plant operators, quality testers, maintenance). Each village water connection creates 2–3 local maintenance jobs.' },

    // ── BATCH 5: Housing, Infrastructure & Urban (26 schemes) ──
    /* 103 */ { cat: 'housing', note: '10L concrete houses — LARGEST construction employment scheme. 10L houses × 1,500 person-days each = 1,500 Cr person-days over 5 years = 10L construction workers employed continuously for 5 years. Backward linkage: cement (Ariyalur), steel (Salem), bricks, sand — TN supply chain employment.' },
    /* 104 */ { cat: 'road_infra', note: '₹10,000 Cr rural roads — 10,000 km road upgrades across 38 districts. Construction: 50,000–75,000 jobs over 5 years. Equipment operators, surveyors, labourers. Post-construction: improved connectivity creates market access for 2 Cr rural households.' },
    /* 105 */ { cat: 'transport_ops', note: '10,000 new electric buses — manufacturing employment: Ashok Leyland (Chennai), Olectra, Switch Mobility (TN plants). Each bus: 2–3 manufacturing jobs + 3–4 operational jobs (drivers, conductors, depot staff). 10,000 buses = 20,000 manufacturing + 35,000 operational = 55,000 total jobs. PLUS: EV charging infrastructure: 5,000+ technician jobs.' },
    /* 106 */ { cat: 'urban_dev', note: '4 Global Cities — same as Batch 2 #33 (cross-reference). Massive urban development employment if executed. Coimbatore, Madurai, Trichy, Salem: each could create 50,000–1L jobs.' },
    /* 107 */ { cat: 'transport_ops', note: 'Mini-buses in remote areas — 500+ mini-bus routes. Each route: 2 drivers + 1 conductor = 1,500 direct jobs. Enables 5L+ rural residents to access markets/hospitals/schools = indirect employment through connectivity.' },
    /* 108 */ { cat: 'road_infra', note: 'Coimbatore Airport expansion — construction: 5,000–8,000 jobs (3–5 year project). Operations: 2,000+ permanent airport jobs. Aviation multiplier: each direct airport job creates 6 indirect jobs (hotels, transport, cargo, retail). Coimbatore → international hub = 10,000+ total jobs.' },
    /* 109 */ { cat: 'road_infra', note: 'Thoothukudi cargo terminal — construction: 2,000–3,000 jobs. Operations: 500+ permanent (cargo handling, customs, logistics). Enables fisheries/industrial export = multiplier employment in Southern TN district cluster.' },
    /* 110 */ { cat: 'urban_dev', note: 'Road/public space beautification — 10,000+ construction workers for beautification projects. Maintenance: 3,000+ permanent landscape/cleaning staff. Creates urban amenity employment.' },
    /* 111 */ { cat: 'urban_dev', note: 'Bus shelters — prefab construction: 500+ workers. Design: 100+ architects/engineers. Maintenance: 500+ cleaning staff. If PPP model with advertising: creates media-sales employment.' },
    /* 112 */ { cat: 'culture_heritage', note: '50 Semmozhi Poongas — each park: 10–15 permanent staff (gardeners, security, maintenance). 50 parks × 12 = 600 permanent jobs. Construction: 2,000+ workers. Cultural events: 200+ event management jobs. Urban green spaces increase property values = construction employment in surrounding areas.' },
    /* 113 */ { cat: 'housing', note: 'ADMK Amma Illam — same as DMK housing #103. 10L houses = 10L construction workers over 5 years. Supply chain: cement, steel, bricks, sand, fixtures.' },
    /* 114 */ { cat: 'housing', note: 'Stalled housing revival — clears 2–5L stalled units. Restarts construction employment for 1–3L workers. Faster than new projects (land/approval already done).' },
    /* 115 */ { cat: 'road_infra', note: '4-lane highway expansions — 5,000–10,000 construction jobs per 100 km segment. Salem-Chennai, Coimbatore-Salem corridors. Post-construction: toll management, maintenance. Economic corridor effect creates logistics/warehouse employment along highway.' },
    /* 116 */ { cat: 'ecology', note: 'MGNREGA 150 days for rural infra — same as Batch 3 #60 (cross-reference). Labour-intensive rural infrastructure: roads, water bodies, tree planting. 30L+ households benefit.' },
    /* 117 */ { cat: 'agri_infra', note: 'Tank desilting and canal repair — labour-intensive (95% labour cost in desilting). 20,000+ rural workers employed per season. Post-desilting: increased irrigation = more farm jobs. TN\'s 41,000 tanks support 30% of irrigation.' },
    /* 118 */ { cat: 'housing', note: 'TVK universal housing pattas — if truly universal (₹15,000 Cr/yr): largest housing programme in Indian history. Employment: 15L+ construction workers continuously. BUT: fiscal impossibility (7.5% of own tax revenue for housing alone).', multiplier: 20.0 },
    /* 119 */ { cat: 'housing', note: 'TVK fishing community housing — 2L houses for fishing families. Coastal construction employment: 3L+ workers over 5 years. Post-construction: housing stability enables fishermen to invest in boats/nets = more productive fishing employment.' },
    /* 120 */ { cat: 'governance', note: 'District master plans — same as Batch 2 #45. 38 district industrial plans create decentralised employment. Reduces Chennai-centricity.' },
    /* 121 */ { cat: 'urban_dev', note: 'AI Township — same as Batch 2 #42 (cross-reference). If Shenzhen model: 10,000–50,000 AI jobs. White-elephant risk high for greenfield township.' },
    /* 122 */ { cat: 'policy_stance', note: '$1.5T smart city slogan — same as Batch 2 #44. No specific employment programme. GDP growth → employment is the mechanism.' },
    /* 123 */ { cat: 'urban_dev', note: 'NTK 5 capital cities — MASSIVE decentralisation employment. Each capital: 5,000–10,000 administrative jobs + 20,000–50,000 service jobs (agglomeration). 5 capitals × 30,000 = 1.5L jobs. BUT: ₹4–6K Cr/yr is politically unrealistic and historically unprecedented (Amaravati precedent).' },
    /* 124 */ { cat: 'transport_ops', note: 'Restrict large buses from city centres — creates demand for mini-bus/metro feeder services. 2,000+ new mini-bus jobs. Reduces congestion → productivity gain → indirect employment. Low cost (₹200–300 Cr/yr) for meaningful urban transport reform.' },
    /* 125 */ { cat: 'transport_ops', note: 'Automatic doors in buses — bus body modification: 500+ mechanics/technicians. Safety improvement: reduces road accident costs. Karur bus body industry benefits from retrofit orders.' },
    /* 126 */ { cat: 'culture_heritage', note: 'Heritage tourism hubs — Keeladi, Thanjavur, Adichanallur. Each hub: 200–500 permanent tourism jobs (guides, curators, hospitality). Archaeological excavation: 1,000+ field workers. ₹500–600 Cr/yr creates 5,000+ direct tourism + 10,000+ indirect (hotels, restaurants, transport) jobs.' },
    /* 127 */ { cat: 'transport_ops', note: 'Free pilgrim transport — seasonal employment: 2,000+ drivers/conductors during festival seasons. Revenue loss to TNSTC but enables religious tourism economy (₹5,000+ Cr/yr in TN temple towns).' },
    /* 128 */ { cat: 'agri_infra', note: 'NTK cold storage 38 districts — same as Batch 3 #74 and TVK #70. 950 direct + reduced wastage employment benefit.' },

    // ── BATCH 6: Governance, Autonomy & Delimitation (25 schemes) ──
    /* 129 */ { cat: 'policy_stance', note: 'Move Education/Health to State List — zero cost policy advocacy. If successful: TN controls education/health policy entirely → better alignment of spending with local employment needs. Does not directly create jobs.' },
    /* 130 */ { cat: 'policy_stance', note: '50% tax pool for states — if achieved: TN gets ₹18–20K Cr additional annually. This ADDITIONAL revenue can fund employment-generating capex. At 10 jobs/₹1 Cr in infrastructure, = 1.8–2L additional jobs/yr. HUGE indirect employment impact.' },
    /* 131 */ { cat: 'policy_stance', note: 'Kurian Joseph Committee — recommendations on federalism. If Centre increases devolution: same impact as #130. Jobs depend on how additional revenue is deployed.' },
    /* 132 */ { cat: 'governance', note: 'Doorstep delivery of govt services — 10,000+ village-level entrepreneurs (VLEs) trained and deployed. IT platform development: 1,000+ tech jobs. Reduces citizen transaction costs = enables more people to access government benefits/services = economic participation.' },
    /* 133 */ { cat: 'governance', note: 'Unified citizen grievance platform — IT development: 500+ tech jobs. Operations: 2,000+ grievance resolution officers. Digital infrastructure permanent. Improves governance quality → better investment climate → indirect employment.' },
    /* 134 */ { cat: 'policy_stance', note: 'NPS→OPS (assured pension) — fiscally catastrophic (₹50K–1L Cr over 20 years). Does NOT create new employment. Shifts future fiscal burden from pension-earner to taxpayer. REDUCES future capex headroom = REDUCES future employment creation.' },
    /* 135 */ { cat: 'dbt', note: '8th Pay Commission — ₹15–20K Cr/yr salary increase for 13L govt employees. Consumption-induced employment from higher salaries. Government employees spend locally → retail, housing, education employment. BUT: crowds out capex = net employment effect uncertain.', multiplier: 1.8 },
    /* 136 */ { cat: 'policy_stance', note: 'ADMK Education/Health to State List — same as DMK #129. Zero cost, long-term institutional reform.' },
    /* 137 */ { cat: 'policy_stance', note: 'ADMK cesses in divisible pool — same mechanism as DMK #130. Additional ₹12–15K Cr/yr to TN if achieved. Employment depends on deployment.' },
    /* 138 */ { cat: 'policy_stance', note: 'Protect TN delimitation representation — CRITICAL for long-term employment. If TN loses 15–20 Lok Sabha seats to UP/Bihar, TN\'s voice in central resource allocation weakens → less central investment in TN → fewer jobs. This is structural employment protection.' },
    /* 139 */ { cat: 'policy_stance', note: 'Greater devolution (vague) — same direction as #130/#137 but less specific. Employment impact depends on specifics.' },
    /* 140 */ { cat: 'policy_stance', note: 'TVK integrity pledge — symbolic. Zero direct employment. If genuine anti-corruption → better investment climate → more FDI → jobs.' },
    /* 141 */ { cat: 'governance', note: 'Anti-corruption commission — 500–1,000 investigative staff. INDIRECT: corruption reduces GDP by 2–3% (World Bank). Anti-corruption commission could increase effective GDP by 1–2% = 2–4L additional jobs/yr through better governance.' },
    /* 142 */ { cat: 'policy_stance', note: 'Vijay monthly Perambur visits — zero employment impact. Constituency-level engagement, not a programme.' },
    /* 143 */ { cat: 'governance', note: 'People\'s advisory councils — 38 district councils × 15–20 members + support staff = 1,000+ advisory/admin positions. Improves district-level planning → better targeted employment schemes.' },
    /* 144 */ { cat: 'governance', note: 'TVK 21-day business approval — same as Batch 2 #43 (cross-reference). Highest INDIRECT employment multiplier. Single-window clearance can create 2–5L MSME jobs/yr.' },
    /* 145 */ { cat: 'urban_dev', note: 'NTK 5 capital cities (governance) — same as Batch 5 #123. Decentralisation employment: 1.5L administrative + service jobs.' },
    /* 146 */ { cat: 'policy_stance', note: '75% GST retention — aspiration, not achievable under current Constitution. If achieved: ₹40,000+ Cr additional for TN. Employment impact: massive (4L+ jobs/yr at infrastructure multiplier). BUT: constitutionally impossible without amendment.' },
    /* 147 */ { cat: 'policy_stance', note: 'Mandatory voting — zero cost governance reform. INDIRECT: higher voter turnout → more representative government → better policy → better employment outcomes. No direct employment.' },
    /* 148 */ { cat: 'policy_stance', note: 'Supreme Court bench in Chennai — zero cost for state. INDIRECT: reduces travel cost for TN litigants. Creates 500–1,000 legal ecosystem jobs (clerks, lawyers, court staff) near Chennai bench.' },
    /* 149 */ { cat: 'governance', note: 'Court forms in Tamil — translation employment: 200+ translators, software localisation developers. Permanent institutional change. Enables Tamil-medium educated citizens to access justice = reduces barriers to economic participation.' },
    /* 150 */ { cat: 'policy_stance', note: 'Tamil Chief Justice — zero cost, zero employment. Symbolic governance demand.' },
    /* 151 */ { cat: 'policy_stance', note: 'Oppose RS MPs as Ministers — zero cost, zero employment. Governance philosophy.' },
    /* 152 */ { cat: 'policy_stance', note: 'Separate women constituencies — if implemented: same as 50% reservation (#23). Long-term employment impact through gender-sensitive policy.' },
    /* 153 */ { cat: 'policy_stance', note: 'State autonomy resolution — philosophical framework. If it leads to greater devolution: significant employment impact through additional fiscal resources.' },

    // ── BATCH 7: Tamil Identity, Ecology & Culture (20 schemes) ──
    /* 154 */ { cat: 'culture_heritage', note: 'International Classical Tamil Conference — ONE-TIME event. 10,000+ temporary jobs (event management, hospitality, translation, logistics). Tourism: 50,000+ visitors. Long-term: raises global Tamil cultural profile → academic/cultural tourism employment.' },
    /* 155 */ { cat: 'culture_heritage', note: 'Temple consecration (cross-ref B4 #85) — 3.75L person-events of artisan employment. Heritage tourism potential: TN temples attract 5 Cr+ visitors/yr. Better maintained temples → more tourism → more employment.' },
    /* 156 */ { cat: 'culture_heritage', note: 'Semmozhi Poongas (cross-ref B5 #112) — 600 permanent park staff + construction employment.' },
    /* 157 */ { cat: 'governance', note: 'Tamil in courts and government — translation/localisation: 500+ jobs. Software: Tamil NLP/AI development for legal tech. Permanent institutional requirement for Tamil-skilled professionals.' },
    /* 158 */ { cat: 'anti_substance', note: 'ADMK prohibition (cross-ref B4 #91) — same NEGATIVE employment impact: 30,000+ TASMAC jobs at risk, 2L+ bar/restaurant jobs.' },
    /* 159 */ { cat: 'social_security', note: '₹10L Jallikattu death compensation — minimal employment. Insurance administration: 10–20 staff. Supports Jallikattu tradition = indirect employment for bull rearing (50,000+ families).' },
    /* 160 */ { cat: 'culture_heritage', note: 'Traditional sports promotion — Jallikattu: 50,000+ families in bull rearing/training. Silambam: 5,000+ instructors needed. Creates sports tourism employment. International Silambam academies = cultural export.', multiplier: 10.0 },
    /* 161 */ { cat: 'policy_stance', note: 'Annaism philosophy — zero cost governance framework. Ideological position, not employment programme.' },
    /* 162 */ { cat: 'anti_substance', note: 'TVK Drug-free TN (cross-ref B4 #93) — 5,000+ enforcement + 1,000+ rehab jobs.' },
    /* 163 */ { cat: 'it_digital', note: 'TVK AI Ministry + University (cross-ref B2 #42) — 500–1,000 faculty/research + 200–500 policy jobs. AI Township: 10,000–50,000 jobs if viable.' },
    /* 164 */ { cat: 'policy_stance', note: 'Vijay\'s pledge + religious outreach — zero employment. Political mobilisation, not programme.' },
    /* 165 */ { cat: 'policy_stance', note: 'Redesign state emblem — ₹0 cost symbolic change. Creates 50–100 design/printing jobs for transition. No sustained employment.' },
    /* 166 */ { cat: 'edu_infra', note: 'Tamil-medium MBBS (cross-ref B2 #46) — 200+ translators, 500+ textbook authors. Creates Tamil-medium medical workforce pipeline.' },
    /* 167 */ { cat: 'governance', note: 'Court forms in Tamil (cross-ref B6 #149) — 200+ translators/developers.' },
    /* 168 */ { cat: 'ecology', note: 'Palmyra planting (cross-ref B3 #73) — 5,000+ nursery workers. 30–50L seasonal livelihoods from mature trees over 10–15 years.' },
    /* 169 */ { cat: 'culture_heritage', note: 'Heritage hubs (cross-ref B5 #126) — 5,000+ direct tourism + 10,000+ indirect jobs.' },
    /* 170 */ { cat: 'policy_stance', note: 'Self-reliant state philosophy — ideological framework. Employment impact depends on policy implementation.' },
    /* 171 */ { cat: 'ecology', note: 'Zero-waste industrial model (cross-ref B2 #49) — 50,000–1L green jobs.' },
    /* 172 */ { cat: 'ecology', note: 'Climate adaptation + water body restoration (cross-ref B3 #72) — 3–5L rural jobs/yr in ecological restoration.' },
    /* 173 */ { cat: 'anti_substance', note: 'Anti-TASMAC stance — same as prohibition schemes. 30,000+ TASMAC jobs at risk. Social reform vs employment trade-off.' }
  ];

  /**
   * Get full employment data for a scheme by D[] index.
   * Merges category profile with per-scheme overrides.
   */
  function getEmployment(idx) {
    if (idx < 0 || idx >= SCHEME_EMP.length) return null;
    var entry = SCHEME_EMP[idx];
    var profile = EMP_CATS[entry.cat];
    if (!profile) return null;

    // Merge: profile defaults + per-scheme overrides
    return {
      category: profile.label,
      direct: profile.direct,
      indirect: profile.indirect,
      skill: entry.skill || profile.skill,
      multiplier: (typeof entry.multiplier === 'number') ? entry.multiplier : profile.multiplier,
      women: entry.women || profile.women,
      youth: entry.youth || profile.youth,
      sustainability: entry.sustainability || profile.sustainability,
      source: entry.source || profile.source,
      note: entry.note || '',
      catId: entry.cat
    };
  }

  /**
   * Render employment data for a given tier.
   * Returns HTML string.
   */
  function renderEmploymentForTier(idx, tier) {
    var emp = getEmployment(idx);
    if (!emp) return '';
    var t = tier || 'V';
    var m = emp.multiplier;

    switch (t) {
      case 'K': {
        var jobs = '';
        if (m >= 50) jobs = 'a LOT of jobs';
        else if (m >= 15) jobs = 'many jobs';
        else if (m >= 5) jobs = 'some jobs';
        else if (m >= 1) jobs = 'a few jobs';
        else if (m > 0) jobs = 'hardly any jobs';
        else jobs = 'no new jobs';
        var emoji = m >= 15 ? '🟢' : m >= 5 ? '🟡' : m > 0 ? '🟠' : '🔴';
        return '<div class="emp-kid">' +
          '<b>' + emoji + ' Jobs:</b> This promise creates ' + jobs + '. ' +
          (emp.note ? kidifyEmp(emp.note) : '') +
          (parseFloat(emp.women) >= 50 ? ' Most of these jobs would go to women!' : '') +
          '</div>';
      }
      case 'T': {
        var rating = m >= 15 ? '🟢 Strong job creator' : m >= 5 ? '🟡 Moderate jobs' : m > 0 ? '🟠 Few jobs' : '🔴 No/negative jobs';
        return '<div class="emp-teen">' +
          '<b>' + rating + '</b><br>' +
          '<b>Direct:</b> ' + emp.direct.roles + '<br>' +
          '<b>Indirect:</b> ' + emp.indirect.sectors + '<br>' +
          (emp.note ? '<b>Key fact:</b> ' + teenifyEmp(emp.note) : '') +
          '</div>';
      }
      case 'V': {
        return '<div class="emp-voter">' +
          '<div class="emp-grid">' +
            '<div><b>Direct Employment</b><br>' + emp.direct.count + '<br><small>' + emp.direct.roles + '</small></div>' +
            '<div><b>Indirect Employment</b><br>' + emp.indirect.count + '<br><small>' + emp.indirect.mechanism + '</small></div>' +
          '</div>' +
          '<div class="emp-meta">' +
            '<span>Multiplier: <b>' + (m > 0 ? m.toFixed(1) + ' jobs/₹1 Cr' : 'N/A') + '</b></span>' +
            '<span>Women: <b>' + emp.women + '</b></span>' +
            '<span>Youth: <b>' + emp.youth + '</b></span>' +
            '<span>Skill level: <b>' + emp.skill + '</b></span>' +
          '</div>' +
          '<div class="emp-sustain"><b>Sustainability:</b> ' + emp.sustainability + '</div>' +
          (emp.note ? '<div class="emp-note"><b>Scheme-specific:</b> ' + emp.note + '</div>' : '') +
          '</div>';
      }
      case 'W': {
        return '<div class="emp-wonk">' +
          '<table class="emp-table">' +
            '<tr><th>Dimension</th><th>Assessment</th></tr>' +
            '<tr><td>Category</td><td>' + emp.category + '</td></tr>' +
            '<tr><td>Direct Employment</td><td>' + emp.direct.count + ' — ' + emp.direct.roles + '</td></tr>' +
            '<tr><td>Indirect / Induced</td><td>' + emp.indirect.count + ' — ' + emp.indirect.mechanism + '</td></tr>' +
            '<tr><td>Employment Multiplier</td><td>' + (m > 0 ? m.toFixed(1) + ' jobs per ₹1 Cr invested/spent' : 'N/A (policy stance)') + '</td></tr>' +
            '<tr><td>Skill Profile</td><td>' + emp.skill + '</td></tr>' +
            '<tr><td>Women\'s Employment Share</td><td>' + emp.women + '</td></tr>' +
            '<tr><td>Youth Employment Share</td><td>' + emp.youth + '</td></tr>' +
            '<tr><td>Sustainability Assessment</td><td>' + emp.sustainability + '</td></tr>' +
            '<tr><td>Timeline</td><td>' + emp.direct.timeline + '</td></tr>' +
          '</table>' +
          '<div class="emp-note"><b>Implementation Note:</b> ' + emp.note + '</div>' +
          '<div class="emp-source"><small>Sources: ' + emp.source + '</small></div>' +
          '</div>';
      }
      case 'E': {
        var grade = m >= 50 ? 'A+ (top decile)' : m >= 15 ? 'A (high)' : m >= 5 ? 'B (moderate)' : m >= 1 ? 'C (low)' : m > 0 ? 'D (minimal)' : m === 0 ? 'N/A' : 'F (negative)';
        return '<div class="emp-econ">' +
          '<div class="emp-header"><b>Employment Efficiency Grade: ' + grade + '</b> | Multiplier: ' + (m > 0 ? m.toFixed(1) : m) + ' jobs/₹1 Cr | Category: ' + emp.category + '</div>' +
          '<table class="emp-table">' +
            '<tr><th>Metric</th><th>Value</th><th>Benchmark</th></tr>' +
            '<tr><td>Employment multiplier</td><td>' + (m > 0 ? m.toFixed(1) : m) + ' jobs/₹1 Cr</td><td>India median: 8.0 (PLFS 2024)</td></tr>' +
            '<tr><td>Women\'s share</td><td>' + emp.women + '</td><td>TN avg: 47% LFPR (PLFS)</td></tr>' +
            '<tr><td>Youth share</td><td>' + emp.youth + '</td><td>TN 18-35 unemployment: 10.2%</td></tr>' +
            '<tr><td>Skill intensity</td><td>' + emp.skill + '</td><td>TN needs: skilled > unskilled (Lewis turning point)</td></tr>' +
            '<tr><td>Fiscal efficiency</td><td>' + (m > 0 ? (1/m*100).toFixed(1) + ' lakhs per job created' : 'No job creation') + '</td><td>MGNREGA: ₹1.5L/job; IT: ₹25L/job</td></tr>' +
          '</table>' +
          '<div class="emp-note"><b>Microeconomic Assessment:</b> ' + emp.note + '</div>' +
          '<div class="emp-sustain"><b>Employment Persistence:</b> ' + emp.sustainability + '</div>' +
          '<div class="emp-source"><small>Empirical sources: ' + emp.source + '</small></div>' +
          '</div>';
      }
      default: return '';
    }
  }

  function kidifyEmp(text) {
    if (!text) return '';
    var s = text.split('.')[0] + '.'; // First sentence only
    return s
      .replace(/₹[\d,]+\s*Cr/g, 'a lot of money')
      .replace(/₹[\d,]+\s*L/g, 'lakhs of rupees')
      .replace(/\bNABARD\b/g, 'a government bank')
      .replace(/\bFPO\b/g, "farmer groups")
      .replace(/\bSHG\b/g, "women's savings groups")
      .replace(/\bMSME\b/g, 'small businesses')
      .replace(/\bGIM\b/g, 'business meeting')
      .replace(/\bmultiplier\b/gi, 'extra good')
      .replace(/\bTANGEDCO\b/g, 'the electricity company')
      .replace(/\bTASMAC\b/g, 'the government liquor shops');
  }

  function teenifyEmp(text) {
    if (!text) return '';
    var s = text.split('.').slice(0, 2).join('.') + '.'; // First 2 sentences
    return s
      .replace(/\bSHG\b/g, "SHG (Self-Help Group)")
      .replace(/\bFPO\b/g, "FPO (Farmer Producer Org)")
      .replace(/\bGIM\b/g, 'Global Investors Meet');
  }

  // ── Public API ────────────────────────────────────────────
  window.EmploymentData = {
    EMP_CATS: EMP_CATS,
    SCHEME_EMP: SCHEME_EMP,
    getEmployment: getEmployment,
    renderEmploymentForTier: renderEmploymentForTier
  };
})();
