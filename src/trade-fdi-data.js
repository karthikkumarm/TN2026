/* ============================================================
 * TN 2026 — Trade & FDI Data Module
 * ============================================================
 * Comprehensive data on Tamil Nadu's international trade,
 * port infrastructure, and foreign direct investment.
 *
 * Sources: DGFT (Commerce Ministry), RBI FDI Data, IPA Chennai,
 *   Chennai Port Trust Annual Reports, Kamarajar Port Ltd,
 *   V.O. Chidambaranar Port Trust, DPIIT FDI Factsheet 2024,
 *   Guidance TN (guidance.tn.gov.in), GIM 2024 Official Data,
 *   EXIM Bank, Federation of Indian Export Organisations (FIEO),
 *   SIPCOT, CII Tamil Nadu, FICCI Southern Region.
 *
 * All dollar figures in USD unless stated. Data as of FY 2023-24.
 * ============================================================ */

(function () {
  'use strict';

  // ── EXPORT OVERVIEW ───────────────────────────────────────
  var EXPORT_TOTAL = '$35-37B (FY 2023-24)';
  var EXPORT_RANK = '3rd or 4th largest exporting state in India';

  // ── TOP 10 EXPORT COMMODITIES ─────────────────────────────
  var EXPORT_COMMODITIES = [
    {
      rank: 1,
      name: 'Automobiles & Auto Components',
      value: '$8-9B',
      icon: '🚗',
      pctOfTotal: '~24%',
      tier: {
        K: 'Tamil Nadu makes lots of cars and car parts! Almost 1 out of every 4 rupees the state earns from selling things abroad comes from cars. Hyundai, Renault-Nissan, and Royal Enfield all make vehicles here — they ship them to countries all over the world.',
        T: 'TN is India\'s "Detroit" — home to Hyundai, Renault-Nissan, BMW, Daimler, Ashok Leyland, TVS, and Royal Enfield. Chennai alone produces ~40% of India\'s auto exports. Auto components from Sriperumbudur and Oragadam supply global OEMs. This single sector earns $8-9B annually.',
        V: 'Automobiles and auto components are TN\'s #1 export earner at $8-9B. The Chennai-Sriperumbudur-Oragadam corridor is India\'s largest auto cluster. Over 30% of India\'s passenger cars and 70% of heavy commercial vehicles are manufactured in TN. The sector employs 5+ lakh workers directly.',
        W: 'Auto exports at $8-9B represent ~24% of TN\'s total merchandise exports. The state hosts 8 of India\'s top 10 auto OEMs and 400+ Tier-1 suppliers. Export destinations: USA (26%), EU (22%), ASEAN (15%), Middle East (12%). EV transition risk: ICE component firms (40% of supplier base) face obsolescence by 2030. Hyundai IPO 2024 valued India ops at $19B — validation of TN\'s auto ecosystem.',
        E: 'TN\'s auto export dominance rests on three structural advantages: deep Tier-1/Tier-2 supplier ecosystem (lowest logistics cost per unit nationally), port proximity (Chennai port 50km), and trained workforce from ITIs/polytechnics. Vulnerability: EV disruption displaces 30-40% of component value chain (transmission, exhaust, fuel systems). Opportunity: EV battery pack assembly (Tata Electronics, Ola) could offset if cell manufacturing scales. Multiplier: each auto OEM job creates 7-8 indirect jobs (CII estimate).'
      }
    },
    {
      rank: 2,
      name: 'Textiles & Garments',
      value: '$5-6B',
      icon: '👔',
      pctOfTotal: '~16%',
      tier: {
        K: 'Tamil Nadu makes a LOT of clothes! T-shirts, shirts, bedsheets — many of the clothes you wear might have been stitched in Tirupur or Coimbatore. The state sends $5-6 billion worth of textiles to other countries every year.',
        T: 'Tirupur is India\'s knitwear capital — producing ~80% of India\'s cotton knitwear exports. Coimbatore handles spinning, Erode does dyeing, and Salem does handlooms. TN\'s textile chain is fully integrated from cotton to finished garments. The sector employs 20+ lakh people, mostly women.',
        V: 'Textiles & garments are TN\'s 2nd largest export at $5-6B. Tirupur alone exports ~$4B in knitwear to 180 countries. The sector is the state\'s largest private employer (20+ lakh workers, 60% women). However, it faces stiff competition from Bangladesh and Vietnam, where wages are 30-40% lower.',
        W: 'Tirupur cluster: 10,000+ units, $4B exports, 80% of India\'s cotton knitwear. Key buyers: H&M, Walmart, Primark, Zara. Average realization: $3.2/kg (vs Bangladesh $2.8/kg). Competitive edge: quick turnaround (15-day delivery vs 45 days for Bangladesh). Threat: RCEP countries getting preferential tariffs in EU/ASEAN. PLI for technical textiles (₹10,683 Cr) could shift mix toward higher-value products.',
        E: 'TN textiles face a structural wage-productivity squeeze: real wages rose 8% CAGR (2015-24) vs productivity gains of 4%. Automation (flat-knitting machines) reduces labor need by 30% but requires ₹50L+ capex per unit — unaffordable for 70% of Tirupur MSMEs. Strategic play: move up value chain to technical textiles (filtration, medical, automotive) where India imports $2B/year. ZLD (zero liquid discharge) compliance cost: ₹2-5 Cr per dyeing unit — existential for small dyers.'
      }
    },
    {
      rank: 3,
      name: 'Petroleum Products',
      value: '$4-5B',
      icon: '🛢️',
      pctOfTotal: '~13%',
      tier: {
        K: 'Tamil Nadu has big factories called refineries that turn crude oil into petrol, diesel, and other useful things. Chennai Petroleum refinery processes millions of tons of oil and exports fuel worth $4-5 billion to nearby countries.',
        T: 'Chennai Petroleum Corporation (CPCL) operates two refineries near Chennai with ~11.5 MMTPA capacity. They import crude oil, refine it into petrol, diesel, naphtha, and other products, then export the surplus. It\'s basically value-addition — buy crude, sell finished fuel at higher prices.',
        V: 'Petroleum products are TN\'s 3rd largest export at $4-5B, driven by CPCL\'s Manali refinery (10.5 MMTPA) and Nagapattinam refinery (1 MMTPA). Key export products: high-speed diesel, naphtha, fuel oil. A proposed 9 MMTPA greenfield refinery in Nagapattinam could double export capacity by 2028.',
        W: 'CPCL (IOCL subsidiary) refining: Manali 10.5 MMTPA + Nagapattinam 1 MMTPA. Gross refining margin: $5-8/bbl (FY24). Exports primarily to Sri Lanka, ASEAN, East Africa. Cauvery Basin crude meets <5% of feedstock — 95% imported crude via Chennai port. New 9 MMTPA refinery (₹31,580 Cr investment) at Nagapattinam awaiting environmental clearance. Risk: global energy transition — refined petroleum demand may peak by 2035 (IEA).',
        E: 'Petroleum exports are high-value but low-value-addition (GRM ~$6/bbl on $80/bbl crude = 7.5% margin). Employment intensity is low (~5,000 direct jobs across both refineries). Strategic significance: refinery provides naphtha feedstock for SPIC and other Manali petrochemical units. New Nagapattinam refinery DPR includes petrochemical integration (polypropylene, LLDPE) which would shift export mix toward higher-margin plastics. Net-zero risk: stranded asset potential if crude demand declines per IEA Net Zero 2050 scenario.'
      }
    },
    {
      rank: 4,
      name: 'Electronic Goods',
      value: '$4-5B',
      icon: '📱',
      pctOfTotal: '~12%',
      tier: {
        K: 'Did you know iPhones are made in Tamil Nadu? Foxconn and Pegatron have huge factories near Chennai where they assemble smartphones and electronic parts that get shipped all over the world!',
        T: 'TN has become India\'s electronics export hub — Foxconn assembles Apple iPhones in Sriperumbudur, Samsung has a factory in Chennai, and dozens of component makers operate in SIPCOT parks. Electronics exports have grown from barely $1B in 2015 to $4-5B today, driven by PLI incentives.',
        V: 'Electronic goods exports ($4-5B) have been TN\'s fastest-growing export category — up 4x since 2015. Apple\'s supply chain (Foxconn, Pegatron, Tata Electronics) is concentrated in TN, making it India\'s #1 smartphone export state. The PLI scheme for electronics (₹76,000 Cr) is accelerating this growth.',
        W: 'Electronics exports: $4-5B (FY24), CAGR 30%+ from FY20. Major units: Foxconn Sriperumbudur (iPhone 15/16 assembly, $1B+ exports), Pegatron Mahindra City (iPhone assembly), Samsung Chennai (smartphones + components), Dell Sriperumbudur. Tata Electronics semiconductor ATMP plant (₹11,000 Cr) in Jagirhosur, Karnataka supplies TN assembly units. TN\'s share of India\'s electronics exports: ~25-30%.',
        E: 'TN\'s electronics export boom is structurally driven by Apple\'s China+1 strategy — but value capture remains low. iPhone assembly in India adds ~$7-10 of value on a $900 phone (GVC smile curve bottom). Real value shifts to component manufacturing: PCBAs, camera modules, displays. Policy target should be attracting Tier-1 Apple suppliers (Luxshare, BYD Electronic, Jabil). Tata semiconductor ATMP plant is strategic — but fab (TSMC/Samsung equivalent) remains distant. 20-year horizon for full electronics ecosystem maturity.'
      }
    },
    {
      rank: 5,
      name: 'Leather & Leather Products',
      value: '$3-4B',
      icon: '👞',
      pctOfTotal: '~10%',
      tier: {
        K: 'Tamil Nadu is famous for making leather shoes, bags, and belts. The cities of Ambur, Vaniyambadi, and Ranipet have thousands of leather factories. Your fancy leather shoes might have been made here!',
        T: 'TN produces ~45% of India\'s leather exports. The Vellore-Ranipet-Ambur belt is Asia\'s largest leather cluster. Products range from raw hides to finished shoes, bags, and jackets. Major buyers: Italy, Germany, USA, UK. The sector is labor-intensive — employing 7+ lakh workers, many from marginalized communities.',
        V: 'Leather exports ($3-4B) make TN India\'s #1 leather exporting state (45% national share). The Vellore-Ranipet corridor has 1,500+ tanneries and 300+ finished goods factories. Key challenge: environmental regulations have shut 200+ non-compliant tanneries since 2019, impacting employment in the belt.',
        W: 'TN leather: $3-4B exports, 45% of India\'s total. Breakdown: finished leather 25%, footwear 40%, leather goods 20%, garments 10%, saddlery 5%. Top destinations: EU (35%), USA (25%), UK (10%). Average hourly wage: $1.2 (vs Vietnam $1.8, Italy $15). Competitive advantage: integrated value chain (tanning → cutting → stitching → finishing). CETP compliance cost: ₹30-50/KL of effluent. SC/ST workforce: ~40% in tanning, ~25% in footwear.',
        E: 'Leather is TN\'s most socially significant export sector — employs 7L+ workers, disproportionately SC/ST communities in Vellore district. Value chain upgrading is critical: tanning margin is 5-8%, finished footwear margin is 25-35%. Italian brands (Tod\'s, Prada) source upper-leather from TN but finish in Italy — capturing 3x the value. Policy lever: Mega Leather Cluster at Ranipet (₹5,850 Cr) aims to co-locate tanning, components, and finishing. Environmental bottleneck: Palar river pollution litigation constrains capacity expansion.'
      }
    },
    {
      rank: 6,
      name: 'Engineering Goods',
      value: '$2-3B',
      icon: '⚙️',
      pctOfTotal: '~7%',
      tier: {
        K: 'Tamil Nadu makes pumps, motors, valves, and heavy machines. Coimbatore is called the "Pump City" of India because so many pumps are made there — they help farmers water their crops all over the world!',
        T: 'Coimbatore\'s engineering cluster produces pumps, motors, auto parts, textile machinery, and wet grinders. The city has 30,000+ SMEs in engineering. Other hubs: Chennai (heavy engineering), Trichy (BHEL — turbines and boilers), Hosur (precision components). India\'s engineering exports are $107B; TN accounts for $2-3B.',
        V: 'Engineering goods exports ($2-3B) are driven by Coimbatore\'s pump/motor cluster (25,000+ MSMEs), BHEL Trichy (power equipment), and L&T Kattupalli (heavy engineering). Products: pumps, valves, castings, forgings, machine tools, and power equipment. Key markets: ASEAN, Africa, Middle East.',
        W: 'Engineering goods: $2-3B exports. Coimbatore: 7,000+ pump units (global market share: ~5% in fractional HP pumps). BHEL Trichy: supercritical turbine exports to Bangladesh, Sri Lanka, Africa. L&T\'s Kattupalli complex: defence vessels, modular construction exports. Hosur: CNC components for global auto Tier-1s. Challenge: Coimbatore MSMEs average revenue ₹2-5 Cr — too small for direct export; depend on merchant exporters (margin compression).',
        E: 'Coimbatore engineering cluster is a textbook Marshallian district — agglomeration economies in labor pooling, supplier specialization, and knowledge spillovers. But it\'s stuck in a low-equilibrium trap: firms compete on price rather than innovation, R&D spend is <0.5% of revenue (vs 3-5% for German Mittelstand). The Coimbatore-Tirupur-Erode industrial belt needs an anchor institution (like Fraunhofer for German SMEs) to drive technology diffusion. BHEL Trichy\'s supercritical technology is world-class but faces declining thermal power demand domestically.'
      }
    },
    {
      rank: 7,
      name: 'Pharma & Medical Devices',
      value: '$1.5-2B',
      icon: '💊',
      pctOfTotal: '~5%',
      tier: {
        K: 'Tamil Nadu makes medicines and medical equipment. Some of the pills and syrups your doctor gives you are manufactured in factories near Chennai and sent to hospitals around the world!',
        T: 'TN has 200+ pharma manufacturing units, mostly around Chennai and Hosur. Major players: Orchid Pharma, Shasun, Strides, Pfizer\'s Chennai plant. The TIDEL Medical Devices Park in Oragadam is India\'s first dedicated medtech cluster. TN exports $1.5-2B in pharma products and medical devices annually.',
        V: 'Pharma & medical devices ($1.5-2B) is a growing export sector. TN has India\'s first Medical Devices Park at Oragadam. Key products: generic formulations, APIs, surgical instruments, diagnostic kits, and orthopedic implants. Post-COVID, India\'s medical devices market is $14B; TN aims for 20% share by 2027.',
        W: 'TN pharma: $1.5-2B exports. 200+ FDA/WHO-GMP approved units. Key APIs: amoxicillin (Orchid — world\'s largest), ciprofloxacin, ranitidine. Medical devices: Trivitron Healthcare (diagnostics), TTK Healthcare, Opto Circuits. Oragadam Medical Devices Park: 250 acres, ₹800 Cr investment committed. PLI for medical devices (₹3,420 Cr nationally) — TN has 12 approved PLI units. Challenge: 80% of medical device components still imported (China dependency).',
        E: 'Pharma is TN\'s highest-potential pivot sector. Current export intensity is low (TN is 5th behind Gujarat, Maharashtra, Telangana, Himachal). However, medical devices are where TN has structural edge: proximity to India\'s best medical infrastructure (44 medical colleges, Apollo/MIOT/CMC ecosystem generates clinical insights → device innovation pipeline). Regulatory pathway: CDSCO single-window clearance needed. API backward integration is the critical gap — India imports 68% of APIs from China. Opportunity: PLI + TIDEL park could create India\'s first integrated pharma-medtech corridor.'
      }
    },
    {
      rank: 8,
      name: 'Marine Products',
      value: '$1-1.5B',
      icon: '🦐',
      pctOfTotal: '~3.5%',
      tier: {
        K: 'Tamil Nadu has a very long coastline where fishermen catch shrimp, fish, and crabs. These are frozen and sent to countries like Japan, USA, and Europe — people there love Indian shrimp! TN earns over $1 billion from seafood exports.',
        T: 'TN has India\'s 3rd longest coastline (1,076 km) and 600+ fishing villages. Key exports: frozen shrimp (vannamei), cuttlefish, squid, and tuna. Major ports for fish exports: Tuticorin, Nagapattinam. Aquaculture (shrimp farming) in Nagapattinam and Ramanathapuram has boomed — TN produces 1 lakh+ tonnes annually.',
        V: 'Marine product exports ($1-1.5B) leverage TN\'s 1,076 km coastline. Frozen shrimp dominates (60% by value), followed by cuttlefish and squid. The aquaculture boom in southern TN districts (Nagapattinam, Ramanathapuram, Thoothukudi) has created 3+ lakh livelihoods. Key markets: USA, Japan, EU, China. MPEDA-registered processing plants in TN: 90+.',
        W: 'Marine exports: $1-1.5B. Shrimp (L. vannamei): 60% of value, grown in 15,000+ Ha of ponds. Wild catch: declining 3% CAGR (overfishing, trawl ban impacts). Processing infrastructure: 90+ MPEDA-approved plants, mostly in Tuticorin-Kanyakumari belt. Cold chain gap: 40% post-harvest loss in artisanal fisheries. EU rejections for antibiotic residues: 15-20 consignments/year (vs 5-8 for Andhra). Sagarmala investment in fishing harbors: ₹3,200 Cr for TN.',
        E: 'Marine products have high social ROI — 10 lakh fisherfolk families depend on the sector. But TN lags Andhra and Gujarat in aquaculture scale (AP: 3 lakh Ha vs TN: 15,000 Ha). The constraint is land availability and political sensitivity around CRZ violations. Deep-sea fishing is underdeveloped: TN has 36,000 boats but <500 deep-sea vessels. Blue economy opportunity: seaweed cultivation (Ramanathapuram — 10,000 tonnes/year, ₹400 Cr market), sport fishing tourism, and cold-chain-linked Sagarmala ports.'
      }
    },
    {
      rank: 9,
      name: 'Gems & Jewellery',
      value: '$0.5-1B',
      icon: '💎',
      pctOfTotal: '~2%',
      tier: {
        K: 'Tamil Nadu is famous for beautiful gold jewellery! Cities like Chennai have hundreds of jewellery shops. Some of this jewellery is exported to other countries. TN is one of the biggest gold jewellery markets in India.',
        T: 'Chennai\'s T. Nagar is India\'s densest jewellery market. TN has 20,000+ jewellery manufacturing units. Exports include gold jewellery, diamond-studded pieces, and temple jewellery reproductions. Key destinations: UAE, Singapore, USA. Major exporters: Tanishq (Titan), GRT, Joyalukkas have export divisions.',
        V: 'Gems & jewellery exports ($0.5-1B) include gold jewellery, studded ornaments, and silver articles. TN ranks 3rd nationally in jewellery manufacturing (after Gujarat and Maharashtra). The sector employs 5+ lakh artisans. The India International Jewellery Show (Chennai) is a key export facilitation event. Challenge: gold import dependency and price volatility.',
        W: 'TN gems & jewellery: $0.5-1B exports. Gold jewellery: 75% of export value. Diamond cutting (limited — concentrated in Surat). Hallmarking compliance: 95% in TN (highest nationally). Artisan workforce: 5L+, mostly in Chennai, Coimbatore, Madurai. Constraints: IGST on gold imports creates working capital stress for exporters. Domestic demand absorbs 90% of production — export orientation is low compared to Surat/Mumbai clusters.',
        E: 'TN jewellery is consumption-driven rather than export-oriented — unlike Surat (diamond cutting) or Mumbai (SEEPZ exports). Export growth requires: (1) design differentiation (TN temple jewellery has brand potential akin to Italian gold), (2) hallmarking infrastructure for international standards, (3) dedicated SEZ for jewellery exports (proposed in SIPCOT Phase III). The real opportunity is lab-grown diamonds — TN\'s engineering MSME base could pivot to diamond growing machines (HPHT/CVD), currently 90% imported from China.'
      }
    },
    {
      rank: 10,
      name: 'Spices, Coffee & Cashew',
      value: '$0.5-0.8B',
      icon: '🌶️',
      pctOfTotal: '~2%',
      tier: {
        K: 'Tamil Nadu grows amazing spices like pepper, cardamom, and turmeric in the Western Ghats hills. Coffee from the Nilgiris is famous worldwide. And Cuddalore\'s cashew factories process nuts that people snack on everywhere!',
        T: 'The Western Ghats districts (Nilgiris, Theni, Dindigul) produce premium coffee, pepper, and cardamom. Cuddalore is India\'s cashew processing capital (40% of India\'s processed cashews). TN\'s spices and plantation products earn $0.5-0.8B in exports annually. Key buyers: USA, EU, Middle East.',
        V: 'Spices, coffee & cashew exports ($0.5-0.8B) are driven by three clusters: Nilgiris coffee (Arabica, premium pricing), Cuddalore-Panruti cashew processing (raw imported from Africa, processed in TN), and Western Ghats spices (pepper, cardamom, turmeric). India\'s spice exports are $4B; TN is 3rd after Kerala and Karnataka.',
        W: 'Spice exports: pepper ($80M), cardamom ($40M), turmeric ($60M). Coffee: Nilgiris Arabica 15,000 tonnes/year, GI-tagged, premium of 20% over commodity Robusta. Cashew: Cuddalore processes 3 lakh tonnes (40% of India total), but 80% of raw nuts imported from Ivory Coast, Guinea-Bissau, Tanzania. Cashew processing employs 1.5 lakh workers (80% women). Risk: African countries adding domestic processing capacity — raw nut supply declining.',
        E: 'Cashew processing is TN\'s most vulnerable agri-export: classic "flying geese" risk where origin countries (Ivory Coast, Mozambique) move up the value chain. TN processors import 80% of raw material — zero supply control. Mitigation: mechanization (currently 60% manual) reduces unit cost and maintains competitiveness for 5-10 more years. Coffee: GI-tagged Nilgiris Arabica has premiumization potential (like Jamaica Blue Mountain) but needs branding investment. Spices: organic certification could unlock 40-60% price premium but only 5% of TN spice acreage is certified organic.'
      }
    }
  ];

  // ── EXPORT HISTORICAL PROGRESSION ─────────────────────────
  var EXPORT_HISTORY = [
    { year: 2000, value: 5.5, label: '~$5-6B', note: 'Pre-IT boom; textiles and leather dominated' },
    { year: 2005, value: 11, label: '~$10-12B', note: 'Auto sector takeoff post-Hyundai ramp-up' },
    { year: 2010, value: 19, label: '~$18-20B', note: 'Auto + IT services surge; Renault-Nissan begins production' },
    { year: 2015, value: 24, label: '~$23-25B', note: 'Electronics FDI begins; Samsung, Foxconn expand' },
    { year: 2020, value: 27, label: '~$26-28B (COVID)', note: 'Pandemic-hit; marine, textiles worst affected' },
    { year: 2024, value: 36, label: '~$35-37B', note: 'Electronics boom (Apple/Foxconn); post-COVID recovery' }
  ];

  // ── TOP EXPORT DESTINATIONS ───────────────────────────────
  var EXPORT_DESTINATIONS = [
    { country: 'United States', flag: '🇺🇸', share: '~18-20%', products: 'Auto components, IT services, textiles, pharma, marine products' },
    { country: 'United Arab Emirates', flag: '🇦🇪', share: '~12-14%', products: 'Petroleum products, gems & jewellery, textiles, engineering goods' },
    { country: 'China', flag: '🇨🇳', share: '~7-9%', products: 'Iron ore, granite, marine products, leather, organic chemicals' },
    { country: 'Germany', flag: '🇩🇪', share: '~5-7%', products: 'Auto components, leather goods, engineering goods, textiles' },
    { country: 'United Kingdom', flag: '🇬🇧', share: '~4-5%', products: 'Textiles, leather products, IT services, pharma' }
  ];

  // ── MAJOR PORTS ───────────────────────────────────────────
  var PORTS = [
    {
      name: 'Chennai Port',
      throughput: '47-50 MT',
      type: 'Major Port (Government of India)',
      icon: '🚢',
      established: 1881,
      notes: 'India\'s 3rd largest container port; handles automobiles, general cargo, containers, iron ore. 24 berths across 3 docks.',
      tier: {
        K: 'Chennai Port is like a giant parking lot for ships! It\'s one of the oldest and biggest ports in India, built way back in 1881. Every day, huge ships bring in goods from other countries and take out cars, clothes, and other things made in Tamil Nadu.',
        T: 'Chennai Port is India\'s 3rd largest container port, handling 47-50 million tonnes of cargo annually. It\'s the primary gateway for TN\'s auto exports — Hyundai and Nissan ship cars directly from here. The port has 24 berths and handles 1.5 million+ TEUs (containers) per year.',
        V: 'Chennai Port (est. 1881) handles 47-50 MT of cargo annually, making it India\'s 3rd largest container port. It\'s the export gateway for the Chennai auto corridor and electronics cluster. Container throughput: ~1.5M TEUs. The port is undergoing a ₹5,000+ Cr modernization under Sagarmala to boost capacity to 65 MT.',
        W: 'Chennai Port: 47-50 MT, 1.55M TEUs (FY24). Revenue: ₹2,200 Cr. Draft: 12-17m. Key terminals: PSA-SICAL (container), DP World (container). Auto RoRo: dedicated berth handles 400K vehicles/year. Constraints: city-port congestion (6-8 hr truck turnaround vs 2-3 hr at Mundra). Sagarmala capex: ₹5,000 Cr for deepening, rail connectivity, coastal berth. Competition: Kamarajar Port siphoning dry bulk traffic.',
        E: 'Chennai Port is trapped between urban encroachment and competition from Kamarajar/Kattupalli. The port trust model (high labor costs, bureaucratic procurement) is structurally disadvantaged vs. corporatized/private ports. Draft limitation at older berths (12m) prevents Ultra Large Container Vessels (ULCV, need 16m+). Strategic play: convert to pure container + auto RoRo hub, cede bulk to Kamarajar. Real estate value of port land in city center is ₹50,000+ Cr — monetization debate is inevitable.'
      }
    },
    {
      name: 'Kamarajar Port (Ennore)',
      throughput: '35-38 MT',
      type: 'Major Port — India\'s first corporatized major port',
      icon: '⚓',
      established: 2001,
      notes: 'India\'s first corporatized major port. Handles coal, LNG, containers, and iron ore. Ennore LNG terminal supplies gas to TN power plants.',
      tier: {
        K: 'Kamarajar Port near Ennore is a modern port that was built to help Chennai Port handle more ships. It\'s special because it was the first port in India to be run like a company instead of by the government directly. Big ships carrying coal and gas come here.',
        T: 'Kamarajar Port (2001) is India\'s first corporatized major port — meaning it\'s run like a private company but owned by the government. It handles 35-38 MT, mainly coal for power plants, LNG (gas), and containers. It was built to decongest Chennai Port and has room to grow to 100 MT capacity.',
        V: 'Kamarajar Port at Ennore handles 35-38 MT. India\'s first corporatized major port, it operates under a company structure with greater flexibility than traditional port trusts. Houses India\'s 2nd LNG import terminal (5 MMTPA). Current expansion to 100+ MT capacity with new container terminal and multi-cargo berths under Sagarmala.',
        W: 'Kamarajar Port: 35-38 MT (FY24). Corporatized under Companies Act — Board-driven, PPP model for terminals. Coal: 60% of throughput (TANGEDCO thermal plants). LNG: Indian Oil Petronas (5 MMTPA, expandable to 10). Container terminal (Adani-operated): 1.2M TEU capacity. IRR for port company: ~14%. Growth plan: ₹13,000 Cr investment for outer harbor (20m draft, capable of handling 18,000+ TEU vessels). Key advantage: no urban encroachment (unlike Chennai Port).',
        E: 'Kamarajar Port\'s corporatized model is India\'s port reform proof-of-concept — higher efficiency ratios (revenue per employee 3x Chennai Port Trust). Strategic value: the Ennore-Manali industrial corridor (refineries, petrochemicals, power plants) is an integrated logistics cluster. LNG terminal is critical energy infrastructure — supplies 3,000 MW of gas-based power. Risk: coal throughput (60% of revenue) will decline as TANGEDCO transitions to renewables. Must pivot to container/industrial cargo. Outer harbor development makes it a potential transshipment hub — competing with Colombo for South Asian relay cargo.'
      }
    },
    {
      name: 'V.O. Chidambaranar Port (Tuticorin)',
      throughput: '35-38 MT',
      type: 'Major Port (Government of India)',
      icon: '🏗️',
      established: 1974,
      notes: 'Southern Tamil Nadu\'s primary port. Handles containers, thermal coal, salt, copper, and edible oil. Gateway for southern TN industries.',
      tier: {
        K: 'This port in Tuticorin is the main port for the southern part of Tamil Nadu. It helps farmers, fishermen, and factories in places like Madurai, Tirunelveli, and Kanyakumari send their products to other countries. Ships carry salt, spices, and many other goods from here.',
        T: 'V.O. Chidambaranar Port (VOC Port) in Tuticorin handles 35-38 MT and is the lifeline for southern TN\'s economy. It\'s the closest Indian port to major East-West shipping routes. Key cargo: containers, coal, salt, copper, and edible oil. Sterlite Copper (before closure) and SPIC were major port users.',
        V: 'VOC Port (Tuticorin) handles 35-38 MT and serves as southern TN\'s economic gateway. It\'s closer to global East-West shipping lanes than any other Indian port, giving it a natural transshipment advantage. Key hinterland: Madurai, Tirunelveli, Virudhunagar industrial districts. Container throughput: 0.7M+ TEUs. Outer harbor project (₹7,500 Cr) will double capacity.',
        W: 'VOC Port: 35-38 MT, 0.72M TEUs (FY24). Operated under Port Trust. Key cargo: containers (40%), coal (25%), salt (10%), edible oil (8%), copper/mineral (7%). PSA operates container terminal. Geographic advantage: closest Indian major port to Colombo (180 NM) and global E-W trade lane. ₹7,500 Cr outer harbor: 14m draft, 2 MTEU capacity, target completion 2027. Hinterland connectivity: NH-44 + Southern Railway. Constraint: single-track rail, road congestion in Tuticorin city.',
        E: 'VOC Port is strategically positioned for India\'s transshipment ambitions — India loses $2B annually to Colombo/Singapore for relay cargo. The outer harbor (14m draft) could capture 20-30% of this if operationalized with competitive terminal operators. However, hinterland connectivity is the binding constraint: single-track rail and congested NH-44 cap effective throughput. The Sterlite Copper closure (2018) removed the port\'s largest single cargo customer (1.5 MT copper concentrate). Replacement cargo: renewable energy equipment (wind turbines for Tirunelveli/Kanyakumari wind farms) is a growing segment.'
      }
    },
    {
      name: 'Kattupalli Port',
      throughput: '15-20 MT',
      type: 'Private Port (Adani Ports)',
      icon: '🔧',
      established: 2013,
      notes: 'Private port operated by Adani Ports. Combines container terminal with L&T\'s shipbuilding facility. Growing rapidly.',
      tier: {
        K: 'Kattupalli is a newer port near Chennai run by a private company (Adani). It\'s special because right next to the port, there\'s a shipyard where they actually BUILD ships! It\'s like having a car factory next to a highway.',
        T: 'Kattupalli Port (2013) is a private port operated by Adani Ports, located 25 km north of Chennai. It started as L&T\'s shipbuilding facility and expanded into cargo handling. It handles 15-20 MT and is growing fast — taking market share from Chennai Port with better efficiency and lower turnaround times.',
        V: 'Kattupalli Port is TN\'s fast-growing private port (Adani Ports). At 15-20 MT, it offers competitive turnaround times (12-18 hrs vs 36-48 hrs at Chennai Port) and modern infrastructure. Adjacent L&T shipyard builds defence vessels (including INS Chennai). The port targets 50 MT capacity by 2028.',
        W: 'Kattupalli: 15-20 MT (FY24), operated by Adani Ports (acquired from L&T in 2021 for ₹12,000 Cr). Container capacity: 1.8M TEU. Berths: 6 (expandable to 12). Draft: 16.5m (can handle 14,000 TEU vessels). Adjacent L&T Defence shipyard: ₹5,000 Cr orderbook (navy frigates, coast guard vessels). Competitive advantage: integrated rail connectivity, no urban congestion, deep draft. Threat to Chennai Port market share.',
        E: 'Kattupalli represents the private port model\'s structural advantage: faster capex cycles, performance-linked operations, and deep-draft infrastructure. Adani\'s ₹20,000 Cr expansion plan could make it TN\'s largest port by 2030, replicating the Mundra model. This creates a policy tension: private port growth cannibalizes government-owned Chennai Port revenue, but improves overall state logistics efficiency. L&T shipyard adjacency is unique — only Indian port with co-located shipbuilding. Defence orders provide baseload revenue independent of trade cycles.'
      }
    }
  ];

  // ── FDI OVERVIEW ──────────────────────────────────────────
  var FDI_CUMULATIVE = '$40-42B (Apr 2000 – Mar 2024)';
  var FDI_RANK = '3rd or 4th among Indian states';

  // ── FDI SECTOR BREAKDOWN ──────────────────────────────────
  var FDI_SECTORS = [
    { sector: 'Automobile & Auto Components', share: '25-30%', color: '#3498DB', value: '$10-12.5B' },
    { sector: 'IT / ITES / Software', share: '15-20%', color: '#2ECC71', value: '$6-8.5B' },
    { sector: 'Electronics & Hardware', share: '10-15%', color: '#E74C3C', value: '$4-6.3B' },
    { sector: 'Financial Services', share: '8-10%', color: '#F39C12', value: '$3.2-4.2B' },
    { sector: 'Chemicals & Petrochemicals', share: '5-8%', color: '#9B59B6', value: '$2-3.4B' },
    { sector: 'Pharmaceuticals', share: '3-5%', color: '#1ABC9C', value: '$1.2-2.1B' },
    { sector: 'Textiles', share: '3-4%', color: '#E67E22', value: '$1.2-1.7B' },
    { sector: 'Construction & Real Estate', share: '3-5%', color: '#34495E', value: '$1.2-2.1B' },
    { sector: 'Renewable Energy', share: '3-5%', color: '#27AE60', value: '$1.2-2.1B' },
    { sector: 'Others (Services, Food, Logistics)', share: '10-15%', color: '#95A5A6', value: '$4-6.3B' }
  ];

  // ── TOP 10 FDI INVESTMENTS ────────────────────────────────
  var FDI_TOP_INVESTMENTS = [
    {
      rank: 1,
      company: 'Hyundai Motor India',
      sector: 'Automobiles',
      amount: '$4B+ cumulative',
      period: '1996 onwards',
      country: '🇰🇷',
      location: 'Sriperumbudur, Kancheepuram',
      employees: '~20,000 direct + 100,000 indirect',
      tier: {
        K: 'Hyundai came to Tamil Nadu in 1996 and built a HUGE car factory near Chennai. It was one of the first big foreign companies to make cars in India. Today, every 2nd or 3rd Hyundai car you see on Indian roads was made right here in Tamil Nadu! They\'ve invested over $4 billion.',
        T: 'Hyundai\'s Sriperumbudur plant is one of the largest car factories in the world — making 7.5 lakh cars/year (i10, i20, Creta, Venue, Verna). It\'s TN\'s single largest FDI investor at $4B+. The Hyundai ecosystem employs 1.2 lakh people (direct + indirect). Their 2024 IPO valued India operations at $19 billion — more than many Indian auto companies!',
        V: 'Hyundai Motor India is TN\'s anchor FDI investor. Since 1996, $4B+ invested in Sriperumbudur with 7.5 lakh units/year capacity across two plants. Exports 25-30% of production to 88 countries. The Hyundai supply chain spawned 400+ ancillary units in the Sriperumbudur-Oragadam belt, creating India\'s densest auto cluster.',
        W: 'Hyundai India: $4B+ FDI, 2 plants at Sriperumbudur (750K units/year). Revenue: ₹70,000+ Cr (FY24). Export: 1.5L units to 88 countries. IPO Oct 2024: valued at ₹1.6L Cr ($19B) — India\'s largest IPO. Employment: 20K direct + 100K supply chain. Multiplier impact: every Hyundai direct job creates 5-6 indirect jobs. EV transition: committed ₹6,180 Cr at GIM 2024 for EV and battery plant. TN captured this investment due to port proximity, skilled labor, and 1996 first-mover relationship.',
        E: 'Hyundai\'s 1996 investment was the inflection point for TN\'s industrialization — it demonstrated that a southern state could compete with Maharashtra/Gujarat for global auto FDI. The cascading effect: Renault-Nissan (2008), Daimler (2008), BMW (2007), Ford (1995) all followed. Hyundai\'s supply chain depth (400+ vendors within 100 km radius) creates extreme lock-in — relocation cost estimated at $2B+. IPO valuation of $19B validates TN\'s industrial ecosystem. Key risk: Hyundai EV roadmap centers on Ulsan (Korea) for battery cells — TN plant may remain assembly-only for EVs unless cell manufacturing is localized.'
      }
    },
    {
      rank: 2,
      company: 'Renault-Nissan Alliance',
      sector: 'Automobiles',
      amount: '~$1.5B',
      period: '2008-2010',
      country: '🇫🇷🇯🇵',
      location: 'Oragadam, Kancheepuram',
      employees: '~8,000 direct + 40,000 indirect',
      tier: {
        K: 'Two car companies from France (Renault) and Japan (Nissan) teamed up to build a big car factory in Oragadam, near Chennai. They make the Renault Kwid, Kiger, and Nissan Magnite here. Together, they invested about $1.5 billion!',
        T: 'The Renault-Nissan alliance operates a shared plant in Oragadam with 4.8 lakh units/year capacity. It makes cars for both brands on the same assembly line — a rare global example of platform sharing. The factory produces the Renault Kwid, Kiger, Triber and Nissan Magnite. Exports go to 100+ countries across Africa, ASEAN, and Latin America.',
        V: 'The Renault-Nissan Oragadam plant ($1.5B investment) produces 4.8 lakh units/year on a shared CMF-A platform. It\'s one of the alliance\'s global export hubs, shipping to 100+ countries. However, the alliance has underperformed in India — combined market share is <5% despite large capacity. Nissan\'s future in India depends on export volumes.',
        W: 'Renault-Nissan: $1.5B, Oragadam plant (480K capacity, utilization ~50%). Revenue: ₹12,000-15,000 Cr. Platform: CMF-A (shared). Export: 60% of production (Africa, ASEAN, Latin America, Middle East). Challenge: low domestic market share (~4% combined) makes India operations dependent on export viability. Nissan exploring EV production at Oragadam. Supply chain: 200+ local vendors. Land bank: 640 acres — significant expansion potential.',
        E: 'Renault-Nissan illustrates the risk of FDI dependent on export-model economics. Domestic market share stagnation (<5%) means fixed costs are recovered through exports to low-margin markets (Africa: $5,000-8,000 ASP vehicles). The alliance is strategically important because Oragadam is designated as a global export hub for sub-$10K cars. If Nissan exits India (perpetual rumor), the plant becomes a pure Renault contract manufacturing facility — lower multiplier effect. Upside: EV platform development for emerging markets could anchor next decade\'s investment.'
      }
    },
    {
      rank: 3,
      company: 'Foxconn (Hon Hai)',
      sector: 'Electronics',
      amount: '~$1.5B+',
      period: '2006 onwards',
      country: '🇹🇼',
      location: 'Sriperumbudur, Kancheepuram',
      employees: '~40,000+',
      tier: {
        K: 'Foxconn is the company that makes iPhones! They have a big factory in Sriperumbudur where 40,000+ workers assemble smartphones. When your parents buy an iPhone "Made in India" — it was probably made right here in Tamil Nadu!',
        T: 'Foxconn is the world\'s largest electronics manufacturer (they make iPhones for Apple). Their Sriperumbudur plant assembles iPhone 15 and iPhone 16 models for domestic sale and export. Starting with Nokia phones in 2006, Foxconn now employs 40,000+ workers in TN — mostly young women. They committed ₹5,000+ Cr more at GIM 2024.',
        V: 'Foxconn\'s $1.5B+ TN investment is the cornerstone of India\'s "Make in India" electronics push. The Sriperumbudur facility assembles premium iPhones (including Pro models from 2024) for domestic and export markets. Apple\'s India iPhone production exceeded $14B in FY24, with TN factories handling the majority. Foxconn employs 40,000+ workers, making it one of TN\'s largest private employers.',
        W: 'Foxconn TN: $1.5B+ invested, 40K+ employees across 3 facilities in Sriperumbudur. iPhone assembly: 15/16 series including Pro models (from 2024). Exports: $3-4B (FY24 estimate). PLI benefits: ₹4,000-5,000 Cr over scheme period. Apple stipulates 60%+ local value addition by 2027 — driving component ecosystem. GIM 2024: ₹5,000+ Cr additional commitment for component manufacturing and potential chip packaging. Workforce: 70% women (18-25 age group), avg wage ₹15,000-20,000/month.',
        E: 'Foxconn\'s TN operations represent the first credible test of India\'s ability to integrate into global electronics GVCs. The value capture problem is real — iPhone assembly adds ~$7-10 per unit ($900 retail). But the strategic objective is ecosystem creation: once Foxconn scales, Tier-1 suppliers follow (Luxshare, BYD Electronic, Jabil). The 40K workforce is significant but turnover is 15-20% annually (repetitive assembly work, low wages). Key policy question: will India/TN move beyond assembly to component manufacturing? PLI Phase 2 incentivizes PCBA, display, and camera module — this is where real value capture happens.'
      }
    },
    {
      rank: 4,
      company: 'Samsung Electronics',
      sector: 'Electronics',
      amount: '~$1B+',
      period: '2007 onwards',
      country: '🇰🇷',
      location: 'Sriperumbudur, Kancheepuram',
      employees: '~10,000',
      tier: {
        K: 'Samsung — the company that makes Galaxy phones, TVs, and refrigerators — has a factory in Tamil Nadu! They\'ve invested over $1 billion here. Many Samsung products you see in India are made right in Sriperumbudur, near Chennai.',
        T: 'Samsung\'s Sriperumbudur factory produces smartphones, TVs, refrigerators, and washing machines. With $1B+ invested, it\'s Samsung\'s key Indian manufacturing hub alongside Noida. The factory shifted from low-end phones to Galaxy A-series and M-series smartphones. Samsung also has a R&D center in Chennai (Samsung R&D Institute).',
        V: 'Samsung Electronics invested $1B+ in TN across manufacturing (Sriperumbudur) and R&D (Chennai). The manufacturing plant produces smartphones, consumer electronics, and appliances. Samsung R&D Institute India-Chennai (SRI-C) employs 2,000+ engineers working on AI, IoT, and 5G technologies. Combined employment: 10,000+.',
        W: 'Samsung TN: $1B+ invested. Manufacturing: Sriperumbudur (smartphones, TVs, refrigerators, washing machines). R&D: SRI-Chennai (2,000 engineers — AI, 5G, IoT). Revenue from TN operations: ₹15,000-20,000 Cr. Samsung lost India smartphone market leadership to Xiaomi (2018) but regained share through Galaxy A/M series (manufactured in TN + Noida). PLI scheme: approved for smartphone and IT hardware production. Key challenge: competition from Chinese brands manufacturing locally.',
        E: 'Samsung\'s India strategy is dual: manufacturing for domestic consumption + R&D for global product development. The TN R&D center (SRI-C) is strategically significant — it contributes to Samsung\'s global AI and Tizen OS development, creating high-value employment (avg ₹15-25 LPA). The manufacturing side faces margin pressure from Chinese brands (Xiaomi, Vivo, Oppo) who also manufacture locally. Samsung\'s response: premiumization (Galaxy S/Z series) and backward integration (display panels, semiconductor assembly). The R&D center is stickier than manufacturing — knowledge workers create ecosystem effects (startup mentoring, university linkages).'
      }
    },
    {
      rank: 5,
      company: 'Tata Electronics (Semiconductor)',
      sector: 'Semiconductors / Electronics',
      amount: '~$1.4B',
      period: '2023-24',
      country: '🇮🇳',
      location: 'Jagirhosur (Karnataka) + TN supply chain',
      employees: '~5,000 (projected)',
      tier: {
        K: 'Tata — one of India\'s oldest and most trusted companies — is building a huge factory to make tiny chips that go inside phones, cars, and computers. These chips are super important because they make all electronics work. It\'s a $1.4 billion investment!',
        T: 'Tata Electronics is setting up India\'s first semiconductor ATMP (Assembly, Testing, Marking, Packaging) plant near TN. Semiconductors are the "brain" of every electronic device. India currently imports 100% of its chips. This $1.4B investment is the first step toward "Made in India" chips, with technology from Powerchip Semiconductor (Taiwan).',
        V: 'Tata Electronics\' ~$1.4B semiconductor ATMP facility is a landmark investment for South India\'s electronics ecosystem. While the plant is in Jagirhosur (Karnataka), it directly serves TN\'s massive electronics assembly cluster (Foxconn, Pegatron, Samsung). The facility will package chips for automotive, consumer electronics, and industrial applications — reducing India\'s $10B+ chip import bill.',
        W: 'Tata Electronics: $1.4B, ATMP facility. Technology partner: PSMC (Taiwan). Phase 1: 48M chips/day packaging capacity. Products: power management ICs, analog chips, sensors for auto/consumer electronics. India Semiconductor Mission subsidy: 50% of capex. Strategic significance: first step in semiconductor value chain localization. TN nexus: Foxconn, Pegatron, Samsung in TN are end-consumers of packaged chips. Tata Group\'s GIM 2024 commitment: ₹80,000+ Cr across electronics, EV, and semiconductors.',
        E: 'Tata\'s ATMP investment is strategically correct but insufficient — ATMP captures 8-12% of semiconductor value chain (vs 50-60% for fabrication). India needs a foundry (TSMC/Samsung equivalent) for true semiconductor sovereignty. However, the ATMP-first strategy mirrors Taiwan\'s 1970s approach (packaging → testing → design → fabrication over 30 years). TN\'s role: providing the demand anchor (electronics assembly requires 1B+ chips/year in TN alone). The real opportunity for TN is fabless chip design — leveraging Chennai/Coimbatore\'s engineering talent for VLSI design, which captures 30-40% of chip value.'
      }
    },
    {
      rank: 6,
      company: 'Ford India',
      sector: 'Automobiles',
      amount: '~$1B cumulative',
      period: '1995-2022 (now closed)',
      country: '🇺🇸',
      location: 'Maraimalai Nagar, Chengalpattu',
      employees: '~4,000 (at peak, now zero)',
      tier: {
        K: 'Ford, the famous American car company, had a factory near Chennai for 27 years. They made the Ford Figo, EcoSport, and other cars here. But in 2022, they decided to close it because they weren\'t selling enough cars in India. It was sad for the workers who lost their jobs.',
        T: 'Ford invested ~$1B in India (Maraimalai Nagar, TN + Sanand, Gujarat) starting 1995. They made the Ikon, Figo, EcoSport, and Endeavour. But Ford\'s India market share never exceeded 3%, and they lost $2B cumulatively. In Sept 2022, Ford shut both plants. 4,000 TN workers lost jobs. The plant was acquired by Tata Group in 2024.',
        V: 'Ford India\'s closure ($1B invested, 1995-2022) is a cautionary tale. Despite a quality product lineup, Ford never cracked India\'s price-sensitive market (peak share: 3%). The Maraimalai Nagar plant was a state-of-the-art facility that exported EcoSport to 50+ countries. After closure, Tata Motors acquired the plant for EV manufacturing — the infrastructure lives on.',
        W: 'Ford India: ~$1B invested, Maraimalai Nagar (200K capacity) + Sanand (240K). Cumulative loss: $2B. Peak revenue: ₹22,000 Cr (FY19). Exit: Sep 2022. Causes: sub-scale volumes (3% share), lack of sub-₹5L product, slow SUV pivot, global restructuring under Jim Farley. Aftermath: 4,000 direct + 20,000 indirect job losses. Maraimalai Nagar acquired by Tata Passenger Electric Mobility (2024) for Curvv EV production. Lesson: FDI requires domestic market fit, not just export viability.',
        E: 'Ford\'s India exit reveals a structural truth: India\'s auto market is brutally competitive at the bottom (Maruti/Hyundai duopoly in <₹10L) and rewards only brands with 10%+ market share (fixed cost coverage). Ford\'s mistake was over-indexing on global platforms (adapted, not designed for India) while Hyundai/Maruti co-developed India-specific cars. The silver lining: Ford\'s plant, workforce skills, and supplier ecosystem were absorbed by Tata EV — FDI created durable industrial capacity even after the investor left. Policy insight: state governments should structure FDI incentives with clawback clauses for premature exit.'
      }
    },
    {
      rank: 7,
      company: 'Daimler India Commercial Vehicles',
      sector: 'Commercial Vehicles',
      amount: '~$700M',
      period: '2008-2012',
      country: '🇩🇪',
      location: 'Oragadam, Kancheepuram',
      employees: '~3,500',
      tier: {
        K: 'Daimler is the company that makes Mercedes-Benz cars and big trucks! They built a truck factory in Oragadam near Chennai. The trucks and buses made here are special — they\'re used for carrying goods and people all over India and in other countries too.',
        T: 'Daimler India (parent of Mercedes-Benz) invested ~$700M in a commercial vehicle plant at Oragadam. It produces BharatBenz trucks and buses for the Indian market plus FUSO trucks for export. It\'s Daimler\'s largest bus and truck facility outside Germany. India-made BharatBenz trucks compete with Tata and Ashok Leyland.',
        V: 'Daimler\'s $700M Oragadam facility is their largest commercial vehicle plant outside Germany. It produces BharatBenz trucks (9-49 tonne), buses, and FUSO brand vehicles for export to Africa and ASEAN. The investment includes an R&D center (DICV Engineering) with 500+ engineers. BharatBenz has captured ~5-6% of India\'s commercial vehicle market.',
        W: 'Daimler India CV: $700M, Oragadam. Capacity: 72,000 trucks + 3,000 buses/year. BharatBenz market share: 5-6% (MHCV). Exports: FUSO trucks to 50+ markets (Africa, ASEAN, Middle East). R&D: 500 engineers, contributing to global CV platform development. Revenue: ₹8,000-10,000 Cr. Localization: 90%+ for domestic models. Key advantage: only global CV OEM manufacturing in TN — positions Chennai as CV design/export hub alongside Ashok Leyland (Ennore) and Caterpillar (Thiruvallur).',
        E: 'Daimler India validates TN\'s ecosystem for heavy engineering FDI. The 90% localization ratio means the supply chain is deeply rooted — 200+ Tier-1/Tier-2 suppliers in the Oragadam belt. Strategic value of the R&D center is underappreciated: DICV engineers contribute to Daimler\'s global truck platform, creating high-value jobs (avg ₹12-18 LPA). Electrification in CVs is slower than passenger vehicles — BharatBenz has runway until 2035 before EV disruption. Export potential to Africa is significant: Indian CVs are 30-40% cheaper than European equivalents with improving quality perception.'
      }
    },
    {
      rank: 8,
      company: 'Caterpillar',
      sector: 'Heavy Machinery / Engineering',
      amount: '$500M+ cumulative',
      period: '2000s onwards',
      country: '🇺🇸',
      location: 'Thiruvallur',
      employees: '~5,000',
      tier: {
        K: 'Caterpillar makes the gigantic yellow machines you see at construction sites — excavators, bulldozers, and earth movers! They have a factory near Chennai that makes these machines. When you see a big road being built, the machines might have been made in Tamil Nadu!',
        T: 'Caterpillar, the American heavy equipment giant, invested $500M+ in TN with manufacturing and technology centers. They make excavators, backhoe loaders, and off-highway trucks at their Thiruvallur plant. Caterpillar also has a major technology center in Chennai employing engineers who design products for global markets.',
        V: 'Caterpillar\'s $500M+ TN investment includes manufacturing (Thiruvallur — excavators, backhoe loaders) and a Global Technology Center (Chennai — 3,000+ engineers). India is Caterpillar\'s largest engineering center outside the US. Products are exported to Africa, Middle East, and ASEAN. The Chennai tech center designs components used in Caterpillar machines worldwide.',
        W: 'Caterpillar India: $500M+. Manufacturing: Thiruvallur (excavators, backhoe loaders, off-highway trucks). Technology center: Chennai (3,000+ engineers — design, simulation, digital solutions for global product lines). Combined employees: ~5,000. India market position: #2 in excavators (after Tata Hitachi). Export ratio: 30-40%. Localization: 80%+. Revenue: ₹5,000-7,000 Cr. The tech center contributes to $0.5B+ in global R&D output.',
        E: 'Caterpillar\'s TN footprint exemplifies the ideal FDI model: manufacturing + R&D co-location. The Chennai technology center is a "GCC" (Global Capability Center) that creates high-value engineering jobs — these engineers design products sold globally, making Chennai an integral node in Caterpillar\'s global R&D network. The manufacturing side benefits from India\'s infrastructure boom (roads, metro, smart cities). Risk: cyclicality of construction equipment demand. Opportunity: Caterpillar\'s autonomous mining equipment and electrified machines could be engineered from Chennai — positioning TN in the future of heavy equipment.'
      }
    },
    {
      rank: 9,
      company: 'Pegatron',
      sector: 'Electronics',
      amount: '~$150-200M initial',
      period: '2021-22',
      country: '🇹🇼',
      location: 'Mahindra World City, Chengalpattu',
      employees: '~10,000',
      tier: {
        K: 'Pegatron is another company that makes iPhones — just like Foxconn! They set up a factory in Mahindra World City near Chennai in 2021. Now about 10,000 workers assemble iPhones there. Apple likes to have multiple factories so they can make phones faster.',
        T: 'Pegatron is Apple\'s 2nd largest iPhone assembler globally (after Foxconn). They set up in TN in 2021 as part of Apple\'s strategy to diversify beyond China. The Mahindra World City facility assembles iPhone SE and iPhone 14/15 models. Pegatron\'s entry was significant — it confirmed TN as Apple\'s India manufacturing hub.',
        V: 'Pegatron\'s $150-200M investment in Chengalpattu is Apple\'s China+1 strategy in action. The company is Apple\'s 2nd largest global contract manufacturer. The TN factory assembles iPhone SE and mainstream models, employing 10,000 workers. Pegatron committed ₹1,100 Cr at GIM 2024 for expansion — signaling long-term commitment to TN.',
        W: 'Pegatron: $150-200M initial, Mahindra World City (Chengalpattu). Apple PLI beneficiary. iPhone assembly: SE, mainstream models. Employees: 10,000 (80% women, avg age 22). GIM 2024: ₹1,100 Cr expansion for component sub-assembly. Apple\'s TN strategy: Foxconn (premium models), Pegatron (mainstream), Tata Electronics (acquired Wistron — entry/mid-range). Combined Apple production in India: $14B+ (FY24). TN share: ~60-65%.',
        E: 'Pegatron\'s entry completed Apple\'s manufacturing trifecta in India (Foxconn + Pegatron + Tata-Wistron). This mirrors Apple\'s China model where 3-4 assemblers compete for allocation — driving efficiency and de-risking supply. Pegatron\'s initial investment is small ($150-200M) but scales rapidly based on Apple allocation. The key metric is not investment quantum but production value: Pegatron\'s TN output likely exceeds $2-3B despite modest initial capex. Apple\'s supplier code mandates create labor standard spillovers — 80% women workforce with structured benefits is uncommon in Indian manufacturing.'
      }
    },
    {
      rank: 10,
      company: 'BMW India',
      sector: 'Automobiles (Luxury)',
      amount: '~$100M+',
      period: '2007 onwards',
      country: '🇩🇪',
      location: 'Mahindra World City, Chengalpattu',
      employees: '~1,500',
      tier: {
        K: 'BMW makes some of the fanciest cars in the world! They have an assembly plant near Chennai where they put together luxury cars like the BMW 3-Series, 5-Series, and X1. It\'s like building with really expensive LEGO — the parts come from Germany and are assembled here.',
        T: 'BMW has a CKD (Completely Knocked Down) assembly plant in Chennai since 2007. They import car parts from Germany and assemble them here — this allows BMW to avoid high import duties on fully-built cars. Models assembled: 3-Series, 5-Series, X1, X3, X5, and MINI Countryman. BMW also has a parts warehouse and training academy in Chennai.',
        V: 'BMW\'s $100M+ Chennai plant assembles 13+ models through CKD operations (parts imported, assembled locally). It\'s a low-investment, high-value model — BMW cars assembled here sell for ₹40L-₹2Cr+. While investment is modest, BMW\'s brand presence has made Chennai a luxury auto cluster alongside Mercedes (Pune). India is BMW\'s fastest-growing market globally.',
        W: 'BMW India: $100M+, CKD assembly at Mahindra World City. 13+ models assembled including EVs (iX, i7). Capacity: 14,000 units/year. Revenue: ₹12,000-15,000 Cr (FY24). Localization: 40-50% (CKD model). India sales: 14,000+ units (2024, record). BMW also assembles MINI brand. Training academy supplies skilled workforce to the broader TN auto ecosystem. Investment per unit sold: highest among TN auto FDI due to premium pricing.',
        E: 'BMW\'s TN investment is strategically modest ($100M) but punches above its weight in three dimensions: (1) brand signaling — BMW\'s presence attracts other German Mittelstand suppliers, (2) workforce upskilling — BMW\'s training academy creates globally-certified technicians who benefit the entire auto cluster, (3) EV bridgehead — BMW is assembling EVs (iX, i7) in Chennai, building EV assembly know-how. The CKD model limits direct economic impact (40-50% local content vs 90% for Hyundai) but serves as a pathway to deeper localization as India\'s luxury market scales beyond 50K units/year.'
      }
    }
  ];

  // ── GIM 2024 MAJOR ANNOUNCEMENTS ──────────────────────────
  var GIM_2024 = [
    {
      company: 'Tata Group',
      amount: '₹80,000+ Cr',
      sector: 'Electronics, EV, Semiconductor',
      notes: 'Includes Tata Electronics (iPhone assembly), Tata Motors (EV plant at former Ford facility), semiconductor packaging, and Titan expansion.'
    },
    {
      company: 'JSW Group',
      amount: '₹40,000 Cr',
      sector: 'Steel, Cement, Green Energy, Ports',
      notes: 'Diversified industrial investment across steel plant expansion, green hydrogen, and port infrastructure in southern TN.'
    },
    {
      company: 'Adani Group',
      amount: '₹30,000+ Cr',
      sector: 'Ports, Logistics, Data Centers, Green Energy',
      notes: 'Kattupalli Port expansion, data center at Ambattur, solar manufacturing, and logistics park development.'
    },
    {
      company: 'Ola Electric',
      amount: '₹7,614 Cr',
      sector: 'Electric Vehicles, Battery',
      notes: 'Expansion of EV manufacturing at Krishnagiri mega-factory and battery cell R&D. World\'s largest 2W EV factory.'
    },
    {
      company: 'Hyundai Motor India',
      amount: '₹6,180 Cr',
      sector: 'EV, Battery Assembly',
      notes: 'Electric vehicle production line and battery pack assembly at Sriperumbudur to meet India\'s EV transition targets.'
    },
    {
      company: 'Foxconn (Hon Hai)',
      amount: '₹5,000+ Cr',
      sector: 'Electronics, Components',
      notes: 'Expansion of iPhone assembly capacity, new component manufacturing facility, and exploration of chip packaging.'
    },
    {
      company: 'TVS Group',
      amount: '₹5,000+ Cr',
      sector: 'EV, Auto Components, Electronics',
      notes: 'TVS Motor EV expansion, TVS Electronics growth, and supply chain investments across Hosur-Chennai corridor.'
    },
    {
      company: 'Pegatron',
      amount: '₹1,100 Cr',
      sector: 'Electronics, iPhone Assembly',
      notes: 'Expansion of Mahindra World City facility for component sub-assembly and increased iPhone production capacity.'
    }
  ];

  // ── EXPOSE TO WINDOW ──────────────────────────────────────
  window.TradeFDI = {
    EXPORT_TOTAL: EXPORT_TOTAL,
    EXPORT_RANK: EXPORT_RANK,
    EXPORT_COMMODITIES: EXPORT_COMMODITIES,
    EXPORT_HISTORY: EXPORT_HISTORY,
    EXPORT_DESTINATIONS: EXPORT_DESTINATIONS,
    PORTS: PORTS,
    FDI_CUMULATIVE: FDI_CUMULATIVE,
    FDI_RANK: FDI_RANK,
    FDI_SECTORS: FDI_SECTORS,
    FDI_TOP_INVESTMENTS: FDI_TOP_INVESTMENTS,
    GIM_2024: GIM_2024
  };

})();
