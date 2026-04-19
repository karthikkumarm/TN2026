(function(){
'use strict';

/* ============================================================
   Tamil Nadu 2026 — Subsidies & Incentives Data
   Central schemes, State schemes, Sector-specific incentives
   ============================================================ */

var CENTRAL_SCHEMES = [
  {
    id: 'pli',
    name: 'PLI (Production Linked Incentive)',
    type: 'central',
    eligibility: 'Manufacturers in 14 sectors meeting minimum investment and incremental revenue thresholds set by respective ministries',
    benefit: '4-6% incentive on incremental sales over base year for 5 years',
    amount: '₹1.97 lakh crore total allocation across 14 sectors',
    sectors: ['Electronics', 'Automobiles & Auto Components', 'Pharma', 'Textiles', 'Food Processing', 'Solar PV', 'Telecom & Networking', 'White Goods', 'Steel', 'Chemicals', 'Drones', 'Advanced Chemistry Cell'],
    icon: '🏭',
    url: 'https://www.investindia.gov.in/production-linked-incentives-schemes-india',
    tier: {
      K: 'PLI is a game-changer for Tamil Nadu\'s industrial corridor. If you\'re manufacturing in electronics, autos, or pharma — sectors TN already dominates — you can claim 4-6% of your incremental sales as direct incentive. With Chennai-Hosur being India\'s EV hub, this is serious money on the table.',
      T: 'The PLI scheme rewards manufacturers who scale production in India. If your company is in one of 14 eligible sectors and you increase output beyond a base year, the government pays you 4-6% of that growth as a cash incentive for 5 years. Total pool: ₹1.97 lakh crore.',
      V: 'If you run a factory or manufacturing unit, this scheme pays you a bonus — 4 to 6 paisa for every rupee of extra production you achieve. It covers 14 industries including electronics, auto parts, textiles, and food processing. You need to apply through the relevant central ministry.',
      W: 'இந்தத் திட்டம் தொழிற்சாலை உரிமையாளர்களுக்கானது. உங்கள் உற்பத்தி அதிகரித்தால், அரசு 4-6% ஊக்கத்தொகை கொடுக்கும். எலக்ட்ரானிக்ஸ், ஆட்டோ, ஜவுளி போன்ற 14 துறைகளுக்கு பொருந்தும். மொத்த நிதி ₹1.97 லட்சம் கோடி.',
      E: 'Production Linked Incentive — central government scheme providing 4-6% incentive on incremental sales over 5 years across 14 manufacturing sectors. Total outlay ₹1.97 lakh crore. Tamil Nadu is a top beneficiary given its strong manufacturing base in auto, electronics, and pharma.'
    }
  },
  {
    id: 'pm-vishwakarma',
    name: 'PM Vishwakarma',
    type: 'central',
    eligibility: 'Traditional artisans and craftspeople in 18 trades — carpenters, blacksmiths, goldsmiths, potters, sculptors, weavers, tailors, washermen, etc.',
    benefit: 'Collateral-free loans up to ₹3 lakh at 5% interest, toolkit grant of ₹15,000, skill training with ₹500/day stipend, digital and marketing support',
    amount: 'Up to ₹3 lakh loan per beneficiary; ₹15,000 toolkit grant; ₹13,000 crore total scheme outlay',
    sectors: ['Handicrafts', 'Traditional Trades', 'Artisan Economy'],
    icon: '🛠️',
    url: 'https://pmvishwakarma.gov.in/',
    tier: {
      K: 'PM Vishwakarma directly targets Tamil Nadu\'s 18 lakh+ artisan families. In a state where temple sculpture, Kanchipuram weaving, and Thanjavur crafts are economic pillars, this scheme provides working capital at just 5% interest plus free toolkits. The digital marketing support helps artisans sell nationally via e-commerce.',
      T: 'This scheme supports traditional artisans — carpenters, potters, weavers, goldsmiths — with affordable credit (₹3 lakh at 5%), free tool kits worth ₹15,000, and skill training. It\'s designed to modernize India\'s artisan economy without losing traditional expertise. Registration is through Common Service Centres.',
      V: 'If you are a carpenter, blacksmith, goldsmith, potter, tailor, or any traditional craftsperson, this scheme gives you a ₹15,000 toolkit for free and a loan up to ₹3 lakh at only 5% interest — much cheaper than private moneylenders. You also get training and help selling online.',
      W: 'தச்சர், கொல்லர், பொற்கொல்லர், குயவர், நெசவாளர், தையல்காரர் போன்ற 18 பாரம்பரிய தொழில் செய்பவர்களுக்கான திட்டம். ₹15,000 கருவி மானியம் இலவசம். ₹3 லட்சம் வரை கடன் 5% வட்டியில். பயிற்சி + ஆன்லைன் விற்பனை உதவி.',
      E: 'PM Vishwakarma targets 18 identified traditional trades with a comprehensive support package: collateral-free credit up to ₹3 lakh at 5% concessional interest, ₹15,000 toolkit grants, skill training with stipend, and digital/marketing integration. Total outlay ₹13,000 crore. Particularly relevant for TN\'s artisan clusters in Kanchipuram, Thanjavur, and Sivaganga.'
    }
  },
  {
    id: 'pmegp',
    name: 'PMEGP (Prime Minister\'s Employment Generation Programme)',
    type: 'central',
    eligibility: 'Any individual above 18 years; for manufacturing projects above ₹10 lakh and service projects above ₹5 lakh, minimum 8th class pass required',
    benefit: '15-35% capital subsidy on project cost (varies by category and area — urban/rural); balance as bank loan',
    amount: 'Up to ₹50 lakh for manufacturing / ₹20 lakh for service sector projects',
    sectors: ['Manufacturing', 'Service', 'All sectors'],
    icon: '💼',
    url: 'https://www.kviconline.gov.in/pmegpeportal/',
    tier: {
      K: 'PMEGP is arguably the best entry-level scheme for first-generation entrepreneurs in TN. A general category applicant in a rural area gets 25% subsidy; SC/ST/women get 35%. For a ₹50 lakh manufacturing project, that\'s ₹12.5-17.5 lakh as free grant. The scheme is routed through KVIC and District Industries Centres.',
      T: 'PMEGP provides 15-35% capital subsidy to new micro enterprises. The subsidy rate depends on your category (General/SC/ST/Women/Minorities) and location (urban/rural). Maximum project cost: ₹50 lakh for manufacturing, ₹20 lakh for services. You apply online through the KVIC portal; the bank provides the remaining amount as a loan.',
      V: 'Starting a new business? The government will give you 15% to 35% of your project cost as a free subsidy — you don\'t repay it. For SC/ST, women, or rural applicants, the subsidy is higher. You can get up to ₹50 lakh for a manufacturing unit or ₹20 lakh for a service business. Apply at your District Industries Centre.',
      W: 'புதிய தொழில் தொடங்குபவர்களுக்கு 15% முதல் 35% வரை மானியம் — இதை திருப்பி செலுத்த வேண்டாம். உற்பத்தி: ₹50 லட்சம் வரை, சேவை: ₹20 லட்சம் வரை. SC/ST/பெண்கள்/கிராமப்புறம் என்றால் அதிக மானியம். மாவட்ட தொழில் மையத்தில் விண்ணப்பிக்கவும்.',
      E: 'PMEGP offers 15-35% capital subsidy on project cost for new micro enterprises. Subsidy margin: General Urban 15%, General Rural 25%, Special Category Urban 25%, Special Category Rural 35%. Max project cost ₹50L manufacturing / ₹20L service. Implemented through KVIC, KVIB, and DIC. Second loan available for successful units under PMEGP-2.'
    }
  },
  {
    id: 'mudra',
    name: 'MUDRA (Micro Units Development & Refinance Agency)',
    type: 'central',
    eligibility: 'Any Indian citizen with a business plan for a non-farm, non-corporate micro/small enterprise; no collateral required',
    benefit: 'Collateral-free loans in three tiers: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), Tarun (₹5,00,001 to ₹10 lakh)',
    amount: 'Up to ₹10 lakh per borrower without collateral',
    sectors: ['All non-farm sectors', 'Manufacturing', 'Trading', 'Service'],
    icon: '🏦',
    url: 'https://www.mudra.org.in/',
    tier: {
      K: 'MUDRA has disbursed over ₹27 lakh crore since launch — it\'s the backbone of micro-enterprise credit in India. In TN, with its massive MSME ecosystem (7.9 lakh registered units), MUDRA\'s three tiers let entrepreneurs scale gradually: start with Shishu, prove yourself, upgrade to Kishore, then Tarun. Zero collateral is the key unlock.',
      T: 'MUDRA provides collateral-free loans to micro and small businesses through any bank, NBFC, or MFI. Three categories based on business stage: Shishu (up to ₹50K) for startups, Kishore (up to ₹5L) for mid-stage, Tarun (up to ₹10L) for established units needing growth capital. Apply at any bank branch.',
      V: 'Need money for your small business but don\'t have property to pledge? MUDRA loans need zero collateral. Start with up to ₹50,000 (Shishu), then grow to ₹5 lakh (Kishore), and then ₹10 lakh (Tarun). Go to any bank branch — SBI, Indian Bank, canara, or even private banks — and apply.',
      W: 'சிறு தொழிலுக்கு ஜாமீன் இல்லாமல் கடன் — ₹50,000 வரை (சிசு), ₹5 லட்சம் வரை (கிஷோர்), ₹10 லட்சம் வரை (தருண்). எந்த வங்கியிலும் விண்ணப்பிக்கலாம். கடை, சிறு தொழிற்சாலை, சேவை நிறுவனம் — எதற்கும் பெறலாம்.',
      E: 'MUDRA loans provide collateral-free micro credit up to ₹10 lakh in three tiers. Cumulative disbursement has crossed ₹27 lakh crore nationally. Available through all scheduled commercial banks, RRBs, MFIs, and NBFCs. TN is among the top 5 states in MUDRA disbursement. Interest rates vary by lender — typically 8-12%.'
    }
  },
  {
    id: 'startup-india',
    name: 'Startup India',
    type: 'central',
    eligibility: 'DPIIT-recognized startups — entity incorporated as Private Ltd, Partnership, or LLP; less than 10 years old; turnover under ₹100 crore in any year',
    benefit: 'Tax holiday (100% tax exemption for 3 of the first 10 years), self-certification under 6 labour and 3 environmental laws, Fund of Funds access, patent fee rebate (80%)',
    amount: '₹10,000 crore Fund of Funds; tax exemption under Section 80-IAC; angel tax exemption under Section 56(2)(viib)',
    sectors: ['All sectors', 'Technology', 'Innovation-driven'],
    icon: '🚀',
    url: 'https://www.startupindia.gov.in/',
    tier: {
      K: 'Tamil Nadu ranks #3 nationally in startup ecosystem (DPIIT ranking). With Startup India recognition, your startup gets a 3-year tax holiday, self-certification compliance (huge compliance cost saver), and access to the ₹10,000 crore Fund of Funds via SIDBI. Combine this with TN\'s own StartupTN/TANSEED for a stacked incentive.',
      T: 'Startup India provides regulatory and tax benefits to DPIIT-recognized startups. Key perks: 100% income tax exemption for any 3 years in the first 10, self-certification under 9 laws, 80% patent fee rebate, and access to Fund of Funds. Registration is free and online through the Startup India portal.',
      V: 'If you have an innovative business idea, register as a startup on the Startup India portal (it\'s free). You get 3 years of no income tax, simpler compliance rules, faster patent filing at 80% lower fees, and a chance to get government fund investment. Works for tech and non-tech businesses.',
      W: 'புதுமையான தொழில் தொடங்குபவர்களுக்கு — 3 வருடம் வருமான வரி இல்லை, எளிய இணக்க விதிகள், காப்புரிமை கட்டணத்தில் 80% தள்ளுபடி. Startup India இணையதளத்தில் இலவசமாக பதிவு செய்யலாம். அரசு நிதி உதவியும் கிடைக்கும்.',
      E: 'Startup India recognition unlocks Section 80-IAC (3/10 year tax holiday), Section 56(2)(viib) angel tax exemption, self-certification under 9 laws, 80% patent fee rebate, and access to ₹10,000 Cr Fund of Funds (via SIDBI to AIFs). TN has 9,500+ DPIIT-recognized startups as of 2025. DPIIT registration is prerequisite for most benefits.'
    }
  },
  {
    id: 'clcss',
    name: 'CLCSS (Credit Linked Capital Subsidy Scheme)',
    type: 'central',
    eligibility: 'Existing micro and small enterprises upgrading technology in specified 51 sub-sectors; eligible technologies listed in scheme guidelines',
    benefit: '15% capital subsidy on institutional credit up to ₹1 crore for technology upgradation of plant and machinery',
    amount: 'Maximum subsidy of ₹15 lakh per eligible unit',
    sectors: ['Manufacturing', 'Technology Upgradation', '51 specified sub-sectors'],
    icon: '⚙️',
    url: 'https://msme.gov.in/technology-upgradation-and-quality-certification',
    tier: {
      K: 'CLCSS is the silent workhorse for TN\'s MSMEs going from manual to automated. If you\'re upgrading from a conventional lathe to CNC, or adding packaging automation — and your bank loan for this is up to ₹1 crore — the government gives you 15% (max ₹15 lakh) as a grant. 51 sub-sectors covered.',
      T: 'CLCSS provides 15% upfront capital subsidy on loans up to ₹1 crore taken for technology upgradation. It\'s specifically for MSMEs replacing old technology with proven, upgraded technology in 51 identified sub-sectors. The subsidy is credited directly to the loan account, reducing your repayment burden.',
      V: 'Upgrading your factory machines? If you take a bank loan up to ₹1 crore for new, better machines, the government pays 15% of that (up to ₹15 lakh) directly — this reduces your loan. Covers 51 types of manufacturing businesses. Ask your bank or District Industries Centre.',
      W: 'தொழிற்சாலை இயந்திரங்களை புதுப்பிக்க வங்கிக் கடன் வாங்கினால், அதில் 15% (அதிகபட்சம் ₹15 லட்சம்) அரசு மானியமாக கொடுக்கும். 51 வகை உற்பத்தித் துறைகளுக்கு பொருந்தும். வங்கி அல்லது மாவட்ட தொழில் மையத்தில் விண்ணப்பிக்கவும்.',
      E: 'CLCSS offers 15% capital subsidy (max ₹15L) on institutional finance up to ₹1 crore for technology upgradation in 51 identified MSME sub-sectors. Subsidy is front-ended and adjusted against term loan. Nodal agencies include SIDBI, NABARD, and designated banks. Dovetails with state MSME capital subsidy for enhanced benefit.'
    }
  },
  {
    id: 'sfurti',
    name: 'SFURTI (Scheme of Fund for Regeneration of Traditional Industries)',
    type: 'central',
    eligibility: 'Clusters of traditional artisans, typically 500+ artisans per cluster (regular) or 1000+ (major); implemented through Nodal Agencies (NGOs, Institutions, State Govt bodies)',
    benefit: 'Common facility centres, raw material banks, design development, market linkages, skill training for entire clusters',
    amount: 'Up to ₹2.5 crore for regular clusters (500 artisans); up to ₹5 crore for major clusters (1000+ artisans)',
    sectors: ['Khadi', 'Coir', 'Bamboo', 'Honey', 'Traditional Industries'],
    icon: '🏘️',
    url: 'https://sfurti.msme.gov.in/',
    tier: {
      K: 'TN has massive traditional industry clusters — Karur textiles, Sivakasi fireworks/printing, Namakkal poultry, Mahabalipuram stone carving. SFURTI funds entire clusters (not individual units) with up to ₹5 crore for shared infrastructure — common processing, design centres, quality labs. It\'s about collective competitiveness.',
      T: 'SFURTI develops clusters of traditional artisans by funding shared infrastructure — common facility centres, testing labs, raw material banks, design centres. Up to ₹2.5 crore for clusters of 500+ artisans, ₹5 crore for 1000+ artisans. Implementation is through approved nodal agencies, not individual applications.',
      V: 'If your village or area has many artisans doing the same trade (500 or more), this scheme builds shared facilities — testing labs, common workshops, raw material storage, training centres. The government spends up to ₹5 crore on the cluster. Talk to your local industry association or NGO to apply as a group.',
      W: 'ஒரே தொழிலில் 500+ கைவினைஞர்கள் இருக்கும் கிளஸ்டர்களுக்கு — பொது வசதி மையம், மூலப்பொருள் வங்கி, சோதனை ஆய்வகம், பயிற்சி போன்றவற்றுக்கு ₹5 கோடி வரை. உள்ளூர் தொழில் சங்கம் அல்லது NGO மூலம் விண்ணப்பிக்கவும்.',
      E: 'SFURTI supports traditional industry clusters with ₹2.5Cr (regular: 500+ artisans) to ₹5Cr (major: 1000+ artisans) for shared infrastructure. Covers CFCs, raw material banks, design centres, product development, market linkage, and skill training. Implemented through nodal agencies. TN has active clusters in coir (Pollachi), handlooms (Salem/Karur), stone carving (Mahabalipuram).'
    }
  },
  {
    id: 'aspire',
    name: 'ASPIRE (A Scheme for Promotion of Innovation, Rural Industry & Entrepreneurship)',
    type: 'central',
    eligibility: 'Technology Business Incubators (TBIs), Livelihood Business Incubators (LBIs) promoted by host institutions; individual MSMEs access benefits through these incubators',
    benefit: 'Establishment of incubation centres, fund of funds for startups, innovation/entrepreneurship promotion in rural areas',
    amount: 'Up to ₹1 crore for setting up new incubation centres; up to ₹30 lakh for upgrading existing ones',
    sectors: ['Innovation', 'Rural Industry', 'Agri-business', 'All sectors'],
    icon: '💡',
    url: 'https://aspire.msme.gov.in/',
    tier: {
      K: 'ASPIRE funds incubation infrastructure, not individual businesses directly. For TN, this means more MSME incubators beyond the current IIT-M, PSG, and Tidel Park ecosystem. If you\'re a college, industry association, or NGO wanting to set up an MSME incubation centre — especially in tier-2/3 towns — this is your funding source.',
      T: 'ASPIRE promotes innovation-driven entrepreneurship by funding incubation centres. Host institutions (colleges, R&D centres, industry associations) can get up to ₹1 crore to set up incubation centres for MSMEs. Individual entrepreneurs benefit by accessing these incubators for mentorship, workspace, and seed funding.',
      V: 'This scheme helps set up business incubation centres — places where new entrepreneurs get office space, training, and mentorship. If you\'re starting an innovative business, look for an ASPIRE-funded incubator near you. They provide workspace, business guidance, and connections to investors.',
      W: 'புதிய தொழில் முனைவோருக்கு பயிற்சி, அலுவலக வசதி, வழிகாட்டுதல் வழங்கும் இன்குபேஷன் மையங்களை அமைக்க ₹1 கோடி வரை அரசு நிதி. நீங்கள் இதுபோன்ற மையத்தில் சேர்ந்து பயனடையலாம்.',
      E: 'ASPIRE establishes Technology Business Incubators and Livelihood Business Incubators to promote innovation-driven MSME entrepreneurship. Grant: up to ₹1Cr for new TBIs/LBIs, ₹30L for upgradation. Also includes Fund of Funds component. TN host institutions include IIT-Madras Research Park, PSG-STEP, and Anna University incubators.'
    }
  },
  {
    id: 'zed',
    name: 'ZED (Zero Defect Zero Effect)',
    type: 'central',
    eligibility: 'All MSMEs registered on Udyam; certification at Bronze, Silver, Gold, and Diamond levels',
    benefit: 'Financial assistance for quality and environmental certification; up to ₹5 lakh subsidy covering 80% of certification costs; preference in government procurement',
    amount: 'Up to ₹5 lakh per MSME for ZED certification costs; additional benefits linked to GeM procurement preference',
    sectors: ['All MSME sectors'],
    icon: '✅',
    url: 'https://zed.msme.gov.in/',
    tier: {
      K: 'ZED certification is becoming a procurement prerequisite — government departments increasingly prefer ZED-certified vendors on GeM. For TN MSMEs, the 80% subsidy on certification cost (max ₹5 lakh) makes it nearly free to get certified. Plus, it positions you for export markets that demand quality/environmental compliance.',
      T: 'ZED certifies MSMEs for quality (zero defect) and environmental sustainability (zero effect). The government pays 80% of certification costs up to ₹5 lakh. Certified MSMEs get procurement preference on GeM, reduced inspection, and better market access. Four levels: Bronze, Silver, Gold, Diamond.',
      V: 'Get your business quality-certified and the government pays 80% of the cost (up to ₹5 lakh). This ZED certificate proves your products are high quality and eco-friendly. With this certificate, you get priority in government orders. Register on the ZED portal and choose your certification level.',
      W: 'உங்கள் தொழிலுக்கு தர சான்றிதழ் பெற 80% செலவை அரசே ஏற்கும் (₹5 லட்சம் வரை). இந்த சான்றிதழ் இருந்தால் அரசு ஆர்டர்கள் பெற முன்னுரிமை. ZED இணையதளத்தில் பதிவு செய்யலாம்.',
      E: 'ZED certification scheme covers 80% of certification costs (max ₹5L) across 4 levels. Benefits: GeM procurement preference, reduced inspection, enhanced creditworthiness, export market access. SC/ST and women-owned MSMEs get additional 5% subsidy. Over 75,000 MSMEs certified nationally. Drives quality + sustainability simultaneously.'
    }
  },
  {
    id: 'gem',
    name: 'GeM (Government e-Marketplace)',
    type: 'central',
    eligibility: 'Any seller/service provider with valid GSTIN, PAN, and bank account; MSMEs and startups get special benefits including 25% procurement reservation',
    benefit: 'Direct access to government procurement worth ₹4+ lakh crore annually; no tender fees; transparent bidding; 25% MSME reservation; 3% women-owned reservation',
    amount: 'No direct subsidy — access to government procurement market worth ₹4+ lakh crore/year',
    sectors: ['All products and services purchased by government'],
    icon: '🛒',
    url: 'https://gem.gov.in/',
    tier: {
      K: 'GeM has crossed ₹4 lakh crore in annual procurement — it\'s the biggest buyer in India. For TN MSMEs, the 25% procurement reservation for MSMEs (with 3% for women-owned) is mandatory. Registration is free, there are no tender fees, and payment is guaranteed within 10 days. If you\'re not on GeM, you\'re leaving government money on the table.',
      T: 'GeM is the government\'s online procurement portal — all central and most state government purchases happen here. Registration is free. MSMEs get 25% of all procurement reserved for them, and women-owned businesses get an additional 3% reservation. No tender fees, transparent bidding, and faster payments.',
      V: 'Want to sell to the government? Register on GeM (free). The government must buy 25% of its needs from small businesses like yours. No fees to participate in tenders. Payments come faster than private sector. If you make office supplies, furniture, uniforms, food items, or provide services — there\'s demand here.',
      W: 'அரசுக்கு பொருட்கள்/சேவைகள் விற்க GeM-ல் இலவசமாக பதிவு செய்யலாம். சிறு தொழில்களுக்கு 25% ஒதுக்கீடு. டெண்டர் கட்டணம் இல்லை. பணம் விரைவாக வரும். அலுவலக பொருட்கள், சீருடை, உணவு, சேவைகள் — எல்லாவற்றுக்கும் தேவை.',
      E: 'GeM is India\'s national public procurement platform with ₹4L+ Cr annual GMV. MSMEs get 25% procurement reservation (mandatory for all central ministries), 3% reservation for women-owned MSMEs, zero tender fees, and 10-day payment guarantee. Over 70 lakh sellers registered. TN MSMEs should list all eligible products/services for passive revenue.'
    }
  },
  {
    id: 'odop',
    name: 'ODOP (One District One Product)',
    type: 'central',
    eligibility: 'MSMEs, artisans, and producer groups working in the identified product of their district; districts are mapped to specific products',
    benefit: 'Branding support, marketing assistance, GI tag facilitation, e-commerce onboarding, buyer-seller meets, quality improvement, common facility centres',
    amount: 'Varies — integrated with PMFME (35% subsidy), other MSME schemes; branding and marketing support is free',
    sectors: ['District-specific products', 'Food Processing', 'Handicrafts', 'Textiles'],
    icon: '🗺️',
    url: 'https://odop.mofpi.gov.in/',
    tier: {
      K: 'Tamil Nadu has rich ODOP mapping — Kanchipuram silk, Thanjavur paintings, Mahabalipuram sculptures, Chettinad cuisine, Tirunelveli halwa, Kovilpatti kadalai mittai. The scheme provides branding, GI tag support, and e-commerce onboarding. Combined with PMFME for food products, it\'s a powerful district-level economic development tool.',
      T: 'ODOP identifies one signature product per district and provides comprehensive support — branding, quality improvement, marketing, GI tag facilitation, and e-commerce listing. It\'s integrated with other schemes like PMFME for food products. The goal is to make each district globally known for its specialty.',
      V: 'Every district has a special product — your district\'s product gets special government support for branding, quality improvement, and selling online. This could be a traditional food item, handicraft, or textile. Check what your district\'s ODOP product is and get free marketing and branding help.',
      W: 'ஒவ்வொரு மாவட்டத்துக்கும் ஒரு சிறப்பு பொருள் — காஞ்சிபுரம் பட்டு, தஞ்சாவூர் ஓவியம், திருநெல்வேலி அல்வா போன்றவை. இவற்றுக்கு அரசு பிராண்டிங், சந்தை வசதி, ஆன்லைன் விற்பனை ஆதரவு வழங்கும்.',
      E: 'ODOP maps signature products to each district and provides integrated support — branding, GI tagging, quality/packaging improvement, e-commerce onboarding (Amazon Saheli, Flipkart Samarth), and buyer-seller meets. Integrated with PMFME for food processing ODOP products. TN ODOP mapping includes 38 districts with products spanning silk, brass, stone carving, snacks, and spices.'
    }
  },
  {
    id: 'pmfme',
    name: 'PMFME (PM Formalization of Micro Food Processing Enterprises)',
    type: 'central',
    eligibility: 'Existing micro food processing enterprises and new units; individual or group/FPO/SHG/cooperative proposals; one district one product (ODOP) alignment preferred',
    benefit: '35% capital subsidy (credit-linked) for expansion/upgradation; seed capital through SHGs; common infrastructure support; branding and marketing',
    amount: 'Up to ₹10 lakh individual subsidy (35% of project cost); up to ₹3 lakh seed capital for SHG members',
    sectors: ['Food Processing', 'Agri-business', 'FMCG'],
    icon: '🍛',
    url: 'https://pmfme.mofpi.gov.in/',
    tier: {
      K: 'India has 25 lakh micro food processing units — most are unregistered. PMFME bridges formalization with a 35% capital subsidy (up to ₹10 lakh). For TN, with its massive food economy — murukku, mixture, pickles, banana chips, idli batter — this scheme is transformative. ODOP alignment gives extra preference.',
      T: 'PMFME provides 35% credit-linked capital subsidy (max ₹10 lakh) to micro food processing enterprises for expansion, technology upgradation, and formalization. Also offers seed capital of up to ₹3 lakh for SHG members. Linked with ODOP for district-specific food products. Covers equipment, packaging, and FSSAI compliance.',
      V: 'If you make food products — snacks, pickles, spices, sweets, flour — this scheme gives you 35% subsidy (up to ₹10 lakh) on equipment and upgradation costs. Also helps with FSSAI license, better packaging, and branding. SHG members can get ₹3 lakh as seed capital. Apply at your District Industries Centre.',
      W: 'தின்பண்டங்கள், ஊறுகாய், மசாலா, இனிப்பு போன்ற உணவு தயாரிப்பாளர்களுக்கு 35% மானியம் (₹10 லட்சம் வரை). FSSAI உரிமம், நல்ல பேக்கேஜிங், பிராண்டிங் உதவி. SHG உறுப்பினர்களுக்கு ₹3 லட்சம் விதை முதலீடு.',
      E: 'PMFME offers 35% credit-linked capital subsidy (max ₹10L individual, ₹3L SHG seed capital) for micro food processing formalization. Covers equipment, packaging, FSSAI compliance, and branding. Preference for ODOP-aligned products. TN food processing clusters: Sivakasi (snacks), Madurai (banana products), Tirunelveli (halwa), Thoothukudi (salt). Central scheme, state-implemented through DIC.'
    }
  }
];

var STATE_SCHEMES = [
  {
    id: 'needs',
    name: 'NEEDS (New Entrepreneur-cum-Enterprise Development Scheme)',
    type: 'state',
    eligibility: 'SC/ST entrepreneurs in Tamil Nadu; age 21-45; minimum 8th class pass; projects in manufacturing, service, or business sectors',
    benefit: '25% capital subsidy (back-end) on project cost; remaining as composite loan through banks; entrepreneurship training; hand-holding support',
    amount: 'Up to ₹30 lakh capital subsidy (25% of project cost up to ₹1.20 crore)',
    icon: '🎯',
    url: 'https://www.tn.gov.in/scheme/data_view/needs',
    tier: {
      K: 'NEEDS is TN\'s flagship scheme for SC/ST entrepreneurship — offering 25% back-end capital subsidy up to ₹30 lakh. It\'s a composite package: subsidy + bank loan + training + mentorship. Since 2012, it has created thousands of first-generation entrepreneurs. Stack this with central schemes for even better economics.',
      T: 'NEEDS provides 25% capital subsidy (maximum ₹30 lakh) to SC/ST entrepreneurs for setting up new enterprises. It includes entrepreneurship development training, project guidance, and 5 years of hand-holding support. The subsidy is released after the unit begins production. Apply through the Adi Dravidar Welfare Department.',
      V: 'SC/ST community entrepreneurs can get 25% subsidy — up to ₹30 lakh — for starting a business. You also get free training, business guidance, and support for 5 years. Covers manufacturing, service, and trading businesses. Contact the Adi Dravidar Welfare Department in your district.',
      W: 'SC/ST தொழில் முனைவோருக்கு 25% மானியம் — ₹30 லட்சம் வரை. இலவச தொழில் பயிற்சி + 5 வருட வழிகாட்டுதல். உற்பத்தி, சேவை, வணிகம் — எல்லாவற்றுக்கும். ஆதி திராவிடர் நல்வாழ்வுத் துறையில் விண்ணப்பிக்கவும்.',
      E: 'NEEDS: TN\'s SC/ST entrepreneurship scheme. 25% back-end capital subsidy up to ₹30L on projects up to ₹1.2Cr. Includes EDP training, bank credit facilitation, and 5-year post-establishment monitoring. Implemented by Adi Dravidar & Tribal Welfare Dept. Can be combined with central PMEGP/MUDRA for enhanced support.'
    }
  },
  {
    id: 'tiic',
    name: 'TIIC (Tamil Nadu Industrial Investment Corporation) Loans',
    type: 'state',
    eligibility: 'MSMEs, medium enterprises, and large industries in Tamil Nadu; new and existing units for expansion/modernization',
    benefit: 'Term loans for capital equipment at competitive interest rates; quicker processing than commercial banks; single window facilitation',
    amount: 'Up to ₹5 crore for MSMEs; higher limits for medium/large enterprises; interest rates linked to RBI repo rate',
    icon: '🏛️',
    url: 'https://tiic.org/',
    tier: {
      K: 'TIIC is TN\'s own industrial finance corporation — purpose-built for MSME lending. Faster processing than commercial banks, less bureaucracy, and they understand manufacturing. Loans up to ₹5 crore for MSMEs. If you\'re setting up in SIPCOT/SIDCO industrial estates, TIIC is your first-choice lender.',
      T: 'TIIC is Tamil Nadu\'s state-owned industrial finance corporation providing term loans specifically for industrial projects. Advantages over commercial banks: faster processing, industry-specific expertise, and lower documentation burden. Competitive interest rates linked to RBI repo rate. Also facilitates single-window clearance.',
      V: 'Need a loan for factory machines or industrial equipment? TIIC (government body) gives loans up to ₹5 crore with less paperwork than regular banks. They understand factory businesses better and process applications faster. Visit any TIIC branch office or apply online.',
      W: 'தொழிற்சாலை இயந்திரங்களுக்கு ₹5 கோடி வரை கடன். வழக்கமான வங்கிகளை விட குறைவான ஆவணங்கள் + விரைவான செயலாக்கம். TIIC கிளை அலுவலகத்தில் விண்ணப்பிக்கவும்.',
      E: 'TIIC: TN\'s state DFI for industrial lending. Term loans up to ₹5Cr for MSMEs, higher for medium/large. Competitive rates (repo-linked). Advantages: faster TAT, industrial domain expertise, SIPCOT/SIDCO ecosystem integration, single-window clearance facilitation. Also operates equipment leasing and bill discounting. Network of 20+ branch offices across TN.'
    }
  },
  {
    id: 'tahdco',
    name: 'TAHDCO (Tamil Nadu Adi Dravidar Housing Development Corporation)',
    type: 'state',
    eligibility: 'SC/ST individuals in Tamil Nadu for economic development loans; priority for BPL families and women',
    benefit: 'Subsidized loans for self-employment and enterprise development; margin money assistance; subsidy component on loan amount',
    amount: 'Up to ₹10 lakh economic development loan; subsidy component of 33-50% depending on scheme',
    icon: '🤝',
    url: 'https://tahdco.tn.gov.in/',
    tier: {
      K: 'TAHDCO is the SC/ST community\'s dedicated financial institution in TN — providing credit where commercial banks often won\'t. Up to ₹10 lakh with 33-50% subsidy component. Combined with NEEDS, PMEGP, and MUDRA, SC/ST entrepreneurs in TN have one of the most generous multi-layered support systems in India.',
      T: 'TAHDCO provides subsidized enterprise loans to SC/ST entrepreneurs in Tamil Nadu. Loans up to ₹10 lakh with a 33-50% subsidy component (depending on the specific scheme). Also provides margin money assistance to help SC/ST entrepreneurs access bank credit. Special focus on women and BPL families.',
      V: 'SC/ST entrepreneurs can get loans up to ₹10 lakh from TAHDCO with 33-50% coming as subsidy (you don\'t repay that part). They also help you get loans from banks by providing the margin money. Special priority for women and families below poverty line. Apply at your local TAHDCO office.',
      W: 'SC/ST தொழில் முனைவோருக்கு ₹10 லட்சம் வரை கடன் — அதில் 33-50% மானியம் (திருப்பி செலுத்த வேண்டாம்). பெண்கள் + வறுமைக் கோட்டுக்கு கீழ் உள்ளவர்களுக்கு முன்னுரிமை. TAHDCO அலுவலகத்தில் விண்ணப்பிக்கவும்.',
      E: 'TAHDCO: TN\'s SC/ST economic development corporation. Enterprise loans up to ₹10L with 33-50% subsidy component. Also provides margin money assistance for bank credit access, SHG credit linkage, and skill training. Special schemes for women, youth, and BPL families. District offices in all 38 districts. Complements NEEDS and central SC/ST schemes.'
    }
  },
  {
    id: 'tanseed',
    name: 'TANSEED (Tamil Nadu Startup and Innovation Seed Fund)',
    type: 'state',
    eligibility: 'DPIIT-recognized startups registered in Tamil Nadu; product/prototype stage; innovative solution addressing a market gap',
    benefit: 'Non-dilutive grant funding; mentorship from industry experts; networking and market access; follow-on investor connects',
    amount: 'Grants up to ₹10 lakh per startup; awarded through competitive pitch process',
    icon: '🌱',
    url: 'https://startuptn.in/tanseed/',
    tier: {
      K: 'TANSEED has funded 700+ startups since inception — it\'s India\'s largest state-run seed fund program. ₹10 lakh as a non-dilutive grant (no equity taken) at prototype/MVP stage. The real value is the StartupTN ecosystem access, investor connects, and credibility signal. Apply during annual cohort windows.',
      T: 'TANSEED provides non-dilutive grants of up to ₹10 lakh to early-stage startups in Tamil Nadu. Unlike investor funding, you don\'t give up equity. Selection is through a competitive pitch process. The grant comes with mentorship, market access support, and connections to follow-on investors through the StartupTN network.',
      V: 'Have a startup idea with a working prototype? Apply for TANSEED and you could get ₹10 lakh as a grant — you keep 100% of your company. You also get mentors and investor introductions. Apply when applications open on the StartupTN website.',
      W: 'புதுமையான ஸ்டார்ட்அப் தொடங்குபவர்களுக்கு ₹10 லட்சம் மானியம் — நிறுவனத்தில் பங்கு கொடுக்க வேண்டாம். வழிகாட்டுதல் + முதலீட்டாளர் அறிமுகம். StartupTN இணையதளத்தில் விண்ணப்பிக்கவும்.',
      E: 'TANSEED: India\'s largest state seed fund program with 700+ startups funded. Non-dilutive grants up to ₹10L per startup. Competitive cohort-based selection via pitch process. Comes with StartupTN mentorship network, TANSIM incubator access, and investor demo days. Annual application cycles. DPIIT recognition required.'
    }
  },
  {
    id: 'startuptn',
    name: 'StartupTN',
    type: 'state',
    eligibility: 'Startups registered in Tamil Nadu; innovators with scalable business ideas; preference for technology-driven solutions',
    benefit: 'Incubation support at TANSIM and partner incubators; mentorship programs; co-working spaces; TANSEED grant access; policy advocacy; investor networking',
    amount: 'Free or subsidized incubation; access to TANSEED grants (₹10 lakh); co-working space access',
    icon: '🏢',
    url: 'https://startuptn.in/',
    tier: {
      K: 'StartupTN is the state\'s startup ecosystem orchestrator — connecting founders to incubators (TANSIM, IIT-M, PSG-STEP), funding (TANSEED), mentors, and government. TN is now ranked as a Top Performer in startup ecosystems by DPIIT. If you\'re building a startup in TN, register on StartupTN first — it\'s your gateway to everything.',
      T: 'StartupTN is Tamil Nadu\'s official startup ecosystem platform providing end-to-end support: incubation at TANSIM and partner incubators, TANSEED grants, mentorship programs, co-working spaces, and investor networking events. Also drives startup-friendly policy and government procurement access for startups.',
      V: 'Starting an innovative business in Tamil Nadu? Register on StartupTN. You get free office space in co-working centres, business mentors, a chance to apply for ₹10 lakh grants (TANSEED), and connections to investors. It\'s the government\'s one-stop platform for startup support.',
      W: 'தமிழ்நாட்டில் ஸ்டார்ட்அப் தொடங்குபவர்களுக்கு — இலவச அலுவலக இடம், வணிக வழிகாட்டுதல், ₹10 லட்சம் மானியம் பெற வாய்ப்பு, முதலீட்டாளர் அறிமுகம். StartupTN இணையதளத்தில் பதிவு செய்யலாம்.',
      E: 'StartupTN: TN\'s nodal startup ecosystem agency. Programs: TANSEED (seed grants), TANSIM (state incubator), Grand Challenge (problem statements), co-working network, mentor connect, investor demo days. TN ranked Top Performer in DPIIT State Startup Rankings. 9,500+ registered startups. Gateway to all state startup benefits.'
    }
  },
  {
    id: 'msme-capital-subsidy',
    name: 'MSME Capital Subsidy (State)',
    type: 'state',
    eligibility: 'New MSMEs established in Tamil Nadu; must be registered on Udyam; investment in plant & machinery as per MSME classification',
    benefit: '25% capital subsidy on eligible fixed assets (plant & machinery); higher rates for priority sectors and backward districts',
    amount: 'Up to ₹30 lakh subsidy (25% on plant & machinery investment)',
    icon: '🏗️',
    url: 'https://www.tn.gov.in/scheme/data_view/msme-incentives',
    tier: {
      K: 'TN\'s state capital subsidy is stackable with central schemes like CLCSS — meaning you can potentially get 25% state subsidy + 15% CLCSS = 40% of your machinery cost covered. For backward districts (Dharmapuri, Krishnagiri, Ramanathapuram), rates may be even higher. This is the foundation of TN\'s MSME incentive stack.',
      T: 'Tamil Nadu provides 25% capital subsidy on plant & machinery investment for new MSMEs, up to ₹30 lakh. This is the state\'s direct incentive — separate from and stackable with central CLCSS. Higher subsidy rates apply for units in backward districts and priority sectors. Apply through the District Industries Centre.',
      V: 'Starting a new manufacturing or service business? Tamil Nadu government gives 25% subsidy on the cost of your machines and equipment — up to ₹30 lakh free. You get even more if your business is in a backward district. Apply at your District Industries Centre with your Udyam registration.',
      W: 'புதிய MSME தொடங்கினால் இயந்திர செலவில் 25% மானியம் — ₹30 லட்சம் வரை. பின்தங்கிய மாவட்டங்களில் இன்னும் அதிகம். Udyam பதிவு + மாவட்ட தொழில் மையத்தில் விண்ணப்பிக்கவும்.',
      E: 'TN MSME Capital Subsidy: 25% on plant & machinery (max ₹30L) for new MSMEs. Enhanced rates for backward/most backward districts. Stackable with central CLCSS (15%) for effective 40% capital cost reduction. Requires Udyam registration. Back-end subsidy released after commencement of production. DIC is implementing agency.'
    }
  },
  {
    id: 'msme-interest-subvention',
    name: 'MSME Interest Subvention (State)',
    type: 'state',
    eligibility: 'New MSMEs in Tamil Nadu availing term loans from scheduled commercial banks, TIIC, or SIDBI',
    benefit: '3% interest subsidy on term loans for first 5 years, reducing effective borrowing cost significantly',
    amount: '3% interest subvention on term loan for 5 years; claimed annually',
    icon: '📉',
    url: 'https://www.tn.gov.in/scheme/data_view/msme-incentives',
    tier: {
      K: 'The 3% interest subvention for 5 years is TN\'s way of making industrial credit cheaper. If your bank rate is 10%, effective cost drops to 7%. On a ₹1 crore term loan, that\'s ₹3 lakh savings per year, ₹15 lakh over 5 years. Stack this with the capital subsidy and power tariff subsidy for maximum benefit.',
      T: 'Tamil Nadu offers 3% interest subsidy on term loans for new MSMEs for the first 5 years. If your bank charges 10% interest, you effectively pay only 7%. The subsidy is claimed annually through the District Industries Centre. This reduces your debt servicing burden during the critical early years.',
      V: 'Taking a bank loan for your new business? The TN government pays 3% of your interest for 5 years. If the bank charges 10%, you only pay 7%. This saves lakhs over the loan period. Apply at your District Industries Centre after getting your bank loan.',
      W: 'புதிய MSME வங்கிக் கடனுக்கு 3% வட்டி மானியம் — 5 வருடம். வங்கி 10% வட்டி என்றால் நீங்கள் 7% மட்டும் செலுத்த வேண்டும். மாவட்ட தொழில் மையத்தில் விண்ணப்பிக்கவும்.',
      E: 'TN MSME Interest Subvention: 3% p.a. on term loans for 5 years for new MSMEs. Applicable on loans from SCBs, TIIC, and SIDBI. Annual claim mechanism through DIC. On ₹1Cr term loan at 10%, saves ₹15L over 5 years. Part of TN\'s composite MSME incentive package alongside capital and power tariff subsidies.'
    }
  },
  {
    id: 'msme-power-tariff',
    name: 'MSME Power Tariff Subsidy (State)',
    type: 'state',
    eligibility: 'New MSMEs in Tamil Nadu with valid Udyam registration and TANGEDCO industrial connection',
    benefit: 'Concessional power tariff — ₹1/unit discount on industrial electricity rate for first 3 years of operation',
    amount: '₹1 per unit discount on electricity; typical savings of ₹1-3 lakh per year depending on consumption',
    icon: '⚡',
    url: 'https://www.tn.gov.in/scheme/data_view/msme-incentives',
    tier: {
      K: 'Electricity is 15-25% of operating cost for most manufacturers. TN\'s ₹1/unit discount for 3 years directly improves margins. For a unit consuming 50,000 units/month, that\'s ₹6 lakh/year saved. Combined with capital subsidy and interest subvention, TN\'s MSME package is among India\'s most competitive.',
      T: 'New MSMEs in Tamil Nadu get a ₹1/unit discount on industrial power tariff for the first 3 years. This reduces one of the biggest operating costs for manufacturers. The discount is applied directly to your TANGEDCO bill. Savings depend on consumption — typically ₹1-3 lakh per year for small units.',
      V: 'New factory or workshop? Your electricity bill gets ₹1 discount per unit for 3 years. If you use 10,000 units per month, you save ₹10,000 every month — that\'s ₹1.2 lakh per year. The discount shows automatically on your TANGEDCO bill after you apply through DIC.',
      W: 'புதிய MSME-க்கு மின்சாரத்தில் யூனிட்டுக்கு ₹1 தள்ளுபடி — 3 வருடம். மாதம் 10,000 யூனிட் பயன்படுத்தினால் ₹10,000 சேமிப்பு. TANGEDCO பில்லில் தானாக குறையும். DIC-ல் விண்ணப்பிக்கவும்.',
      E: 'TN MSME Power Tariff Subsidy: ₹1/unit concessional tariff for 3 years. Applied on TANGEDCO industrial connection. Typical savings ₹1-3L/year for small units. Part of composite MSME package. Power cost is 15-25% of manufacturing OPEX, making this a meaningful margin improvement. Requires Udyam registration and DIC application.'
    }
  },
  {
    id: 'women-entrepreneur-package',
    name: 'Women Entrepreneur Package (State)',
    type: 'state',
    eligibility: 'Women entrepreneurs in Tamil Nadu starting new MSMEs; enterprise must have at least 51% ownership by women',
    benefit: 'Additional 5% capital subsidy (total 30% vs 25% general), priority TIIC lending at preferential rates, EMI deferment for first 6 months, skill training support',
    amount: '30% capital subsidy (5% extra over general), priority lending, 6-month EMI moratorium',
    icon: '👩‍💼',
    url: 'https://www.tn.gov.in/scheme/data_view/women-msme',
    tier: {
      K: 'TN has one of India\'s highest female workforce participation rates, and the Women Entrepreneur Package sweetens the deal further: 30% capital subsidy (vs 25% general) + priority TIIC lending + 6-month EMI deferment. Combined with the central 3% women reservation on GeM procurement, women-owned MSMEs in TN have a clear competitive edge.',
      T: 'Women entrepreneurs in TN get enhanced incentives: 30% capital subsidy (5% more than the general 25%), priority processing at TIIC with preferential interest rates, and a 6-month EMI moratorium to help with initial cash flow. Also includes dedicated skill training and mentorship programs.',
      V: 'Women starting a business in TN get extra benefits: 30% subsidy on machines (vs 25% for others), priority bank loans from TIIC, and no EMI payments for the first 6 months. You also get free business training. Apply at the District Industries Centre — ask specifically about the Women Entrepreneur Package.',
      W: 'பெண் தொழில் முனைவோருக்கு சிறப்பு சலுகைகள்: 30% இயந்திர மானியம் (மற்றவர்களுக்கு 25%), TIIC-ல் முன்னுரிமை கடன், முதல் 6 மாதம் EMI தள்ளிவைப்பு, இலவச பயிற்சி. மாவட்ட தொழில் மையத்தில் விண்ணப்பிக்கவும்.',
      E: 'TN Women Entrepreneur Package: Enhanced 30% capital subsidy (+5% over general), priority TIIC lending at preferential rates, 6-month EMI moratorium, dedicated EDP training. Stackable with central schemes (PMEGP higher subsidy for women, GeM 3% reservation, MUDRA priority). TN\'s female LFPR is rising — this package accelerates women-led MSME growth.'
    }
  },
  {
    id: 'sc-st-entrepreneur-package',
    name: 'SC/ST Entrepreneur Package (State)',
    type: 'state',
    eligibility: 'SC/ST entrepreneurs in Tamil Nadu with valid community certificate; new MSMEs in manufacturing or service sectors',
    benefit: 'Enhanced 30% capital subsidy on plant & machinery, TAHDCO credit access with subsidized rates, free entrepreneurship training, dedicated mentorship',
    amount: '30% capital subsidy (up to ₹36 lakh on ₹1.2 crore investment), TAHDCO loans up to ₹10 lakh with 33-50% subsidy',
    icon: '🎓',
    url: 'https://www.tn.gov.in/scheme/data_view/sc-st-msme',
    tier: {
      K: 'The SC/ST Package in TN is perhaps the most generous entrepreneurship support in India when stacked: 30% state capital subsidy + NEEDS 25% back-end subsidy + TAHDCO credit + PMEGP 35% (rural SC/ST) + MUDRA. A SC/ST entrepreneur in a rural area can potentially cover 50-60% of project cost through subsidies alone.',
      T: 'SC/ST entrepreneurs in TN get enhanced MSME incentives: 30% capital subsidy (vs 25% general), access to TAHDCO\'s subsidized loans, free entrepreneurship development training, and dedicated mentorship. This package sits on top of central schemes like NEEDS, PMEGP, and MUDRA — creating a layered support system.',
      V: 'SC/ST community members starting a business get the best deal in TN: 30% subsidy on machines (up to ₹36 lakh), TAHDCO loans with 33-50% subsidy, free business training, and personal business mentors. You can also apply for NEEDS (₹30 lakh subsidy) and PMEGP (35% subsidy) on top of this.',
      W: 'SC/ST தொழில் முனைவோருக்கு மிகச்சிறந்த ஆதரவு: 30% இயந்திர மானியம் (₹36 லட்சம் வரை), TAHDCO கடன் 33-50% மானியம், இலவச பயிற்சி, வழிகாட்டுதல். மேலும் NEEDS + PMEGP மானியமும் பெறலாம்.',
      E: 'TN SC/ST Entrepreneur Package: 30% capital subsidy (vs 25% general), TAHDCO credit access (33-50% subsidy component), free EDP training, dedicated mentorship. Stackable with NEEDS (25% back-end subsidy up to ₹30L), PMEGP (35% for rural SC/ST), and MUDRA. Combined subsidy coverage can reach 50-60% of project cost. Implemented through DIC + Adi Dravidar Welfare Dept.'
    }
  }
];

var SECTOR_INCENTIVES = [
  {
    sector: 'Automobile / EV',
    icon: '🚗',
    policy: 'TN Electric Vehicle Policy 2023',
    incentives: [
      '100% stamp duty exemption on land purchase',
      'SGST reimbursement up to 100% for 15 years',
      'Land at subsidized rate in SIPCOT industrial parks',
      'Capital subsidy 15% on fixed assets for EV manufacturing',
      'Electricity duty exemption for 5 years',
      'Employment incentive: ₹3,000-5,000/month per new employee for 3 years',
      'R&D incentive: 50% of equipment cost up to ₹5 crore'
    ],
    tier: {
      K: 'Tamil Nadu is India\'s Detroit — producing 35% of all automobiles and 70% of auto components. The EV Policy 2023 is a game-changer: 100% stamp duty exemption + SGST reimbursement + 15% capital subsidy + employment incentives. Chennai-Hosur is now the epicentre of India\'s EV revolution with Ola, Ather, TVS, and Hyundai all investing.',
      T: 'TN\'s EV Policy 2023 offers one of India\'s most attractive packages for electric vehicle manufacturing: full stamp duty exemption, SGST reimbursement for 15 years, subsidized SIPCOT land, 15% capital subsidy, and employment incentives. This targets the entire value chain — vehicles, batteries, components, and charging infrastructure.',
      V: 'If you manufacture auto parts, electric vehicles, or EV components, Tamil Nadu gives major benefits: no stamp duty on land, 15% subsidy on equipment, 5 years free electricity duty, and ₹3,000-5,000/month per worker you hire. This makes TN the cheapest place to set up an auto/EV factory.',
      W: 'ஆட்டோமொபைல்/EV உற்பத்தியாளர்களுக்கு: நிலத்தில் முத்திரை வரி இல்லை, 15% இயந்திர மானியம், 5 வருடம் மின்கட்டண விலக்கு, ஊழியர்களுக்கு ₹3,000-5,000/மாதம் ஊக்கத்தொகை. தமிழ்நாடு இந்தியாவின் ஆட்டோ தலைநகரம்.',
      E: 'TN EV Policy 2023: 100% stamp duty exemption, SGST reimbursement (100%, 15 years), SIPCOT land at subsidized rates, 15% capital subsidy on fixed assets, electricity duty exemption (5 years), employment incentive (₹3K-5K/employee/month, 3 years), R&D incentive (50% equipment cost, max ₹5Cr). TN produces 35% of India\'s vehicles, 70% of auto components. EV cluster: Chennai-Hosur corridor.'
    }
  },
  {
    sector: 'IT / ITES',
    icon: '💻',
    policy: 'TN IT Policy 2018 (extended) + TIDCO IT Parks',
    incentives: [
      '100% stamp duty exemption on IT/ITES property',
      'Power tariff subsidy: ₹1/unit for IT companies',
      'Built-up space at subsidized rates in ELCOT IT parks',
      'Capital subsidy on plug-and-play office space',
      'SGST reimbursement for IT product companies',
      'Talent development subsidy for training programs',
      'Internet connectivity support in tier-2/3 cities'
    ],
    tier: {
      K: 'Chennai-Coimbatore-Madurai is TN\'s IT triangle. The IT Policy offers stamp duty exemption, power subsidy, and subsidized space in ELCOT parks. But the real story is tier-2 expansion — Coimbatore, Trichy, Madurai, Salem IT parks offer 40-60% cost savings over Chennai with similar talent pools. For product companies, SGST reimbursement is a margin booster.',
      T: 'TN\'s IT policy offers cost reduction through stamp duty exemption, power subsidies, and subsidized workspace in ELCOT parks. For companies expanding beyond Chennai, tier-2 city IT parks offer significant cost advantages. Product companies additionally benefit from SGST reimbursement. Talent development subsidies help with recruitment training costs.',
      V: 'Starting an IT company in Tamil Nadu? Government offers stamp duty-free office purchases, cheaper electricity, and low-cost office space in IT parks. If you set up in smaller cities like Coimbatore, Trichy, or Madurai, costs are much lower. Government also helps with employee training costs.',
      W: 'IT நிறுவனங்களுக்கு: முத்திரை வரி இல்லை, குறைந்த மின்கட்டணம், ELCOT IT பூங்காக்களில் குறைந்த வாடகை. கோயம்புத்தூர், திருச்சி, மதுரை போன்ற நகரங்களில் செலவு மிக குறைவு.',
      E: 'TN IT Policy: 100% stamp duty exemption, ₹1/unit power subsidy, subsidized built-up space in ELCOT parks (Sholinganallur, Coimbatore, Madurai, Trichy), SGST reimbursement for product companies, talent development subsidy. ELCOT manages 20+ IT parks. Tier-2 IT parks offer 40-60% cost advantage over Chennai. TN exports ~$20B in IT services annually.'
    }
  },
  {
    sector: 'Textiles',
    icon: '🧵',
    policy: 'TN Textile Policy + Central TUF Scheme',
    incentives: [
      '5% interest subvention on textile machinery loans',
      'Technology Upgradation Fund (TUF) scheme access',
      '25% capital subsidy on textile plant and machinery',
      'Effluent treatment plant (ETP) support: 50% subsidy',
      'Common infrastructure support for textile clusters',
      'Skill development for weavers and textile workers',
      'Power loom modernization assistance'
    ],
    tier: {
      K: 'TN is India\'s textile powerhouse — Tirupur alone exports ₹50,000+ crore in knitwear annually. The policy supports the entire value chain: spinning, weaving, processing, garmenting. 5% interest subvention + 25% capital subsidy + TUF access + ETP support (critical for Tirupur\'s zero liquid discharge mandate). Coimbatore-Tirupur-Erode is the golden triangle of Indian textiles.',
      T: 'Tamil Nadu\'s textile incentives cover machinery upgradation (25% capital subsidy + 5% interest subvention), environmental compliance (50% ETP subsidy), and skill development. The TUF scheme provides additional central government support for technology upgradation. These benefits apply across the value chain — yarn, fabric, processing, and garments.',
      V: 'Textile business owners: get 25% subsidy on new machines, 5% cheaper interest on machinery loans, and 50% subsidy for setting up effluent treatment. Government also offers free training for workers. If you\'re in Tirupur, Coimbatore, Erode, Salem, or Karur — these benefits are designed for you.',
      W: 'ஜவுளி தொழிலுக்கு: 25% இயந்திர மானியம், 5% வட்டி மானியம், 50% கழிவு நீர் சுத்திகரிப்பு மானியம், தொழிலாளர் பயிற்சி. திருப்பூர், கோயம்புத்தூர், ஈரோடு, சேலம், கரூர் தொழில் முனைவோருக்கு சிறப்பு பலன்.',
      E: 'TN Textile Incentives: 25% capital subsidy + 5% interest subvention + TUF scheme access + 50% ETP subsidy + skill development + cluster infrastructure. TN produces 50%+ of India\'s cotton yarn, 80%+ of knitwear exports (Tirupur cluster). Key challenges: ETP compliance costs, water scarcity, and competition from Bangladesh/Vietnam. Policy addresses these through environmental and technology support.'
    }
  },
  {
    sector: 'Food Processing',
    icon: '🍛',
    policy: 'PMFME + TN Food Processing Policy + MSME Incentives',
    incentives: [
      'PMFME: 35% capital subsidy up to ₹10 lakh for micro units',
      'Cold chain infrastructure support: 50% subsidy under MIDH',
      'MSME capital subsidy 25% for food processing units',
      'Quality certification support (FSSAI, ISO, HACCP)',
      'Mega Food Park subsidies for large-scale facilities',
      'ODOP branding and marketing support for district specialties',
      'Export promotion assistance and packaging support'
    ],
    tier: {
      K: 'TN\'s food processing sector is exploding — from Sivakasi\'s snack industry to Madurai\'s banana products to the ₹20,000+ crore south Indian food market. The incentive stack: PMFME 35% (micro) + MSME 25% (small/medium) + MIDH cold chain 50% + FSSAI/quality certification support. TN has 3 Mega Food Parks (Integrated + Erode + Dharmapuri).',
      T: 'Food processing units in TN benefit from multiple overlapping schemes: 35% PMFME subsidy for micro units, 25% MSME capital subsidy for larger units, 50% cold chain infrastructure subsidy, quality certification support, and ODOP branding. The sector is a priority given TN\'s agricultural diversity and food culture.',
      V: 'Making food products? Multiple subsidies available: 35% subsidy for small units (up to ₹10 lakh), 25% subsidy on machines for bigger units, 50% subsidy for cold storage, and free help getting FSSAI license and quality certificates. Your district\'s special food product also gets branding support.',
      W: 'உணவு தயாரிப்பாளர்களுக்கு: சிறிய அலகுக்கு 35% மானியம் (₹10 லட்சம் வரை), பெரிய அலகுக்கு 25% இயந்திர மானியம், குளிர்சாதன கிடங்கு 50% மானியம், FSSAI உதவி, பிராண்டிங் ஆதரவு.',
      E: 'TN Food Processing Incentives: PMFME 35% (micro, max ₹10L) + MSME capital subsidy 25% + MIDH cold chain 50% + quality certification (FSSAI/ISO/HACCP) + Mega Food Park infrastructure + ODOP branding. TN has 3 operational Mega Food Parks. Key clusters: snacks (Sivakasi), spices (Tuticorin), banana products (Madurai), dairy (Erode), seafood (coastal). Sector growing at 15%+ CAGR.'
    }
  },
  {
    sector: 'Electronics',
    icon: '📱',
    policy: 'TN Electronics Hardware Policy + Central PLI',
    incentives: [
      'PLI benefits: 4-6% on incremental sales for 5 years',
      'Capital subsidy up to 20% on plant & machinery',
      'SGST reimbursement up to 100% for 10 years',
      'Electricity duty exemption for 10 years',
      'Stamp duty exemption on land for electronics manufacturing',
      'Ready-built factory space in SIPCOT electronics parks',
      'Skill development reimbursement for workforce training'
    ],
    tier: {
      K: 'TN is India\'s #1 electronics manufacturing hub — Foxconn, Samsung, Dell, Flextronics, and 50+ global OEMs operate here. The PLI scheme for electronics (₹40,951 crore outlay) combined with state incentives makes TN unbeatable: 20% capital subsidy + SGST reimbursement + 10-year electricity duty exemption. Sriperumbudur-Oragadam is India\'s electronics golden corridor.',
      T: 'Electronics manufacturing in TN benefits from both central PLI (4-6% on incremental sales) and state incentives: 20% capital subsidy, 100% SGST reimbursement for 10 years, electricity duty exemption, and ready-built factory space. TN is India\'s largest electronics manufacturing state with established supply chains and logistics infrastructure.',
      V: 'Manufacturing electronics or components? TN offers 20% subsidy on machines, no electricity duty for 10 years, SGST refund for 10 years, and ready-to-use factory space. Plus the central government pays 4-6% bonus on your production growth. TN is where Apple, Samsung, and other big companies have their factories.',
      W: 'எலக்ட்ரானிக்ஸ் உற்பத்தியாளர்களுக்கு: 20% இயந்திர மானியம், 10 வருடம் SGST திருப்பி, 10 வருடம் மின்கட்டண விலக்கு, உடனடி தொழிற்சாலை இடம். Apple, Samsung போன்ற நிறுவனங்கள் ஏற்கனவே TN-ல் உள்ளன.',
      E: 'TN Electronics Incentives: PLI (4-6%, 5 years) + State capital subsidy (20%) + SGST reimbursement (100%, 10 years) + electricity duty exemption (10 years) + stamp duty exemption + ready-built factories (SIPCOT). TN accounts for 30%+ of India\'s electronics exports. Key clusters: Sriperumbudur-Oragadam (mobiles/IT hardware), Hosur (components). Foxconn, Samsung, Dell, Flextronics, Salcomp present.'
    }
  },
  {
    sector: 'Renewable Energy',
    icon: '☀️',
    policy: 'TN Solar Energy Policy + Green Energy Open Access',
    incentives: [
      'Green energy open access: buy solar/wind power directly',
      'Wheeling charge concessions for RE power',
      'Banking facility: store excess power and draw later',
      'RPO compliance assistance for obligated entities',
      'Capital subsidy for rooftop solar (central PM-KUSUM)',
      'Net metering for small-scale solar installations',
      'Priority grid connectivity for RE projects'
    ],
    tier: {
      K: 'TN is India\'s renewable energy leader — #1 in wind (9,900+ MW installed) and among top 3 in solar. For businesses, the real play is open access solar/wind: buy RE power directly at ₹3-4/unit vs TANGEDCO\'s ₹7-8/unit industrial rate. Wheeling concessions and banking facility make it financially compelling. Every energy-intensive MSME should explore this.',
      T: 'Tamil Nadu offers strong renewable energy incentives for businesses: open access to buy cheaper solar/wind power directly, wheeling charge concessions for moving RE power, and banking facility to store excess generation. For rooftop solar, net metering and central subsidies apply. TN has India\'s best wind and solar resources.',
      V: 'Want cheaper electricity for your factory? Tamil Nadu lets you buy solar or wind power directly — often at ₹3-4 per unit instead of ₹7-8 from TANGEDCO. You can also install rooftop solar with government subsidy and sell excess power back to the grid. Big savings on electricity bills every month.',
      W: 'தொழிற்சாலைகளுக்கு மலிவான மின்சாரம்: சூரிய/காற்றாலை மின்சாரம் நேரடியாக வாங்கலாம் — யூனிட் ₹3-4 மட்டுமே (TANGEDCO ₹7-8). கூரை சோலார் அமைக்க அரசு மானியம். மாதம் ஆயிரக்கணக்கில் சேமிப்பு.',
      E: 'TN Renewable Energy: Open access (direct RE purchase at ₹3-4/unit vs ₹7-8 grid), wheeling concessions, banking facility, net metering, priority grid connectivity. TN: #1 wind (9,900+ MW), top-3 solar. Key advantage for energy-intensive industries. PM-KUSUM for rooftop solar subsidy. RPO compliance drives institutional demand. Emerging: green hydrogen and offshore wind opportunities.'
    }
  }
];

var SUBSIDY_INTRO = {
  K: 'Tamil Nadu offers one of India\'s most comprehensive subsidy ecosystems — central, state, and sector-specific incentives that can be stacked strategically. For smart entrepreneurs, the effective subsidy on a new MSME can cover 40-60% of initial investment. Here\'s your roadmap to every rupee available.',
  T: 'Multiple government schemes exist to support new businesses in Tamil Nadu — from direct cash subsidies to concessional loans, tax exemptions, and infrastructure support. Central and state schemes can often be combined for maximum benefit. Below is a comprehensive guide to what\'s available, who qualifies, and how to apply.',
  V: 'The government has many schemes to help you start or grow your business. You can get free money (subsidies) for buying machines, cheaper loans, free training, and help selling your products. Many schemes can be combined — meaning you can benefit from several at the same time. Here are all the options available to you.',
  W: 'அரசு உங்கள் தொழிலுக்கு பல வகையில் உதவுகிறது — இயந்திரங்களுக்கு இலவச மானியம், குறைந்த வட்டியில் கடன், இலவச பயிற்சி, விற்பனை உதவி. பல திட்டங்களை ஒன்றாக பயன்படுத்தலாம் — அதிக பலன் பெறலாம். கீழே உங்களுக்கான அனைத்து திட்டங்களும்.',
  E: 'Tamil Nadu\'s subsidy architecture combines central schemes (PLI, PMEGP, MUDRA, Startup India, PMFME), state incentives (MSME capital/interest/power subsidies, NEEDS, TIIC, TANSEED), and sector-specific policies (EV, IT, Textiles, Electronics, RE). Schemes are stackable — a SC/ST woman entrepreneur in a rural backward district can achieve 50-60% effective subsidy on project cost through optimal scheme combination.'
};

/* ============================================================
   Helper: Find matching schemes based on entrepreneur profile
   ============================================================ */
function findSchemes(profile) {
  /* profile = {
       category: 'SC/ST' | 'Women' | 'General',
       capital: number (in lakhs),
       sector: string,
       location: 'urban' | 'rural',
       stage: 'idea' | 'startup' | 'existing'
     }
  */
  var results = [];
  var i, scheme;

  /* Always-eligible central schemes */
  var universalCentral = ['mudra', 'gem', 'zed', 'odop'];
  for (i = 0; i < CENTRAL_SCHEMES.length; i++) {
    scheme = CENTRAL_SCHEMES[i];
    if (universalCentral.indexOf(scheme.id) !== -1) {
      results.push({ scheme: scheme, relevance: 'high', reason: 'Available to all entrepreneurs' });
    }
  }

  /* Capital-based matching */
  if (profile.capital <= 10) {
    results.push({ scheme: findById(CENTRAL_SCHEMES, 'mudra'), relevance: 'high', reason: 'Best for micro enterprises under ₹10 lakh' });
  }
  if (profile.capital <= 50) {
    results.push({ scheme: findById(CENTRAL_SCHEMES, 'pmegp'), relevance: 'high', reason: 'Up to ₹50 lakh with 15-35% subsidy' });
  }

  /* Category-based matching */
  if (profile.category === 'SC/ST') {
    results.push({ scheme: findById(STATE_SCHEMES, 'needs'), relevance: 'high', reason: '25% subsidy up to ₹30 lakh for SC/ST' });
    results.push({ scheme: findById(STATE_SCHEMES, 'tahdco'), relevance: 'high', reason: 'TAHDCO subsidized loans for SC/ST' });
    results.push({ scheme: findById(STATE_SCHEMES, 'sc-st-entrepreneur-package'), relevance: 'high', reason: 'Enhanced 30% capital subsidy for SC/ST' });
  }

  if (profile.category === 'Women') {
    results.push({ scheme: findById(STATE_SCHEMES, 'women-entrepreneur-package'), relevance: 'high', reason: '30% capital subsidy + priority lending for women' });
  }

  /* Stage-based matching */
  if (profile.stage === 'startup' || profile.stage === 'idea') {
    results.push({ scheme: findById(CENTRAL_SCHEMES, 'startup-india'), relevance: 'high', reason: 'Tax holiday and self-certification for startups' });
    results.push({ scheme: findById(STATE_SCHEMES, 'tanseed'), relevance: 'high', reason: '₹10 lakh non-dilutive grant for startups' });
    results.push({ scheme: findById(STATE_SCHEMES, 'startuptn'), relevance: 'high', reason: 'Incubation and ecosystem support' });
  }

  if (profile.stage === 'existing') {
    results.push({ scheme: findById(CENTRAL_SCHEMES, 'clcss'), relevance: 'medium', reason: '15% subsidy for technology upgradation' });
  }

  /* Sector matching */
  if (profile.sector) {
    var sectorLower = profile.sector.toLowerCase();
    for (i = 0; i < SECTOR_INCENTIVES.length; i++) {
      if (SECTOR_INCENTIVES[i].sector.toLowerCase().indexOf(sectorLower) !== -1) {
        results.push({ scheme: SECTOR_INCENTIVES[i], relevance: 'high', reason: 'Sector-specific incentives for ' + SECTOR_INCENTIVES[i].sector });
      }
    }

    /* Food processing specific */
    if (sectorLower.indexOf('food') !== -1) {
      results.push({ scheme: findById(CENTRAL_SCHEMES, 'pmfme'), relevance: 'high', reason: '35% subsidy for food processing' });
    }

    /* Manufacturing-specific */
    if (sectorLower.indexOf('manufactur') !== -1) {
      results.push({ scheme: findById(CENTRAL_SCHEMES, 'pli'), relevance: 'medium', reason: 'PLI incentive if in eligible sector' });
    }

    /* Artisan/traditional */
    if (sectorLower.indexOf('artisan') !== -1 || sectorLower.indexOf('craft') !== -1 || sectorLower.indexOf('traditional') !== -1) {
      results.push({ scheme: findById(CENTRAL_SCHEMES, 'pm-vishwakarma'), relevance: 'high', reason: 'Dedicated artisan support scheme' });
      results.push({ scheme: findById(CENTRAL_SCHEMES, 'sfurti'), relevance: 'medium', reason: 'Cluster development for traditional industries' });
    }
  }

  /* Always recommend MSME package for new units */
  if (profile.stage !== 'existing') {
    results.push({ scheme: findById(STATE_SCHEMES, 'msme-capital-subsidy'), relevance: 'high', reason: '25% capital subsidy for new MSMEs' });
    results.push({ scheme: findById(STATE_SCHEMES, 'msme-interest-subvention'), relevance: 'high', reason: '3% interest savings for 5 years' });
    results.push({ scheme: findById(STATE_SCHEMES, 'msme-power-tariff'), relevance: 'medium', reason: '₹1/unit power discount for 3 years' });
  }

  /* Deduplicate by scheme id */
  var seen = {};
  var unique = [];
  for (i = 0; i < results.length; i++) {
    if (results[i].scheme) {
      var key = results[i].scheme.id || results[i].scheme.sector;
      if (!seen[key]) {
        seen[key] = true;
        unique.push(results[i]);
      }
    }
  }

  return unique;
}

function findById(arr, id) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }
  }
  return null;
}

/* ============================================================
   Export to window
   ============================================================ */
window.SubsidiesData = {
  CENTRAL_SCHEMES: CENTRAL_SCHEMES,
  STATE_SCHEMES: STATE_SCHEMES,
  SECTOR_INCENTIVES: SECTOR_INCENTIVES,
  SUBSIDY_INTRO: SUBSIDY_INTRO,
  findSchemes: findSchemes,
  findById: findById
};

})();
