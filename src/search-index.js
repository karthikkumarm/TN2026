/* ================================================================
 * TN Launchpad — Client-Side Search Index
 * ================================================================
 * Self-contained search module. No external dependencies.
 * Pre-baked content from all site sections:
 *   - 16 business ideas
 *   - 13 loan schemes
 *   - 7 license types
 *   - 174 manifesto schemes (4 parties × 7 batches)
 *   - 20+ startup ecosystem entries
 *   - 7 batch summaries
 *
 * Architecture: Tokenized full-text search with weighted scoring.
 *   Title match = 10 pts, keyword match = 3 pts, exact phrase = 25 pts bonus.
 *   All queries client-side, <5ms for full corpus.
 * ================================================================ */

(function(){
'use strict';

/* ── Type definitions ── */
var TYPES = {
  B: {name:'Business Idea',    icon:'\ud83c\udfe2', color:'#2ECC71'},
  L: {name:'Loan / Subsidy',   icon:'\ud83d\udcb0', color:'#3498DB'},
  X: {name:'License',          icon:'\ud83d\udccb', color:'#E67E22'},
  S: {name:'Election Scheme',  icon:'\ud83d\udcca', color:'#9B59B6'},
  E: {name:'TN Resource',      icon:'\ud83d\ude80', color:'#E74C3C'},
  G: {name:'Guide',            icon:'\ud83d\udcd6', color:'#C8922A'}
};

/* ── Verdict labels ── */
var VL = {I:'Include',C:'Conditional',E:'Exclude',R:'Review',U:'Unrated'};

/* ── Batch names & keywords ── */
var BN = ['','Women & Family Welfare','Education, Youth & Employment','Agriculture & Fishermen','Healthcare & Social Security','Housing & Infrastructure','Governance & Autonomy','Tamil Identity & Culture'];
var BK = ['','women family welfare childcare shg dbt gold saree marriage newborn lpg bus','education youth employment technology startup ai digital laptop naan mudhalvan neet stipend','agriculture farmers fishermen irrigation fishing paddy sugarcane msp pump cold storage organic','healthcare social security medical insurance pension dialysis medicine disability mental health drug alcohol','housing infrastructure urban transport roads airport buses electric smart city global','governance autonomy delimitation devolution state list court forms digital platform grievance corruption','tamil identity ecology culture heritage temple semmozhi palmyra keeladi jallikattu silambam siddha'];

/* ── Stars display ── */
function starsText(n){ var s=''; for(var i=0;i<5;i++) s+= i<n?'\u2605':'\u2606'; return s; }

/* ═══════════════════════════════════════════════════════════
   STATIC DOCS: [type, title, keywords, snippet, url]
   ═══════════════════════════════════════════════════════════ */
var STATIC = [
/* ── Business Ideas (16) ── */
['B','Packaged Food / Snacks Unit','food processing banana coconut turmeric snacks chips murukku fssai odop manufacturing cftri packaged','₹2L–₹15L capital · 25–45% margin · Food Processing sector','TN_2026_BusinessGuide.html'],
['B','Cloud Kitchen / Home Catering','cloud kitchen home catering food delivery zomato swiggy chettinad biryani restaurant','₹1L–₹5L capital · 30–50% margin · Chennai #3 food delivery market','TN_2026_BusinessGuide.html'],
['B','Textile / Garment Manufacturing Unit','textile garment manufacturing tiruppur karur apparel cotton export knitting dyeing fashion','₹5L–₹50L capital · 15–35% margin · Tiruppur ₹35K Cr exports hub','TN_2026_BusinessGuide.html'],
['B','IT Services / Software Development','it services software development saas chennai technology freelancing web app mobile digital outsourcing','₹1L–₹10L capital · 40–70% margin · Chennai SaaS Capital of India','TN_2026_BusinessGuide.html'],
['B','Organic Farming & Agri-Business','organic farming agriculture nilgiris tea salem turmeric thanjavur rice paddy agribusiness natural','₹1L–₹10L capital · 30–60% margin · Rich agro-climatic diversity','TN_2026_BusinessGuide.html'],
['B','Beauty Salon / Wellness Center','beauty salon wellness spa parlour skincare haircut grooming urban company tahdco training','₹2L–₹20L capital · 40–65% margin · TAHDCO free training available','TN_2026_BusinessGuide.html'],
['B','Coaching / Tutoring Center','coaching tutoring education neet jee tnpsc upsc tuition academy classes online offline','₹50K–₹5L capital · 50–75% margin · 526 engineering colleges demand','TN_2026_BusinessGuide.html'],
['B','Auto Components / Precision Manufacturing','auto components manufacturing precision cnc detroit asia hyundai tvs ashok leyland automobile spare parts','₹10L–₹1Cr capital · 15–30% margin · Detroit of Asia cluster','TN_2026_BusinessGuide.html'],
['B','E-commerce / D2C Brand','ecommerce dropshipping d2c brand online retail kanchipuram silk gi tagged products amazon flipkart','₹50K–₹5L capital · 20–50% margin · GI-tagged products advantage','TN_2026_BusinessGuide.html'],
['B','Solar Panel Installation & Maintenance','solar panel installation maintenance renewable energy teda tangedco pm surya ghar green rooftop','₹3L–₹30L capital · 20–35% margin · TEDA + PM Surya Ghar subsidies','TN_2026_BusinessGuide.html'],
['B','Diagnostic Lab / Pharmacy / Clinic','healthcare diagnostics lab pharmacy clinic medical testing pathology cmchis medical tourism hospital','₹5L–₹50L capital · 30–60% margin · Medical tourism capital','TN_2026_BusinessGuide.html'],
['B','Last-Mile Logistics / Delivery','logistics delivery last mile courier transport freight warehouse chennai port namakkal trucking ecommerce','₹2L–₹20L capital · 15–30% margin · Chennai 2nd busiest port','TN_2026_BusinessGuide.html'],
['B','Handicrafts & Traditional Arts','handicrafts traditional arts thanjavur painting kanchipuram silk bronze stone carving gi tag heritage culture craft','₹50K–₹5L capital · 40–70% margin · 10+ GI tags in TN','TN_2026_BusinessGuide.html'],
['B','Construction Materials & Ready-Mix','construction materials ready mix concrete sand msand cement block brick pmay housing building','₹5L–₹50L capital · 15–30% margin · M-sand boom after river sand ban','TN_2026_BusinessGuide.html'],
['B','Printing / Digital Publishing','printing digital publishing offset sivakasi content design packaging label media press','₹2L–₹30L capital · 25–45% margin · Sivakasi 60% of India offset printing','TN_2026_BusinessGuide.html'],
['B','Homestay / Heritage Tourism / Travel','tourism hospitality homestay heritage travel ooty kodaikanal mahabalipuram rameswaram thanjavur temple unesco pilgrimage','₹2L–₹30L capital · 30–55% margin · 248M tourists (highest in India)','TN_2026_BusinessGuide.html'],

/* ── Loan Schemes (13) ── */
['L','MUDRA — Shishu','mudra shishu micro loan collateral free bank nbfc mfi 50000 small business pradhan mantri','Up to ₹50,000 · Collateral-free · Banks / MFIs / NBFCs','TN_2026_BusinessGuide.html'],
['L','MUDRA — Kishor','mudra kishor expansion loan bank nbfc 5 lakh msme existing business growth','₹50K–₹5L · For expanding micro-enterprises · Banks / NBFCs','TN_2026_BusinessGuide.html'],
['L','MUDRA — Tarun / TarunPlus','mudra tarun plus scale up loan commercial bank 20 lakh established micro unit','₹5L–₹20L · For established units scaling up · Commercial Banks','TN_2026_BusinessGuide.html'],
['L','PMEGP — Employment Generation Programme','pmegp prime minister employment generation programme kvic kvib dic subsidy 50 lakh 20 manufacturing service new enterprise','Up to ₹50L (mfg) / ₹20L (service) · 15–35% subsidy · KVIC/DIC','TN_2026_BusinessGuide.html'],
['L','Stand-Up India','standup india sc st women greenfield enterprise scheduled commercial bank 10 lakh 1 crore collateral','₹10L–₹1Cr · SC/ST and/or Women · Scheduled Commercial Banks','TN_2026_BusinessGuide.html'],
['L','CGTMSE — Credit Guarantee Fund','cgtmse credit guarantee fund trust sidbi goi collateral free msme loan 5 crore guarantee','Guarantee up to ₹5Cr (collateral-free) · SIDBI + GoI Trust','TN_2026_BusinessGuide.html'],
['L','NEEDS — TN Entrepreneur Scheme','needs new entrepreneur enterprise development scheme tamil nadu tn govt dic bank 50 lakh 25 subsidy interest subvention','Up to ₹50L · 25% capital subsidy + 3% interest subvention · TN Govt','TN_2026_BusinessGuide.html'],
['L','TIIC — TN Industrial Investment Corp','tiic tamil nadu industrial investment corporation msme term loan 5 lakh 10 crore state government','₹5L–₹10Cr · Term loans for TN MSMEs · TIIC (TN Govt)','TN_2026_BusinessGuide.html'],
['L','TAHDCO — SC/ST Business Loans','tahdco adi dravidar tribal welfare business loan subsidy sc st entrepreneur 50000 10 lakh','₹50K–₹10L · 4–6% interest · SC/ST entrepreneurs · TAHDCO','TN_2026_BusinessGuide.html'],
['L','PMFME — Micro Food Processing','pmfme pm formalization micro food processing enterprise mofpi subsidy 10 lakh 35 percent food','Up to ₹10L · 35% subsidy · Micro food processing units','TN_2026_BusinessGuide.html'],
['L','PM Vishwakarma — Artisan Support','pm vishwakarma traditional artisan support momsme bank 1 lakh 2 tranches 5 percent interest 18 trades','₹1L + ₹2L tranches · 5% interest · 18 traditional trades','TN_2026_BusinessGuide.html'],
['L','TANSEED — TN Startup Seed Fund','tanseed tamil nadu startup seed fund grant equity startuptn tansim dpiit recognized','₹2L–₹10L · Seed grants/equity · DPIIT-recognized TN startups','TN_2026_BusinessGuide.html'],
['L','DAY-NULM — Self-Employment Programme','day nulm self employment programme mohua bank urban poor shg interest subsidized 2 lakh 10 lakh','Individual up to ₹2L; SHG up to ₹10L · Urban poor · MoHUA','TN_2026_BusinessGuide.html'],

/* ── Licenses (7) ── */
['X','Udyam Registration (MSME)','udyam msme registration free micro small medium enterprise government aadhaar pan mandatory','Free · Instant · MoMSME · Mandatory for all MSMEs','TN_2026_BusinessGuide.html'],
['X','GST Registration','gst goods services tax registration cbic state department threshold 40 lakh 20 lakh turnover','Free · 3–7 days · CBIC · Required above ₹40L turnover','TN_2026_BusinessGuide.html'],
['X','FSSAI License / Registration','fssai food safety standards authority india license registration food business operator hygiene','₹100–₹7,500 · 7–30 days · Mandatory for all food businesses','TN_2026_BusinessGuide.html'],
['X','Trade License / Shop & Establishment','trade license shop establishment city corporation municipality local body commercial premises','₹500–₹5,000 · 7–15 days · City Corporation / Municipality','TN_2026_BusinessGuide.html'],
['X','Fire NOC','fire noc no objection certificate tn fire rescue services safety building commercial industrial','₹1,000–₹10,000 · 15–30 days · TN Fire & Rescue Services','TN_2026_BusinessGuide.html'],
['X','Pollution Consent (CTE/CTO)','tnpcb pollution consent cte cto tamil nadu pollution control board environment manufacturing industrial','₹5,000–₹50,000+ · 30–90 days · TN Pollution Control Board','TN_2026_BusinessGuide.html'],
['X','IEC — Import Export Code','iec import export code dgft ministry commerce international trade foreign','Free · 2–3 days · DGFT · Required for all import/export','TN_2026_BusinessGuide.html'],

/* ── TN Startup Ecosystem (20) ── */
['E','StartupTN — TN Startup Hub','startuptn startup tamil nadu recognition registration incubator accelerator dpiit innovation ecosystem','TN govt startup platform · DPIIT recognition · Grants & mentorship','TN_2026_BusinessGuide.html'],
['E','TANSIM — TN Startup & Innovation Mission','tansim startup innovation mission government policy framework incubator network seed fund ecosystem','State nodal agency for startup ecosystem · 50+ incubators · Policy','TN_2026_BusinessGuide.html'],
['E','GUIDANCE Bureau — Single Window','guidance bureau single window clearance investment facilitation industry approval permission foreign direct','Single-window for all industrial approvals · FDI facilitation · 21-day target','TN_2026_BusinessGuide.html'],
['E','SIPCOT — Industrial Parks','sipcot state industries promotion corporation industrial park estate plot land manufacturing sez special economic zone','110+ industrial parks · Land allotment · Infrastructure · Tax benefits','TN_2026_BusinessGuide.html'],
['E','TIDCO — Industrial Development Corporation','tidco tamil nadu industrial development corporation joint venture strategic industry mega project','Joint ventures · Mega projects · Strategic industries · TN Govt','TN_2026_BusinessGuide.html'],
['E','IIT Madras Research Park & Incubation','iit madras research park incubation cell iitm technology startup deep tech hardware ai','India\'s largest university research park · 200+ companies · Deep tech','TN_2026_BusinessGuide.html'],
['E','PSG-STEP — Coimbatore Incubator','psg step science technology entrepreneurship park coimbatore incubator manufacturing hardware iot','PSG College tech incubator · Hardware + IoT focus · Coimbatore','TN_2026_BusinessGuide.html'],
['E','Villgro — Social Enterprise Incubator','villgro social enterprise incubator impact startup healthcare agritech cleantech funding mentorship','India\'s oldest social enterprise incubator · Healthcare + AgriTech','TN_2026_BusinessGuide.html'],
['E','EDII-TN — Entrepreneurship Development','edii entrepreneurship development institute india training programme skill capacity building','Entrepreneurship training · Capacity building · Faculty development','TN_2026_BusinessGuide.html'],
['E','Naan Mudhalvan — Skills Platform','naan mudhalvan skills training upskilling youth employability digital platform government','5L+ trainees/yr · Industry-linked skilling · Digital certificates','TN_2026_BusinessGuide.html'],
['E','District Industries Centres (DICs)','dic district industries centre msme registration support guidance subsidy application local office','38 districts · MSME support · Subsidy applications · Local guidance','TN_2026_BusinessGuide.html'],
['E','CII Tamil Nadu — Industry Association','cii confederation indian industry tamil nadu networking events advocacy policy industry partnership','Industry networking · Policy advocacy · Events · Partnerships','TN_2026_BusinessGuide.html'],
['E','NASSCOM CoE — IT/AI Innovation','nasscom centre excellence it ai artificial intelligence machine learning data science chennai','AI/ML innovation centre · IT industry support · Chennai','TN_2026_BusinessGuide.html'],
['E','Tamil Nadu e-Governance Agency (TNeGA)','tnega e governance agency digital services government technology platform online citizen','Digital govt services platform · Technology backbone · Online services','TN_2026_BusinessGuide.html'],
['E','MSME-DFO Chennai — Facilitation Office','msme dfo development facilitation office chennai central government support registration guidance export','Central MSME support · Cluster development · Export guidance','TN_2026_BusinessGuide.html'],
['E','TN Skill Development Corporation','tnsdc skill development corporation vocational training industrial training institute iti','Vocational training · ITI network · Industry partnerships','TN_2026_BusinessGuide.html'],
['E','FICCI Tamil Nadu','ficci federation indian chambers commerce industry tamil nadu business council trade','Business council · Trade facilitation · Industry events · TN chapter','TN_2026_BusinessGuide.html'],
['E','Madras Atomic Power Station — Industrial Zone','map kalpakkam atomic power station industrial zone heavy industry engineering nuclear','Heavy industry cluster · Engineering hub · Kalpakkam industrial zone','TN_2026_BusinessGuide.html'],
['E','ELCOT — Electronics Corporation','elcot electronics corporation tamil nadu it park hardware electronic manufacturing procurement','IT Parks · Hardware manufacturing · Electronics procurement · TN Govt','TN_2026_BusinessGuide.html'],
['E','Tidel Park — IT Infrastructure','tidel park it infrastructure chennai coimbatore office space technology company','Premium IT office space · Chennai + Coimbatore · Technology hub','TN_2026_BusinessGuide.html'],

/* ── Guide Sections (8) ── */
['G','How to Start a Business in Tamil Nadu','how start business tamil nadu step guide registration process first time entrepreneur beginner','Complete 8-step roadmap from idea to revenue','TN_2026_BusinessGuide.html'],
['G','Government Loan Comparison Guide','compare government loan scheme mudra pmegp standup needs tiic which best eligibility amount','Side-by-side comparison of 13 loan schemes with eligibility','TN_2026_BusinessGuide.html'],
['G','License & Registration Checklist','license registration checklist mandatory required documents process timeline cost authority','Which licenses you need based on your business type','TN_2026_BusinessGuide.html'],
['G','Manifesto Analysis — 4 Party Comparison','manifesto analysis comparison dmk admk tvk ntk party scorecard fiscal sustainability election 2026','Party scorecards · Fiscal ratings · Head-to-head comparison','TN_2026_VoterIntelligence.html'],
['G','Know Your Candidates — TN 2026','know your candidates constituency search filter candidate eci election commission affidavit 234','Search 7,500+ candidates by constituency, party, district','TN_2026_VoterIntelligence.html'],
['G','Deep Dive — 174 Election Schemes','deep dive 174 schemes rated costed pros cons employment impact world context fiscal analysis','Every promise rated: stars, cost, verdict, employment impact','TN_2026_DeepDive_v2.html'],
['G','TN District Business Opportunities','district wise business opportunity chennai coimbatore madurai trichy salem tiruppur advantage industrial strength','Which districts are best for which business sectors','TN_2026_BusinessGuide.html'],
['G','Export from Tamil Nadu — Guide','export tamil nadu iec international trade goods services port shipping customs clearance dgft','How to start exporting from TN · Ports · DGFT registration','TN_2026_BusinessGuide.html'],

/* ── Heritage & Economy (new) ── */
['G','TN Business History Timeline','chola nayak colonial independence dravidian liberalization modern history timeline era trade maritime','8 eras of Tamil Nadu business history from Chola to present','TN_Heritage.html'],
['G','Tamil Nadu Export Dashboard','export commodities automobile textile leather electronics petroleum engineering pharma marine gems','$35-37B exports FY24 · Top 10 commodities · 4 ports','TN_Heritage.html'],
['G','FDI in Tamil Nadu','fdi foreign direct investment hyundai foxconn samsung renault nissan tata electronics caterpillar guidance gim','$40-42B cumulative FDI · Top investments · GIM 2024','TN_Heritage.html'],
['G','38 District Opportunity Map','district opportunity map chennai coimbatore tiruvallur madurai trichy tiruppur hosur salem namakkal','38 districts with industries, companies, advantages, opportunities','TN_Heritage.html'],
['G','TN Success Stories — Entrepreneurs','zoho freshworks tvs murugappa cavincare tafe tiruppur a2b chargebee sakthi entrepreneur founder','10 verified entrepreneur stories from Tamil Nadu','TN_Heritage.html'],
['G','Government Subsidies — Central & State','pli mudra pmegp startup india clcss sfurti needs tiic tahdco tanseed msme subsidy','12 central + 10 state schemes + 6 sector incentives','TN_Heritage.html'],
['G','Cost Calculator — Business Ideas','cost calculator capital budget how much start business idea income revenue risk','Enter your capital → Get matched business ideas & schemes','TN_2026_BusinessGuide.html'],
['G','Scheme Eligibility Checker','scheme eligibility checker find matching government loan subsidy incentive profile category','Answer 5 questions → Discover matching schemes','TN_2026_BusinessGuide.html'],
['G','Compliance Calendar — Deadlines','compliance calendar gst tds pf esi itr filing deadline monthly quarterly annual','Month-by-month tax, GST, PF/ESI filing deadlines','TN_2026_BusinessGuide.html'],

/* ── Key Districts ── */
['E','Chennai — IT, Auto, GCC Hub','chennai it ites automobile financial services gcc hub tcs cognizant freshworks zoho logistics port','100+ GCCs · SaaS capital · GSDP #1 contributor · Major port','TN_Heritage.html'],
['E','Coimbatore — Manchester of South India','coimbatore textiles pumps motors engineering it jewelry lmw elgi pricol manchester','~50% of India\'s pump output · Textile machinery · Strong SME ecosystem','TN_Heritage.html'],
['E','Tiruppur — Knitwear Capital','tiruppur knitwear garments textiles tea export gounder cotton fashion sustainable','$3.5-4B knitwear exports · 600,000+ employed · 5,000+ units','TN_Heritage.html'],
['E','Madurai — Temple City & Business Hub','madurai temple tourism textiles automobile it meenakshi pilgrimage heritage','Major temple city · Growing IT sector · Southern TN hub','TN_Heritage.html'],
['E','Tiruchirappalli — Heavy Engineering Hub','trichy tiruchirappalli bhel defense engineering education nit ordnance factory heavy','BHEL · Ordnance Factory · NIT Trichy · Defense ancillaries','TN_Heritage.html'],
['E','Hosur-Krishnagiri — EV & Electronics','hosur krishnagiri ev ola electric mango granite electronics manufacturing industrial','Ola Electric · Mango capital · SIPCOT industrial corridor','TN_Heritage.html'],
['E','Sivakasi — Fireworks & Printing','sivakasi virudhunagar fireworks crackers printing offset match manufacturing mini japan','~90% of India\'s fireworks · Major printing hub · Match manufacturing','TN_Heritage.html'],

/* ── Communities ── */
['E','Nattukottai Chettiars — Banking Legacy','chettiar nagarathar chettinad banking trade burma malaya ceylon banking community','Southeast Asia\'s premier indigenous banking community','TN_Heritage.html'],
['E','Nadar Community — Entrepreneurship','nadar sivakasi fireworks printing match retail entrepreneurship community nadar mahajana sangam','From palmyra-climbing to 90% of India\'s fireworks','TN_Heritage.html'],
['E','Gounder Community — Industrial Pioneers','gounder kongu tiruppur coimbatore knitwear textiles pumps fraternal capital community','Built Tiruppur & Coimbatore industrial ecosystems','TN_Heritage.html'],

/* ── Key FDI ── */
['E','Foxconn — iPhone Assembly in TN','foxconn iphone apple electronics assembly sriperumbudur manufacturing expansion pegatron','$1.5B+ investment · iPhone assembly · Sriperumbudur cluster','TN_Heritage.html'],
['E','Hyundai Motor India — Sriperumbudur','hyundai motor india sriperumbudur automobile car manufacturing detroit asia anchor','$4B+ cumulative · India\'s 2nd largest car maker · Anchored auto cluster','TN_Heritage.html'],
['E','GIM 2024 — Record Investments','gim global investors meet 2024 investment mou tata jsw adani semiconductor','₹6.64 lakh crore MoUs · Record investment commitments','TN_Heritage.html']
];

/* ═══════════════════════════════════════════════════════════
   MANIFESTO SCHEMES (174 entries)
   Compact: [batch, party, title, stars, verdict]
   ═══════════════════════════════════════════════════════════ */
var SC = [
/* ── Batch 1: Women & Family Welfare (26) ── */
[1,'DMK','Magalir Urimai Thogai — \u20b92,000/month to women',3,'C'],
[1,'DMK','Illatharasi — \u20b98,000 appliance coupon',2,'E'],
[1,'DMK','SHG collateral-free loans up to \u20b95L',4,'I'],
[1,'DMK','1,000 childcare centres in industrial areas',5,'I'],
[1,'DMK','Marriage assistance — 8g gold + silk saree',3,'C'],
[1,'DMK','Gold ring for newborn girls',2,'E'],
[1,'ADMK','Kulavilakku — \u20b92,000/month for all families',2,'E'],
[1,'ADMK','Free refrigerator for 2.22 Cr families',1,'E'],
[1,'ADMK','\u20b910,000 one-time special family relief',2,'E'],
[1,'ADMK','3 free LPG cylinders/year',2,'E'],
[1,'ADMK','Free bus travel extended to men',2,'E'],
[1,'ADMK','\u20b925,000 two-wheeler subsidy for working women',3,'C'],
[1,'ADMK','8g gold + silk saree + gold ring for brides/newborns',3,'C'],
[1,'ADMK','Free bathing kits + PDS additions (lentils, oil)',2,'R'],
[1,'ADMK','\u20b91,000 Pongal cash + Diwali gift hampers',2,'E'],
[1,'TVK','Vettri Magalir Thittam — \u20b92,500/month to women',2,'E'],
[1,'TVK','6 free LPG cylinders/year',1,'E'],
[1,'TVK','8g gold + silk saree for brides',3,'C'],
[1,'TVK','\u20b915,000/yr to prevent girl school dropouts',4,'I'],
[1,'TVK','Interest-free SHG loans up to \u20b95L',4,'C'],
[1,'TVK','\u20b94,000/month unemployment allowance for youth',2,'E'],
[1,'NTK','Explicit rejection of cash-transfer freebies',4,'I'],
[1,'NTK','Structured social security for unorganised workers',4,'I'],
[1,'NTK','50% women reservation in legislature',3,'R'],
[1,'NTK','Domestic violence protection — administrative reform',4,'I'],
[1,'NTK','Street vendor ID cards and municipal recognition',4,'I'],
/* ── Batch 2: Education, Youth, Employment & Tech (25) ── */
[2,'DMK','Free breakfast extended to Class 8',5,'I'],
[2,'DMK','35 lakh free laptops for govt college students',3,'C'],
[2,'DMK','\u20b92,000/month stipend (Pudhumai Penn + Tamil Pudhalvan)',3,'C'],
[2,'DMK','Digital learning centres + Wi-Fi in all govt colleges',4,'I'],
[2,'DMK','Naan Mudhalvan — scale to 5L trainees/yr',5,'I'],
[2,'DMK','\u20b918L Cr investment target; 50L jobs over 5 years',3,'R'],
[2,'DMK','IT sector exports target — \u20b95L Cr',4,'I'],
[2,'DMK','4 Global Cities — Madurai, Trichy, Coimbatore, Salem',3,'R'],
[2,'ADMK','NEET reservation — raise from 7.5% to 10%',2,'R'],
[2,'ADMK','Student bank loan waiver — all education loans',2,'E'],
[2,'ADMK','\u20b92,000/month unemployment allowance for graduates',2,'E'],
[2,'ADMK','\u20b91,000/month unemployment allowance — Class 12',1,'E'],
[2,'TVK','Job assurance to 5L youth',2,'E'],
[2,'TVK','Collateral-free education loans (remove mortgage >\u20b97.5L)',4,'C'],
[2,'TVK','Collateral-free startup loans for entrepreneurs',3,'C'],
[2,'TVK','Monthly financial assistance to college students (TBD)',2,'E'],
[2,'TVK','AI Ministry + AI University + AI Township',3,'C'],
[2,'TVK','21-day business approval guarantee',4,'I'],
[2,'TVK','USD 1.5 trillion economy by 2036',2,'R'],
[2,'TVK','MSME incentives + 38 district master plans',4,'C'],
[2,'NTK','Tamil-medium education at all levels including MBBS',3,'C'],
[2,'NTK','Life skills + vocational training in schools',4,'I'],
[2,'NTK','Self-reliant district-level economic model',3,'R'],
[2,'NTK','Zero-waste industrial zones + circular economy',4,'C'],
[2,'NTK','Free transport for students — school and college',3,'C'],
/* ── Batch 3: Agriculture, Farmers & Fishermen (28) ── */
[3,'DMK','Paddy MSP \u20b93,500/quintal (state top-up)',3,'C'],
[3,'DMK','Sugarcane procurement price \u20b94,500/tonne',3,'C'],
[3,'DMK','20 lakh free electric pump sets (meter-free)',2,'C'],
[3,'DMK','Continued free electricity for farm pump sets',2,'C'],
[3,'DMK','Crop procurement support through TNCSC',4,'I'],
[3,'DMK','Temple tank and irrigation revival',4,'I'],
[3,'ADMK','Paddy MSP \u20b93,500/quintal',3,'C'],
[3,'ADMK','Sugarcane price \u20b94,500/tonne',3,'C'],
[3,'ADMK','Uninterrupted 3-phase electricity for irrigation',1,'E'],
[3,'ADMK','MGNREGA extended to 150 days',2,'R'],
[3,'ADMK','State Agricultural Commission (new body)',4,'I'],
[3,'ADMK','TNCSC procurement when market price < MSP',4,'I'],
[3,'ADMK','GST exemption for Farmer Producer Groups',3,'C'],
[3,'TVK','Full crop loan waiver — all agricultural loans',1,'E'],
[3,'TVK','MSP for fish including prawns (first in India)',4,'C'],
[3,'TVK','\u20b927,000 lean-season assistance for fishing families',3,'C'],
[3,'TVK','\u20b925 lakh accident insurance for fishermen',4,'I'],
[3,'TVK','Free housing + land pattas for fishing community',2,'C'],
[3,'TVK','Free electricity for pump sets (ongoing)',2,'E'],
[3,'TVK','Cold storage + market access for farmers',4,'I'],
[3,'NTK','Declare farming a "National Occupation"',3,'R'],
[3,'NTK','Large-scale water body restoration (Ooranis, Eris)',5,'I'],
[3,'NTK','Palmyra tree planting for groundwater recharge',4,'I'],
[3,'NTK','Cold storage in every one of 38 districts',5,'I'],
[3,'NTK','Promote natural/organic farming',3,'C'],
[3,'NTK','Fair price guarantee for farmers and fishermen',3,'C'],
[3,'NTK','Fishermen\'s Welfare Board — state equivalent',5,'I'],
[3,'NTK','Protect farming land from real estate conversion',4,'C'],
/* ── Batch 4: Healthcare & Social Security (24) ── */
[4,'DMK','CMCHIS raised to \u20b910L (from \u20b95L)',4,'I'],
[4,'DMK','Double dialysis facilities in govt hospitals',5,'I'],
[4,'DMK','Free medicine scheme expansion (650\u2192800+ drugs)',5,'I'],
[4,'DMK','1,000 childcare centres (healthcare co-benefit)',5,'I'],
[4,'DMK','Disability assistance raised to \u20b92,500/month',4,'I'],
[4,'DMK','Old-age pension raised to \u20b92,000/month',3,'C'],
[4,'DMK','Consecration of 5,000 temples',3,'C'],
[4,'ADMK','Full coverage of major medical expenses',2,'E'],
[4,'ADMK','Pensions raised to \u20b92,000/month (all categories)',3,'C'],
[4,'ADMK','Amma Canteen revival and expansion',4,'I'],
[4,'ADMK','Amma Pharmacy — subsidised neighbourhood medicines',3,'C'],
[4,'ADMK','10% NEET reservation for govt school students',2,'R'],
[4,'ADMK','Phased prohibition to reduce alcoholism',2,'E'],
[4,'TVK','Subsidised medicines at govt hospitals',1,'E'],
[4,'TVK','Drug-free TN — zero-tolerance narcotics + rehab',3,'C'],
[4,'TVK','\u20b925L accident insurance for fishermen',4,'I'],
[4,'TVK','Enhanced pensions (amount unspecified)',2,'E'],
[4,'TVK','Integrated Siddha + Allopathy medical tourism city',3,'C'],
[4,'TVK','Free mental health support programme',3,'R'],
[4,'NTK','Integrated Allopathy + Siddha medical tourism',3,'C'],
[4,'NTK','Comprehensive mental health programme',3,'R'],
[4,'NTK','Anti-drug + anti-alcohol enforcement with rehab',3,'C'],
[4,'NTK','Social security for unorganised workers — health cover',4,'I'],
[4,'NTK','Clean drinking water for all districts',4,'I'],
/* ── Batch 5: Housing & Infrastructure (26) ── */
[5,'DMK','10 lakh new concrete houses in 5 years',4,'C'],
[5,'DMK','\u20b910,000 Cr for rural road upgrades (38 districts)',4,'I'],
[5,'DMK','10,000 new electric buses for TNSTC',5,'I'],
[5,'DMK','4 Global Cities near tier-2 cities',4,'C'],
[5,'DMK','Mini-bus services in remote/hilly areas',4,'I'],
[5,'DMK','Coimbatore International Airport expansion',3,'C'],
[5,'DMK','Cargo terminal at Thoothukudi Airport',3,'C'],
[5,'DMK','\u20b91,000 Cr road/public space beautification',3,'C'],
[5,'DMK','High-quality bus shelters across TN',4,'I'],
[5,'DMK','50 Semmozhi Poongas (Classical Tamil Parks)',3,'C'],
[5,'ADMK','Amma Illam — free houses for rural + urban poor',3,'C'],
[5,'ADMK','Revival of stalled ADMK-era housing projects',2,'R'],
[5,'ADMK','4-lane highway expansions (Salem-Chennai etc.)',3,'C'],
[5,'ADMK','MGNREGA 150-day extension for rural infra',3,'C'],
[5,'ADMK','Irrigation tank desilting and canal repair',4,'I'],
[5,'TVK','Housing pattas + concrete houses for all landless',2,'E'],
[5,'TVK','Free housing for all fishing community families',3,'C'],
[5,'TVK','District master plans for industrial decentralisation',4,'C'],
[5,'TVK','AI Township (location unspecified)',2,'E'],
[5,'TVK','USD 1.5 trillion economy with smart city development',1,'E'],
[5,'NTK','5 capital cities — decentralise governance',4,'C'],
[5,'NTK','Restrict large buses from city centres',3,'C'],
[5,'NTK','Automatic doors in all long-distance buses',4,'I'],
[5,'NTK','Keeladi, Thanjavur, Adichanallur heritage tourism',4,'I'],
[5,'NTK','Free pilgrim transport during festivals',3,'C'],
[5,'NTK','Cold storage in every district (38 districts)',5,'I'],
/* ── Batch 6: Governance & Autonomy (25) ── */
[6,'DMK','Move Education & Health from Concurrent to State List',5,'I'],
[6,'DMK','Advocate 50% of divisible tax pool for states',5,'I'],
[6,'DMK','Implement Kurian Joseph Committee recommendations',4,'I'],
[6,'DMK','Doorstep delivery of govt services (digital platform)',4,'I'],
[6,'DMK','Unified citizen grievance platform',4,'I'],
[6,'DMK','Assured pension for govt employees (NPS\u2192OPS)',2,'E'],
[6,'DMK','8th Pay Commission benefits for state employees',3,'R'],
[6,'ADMK','Move Education/Health to State List',2,'E'],
[6,'ADMK','Include cesses/surcharges in divisible pool',4,'C'],
[6,'ADMK','Protect TN representation in delimitation',2,'E'],
[6,'ADMK','Greater financial devolution (vague)',2,'E'],
[6,'TVK','Accountable administration — integrity pledge',1,'E'],
[6,'TVK','Anti-corruption commission with independent authority',4,'C'],
[6,'TVK','Vijay to contest Perambur, visit monthly',0,'U'],
[6,'TVK','People\'s advisory councils in 38 districts',3,'C'],
[6,'TVK','21-day single-window business approval guarantee',4,'C'],
[6,'NTK','5 capital cities (governance dimension)',4,'C'],
[6,'NTK','75% of GST collected in TN to remain in TN',2,'E'],
[6,'NTK','Mandatory voting for democratic participation',3,'R'],
[6,'NTK','Supreme Court bench in Chennai',4,'I'],
[6,'NTK','All court forms and documents in Tamil',4,'I'],
[6,'NTK','Chief Justice of TN HC must be Tamil person',1,'E'],
[6,'NTK','Oppose RS MPs as Union Ministers',2,'E'],
[6,'NTK','Separate constituencies exclusively for women',2,'E'],
[6,'NTK','State autonomy philosophy — governance resolution',3,'C'],
/* ── Batch 7: Tamil Identity & Culture (20) ── */
[7,'DMK','International Classical Tamil Conference in Chennai',3,'C'],
[7,'DMK','Consecration of 5,000 temples (cross-ref B4)',3,'C'],
[7,'DMK','50 Semmozhi Poongas (cross-ref B5)',3,'C'],
[7,'DMK','Tamil language in courts and government',4,'I'],
[7,'ADMK','Phased prohibition (cross-ref B4)',2,'E'],
[7,'ADMK','\u20b910L compensation for Jallikattu deaths',3,'C'],
[7,'ADMK','Promote traditional sports (Jallikattu, Silambam)',3,'C'],
[7,'ADMK','Annaism philosophy as governance framework',1,'E'],
[7,'TVK','Drug-free Tamil Nadu (cross-ref B4)',3,'C'],
[7,'TVK','AI Ministry and AI University (cross-ref B2)',3,'C'],
[7,'TVK','Vijay\'s pledge + religious outreach',0,'U'],
[7,'NTK','Redesign state emblem to feature Thiruvalluvar',3,'C'],
[7,'NTK','Tamil-medium education including MBBS (cross-ref B2)',3,'C'],
[7,'NTK','Court forms in Tamil (cross-ref B6)',4,'I'],
[7,'NTK','Palmyra tree planting — ecological + cultural heritage',5,'I'],
[7,'NTK','Keeladi, Adichanallur, Thanjavur hubs (cross-ref B5)',4,'I'],
[7,'NTK','TN as self-reliant state (philosophy)',2,'E'],
[7,'NTK','Zero-waste industrial model, circular economy',4,'C'],
[7,'NTK','Climate adaptation + water body restoration',5,'I'],
[7,'NTK','Anti-TASMAC stance, social reform vs alcoholism',3,'C']
];

/* ═══════════════════════════════════════════════════════════
   BUILD FULL INDEX
   ═══════════════════════════════════════════════════════════ */
var DOCS = [];
var i, d, s;

/* Push static docs */
for(i = 0; i < STATIC.length; i++){
  d = STATIC[i];
  DOCS.push({c:d[0], t:d[1], k:d[2], s:d[3], u:d[4]});
}

/* Build scheme docs from compact array */
for(i = 0; i < SC.length; i++){
  s = SC[i];
  var kw = s[1].toLowerCase() + ' ' + BK[s[0]] + ' ' + s[2].toLowerCase().replace(/[\u2014\u20b9,()]/g,' ');
  DOCS.push({
    c:'S',
    t:s[2],
    k:kw,
    s:s[1] + ' \u00b7 ' + starsText(s[3]) + ' \u00b7 ' + VL[s[4]] + ' \u00b7 ' + BN[s[0]],
    u:'TN_2026_DeepDive_v2.html'
  });
}

/* ═══════════════════════════════════════════════════════════
   SEARCH ENGINE
   ═══════════════════════════════════════════════════════════ */
function search(query, maxResults){
  if(!query || query.length < 2) return [];
  maxResults = maxResults || 15;

  var tokens = query.toLowerCase().replace(/[\u2014\u20b9,()]/g,' ').split(/\s+/).filter(function(t){ return t.length > 1; });
  if(!tokens.length) return [];

  var qLow = query.toLowerCase();
  var results = [];

  for(var idx = 0; idx < DOCS.length; idx++){
    var doc = DOCS[idx];
    var tLow = doc.t.toLowerCase();
    var score = 0;
    var matched = 0;

    for(var j = 0; j < tokens.length; j++){
      var tok = tokens[j];
      if(tLow.indexOf(tok) >= 0){ score += 10; matched++; }
      else if(doc.k.indexOf(tok) >= 0){ score += 3; matched++; }
    }

    /* Need at least 60% of tokens matched */
    if(matched > 0 && matched >= Math.ceil(tokens.length * 0.5)){
      /* Bonus: all tokens matched */
      if(matched === tokens.length) score += 15;
      /* Bonus: exact phrase in title */
      if(qLow.length > 2 && tLow.indexOf(qLow) >= 0) score += 25;
      /* Slight boost for non-scheme results (they're more actionable) */
      if(doc.c !== 'S') score += 2;

      results.push({
        type: TYPES[doc.c],
        typeCode: doc.c,
        title: doc.t,
        snippet: doc.s,
        url: doc.u,
        score: score
      });
    }
  }

  results.sort(function(a, b){ return b.score - a.score; });
  return results.slice(0, maxResults);
}

/* ── Popular searches (curated) ── */
var POPULAR = [
  'Cloud Kitchen','MUDRA Loan','FDI Tamil Nadu','Cost Calculator','Zoho Success Story',
  'District Opportunities','Subsidies','Tiruppur Knitwear','Chola History','GIM 2024',
  'StartupTN','Export Dashboard','NEEDS Scheme','EV Business','Chettiars Banking'
];

/* ── Public API ── */
window.SearchIndex = {
  TYPES: TYPES,
  search: search,
  popular: POPULAR,
  count: DOCS.length
};

})();
