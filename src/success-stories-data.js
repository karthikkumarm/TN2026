(function(){
'use strict';

var STORIES = [
  {
    id: 'zoho',
    name: 'Zoho Corporation',
    founder: 'Sridhar Vembu',
    founded: 'Chennai, 1996',
    icon: '💻',
    image: null,
    revenue: '$1.1B+',
    employees: '15,000+',
    headline: 'From Chennai to Tenkasi — Building a $1B+ SaaS Empire Without a Single Dollar of VC Money',
    keyFacts: [
      'Self-funded — zero venture capital or external investment',
      'Products used by 100M+ users in 150+ countries',
      'Moved HQ from Chennai to Tenkasi village — rural tech revolution',
      '55+ products competing with Microsoft, Google, Salesforce',
      'Employee-first culture — no layoffs even during COVID'
    ],
    lesson: 'You don\'t need Silicon Valley or VC money to build a world-class tech company. Bootstrap, focus on product, and stay true to your roots.',
    tier: {
      K: 'Sridhar Vembu built a software company so amazing that 100 million people use it — and he did it WITHOUT borrowing money from big investors! He even moved his office to a small village in Tamil Nadu to prove that great things can happen anywhere!',
      T: 'Zoho is the ultimate underdog story. While every startup chases VC funding, Sridhar Vembu self-funded everything and built a $1.1B+ company from Chennai. He then moved HQ to Tenkasi — a village — proving you don\'t need Silicon Valley to build world-class software. Zoho competes head-to-head with Microsoft and Google.',
      V: 'Zoho is one of India\'s most remarkable tech success stories. Founded by Sridhar Vembu in Chennai, it grew to $1.1B+ revenue with 15,000+ employees and 100M+ users — all without taking a single rupee in venture capital. The HQ move to rural Tenkasi demonstrates a commitment to distributed development.',
      W: 'Zoho\'s growth model challenges the conventional startup playbook: no VC funding, no IPO, employee-owned, with R&D investment in rural Tamil Nadu. The Tenkasi HQ strategy is a deliberate policy experiment in rural technology employment. Zoho University trains non-engineering graduates as developers — an alternative human capital pipeline.',
      E: 'Zoho represents a capital-efficient growth model: $1.1B+ revenue with zero dilution implies complete owner value retention. The self-funded model avoided the venture capital growth-at-all-costs pressure, resulting in sustainable 20-30% CAGR. The rural HQ strategy exploits labor cost arbitrage (Tenkasi vs. Chennai: 40-50% lower) while contributing to spatial economic distribution. Their 55+ product suite creates platform lock-in economics.'
    }
  },
  {
    id: 'tvs-group',
    name: 'TVS Group',
    founder: 'T.V. Sundaram Iyengar',
    founded: 'Madurai, 1911',
    icon: '🏍️',
    image: null,
    revenue: '$8.5B+',
    employees: '40,000+',
    headline: 'From a Madurai Bus Service to an $8.5B Industrial Empire Spanning Continents',
    keyFacts: [
      'Founded 1911 as a bus transport service in Madurai',
      'TVS Motor — India\'s 3rd largest two-wheeler manufacturer',
      'Group includes TVS Electronics, Sundaram Fasteners, TVS Credit',
      '40,000+ employees across multiple companies',
      'One of India\'s most trusted century-old business houses'
    ],
    lesson: 'Trust is currency. TVS built a 100+ year empire on a single principle: reliability. No shortcuts, no compromises — just consistent quality generation after generation.',
    tier: {
      K: 'Over 100 years ago, a man named T.V. Sundaram Iyengar started a bus service in Madurai. His family kept working hard, building more and more businesses. Today, TVS makes motorcycles, scooters, and so much more — and the group is worth $8.5 billion! It\'s like planting one seed and growing a whole forest!',
      T: 'TVS started as a literal bus service in Madurai in 1911 and became an $8.5B empire. TVS Motor is India\'s 3rd largest two-wheeler company — the TVS Apache and Jupiter are iconic. But the group is way bigger: auto parts (Sundaram Fasteners supplies to BMW), electronics, and finance. 40,000+ employees strong, and still family-run with zero corporate scandals.',
      V: 'The TVS Group is one of Tamil Nadu\'s crown jewels — a diversified $8.5B conglomerate tracing back to 1911 Madurai. TVS Motor Company (India\'s 3rd largest two-wheeler maker) is the flagship, complemented by Sundaram Fasteners (global auto components), TVS Electronics, TVS Credit, and more. Their reputation for trust and reliability is legendary in Indian business.',
      W: 'TVS exemplifies the family-conglomerate model that dominated Indian industrialization. Founded on a transport franchise in colonial Madurai, the group diversified into manufacturing through import-substitution opportunities. Sundaram Fasteners\' global supply chain (BMW, GM) demonstrates successful integration into Tier-1 global automotive networks. The group\'s governance model — professional management with family oversight — has avoided the succession crises that plagued comparable Indian business houses.',
      E: 'TVS Group\'s $8.5B valuation reflects a successful conglomerate diversification strategy across the automotive value chain: OEM (TVS Motor, $4B+ market cap), Tier-1 components (Sundaram Fasteners — global supply to BMW, GM, Caterpillar), financial services (TVS Credit), and logistics. The conglomerate discount is mitigated by operational synergies within the automotive vertical. TVS Motor\'s 15-16% two-wheeler market share positions it as a challenger brand with EV transition optionality. Sundaram Fasteners\' 40% export revenue provides natural currency hedging.'
    }
  },
  {
    id: 'murugappa-group',
    name: 'Murugappa Group',
    founder: 'Dewan Bahadur A.M.M. Murugappa Chettiar',
    founded: 'Tamil Nadu, 1900',
    icon: '🏭',
    image: null,
    revenue: '$6.5B+',
    employees: '50,000+',
    headline: 'A 125-Year-Old Tamil Nadu Conglomerate That Quietly Powers India\'s Industrial Backbone',
    keyFacts: [
      'Founded 1900 by Dewan Bahadur A.M.M. Murugappa Chettiar',
      '$6.5B diversified conglomerate — one of India\'s oldest',
      'Key companies: Tube Investments, Carborundum Universal, EID Parry, CG Power',
      '50,000+ employees across 29 businesses',
      'Operations in engineering, abrasives, sugar, fertilizers, finance'
    ],
    lesson: 'Diversify wisely, stay humble, and think in generations — not quarters. The Murugappa Group has survived two World Wars, Independence, License Raj, and liberalization by adapting without losing identity.',
    tier: {
      K: 'Imagine a family business that started over 125 years ago and is still going strong! The Murugappa family built a group of 29 companies with 50,000 workers. They make everything from bicycles to fertilizers to electrical equipment. They prove that staying humble and working hard can make you successful for over a century!',
      T: 'The Murugappa Group is one of those "quiet giant" stories. No flashy billionaire lifestyle — just 125 years of relentless business building. Started in 1900, now worth $6.5B with 29 businesses and 50,000 employees. You\'ve probably used their products without knowing: TI Cycles, Hercules bikes, Chola Finance, EID Parry sugar. They move in silence but their numbers speak volumes.',
      V: 'The Murugappa Group is a $6.5B diversified conglomerate with roots going back to 1900, making it one of India\'s oldest continuously operating business houses. With 29 businesses spanning engineering (Tube Investments), abrasives (Carborundum Universal), agri-business (EID Parry), electrical equipment (CG Power), and financial services (Cholamandalam), the group employs 50,000+ people and exemplifies Tamil Nadu\'s industrial depth.',
      W: 'The Murugappa Group\'s longevity (125+ years) makes it a case study in institutional business resilience. Founded by Nattukotai Chettiar (Nagarathar) trading communities with roots in Southeast Asian commerce, the group transitioned from trading to manufacturing during the import-substitution era. Their recent governance reforms (professional CEO appointments, family constitution) address the generational succession challenge that typically fragments Indian business houses. CG Power\'s turnaround after the 2019 accounting crisis demonstrates institutional recovery capability.',
      E: 'Murugappa\'s $6.5B portfolio demonstrates classic conglomerate economics: counter-cyclical diversification (engineering + agri + finance), capital recycling between mature and growth businesses, and institutional knowledge transfer. Cholamandalam Investment & Finance (market cap ~$1T INR) is the crown jewel — a high-growth NBFC with 25%+ ROE. The group\'s engineering businesses (TI, Carborundum) provide stable cash flows. EID Parry\'s sugar business benefits from India\'s ethanol-blending policy tailwind. The conglomerate structure creates internal capital markets that reduce external financing costs.'
    }
  },
  {
    id: 'cavinkare',
    name: 'CavinKare',
    founder: 'C.K. Ranganathan',
    founded: 'Chennai, 1983',
    icon: '🧴',
    image: null,
    revenue: '₹2,500+ Cr',
    employees: '7,500+',
    headline: 'Started With ₹50,000 and a Sachet — Disrupted India\'s FMCG Giants With Bottom-of-Pyramid Innovation',
    keyFacts: [
      'Started with just ₹50,000 in 1983',
      'Pioneered the shampoo sachet revolution — Chik shampoo at ₹1',
      'Revenue now ₹2,500+ Cr across multiple brands',
      'Brands: Chik, Meera, Spinz, KESH KING, Garden, Ruchi',
      'Competes with HUL and P&G in mass-market FMCG'
    ],
    lesson: 'Don\'t fight giants on their turf — change the rules. CK Ranganathan didn\'t try to out-spend HUL. He out-innovated them with sachet pricing that made premium products accessible to every Indian.',
    tier: {
      K: 'CK Ranganathan started his company with only ₹50,000 — that\'s less than what a fancy phone costs today! He had one brilliant idea: sell shampoo in tiny packets so that even people with very little money could afford to try it. That one idea turned into a ₹2,500 crore company! It proves that understanding people\'s needs is more important than having lots of money!',
      T: 'CavinKare is proof that you don\'t need crores to start — you need brains. CK Ranganathan had ₹50,000 and a genius insight: rural India wanted quality shampoo but couldn\'t afford bottles. So he sold sachets at ₹1. That single move disrupted HUL and P&G. Today CavinKare does ₹2,500+ Cr revenue with brands like Chik, Meera, KESH KING, and Garden. From ₹50K to ₹2,500 Cr — that\'s a 50,000x return on guts.',
      V: 'CavinKare is one of India\'s most celebrated entrepreneurship stories. C.K. Ranganathan started with ₹50,000 in 1983 and built a ₹2,500+ Cr FMCG company by pioneering sachet-based distribution — making premium personal care accessible to rural and semi-urban India. The brand portfolio (Chik, Meera, Spinz, KESH KING, Garden, Ruchi) competes directly with multinational giants HUL and P&G across multiple categories.',
      W: 'CavinKare\'s sachet innovation is a textbook case of bottom-of-pyramid (BoP) disruption. By unbundling the unit of purchase (bottle → sachet), Ranganathan lowered the trial barrier for price-sensitive consumers, creating a new market segment that MNCs had ignored. This distribution innovation — not product innovation — was the strategic insight. CavinKare\'s subsequent diversification into food (Garden, Ruchi) and premium hair care (KESH KING, acquired for ₹1,651 Cr) demonstrates a portfolio strategy moving up the value chain.',
      E: 'CavinKare\'s journey from ₹50,000 to ₹2,500+ Cr revenue illustrates unit-economics innovation in FMCG. The sachet model reduced per-unit cost of trial by 90%+, converting affordability into accessibility — expanding the total addressable market rather than competing for existing share. The KESH KING acquisition (₹1,651 Cr) was a strategic move from mass-market to premium, improving blended margins. CavinKare\'s distribution network (2M+ retail outlets) in Tier-2/3/4 cities represents infrastructure that is capital-intensive to replicate, creating a durable competitive moat in semi-urban and rural markets.'
    }
  },
  {
    id: 'freshworks',
    name: 'Freshworks',
    founder: 'Girish Mathrubootham',
    founded: 'Chennai, 2010',
    icon: '🚀',
    image: null,
    revenue: '$596M+ (FY24)',
    employees: '5,600+',
    headline: 'From a Bad Customer Service Experience in Chennai to a $10B+ NASDAQ-Listed SaaS Giant',
    keyFacts: [
      'Started in Chennai in 2010 as Freshdesk',
      'NASDAQ IPO in September 2021 — $10B+ valuation',
      'Revenue $596M+ in FY2024',
      '5,600+ employees globally',
      '67,000+ customers in 120+ countries'
    ],
    lesson: 'Your worst experience can be your best startup idea. Girish\'s frustration with terrible customer service became Freshdesk — and then a $10B company. Problems are just opportunities in disguise.',
    tier: {
      K: 'Girish Mathrubootham was really annoyed by bad customer service one day. Instead of just complaining, he thought: "I can build something better!" He started Freshdesk in Chennai, and it became so popular that it\'s now worth over $10 billion and is listed on America\'s biggest stock market! 67,000 companies around the world use his software!',
      T: 'Freshworks is Chennai\'s biggest flex in the global tech scene. Girish Mathrubootham got frustrated with bad customer support and thought "I\'ll build my own." Started Freshdesk in 2010, grew it to 67,000+ customers, IPO\'d on NASDAQ in 2021 at $10B+ valuation, and pulls in $596M+ revenue. He proved that a world-class SaaS company can absolutely be born in Chennai — not just Bangalore or SF.',
      V: 'Freshworks is Tamil Nadu\'s highest-profile tech startup success story. Founded in Chennai in 2010 by Girish Mathrubootham, it began as Freshdesk (a customer support platform) and expanded into a full business software suite. The September 2021 NASDAQ IPO at $10B+ valuation made it the first Indian SaaS company to go public in the US. With $596M+ revenue (FY24) and 67,000+ customers in 120+ countries, Freshworks anchors Chennai\'s emergence as a SaaS hub.',
      W: 'Freshworks\' trajectory — Chennai startup to NASDAQ IPO — is a landmark for India\'s SaaS ecosystem. The company\'s product-led growth (PLG) strategy targeted SMBs underserved by expensive Salesforce/Zendesk solutions, using a freemium model to drive bottom-up adoption. Chennai\'s lower engineering costs (vs. Bay Area) enabled competitive pricing while maintaining margins. The IPO created significant wealth for early employees and validated Chennai as a legitimate SaaS origin city, catalyzing subsequent investment in TN\'s tech ecosystem.',
      E: 'Freshworks\' NASDAQ listing represents the maturation of India\'s SaaS export model. The $596M+ FY24 revenue at scale demonstrates the viability of selling from India to global SMBs. Key economic dynamics: (1) PLG/freemium drives low customer acquisition cost (CAC), (2) Chennai engineering labor arbitrage improves gross margins vs. US-based competitors, (3) multi-product expansion (Freshdesk → Freshservice → Freshsales) increases net revenue retention. The post-IPO valuation compression (from $10B+ to lower) reflects broader SaaS market re-rating, not company-specific weakness. Freshworks\' AI integration strategy (Freddy AI) is the key driver for next-phase growth and margin expansion.'
    }
  },
  {
    id: 'tafe',
    name: 'TAFE (Tractors and Farm Equipment)',
    founder: 'Mallika Srinivasan (Chairman & CEO)',
    founded: 'Chennai, 1960',
    icon: '🚜',
    image: null,
    revenue: '$2B+',
    employees: '12,000+',
    headline: 'India\'s 2nd Largest Tractor Maker — Led by the First Indian Woman to Head a Fortune 500 India Company',
    keyFacts: [
      'India\'s 2nd largest tractor manufacturer, 3rd largest globally',
      'Revenue $2B+ — partnership with Massey Ferguson brand',
      'Mallika Srinivasan — first Indian woman to head a Fortune 500 India company',
      'Exports to 100+ countries across 6 continents',
      'Key role in mechanizing Indian agriculture'
    ],
    lesson: 'Leadership isn\'t about gender — it\'s about vision. Mallika Srinivasan took a traditional tractor company and turned it into a global powerhouse, shattering glass ceilings along the way.',
    tier: {
      K: 'Mallika Srinivasan runs TAFE, which makes tractors that help farmers all over India grow food! She was the first Indian woman to lead a really, really big company. TAFE tractors work in over 100 countries! She showed everyone that women can lead huge companies and be amazing at it!',
      T: 'TAFE is a beast most people don\'t even know about. India\'s 2nd largest tractor company, 3rd in the world, $2B+ revenue, exports to 100+ countries. And it\'s led by Mallika Srinivasan — the first Indian woman to head a Fortune 500 India company. She didn\'t just break the glass ceiling, she drove a tractor through it. TAFE has the Massey Ferguson partnership, making world-class agricultural machinery from Chennai.',
      V: 'TAFE (Tractors and Farm Equipment Limited) is a Chennai-based company that has grown to become India\'s 2nd largest and the world\'s 3rd largest tractor manufacturer, with revenue exceeding $2B. Under the leadership of Mallika Srinivasan — the first Indian woman to head a Fortune 500 India company — TAFE has expanded globally, exporting to 100+ countries. The partnership with Massey Ferguson combines global brand recognition with Indian manufacturing efficiency.',
      W: 'TAFE\'s trajectory illustrates how technology licensing can evolve into indigenous capability. The Massey Ferguson partnership initially provided technology transfer; TAFE now has independent R&D and exports globally. Mallika Srinivasan\'s leadership — transforming a mid-tier tractor maker into a global top-3 player — is a significant corporate governance case study, demonstrating that family-business succession can drive growth (not just preservation). TAFE\'s agricultural mechanization role directly impacts India\'s farm productivity — a policy-relevant economic function.',
      E: 'TAFE\'s $2B+ revenue at India\'s 2nd position (behind M&M) represents ~25% domestic market share in a structurally growing sector — Indian tractor penetration per hectare remains below global averages, providing secular growth runway. The Massey Ferguson partnership provides brand leverage in export markets (100+ countries) while Indian manufacturing keeps cost structures competitive. Mallika Srinivasan\'s leadership coincided with revenue growth from ~$500M to $2B+ — a 4x expansion driven by market share gains, export expansion, and product-range diversification into farm implements and engines.'
    }
  },
  {
    id: 'tiruppur-knitwear',
    name: 'Tiruppur Knitwear Cluster',
    founder: 'Community-driven (Gounder entrepreneurs)',
    founded: 'Tiruppur, evolved from 1970s',
    icon: '👕',
    image: null,
    revenue: '$3.5-4B exports',
    employees: '600,000+',
    headline: 'How a Small Tamil Nadu Town Became a $4B Knitwear Capital — Powered by Community, Not Corporations',
    keyFacts: [
      'Accounts for 90% of India\'s knitwear exports',
      '$3.5-4B annual export cluster — world\'s largest knitwear hub',
      '600,000+ people employed directly and indirectly',
      '5,000+ production units — mostly SMEs',
      'Supplies to Gap, Walmart, H&M, Primark, and global brands'
    ],
    lesson: 'You don\'t always need a single visionary founder. Sometimes an entire community, driven by shared ambition and mutual trust, can build something no individual ever could.',
    tier: {
      K: 'Imagine an entire town where almost everyone works together to make clothes! Tiruppur is a small town in Tamil Nadu where 600,000 people work in making T-shirts, sweaters, and other knitwear. They sell clothes to big shops all around the world and earn $4 billion every year! It shows what can happen when a whole community works together!',
      T: 'Tiruppur is insane. A small town in TN that does $3.5-4 BILLION in knitwear exports — that\'s 90% of ALL of India\'s knitwear exports from one place. 600,000+ people employed. 5,000+ units. They supply Gap, Walmart, H&M, Primark — basically the T-shirt on your back might have been made here. No single billionaire founder — this was built by Gounder community entrepreneurs who trusted each other and scaled together.',
      V: 'The Tiruppur knitwear cluster is one of the world\'s most remarkable examples of community-driven industrialization. This Tamil Nadu town accounts for 90% of India\'s knitwear exports, generating $3.5-4B annually through 5,000+ production units employing 600,000+ people. Tiruppur supplies global brands including Gap, Walmart, H&M, and Primark. Built primarily by Gounder community entrepreneurs, it demonstrates the power of localized industrial ecosystems.',
      W: 'Tiruppur is a textbook Marshallian industrial district — a geographic concentration of specialized SMEs that collectively achieve scale economies through agglomeration. The cluster\'s success factors include: (1) Gounder community social capital providing informal credit networks (reducing formal financing barriers), (2) vertical disaggregation allowing flexible specialization, (3) labor pooling effects, and (4) knowledge spillovers. The 2005 NKAP (New Tiruppur Area Development Corporation) water supply project and effluent treatment infrastructure investments demonstrate the public goods challenges in cluster governance.',
      E: 'Tiruppur\'s $3.5-4B export cluster is an example of endogenous growth driven by social capital rather than external investment. The Gounder community\'s informal lending networks (based on caste-trust) provided startup capital when formal banking was inaccessible — a parallel financial system. The cluster\'s 5,000+ units create a competitive market structure that drives efficiency (no monopoly rent extraction). However, the cluster faces structural challenges: (1) rising labor costs vs. Bangladesh/Vietnam, (2) compliance costs (Zero Liquid Discharge norms), (3) currency volatility impacting thin export margins (5-8%). The shift toward value-added products (branded knitwear) is the strategic response to margin compression.'
    }
  },
  {
    id: 'a2b',
    name: 'A2B (Adyar Ananda Bhavan)',
    founder: 'K.T. Srinivasa Rao',
    founded: 'Chennai, 1952',
    icon: '☕',
    image: null,
    revenue: '₹500+ Cr',
    employees: '8,000+',
    headline: 'From a Single Sweet Shop in Chennai to 200+ Outlets — India\'s Beloved South Indian Restaurant Chain',
    keyFacts: [
      'Started 1952 as a small sweet shop in Adyar, Chennai',
      'Now 200+ outlets across India and overseas',
      'IPO in 2015 — listed on BSE and NSE',
      'Famous for filter coffee, sweets, and South Indian meals',
      'Revenue ₹500+ Cr with a loyal multi-generational customer base'
    ],
    lesson: 'Consistency is king. A2B has served the same quality filter coffee and sweets for 70+ years. No shortcuts, no compromises — that\'s how you build a brand that becomes a household name.',
    tier: {
      K: 'A2B started as a tiny sweet shop in Chennai over 70 years ago! They make the most delicious sweets, filter coffee, and South Indian food. People loved it so much that now there are over 200 A2B restaurants all over India! It shows that if you make something really, really good, people will keep coming back!',
      T: 'If you\'re from Tamil Nadu, A2B hits different. Started in 1952 as one sweet shop in Adyar, Chennai — now it\'s 200+ outlets and publicly listed. Their filter coffee is legendary, their sweets are god-tier, and their South Indian meals are the benchmark. Revenue ₹500+ Cr. They IPO\'d in 2015. From a sweet shop to a stock market listing — that\'s the A2B arc. Every time you walk into one, you\'re tasting 70+ years of consistency.',
      V: 'A2B (Adyar Ananda Bhavan) is among India\'s most recognized South Indian restaurant and sweet chains. Founded in 1952 by K.T. Srinivasa Rao in Adyar, Chennai, it has grown to 200+ outlets across India with an IPO in 2015 (BSE/NSE listed). With revenue exceeding ₹500 Cr, A2B has successfully scaled the traditionally fragmented Indian restaurant business through brand consistency, quality control, and a loyal multi-generational customer base.',
      W: 'A2B\'s scaling of a traditional South Indian restaurant into a 200+ outlet listed company is a case study in food-service standardization. Key success factors: (1) centralized sweet and snack production ensuring consistency across outlets, (2) strong brand equity built over 70+ years, (3) strategic location selection in high-footfall areas. The 2015 IPO was significant as it demonstrated that traditional Indian food businesses could achieve the standardization and governance required for public markets. A2B\'s expansion strategy prioritizes owned stores over franchising — maintaining quality control but limiting asset-light scaling.',
      E: 'A2B\'s ₹500+ Cr revenue from 200+ outlets implies average unit economics of ~₹2.5 Cr per outlet. The company-owned model (vs. franchise) results in higher capex intensity but superior quality control and brand integrity — critical in Indian food service where trust is paramount. The 2015 IPO at ~₹100+ Cr raised growth capital while providing exit liquidity. Key challenges: (1) high real estate costs in metro locations, (2) labor-intensive operations limiting margin expansion, (3) competition from organized chains (Saravana Bhavan, Sangeetha) and quick-service restaurants. The sweet/snack segment provides higher margins (35-40%) than the restaurant segment (15-20%), making product mix optimization a key profitability lever.'
    }
  },
  {
    id: 'chargebee',
    name: 'Chargebee',
    founder: 'Krish Subramanian & Rajaraman Santhanam',
    founded: 'Chennai, 2011',
    icon: '💳',
    image: null,
    revenue: 'Valued at $3.5B (2022)',
    employees: '1,200+',
    headline: 'Chennai-Born Subscription Billing Platform That Powers the Global Recurring Revenue Economy',
    keyFacts: [
      'Founded 2011 in Chennai by Krish Subramanian & Rajaraman Santhanam',
      'Subscription billing and revenue management SaaS platform',
      'Valued at $3.5B in 2022 funding round',
      'Customers include Freshworks, Calendly, Study.com, Okta',
      '1,200+ employees globally — from Chennai to the world'
    ],
    lesson: 'Find a boring but essential problem and solve it brilliantly. Subscription billing isn\'t glamorous, but every SaaS company needs it — and Chargebee became the go-to platform by being the best at it.',
    tier: {
      K: 'Krish Subramanian and Rajaraman Santhanam noticed that companies selling subscriptions (like streaming services or software) needed help managing their payments. So they built Chargebee in Chennai — a tool that makes subscription billing super easy. Now it\'s worth $3.5 billion and companies all over the world use it! They found a problem no one was solving well and fixed it!',
      T: 'Chargebee is what happens when Chennai engineers spot a global infrastructure gap. Krish Subramanian and Rajaraman Santhanam built a subscription billing platform that\'s now valued at $3.5B. Their customers include Freshworks, Calendly, and Okta — literally the backbone of the subscription economy. It\'s not a flashy consumer app, it\'s the plumbing that makes recurring revenue work. Born in Chennai, now essential infrastructure for the global SaaS industry.',
      V: 'Chargebee, founded in Chennai in 2011, is a subscription billing and revenue management platform valued at $3.5B (2022). Founded by Krish Subramanian and Rajaraman Santhanam, it serves major companies including Freshworks, Calendly, Study.com, and Okta. With 1,200+ employees, Chargebee represents Chennai\'s growing strength in B2B SaaS infrastructure — building the operational backbone that subscription businesses worldwide depend on.',
      W: 'Chargebee\'s success validates Chennai as a B2B SaaS hub, alongside Freshworks and Zoho. The company identified a horizontal infrastructure layer — subscription billing — that every SaaS company needs but few want to build in-house. This "picks and shovels" strategy creates a stable, recurring revenue business with high switching costs (billing is mission-critical). The founding team\'s Chennai roots contributed to cost-efficient early-stage development. Chargebee\'s growth coincided with the global shift to subscription business models across industries, riding a structural market tailwind.',
      E: 'Chargebee\'s $3.5B valuation reflects its position in the subscription management infrastructure layer — a market growing at 15-20% CAGR as enterprises shift from one-time to recurring revenue models. Key economic moats: (1) high switching costs — migrating billing systems is operationally risky, (2) revenue scales with customer transaction volume (usage-based pricing component), (3) network effects via integration ecosystem (Stripe, Salesforce, QuickBooks). The Chennai origin provided a 3-5x engineering cost advantage during the capital-intensive early growth phase. Chargebee\'s competitive landscape includes Zuora (public, larger enterprise) and Recurly, with differentiation in the mid-market SaaS segment.'
    }
  },
  {
    id: 'sakthi-group',
    name: 'Sakthi Group',
    founder: 'M. Manickam',
    founded: 'Coimbatore',
    icon: '⚙️',
    image: null,
    revenue: '₹4,000+ Cr',
    employees: '10,000+',
    headline: 'From Coimbatore Sugar Mills to Supplying Auto Components to BMW, Volkswagen, and Volvo',
    keyFacts: [
      'Sakthi Sugars + Sakthi Automotive Group — dual business model',
      'Revenue ₹4,000+ Cr across sugar and auto components',
      'Auto component exports to BMW, Volkswagen, Volvo globally',
      'From a traditional Coimbatore sugar business to global auto supplier',
      'Demonstrates Coimbatore\'s evolution from agriculture to advanced manufacturing'
    ],
    lesson: 'Don\'t be defined by where you start. The Sakthi Group started with sugar cane in Coimbatore and ended up supplying precision auto parts to BMW. Reinvention is the ultimate competitive advantage.',
    tier: {
      K: 'The Sakthi Group started by making sugar from sugarcane in Coimbatore. But they didn\'t stop there! They also learned how to make special car parts. Now they supply parts to famous car companies like BMW and Volkswagen! It\'s like starting with lemonade and ending up making parts for spaceships!',
      T: 'Sakthi Group is Coimbatore\'s wildest glow-up. Started as a sugar company — about as unglamorous as it gets. Then M. Manickam pivoted into auto components and now Sakthi Automotive supplies to BMW, Volkswagen, and Volvo. That\'s right — precision parts from Coimbatore in German luxury cars. ₹4,000+ Cr revenue. From sugarcane to supplying BMW — if that doesn\'t inspire you, nothing will.',
      V: 'The Sakthi Group, led by M. Manickam, demonstrates one of Tamil Nadu\'s most impressive industrial pivots — from traditional Coimbatore sugar manufacturing to a global auto components supplier. With ₹4,000+ Cr revenue, the group spans Sakthi Sugars and Sakthi Automotive Group, the latter supplying precision components to BMW, Volkswagen, and Volvo. The journey exemplifies Coimbatore\'s evolution from an agricultural economy to an advanced manufacturing hub.',
      W: 'Sakthi Group\'s sugar-to-auto-components pivot illustrates the industrial upgrading pathway available in India\'s manufacturing ecosystem. The Coimbatore base — historically an engineering and textile hub — provided the skilled labor and machine-shop ecosystem needed for precision auto components. Sakthi Automotive\'s integration into European OEM supply chains (BMW, VW, Volvo) required achieving global quality certifications (IATF 16949) — a capability barrier that creates competitive moats. The sugar business provides agricultural linkages and rural employment, while auto components drive higher-value manufacturing — a dual strategy that balances rural and industrial economics.',
      E: 'Sakthi Group\'s ₹4,000+ Cr revenue across sugar and auto components represents a textbook case of value-chain upgrading. The auto components business commands significantly higher EBITDA margins (12-15%) vs. sugar (6-8%), making the diversification value-accretive. Exporting to BMW, VW, and Volvo requires: (1) IATF 16949 quality certification, (2) just-in-time delivery capability, (3) precision machining tolerances of ±0.01mm — barriers that limit competition. Coimbatore\'s engineering ecosystem (3,000+ SME machine shops) provides a supplier cluster that reduces costs and improves responsiveness. The sugar business benefits from India\'s ethanol-blending mandate (20% by 2025-26), creating policy-driven revenue upside.'
    }
  }
];

var STORIES_INTRO = {
  K: 'Meet the real Tamil Nadu superheroes — not the ones in movies, but regular people who started with almost nothing and built incredible businesses! Their stories prove that with hard work and smart ideas, anyone can do amazing things!',
  T: 'These aren\'t fictional success stories — they\'re real Tamil Nadu entrepreneurs who built billion-dollar empires from scratch. From a guy who started with ₹50,000 to become an FMCG giant, to an entire community that turned a small town into a $4B export hub. Read their stories and get inspired.',
  V: 'Tamil Nadu has produced some of India\'s most remarkable entrepreneurs across diverse sectors — tech (Zoho, Freshworks), manufacturing (TVS, Murugappa), FMCG (CavinKare), and community-driven clusters (Tiruppur). These ten stories showcase the entrepreneurial DNA that makes TN India\'s most balanced economy.',
  W: 'These case studies illustrate different pathways to entrepreneurial success in Tamil Nadu\'s economic ecosystem: bootstrapped tech (Zoho), VC-backed SaaS (Freshworks, Chargebee), century-old conglomerates (TVS, Murugappa), FMCG disruption (CavinKare), institutional farming (TAFE), community-driven clusters (Tiruppur), and food-service scaling (A2B). Each demonstrates distinct strategic choices regarding capital structure, market positioning, and growth models.',
  E: 'The ten cases represent distinct economic archetypes: Zoho (capital-efficient, zero-dilution tech), Freshworks (VC-to-IPO pathway), TVS/Murugappa (family-business conglomerate diversification), CavinKare (bottom-of-pyramid disruption through unit economics innovation), Tiruppur (Marshallian district with endogenous social capital), TAFE (technology licensing to indigenous manufacturing), A2B (food-service standardization and scaling). Collectively they demonstrate TN\'s economic diversity and multiple viable business model pathways.'
};

window.SuccessStories = {
  STORIES: STORIES,
  STORIES_INTRO: STORIES_INTRO
};

})();
