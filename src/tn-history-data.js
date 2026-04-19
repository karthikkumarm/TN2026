(function(){
'use strict';

/* 8 Business History Eras */
var ERAS = [
  {
    id: 'chola',
    period: '850–1279 CE',
    title: 'Chola Maritime Empire',
    icon: '⛵',
    keyFacts: [
      'Rajaraja I and Rajendra I built one of the most powerful naval forces in Asian history',
      'Ayyavole merchant guild (The Five Hundred) operated across Southeast Asia',
      'Exports: textiles, spices, precious stones; Imports: gold, horses, Chinese ceramics',
      'Nagapattinam was a major trading port',
      'Rajendra Chola naval expedition to Srivijaya (1025 CE) for Strait of Malacca trade routes'
    ],
    tradeHighlights: 'Active trade with Song Dynasty China, Abbasid Caliphate, Srivijaya, Sri Lanka, East Africa',
    policyNote: 'Temple-based economic systems as banks and redistributive centers; Thanjavur Big Temple inscriptions document massive economic flows',
    tier: {
      K: 'Imagine Tamil kings who had the biggest ships in all of Asia! They sailed to faraway lands like China and Africa to trade spices and beautiful cloth. The Chola kings were like superhero merchants of the sea!',
      T: 'The Chola dynasty ran one of history\'s most impressive trade empires. Their merchant guild, Ayyavole (500 members), operated like an ancient multinational corporation across Southeast Asia. Think of them as the Amazon of the 11th century.',
      V: 'The Chola dynasty (850-1279 CE) built Asia\'s most powerful navy and established trade networks spanning from China to East Africa. Tamil merchant guilds like Ayyavole were among the world\'s first transnational business organizations.',
      W: 'The Chola maritime state pioneered institutional trade frameworks — temple-based banking systems, guild governance structures (Ayyavole/Ainnurruvar), and diplomatic trade agreements. These institutional innovations predate European merchant guilds by centuries.',
      E: 'The Chola economy demonstrates early comparative advantage exploitation: textile and spice exports to high-value markets (Song China, Abbasid Caliphate) while importing strategic goods (horses, gold). The Srivijaya expedition (1025 CE) was essentially a trade route security operation — an early example of protecting supply chain logistics through naval power projection.'
    }
  },
  {
    id: 'nayak',
    period: '1336–1736 CE',
    title: 'Temple Towns & Textile Trade',
    icon: '🏛️',
    keyFacts: [
      'Vijayanagara Empire and Nayak kingdoms made South India a cotton textile hub',
      'Coromandel Coast ports became key textile export centers',
      'Indian textiles (chintz, calico, muslin) traded across Asia, Middle East, Europe',
      'Nattukottai Chettiars emerged as a banking and trading community',
      'Portuguese, Dutch, Danish trading posts established along the coast'
    ],
    tradeHighlights: 'Coromandel Coast textiles were the single most traded commodity in the Indian Ocean',
    policyNote: 'Nayak-era irrigation works (Grand Anicut, tank systems) supported agrarian surplus. Temple endowments formalized credit systems.',
    tier: {
      K: 'Tamil weavers made the most amazing cloth in the world! People from Europe, Arabia, and China all wanted to buy Tamil fabrics. The cloth was so special that kings and queens everywhere wore it!',
      T: 'Tamil Nadu became the world\'s textile factory centuries before Manchester. The Nayak kings built temple-towns that doubled as trade centers. European companies like the Dutch VOC came specifically to buy our cotton textiles — chintz, calico, and muslin were global fashion trends.',
      V: 'Under the Vijayanagara and Nayak kingdoms, Tamil Nadu\'s Coromandel Coast became the world\'s largest textile export hub. The Nattukottai Chettiars emerged as Asia\'s premier indigenous banking community, financing trade across Burma, Malaya, and Ceylon.',
      W: 'The Nayak period institutionalized the temple-town model where religious, administrative, and commercial functions were integrated. Temple endowments functioned as proto-banking institutions. The irrigation infrastructure (Grand Anicut maintenance, tank systems) was state policy that enabled the agricultural surplus funding textile production.',
      E: 'Coromandel textiles represented perhaps the earliest example of manufacturing export dominance — pre-industrial India controlled an estimated 25% of global textile trade. The Nattukottai Chettiar banking system was a sophisticated credit network operating across Southeast Asia, predating modern banking by centuries. Their capital deployed in Burma alone was estimated at ₹750 crore (1930s value).'
    }
  },
  {
    id: 'colonial',
    period: '1600–1947',
    title: 'From Fort St. George to Industrial Foundations',
    icon: '🏴',
    keyFacts: [
      'Fort St. George (Madras) established 1639 by British East India Company',
      'British tariff manipulation destroyed local handloom industry favoring Manchester mills',
      'Railway expansion from 1850s connected hinterland to ports',
      'Madras Port operationalized in 1881 as artificial harbor',
      'V.O. Chidambaram Pillai founded Swadeshi Steam Navigation Company (1906)',
      'Binny and Co. (1799) — one of India\'s oldest companies'
    ],
    tradeHighlights: 'Major colonial exports: raw cotton, indigo, groundnuts, hides, coffee, tea. Madras was the third presidency town.',
    policyNote: 'Madras Port Trust Act (1905); Madras Chamber of Commerce established (1836).',
    tier: {
      K: 'When the British came, they set up a big fort called Fort St. George in Chennai. They tried to stop Tamil people from making their own cloth so British factories could sell theirs instead. But brave Tamil people like V.O. Chidambaram Pillai started their own shipping company to fight back!',
      T: 'The colonial period was a double-edged sword. The British built Chennai\'s port and railways (useful infrastructure), but deliberately destroyed Tamil Nadu\'s textile industry through unfair tariffs to benefit Manchester mills. Freedom fighters like VOC started the Swadeshi Steam Navigation Company to challenge British monopolies.',
      V: 'The colonial period (1600-1947) transformed Madras into a major economic node while simultaneously deindustrializing local textile production. Fort St. George became the administrative hub. The Swadeshi movement sparked indigenous entrepreneurship, and companies like Binny & Co. (1799) laid early industrial foundations.',
      W: 'Colonial economic policy systematically redirected trade flows: India exported raw materials (cotton, indigo, hides) and imported manufactured goods (textiles, machinery). The Madras Port Trust Act (1905) institutionalized port governance. The Swadeshi movement represented the first organized policy resistance to colonial trade distortions.',
      E: 'The colonial period illustrates classic mercantile extraction — Tamil Nadu\'s terms of trade were deliberately worsened through tariff asymmetries (Indian textiles taxed at 70-80% in Britain vs. duty-free Manchester imports). Railway investment (1850s+) was primarily designed for raw material extraction to ports rather than internal market development. The residual institutional infrastructure (port, railways, legal framework) provided the foundation for post-independence industrialization.'
    }
  },
  {
    id: 'postindependence',
    period: '1947–1970',
    title: 'Building the Industrial Base',
    icon: '🏭',
    keyFacts: [
      'Integral Coach Factory (ICF), Perambur — India\'s first rail coach manufacturer (1955)',
      'Heavy Vehicles Factory, Avadi — defense production (1965)',
      'Neyveli Lignite Corporation — mining and power generation (1956)',
      'BHEL Trichy — boilers and power equipment (1964)',
      'Ashok Leyland established in Ennore (1948)',
      'TIDCO formed in 1965 to promote joint-sector industrial ventures'
    ],
    tradeHighlights: 'Leather processing in North Arcot (Ranipet, Ambur, Vaniyambadi) became a major export cluster.',
    policyNote: 'Five Year Plans allocated heavy industry to TN. Industrial estates developed in Ambattur, Guindy. TIDCO formed 1965.',
    tier: {
      K: 'After India became free, Tamil Nadu started building big factories! They made trains in Chennai (ICF), tanks in Avadi, and huge power generators in Trichy. It was like building with a giant LEGO set to make India strong!',
      T: 'Post-independence, Tamil Nadu became a heavy industry powerhouse. The government set up factories for trains (ICF Chennai), military vehicles (Avadi), and power equipment (BHEL Trichy). Companies like Ashok Leyland started making trucks. These factories employed thousands and built the foundation for today\'s manufacturing hub.',
      V: 'The 1947-1970 era laid Tamil Nadu\'s industrial foundation through strategic public-sector investments: ICF Perambur (1955), BHEL Trichy (1964), Neyveli Lignite (1956), and Ashok Leyland (1948). TIDCO (1965) became the state\'s industrial promotion vehicle. Leather processing in North Arcot established TN\'s first export cluster.',
      W: 'Post-independence industrialization in TN followed the Nehruvian mixed-economy model with strategic public-sector placement. TIDCO (1965) pioneered the joint-sector model — state equity participation with private management — a governance innovation that attracted early foreign collaboration. Industrial estate policy (Ambattur, Guindy) created planned manufacturing zones.',
      E: 'The public-sector investment strategy created agglomeration economies: ICF (1955) spawned an engineering components ecosystem; BHEL Trichy anchored the energy equipment cluster. The leather processing cluster in North Arcot demonstrates classic Marshallian district dynamics — shared labor pools, specialized suppliers, and knowledge spillovers. TN\'s leather exports reached 40% of India\'s total by 1991, showing early cluster-driven export competitiveness.'
    }
  },
  {
    id: 'dravidian',
    period: '1970–1991',
    title: 'Welfare State + Industrial Innovation',
    icon: '📊',
    keyFacts: [
      'DMK and ADMK established Tamil Nadu model: welfare + industrial growth',
      'MGR Nutritious Meal Programme (1982) — world\'s largest school meal scheme',
      'SIPCOT formalized (1971) — industrial estate development',
      'Tiruppur emerged as global knitwear hub — ₹800 Cr exports by 1991',
      'ELCOT established (1977) to promote IT and electronics',
      'Film industry (Kollywood/Kodambakkam) became major economic force'
    ],
    tradeHighlights: 'Tiruppur knitwear exports grew from negligible to ~₹800 crore by 1991. Leather exports: ~40% of India\'s total.',
    policyNote: 'SIPCOT (1971), TANSIDCO strengthened, ELCOT (1977). Reservation policies + free education expanded skilled labor pool.',
    tier: {
      K: 'Tamil Nadu leaders came up with a super idea — give every school kid a free hot meal! This was called the Mid-Day Meal scheme. Meanwhile, a small town called Tiruppur started making t-shirts and socks that people all over the world wanted to buy!',
      T: 'The Dravidian parties (DMK & ADMK) created a unique model: invest heavily in people through free meals, education, and healthcare, while simultaneously building industrial infrastructure. Tiruppur grew from a small town to a billion-dollar knitwear export hub. SIPCOT created industrial parks, and ELCOT began the electronics journey.',
      V: 'The Dravidian model (1970-1991) combined ambitious welfare programs with industrial policy. MGR\'s nutritious meal program (1982) improved human capital. SIPCOT (1971) developed 20+ industrial complexes. Tiruppur\'s knitwear cluster, driven by Gounder community entrepreneurship, grew into a global export center.',
      W: 'The "Dravidian model" represents a distinctive political-economy approach: high social spending (meals, education, healthcare) creating human capital externalities that benefit industrial growth. SIPCOT\'s industrial estate model reduced entry barriers for manufacturers. ELCOT (1977) was remarkably early for a state-level electronics promotion body. The Tiruppur cluster developed through informal community credit networks rather than formal financial institutions.',
      E: 'The Dravidian welfare model is an empirical case study in human capital investment → industrial productivity. The noon meal scheme\'s long-term effects on labor force quality are documented in development economics literature. Tiruppur demonstrates endogenous cluster formation — Gounder community social capital (trust-based lending, kinship networks) substituted for formal financial markets, enabling rapid capital accumulation. By 1991, the cluster achieved $100M+ in exports with minimal government financial support.'
    }
  },
  {
    id: 'liberalization',
    period: '1991–2005',
    title: 'IT Boom & Auto Revolution',
    icon: '💻',
    keyFacts: [
      'Hyundai Motor India — Sriperumbudur plant (1996, production 1998)',
      'Ford India — Maraimalai Nagar (1995)',
      'TIDEL Park (2000) — one of Asia\'s largest IT parks at launch',
      'Mahindra World City SEZ (2002) — India\'s first operational integrated business city',
      'Cognizant founded in Chennai (1994), became NASDAQ giant',
      'TN Industrial Policy 1992 — first post-liberalization industrial policy',
      'Multiple SEZs sanctioned under SEZ Act 2005'
    ],
    tradeHighlights: 'TN auto production reached ~30% of India\'s cars. IT/ITES exports crossed $5 billion. State exports ~$12-15 billion by 2005.',
    policyNote: 'Industrial Policy 1992, IT Policy 2002, SEZ Act 2005, GUIDANCE Bureau precursor activities.',
    tier: {
      K: 'Big car companies from Korea (Hyundai) and America (Ford) came to Tamil Nadu to build cars! And lots of smart people started coding in Chennai\'s huge new tech parks. Chennai became both a car city AND a computer city!',
      T: 'After India opened its economy in 1991, Tamil Nadu attracted major global players. Hyundai chose Sriperumbudur for its Indian factory, making Chennai the "Detroit of India." Meanwhile, TIDEL Park launched Chennai\'s IT boom, and Cognizant (born in Chennai) became a global tech giant. The state made ~30% of India\'s cars!',
      V: 'Liberalization transformed Tamil Nadu into a manufacturing and IT powerhouse. Hyundai (1996), Ford (1995), and later BMW, Daimler, and Renault-Nissan made Chennai India\'s auto capital. TIDEL Park (2000) and Mahindra World City (2002) anchored the IT corridor. Cognizant, founded in Chennai in 1994, became a $18B+ company.',
      W: 'TN\'s liberalization strategy had two policy pillars: (1) Industrial Policy 1992 with structured FDI incentives, and (2) IT Policy 2002 with tax holidays and infrastructure support. The GUIDANCE Bureau model of single-window clearance reduced regulatory friction. The SEZ framework created enclave economies with distinct trade and tax regimes.',
      E: 'TN\'s post-liberalization success illustrates FDI-led industrialization: Hyundai\'s anchor investment created backward linkages attracting 200+ tier-1/2/3 suppliers, generating agglomeration externalities. The auto cluster contributed ~30% of India\'s passenger vehicle production by 2005. In IT, Chennai\'s wage-cost advantage over Bangalore (15-20% lower) and TN\'s labor supply (high literacy, engineering colleges) created competitive factor costs. Total exports grew from ~$5B (2000) to ~$12-15B (2005).'
    }
  },
  {
    id: 'modern',
    period: '2005–2020',
    title: '"Detroit of Asia" & SaaS Capital',
    icon: '🚗',
    keyFacts: [
      'Renault-Nissan plant (Oragadam, 2010), Daimler India (2012)',
      'Foxconn (2006+), Samsung, Dell established electronics manufacturing in Sriperumbudur',
      'Chennai became India\'s SaaS capital — Freshworks, Zoho, Chargebee, Kissflow',
      'GIM 2015: ₹2.42 lakh crore MoUs; GIM 2019: ₹3.00+ lakh crore',
      'Kattupalli Port (Adani, 2013) added new port capacity',
      'GUIDANCE Bureau formally established (2012) as single-window agency',
      'Aerospace & Defence Policy 2019, EV Policy 2019'
    ],
    tradeHighlights: 'TN exports crossed ~$30 billion by 2019-20. Auto exports ~$7 billion. Tiruppur textiles ~₹28,000 crore.',
    policyNote: 'Industrial Policy 2007/2014, GUIDANCE Bureau 2012, Startup Policy 2018, Aerospace & Defence Policy 2019, EV Policy 2019.',
    tier: {
      K: 'Chennai got the nickname "Detroit of Asia" because it makes SO many cars! Plus, smart people in Chennai created apps and software used by millions worldwide. Companies like Zoho and Freshworks started right here and now serve customers in 100+ countries!',
      T: 'Chennai became a global manufacturing hub — Renault-Nissan, Daimler, Foxconn, Samsung all set up huge factories. But the coolest part? Chennai quietly became India\'s SaaS capital. Freshworks, Zoho, and Chargebee — all born in Chennai — are now billion-dollar tech companies used by businesses worldwide.',
      V: 'This era cemented TN\'s dual identity: manufacturing powerhouse ("Detroit of Asia" with Renault-Nissan, Daimler, Foxconn, Samsung) and tech innovation hub (SaaS capital with Freshworks, Zoho, Chargebee). The GIM platform attracted ₹5.4+ lakh crore in investment commitments. GUIDANCE Bureau streamlined investment facilitation.',
      W: 'The 2005-2020 period shows sophisticated policy evolution: sector-specific policies (Aerospace 2019, EV 2019) beyond generic industrial incentives; GIM as an investment marketing platform; GUIDANCE Bureau (2012) as institutional single-window reform. The Startup & Innovation Policy 2018 recognized the SaaS ecosystem. Policy layering created differentiated incentive structures for different sectors.',
      E: 'TN\'s 2005-2020 growth demonstrates successful economic diversification: auto → electronics → software → aerospace. GIM MoU-to-realization ratio (estimated 30-50%) still generated significant capital formation. The SaaS cluster emergence is notable — Chennai produced more SaaS unicorns than any other Indian city, with lower capital requirements than hardware manufacturing. Exports tripled from ~$10B to $30B. The electronics cluster around Sriperumbudur became India\'s largest, processing 65%+ of India\'s smartphone exports.'
    }
  },
  {
    id: 'current',
    period: '2020–2026',
    title: 'Post-COVID & GCC Capital',
    icon: '🚀',
    keyFacts: [
      'Foxconn, Pegatron, Tata Electronics expanded iPhone/electronics assembly',
      'Chennai hosts 100+ Global Capability Centers (GCCs) — 2nd only to Bengaluru',
      'GIM 2024 attracted ₹6.64 lakh crore ($80B) in investment commitments',
      'Freshworks IPO on NASDAQ (September 2021) — valued at ~$10 billion',
      'TN GSDP ~₹24-25 lakh crore — India\'s #2 economy',
      'Tata Electronics semiconductor facility announced for TN',
      'EV Policy 2023 updated; Green Hydrogen and Data Centre policies launched'
    ],
    tradeHighlights: 'TN exports ~$35-37 billion (FY24). Electronics exports surging. Combined port throughput ~160+ MT.',
    policyNote: 'Industrial Policy 2021, Startup Policy 2023, Fintech Policy 2021, Data Centre Policy 2021, EV Policy 2023, MSME Policy 2023.',
    tier: {
      K: 'Right now, Tamil Nadu is like a superhero state! The iPhones you see? Many are assembled right here in TN! Big companies from all over the world are coming to set up offices. TN\'s economy is the second biggest in all of India — almost as big as Mumbai\'s state!',
      T: 'Tamil Nadu is having a major glow-up! It\'s become India\'s top electronics manufacturing state (yes, iPhones are made here). Chennai has 100+ global offices (GCCs) of companies like Citi and PayPal. At GIM 2024, companies pledged $80 billion in investments. Plus, Freshworks — a Chennai startup — went public on NASDAQ at $10 billion valuation. TN\'s GSDP is #2 in India.',
      V: 'The current era (2020-2026) marks TN\'s emergence as a diversified economic powerhouse. Post-COVID electronics manufacturing surge (Foxconn, Pegatron, Tata Electronics for semiconductors), 100+ GCCs, GIM 2024\'s record ₹6.64 lakh crore commitments, and GSDP of ~₹24-25 lakh crore (#2 nationally) position TN as India\'s most balanced industrial economy.',
      W: 'Current policy architecture shows strategic maturity: sector-specific policies (Fintech 2021, Data Centre 2021, EV 2023, Green Hydrogen) create targeted incentive frameworks. The semiconductor push (Tata Electronics) represents upstream value chain capture. The GCC proliferation strategy diversifies beyond manufacturing into high-value services. MSME Policy 2023 addresses the SME backbone. The startup ecosystem (TANSEED, StartupTN) supports indigenous innovation.',
      E: 'TN\'s current economic positioning demonstrates successful structural transformation: manufacturing (auto + electronics) + services (IT + GCC) + innovation (SaaS + startups) creating a diversified $300B+ economy (PPP-adjusted). GIM 2024\'s ₹6.64L Cr MoUs, even at 30-40% realization, imply $25-35B in actual investment over 5 years. The Apple supplier ecosystem (Foxconn, Pegatron, Tata Electronics) positions TN in global electronics supply chains. Electronics exports are growing at 40%+ CAGR. The GCC model imports high-value service employment (avg salary 3-5x manufacturing) improving state tax revenue composition.'
    }
  }
];

/* 20 Key Policy Milestones */
var MILESTONES = [
  { year: 1965, title: 'TIDCO Formed', desc: 'Tamil Nadu Industrial Development Corporation — state\'s principal industrial promotion entity', icon: '🏛️' },
  { year: 1971, title: 'SIPCOT Established', desc: 'State Industries Promotion Corporation — developed 20+ industrial complexes across TN', icon: '🏗️' },
  { year: 1977, title: 'ELCOT Established', desc: 'Electronics Corporation of TN — promoted IT and electronics industry', icon: '💾' },
  { year: 1982, title: 'MGR Meal Programme', desc: 'World\'s largest school noon meal scheme — massive human capital investment', icon: '🍲' },
  { year: 1992, title: 'Industrial Policy 1992', desc: 'First post-liberalization industrial policy — opened state to FDI', icon: '📋' },
  { year: 1996, title: 'Hyundai Sriperumbudur', desc: 'Catalyzed auto cluster — anchored "Detroit of Asia" identity', icon: '🚗' },
  { year: 1997, title: 'TN IT Policy', desc: 'Early mover in IT incentives — tax holidays, infrastructure support', icon: '💻' },
  { year: 2002, title: 'IT Policy / TIDEL Park', desc: 'Asia\'s largest IT park at launch — signaled Chennai\'s IT ambitions', icon: '🏢' },
  { year: 2003, title: 'Mahindra World City SEZ', desc: 'India\'s first operational integrated business city/SEZ', icon: '🌐' },
  { year: 2007, title: 'Industrial Policy 2007', desc: 'Special packages for mega investments (>₹500 crore)', icon: '📊' },
  { year: 2008, title: 'MSME Policy 2008', desc: 'Cluster development approach — credit facilitation, technology upgradation', icon: '🔧' },
  { year: 2012, title: 'GUIDANCE Bureau', desc: 'Single-window investment facilitation — transformed ease of doing business', icon: '🎯' },
  { year: 2014, title: 'Industrial Policy 2014', desc: 'Sector-specific packages for auto, textiles, pharma, electronics', icon: '📋' },
  { year: 2015, title: 'GIM 2015', desc: 'First mega investment summit — ₹2.42 lakh crore MoUs signed', icon: '🤝' },
  { year: 2018, title: 'Startup Policy 2018', desc: 'TANSEED grants, incubator support — formalized startup ecosystem', icon: '🚀' },
  { year: 2019, title: 'Aerospace & Defence Policy', desc: 'Targeted aerospace corridor — attracted HAL, L&T, Rolls-Royce, Safran', icon: '✈️' },
  { year: 2019, title: 'GIM 2019', desc: '₹3.00+ lakh crore in MoUs — deeper sectoral diversification', icon: '🤝' },
  { year: 2021, title: 'Industrial Policy 2021', desc: 'Post-COVID framework — electronics, EVs, data centers, renewable energy', icon: '📋' },
  { year: 2021, title: 'EV & Fintech Policies', desc: 'Incentivized EV manufacturing and fintech hub development', icon: '⚡' },
  { year: 2024, title: 'GIM 2024', desc: '₹6.64 lakh crore ($80B) MoUs — largest ever; semiconductor, green energy focus', icon: '🏆' }
];

/* 5 Cultural Business Communities */
var COMMUNITIES = [
  {
    name: 'Nattukottai Chettiars (Nagarathar)',
    region: 'Chettinad (Sivaganga/Pudukottai)',
    icon: '🏦',
    summary: 'Southeast Asia\'s premier indigenous banking community — financed trade across Burma, Malaya, Ceylon, Indochina',
    keyFacts: [
      'Operated banking networks across Burma, Malaya, Ceylon, Indochina (1850s-1940s)',
      'At peak (1930s), Chettiar capital in Burma alone estimated at ₹750 crore',
      'Co-founded Indian Bank; Indian Overseas Bank founded by Ct. Chidambaram Chettiar (1937)',
      'Modern presence in banking, hospitality (Chettinad Group), and real estate'
    ],
    tier: {
      K: 'The Chettiars were like ancient Tamil bankers who lent money to people in many countries! They helped build businesses in places like Myanmar and Malaysia long before modern banks existed.',
      T: 'The Nattukottai Chettiars ran Asia\'s most sophisticated pre-modern banking network. From their base in Chettinad, they financed trade and agriculture across Southeast Asia. At their peak in the 1930s, their capital in Burma alone was worth hundreds of crores. They literally funded the economies of multiple countries!',
      V: 'The Nattukottai Chettiars from Sivaganga/Pudukottai districts operated as Southeast Asia\'s premier indigenous banking community from the 1850s-1940s. They co-founded Indian Bank and established Indian Overseas Bank (1937). Their modern legacy includes the Chettinad Group in hospitality and real estate.',
      W: 'The Chettiar banking system was a pre-institutional financial intermediation model — trust-based lending networks operating across national boundaries without formal regulatory frameworks. Their repatriation of capital after Burmese nationalization (1940s-60s) represented a significant capital injection into the Indian economy.',
      E: 'The Chettiar financial network represents an extraordinary case of diaspora-mediated capital flows. At peak deployment, Chettiar capital in Burma financed an estimated 60-75% of rice cultivation credit. Their operational model — family-firm networks with pooled capital, standardized interest rates, and community-enforced contracts — achieved what formal banking institutions required regulatory frameworks to accomplish.'
    }
  },
  {
    name: 'Nadar Community',
    region: 'Tirunelveli, Thoothukudi, Kanyakumari',
    icon: '🔥',
    summary: 'From palmyra-climbing to one of India\'s most successful entrepreneurial communities through collective self-organization',
    keyFacts: [
      'Nadar Mahajana Sangam (1910) — one of India\'s oldest community organizations',
      'Built Sivakasi into India\'s fireworks capital (~90% of India\'s fireworks)',
      'Sivakasi also dominates printing/publishing — called "Mini Japan"',
      'Match manufacturing hub in Sivakasi',
      'Prominent in retail, banking, FMCG across South India'
    ],
    tier: {
      K: 'The Nadars showed that any community can rise to the top through teamwork! They built Sivakasi into a famous town that makes almost ALL of India\'s fireworks and crackers. They also started many shops and businesses across Tamil Nadu.',
      T: 'The Nadar community\'s transformation is one of India\'s most inspiring stories. Through collective action (Nadar Mahajana Sangam, 1910), they went from being marginalized to building business empires. They turned Sivakasi into India\'s fireworks, match, and printing capital — 90% of India\'s fireworks come from there!',
      V: 'The Nadar community\'s entrepreneurial transformation from southern Tamil Nadu is remarkable. Through the Nadar Mahajana Sangam (1910), they built Sivakasi into India\'s fireworks capital (90% market share), a major printing hub (called "Mini Japan"), and a match manufacturing center. Modern Nadar entrepreneurs are prominent in retail, banking, and FMCG.',
      W: 'The Nadar case demonstrates successful community-based economic mobilization. The Nadar Mahajana Sangam (1910) functioned as a proto-cooperative facilitating collective credit, education investment, and business mentorship. The Sivakasi cluster evolved through community-embedded knowledge transfer and capital pooling.',
      E: 'The Nadar economic transformation represents one of the most documented cases of community-driven industrialization in development economics. The Sivakasi cluster — fireworks (90% national share), matches, printing — demonstrates how community social capital (trust, information sharing, collective financing) creates concentrated industrial districts. The printing cluster alone generates an estimated ₹20,000+ crore annually.'
    }
  },
  {
    name: 'Gounder / Kongu Community',
    region: 'Kongu Nadu (Coimbatore, Erode, Tiruppur, Salem)',
    icon: '🧵',
    summary: 'Built Tiruppur into the "Knitwear Capital of India" and Coimbatore into "Manchester of South India"',
    keyFacts: [
      'Built Tiruppur from small town to $3.5-4B knitwear export center employing 600,000+',
      'Coimbatore: "Manchester of South India" — textiles + pump/motor hub (~50% of India\'s output)',
      'Driven by family-firm networks and informal community credit systems',
      'Major companies: Lakshmi Machine Works, Roots Group, Pricol, Elgi Equipments'
    ],
    tier: {
      K: 'The Gounder community took a small town called Tiruppur and turned it into a T-shirt-making superstar! Today, if you buy a cotton t-shirt in Europe or America, there\'s a good chance it was made in Tiruppur by this amazing community.',
      T: 'The Gounders built two incredible industrial clusters: Tiruppur (world\'s knitwear capital, $3.5-4B exports, 600K+ jobs) and Coimbatore (textile machinery + pump manufacturing — 50% of India\'s pumps!). They did this through family businesses and community lending networks, not big bank loans.',
      V: 'The Gounder community transformed the Kongu Nadu region into TN\'s industrial heartland. Tiruppur\'s knitwear cluster exports $3.5-4 billion annually, employing 600,000+. Coimbatore hosts major manufacturers like LMW, Elgi Equipments, and Pricol, plus produces ~50% of India\'s pumps and motors.',
      W: 'The Tiruppur model is a textbook case of cluster-based development: community credit networks (chit funds, rotating savings) substituted for formal finance, family-firm governance reduced agency costs, and informal knowledge networks accelerated technology adoption. This developed largely without direct government industrial policy intervention.',
      E: 'Tiruppur\'s growth from negligible to $3.5-4B exports demonstrates endogenous growth through social capital: Gounder kinship networks created a "community venture capital" system where trust-based lending enabled rapid capital formation without formal financial intermediation. Sharad Chari\'s ethnographic work documents how "fraternal capital" — mutual obligations within the community — reduced transaction costs below what formal contracts could achieve. Coimbatore\'s pump/motor cluster (~50% national share) is a parallel Marshallian district.'
    }
  },
  {
    name: 'Nattukottai Mudaliar & Other Communities',
    region: 'Chennai and across Tamil Nadu',
    icon: '🏢',
    summary: 'Contributed to early industrialization, education, and professional services in the Madras Presidency',
    keyFacts: [
      'Prominent in colonial and post-independence manufacturing',
      'Significant contribution to education, legal, and professional services',
      'Contributed to Chennai\'s early industrial and commercial infrastructure'
    ],
    tier: {
      K: 'Many different Tamil communities worked together to build Chennai into a great city! Some built schools, some started factories, and some became lawyers and doctors. Teamwork made Tamil Nadu strong!',
      T: 'Beyond the big community stories, many Tamil groups contributed to building TN\'s economy. Mudaliars and others were early industrialists and professionals in colonial Madras. The diversity of Tamil business communities is actually one of the state\'s strengths — competition and innovation across multiple groups.',
      V: 'Multiple communities contributed to Tamil Nadu\'s economic development. Mudaliars and others were prominent in colonial-era manufacturing, education, and professional services. This diversity of entrepreneurial communities across sectors and regions has been a key strength of TN\'s economy.',
      W: 'Tamil Nadu\'s economic dynamism reflects inter-community competition in different sectors and regions — a form of institutional pluralism that prevents monopolistic capture and encourages innovation across industries.',
      E: 'The multi-community entrepreneurial landscape creates what economists call "competitive pluralism" — multiple groups competing across sectors reduces rent-seeking and encourages productive competition. This contrasts with states dominated by single business groups.'
    }
  },
  {
    name: 'Tamil Brahmin Diaspora — IT/Services',
    region: 'Chennai → Global (Silicon Valley focus)',
    icon: '🌐',
    summary: 'Early IT adoption, professional services, and reverse diaspora investment connecting Silicon Valley to Chennai',
    keyFacts: [
      'Early adopters of English education → civil services, law, engineering, IT',
      'Key role in founding and growing India\'s IT industry',
      'Large US diaspora (post-1965 Immigration Act) in Silicon Valley',
      'Strong reverse investment/mentorship links to Chennai tech ecosystem'
    ],
    tier: {
      K: 'Some Tamil people went to America and became tech superstars! They helped build companies in Silicon Valley and then came back to help Chennai\'s tech industry grow. It\'s like having friends in another country who help your hometown get better!',
      T: 'Tamil Brahmins were early adopters of English education, which gave them a head start in IT and professional services. Many went to Silicon Valley and became tech leaders. Now there\'s a strong connection between Silicon Valley and Chennai — with investments, mentorship, and tech transfer flowing both ways.',
      V: 'The Tamil Brahmin community\'s early adoption of English education led to significant representation in IT and professional services. The post-1965 US diaspora, concentrated in Silicon Valley, created reverse investment and mentorship links that helped fuel Chennai\'s tech ecosystem growth.',
      W: 'The diaspora network effect demonstrates how human capital export can create reverse knowledge and capital flows. The Silicon Valley-Chennai corridor has been a significant channel for technology transfer, venture capital, and management practices.',
      E: 'The Tamil professional diaspora represents a brain gain pathway — initial human capital emigration (brain drain) creating network externalities through reverse investment, mentorship, and market access. This diaspora-mediated technology transfer was a key factor in Chennai\'s emergence as an IT hub, reducing information asymmetries for US companies evaluating India operations.'
    }
  }
];

/* Render helpers */
function renderEraForTier(era, tier){
  tier = tier || 'V';
  return era.tier[tier] || era.tier.V;
}

function renderCommunityForTier(community, tier){
  tier = tier || 'V';
  return community.tier[tier] || community.tier.V;
}

/* Public API */
window.TNHistory = {
  ERAS: ERAS,
  MILESTONES: MILESTONES,
  COMMUNITIES: COMMUNITIES,
  renderEraForTier: renderEraForTier,
  renderCommunityForTier: renderCommunityForTier
};

})();
