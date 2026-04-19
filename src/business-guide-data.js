/* ============================================================
 * TN 2026 — Business & Entrepreneurship Guide Data Module
 * ============================================================
 * Comprehensive data on Tamil Nadu business opportunities,
 * government loan schemes, licenses, and implementation guides.
 *
 * Sources: MSME Annual Report 2024-25, MUDRA Portal, KVIC/PMEGP,
 *   Stand-Up India (standupmitra.in), CGTMSE, TN MSME Policy 2024,
 *   TIIC (tiic.org), TANSIDCO, TAHDCO, StartupTN (startuptn.in),
 *   Guidance TN (guidance.tn.gov.in), FSSAI, GST Council,
 *   Udyam Portal (udyamregistration.gov.in), DPIIT, RBI Reports,
 *   NABARD, SIDBI, TN Industrial Policy 2021, SIPCOT, ELCOT.
 *
 * All figures in INR unless stated. Data as of Q1 2026.
 * ============================================================ */

(function () {
  'use strict';

  // ── 1. GOVERNMENT LOAN & SUBSIDY SCHEMES ──────────────────
  // Each scheme: id, name, type, provider, eligibility, amount,
  //   subsidy, interest, collateral, url, tier explanations.
  var LOAN_SCHEMES = [
    {
      id: 'mudra_shishu',
      name: 'MUDRA — Shishu',
      type: 'loan',
      provider: 'Banks / MFIs / NBFCs (via MUDRA refinance)',
      eligibility: 'Any Indian citizen with a business plan for non-farm income-generating activity. No collateral. No processing fee.',
      amount: { min: 1000, max: 50000, display: 'Up to ₹50,000' },
      subsidy: 'None (interest subvention in some states)',
      interest: '10–12% p.a. (varies by bank)',
      collateral: 'Nil',
      repayment: 'Up to 5 years',
      url: 'https://www.mudra.org.in/',
      apply: 'https://www.udyamimitra.in/',
      tier: {
        K: 'Imagine you want to sell lemonade at school. The government gives you ₹50,000 to buy lemons, sugar and a cart — and you don\'t need to promise your cycle as guarantee!',
        T: 'A micro-loan up to ₹50,000 for anyone starting a tiny business — no collateral needed, available at any bank. Think of it as seed money for your first venture.',
        V: 'MUDRA Shishu provides collateral-free loans up to ₹50,000 through any bank/MFI for non-farm micro-enterprises. Ideal for street vendors, home businesses, artisans.',
        W: 'PMMY Shishu: micro-credit instrument (₹50K ceiling) targeting survivalist entrepreneurship. 2024-25: 4.8 Cr loans sanctioned nationally. Zero collateral, zero processing fee. Refinanced by MUDRA/SIDBI. Default rate: ~5-7% (RBI FIDD data).',
        E: 'Shishu (≤₹50K): addresses credit market failure at base-of-pyramid. Unit economics: avg ticket ₹25K, NPA 5-7%, interest income covers risk for banks at 10-12%. Social ROI positive per MUDRA impact assessment. However, graduation rate to Kishor is only 15-20%.'
      }
    },
    {
      id: 'mudra_kishor',
      name: 'MUDRA — Kishor',
      type: 'loan',
      provider: 'Banks / NBFCs',
      eligibility: 'Existing micro-enterprise seeking expansion. Business should have some track record.',
      amount: { min: 50001, max: 500000, display: '₹50,001 – ₹5,00,000' },
      subsidy: 'None',
      interest: '10–14% p.a.',
      collateral: 'Nil (CGTMSE guarantee available)',
      repayment: 'Up to 7 years',
      url: 'https://www.mudra.org.in/',
      apply: 'https://www.udyamimitra.in/',
      tier: {
        K: 'If your lemonade stand is doing well and you want to add snacks too, this loan gives you up to ₹5 lakh to grow!',
        T: 'For businesses that already exist and want to grow — loans from ₹50K to ₹5 lakh. You need to show your business is working.',
        V: 'MUDRA Kishor: ₹50K–₹5L for existing micro-enterprises seeking expansion capital. No collateral. Apply at any bank branch.',
        W: 'Kishor (₹50K–₹5L): working capital + term loan component for growth-stage micro-enterprises. CGTMSE backstop available. 2024-25 sanctions: ₹1.2L Cr nationally.',
        E: 'Kishor tranche targets the "missing middle" — too large for MFI, too small for SME banking. Avg ticket ₹2.5L, blended NPA ~4%. Key constraint: banks prefer Shishu (volume) over Kishor (higher risk-per-unit). RBI priority sector norms enforce disbursement.'
      }
    },
    {
      id: 'mudra_tarun',
      name: 'MUDRA — Tarun / TarunPlus',
      type: 'loan',
      provider: 'Commercial Banks',
      eligibility: 'Established micro-enterprise with track record. TarunPlus for those who repaid previous MUDRA loans.',
      amount: { min: 500001, max: 2000000, display: '₹5L – ₹20L (TarunPlus up to ₹20L)' },
      subsidy: 'None',
      interest: '9–14% p.a.',
      collateral: 'Nil up to ₹10L; may require for ₹10L–₹20L (TarunPlus)',
      repayment: 'Up to 7 years',
      url: 'https://www.mudra.org.in/',
      apply: 'https://www.udyamimitra.in/',
      tier: {
        K: 'Your snack shop is now famous! You want to open a second shop. This loan gives you up to ₹20 lakh!',
        T: 'The top-tier MUDRA loan — ₹5L to ₹20L for successful businesses scaling up. TarunPlus rewards good repayment history.',
        V: 'MUDRA Tarun (₹5–10L) and TarunPlus (₹10–20L) for established micro-units. TarunPlus requires successful prior MUDRA loan repayment.',
        W: 'Tarun/TarunPlus: graduation pathway in PMMY ladder. TarunPlus (2024 addition) addresses credit cliff between MUDRA and SME banking (₹10–20L). Collateral requirement at TarunPlus level partially defeats financial inclusion objective.',
        E: 'Tarun avg ticket ₹7.5L, NPA ~3.5%. TarunPlus (₹20L ceiling, 2024) designed to reduce informal credit dependence in ₹10–20L segment. Moral hazard: banks cherry-pick lowest-risk applicants. Incremental credit creation estimated at 40-50% (rest substitutes existing bank credit).'
      }
    },
    {
      id: 'pmegp',
      name: 'PMEGP — Prime Minister\'s Employment Generation Programme',
      type: 'loan+subsidy',
      provider: 'KVIC / KVIB / DIC (banks disburse)',
      eligibility: 'Any individual above 18 yrs. For manufacturing: project up to ₹50L; for service: up to ₹20L. Min 8th pass for projects above ₹10L. Not availed any other Govt subsidy.',
      amount: { min: 100000, max: 5000000, display: 'Up to ₹50L (mfg) / ₹20L (service)' },
      subsidy: 'General: 15% urban / 25% rural; SC/ST/OBC/Women/PH/Ex-servicemen: 25% urban / 35% rural (of project cost)',
      interest: 'Bank rate (8–12% p.a.)',
      collateral: 'Nil up to ₹10L (CGTMSE); above ₹10L banks may ask',
      repayment: '3–7 years',
      url: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp',
      apply: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp',
      tier: {
        K: 'The government pays 25–35% of the cost to start your own factory or shop! If you need ₹10 lakh, you only have to repay ₹6.5 lakh.',
        T: 'PMEGP gives you a subsidy of 25–35% on loans up to ₹50 lakh for manufacturing or ₹20 lakh for service businesses. SC/ST/women get the higher subsidy.',
        V: 'PMEGP: government-backed subsidy of 15–35% on project cost for new micro-enterprises. Apply online via KVIC portal. Banks provide the loan; KVIC provides the margin money subsidy directly.',
        W: 'PMEGP (KVIC-administered): flagship micro-enterprise subsidy. Dual component — bank term loan + non-refundable margin money subsidy (15–35%). EDP training mandatory. 2024-25 target: 1.5L units nationally. Overlap with MUDRA creates scheme-shopping; DIC coordination weak.',
        E: 'PMEGP: capital subsidy model (15–35% of project cost). Fiscal cost per unit: ₹2–5L. Employment generation: 6–8 per unit (KVIC evaluation 2023). Deadweight loss: 30-40% of beneficiaries would have started businesses anyway (IEG study). Cost per job: ₹40–60K — among the most efficient govt employment programs. Key risk: 25% of units become non-functional within 3 years.'
      }
    },
    {
      id: 'standup_india',
      name: 'Stand-Up India',
      type: 'loan',
      provider: 'Scheduled Commercial Banks',
      eligibility: 'SC/ST and/or Women entrepreneurs. Greenfield enterprise (first-time ventures) in manufacturing, services, agri-allied, or trading. At least 51% shareholding.',
      amount: { min: 1000000, max: 10000000, display: '₹10L – ₹1 Cr' },
      subsidy: 'None (interest rate as per RBI norms)',
      interest: 'Base rate + 3% + tenure premium (effectively 10–12%)',
      collateral: 'Primary security of assets created + CGTMSE coverage',
      repayment: 'Up to 7 years with max 18 months moratorium',
      url: 'https://www.standupmitra.in/',
      apply: 'https://www.standupmitra.in/',
      tier: {
        K: 'If your mom or someone from a SC/ST family wants to start a business, banks must give them a loan up to ₹1 crore!',
        T: 'Every bank branch MUST give at least one loan to an SC/ST person and one to a woman for starting a new business — ₹10L to ₹1Cr.',
        V: 'Stand-Up India mandates each bank branch to fund at least one SC/ST and one woman borrower for greenfield enterprises (₹10L–₹1Cr). Apply at standupmitra.in.',
        W: 'Stand-Up India: affirmative-action lending mandate. Each of India\'s 1.25L+ bank branches must originate ≥2 loans (1 SC/ST, 1 woman). Handholding agencies assist. CGTMSE composite guarantee. Utilization: ~55% of branch-level targets met (DFS review 2024).',
        E: 'Stand-Up India: supply-side intervention forcing credit allocation to under-served demographics. ₹10L–₹1Cr band targets nascent formal enterprises. NPAs at ~8% (higher than avg SME book). Social cost-benefit positive when accounting for intergenerational wealth creation in SC/ST communities (Thorat & Newman 2012 framework). Additionality estimated at 60%.'
      }
    },
    {
      id: 'cgtmse',
      name: 'CGTMSE — Credit Guarantee Fund Scheme',
      type: 'guarantee',
      provider: 'CGTMSE Trust (SIDBI + GoI)',
      eligibility: 'New or existing MSMEs (micro & small enterprises). Both manufacturing and service. No collateral required from borrower.',
      amount: { min: 0, max: 50000000, display: 'Guarantee up to ₹5 Cr (collateral-free)' },
      subsidy: 'Not a subsidy — government guarantees the loan so bank gives it without collateral',
      interest: 'Bank decides (typically 9–14%)',
      collateral: 'Nil — that is the whole point',
      repayment: 'As per bank sanction',
      url: 'https://www.cgtmse.in/',
      apply: 'Through any bank (bank applies to CGTMSE)',
      tier: {
        K: 'Imagine the government tells the bank: "Don\'t worry, if this person can\'t pay back, I\'ll cover it!" So the bank gives you money without asking for your house as guarantee.',
        T: 'CGTMSE is like a guarantor — the government promises banks it will cover losses if your MSME loan up to ₹5 Cr goes bad. So you don\'t need to pledge property.',
        V: 'CGTMSE provides collateral-free credit guarantee up to ₹5 Cr for micro/small enterprises. Your bank applies to CGTMSE on your behalf. Covers 75-85% of default amount.',
        W: 'CGTMSE: partial credit guarantee (75–85% coverage, capped at ₹5 Cr). Corpus: ₹14,000 Cr. 85.5L guarantees approved cumulatively. Guarantee fee: 0.37–2% of loan (annual, paid by bank/borrower). MLI (Member Lending Institution) absorption of remaining 15–25% risk ensures skin-in-the-game.',
        E: 'CGTMSE addresses collateral constraint — India\'s #1 barrier to MSME credit (RBI Expert Committee on MSMEs, 2019). Leverage ratio: ₹14K Cr corpus supporting ₹4.5L Cr guarantees (~32x). Claim rate: 3.2% (well within actuarial bounds). Fiscal multiplier of guarantee scheme >> direct lending: ₹1 of corpus enables ₹32 of credit. Moral hazard mitigated by MLI risk retention.'
      }
    },
    {
      id: 'needs',
      name: 'NEEDS — New Entrepreneur-cum-Enterprise Development Scheme (TN)',
      type: 'loan+subsidy',
      provider: 'TN Govt via DIC + Banks',
      eligibility: 'TN resident, 21–45 years, educated (diploma/degree for higher limits). First-generation entrepreneur. Manufacturing/service/agri-allied.',
      amount: { min: 500000, max: 5000000, display: 'Up to ₹50L (project cost)' },
      subsidy: '25% back-end capital subsidy (max ₹7.5L) + 3% interest subvention for 5 years',
      interest: 'Bank rate minus 3% (effective ~6–9%)',
      collateral: 'CGTMSE guarantee for eligible portion',
      repayment: '5–7 years',
      url: 'https://msmeonline.tn.gov.in/',
      apply: 'https://msmeonline.tn.gov.in/',
      tier: {
        K: 'Tamil Nadu gives you 25% free money if you\'re starting your first business! If your shop costs ₹20 lakh, TN Govt gives ₹5 lakh free.',
        T: 'NEEDS is Tamil Nadu\'s own scheme — 25% subsidy (max ₹7.5L) plus cheaper interest for first-time entrepreneurs aged 21–45. You need a diploma or degree.',
        V: 'TN\'s NEEDS provides 25% back-end capital subsidy (up to ₹7.5L) + 3% interest subvention for 5 years for first-generation entrepreneurs. Apply via msmeonline.tn.gov.in.',
        W: 'NEEDS (TN MSME Dept): state-level first-gen entrepreneur support. 25% back-end subsidy + 3% interest subvention + CGTMSE guarantee. Age 21–45, min diploma. Complementary to PMEGP (cannot avail both). DIC-level approval. Annual budget: ~₹200 Cr. ~8,000 beneficiaries/year.',
        E: 'NEEDS: TN\'s flagship MSME capital subsidy. 25% back-end (paid after loan utilization verified) reduces moral hazard vs front-end subsidy. ₹200 Cr annual allocation generates ~8K enterprises, ~48K jobs (assuming 6 per unit). Cost per job: ₹41K. Interest subvention (3%, 5 yrs) reduces effective IRR hurdle, enabling marginal projects. Crowding-in effect documented by MSME-DI evaluation.'
      }
    },
    {
      id: 'tiic',
      name: 'TIIC — Tamil Nadu Industrial Investment Corporation',
      type: 'loan',
      provider: 'TIIC (TN Govt financial institution)',
      eligibility: 'MSMEs in Tamil Nadu. Manufacturing, service, logistics, IT. Both new and existing units.',
      amount: { min: 500000, max: 100000000, display: '₹5L – ₹10 Cr (term loan / composite loan)' },
      subsidy: 'None (but can be combined with NEEDS/PMEGP subsidy)',
      interest: '10–13% p.a.',
      collateral: 'Asset created + personal guarantee + CGTMSE where applicable',
      repayment: '5–10 years',
      url: 'https://www.tiic.org/',
      apply: 'https://www.tiic.org/',
      tier: {
        K: 'TIIC is Tamil Nadu\'s own bank for factories and businesses. They give you money to buy machines and build your workshop.',
        T: 'TIIC is the state government\'s financial institution that specifically lends to industries in TN — ₹5 lakh to ₹10 crore.',
        V: 'TIIC provides term loans (₹5L–₹10Cr) for MSMEs in Tamil Nadu. Covers land, building, plant/machinery, working capital. Apply directly at TIIC branches across TN.',
        W: 'TIIC (est. 1949): TN\'s oldest DFI for MSMEs. Portfolio: ~₹8,000 Cr. Products: term loans, composite loans, equipment finance, working capital. District-level offices. Often combines with NEEDS subsidy. NPA: ~6% (CAG 2023). Key advantage: sector-agnostic, faster processing than commercial banks for MSMEs.',
        E: 'TIIC: state DFI with ₹8K Cr book. Risk-adjusted return: marginal (interest income barely covers NPA provisions + admin costs). Value proposition is development banking — filling credit gap where commercial banks underserve TN MSMEs (districts outside Chennai-Coimbatore corridor). Fiscal subsidy (implicit guarantee from TN Govt) estimated at ~₹200 Cr/year.'
      }
    },
    {
      id: 'tahdco',
      name: 'TAHDCO — Adi Dravidar & Tribal Welfare Business Loans (TN)',
      type: 'loan+subsidy',
      provider: 'TAHDCO (TN Govt corporation)',
      eligibility: 'SC/ST individuals in Tamil Nadu. Annual family income below specified limit (varies by scheme). Age 18–55.',
      amount: { min: 50000, max: 1000000, display: '₹50K – ₹10L (various schemes)' },
      subsidy: 'CM-ARISE: up to ₹5L subsidy for SC/ST entrepreneurs; various skill training programs',
      interest: '4–6% p.a. (subsidized)',
      collateral: 'Minimal or nil for most schemes',
      repayment: '3–5 years',
      url: 'https://tahdco.com/',
      apply: 'https://newscheme.tahdco.com/',
      tier: {
        K: 'TAHDCO helps SC/ST families start their own businesses with very cheap loans and free training.',
        T: 'If you belong to SC/ST community in TN, TAHDCO offers special business loans at just 4-6% interest plus free skill training and up to ₹5L subsidy.',
        V: 'TAHDCO provides subsidized loans (4-6% interest) and capital subsidy (CM-ARISE: up to ₹5L) for SC/ST entrepreneurs. Includes livelihood programs, skill training, and industrial space.',
        W: 'TAHDCO (TN ADW Dept): integrated SC/ST enterprise support — CM-ARISE (capital subsidy ₹5L), livelihood programs, skill training (CFTRI, AWS, hospitality), Plug&Play industrial space (Erode, Tiruppur). Annual disbursement: ~₹500 Cr. Intersects with Stand-Up India at bank level.',
        E: 'TAHDCO: affirmative-action DFI. Subsidized rate (4-6%) implies interest subvention of ~₹100 Cr/yr on ₹2,500 Cr portfolio. CM-ARISE capital subsidy: ₹5L per SC/ST unit, ~10K beneficiaries/yr. Cost per job: ₹30-40K (lowest among TN enterprise schemes). High social ROI when accounting for caste-based credit market exclusion (Thorat & Newman framework). NPAs at ~12% — fiscal cost absorbed by ADW budget.'
      }
    },
    {
      id: 'pmfme',
      name: 'PMFME — PM Formalization of Micro Food Processing Enterprises',
      type: 'loan+subsidy',
      provider: 'MoFPI + State Food Processing Depts',
      eligibility: 'Existing or new micro food processing enterprises. Individual, SHG, FPO, cooperative. One District One Product (ODOP) focus.',
      amount: { min: 100000, max: 1000000, display: 'Up to ₹10L credit-linked subsidy' },
      subsidy: '35% of project cost (max ₹10L) for individual micro-units; seed capital ₹40K for SHGs',
      interest: 'Bank rate (subsidy reduces effective cost)',
      collateral: 'As per bank norms / CGTMSE',
      repayment: '3–5 years',
      url: 'https://www.tn-pmfme.com/',
      apply: 'https://www.tn-pmfme.com/',
      tier: {
        K: 'If your family makes pickles, chips, or sweets, the government pays 35% of the cost to make it a proper business with a brand and packaging!',
        T: 'PMFME gives 35% subsidy (up to ₹10L) to formalize your home food business — get FSSAI license, proper packaging, branding, and sell to bigger markets.',
        V: 'PMFME provides 35% credit-linked subsidy (max ₹10L) for micro food processing units. Covers equipment, branding, packaging, FSSAI compliance. Apply via state food processing portal.',
        W: 'PMFME (MoFPI): formalization + value-addition scheme for micro food processors. ODOP approach ensures cluster-level economies of scale. TN ODOP products: banana chips (Nagercoil), palm jaggery (Thanjavur), murukku (Madurai), turmeric (Erode). Common facility centers for testing/packaging. FPO component enables collective procurement.',
        E: 'PMFME: addresses informality in food processing (99% of 25L units are unregistered — MoFPI data). 35% capital subsidy + ODOP clustering creates agglomeration externalities. TN allocation: ~₹250 Cr over scheme period. Expected formalization: ~15K units in TN. Value addition increases margins from 5-10% to 25-40% per unit. Key constraint: FSSAI compliance cost + testing fees represent regressive burden on micro-units.'
      }
    },
    {
      id: 'pm_vishwakarma',
      name: 'PM Vishwakarma — Traditional Artisan Support',
      type: 'loan+subsidy',
      provider: 'MoMSME + Banks',
      eligibility: 'Traditional artisans/craftspeople in 18 specified trades (carpenter, blacksmith, goldsmith, potter, sculptor, cobbler, tailor, weaver, barber, washerman, etc.). Self-employed, no formal employer.',
      amount: { min: 100000, max: 300000, display: '₹1L (1st tranche) + ₹2L (2nd tranche)' },
      subsidy: 'Concessional interest: 5% (GoI subvention of 8%). Free toolkit worth ₹15K. Training stipend ₹500/day.',
      interest: '5% p.a. (8% subvented by GoI)',
      collateral: 'Nil',
      repayment: 'Up to 4 years per tranche',
      url: 'https://pmvishwakarma.gov.in/',
      apply: 'https://pmvishwakarma.gov.in/',
      tier: {
        K: 'If your grandpa is a carpenter or goldsmith, the government gives him free tools, cheap loans, and training!',
        T: 'PM Vishwakarma helps traditional craftspeople (18 trades) with ₹3L in loans at just 5% interest, free toolkits worth ₹15K, and paid training.',
        V: 'PM Vishwakarma: ₹3L total lending (₹1L+₹2L tranches) at 5% interest for traditional artisans in 18 trades. Includes free toolkit, skill training, and marketing support.',
        W: 'PM Vishwakarma (2023): caste-neutral artisan support (18 trades, identified by occupation not caste). Two-tranche lending (₹1L→₹2L conditional on repayment). Digital certification via PM Vishwakarma Certificate. Marketing: GeM onboarding + e-commerce linkage. TN enrollment: ~2.5L artisans registered.',
        E: 'PM Vishwakarma: addresses productivity gap in traditional trades. ₹13K Cr scheme (5 years). Interest subvention: 8% on avg ₹2L = ₹16K/beneficiary/year fiscal cost. Toolkit provision creates immediate productivity jump. Key metric: income increase of 25-40% reported in Year 1 evaluations. Scalability constrained by bank willingness for small-ticket unsecured lending.'
      }
    },
    {
      id: 'startup_tn_tanseed',
      name: 'TANSEED — Tamil Nadu Startup Seed Fund',
      type: 'grant+equity',
      provider: 'StartupTN / TANSIM',
      eligibility: 'DPIIT-recognized startups registered in TN. Less than 3 years old. Must have prototype/MVP. Not received >₹50L external funding.',
      amount: { min: 200000, max: 1000000, display: '₹2L – ₹10L (seed grant/equity)' },
      subsidy: 'Grant or convertible instrument (not repayable if grant)',
      interest: 'N/A (equity/grant)',
      collateral: 'Nil',
      repayment: 'N/A',
      url: 'https://www.startuptn.in/',
      apply: 'https://www.startuptn.in/',
      tier: {
        K: 'If you build a cool app or invent something new in Tamil Nadu, the government gives you up to ₹10 lakh to make it real!',
        T: 'TANSEED is TN\'s startup seed fund — ₹2-10L in grants or equity for early-stage startups. You need a working prototype and DPIIT recognition.',
        V: 'TANSEED provides ₹2–10L as seed grants/equity for TN-based startups with MVPs. Apply via StartupTN portal. No repayment if structured as grant.',
        W: 'TANSEED (StartupTN/TANSIM): seed-stage instrument for DPIIT-recognized TN startups. ₹10L ceiling, convertible note/grant structure. Cohort-based selection (4 rounds/year). Complementary: AngelsTN (investor education), TANFUND (later-stage), SpaceTech Fund (₹10Cr corpus, ₹50L/startup). 14,200+ startups in TN ecosystem.',
        E: 'TANSEED: early-stage de-risking instrument. Avg ticket ₹5L, 50-60 startups funded/year. Expected survival rate: 30-40% (consistent with global seed-stage data). Fiscal cost: ~₹3 Cr/year. If 15% of funded startups reach Series A, implied ROI is positive (each Series A generates ₹5-10 Cr in economic activity). Portfolio approach appropriate at this stage.'
      }
    },
    {
      id: 'nulm_sep',
      name: 'DAY-NULM — Self-Employment Programme',
      type: 'loan+subsidy',
      provider: 'MoHUA + State Urban Livelihood Missions + Banks',
      eligibility: 'Urban poor. Individual: project up to ₹2L. Group: up to ₹10L per SHG. Age 18+, urban residence.',
      amount: { min: 50000, max: 1000000, display: 'Individual: up to ₹2L; SHG: up to ₹10L' },
      subsidy: 'Interest subsidy of 5–7% for 7 years',
      interest: 'Effective 4–7% (after subsidy)',
      collateral: 'Nil up to ₹2L',
      repayment: 'Up to 7 years',
      url: 'https://nulm.gov.in/',
      apply: 'Through urban local body / SHG federation',
      tier: {
        K: 'If your family lives in a city and doesn\'t have much money, this scheme helps them start a small business with very cheap loans.',
        T: 'DAY-NULM helps urban poor start self-employment — loans up to ₹2L with huge interest subsidy. SHG groups can get up to ₹10L.',
        V: 'DAY-NULM SEP provides interest-subsidized loans for urban poor self-employment. Apply through your city corporation or SHG.',
        W: 'DAY-NULM SEP: urban livelihood component. Interest subvention 5-7% for 7 years. Linked to SHG bank linkage model. TN has 2.5L+ urban SHGs. Individual component underperforms group (bank lending preference for SHG guarantees).',
        E: 'DAY-NULM: demand-side intervention for urban informal workers. Subsidy cost: ₹7-14K/beneficiary/year. Unit survival rate: 60% at 3 years (higher than PMEGP — self-selection of urban poor into viable micro-trades). Substitution effect: ~20% would have accessed credit anyway. Net additionality: 80%. Cost per sustained livelihoods: ₹50-70K.'
      }
    }
  ];

  // ── 2. LICENSE & REGISTRATION REQUIREMENTS ────────────────
  var LICENSE_TYPES = [
    {
      id: 'udyam',
      name: 'Udyam Registration (MSME)',
      mandatory: true,
      cost: 'Free',
      time: '10–15 minutes (instant)',
      authority: 'MoMSME, Govt of India',
      url: 'https://udyamregistration.gov.in/',
      documents: 'Aadhaar number + PAN + bank details. Self-declaration — no documents uploaded.',
      categories: 'Micro: <₹1Cr investment & <₹5Cr turnover | Small: <₹10Cr & <₹50Cr | Medium: <₹50Cr & <₹250Cr',
      benefits: 'Priority sector lending, lower interest rates, govt tender preference, subsidy eligibility, delayed payment protection (45-day rule)',
      tier: {
        K: 'A free online ID card for your business — takes 10 minutes and unlocks government benefits.',
        T: 'Register your business as MSME on the Udyam portal — it\'s free, takes 10 minutes with just Aadhaar. Unlocks priority bank loans and govt subsidies.',
        V: 'Udyam Registration is free, instant, Aadhaar-based MSME registration. Mandatory for availing any govt MSME scheme. Replaces old UAM/EM-I/EM-II.',
        W: 'Udyam (2020, replaced UAM): self-declaration, Aadhaar-linked. Auto-verified via CBDT (PAN) and GST. Investment + turnover dual criteria. 2.4 Cr MSMEs registered as of March 2025. Data feeds into CHAMPIONS portal for grievance resolution. Inter-operable with GeM for procurement.',
        E: 'Udyam: formalization instrument reducing information asymmetry between MSMEs and formal financial system. Registration linked to GST/IT returns enables credit scoring. 2.4 Cr registrations represent ~25% of estimated 6.3 Cr MSMEs (NSSO 73rd Round) — formalization gap of 75% persists. Key benefit: triggers MSME Samadhan (45-day payment enforcement) reducing working capital stress.'
      }
    },
    {
      id: 'gst',
      name: 'GST Registration',
      mandatory: true,
      cost: 'Free (penalties for non-compliance: ₹10K–₹25K)',
      time: '3–7 working days',
      authority: 'CBIC / State GST Dept',
      url: 'https://www.gst.gov.in/',
      documents: 'PAN, Aadhaar, business address proof, bank account details, photos, business registration docs',
      categories: 'Mandatory if turnover >₹40L (goods) / >₹20L (services) / >₹10L (NE & hill states). Composition scheme: pay 1-6% flat tax if turnover <₹1.5Cr.',
      benefits: 'Legal compliance, input tax credit, interstate trade, govt contract eligibility, digital invoicing',
      tier: {
        K: 'If your business earns more than ₹40 lakh a year, you must register for GST — it\'s like a tax ID.',
        T: 'GST registration is mandatory above ₹40L turnover for goods or ₹20L for services. It lets you claim input tax credit — meaning you pay tax only on value you add.',
        V: 'GST registration required if annual turnover exceeds ₹40L (goods) or ₹20L (services). Register free at gst.gov.in. Composition scheme available for small businesses.',
        W: 'GST (2017): destination-based consumption tax. Mandatory registration thresholds: ₹40L goods / ₹20L services. Composition scheme (1-6% flat) for turnover <₹1.5Cr simplifies compliance. E-invoicing mandatory >₹5Cr turnover. TN GST collection: ₹1.05L Cr (FY25, SGST component).',
        E: 'GST: input tax credit chain reduces cascading (estimated 1-2% reduction in effective tax burden per NIPFP study). Compliance cost for micro-enterprises: ₹25-50K/year (return filing, accounting). Voluntary registration below threshold beneficial only if B2B (for ITC pass-through). Composition scheme reduces compliance cost to ₹5-10K/year. TN revenue neutrality achieved in FY24.'
      }
    },
    {
      id: 'fssai',
      name: 'FSSAI License / Registration',
      mandatory: true,
      cost: '₹100 (basic) / ₹2,000–5,000 (state) / ₹7,500 (central)',
      time: '7–30 days',
      authority: 'FSSAI / State Food Safety Authority',
      url: 'https://foscos.fssai.gov.in/',
      documents: 'Photo ID, business address proof, food safety plan, list of food products, water test report (if applicable)',
      categories: 'Basic Registration: <₹12L turnover | State License: ₹12L–₹20Cr | Central License: >₹20Cr or multistate',
      benefits: 'Legal to sell food, consumer trust, ecommerce platform listing (mandatory), brand credibility',
      tier: {
        K: 'If you sell any food — from tiffin to snacks — you need this license. It tells people your food is safe to eat!',
        T: 'FSSAI license is needed for ANY food business. Basic registration costs just ₹100 and is enough for small home businesses. The 14-digit number goes on your packaging.',
        V: 'FSSAI registration (₹100 for <₹12L turnover) or license (₹2K+ for higher turnover) is mandatory for all food businesses. Apply at foscos.fssai.gov.in.',
        W: 'FSSAI licensing: 3-tier structure (basic/state/central) based on turnover and geography. FoSCoS (online portal) processes applications. Perpetual license option available. TN has ~8.5L registered food businesses. Common non-compliance: home-based caterers and cloud kitchens.',
        E: 'FSSAI: information asymmetry reduction instrument (Akerlof lemons problem in food market). Compliance cost-benefit: ₹100–₹7,500 license fee vs ₹25K fine for non-compliance (Section 55, FSS Act). Market access premium: FSSAI-licensed products command 10-15% price premium on e-commerce (Amazon/Flipkart listing requires FSSAI). Regulatory burden per unit: ~₹5-15K/year including testing.'
      }
    },
    {
      id: 'trade_license',
      name: 'Trade License / Shop & Establishment',
      mandatory: true,
      cost: '₹500–₹5,000 (varies by local body)',
      time: '7–15 days',
      authority: 'City Corporation / Municipality / Town Panchayat + Labour Dept',
      url: 'https://tnurbanepay.tn.gov.in/',
      documents: 'ID proof, address proof, rental agreement/property document, NOC from landlord, business details',
      categories: 'All businesses operating from a physical premises',
      benefits: 'Legal operation permit, mandatory for bank account/loan, police verification',
      tier: {
        K: 'Like getting permission from the town to open your shop — you can\'t just open anywhere without telling them!',
        T: 'Every shop needs a trade license from the local body (corporation/municipality). It costs ₹500–₹5,000 and takes about 2 weeks.',
        V: 'Trade license from local body + Shop & Establishment registration from Labour Dept. Mandatory for all physical businesses. Apply at city corporation office or e-Sevai.',
        W: 'Trade license (TN District Municipalities Act / Chennai City Municipal Corporation Act) + Shop & Establishment Act registration (TN Shops & Establishments Act, 1947). Decentralized issuance by 15 corporations, 138 municipalities, 529 town panchayats. E-governance: tnurbanepay.tn.gov.in.',
        E: 'Compliance cost: ₹500-₹5K/year + opportunity cost of 2-3 visits. Reform opportunity: unified business license (single window). TN Guidance portal partially addresses this for larger projects. Ease of Doing Business reforms reduced average time from 30 to 7 days in urban TN (DPIIT ranking data).'
      }
    },
    {
      id: 'fire_noc',
      name: 'Fire NOC',
      mandatory: true,
      cost: '₹1,000–₹10,000 (based on building area)',
      time: '15–30 days',
      authority: 'TN Fire & Rescue Services',
      url: 'https://tnesevai.tn.gov.in/',
      documents: 'Building plan, fire safety plan, equipment details (extinguishers, exits, sprinklers)',
      categories: 'Mandatory for commercial premises >200 sq ft or with public access',
      benefits: 'Safety compliance, insurance validity, bank loan processing',
      tier: {
        K: 'Making sure your shop has fire extinguishers and emergency exits so everyone stays safe!',
        T: 'Fire NOC certifies your business has fire safety equipment and exits. Required for any commercial space.',
        V: 'Fire NOC from TN Fire & Rescue is mandatory for commercial premises. Costs ₹1K–₹10K. Requires fire extinguishers, exit signage, safety plan.',
        W: 'Fire NOC: TN Fire Service Act compliance. Issued by Divisional Fire Officer. Requirements scaled by building height, occupancy class, and floor area. Renewal: annual. Common non-compliance in SME clusters leads to insurance invalidation.',
        E: 'Fire NOC: externality correction (fire risk to neighboring properties). Compliance cost: ₹5-15K (equipment + NOC fee). Opportunity cost of fire: avg ₹50L–₹2Cr for SME fires. Insurance-linkage creates market incentive. Enforcement gap: <30% of MSMEs in TN have valid Fire NOC (TNFRS data).'
      }
    },
    {
      id: 'tnpcb',
      name: 'Pollution Consent (CTE / CTO)',
      mandatory: true,
      cost: '₹5,000–₹50,000+ (based on category)',
      time: '30–90 days',
      authority: 'Tamil Nadu Pollution Control Board (TNPCB)',
      url: 'https://tnpcb.gov.in/',
      documents: 'Project report, EIA (if applicable), site plan, process flow, waste management plan',
      categories: 'Red (high pollution) / Orange / Green / White category industries. CTE = Consent to Establish, CTO = Consent to Operate.',
      benefits: 'Legal operation, avoids closure orders, bank loan requirement, export certification',
      tier: {
        K: 'You need permission to make sure your factory doesn\'t pollute the air and water.',
        T: 'TNPCB consent is needed before starting any manufacturing — they check that your factory won\'t pollute beyond limits. Green category is easiest.',
        V: 'TNPCB Consent to Establish (before setup) and Consent to Operate (before production) required for manufacturing. Green/White categories get fast-track approval.',
        W: 'TNPCB CTE/CTO: Water Act 1974 + Air Act 1981. Industry categorization: White (auto-consent) → Green (self-certification pilot) → Orange (regular) → Red (full EIA). TN has ~1.2L consented units. Online: OCMMS portal. Zero Liquid Discharge (ZLD) mandate for Tiruppur dyeing cluster.',
        E: 'Pollution consent: Pigouvian regulation. Compliance cost: ₹5K (white) to ₹5L+ (red category with EIA). Time cost: 30-90 days = significant delay cost for MSMEs. Reform impact: self-certification for green units reduced processing from 60 to 7 days. Key trade-off: environmental protection vs ease of doing business. TN\'s ZLD mandate cost Tiruppur textile cluster ₹700 Cr but prevented Noyyal river death.'
      }
    },
    {
      id: 'iec',
      name: 'IEC — Import Export Code',
      mandatory: false,
      cost: 'Free (online)',
      time: '2–3 days (instant in many cases)',
      authority: 'DGFT, Ministry of Commerce',
      url: 'https://www.dgft.gov.in/',
      documents: 'PAN, Aadhaar, bank certificate, business proof',
      categories: 'Required only for businesses involved in import or export of goods/services',
      benefits: 'Enables international trade, customs clearance, export incentives (MEIS/RoDTEP)',
      tier: {
        K: 'If you want to sell your products in other countries, you need this special code — it\'s like a passport for your goods!',
        T: 'IEC is a 10-digit code needed to import or export. It\'s free and takes 2 days online. Mandatory for customs clearance.',
        V: 'IEC (Import Export Code) is free, instant registration for any business doing international trade. Apply at dgft.gov.in.',
        W: 'IEC (DGFT): PAN-based 10-digit code. One-time registration, no renewal. Required for customs clearance + RBI forex transactions. TN exports: ₹5.83L Cr (FY25) — 2nd largest exporting state. Key sectors: auto, IT services, textiles, leather, electronics.',
        E: 'IEC: zero-cost market access instrument. TN export-to-GSDP ratio: ~47% (among highest in India). IEC eliminates regulatory barrier to export entry. Marginal firm accessing export market increases revenue by 30-50% (heterogeneous firm trade models). Policy linkage: RoDTEP (2-4% of FOB) + PLI (production-linked incentive) accessible only with IEC.'
      }
    }
  ];

  // ── 3. BUSINESS OPPORTUNITIES — SECTOR-WISE ──────────────
  // Each business: id, name, sector, capital, licenses[], loans[],
  //   revenue, margin, channels[], steps[], tnAdvantage, policyUrl, tier
  var BUSINESS_IDEAS = [
    {
      id: 'food_processing',
      name: 'Packaged Food / Snacks Unit',
      sector: 'Food Processing',
      sectorIcon: '🍿',
      capital: { min: 200000, max: 1500000, display: '₹2L – ₹15L' },
      licenses: ['fssai', 'gst', 'udyam', 'trade_license'],
      loans: ['mudra_kishor', 'pmegp', 'needs', 'pmfme'],
      revenue: { monthly: '₹1.5L – ₹8L', annual: '₹18L – ₹1Cr', breakeven: '6–12 months' },
      margin: '25–45%',
      channels: ['Local retail shops', 'Online (Amazon, Flipkart, BigBasket)', 'Wholesale (APMC, distributors)', 'D2C website + social media', 'Amma Canteen / PDS supply'],
      steps: [
        'Identify ODOP product for your district (banana chips, murukku, palm jaggery, pickles)',
        'Get Udyam + FSSAI basic registration (₹100, same day)',
        'Apply PMFME subsidy (35%, max ₹10L) via tn-pmfme.com',
        'Set up production unit (semi-automatic machines ₹2–5L)',
        'Get packaging + branding designed (₹10–30K)',
        'NABL lab testing for nutritional info (₹3–8K per product)',
        'List on Amazon/Flipkart (FSSAI number mandatory)',
        'Supply to local shops + build wholesale distribution',
        'Scale via MUDRA Tarun / TIIC for second product line'
      ],
      tnAdvantage: 'TN is India\'s #1 banana producer (19.4% national share), #1 in drumstick (98%), major in coconut (29.1%), turmeric (14.6%). ODOP districts pre-mapped. CFTRI Mysore (nearby) for product development. Tirupur and Chennai are packaging hubs.',
      policyUrl: 'https://www.tn-pmfme.com/',
      tier: {
        K: 'Make yummy snacks at home, get a government license, and sell them in shops and online — the government pays 35% of your starting cost!',
        T: 'Start a packaged food business with ₹2–15L. Get 35% subsidy from PMFME. TN has the best raw materials — bananas, coconut, turmeric. Sell on Amazon or local shops.',
        V: 'Packaged food is one of TN\'s easiest businesses to start. PMFME gives 35% subsidy. FSSAI basic registration is ₹100. ODOP products (district-specific) get priority funding. High margins (25–45%) with proper branding.',
        W: 'Food processing in TN: 3rd largest contributor to GSDP manufacturing. ODOP mapping covers 38 districts with identified products. PMFME + NEEDS stackable subsidies can cover 50-60% of project cost. Value chain: primary procurement → processing → packaging → e-commerce/retail. TN Food Processing Policy 2023 offers additional state incentives for cold chain and testing infrastructure.',
        E: 'Micro food processing: unit economics favorable — raw material cost 30-40% of revenue, processing cost 15-20%, leaving 25-45% gross margin. Capital efficiency: ₹10L investment generates ₹8-12L annual profit at capacity utilization >60%. PMFME subsidy reduces payback to 6-8 months. Key risk: quality consistency at scale. TN advantage: proximity to raw material (negative transport cost vs competitors), existing APMC market infrastructure, and strong e-commerce logistics network.'
      }
    },
    {
      id: 'cloud_kitchen',
      name: 'Cloud Kitchen / Home Catering',
      sector: 'Food & Hospitality',
      sectorIcon: '🍱',
      capital: { min: 100000, max: 500000, display: '₹1L – ₹5L' },
      licenses: ['fssai', 'gst', 'trade_license', 'fire_noc'],
      loans: ['mudra_shishu', 'mudra_kishor', 'nulm_sep'],
      revenue: { monthly: '₹50K – ₹3L', annual: '₹6L – ₹36L', breakeven: '3–6 months' },
      margin: '30–50%',
      channels: ['Swiggy / Zomato', 'WhatsApp orders', 'Instagram marketing', 'Corporate tiffin subscriptions', 'Event catering'],
      steps: [
        'Identify cuisine niche (South Indian meals, biryani, healthy/diet food, sweets)',
        'Register FSSAI basic (₹100) + GST (if turnover >₹20L)',
        'Set up kitchen (can start from home with existing equipment)',
        'Onboard Swiggy/Zomato (commission: 20–25%)',
        'Build WhatsApp/Instagram customer base for direct orders',
        'Start corporate tiffin service (recurring revenue)',
        'Expand to event catering for higher ticket size',
        'Consider ghost kitchen (multiple brands, one kitchen)'
      ],
      tnAdvantage: 'Chennai is India\'s #3 food delivery market. TN\'s diverse cuisine (Chettinad, Madurai, Kongu, Nellai, Thanjavur) provides differentiation. Lower rental costs vs Mumbai/Bangalore for kitchen space.',
      policyUrl: 'https://foscos.fssai.gov.in/',
      tier: {
        K: 'Cook food at home, take orders on WhatsApp, and deliver through Swiggy! You can start with just ₹1 lakh.',
        T: 'A cloud kitchen means cooking food for delivery — no restaurant needed. Start from home, list on Swiggy/Zomato, build a brand on Instagram. ₹1–5L to start.',
        V: 'Cloud kitchen: low-capital, high-margin business. Start from home kitchen (FSSAI basic: ₹100). Swiggy/Zomato onboarding in 3-7 days. Direct orders via WhatsApp eliminate 20-25% commission.',
        W: 'Cloud kitchen economics: zero dine-in capex, lower rental (industrial/residential zone adequate). Multi-brand operation from single kitchen maximizes utilization. Commission arbitrage: platform orders (20-25% commission) vs direct (0%). Corporate tiffin: highest LTV segment. TN food delivery GMV: ₹8,000 Cr+ (NRAI 2024).',
        E: 'Cloud kitchen unit economics: food cost 30-35%, packaging 5-8%, platform commission 20-25% (on platform orders), delivery cost 0% (platform-borne). Blended margin: 30-50% on direct orders, 10-20% on platform. CAC on Instagram: ₹50-100/customer vs platform acquisition cost (baked into commission). Optimal strategy: use platforms for discovery, convert to direct. Capital productivity: ₹5L investment → ₹2-3L/month revenue achievable in Chennai within 6 months.'
      }
    },
    {
      id: 'textile_manufacturing',
      name: 'Textile / Garment Manufacturing Unit',
      sector: 'Textiles & Apparel',
      sectorIcon: '🧵',
      capital: { min: 500000, max: 5000000, display: '₹5L – ₹50L' },
      licenses: ['udyam', 'gst', 'trade_license', 'tnpcb', 'fire_noc', 'iec'],
      loans: ['pmegp', 'needs', 'tiic', 'standup_india', 'cgtmse'],
      revenue: { monthly: '₹3L – ₹25L', annual: '₹36L – ₹3Cr', breakeven: '8–18 months' },
      margin: '15–35%',
      channels: ['Export (through export houses/agents)', 'Domestic wholesale (via agents)', 'Own brand on Amazon/Flipkart/Meesho', 'Government tenders (khadi/uniform)', 'Tiruppur/Karur cluster integration'],
      steps: [
        'Identify niche: knitted garments (Tiruppur), home textiles (Karur), woven garments (Chennai), silk sarees (Kanchipuram)',
        'Get Udyam + GST + IEC registration',
        'Apply PMEGP (25-35% subsidy) or NEEDS (25% subsidy)',
        'Lease industrial space (TANSIDCO shed: ₹5-15/sq ft/month)',
        'Purchase machinery (cutting, sewing, embroidery — ₹5-20L)',
        'Hire trained workers (ITI/ATDC certified preferred)',
        'Get TNPCB Consent (Green/White category for garment stitching)',
        'Integrate into Tiruppur/Karur supply chain for export orders',
        'Build own brand for D2C (Meesho, Amazon) for higher margins'
      ],
      tnAdvantage: 'TN has 50%+ of India\'s spinning capacity. Tiruppur exports ₹35,000 Cr/year in knitwear. Karur is India\'s home textile capital. Coimbatore is textile machinery hub (LMW). Complete value chain exists within 200km radius.',
      policyUrl: 'https://guidance.tn.gov.in/',
      tier: {
        K: 'TN makes half of India\'s cloth! You can start making T-shirts or bed sheets and sell them all over the world.',
        T: 'Tamil Nadu is India\'s textile powerhouse — Tiruppur alone exports ₹35,000 Cr/year. Start a garment unit with ₹5-50L, get 25-35% subsidy, and plug into the export supply chain.',
        V: 'Textile manufacturing in TN benefits from existing cluster infrastructure (Tiruppur, Karur, Coimbatore). PMEGP/NEEDS subsidies cover 25-35% capital cost. TANSIDCO provides ready industrial sheds.',
        W: 'TN textile cluster economics: Tiruppur (knitwear, $4.5B exports), Karur (home textiles, $1B), Salem (power looms), Kanchipuram (silk). Value chain integration reduces transaction costs. Labour availability: 35M employed in textile nationally, TN contributes ~15%. Cluster-level common effluent treatment (CETP) solves environmental compliance. PLI for MMF/technical textiles applicable.',
        E: 'TN textile comparative advantage: Heckscher-Ohlin labour abundance + revealed comparative advantage index >2.0 for knitted garments. Unit economics: garment manufacturer with ₹30L capex → ₹15-20L annual EBITDA at 70% capacity utilization. Export price realization: $3-5/piece for basic knitwear, $8-15 for fashion. Key risk: Chinese competition in basic segment, Bangladesh in low-end. TN must move up value chain to fashion/technical textiles. Subsidy stacking (PMEGP 25% + state TUFS interest subvention) reduces effective capex by 40%.'
      }
    },
    {
      id: 'it_services',
      name: 'IT Services / Software Development Company',
      sector: 'IT & Digital',
      sectorIcon: '💻',
      capital: { min: 100000, max: 1000000, display: '₹1L – ₹10L' },
      licenses: ['udyam', 'gst'],
      loans: ['mudra_kishor', 'startup_tn_tanseed', 'cgtmse'],
      revenue: { monthly: '₹1L – ₹20L', annual: '₹12L – ₹2.4Cr', breakeven: '2–6 months' },
      margin: '40–70%',
      channels: ['Freelance platforms (Upwork, Toptal, Fiverr)', 'Direct client acquisition (LinkedIn, cold outreach)', 'Product (SaaS)', 'Government projects (TNeGA, GeM)', 'Staffing/body shopping'],
      steps: [
        'Define service: web/mobile dev, AI/ML, cloud, cybersecurity, SaaS product',
        'Register company (LLP/Pvt Ltd) + Udyam + GST',
        'Get DPIIT Startup Recognition (if innovative, unlocks TANSEED + tax benefits)',
        'Set up workspace (co-working: ₹5-15K/month or home)',
        'Build portfolio with 2-3 showcase projects',
        'Acquire first clients (LinkedIn, referrals, freelance platforms)',
        'Apply TANSEED seed fund (₹2-10L) if building a product',
        'Scale team: hire from TN\'s 526 engineering colleges',
        'Target export revenue for higher margins + IEC benefits'
      ],
      tnAdvantage: 'Chennai is "SaaS Capital of India". TN contributes $28B to IT exports. 526 engineering colleges provide talent pipeline. Tidel Parks in Chennai, Coimbatore, Madurai offer subsidized office space. ELCOT SEZ for IT companies.',
      policyUrl: 'https://www.startuptn.in/',
      tier: {
        K: 'If you\'re good with computers, you can build apps and websites and sell them to companies all over the world — from your bedroom in Chennai!',
        T: 'Start an IT company with just ₹1-10L. TN has the most engineering colleges in India (526). Chennai is the SaaS capital. Build software, sell globally, keep 40-70% as profit.',
        V: 'IT services business has the highest margins (40-70%) and lowest capital requirement. TN\'s IT ecosystem (ELCOT, Tidel Parks, StartupTN) provides infrastructure. Export revenue attracts zero GST.',
        W: 'TN IT ecosystem: $28B exports (FY24), 780K workforce. Chennai: global SaaS hub ($1B revenue, 10K jobs in SaaS alone). Coimbatore: emerging IT city (Bosch, Amazon R&D). StartupTN: 14,200+ startups, 127 incubators. ELCOT IT Parks offer subsidized space (₹12-25/sq ft vs ₹50-80 commercial). TNeGA drives government digital projects — procurement via GeM/TN e-Tenders.',
        E: 'IT services: near-zero marginal cost of production (software), infinite scalability. Unit economics: 1 developer (cost ₹6-12L/year) generates ₹15-30L/year revenue. Gross margin: 50-70%. Capital productivity: highest across all sectors (₹1L investment can generate ₹1Cr revenue in 3 years). TN advantage: labour cost arbitrage (Chennai developer: $15-25K/year vs US $100-150K). Risk: AI disruption of low-value coding. Strategy: move up to AI/ML, product, and deep-tech.'
      }
    },
    {
      id: 'organic_farming',
      name: 'Organic Farming & Agri-Business',
      sector: 'Agriculture',
      sectorIcon: '🌾',
      capital: { min: 100000, max: 1000000, display: '₹1L – ₹10L (for processing + certification)' },
      licenses: ['udyam', 'fssai', 'gst'],
      loans: ['mudra_kishor', 'pmegp', 'pmfme'],
      revenue: { monthly: '₹30K – ₹3L', annual: '₹3.6L – ₹36L', breakeven: '12–24 months' },
      margin: '30–60% (premium over conventional)',
      channels: ['Direct-to-consumer (farm visits, subscription boxes)', 'Organic stores (Organic Tattva, 24Mantra)', 'E-commerce (Amazon Organic, BigBasket)', 'FPO aggregation for export', 'Farmers market / weekend markets'],
      steps: [
        'Convert land to organic (3-year transition for certification, or PGS for immediate)',
        'Get PGS-India certification (free, group-based) or third-party organic cert (₹20-50K)',
        'Register FPO/cooperative for collective marketing and subsidy access',
        'Apply PMFME for processing equipment (dehydrator, grinder, packaging)',
        'Build brand: packaging, website, social media presence',
        'Supply to organic stores + launch subscription boxes in Chennai/Coimbatore',
        'Get FSSAI + Organic logo for packaging',
        'Target export through APEDA registration'
      ],
      tnAdvantage: 'TN is India\'s largest banana, coconut, drumstick producer. Nilgiris tea, Salem turmeric, Thanjavur rice are premium products. Natural farming push by TN Govt. Strong consumer demand in Chennai/Coimbatore for organic.',
      policyUrl: 'https://www.tn.gov.in/department/2',
      tier: {
        K: 'Grow vegetables and fruits without chemicals, put them in nice boxes, and sell them to people who want healthy food!',
        T: 'Organic food sells for 30-60% more than regular food. Get free PGS certification, grow organic, brand it, and sell directly to health-conscious consumers in cities.',
        V: 'Organic farming in TN offers premium pricing (30-60% over conventional). PGS-India certification is free. PMFME subsidizes processing. Direct-to-consumer models via subscription boxes have highest margins.',
        W: 'TN organic farming: Organic Farming Policy 2020 targets 5L hectares by 2025. PGS-India (participatory guarantee) enables small farmer certification without third-party cost. FPO aggregation model (PM-FME + NABARD support) enables scale. Key districts: Nilgiris (tea), Erode (turmeric), Dindigul (millets), Ariyalur (paddy). Export potential via APEDA certification + NPOP compliance.',
        E: 'Organic farming premium: 30-60% price above conventional. Yield penalty: 15-25% in transition, stabilizes at 85-95% of conventional by Year 3 (meta-analysis, Seufert et al. 2012). Net income per hectare: organic > conventional after Year 3. Key economic insight: information asymmetry addressed by certification — willingness-to-pay exists but trust must be signaled. D2C model eliminates intermediary margins (30-40%). Unit economics: 1 acre organic vegetables → ₹3-5L annual revenue (vs ₹1.5-2.5L conventional). Capital constraint: certification period (3 years) requires patient capital.'
      }
    },
    {
      id: 'beauty_wellness',
      name: 'Beauty Salon / Wellness Center',
      sector: 'Beauty & Personal Care',
      sectorIcon: '💇',
      capital: { min: 200000, max: 2000000, display: '₹2L – ₹20L' },
      licenses: ['trade_license', 'gst', 'fire_noc'],
      loans: ['mudra_kishor', 'mudra_tarun', 'needs', 'nulm_sep'],
      revenue: { monthly: '₹80K – ₹5L', annual: '₹10L – ₹60L', breakeven: '6–12 months' },
      margin: '40–65%',
      channels: ['Walk-in customers', 'Online booking (Urban Company, Housejoy)', 'Social media (Instagram/YouTube)', 'Bridal/event packages', 'Home service visits'],
      steps: [
        'Choose segment: basic salon, premium salon, spa, specialized (bridal/skin)',
        'Complete beautician training (TAHDCO offers free courses!)',
        'Get trade license + GST (if >₹20L turnover)',
        'Secure retail space (500-1000 sq ft) + interior fit-out (₹2-10L)',
        'Purchase equipment (chairs, mirrors, sterilizers, products — ₹1-5L)',
        'Hire trained staff or operate solo initially',
        'List on Urban Company for additional customer flow',
        'Build Instagram portfolio of work for organic marketing',
        'Expand to multiple branches or franchise model'
      ],
      tnAdvantage: 'TAHDCO offers FREE cosmetology, aesthetics and dermaplaning courses for SC/ST women. High urbanization (48%) means large customer base. Chennai and Coimbatore have growing premium salon market. Aari work and traditional beauty practices add unique differentiation.',
      policyUrl: 'https://tahdco.com/',
      tier: {
        K: 'Learn to cut hair and do makeup, open a beauty shop, and make people look and feel great!',
        T: 'Beauty salon is one of the fastest-growing businesses — ₹2-20L to start, 40-65% margins. TAHDCO offers free training courses for SC/ST women.',
        V: 'Beauty/wellness: high-margin (40-65%), recurring-revenue business. Start basic (₹2-5L) or premium (₹10-20L). Urban Company partnership drives customers. TAHDCO free training available.',
        W: 'Indian beauty market: $20B (2024), growing 12% annually. TN urbanization 48% — 2nd highest customer density. Key strategy: Urban Company onboarding (commission: 15-20%) for customer acquisition, then convert to direct booking. TAHDCO cosmetology programs: free training + placement for SC/ST women — addresses both supply and demand.',
        E: 'Salon economics: service-based, high operating leverage. Fixed cost: rent (30-40% of revenue) + staff (20-25%). Variable cost: products (5-10%). Blended margin: 40-65%. Revenue per sqft: ₹500-2000/month. LTV of customer: ₹8-12K/year (monthly visits). CAC via Instagram: ₹200-500. Unit economics turn positive at 20-25 customers/day. Break-even: 6-12 months. Scalability: franchise model (Naturals, GreenTrends) proven in TN.'
      }
    },
    {
      id: 'education_coaching',
      name: 'Coaching / Tutoring Center',
      sector: 'Education',
      sectorIcon: '📚',
      capital: { min: 50000, max: 500000, display: '₹50K – ₹5L' },
      licenses: ['trade_license', 'gst'],
      loans: ['mudra_shishu', 'mudra_kishor', 'nulm_sep'],
      revenue: { monthly: '₹30K – ₹3L', annual: '₹3.6L – ₹36L', breakeven: '2–6 months' },
      margin: '50–75%',
      channels: ['Physical classes', 'Online classes (Zoom/Meet)', 'YouTube channel (ad revenue)', 'Course platforms (Unacademy, Udemy)', 'Hybrid model'],
      steps: [
        'Identify subject/exam niche (NEET, JEE, TNPSC, spoken English, coding)',
        'Register as proprietorship + trade license',
        'Set up small classroom (300-500 sq ft) or teach from home',
        'Create content: notes, question banks, mock tests',
        'Start with 10-20 students through local marketing',
        'Launch YouTube channel for free content (builds brand)',
        'Add online batch for wider reach (Zoom: ₹1,200/month)',
        'Scale to multiple batches/subjects/locations',
        'Consider franchise or online-only model for state-wide reach'
      ],
      tnAdvantage: 'TN has India\'s highest gross enrollment ratio in higher education. Competitive exam culture (NEET, TNPSC) creates huge demand. 526 engineering colleges generate demand for supplementary coaching. Naan Mudhalvan platform creates digital skills demand.',
      policyUrl: 'https://www.naanmudhalvan.tn.gov.in/',
      tier: {
        K: 'If you\'re really good at a subject, you can teach other kids and earn money! Start with a small classroom or teach online.',
        T: 'Start a coaching center for NEET/JEE/TNPSC prep. ₹50K–5L to start. Highest margins (50-75%) of any business. Online classes mean no location limit.',
        V: 'Coaching/tutoring is the highest-margin (50-75%) business with lowest capital. NEET coaching alone is a ₹10,000 Cr market in TN. Hybrid (offline+online) model maximizes reach.',
        W: 'TN education market: ~₹15,000 Cr (coaching+supplementary). NEET demand: 6.5L TN aspirants annually. TNPSC: 15L+ applicants/year. Digital enablement: Naan Mudhalvan enrolls 15L+ students in digital skills. Online coaching reduces fixed costs by 70%. Content moats: proprietary question banks + mock tests.',
        E: 'Coaching economics: zero marginal cost for additional student in online batch (up to bandwidth limit ~500). Revenue per student: ₹15K-₹2L/year depending on exam and tier. Physical center: ₹50K fixed cost/month, breakeven at 30-50 students. Online: ₹5K/month (Zoom+marketing), breakeven at 5-10 students. Blended LTV/CAC ratio: 10-15x. Market structure: monopolistic competition — differentiation via results track record. Risk: regulatory uncertainty (coaching regulation bill).'
      }
    },
    {
      id: 'auto_components',
      name: 'Auto Components / Precision Manufacturing',
      sector: 'Manufacturing',
      sectorIcon: '⚙️',
      capital: { min: 1000000, max: 10000000, display: '₹10L – ₹1Cr' },
      licenses: ['udyam', 'gst', 'tnpcb', 'fire_noc', 'iec'],
      loans: ['pmegp', 'needs', 'tiic', 'standup_india', 'cgtmse'],
      revenue: { monthly: '₹5L – ₹50L', annual: '₹60L – ₹6Cr', breakeven: '12–24 months' },
      margin: '15–30%',
      channels: ['Tier-1 supplier integration (Hyundai, Nissan, TVS, Ashok Leyland)', 'Aftermarket retail', 'Export through trading companies', 'GeM (government procurement)', 'Direct supply to assemblers in Ambattur/Oragadam'],
      steps: [
        'Identify component niche (rubber parts, sheet metal, plastic molding, machined parts)',
        'Get Udyam + GST + IEC (if export)',
        'Apply PMEGP (₹50L subsidy) or NEEDS + TIIC loan combo',
        'Lease space in TANSIDCO/SIPCOT industrial estate',
        'Purchase CNC/lathe machines + quality testing equipment',
        'Get TNPCB consent (Orange/Green category)',
        'Achieve TS 16949 / IATF quality certification (auto industry standard)',
        'Build relationships with OEM purchase departments',
        'Start with Tier-2 orders, graduate to Tier-1 supply',
        'Expand to export markets via ACMA network'
      ],
      tnAdvantage: 'Chennai is "Detroit of Asia" — Hyundai, Nissan-Renault, BMW, Ford (legacy), Daimler, TVS, Ashok Leyland, Royal Enfield all have factories. Hosur has TVS, Titan. 35,000+ auto component units in TN. ACMA network provides market access.',
      policyUrl: 'https://guidance.tn.gov.in/',
      tier: {
        K: 'Chennai makes cars like Detroit does! You can make small parts for these big car factories and become their supplier.',
        T: 'TN makes 35% of India\'s cars. Start an auto parts unit with ₹10L-₹1Cr, supply to Hyundai/TVS/Ashok Leyland. Government subsidies cover 25-35%.',
        V: 'Auto components manufacturing in TN: access to India\'s largest auto cluster. PMEGP/NEEDS subsidies, TANSIDCO industrial plots, TIIC loans. Quality certification (IATF) opens OEM doors.',
        W: 'TN auto ecosystem: $35B output, 35,000+ component units. OEM anchor tenants: Hyundai (Sriperumbudur), Renault-Nissan (Oragadam), Ashok Leyland (Ennore), TVS (Hosur), Royal Enfield (Oragadam), Daimler (Oragadam). EV transition: TN EV Policy 2023 offers additional 15% capex subsidy for EV components. Defence corridor (Chennai-Salem-Trichy-Madurai-Coimbatore) opens dual-use manufacturing.',
        E: 'Auto components: revealed comparative advantage index 3.2 for TN (DGCI&S data). Unit economics: ₹50L capex → ₹30-50L annual EBITDA at 60% utilization (machined components). Employment: 5-15 per ₹1Cr invested. Export price realization: 15-30% premium over domestic. Key risk: EV transition disrupts ICE component demand (30% of parts become obsolete). Strategy: pivot to EV components (battery housing, motor parts, electronics). TN EV policy 15% capex subsidy makes transition economically viable.'
      }
    },
    {
      id: 'ecommerce_retail',
      name: 'E-commerce / Dropshipping / D2C Brand',
      sector: 'Retail & E-commerce',
      sectorIcon: '🛒',
      capital: { min: 50000, max: 500000, display: '₹50K – ₹5L' },
      licenses: ['gst', 'udyam'],
      loans: ['mudra_shishu', 'mudra_kishor'],
      revenue: { monthly: '₹50K – ₹5L', annual: '₹6L – ₹60L', breakeven: '3–8 months' },
      margin: '20–50% (D2C) / 10–20% (marketplace reselling)',
      channels: ['Amazon / Flipkart seller', 'Meesho / Instagram reselling', 'Own Shopify/WooCommerce store', 'WhatsApp Business', 'Social media ads (Meta, Google)'],
      steps: [
        'Identify product niche (TN handicrafts, Kanchipuram silk, Thanjavur paintings, brass items, spices)',
        'Register GST + Udyam',
        'Source products (directly from artisans/manufacturers in TN clusters)',
        'Set up Amazon/Flipkart seller account',
        'Invest in product photography + listing optimization (₹5-15K)',
        'Start with 10-20 SKUs, scale best performers',
        'Build own website for D2C sales (higher margins)',
        'Use Instagram reels + Google Shopping for traffic',
        'Warehouse: use Fulfillment by Amazon (FBA) to eliminate logistics hassle'
      ],
      tnAdvantage: 'TN has unique GI-tagged products (Kanchipuram silk, Thanjavur art plate, Mahabalipuram stone sculpture, Coimbatore wet grinder). Direct artisan sourcing eliminates middlemen. Chennai is a major logistics hub (port + airport + rail).',
      policyUrl: 'https://msmeonline.tn.gov.in/',
      tier: {
        K: 'Buy cool things from TN craftspeople and sell them online to people all over India — you can do it from your phone!',
        T: 'Start an e-commerce business selling TN\'s unique products (silk, handicrafts, spices) on Amazon or your own website. ₹50K to start, no inventory needed with dropshipping.',
        V: 'E-commerce leverages TN\'s unique products — Kanchipuram silk, handicrafts, spices, brass. Start as Amazon seller or build D2C brand. Low capital (₹50K–5L), scalable.',
        W: 'India e-commerce: $75B GMV (2024), growing 25% annually. TN advantages: GI-tagged products (10+ registered), strong manufacturing clusters for private-label, and Chennai logistics hub (18% of India\'s e-commerce shipments originate from TN). Meesho social commerce enables zero-investment reselling. Government e-marketplace (GeM) open for MSME sellers.',
        E: 'E-commerce unit economics: marketplace (Amazon) — 15-30% commission + 15% FBA fee, net margin 10-20%. D2C — CAC ₹200-500 (Meta ads), LTV/CAC ratio must exceed 3x for viability. AOV for TN handicraft niche: ₹1,500-₹5,000 (higher than avg marketplace). Private-label in TN manufacturing clusters: 40-60% gross margin. Key insight: TN\'s comparative advantage in manufacturing + low logistics cost (port proximity) creates export e-commerce opportunity via Amazon Global Selling (30% of TN seller revenue is cross-border).'
      }
    },
    {
      id: 'solar_installation',
      name: 'Solar Panel Installation & Maintenance',
      sector: 'Renewable Energy',
      sectorIcon: '☀️',
      capital: { min: 300000, max: 3000000, display: '₹3L – ₹30L' },
      licenses: ['udyam', 'gst', 'trade_license'],
      loans: ['pmegp', 'needs', 'mudra_tarun', 'cgtmse'],
      revenue: { monthly: '₹2L – ₹15L', annual: '₹24L – ₹1.8Cr', breakeven: '6–12 months' },
      margin: '20–35%',
      channels: ['Residential rooftop (TANGEDCO net metering)', 'Commercial/industrial rooftop', 'Government buildings (tender)', 'PM Surya Ghar (subsidy scheme)', 'Annual maintenance contracts (AMC)'],
      steps: [
        'Complete solar installer training (TEDA-approved, or NSDC certified)',
        'Register company + Udyam + GST',
        'Get empaneled with TANGEDCO as approved solar installer',
        'Tie-up with panel manufacturers/distributors (Waaree, Tata, Adani)',
        'Apply for PMEGP/NEEDS subsidy for tools and vehicle',
        'Start with residential installations (3-10 kW systems)',
        'Help customers apply PM Surya Ghar subsidy (₹30K-₹78K)',
        'Build AMC revenue stream (₹2-5K/system/year)',
        'Scale to commercial/industrial rooftop (50-500 kW systems)',
        'Expand to solar water heater, EV charger installation'
      ],
      tnAdvantage: 'TN has 30,200 MW installed power capacity. TN Solar Energy Policy 2019 mandates rooftop solar for large buildings. PM Surya Ghar provides ₹30-78K subsidy per residential system. TEDA facilitates installations. 300 sunny days/year in most districts.',
      policyUrl: 'https://teda.in/',
      tier: {
        K: 'Install solar panels on rooftops so families save money on electricity and help the planet!',
        T: 'Solar installation business: ₹3-30L to start. Government gives homeowners ₹30-78K subsidy per rooftop system. You earn 20-35% margin on each installation plus recurring maintenance income.',
        V: 'Solar installation: growing 40% annually in TN. PM Surya Ghar drives residential demand. TANGEDCO empanelment required. High recurring revenue via AMCs. TEDA provides training + certification.',
        W: 'TN solar: 6.6 GW installed (3rd in India). Rooftop solar target: 4 GW by 2026. PM Surya Ghar: ₹78K subsidy for 3kW system = customer payback under 4 years. TANGEDCO net metering: excess power sold at ₹2.25/unit. Market size: 15L+ eligible households in TN. Installer shortage creates demand-supply gap. TEDA training + NSDC certification pipeline.',
        E: 'Solar installer economics: avg residential system 3kW = ₹1.8-2.2L revenue, 20-30% gross margin (₹40-60K). After PM Surya Ghar subsidy, customer cost ₹1.2-1.5L, payback 3.5-4 years. AMC: ₹3-5K/year/system, 90% margin. At 20 installations/month: revenue ₹36-44L/month, EBITDA 25-35%. TAM for TN rooftop: ₹15,000-20,000 Cr over next 5 years. Counter-cyclical to load shedding (TN summer deficit). LCoE for rooftop solar: ₹3.5-4.5/kWh vs TANGEDCO tariff ₹6-9/kWh — economics favor solar.'
      }
    },
    {
      id: 'healthcare_diagnostics',
      name: 'Diagnostic Lab / Pharmacy / Clinic',
      sector: 'Healthcare',
      sectorIcon: '🏥',
      capital: { min: 500000, max: 5000000, display: '₹5L – ₹50L' },
      licenses: ['trade_license', 'gst', 'fire_noc'],
      loans: ['pmegp', 'needs', 'tiic', 'standup_india', 'cgtmse'],
      revenue: { monthly: '₹2L – ₹15L', annual: '₹24L – ₹1.8Cr', breakeven: '8–18 months' },
      margin: '30–60% (diagnostics) / 20–30% (pharmacy)',
      channels: ['Walk-in patients', 'Doctor referral network', 'Home collection services', 'Corporate health checkup packages', 'Franchise (Dr Lal PathLabs, Thyrocare, etc.)'],
      steps: [
        'Choose model: standalone lab, pharmacy, clinic, or franchise',
        'Get relevant licenses (Drug License for pharmacy, Clinical Establishment Act for lab)',
        'Apply PMEGP/NEEDS for equipment subsidy',
        'Procure lab equipment (basic: ₹5-15L / advanced: ₹15-50L)',
        'Hire qualified pathologist/pharmacist (mandatory)',
        'Set up home collection service (motorcycle + phlebotomist)',
        'Partner with nearby doctors and hospitals for referrals',
        'Offer corporate tie-ups for annual health checkups',
        'Scale via franchise model or additional branches'
      ],
      tnAdvantage: 'TN is India\'s medical tourism capital. Healthcare infrastructure is among India\'s best. CMCHIS (health insurance for poor) creates demand for diagnostic services. Vellore (CMC), Chennai (Apollo, MIOT, Fortis) create healthcare cluster effects.',
      policyUrl: 'https://www.tn.gov.in/department/5',
      tier: {
        K: 'Help people know if they\'re healthy by running blood tests and checkups in your own lab!',
        T: 'Open a diagnostic lab or pharmacy — healthcare is always in demand. ₹5-50L to start, 30-60% margins on diagnostics. Franchise options (Thyrocare, Dr Lal) reduce risk.',
        V: 'Healthcare diagnostics: recession-proof, high-margin (30-60%) business. TN\'s medical tourism hub creates demand. Franchise models reduce risk. PMEGP/NEEDS subsidies applicable.',
        W: 'TN healthcare ecosystem: 2,500+ hospitals, medical tourism worth ₹7,500 Cr/year. Diagnostic market growing 15% annually. CMCHIS (Makkalai Thedi Maruthuvam) drives demand for affordable diagnostics in Tier-2/3 cities. Clinical Establishment Act compliance mandatory. Home collection model: fastest growing segment (30% of revenue for organized labs).',
        E: 'Diagnostic lab unit economics: ₹15L capex (semi-auto analyzer + collection setup) → ₹8-12L annual EBITDA at 40 tests/day. Revenue per test: ₹200-500 (basic) to ₹2000-5000 (advanced). Fixed cost: ₹1.5-3L/month (rent + staff + reagents). Variable cost per test: ₹50-200. Breakeven: 25-30 tests/day. Franchise model: 15-20% royalty reduces margin but provides brand + training + procurement leverage. Market concentration: organized labs have only 15% share — massive formalization opportunity. CAGR 15% for next 5 years.'
      }
    },
    {
      id: 'logistics_delivery',
      name: 'Last-Mile Logistics / Delivery Business',
      sector: 'Logistics & Transport',
      sectorIcon: '🚚',
      capital: { min: 200000, max: 2000000, display: '₹2L – ₹20L' },
      licenses: ['gst', 'trade_license', 'udyam'],
      loans: ['mudra_kishor', 'mudra_tarun', 'needs'],
      revenue: { monthly: '₹1L – ₹10L', annual: '₹12L – ₹1.2Cr', breakeven: '4–8 months' },
      margin: '15–30%',
      channels: ['E-commerce delivery (Delhivery, Ecom Express partner)', 'Hyperlocal delivery (Dunzo, Swiggy Instamart)', 'B2B logistics (factory-to-warehouse)', 'Warehousing services', 'Cold chain logistics (pharma, food)'],
      steps: [
        'Identify segment: e-commerce last-mile, hyperlocal, B2B, or cold chain',
        'Register company + GST + Udyam',
        'Purchase/lease delivery vehicles (2-wheelers: ₹1-2L each; mini-trucks: ₹5-10L)',
        'Partner with e-commerce aggregators (Delhivery, XpressBees)',
        'Hire delivery personnel (gig or full-time)',
        'Invest in tracking technology (GPS, route optimization)',
        'Build cold chain capability for premium clients',
        'Scale to warehousing + distribution for 3PL model'
      ],
      tnAdvantage: 'Chennai has India\'s 2nd busiest port. TN handles 24% of India\'s cargo. Trichy, Madurai, Coimbatore are emerging e-commerce hubs. Namakkal-Tiruchengode is South India\'s trucking capital (90% of private buses built in Karur).',
      policyUrl: 'https://guidance.tn.gov.in/',
      tier: {
        K: 'Deliver packages from shops to people\'s homes — like being the mailman for online shopping!',
        T: 'Start a delivery business with ₹2-20L. E-commerce is booming — someone needs to deliver all those packages. Partner with Delhivery, Amazon, or Swiggy for guaranteed orders.',
        V: 'Last-mile logistics benefits from e-commerce growth (25% CAGR). Low barrier to entry, recurring revenue. Partner with aggregators for volume. Cold chain is premium opportunity.',
        W: 'India last-mile logistics: $8B market, growing 25% annually. TN logistics advantages: Chennai port (2nd in container handling), Ennore (coal/ore), 4 airports, NH44 terminus. E-commerce penetration in TN Tier-2 cities growing 35%. Cold chain gap: only 4% of perishables move in cold chain (vs 70% in developed countries) — massive opportunity. TN Cold Chain Policy provides additional subsidies.',
        E: 'Last-mile unit economics: per-delivery revenue ₹25-60 (e-commerce) / ₹50-150 (hyperlocal) / ₹500-2000 (B2B). Cost per delivery: ₹15-35 (2-wheeler) / ₹100-300 (mini-truck). Delivery density is key profitability driver — Chennai (>50 deliveries/day/rider) is profitable, Tier-3 (<15/day/rider) is marginal. Capital productivity: ₹5L invested in 5 two-wheelers → ₹15-20L annual revenue. Cold chain premium: 3-4x revenue per delivery vs ambient. TN advantage: high urbanization + port proximity for e-commerce reverse logistics.'
      }
    },
    {
      id: 'traditional_crafts',
      name: 'Handicrafts & Traditional Arts Business',
      sector: 'Culture & Heritage',
      sectorIcon: '🎨',
      capital: { min: 50000, max: 500000, display: '₹50K – ₹5L' },
      licenses: ['udyam', 'gst'],
      loans: ['pm_vishwakarma', 'mudra_shishu', 'mudra_kishor', 'pmegp'],
      revenue: { monthly: '₹30K – ₹3L', annual: '₹3.6L – ₹36L', breakeven: '4–10 months' },
      margin: '40–70%',
      channels: ['E-commerce (Amazon Karigar, Flipkart Samarth, Etsy)', 'Government portals (GeM, Tribes India)', 'Exhibition/trade fairs (India International Trade Fair, Surajkund)', 'Tourism shops', 'Social media D2C'],
      steps: [
        'Identify craft: Kanchipuram silk weaving, Thanjavur painting, Mahabalipuram sculpture, Nachiarkoil lamps, Karaikudi woodwork, Kumbakonam brass, Chettinad tiles',
        'Register as PM Vishwakarma beneficiary (free toolkit + ₹3L loan at 5%)',
        'Get Udyam MSME registration',
        'Set up workshop/production space',
        'Build online presence: professional photography + Etsy/Amazon Karigar listing',
        'Apply for GI tag certification (if applicable)',
        'Participate in exhibitions (TNSDC facilitates stalls)',
        'Develop tourist-friendly products (smaller, affordable variants)',
        'Export via EPCH membership + IEC code'
      ],
      tnAdvantage: 'TN has 10+ GI-tagged handicraft products. Temple town tourism (Thanjavur, Madurai, Rameswaram, Kanchipuram) provides steady demand. PM Vishwakarma provides tools + loan at 5%. Amazon Karigar and Flipkart Samarth give free listing to artisans.',
      policyUrl: 'https://pmvishwakarma.gov.in/',
      tier: {
        K: 'Make beautiful things like Thanjavur paintings or brass lamps and sell them to people all over the world — even through Amazon!',
        T: 'TN\'s traditional crafts (Thanjavur paintings, Kanchipuram silk, stone sculptures) sell for premium prices globally. PM Vishwakarma gives free tools + ₹3L loan at 5%. List on Amazon Karigar for free.',
        V: 'Handicrafts business leverages TN\'s 10+ GI-tagged products. PM Vishwakarma: free toolkit + ₹3L at 5% interest. Amazon Karigar/Flipkart Samarth: free online listing. High margins (40-70%).',
        W: 'TN handicraft clusters: Kanchipuram (silk, 5,000+ looms), Thanjavur (painting, brass), Mahabalipuram (stone carving, UNESCO site), Nachiarkoil (bronze lamps), Kumbakonam (brass/copper). PM Vishwakarma certification enables GeM procurement + exhibition stall subsidy. EPCH (Export Promotion Council for Handicrafts) facilitates international trade fairs. Digital marketplace strategy: Etsy for export, Amazon Karigar for domestic.',
        E: 'Handicraft economics: high gross margin (40-70%) but low throughput (artisan output constraint). Revenue per artisan: ₹2-5L/year (domestic), ₹5-15L/year (export). PM Vishwakarma subsidy (₹15K toolkit + 8% interest subvention) reduces breakeven by 40%. GI tag creates monopolistic competition — price premium of 30-50%. Online marketplace reduces search costs and eliminates middleman (40-60% of margin was captured by traders). Key challenge: scale without quality dilution. Cooperative/FPO model enables collective marketing + quality control.'
      }
    },
    {
      id: 'construction_materials',
      name: 'Construction Materials & Ready-Mix',
      sector: 'Construction',
      sectorIcon: '🏗️',
      capital: { min: 500000, max: 5000000, display: '₹5L – ₹50L' },
      licenses: ['udyam', 'gst', 'tnpcb', 'trade_license'],
      loans: ['pmegp', 'needs', 'tiic', 'cgtmse'],
      revenue: { monthly: '₹5L – ₹30L', annual: '₹60L – ₹3.6Cr', breakeven: '6–12 months' },
      margin: '15–30%',
      channels: ['Direct to builders/contractors', 'Retail hardware shops', 'Government projects (tender)', 'Online (IndiaMart, TradeIndia)', 'Township developers'],
      steps: [
        'Choose product: hollow blocks, AAC blocks, interlock tiles, ready-mix concrete, M-sand',
        'Register Udyam + GST + TNPCB consent',
        'Apply PMEGP (₹50L max, 25-35% subsidy) or TIIC term loan',
        'Set up production unit (industrial area preferred)',
        'Purchase machinery (block-making: ₹5-15L; RMC plant: ₹20-50L)',
        'Build relationships with local builders, contractors, real estate developers',
        'Supply to government construction projects (GeM/e-tender)',
        'Add M-sand (manufactured sand) — huge demand due to river sand ban in TN',
        'Scale to multiple products for one-stop construction material supply'
      ],
      tnAdvantage: 'TN has banned river sand mining — creating massive demand for M-sand and alternative materials. Housing construction boom (PMAY, TNHB, CMDA). Ariyalur is cement heartland. TN is a major cement producer. Smart Cities Mission projects in 12 TN cities.',
      policyUrl: 'https://sipcotweb.tn.gov.in/',
      tier: {
        K: 'Make building blocks, tiles, and cement that people use to build houses and buildings!',
        T: 'Construction materials business: TN banned river sand, so M-sand and hollow blocks are in huge demand. ₹5-50L to start. Builders need suppliers constantly.',
        V: 'Construction materials: steady demand from TN\'s housing boom. River sand ban creates opportunity for M-sand. PMEGP/NEEDS subsidies applicable. GeM listing for govt project supply.',
        W: 'TN construction boom drivers: PMAY (4.5L urban + 9L rural houses), Smart Cities (12 cities), metro expansion (Chennai Phase 2), industrial corridors. River sand ban (NGT 2018) created ₹5,000 Cr+ M-sand market in TN. Interlock tiles replacing traditional paving. AAC blocks: 30% energy savings over clay bricks — green building demand driver. SIPCOT/TANSIDCO industrial land available.',
        E: 'Construction materials: cyclical but currently in upcycle. M-sand unit: ₹15-20L capex → ₹1-2L/day revenue at full capacity (200-300 tonnes/day). Margin: 25-35% (after crusher, transport). Hollow block: ₹5L capex → ₹3-5L/month revenue, 20-30% margin. TAM: TN construction spend ₹1.5L Cr/year, materials ~40% of that = ₹60K Cr addressable. Counter-cyclical strategy: maintenance/renovation demand sustains during downturn. River sand ban is permanent structural shift — not reversible.'
      }
    },
    {
      id: 'printing_publishing',
      name: 'Printing / Digital Publishing / Content',
      sector: 'Media & Printing',
      sectorIcon: '🖨️',
      capital: { min: 200000, max: 3000000, display: '₹2L – ₹30L' },
      licenses: ['udyam', 'gst', 'trade_license'],
      loans: ['pmegp', 'needs', 'mudra_tarun'],
      revenue: { monthly: '₹1L – ₹10L', annual: '₹12L – ₹1.2Cr', breakeven: '6–12 months' },
      margin: '25–45%',
      channels: ['Commercial printing (business cards, brochures, packaging)', 'Book publishing (self-publish + distribution)', 'Digital printing (on-demand)', 'Government printing contracts', 'Wedding/event invitations + flex banners'],
      steps: [
        'Choose niche: digital printing, offset printing, packaging printing, or publishing',
        'Register company + Udyam + GST',
        'Apply for PMEGP subsidy (machinery purchase)',
        'Purchase machinery (digital printer: ₹2-10L; offset: ₹15-50L)',
        'Set up workspace near commercial area',
        'Build client base through local business networking',
        'Add value-added services (design, packaging, lamination)',
        'Offer online ordering portal for repeat customers',
        'Expand to packaging printing (food, pharma — highest margin)'
      ],
      tnAdvantage: 'Sivakasi is India\'s printing capital — 60% of India\'s offset printing. Chennai is India\'s largest e-publishing hub (67 units). Tamil publishing market: strong vernacular demand. Packaging printing demand from TN\'s manufacturing sector.',
      policyUrl: 'https://msmeonline.tn.gov.in/',
      tier: {
        K: 'Print beautiful books, wedding cards, and product boxes — Sivakasi in TN prints most of India\'s stuff!',
        T: 'TN is India\'s printing powerhouse — Sivakasi does 60% of India\'s offset printing. Start digital printing with ₹2L or offset with ₹15L+. Packaging printing has highest margins.',
        V: 'Printing/publishing leverages TN\'s existing infrastructure. Sivakasi cluster for offset, Chennai for e-publishing. Packaging printing (for food/pharma) is the highest-growth, highest-margin segment.',
        W: 'TN printing ecosystem: Sivakasi (offset, 2,000+ units), Chennai (e-publishing, 67 STPI units). Packaging printing: ₹10,000 Cr+ market in TN (food + pharma + FMCG). Digital disruption: short-run digital printing replacing offset for <5,000 copies. E-publishing outsourcing from US/UK publishers: TN handles 40%+ of India\'s academic publishing workflow.',
        E: 'Printing unit economics: digital printer (₹5L) → ₹50K-₹1.5L/month revenue, 35-45% margin. Offset (₹30L) → ₹3-8L/month, 25-35% margin. Packaging printing: highest ROIC at 40-60% gross margins. Key insight: declining volume in general printing offset by growing packaging demand. TN comparative advantage: Sivakasi cluster economies (shared ink, paper, logistics), Chennai e-publishing talent pool. Capital productivity favors digital printing for new entrants.'
      }
    },
    {
      id: 'tourism_hospitality',
      name: 'Homestay / Heritage Tourism / Travel Business',
      sector: 'Tourism & Hospitality',
      sectorIcon: '🏨',
      capital: { min: 200000, max: 3000000, display: '₹2L – ₹30L' },
      licenses: ['trade_license', 'gst', 'fssai', 'fire_noc'],
      loans: ['mudra_tarun', 'needs', 'tiic'],
      revenue: { monthly: '₹50K – ₹5L', annual: '₹6L – ₹60L', breakeven: '8–18 months' },
      margin: '30–55%',
      channels: ['Airbnb / Booking.com / MakeMyTrip', 'TTDC partnerships', 'Temple tourism packages', 'Corporate retreats', 'Social media marketing'],
      steps: [
        'Identify tourism niche: temple circuit, heritage homes, eco-tourism, adventure, medical tourism coordination',
        'Register with TTDC (Tamil Nadu Tourism Development Corporation)',
        'Get trade license + FSSAI (if serving food) + GST',
        'Set up homestay/heritage property (or coordinate tours)',
        'List on Airbnb, Booking.com, MakeMyTrip',
        'Create curated experience packages (Chettinad heritage, Thanjavur temple circuit, Kodaikanal eco-stays)',
        'Build partnerships with auto/van operators, local guides',
        'Market through travel blogs, Instagram reels, YouTube',
        'Scale to multiple properties or franchise model'
      ],
      tnAdvantage: 'TN has 248M tourist arrivals (highest in India). 4 UNESCO sites (Mahabalipuram, Thanjavur, Gangaikondacholapuram, Nilgiris Mountain Railway). Chettinad mansions, hill stations (Ooty, Kodaikanal, Yercaud), temple cities. Medical tourism capital of India (Chennai).',
      policyUrl: 'https://www.tamilnadutourism.tn.gov.in/',
      tier: {
        K: 'Turn your grandparent\'s old house into a hotel for tourists! Show them around your town\'s temples and special places.',
        T: 'TN gets the most tourists in India — 248 million! Start a homestay, heritage tour, or travel business. Airbnb listing is free. Temple tourism + medical tourism are huge.',
        V: 'Tourism: TN leads India in tourist arrivals. Homestay on Airbnb/Booking.com is lowest-cost entry. Heritage tourism (Chettinad, Thanjavur) and medical tourism coordination (Chennai) are premium segments.',
        W: 'TN tourism: ₹15,000 Cr+ industry. Key segments: pilgrimage (Rameshwaram, Thanjavur, Madurai — 70% of domestic), heritage (Chettinad, Mahabalipuram), eco (Nilgiris, Kodaikanal), medical (Chennai — ₹7,500 Cr). Government push: Poompuhar heritage city, temple renovation. TTDC infrastructure: 55 hotels + tour packages. Gap: curated experiential tourism (homestays, culinary tours, cycling tours).',
        E: 'Tourism multiplier: 1 tourism job creates 1.5 indirect jobs (WTTC). TN tourism revenue per arrival: ₹2,000 (domestic) / ₹15,000 (international). Homestay economics: ₹5-10L renovation → ₹1,500-5,000/night/room, 50% occupancy → ₹2.7-9L/room/year. ROI: 30-50% annually. Medical tourism coordination: commission model (10-15% of patient spend ₹2-10L = ₹20K-₹1.5L per patient). Platform fees (Airbnb 3% host + 14% guest) vs direct booking margin differential drives channel strategy. Seasonality risk: peak Oct-Mar for heritage, Apr-Jun for hill stations.'
      }
    }
  ];

  // ── 4. HELPER FUNCTIONS ────────────────────────────────────

  function getLoanById(id) {
    for (var i = 0; i < LOAN_SCHEMES.length; i++) {
      if (LOAN_SCHEMES[i].id === id) return LOAN_SCHEMES[i];
    }
    return null;
  }

  function getLicenseById(id) {
    for (var i = 0; i < LICENSE_TYPES.length; i++) {
      if (LICENSE_TYPES[i].id === id) return LICENSE_TYPES[i];
    }
    return null;
  }

  function getBusinessById(id) {
    for (var i = 0; i < BUSINESS_IDEAS.length; i++) {
      if (BUSINESS_IDEAS[i].id === id) return BUSINESS_IDEAS[i];
    }
    return null;
  }

  // ── 5. TIER-AWARE RENDERING ────────────────────────────────

  function renderLoanForTier(loanId, tier) {
    var loan = getLoanById(loanId);
    if (!loan) return '';
    var t = tier || 'V';

    switch (t) {
      case 'K':
        return '<div class="biz-loan biz-kid">' +
          '<div class="biz-loan-name">🏦 ' + loan.name + '</div>' +
          '<p>' + loan.tier.K + '</p>' +
          '<div class="biz-highlight">💰 How much: ' + loan.amount.display + '</div>' +
          (loan.subsidy !== 'None' && loan.subsidy !== 'None (interest subvention in some states)' ? '<div class="biz-highlight">🎁 Free money: ' + loan.subsidy + '</div>' : '') +
          '</div>';

      case 'T':
        return '<div class="biz-loan biz-teen">' +
          '<div class="biz-loan-name">🏦 ' + loan.name + '</div>' +
          '<p>' + loan.tier.T + '</p>' +
          '<div class="biz-detail"><b>Amount:</b> ' + loan.amount.display + '</div>' +
          '<div class="biz-detail"><b>Interest:</b> ' + loan.interest + '</div>' +
          '<div class="biz-detail"><b>Subsidy:</b> ' + loan.subsidy + '</div>' +
          '<div class="biz-detail"><b>Collateral:</b> ' + loan.collateral + '</div>' +
          '</div>';

      case 'V':
        return '<div class="biz-loan biz-voter">' +
          '<div class="biz-loan-name">🏦 ' + loan.name + '</div>' +
          '<p>' + loan.tier.V + '</p>' +
          '<div class="biz-grid">' +
            '<div><b>Amount</b><br>' + loan.amount.display + '</div>' +
            '<div><b>Interest</b><br>' + loan.interest + '</div>' +
            '<div><b>Subsidy</b><br>' + loan.subsidy + '</div>' +
            '<div><b>Collateral</b><br>' + loan.collateral + '</div>' +
            '<div><b>Repayment</b><br>' + loan.repayment + '</div>' +
            '<div><b>Eligibility</b><br>' + loan.eligibility + '</div>' +
          '</div>' +
          '<div class="biz-links"><a href="' + loan.url + '" target="_blank" rel="noopener">Official Website ↗</a> | <a href="' + loan.apply + '" target="_blank" rel="noopener">Apply Online ↗</a></div>' +
          '</div>';

      case 'W':
        return '<div class="biz-loan biz-wonk">' +
          '<div class="biz-loan-name">🏦 ' + loan.name + ' <span class="biz-type-badge">' + loan.type + '</span></div>' +
          '<p>' + loan.tier.W + '</p>' +
          '<table class="biz-table">' +
            '<tr><th>Parameter</th><th>Details</th></tr>' +
            '<tr><td>Provider</td><td>' + loan.provider + '</td></tr>' +
            '<tr><td>Eligibility</td><td>' + loan.eligibility + '</td></tr>' +
            '<tr><td>Loan Amount</td><td>' + loan.amount.display + '</td></tr>' +
            '<tr><td>Subsidy</td><td>' + loan.subsidy + '</td></tr>' +
            '<tr><td>Interest Rate</td><td>' + loan.interest + '</td></tr>' +
            '<tr><td>Collateral</td><td>' + loan.collateral + '</td></tr>' +
            '<tr><td>Repayment</td><td>' + loan.repayment + '</td></tr>' +
          '</table>' +
          '<div class="biz-links"><a href="' + loan.url + '" target="_blank" rel="noopener">Official Portal ↗</a> | <a href="' + loan.apply + '" target="_blank" rel="noopener">Apply ↗</a></div>' +
          '</div>';

      case 'E':
        return '<div class="biz-loan biz-econ">' +
          '<div class="biz-loan-name">🏦 ' + loan.name + ' <span class="biz-type-badge">' + loan.type + '</span></div>' +
          '<p>' + loan.tier.E + '</p>' +
          '<table class="biz-table">' +
            '<tr><th>Metric</th><th>Value</th><th>Assessment</th></tr>' +
            '<tr><td>Loan Ceiling</td><td>' + loan.amount.display + '</td><td>' + (loan.amount.max >= 5000000 ? 'Adequate for MSME capex' : loan.amount.max >= 500000 ? 'Micro-enterprise scale' : 'Survivalist scale') + '</td></tr>' +
            '<tr><td>Effective Cost</td><td>' + loan.interest + '</td><td>' + (loan.subsidy !== 'None' ? 'Below-market (subsidized)' : 'Market rate') + '</td></tr>' +
            '<tr><td>Collateral Requirement</td><td>' + loan.collateral + '</td><td>' + (loan.collateral.indexOf('Nil') >= 0 ? 'Addresses collateral constraint ✓' : 'Collateral barrier persists') + '</td></tr>' +
            '<tr><td>Subsidy Component</td><td>' + loan.subsidy + '</td><td>' + (loan.subsidy !== 'None' && loan.subsidy !== 'None (interest subvention in some states)' ? 'Fiscal cost borne by exchequer' : 'No fiscal cost') + '</td></tr>' +
          '</table>' +
          '<div class="biz-links"><a href="' + loan.url + '" target="_blank" rel="noopener">Official Portal ↗</a></div>' +
          '</div>';

      default: return '';
    }
  }

  function renderLicenseForTier(licenseId, tier) {
    var lic = getLicenseById(licenseId);
    if (!lic) return '';
    var t = tier || 'V';

    switch (t) {
      case 'K':
        return '<div class="biz-license biz-kid">' +
          '<div class="biz-lic-name">' + (lic.mandatory ? '✅' : '📋') + ' ' + lic.name + '</div>' +
          '<p>' + lic.tier.K + '</p>' +
          '<div class="biz-highlight">💰 Cost: ' + lic.cost + '</div>' +
          '<div class="biz-highlight">⏱️ Time: ' + lic.time + '</div>' +
          '</div>';

      case 'T':
        return '<div class="biz-license biz-teen">' +
          '<div class="biz-lic-name">' + (lic.mandatory ? '✅ Required' : '📋 Optional') + ' — ' + lic.name + '</div>' +
          '<p>' + lic.tier.T + '</p>' +
          '<div class="biz-detail"><b>Cost:</b> ' + lic.cost + ' | <b>Time:</b> ' + lic.time + '</div>' +
          '<div class="biz-detail"><b>Documents:</b> ' + lic.documents + '</div>' +
          '</div>';

      case 'V':
        return '<div class="biz-license biz-voter">' +
          '<div class="biz-lic-name">' + (lic.mandatory ? '✅ Mandatory' : '📋 Optional') + ' — ' + lic.name + '</div>' +
          '<p>' + lic.tier.V + '</p>' +
          '<div class="biz-grid">' +
            '<div><b>Cost</b><br>' + lic.cost + '</div>' +
            '<div><b>Time</b><br>' + lic.time + '</div>' +
            '<div><b>Authority</b><br>' + lic.authority + '</div>' +
            '<div><b>Categories</b><br>' + lic.categories + '</div>' +
          '</div>' +
          '<div class="biz-detail"><b>Documents:</b> ' + lic.documents + '</div>' +
          '<div class="biz-detail"><b>Benefits:</b> ' + lic.benefits + '</div>' +
          '<a href="' + lic.url + '" target="_blank" rel="noopener" class="biz-link">Apply Online ↗</a>' +
          '</div>';

      case 'W':
        return '<div class="biz-license biz-wonk">' +
          '<div class="biz-lic-name">' + lic.name + ' <span class="biz-type-badge">' + (lic.mandatory ? 'Mandatory' : 'Optional') + '</span></div>' +
          '<p>' + lic.tier.W + '</p>' +
          '<table class="biz-table">' +
            '<tr><th>Parameter</th><th>Details</th></tr>' +
            '<tr><td>Cost</td><td>' + lic.cost + '</td></tr>' +
            '<tr><td>Processing Time</td><td>' + lic.time + '</td></tr>' +
            '<tr><td>Authority</td><td>' + lic.authority + '</td></tr>' +
            '<tr><td>Categories</td><td>' + lic.categories + '</td></tr>' +
            '<tr><td>Documents</td><td>' + lic.documents + '</td></tr>' +
            '<tr><td>Benefits</td><td>' + lic.benefits + '</td></tr>' +
          '</table>' +
          '<a href="' + lic.url + '" target="_blank" rel="noopener" class="biz-link">Official Portal ↗</a>' +
          '</div>';

      case 'E':
        return '<div class="biz-license biz-econ">' +
          '<div class="biz-lic-name">' + lic.name + '</div>' +
          '<p>' + lic.tier.E + '</p>' +
          '<table class="biz-table">' +
            '<tr><th>Metric</th><th>Value</th></tr>' +
            '<tr><td>Direct Cost</td><td>' + lic.cost + '</td></tr>' +
            '<tr><td>Time Cost</td><td>' + lic.time + '</td></tr>' +
            '<tr><td>Compliance Burden</td><td>' + lic.documents + '</td></tr>' +
          '</table>' +
          '<a href="' + lic.url + '" target="_blank" rel="noopener" class="biz-link">Official Portal ↗</a>' +
          '</div>';

      default: return '';
    }
  }

  function renderBusinessForTier(bizId, tier) {
    var biz = getBusinessById(bizId);
    if (!biz) return '';
    var t = tier || 'V';

    switch (t) {
      case 'K':
        return '<div class="biz-card biz-kid">' +
          '<div class="biz-card-header"><span class="biz-sector-icon">' + biz.sectorIcon + '</span> ' + biz.name + '</div>' +
          '<p>' + biz.tier.K + '</p>' +
          '<div class="biz-highlight">💰 Starting cost: ' + biz.capital.display + '</div>' +
          '<div class="biz-highlight">📈 You can earn: ' + biz.revenue.monthly + ' per month</div>' +
          '<div class="biz-highlight">⏱️ When you start earning: ' + biz.revenue.breakeven + '</div>' +
          '<div class="biz-steps-kid"><b>Steps to start:</b><ol>' +
            biz.steps.slice(0, 4).map(function(s) { return '<li>' + s.replace(/₹[\d,]+[LCrK]*/g, 'some money').replace(/\([^)]*\)/g, '') + '</li>'; }).join('') +
          '</ol></div>' +
          '</div>';

      case 'T':
        return '<div class="biz-card biz-teen">' +
          '<div class="biz-card-header"><span class="biz-sector-icon">' + biz.sectorIcon + '</span> ' + biz.name + '</div>' +
          '<p>' + biz.tier.T + '</p>' +
          '<div class="biz-grid">' +
            '<div><b>💰 Capital</b><br>' + biz.capital.display + '</div>' +
            '<div><b>📈 Monthly Revenue</b><br>' + biz.revenue.monthly + '</div>' +
            '<div><b>💹 Profit Margin</b><br>' + biz.margin + '</div>' +
            '<div><b>⏱️ Break-even</b><br>' + biz.revenue.breakeven + '</div>' +
          '</div>' +
          '<div class="biz-steps"><b>How to start:</b><ol>' +
            biz.steps.slice(0, 5).map(function(s) { return '<li>' + s + '</li>'; }).join('') +
          '</ol></div>' +
          '<div class="biz-loans-preview"><b>Loans available:</b> ' +
            biz.loans.map(function(lid) { var l = getLoanById(lid); return l ? l.name : lid; }).join(', ') +
          '</div>' +
          '</div>';

      case 'V':
        return '<div class="biz-card biz-voter">' +
          '<div class="biz-card-header"><span class="biz-sector-icon">' + biz.sectorIcon + '</span> ' + biz.name + ' <span class="biz-sector-tag">' + biz.sector + '</span></div>' +
          '<p>' + biz.tier.V + '</p>' +
          '<div class="biz-grid">' +
            '<div><b>💰 Capital Required</b><br>' + biz.capital.display + '</div>' +
            '<div><b>📈 Revenue</b><br>Monthly: ' + biz.revenue.monthly + '<br>Annual: ' + biz.revenue.annual + '</div>' +
            '<div><b>💹 Margin</b><br>' + biz.margin + '</div>' +
            '<div><b>⏱️ Break-even</b><br>' + biz.revenue.breakeven + '</div>' +
          '</div>' +
          '<div class="biz-section"><b>📋 Step-by-step Guide:</b><ol>' +
            biz.steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
          '</ol></div>' +
          '<div class="biz-section"><b>📄 Licenses Required:</b><div class="biz-chip-list">' +
            biz.licenses.map(function(lid) { var l = getLicenseById(lid); return '<span class="biz-chip">' + (l ? l.name : lid) + '</span>'; }).join('') +
          '</div></div>' +
          '<div class="biz-section"><b>🏦 Eligible Loans:</b><div class="biz-chip-list">' +
            biz.loans.map(function(lid) { var l = getLoanById(lid); return '<span class="biz-chip biz-chip-loan">' + (l ? l.name + ' (' + l.amount.display + ')' : lid) + '</span>'; }).join('') +
          '</div></div>' +
          '<div class="biz-section"><b>📣 Sales Channels:</b><ul>' +
            biz.channels.map(function(c) { return '<li>' + c + '</li>'; }).join('') +
          '</ul></div>' +
          '<div class="biz-tn-advantage"><b>🌟 TN Advantage:</b> ' + biz.tnAdvantage + '</div>' +
          (biz.policyUrl ? '<a href="' + biz.policyUrl + '" target="_blank" rel="noopener" class="biz-link">📎 Relevant TN Policy ↗</a>' : '') +
          '</div>';

      case 'W':
        return '<div class="biz-card biz-wonk">' +
          '<div class="biz-card-header"><span class="biz-sector-icon">' + biz.sectorIcon + '</span> ' + biz.name + ' <span class="biz-sector-tag">' + biz.sector + '</span></div>' +
          '<p>' + biz.tier.W + '</p>' +
          '<table class="biz-table">' +
            '<tr><th>Parameter</th><th>Details</th></tr>' +
            '<tr><td>Capital Investment</td><td>' + biz.capital.display + '</td></tr>' +
            '<tr><td>Revenue Potential</td><td>Monthly: ' + biz.revenue.monthly + ' | Annual: ' + biz.revenue.annual + '</td></tr>' +
            '<tr><td>Gross Margin</td><td>' + biz.margin + '</td></tr>' +
            '<tr><td>Break-even Period</td><td>' + biz.revenue.breakeven + '</td></tr>' +
            '<tr><td>Licenses Required</td><td>' + biz.licenses.map(function(lid) { var l = getLicenseById(lid); return l ? l.name : lid; }).join(', ') + '</td></tr>' +
            '<tr><td>Eligible Schemes</td><td>' + biz.loans.map(function(lid) { var l = getLoanById(lid); return l ? l.name : lid; }).join(', ') + '</td></tr>' +
            '<tr><td>Sales Channels</td><td>' + biz.channels.join(' | ') + '</td></tr>' +
          '</table>' +
          '<div class="biz-section"><b>Implementation Roadmap:</b><ol>' +
            biz.steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
          '</ol></div>' +
          '<div class="biz-tn-advantage"><b>TN Comparative Advantage:</b> ' + biz.tnAdvantage + '</div>' +
          (biz.policyUrl ? '<a href="' + biz.policyUrl + '" target="_blank" rel="noopener" class="biz-link">Policy Reference ↗</a>' : '') +
          '</div>';

      case 'E':
        return '<div class="biz-card biz-econ">' +
          '<div class="biz-card-header"><span class="biz-sector-icon">' + biz.sectorIcon + '</span> ' + biz.name + ' <span class="biz-sector-tag">' + biz.sector + '</span></div>' +
          '<p>' + biz.tier.E + '</p>' +
          '<table class="biz-table">' +
            '<tr><th>Metric</th><th>Value</th><th>Assessment</th></tr>' +
            '<tr><td>Capital Required</td><td>' + biz.capital.display + '</td><td>' + (biz.capital.max <= 500000 ? 'Low barrier to entry' : biz.capital.max <= 2000000 ? 'Moderate capital requirement' : 'Significant investment needed') + '</td></tr>' +
            '<tr><td>Revenue Range</td><td>' + biz.revenue.annual + '/year</td><td>At expected capacity utilization</td></tr>' +
            '<tr><td>Gross Margin</td><td>' + biz.margin + '</td><td>' + (parseInt(biz.margin) >= 40 ? 'High margin — service/IP component' : parseInt(biz.margin) >= 25 ? 'Moderate — standard for sector' : 'Low — volume-dependent') + '</td></tr>' +
            '<tr><td>Break-even</td><td>' + biz.revenue.breakeven + '</td><td>' + (biz.revenue.breakeven.indexOf('3') >= 0 || biz.revenue.breakeven.indexOf('2') >= 0 ? 'Quick payback' : biz.revenue.breakeven.indexOf('12') >= 0 || biz.revenue.breakeven.indexOf('18') >= 0 ? 'Standard gestation' : 'Moderate payback') + '</td></tr>' +
            '<tr><td>Subsidy Stack</td><td>' + biz.loans.filter(function(lid) { var l = getLoanById(lid); return l && l.type.indexOf('subsidy') >= 0; }).map(function(lid) { var l = getLoanById(lid); return l ? l.name : lid; }).join(', ') + ' (if any)</td><td>Reduces effective capex</td></tr>' +
          '</table>' +
          '<div class="biz-section"><b>Implementation with Economic Rationale:</b><ol>' +
            biz.steps.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
          '</ol></div>' +
          '<div class="biz-tn-advantage"><b>TN Structural Advantage:</b> ' + biz.tnAdvantage + '</div>' +
          '</div>';

      default: return '';
    }
  }

  // ── 6. SUMMARY / DASHBOARD STATS ──────────────────────────

  function getSummaryStats() {
    var totalBiz = BUSINESS_IDEAS.length;
    var totalLoans = LOAN_SCHEMES.length;
    var totalLicenses = LICENSE_TYPES.length;
    var sectors = {};
    for (var i = 0; i < BUSINESS_IDEAS.length; i++) {
      sectors[BUSINESS_IDEAS[i].sector] = true;
    }
    var minCapital = Infinity, maxRevenue = 0;
    for (var j = 0; j < BUSINESS_IDEAS.length; j++) {
      if (BUSINESS_IDEAS[j].capital.min < minCapital) minCapital = BUSINESS_IDEAS[j].capital.min;
    }
    return {
      totalBusinesses: totalBiz,
      totalLoans: totalLoans,
      totalLicenses: totalLicenses,
      totalSectors: Object.keys(sectors).length,
      lowestCapital: '₹' + (minCapital / 1000) + 'K',
      sectorList: Object.keys(sectors)
    };
  }

  // ── PUBLIC API ─────────────────────────────────────────────
  window.BusinessGuide = {
    LOAN_SCHEMES: LOAN_SCHEMES,
    LICENSE_TYPES: LICENSE_TYPES,
    BUSINESS_IDEAS: BUSINESS_IDEAS,
    getLoanById: getLoanById,
    getLicenseById: getLicenseById,
    getBusinessById: getBusinessById,
    renderLoanForTier: renderLoanForTier,
    renderLicenseForTier: renderLicenseForTier,
    renderBusinessForTier: renderBusinessForTier,
    getSummaryStats: getSummaryStats
  };

})();
