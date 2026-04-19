/* ============================================================
 * TN 2026 — Civic Tech: Build Solutions for Tamil Nadu
 * ============================================================
 * Comprehensive, factual data on civic issues in Tamil Nadu
 * that can be addressed through citizen-built technology.
 *
 * Sources:
 *   - CGWB (Central Ground Water Board) — cgwb.gov.in
 *   - TNPCB (TN Pollution Control Board) — tnpcb.gov.in
 *   - CPCB (Central Pollution Control Board) — cpcb.nic.in
 *   - Chennai Corporation / GCC — chennaicorporation.gov.in
 *   - TN e-Governance Agency (TNeGA) — tnega.tn.gov.in
 *   - TANGEDCO — tangedco.gov.in
 *   - CAG Audit Reports on TN (2018, 2022)
 *   - Census 2011, NFHS-5 (2019-21)
 *   - NCRB Crime in India Reports (2022)
 *   - data.gov.in (Open Government Data)
 *   - NITI Aayog SDG India Index
 *   - WHO, UNICEF JMP reports
 *   - StartupTN (startuptn.in), TN iDEA
 *   - India State of Forest Report (ISFR) 2023
 *   - TN Climate Change Mission reports
 *   - 2015 Chennai Floods Wikipedia (sourced references)
 *   - SWMRT (Solid Waste Management Rules, 2016)
 *
 * All monetary figures in INR using \u20b9 symbol.
 * Data verified as of Q1 2026.
 * ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
   * 1. CIVIC ISSUES — 15 Major Categories
   * ────────────────────────────────────────────────────────── */
  var CIVIC_ISSUES = [

    /* ─── 1. WATER MANAGEMENT ──────────────────────────────── */
    {
      id: 'water-management',
      title: 'Water Management (Floods, Drought, Groundwater)',
      icon: '\ud83d\udca7',
      category: 'Environment',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu faces a dual water crisis: devastating urban floods (Chennai 2015 caused \u20b950,000+ crore damage, 500+ deaths; repeated in 2023 with Cyclone Michaung) AND severe groundwater depletion. CGWB classifies 541 of 1,166 assessment units in TN as over-exploited or critical. Chennai faced Day Zero water crisis in 2019 when all 4 reservoirs dried up. The state receives 80% of rainfall during Oct\u2013Dec northeast monsoon in just 45\u201350 days, but lacks storage and recharge infrastructure.',
        stats: [
          'Chennai 2015 floods: 500+ deaths, \u20b950,000+ crore losses (CAG termed it man-made disaster)',
          'CGWB: 46% of TN groundwater units over-exploited (2023 assessment)',
          'Chennai had 600+ lakes in 1980s; fewer than 30 in healthy condition by 2008 (CSE research)',
          'Only 855 km of stormwater drains vs 2,847 km of urban roads in Chennai',
          'TN per capita water availability: 750 cubic meters (national avg: 1,486 cubic meters)',
          'Cauvery basin provides 50% of TN irrigation but flow has declined 40% in 30 years'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Chennai Smart City Mission: \u20b91,500 crore for stormwater drain upgrades',
          'TN Climate Change Mission established for resilience planning',
          'Kudimaramathu (community waterbody restoration) scheme: 4,778 waterbodies restored',
          '\u20b912 billion master plan to restore 18 major waterbodies in Chennai metro (announced 2017)',
          'Rain Water Harvesting (RWH) mandatory in TN since 2003 (first state in India)'
        ],
        whatsGap: [
          'No real-time flood monitoring accessible to citizens',
          'No unified groundwater level dashboard at ward/village level',
          'Lake encroachment data not publicly tracked',
          'RWH compliance monitoring is virtually absent',
          'No early warning system for urban flooding at street level'
        ]
      },
      techSolution: {
        what: 'Unified Water Intelligence Platform',
        approach: 'Crowdsourced flood reporting + IoT water level sensors + groundwater monitoring dashboard. Citizens report flooding via app (GPS + photo), data merged with IMD rainfall feeds and reservoir levels. Predictive flood alerts at street level using historical flood maps + real-time rain data.',
        features: [
          'Real-time flood map with citizen reports and IoT sensor data',
          'Street-level flood risk scoring using elevation + drainage + historical data',
          'Groundwater level tracker per ward/village from CGWB + TWAD data',
          'Lake health monitor: water level, encroachment alerts, biodiversity',
          'RWH compliance checker: building-level verification via citizen audit',
          'Monsoon preparedness checklist for households and businesses'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + Next.js (web dashboard)',
        backend: 'Node.js/Express or Python FastAPI',
        database: 'PostgreSQL + PostGIS for spatial data, TimescaleDB for time-series',
        maps: 'Leaflet/MapLibre GL with OpenStreetMap tiles (free)',
        iot: 'ESP32 + ultrasonic water level sensors (\u20b9500\u20131,500 each)',
        ml: 'Python scikit-learn for flood prediction from historical rain + drain capacity',
        hosting: 'AWS Free Tier / DigitalOcean (\u20b91,000\u20133,000/month initial)',
        data: 'IMD API (weather), CGWB data, SRTM elevation data (NASA, free), OSM drain data'
      },
      revenueModel: [
        'B2G: Sell dashboards to municipal corporations (\u20b95\u201310 lakh/year per city)',
        'Insurance: Flood risk data to insurance companies for premium calculation',
        'Real estate: Flood risk scores for property buyers (\u20b9500\u20131,000 per report)',
        'Alert service: Premium SMS/push flood alerts for businesses (\u20b9999/year)',
        'IoT hardware: Sell/maintain water level sensors to resident welfare associations'
      ],
      govtApproach: {
        who: 'Chennai Corporation (GCC), TN Water Resources Dept, TNSCCC (Smart City), District Collectors',
        how: 'Start with 1\u20132 ward pilot. Present to Smart City SPV CEO or Corporation Commissioner. Use Namma Chennai app integration route. Apply under Smart Cities Mission innovation challenges.',
        procurement: 'GeM portal for govt procurement. Or PPP model via StartupTN facilitation.'
      },
      cost: {
        mvp: '\u20b93\u20135 lakh (web + mobile app with crowdsourced reporting)',
        full: '\u20b915\u201325 lakh (with IoT sensors, ML models, API integrations)',
        timeline: 'MVP: 3\u20134 months. Full platform: 8\u201312 months'
      },
      realExamples: [
        { name: 'FloodWatch (Chennai)', desc: 'Volunteer-run flood mapping during 2015 floods using Google Maps', url: 'chennairains.org (community crowdsource during 2015)' },
        { name: 'CityTap (Bengaluru)', desc: 'IoT-based water quality monitoring for apartment complexes', url: 'citytap.in' },
        { name: 'FloodNet (NYC)', desc: 'Open-source flood sensor network by NYU, real-time urban flood data', url: 'floodnet.nyc' },
        { name: 'OpenStreetMap Tasking Manager', desc: 'Used globally for mapping flood-prone areas', url: 'tasks.hotosm.org' }
      ],
      buildGuide: [
        'Step 1: Get elevation data from SRTM/ASTER (NASA, free download) and drain network from OSM',
        'Step 2: Build flood risk model using historical flood extent + rainfall + elevation + drain capacity',
        'Step 3: Create mobile app with GPS-tagged flood reporting (photo + water depth estimate)',
        'Step 4: Integrate IMD weather API for rainfall nowcasting',
        'Step 5: Deploy 10\u201320 IoT water level sensors in known flood-prone junctions',
        'Step 6: Build real-time dashboard showing flood risk by area',
        'Step 7: Pilot in 2 wards, validate with ward councilors and RWAs',
        'Step 8: Present results to GCC Smart City team for scaling'
      ]
    },

    /* ─── 2. WASTE MANAGEMENT ─────────────────────────────── */
    {
      id: 'waste-management',
      title: 'Waste Management (Solid, E-Waste, Plastic)',
      icon: '\u267b\ufe0f',
      category: 'Environment',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu generates ~15,000+ tonnes of municipal solid waste daily. Chennai alone generates 5,400 tonnes/day but processes only ~40% scientifically. Perungudi and Kodungaiyur dump yards handle the rest in open landfills, polluting ground water for surrounding 5 lakh residents. India generates 3.2 million tonnes of e-waste annually (3rd largest globally); TN is among top 5 generators. Only 20% of e-waste is formally recycled.',
        stats: [
          'TN daily solid waste generation: ~15,000 tonnes (TNPCB 2023)',
          'Chennai: 5,400 tonnes/day, only ~40% processed (GCC data)',
          'Perungudi dumpyard: 60+ acres, 12+ million tonnes accumulated',
          'India e-waste: 3.2 million tonnes/year; TN in top 5 generating states',
          'Plastic waste in TN: ~1,000 tonnes/day despite single-use plastic ban (2019)',
          'Only 30% of TN municipalities have functional composting/processing units'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TN single-use plastic ban (Jan 2019, expanded 2022)',
          'Source segregation mandated in Chennai since 2017',
          'Ramky Enviro contracted for Perungudi remediation (\u20b9475 crore)',
          'TN MSME recycling clusters in Sriperumbudur',
          'E-waste collection centers in 10 districts (TNPCB)'
        ],
        whatsGap: [
          'No real-time tracking of waste collection routes/times',
          'Citizens cannot report missed collections easily',
          'E-waste drop-off points not mapped or publicized',
          'No composting marketplace connecting generators and buyers',
          'Informal waste picker economy (250,000+ in TN) not integrated digitally'
        ]
      },
      techSolution: {
        what: 'Smart Waste Management & Circular Economy Platform',
        approach: 'App for citizens to track collection schedules, report missed pickups, locate e-waste/plastic drop-off points. Backend for municipalities to optimize routes. Marketplace for compost, recycled materials, and scrap dealers.',
        features: [
          'Collection schedule tracker with push notification reminders',
          'Report missed collection (GPS + photo), auto-route to ward supervisor',
          'E-waste and plastic collection point mapper (crowdsourced + verified)',
          'Scrap/kabadiwala marketplace: rate comparison, pickup scheduling',
          'Composting guide: home composting tutorial + sell/buy compost',
          'Municipality dashboard: route optimization, complaint heatmap, tonnage tracking'
        ]
      },
      techStack: {
        frontend: 'Flutter (cross-platform mobile) + Vue.js (admin dashboard)',
        backend: 'Python Django (strong GIS support with GeoDjango)',
        database: 'PostgreSQL + PostGIS',
        maps: 'Leaflet with OSM tiles',
        routing: 'OSRM (Open Source Routing Machine) for collection route optimization',
        hosting: 'DigitalOcean or Railway.app (\u20b91,500\u20134,000/month)',
        notifications: 'Firebase Cloud Messaging (free tier sufficient)'
      },
      revenueModel: [
        'B2G: Municipality SaaS subscription (\u20b92\u20135 lakh/year per municipality)',
        'Marketplace commission: 5\u201310% on scrap/compost transactions',
        'E-waste collection premium: charge electronics brands for EPR compliance data',
        'Advertising: local scrap dealers, recycling businesses',
        'CSR partnerships: Waste management is eligible CSR activity under Schedule VII'
      ],
      govtApproach: {
        who: 'City Municipal Corporation (Solid Waste dept), TNPCB, District Rural Development Agency',
        how: 'Demo with 1 ward (10,000\u201320,000 households). Show missed collection reduction + route efficiency. Partner with existing contractors (Ramky, Urbaser) to integrate.',
        procurement: 'Smart City Challenge or Innovation Fund. GeM for direct procurement.'
      },
      cost: {
        mvp: '\u20b92\u20134 lakh (citizen app + basic admin panel)',
        full: '\u20b912\u201320 lakh (with route optimization, marketplace, analytics)',
        timeline: 'MVP: 2\u20133 months. Full: 6\u20139 months'
      },
      realExamples: [
        { name: 'Swachhata App (MoHUA)', desc: 'National grievance app for sanitation issues', url: 'swachhata.mohua.gov.in' },
        { name: 'Recykal', desc: 'Hyderabad startup: digital marketplace for recyclables, EPR compliance', url: 'recykal.com' },
        { name: 'Kabadiwala Connect (Bhopal)', desc: 'App connecting households with waste pickers for scrap pickup', url: 'kabadiwalaconnect.in' },
        { name: 'Let\'s Recycle (India)', desc: 'B2B marketplace for scrap and waste materials', url: 'letsrecycle.in' }
      ],
      buildGuide: [
        'Step 1: Map current waste collection routes and schedules from municipal data/RTI',
        'Step 2: Build citizen app with schedule display + grievance reporting',
        'Step 3: Create collection point map using OSM + crowdsourced verification',
        'Step 4: Add route optimization using OSRM for municipal trucks',
        'Step 5: Build scrap marketplace with listing, pricing, and pickup booking',
        'Step 6: Pilot in 1\u20132 wards with RWA partnerships',
        'Step 7: Measure: missed collections reduced, segregation improved',
        'Step 8: Scale to full corporation with municipal partnership'
      ]
    },

    /* ─── 3. TRAFFIC & TRANSPORTATION ─────────────────────── */
    {
      id: 'traffic-transport',
      title: 'Traffic & Transportation',
      icon: '\ud83d\ude97',
      category: 'Infrastructure',
      severity: 'High',
      problem: {
        description: 'Chennai has 6.6 million registered vehicles (2023) on road infrastructure designed for 1.5 million. Average commute speed during peak hours: 12\u201315 km/h. TN has the 2nd highest road accident fatalities in India: 16,000+ deaths/year. Public transport modal share has dropped from 45% to under 30% in Chennai in 15 years. MTC bus fleet has declined from 3,600 to 2,900 operational buses. Coimbatore, Madurai, Trichy face similar congestion crises.',
        stats: [
          'TN road accident deaths: 16,157 in 2022 (NCRB, 2nd highest in India)',
          'Chennai: 6.6 million registered vehicles on roads designed for 1.5 million',
          'Average peak-hour speed in Chennai: 12\u201315 km/h',
          'MTC daily ridership dropped from 48 lakh to ~30 lakh (2013\u20132023)',
          'Operational MTC fleet: ~2,900 out of 3,640 sanctioned buses',
          'Only 6% of Chennai roads have dedicated cycle infrastructure'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Chennai Metro Phase 2: 118.9 km, \u20b963,246 crore (under construction)',
          'MRTS extension proposals',
          'Bus route rationalization by IIT Madras',
          'Traffic signal synchronization on select corridors',
          'CMRL multimodal integration plan'
        ],
        whatsGap: [
          'No real-time bus tracking accessible to all citizens',
          'No unified multimodal trip planner (bus + metro + suburban rail)',
          'Accident blackspot data not publicly available in actionable format',
          'Parking information completely unavailable digitally',
          'No crowdsourced road quality/pothole reporting that reaches authorities'
        ]
      },
      techSolution: {
        what: 'Multimodal Transit & Road Safety Platform',
        approach: 'Real-time bus tracking using GPS on buses (partner with MTC), multimodal trip planner, accident blackspot map, parking availability tracker, pothole/road quality reporter.',
        features: [
          'Real-time bus arrival estimates using GPS/cell tower triangulation',
          'Multimodal trip planner: MTC bus + Metro + MRTS + suburban rail + share auto',
          'Accident blackspot map with severity data from FIR/hospital data',
          'Parking finder: real-time availability in lots + street parking zones',
          'Pothole/road damage reporter: crowdsourced with auto-routing to corporation',
          'Traffic congestion heatmap from aggregated anonymous phone movement data'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile), Next.js (web)',
        backend: 'Node.js with Express, Redis for caching real-time data',
        database: 'PostgreSQL + PostGIS, Redis for live vehicle positions',
        maps: 'MapLibre GL JS with OSM, OpenTripPlanner for routing',
        transit: 'GTFS data format for bus schedules, GTFS-RT for real-time',
        hosting: 'AWS (EC2 + ElastiCache) or DigitalOcean (\u20b95,000\u201310,000/month)'
      },
      revenueModel: [
        'Transit ads: contextual advertising on route planner screens',
        'Data licensing: anonymized congestion data to logistics/delivery companies',
        'Parking revenue share: partner with parking lot operators',
        'Premium features: arrival alerts, route optimization for daily commuters',
        'B2G: Sell analytics dashboard to traffic police / transport dept'
      ],
      govtApproach: {
        who: 'MTC (Metropolitan Transport Corporation), CMRL (Chennai Metro), Traffic Police, GCC',
        how: 'Partner with IIT Madras (already advising MTC on route optimization). Apply for Smart City Innovation Challenge. MTC has expressed interest in digital integration.',
        procurement: 'MTC procurement for fleet management. Smart City SPV for innovation pilots.'
      },
      cost: {
        mvp: '\u20b94\u20136 lakh (trip planner with static schedules + pothole reporter)',
        full: '\u20b920\u201335 lakh (real-time tracking, multimodal, analytics)',
        timeline: 'MVP: 3\u20134 months. Full: 8\u201312 months'
      },
      realExamples: [
        { name: 'Chalo App', desc: 'Real-time bus tracking operational in 40+ Indian cities including Coimbatore', url: 'chalo.com' },
        { name: 'OpenTripPlanner', desc: 'Open-source multimodal trip planner used by transit agencies globally', url: 'opentripplanner.org' },
        { name: 'mIndicator (Mumbai)', desc: 'Crowdsourced transit app with 10M+ users', url: 'mindicator.com' },
        { name: 'RoadBotics', desc: 'AI-powered road condition assessment from smartphone cameras', url: 'roadbotics.com' }
      ],
      buildGuide: [
        'Step 1: Obtain MTC route/schedule data (file RTI if needed) and create GTFS feed',
        'Step 2: Build trip planner using OpenTripPlanner engine with GTFS + OSM data',
        'Step 3: Create pothole reporter with photo + GPS + severity classification',
        'Step 4: Add Metro + MRTS schedules for multimodal routing',
        'Step 5: If MTC partners: integrate GPS tracking for real-time ETAs',
        'Step 6: Build accident blackspot layer from NCRB data + police FIR geolocation',
        'Step 7: Deploy and partner with commuter groups for feedback',
        'Step 8: Present analytics to MTC / traffic police for adoption'
      ]
    },

    /* ─── 4. AIR QUALITY & POLLUTION ──────────────────────── */
    {
      id: 'air-quality',
      title: 'Air Quality & Pollution',
      icon: '\ud83c\udf2b\ufe0f',
      category: 'Environment',
      severity: 'High',
      problem: {
        description: 'Chennai, Coimbatore, Madurai, and Tuticorin regularly exceed WHO air quality guidelines. CPCB monitoring shows Chennai PM2.5 averages 40\u201360 \u00b5g/m\u00b3 (WHO guideline: 15 \u00b5g/m\u00b3 annual mean). TN has only 29 CAAQMS (Continuous Ambient Air Quality Monitoring Stations) for a population of 7.2 crore. Industrial clusters (Manali, Ennore, Cuddalore SIPCOT) face severe pollution. Stubble burning, brick kilns, and construction dust are major contributors in rural areas.',
        stats: [
          'Chennai PM2.5 annual average: 40\u201360 \u00b5g/m\u00b3 (WHO limit: 15)',
          'TN CAAQMS stations: only 29 for 7.2 crore population',
          'Tuticorin: Sterlite copper smelter area still shows elevated SO2/PM10',
          'Manali industrial area AQI regularly crosses 200+ (Unhealthy)',
          'Ennore thermal plant cluster: elevated mercury, SO2, fly ash',
          '14,000+ premature deaths in TN attributable to air pollution annually (Lancet study on India, 2020)'
        ]
      },
      currentStatus: {
        govtDoing: [
          'CPCB National Clean Air Programme (NCAP) covers Chennai, Trichy, Madurai',
          'TNPCB operates 29 CAAQMS + manual stations',
          'BS-VI fuel standards implemented nationally from 2020',
          'Green cover push: TN Green Mission targeting 33% tree cover'
        ],
        whatsGap: [
          'Hyper-local air quality data absent (block/street level)',
          'No citizen-accessible real-time pollution alerts specific to neighborhood',
          'Source attribution (which industry/source is polluting) not publicly available',
          'Schools, hospitals have no air quality guidance for vulnerable groups',
          'Indoor air quality completely unmonitored'
        ]
      },
      techSolution: {
        what: 'Hyper-Local Air Quality Monitoring Network',
        approach: 'Low-cost air quality sensors (\u20b95,000\u201315,000 each) deployed at schools, hospitals, RWA buildings. Data uploaded to cloud via WiFi/4G. Public dashboard with health advisories. ML model for source attribution and pollution forecasting.',
        features: [
          'Real-time AQI map at neighborhood level (PM2.5, PM10, NO2, SO2, O3)',
          'Health advisory by area: safe to exercise outdoors? school recess advisory?',
          'Pollution source attribution using wind data + sensor network triangulation',
          'Historical trends: track if your area is getting better or worse',
          'Alerts: push notification when AQI crosses thresholds (100, 200, 300)',
          'Indoor vs outdoor comparison for buildings with sensors'
        ]
      },
      techStack: {
        frontend: 'React.js web app + PWA for mobile',
        backend: 'Python FastAPI (great for data processing pipelines)',
        database: 'InfluxDB or TimescaleDB (time-series optimized)',
        sensors: 'PMS5003/PMS7003 PM sensors + BME680 gas sensor + ESP32 (\u20b93,000\u20138,000 per unit)',
        ml: 'Python: scikit-learn for forecasting, inverse distance weighting for interpolation',
        hosting: 'AWS IoT Core or ThingSpeak (free tier for small deployments)',
        data: 'CPCB API (api.data.gov.in/CPCB), IMD wind data, OpenWeather API'
      },
      revenueModel: [
        'Sensor-as-a-service: \u20b91,000\u20132,000/month per location to RWAs, schools, corporates',
        'B2G: Sell network + dashboard to municipal corporations under NCAP',
        'Real estate: Air quality history reports for property buyers',
        'Health insurance: Partner with insurers for risk data',
        'CSR: Air quality monitoring as CSR project for industrial estates'
      ],
      govtApproach: {
        who: 'TNPCB, Corporation Health Dept, District Environment Engineer, NCAP city teams',
        how: 'Deploy 5\u201310 sensors as pilot in one NCAP city. Show data density improvement vs CPCB network. Approach TNPCB for validation. Apply for NCAP city action plan funding.',
        procurement: 'NCAP has allocated \u20b910 crore+ to Chennai alone for air quality improvement'
      },
      cost: {
        mvp: '\u20b92\u20134 lakh (10 sensors + cloud dashboard + basic alerts)',
        full: '\u20b915\u201330 lakh (100+ sensor network, ML forecasting, mobile app)',
        timeline: 'MVP: 2\u20133 months. Full: 6\u20139 months'
      },
      realExamples: [
        { name: 'ILK Labs (Chennai)', desc: 'TN-based startup making low-cost air quality monitors for Indian conditions', url: 'ilklabs.com' },
        { name: 'UrbanEmissions.info', desc: 'IIT Delhi project mapping city-level emission sources across India', url: 'urbanemissions.info' },
        { name: 'PurpleAir', desc: 'Global citizen science air quality network with 30,000+ sensors', url: 'purpleair.com' },
        { name: 'Respirer Living Sciences', desc: 'Indian startup with 2,500+ air quality monitors across 100+ Indian cities', url: 'respirer.in' }
      ],
      buildGuide: [
        'Step 1: Build 5 sensor units: PMS5003 + BME680 + ESP32 + solar panel + 4G modem',
        'Step 2: Calibrate against nearest CPCB reference monitor',
        'Step 3: Deploy at schools/hospitals (they benefit most from data)',
        'Step 4: Build real-time dashboard with health advisories',
        'Step 5: Add CPCB official data overlay for validation',
        'Step 6: Train ML model on 3 months data for AQI forecasting',
        'Step 7: Open API for researchers and other apps',
        'Step 8: Approach TNPCB for official validation and scaling support'
      ]
    },

    /* ─── 5. AGRICULTURE & FARMER ISSUES ──────────────────── */
    {
      id: 'agriculture',
      title: 'Agriculture & Farmer Issues',
      icon: '\ud83c\udf3e',
      category: 'Livelihood',
      severity: 'Critical',
      problem: {
        description: 'Agriculture employs 40% of TN workforce but contributes only 8% of GSDP. 93% of TN farmers are small/marginal (under 2 hectares). Average farm income is \u20b96,000\u20138,000/month. Price crashes destroy farmers: tomato prices crash from \u20b980 to \u20b93/kg regularly. 30% crop loss from pests due to lack of timely advisories. 17,000+ farmer suicides in TN in last decade (NCRB data). Middlemen capture 40\u201360% of final price.',
        stats: [
          '93% of TN farmers are small/marginal (<2 hectares, Agricultural Census)',
          'Average farm household income: \u20b96,000\u20138,000/month (NABARD SFI Survey)',
          'Crop insurance claims: only 30\u201340% claims processed within stipulated time (CAG)',
          'Post-harvest losses: 15\u201330% for perishables (ICAR estimates)',
          'Only 3% of TN farmers use any digital platform for market prices',
          'Cauvery delta: \u20b925,000 crore agricultural output, no digital marketplace'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Uzhavar Sandhai (Farmer Markets): 143 locations across TN',
          'e-NAM integration for 33 TN mandis',
          'PM KISAN: \u20b96,000/year for eligible farmers',
          'TN crop insurance under PMFBY',
          'TNAU (TN Agricultural University) Agri Clinic scheme'
        ],
        whatsGap: [
          'No hyperlocal crop advisory in Tamil language for small farmers',
          'Uzhavar Sandhai has no digital ordering/delivery platform',
          'Market price information not in real-time at village level',
          'Crop insurance claim process is opaque and slow',
          'No direct farmer-to-consumer platform for TN produce'
        ]
      },
      techSolution: {
        what: 'Farmer Intelligence & Direct Market Platform',
        approach: 'WhatsApp/IVR-based crop advisory in Tamil (using TNAU data). Real-time mandi prices. Direct farmer-to-consumer ordering platform for Uzhavar Sandhai digitization. Crop insurance claim tracker.',
        features: [
          'Daily mandi prices via WhatsApp/SMS in Tamil for 50+ commodities',
          'Crop advisory: pest/disease alerts using weather + crop stage + satellite imagery',
          'Direct ordering: consumers buy from Uzhavar Sandhai farmers online',
          'Crop insurance tracker: claim status, documentation checklist',
          'Soil health card reader: interpret soil test results with recommendations',
          'Weather-based farming calendar: when to sow, irrigate, harvest'
        ]
      },
      techStack: {
        frontend: 'WhatsApp Business API + IVR (Exotel/Kaleyra) + basic mobile app',
        backend: 'Python Django/Flask',
        database: 'PostgreSQL',
        sms: 'Twilio/MSG91 for SMS alerts (\u20b90.10\u20130.25 per SMS)',
        satellite: 'Sentinel-2 (ESA, free) for crop health via NDVI',
        weather: 'IMD API + OpenWeather for hyperlocal forecasts',
        hosting: 'DigitalOcean (\u20b92,000\u20135,000/month)'
      },
      revenueModel: [
        'Premium advisory: \u20b999\u2013299/season for personalized crop advice',
        'Transaction commission: 2\u20135% on farmer-to-consumer sales',
        'Agri-input companies: advertising/promotion to targeted farmer audience',
        'Insurance companies: distribution partnership commission',
        'Data licensing: anonymized crop yield + price trend data to commodity traders'
      ],
      govtApproach: {
        who: 'Agriculture Dept, TNAU, Horticulture Dept, Uzhavar Sandhai management',
        how: 'Partner with TNAU for validated crop advisories. Approach Uzhavar Sandhai administrators for digital pilot in 5 markets. NABARD has digital agriculture innovation funds.',
        procurement: 'NABARD innovation fund. Agriculture Dept innovation challenges. StartupTN AgriTech vertical.'
      },
      cost: {
        mvp: '\u20b92\u20134 lakh (WhatsApp bot + mandi prices + basic advisory)',
        full: '\u20b915\u201325 lakh (marketplace, satellite advisory, insurance tracking)',
        timeline: 'MVP: 2\u20133 months. Full: 6\u201310 months'
      },
      realExamples: [
        { name: 'DeHaat', desc: 'Full-stack agriculture platform serving 1.5M+ farmers across India', url: 'dehaat.com' },
        { name: 'Ninjacart', desc: 'Chennai-based agri supply chain startup (backed by Walmart)', url: 'ninjacart.com' },
        { name: 'Digital Green', desc: 'Video-based extension for smallholder farmers in multiple Indian states', url: 'digitalgreen.org' },
        { name: 'Plantix', desc: 'AI crop disease identification from phone camera, available in Tamil', url: 'plantix.net' }
      ],
      buildGuide: [
        'Step 1: Aggregate daily mandi prices from Agmarknet (agmarknet.gov.in) + e-NAM',
        'Step 2: Build WhatsApp bot using Meta Business API to push prices + advisories',
        'Step 3: Partner with TNAU KVK (Krishi Vigyan Kendra) for validated crop advice',
        'Step 4: Add IVR (phone call) channel for non-smartphone farmers',
        'Step 5: Build consumer-facing Uzhavar Sandhai ordering app',
        'Step 6: Add satellite-based crop health monitoring for premium users',
        'Step 7: Pilot with 500 farmers in 1 district, measure income improvement',
        'Step 8: Scale with NABARD / Agriculture Dept partnership'
      ]
    },

    /* ─── 6. HEALTHCARE ACCESS ────────────────────────────── */
    {
      id: 'healthcare-access',
      title: 'Healthcare Access in Rural Areas',
      icon: '\ud83c\udfe5',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'TN has a strong public health system but significant rural gaps. Only 1 doctor per 1,300 people in TN (WHO recommends 1:1,000). Rural areas have 1 doctor per 3,000+. 55% of PHCs in TN have only 1 doctor, 8% have none (RHS 2022). Average travel time to nearest hospital in rural TN: 30\u201345 minutes. Specialist access (cardiologist, oncologist) requires travel to district HQ. CMCHIS (Chief Minister\'s Comprehensive Health Insurance Scheme) covers 1.59 crore families but awareness is low.',
        stats: [
          'TN doctor-population ratio: 1:1,300 (rural: 1:3,000+)',
          '55% of PHCs have single doctor, 8% have no doctor (RHS 2022)',
          'CMCHIS covers 1.59 crore families for up to \u20b95 lakh/year',
          'Only 22% of rural TN residents have used telemedicine (NFHS-5 era surveys)',
          'Mental health: only 0.3 psychiatrists per 100,000 population in TN',
          'Average ambulance response time in rural TN: 20\u201330 minutes (108 service data)'
        ]
      },
      currentStatus: {
        govtDoing: [
          'CMCHIS: cashless treatment at empaneled hospitals',
          'e-Sanjeevani (national telemedicine): operational in TN GHs',
          '108 ambulance service with GPS tracking',
          'UPHC (Urban PHC) expansion in Smart City areas',
          'TN Health System Reform Programme (World Bank aided)'
        ],
        whatsGap: [
          'Telemedicine adoption is very low; no user-friendly app in Tamil',
          'CMCHIS hospital finder is rudimentary, no service/specialty filtering',
          'Medicine availability at PHCs not tracked publicly',
          'No symptom-to-nearby-specialist routing for rural patients',
          'Mental health support virtually absent digitally in Tamil'
        ]
      },
      techSolution: {
        what: 'Rural Health Navigator & Telemedicine Bridge',
        approach: 'Tamil-language health app: symptom checker (rule-based, NOT AI diagnosis), nearest appropriate facility finder with specialties, CMCHIS hospital/entitlement checker, medicine availability tracker at PHCs, mental health helpline connector.',
        features: [
          'Symptom guide in Tamil: point to appropriate care level (PHC/GH/specialist)',
          'Facility finder: PHC, GH, empaneled private hospitals with specialties + distance',
          'CMCHIS checker: eligibility, covered procedures, nearest empaneled hospital',
          'Medicine stock tracker: crowdsourced + PHC self-reporting',
          'Mental health support: Tamil-language resources + helpline directory',
          'Vaccination scheduler: immunization reminders for infants and pregnant women'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) with Tamil/English toggle',
        backend: 'Python Flask/FastAPI',
        database: 'PostgreSQL',
        maps: 'Leaflet + OSM + TNHSP facility data',
        sms: 'Twilio/MSG91 for vaccination reminders',
        hosting: 'DigitalOcean (\u20b92,000\u20134,000/month)'
      },
      revenueModel: [
        'B2G: Health department subscription for medicine stock tracking',
        'Insurance: CMCHIS empaneled hospital verification service',
        'Pharma: generic medicine comparison (ethical advertising)',
        'NGO funding: health access improvement is well-funded category',
        'CSR: Healthcare is Schedule VII eligible CSR activity'
      ],
      govtApproach: {
        who: 'Health & Family Welfare Dept, TNHSP (TN Health Systems Project), DMS, District Health Officers',
        how: 'Partner with TNHSP (World Bank funded, has innovation budget). Pilot in 1 district with DHO support. Integrate with e-Sanjeevani for telemedicine routing.',
        procurement: 'TNHSP innovation fund. NHM (National Health Mission) digital health component.'
      },
      cost: {
        mvp: '\u20b93\u20135 lakh (facility finder + CMCHIS checker + symptom guide)',
        full: '\u20b912\u201320 lakh (medicine tracker, telemedicine bridge, analytics)',
        timeline: 'MVP: 3\u20134 months. Full: 8\u201312 months'
      },
      realExamples: [
        { name: 'e-Sanjeevani', desc: 'Govt of India telemedicine platform, 12 crore+ consultations nationally', url: 'esanjeevani.mohfw.gov.in' },
        { name: 'MediBuddy', desc: 'Indian health platform with teleconsult, lab booking, insurance', url: 'medibuddy.in' },
        { name: 'Intelehealth', desc: 'Open-source telemedicine platform for underserved areas', url: 'intelehealth.org' },
        { name: 'ARMMAN (Mumbai)', desc: 'mHealth for pregnant women: voice call reminders in local languages', url: 'armman.org' }
      ],
      buildGuide: [
        'Step 1: Aggregate facility data from NHP (National Health Portal) + TNHSP',
        'Step 2: Build facility finder with filters (specialty, CMCHIS empaneled, distance)',
        'Step 3: Create rule-based symptom guide (NOT AI diagnosis) reviewed by doctors',
        'Step 4: Add CMCHIS entitlement checker using RSBY/CMCHIS beneficiary lookup',
        'Step 5: Build medicine stock reporting module for PHC pharmacists',
        'Step 6: Add vaccination reminder system with SMS/push notifications',
        'Step 7: Pilot in 1 district with DHO partnership',
        'Step 8: Present outcomes to TNHSP / NHM for scaling'
      ]
    },

    /* ─── 7. EDUCATION QUALITY ────────────────────────────── */
    {
      id: 'education-quality',
      title: 'Education Quality Gaps',
      icon: '\ud83d\udcda',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'TN has 95% literacy but quality gaps persist. NAS (National Achievement Survey) 2021: only 44% of Class 8 students at grade-level in mathematics. 37,000+ govt schools in TN, many with single teacher. School dropout rate: 14.6% at secondary level. Learning loss from COVID: estimated 2\u20133 grade levels in rural schools. English proficiency gap between govt and private school students is growing. ASER 2023: 45% of Std 5 students in rural TN cannot read Std 2 level text.',
        stats: [
          'NAS 2021: only 44% of Class 8 at grade-level math in TN',
          '37,000+ govt schools; 20% with single teacher (UDISE+)',
          'School dropout at secondary level: 14.6%',
          'ASER 2023: 45% of rural Std 5 students cannot read Std 2 level text',
          'Student-computer ratio in govt schools: 1:35 (target: 1:10)',
          'Only 38% of TN govt school teachers trained in ICT (UDISE+ 2022-23)'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Naan Mudhalvan platform: skill development for college students',
          'Illam Thedi Kalvi (Education at Doorstep): community volunteer tutoring',
          'Smart classroom project: 50,000+ classrooms with digital boards',
          'Free laptop scheme for govt school students (Class 11\u201312)',
          'EMIS portal for school data management'
        ],
        whatsGap: [
          'No adaptive learning platform in Tamil medium curriculum',
          'Teacher training for digital tools is inadequate',
          'Learning outcomes not tracked per-student digitally',
          'Career guidance for rural students is virtually absent',
          'After-school tutoring accessible only to urban/affluent students'
        ]
      },
      techSolution: {
        what: 'Tamil-Medium Adaptive Learning Platform',
        approach: 'Tablet/mobile app aligned to TN State Board syllabus in Tamil medium. Adaptive practice exercises that adjust difficulty per student. Teacher dashboard for learning gap identification. Offline-capable for areas with poor connectivity.',
        features: [
          'Tamil-medium content aligned to TN State Board syllabus (Class 1\u201310)',
          'Adaptive practice: auto-adjust difficulty based on student performance',
          'Teacher dashboard: per-student progress, class-level learning gaps',
          'Offline mode: download lessons for areas without internet',
          'Video lessons by master teachers in Tamil',
          'Career guidance module for Class 9\u201312 students'
        ]
      },
      techStack: {
        frontend: 'Flutter (works on low-end Android phones)',
        backend: 'Python Django',
        database: 'PostgreSQL + SQLite (offline sync)',
        content: 'H5P (open-source interactive content) + custom Tamil content',
        analytics: 'Apache Superset for teacher/admin dashboards',
        hosting: 'AWS Lightsail (\u20b92,000\u20135,000/month)',
        offline: 'Service Workers + IndexedDB for offline-first architecture'
      },
      revenueModel: [
        'B2G: License to School Education Dept (\u20b950\u2013100 per student/year)',
        'Freemium: Basic free, premium content + personalized tutoring for \u20b9199/month',
        'CSR: Education is top CSR spending category in India',
        'Foundation funding: education tech is well-funded by Azim Premji, Tata Trusts',
        'Content licensing: license platform to other state boards'
      ],
      govtApproach: {
        who: 'School Education Dept, SCERT (State Council of Educational Research and Training), SSA/Samagra Shiksha',
        how: 'Partner with SCERT for curriculum alignment validation. Pilot in 20\u201350 schools through DEO (District Education Officer). Apply for Samagra Shiksha ICT component funding.',
        procurement: 'Samagra Shiksha ICT budget. PM eVIDYA funding. CSR partnerships.'
      },
      cost: {
        mvp: '\u20b95\u20138 lakh (1 subject, Class 6\u201310, adaptive quiz + teacher dashboard)',
        full: '\u20b930\u201350 lakh (full syllabus, video lessons, offline mode)',
        timeline: 'MVP: 4\u20136 months. Full: 12\u201318 months'
      },
      realExamples: [
        { name: 'Mindspark (EI)', desc: 'Adaptive learning platform proven in Indian govt schools (J-PAL evaluated)', url: 'ei.study/mindspark' },
        { name: 'Khan Academy Lite', desc: 'Offline-capable learning platform deployed in low-connectivity areas', url: 'khanacademy.org' },
        { name: 'Pratham (ASER)', desc: 'Teaching at Right Level (TaRL) methodology proven to improve learning outcomes', url: 'pratham.org' },
        { name: 'Kolibri (Learning Equality)', desc: 'Open-source offline learning platform for underserved communities', url: 'learningequality.org/kolibri' }
      ],
      buildGuide: [
        'Step 1: Map TN State Board syllabus for 1 subject (Math, Class 6\u201310)',
        'Step 2: Create question bank (500+ questions per class) with difficulty tags',
        'Step 3: Build adaptive engine: simple IRT model adjusting difficulty per student',
        'Step 4: Create teacher dashboard showing class-level mastery by topic',
        'Step 5: Add offline mode with sync-when-connected architecture',
        'Step 6: Pilot in 10 government schools with SCERT partnership',
        'Step 7: Measure: pre/post test scores, teacher feedback, usage metrics',
        'Step 8: Present outcomes to SCERT / SSA for scaling across district'
      ]
    },

    /* ─── 8. WOMEN\'S SAFETY ──────────────────────────────── */
    {
      id: 'women-safety',
      title: 'Women\'s Safety',
      icon: '\ud83d\udee1\ufe0f',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'TN recorded 5,000+ crimes against women in 2022 (NCRB). Chennai has one of the highest eve-teasing/stalking complaints in South India. 60% of women in Chennai feel unsafe using public transport after 8 PM (surveys). Only 38% of Chennai police stations have functional women helpdesks. Street lighting coverage: only 65% of GCC roads adequately lit.',
        stats: [
          'Crimes against women in TN: 5,239 (NCRB 2022)',
          '60% of women in Chennai feel unsafe in public transport after 8 PM',
          'Only 38% of police stations have functional women helpdesks',
          'Average response time for women safety calls: 15\u201320 minutes in urban TN',
          'Street lighting: 35% of GCC roads inadequately lit (RTI data)',
          'Only 12% of auto/cab drivers in Chennai are women'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Kavalan SOS app by TN Police for emergency alerts',
          'All Women Police Stations (AWPS) in every district',
          'CCTV coverage expansion under Nirbhaya Fund',
          'Women helpline 181 operational 24/7',
          'She Teams in Chennai for anti-harassment patrols'
        ],
        whatsGap: [
          'Kavalan app has poor UX, low adoption among young women',
          'No safe route recommendation for women travelers',
          'Dark spots / unsafe areas not mapped from citizen feedback',
          'CCTV is not connected to citizen reporting',
          'No community safety network for neighborhood watch'
        ]
      },
      techSolution: {
        what: 'Women\'s Safety & Safe Route Platform',
        approach: 'Crowdsourced safety map: women rate areas by safety (lighting, crowd, police presence). Safe route planner for walking/transit. One-tap SOS with auto-location sharing to trusted contacts + nearest police. Community safety network for neighborhoods.',
        features: [
          'Safety-scored map: crowdsourced ratings for streets, transit stops, areas',
          'Safe route planner: walking routes prioritizing lit, busy streets',
          'One-tap SOS: shares location to 5 emergency contacts + police (via Kavalan integration)',
          'Live tracking: share journey with trusted contacts',
          'Dark spot reporter: crowdsource poorly lit / deserted areas',
          'Community safety: neighborhood women\'s WhatsApp alert network'
        ]
      },
      techStack: {
        frontend: 'React Native (lightweight, fast, essential for SOS functionality)',
        backend: 'Node.js Express (real-time capabilities for live tracking)',
        database: 'PostgreSQL + PostGIS + Redis (for real-time location)',
        maps: 'Mapbox / MapLibre GL with OSM',
        notifications: 'Firebase + SMS fallback for SOS',
        hosting: 'AWS (\u20b93,000\u20138,000/month for real-time features)'
      },
      revenueModel: [
        'Corporate partnerships: companies pay to ensure employee safety (\u20b950\u2013100/employee/month)',
        'CSR: Women\'s safety is high-priority CSR category',
        'Nirbhaya Fund: government funding specifically for women\'s safety tech',
        'Insurance: safety-conscious routes reduce risk, insurance tie-ups',
        'Transport companies: safe route data licensing to Uber/Ola/Rapido'
      ],
      govtApproach: {
        who: 'TN Police (Kavalan team), Women Development Corporation, GCC (street lighting), District Collector',
        how: 'Approach TN Police Kavalan team for API integration. Apply for Nirbhaya Fund (MoWCD) grants. Partner with Smart City SPV for safe city initiatives.',
        procurement: 'Nirbhaya Fund allocation (TN gets \u20b9100+ crore). Smart City safe city component.'
      },
      cost: {
        mvp: '\u20b93\u20135 lakh (SOS app + safety map + safe routes)',
        full: '\u20b910\u201318 lakh (live tracking, community network, analytics)',
        timeline: 'MVP: 2\u20133 months. Full: 6\u20138 months'
      },
      realExamples: [
        { name: 'Safetipin', desc: 'Indian safety audit app used in 50+ cities globally including Chennai', url: 'safetipin.com' },
        { name: 'bSafe (Global)', desc: 'Personal safety app with SOS, live tracking, voice activation', url: 'getbsafe.com' },
        { name: 'RedDot Foundation', desc: 'Safecity crowdmap for reporting harassment, 20,000+ reports in India', url: 'safecity.in' },
        { name: 'Raksha (IIT Madras)', desc: 'Student project for women safety SOS system', url: 'IIT Madras student project' }
      ],
      buildGuide: [
        'Step 1: Build SOS module: one-tap sends GPS + audio clip to emergency contacts',
        'Step 2: Create safety rating system: users rate locations on 5 parameters',
        'Step 3: Integrate street lighting data from GCC + CCTV location data',
        'Step 4: Build safe route planner using safety-weighted road graph',
        'Step 5: Add live journey tracking with auto-SOS if route deviates',
        'Step 6: Partner with college women\'s cells for initial user base',
        'Step 7: Approach TN Police for Kavalan API integration',
        'Step 8: Apply for Nirbhaya Fund grants through DCW / WCD'
      ]
    },

    /* ─── 9. PUBLIC GRIEVANCE REDRESSAL ───────────────────── */
    {
      id: 'grievance-redressal',
      title: 'Public Grievance Redressal',
      icon: '\ud83d\udce3',
      category: 'Governance',
      severity: 'Medium',
      problem: {
        description: 'TN has a robust grievance system (CM Cell receives 10,000+ petitions weekly at Monday meetings) but tracking and transparency are limited. e-Sevai provides 200+ services but many require physical visits. Average grievance resolution time: 30\u201390 days (target: 15). Only 40% of complainants receive status updates. Duplicate complaints waste resources. Rural citizens face difficulty accessing digital grievance platforms.',
        stats: [
          'CM Special Cell: 10,000+ petitions weekly (Monday grievance day)',
          'e-Sevai: 200+ services but 60%+ require physical visit for verification',
          'Average grievance resolution: 30\u201390 days (target: 15 days)',
          'Only 40% complainants receive proactive status updates',
          'Rural digital literacy for grievance filing: under 20%',
          'Duplicate/repeated complaints: estimated 25\u201330% of total volume'
        ]
      },
      currentStatus: {
        govtDoing: [
          'CM Special Cell: weekly grievance hearing in all districts',
          'e-Sevai portal: 200+ government services online',
          'CPGRAMS: central grievance portal accessible from TN',
          'Namma Chennai 311 app: civic grievances in Chennai',
          'CM Dashboard for grievance monitoring'
        ],
        whatsGap: [
          'No unified grievance tracker across departments',
          'Namma Chennai 311 covers only GCC, not state departments',
          'No public dashboard showing resolution rates by department',
          'IVR/voice-based grievance filing for non-literate citizens absent',
          'No citizen satisfaction feedback loop after resolution'
        ]
      },
      techSolution: {
        what: 'Unified Civic Grievance Tracker',
        approach: 'Aggregator platform that tracks grievances across all TN platforms (CM Cell, Namma Chennai 311, CPGRAMS, e-Sevai). Citizen files once, gets unified tracking. Public dashboard shows department performance. Voice-based filing via IVR for non-literate users.',
        features: [
          'Single-window grievance filing across departments',
          'Unified tracker: one dashboard for all your complaints regardless of platform',
          'Public performance dashboard: resolution rates by department/district',
          'Voice-based filing: call and describe issue in Tamil, auto-categorized',
          'Auto-routing: complaint auto-sent to correct department based on type',
          'Follow-up engine: automatic escalation if not resolved in SLA'
        ]
      },
      techStack: {
        frontend: 'Next.js web + React Native mobile',
        backend: 'Python Django (strong admin framework)',
        database: 'PostgreSQL',
        ivr: 'Exotel / Kaleyra for Tamil IVR (\u20b92\u20135 per call)',
        nlp: 'IndicNLP / AI4Bharat for Tamil text classification',
        hosting: 'DigitalOcean (\u20b93,000\u20136,000/month)'
      },
      revenueModel: [
        'B2G: Department subscription for analytics dashboard (\u20b93\u20135 lakh/year)',
        'Citizen premium: priority tracking + legal guidance for \u20b9199/complaint',
        'NGO/CSO partnerships: funded by transparency/governance focused NGOs',
        'Data analytics: sell anonymized grievance trend data to researchers',
        'Foundation funding: governance improvement well-funded by Ford Foundation, Omidyar'
      ],
      govtApproach: {
        who: 'TNeGA (e-Governance Agency), CM Special Cell, District Collectors, Corporation Commissioner',
        how: 'Present as add-on to existing systems, not replacement. TNeGA has innovation lab that accepts proposals. Start by scraping public data from existing portals to build dashboard.',
        procurement: 'TNeGA innovation grants. Smart City digital governance component.'
      },
      cost: {
        mvp: '\u20b93\u20135 lakh (web tracker + basic analytics)',
        full: '\u20b910\u201318 lakh (IVR, NLP categorization, full dashboard)',
        timeline: 'MVP: 3\u20134 months. Full: 6\u20139 months'
      },
      realExamples: [
        { name: 'I Change My City (Janaagraha)', desc: 'Civic participation platform operational in 20+ Indian cities', url: 'ichangemycity.com' },
        { name: 'FixMyStreet (UK)', desc: 'Open-source civic reporting platform used by 100+ councils globally', url: 'fixmystreet.com' },
        { name: 'SeeClickFix (US)', desc: '311 civic issue reporting adopted by 300+ US cities', url: 'seeclickfix.com' },
        { name: 'Namma Chennai 311', desc: 'Chennai Corporation app for civic complaints', url: 'play.google.com: Namma Chennai' }
      ],
      buildGuide: [
        'Step 1: Catalog all TN grievance platforms and their complaint categories',
        'Step 2: Build unified intake form that routes to appropriate department',
        'Step 3: Add Tamil IVR interface for phone-based complaint filing',
        'Step 4: Build public dashboard: complaints filed, pending, resolved by area',
        'Step 5: Add auto-escalation: if SLA breached, alert higher authority',
        'Step 6: Integrate with existing platforms where APIs available',
        'Step 7: Pilot in 1 district, partner with local newspaper for publicity',
        'Step 8: Present resolution improvement data to TNeGA for adoption'
      ]
    },

    /* ─── 10. LAND RECORDS & PROPERTY ─────────────────────── */
    {
      id: 'land-records',
      title: 'Land Records & Property Disputes',
      icon: '\ud83c\udfe0',
      category: 'Governance',
      severity: 'High',
      problem: {
        description: 'Property disputes constitute 66% of all civil litigation in India (NITI Aayog). TN has 2.4 crore land parcels. Digitization of land records under DILRMP (now ULPIN) is ongoing but incomplete. Patta transfer takes 15\u201390 days vs target of 7 days. Title verification requires visiting sub-registrar + village office physically. Encroachment of govt land (poramboke) is rampant but data is scattered.',
        stats: [
          'Property disputes: 66% of all civil cases in Indian courts (NITI Aayog)',
          'TN land parcels: 2.4 crore (digitization ~70% complete under DILRMP)',
          'Patta transfer time: 15\u201390 days (target: 7 days)',
          'TN sub-registrar offices: 580, many without digital records accessible online',
          'Poramboke (govt land) encroachment: 50,000+ acres estimated in Chennai metro alone',
          'Average property litigation duration in TN: 7\u201315 years'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TNSMART (TN Survey and Mapping with Rectified Technology) for resurvey',
          'Patta, chitta, adangal available on tnreginet.gov.in',
          'DILRMP/ULPIN: Unique Land Parcel Identification Number rollout',
          'STAR (Simplification of TN Registration) system',
          'E-registration operational for property transactions'
        ],
        whatsGap: [
          'No single-window title verification tool for citizens',
          'Historical encumbrance check requires physical visit',
          'Government land boundary data not publicly accessible on map',
          'No alert system for unauthorized construction/encroachment near your property',
          'Village-level land data often inconsistent between taluk and district records'
        ]
      },
      techSolution: {
        what: 'Land Intelligence & Title Verification Platform',
        approach: 'Aggregate all publicly available land data (patta, chitta, adangal, encumbrance, survey) into one searchable platform. Overlay on satellite imagery for visual verification. Alert system for transactions on neighboring parcels.',
        features: [
          'Unified land record search: patta + chitta + adangal + encumbrance in one place',
          'Satellite overlay: see your plot on current satellite imagery',
          'Encumbrance history timeline: visual representation of all transactions',
          'Neighborhood alert: notification when properties near yours are transacted',
          'Document checklist: what you need for registration, patta transfer, mutation',
          'Poramboke viewer: government land boundaries on map (from revenue survey data)'
        ]
      },
      techStack: {
        frontend: 'Next.js (SEO-friendly, fast loading)',
        backend: 'Python Django + Scrapy (for aggregating public records)',
        database: 'PostgreSQL + PostGIS',
        maps: 'Leaflet + Google Earth Engine (satellite imagery, free for non-commercial)',
        hosting: 'AWS (\u20b95,000\u201310,000/month)'
      },
      revenueModel: [
        'Title verification report: \u20b9500\u20132,000 per property (banks pay \u20b95,000+ currently)',
        'Real estate platforms: API integration for due diligence (\u20b9100\u2013500/query)',
        'Subscription: property monitoring alerts (\u20b9999/year per property)',
        'B2B: Law firms, banks for bulk title verification',
        'Real estate developers: land availability analysis'
      ],
      govtApproach: {
        who: 'Revenue Dept, Registration Dept (IGR), Survey & Settlement, TNSMART',
        how: 'Start with publicly available data only (no unauthorized scraping). Present as citizen-friendly layer on top of existing portals. Revenue Dept has expressed interest in digital partnerships under DILRMP.',
        procurement: 'DILRMP central funding. Revenue Dept modernization budget.'
      },
      cost: {
        mvp: '\u20b95\u20138 lakh (aggregated search + satellite overlay)',
        full: '\u20b920\u201335 lakh (encumbrance analysis, alerts, API)',
        timeline: 'MVP: 4\u20136 months. Full: 10\u201314 months'
      },
      realExamples: [
        { name: 'Landeed', desc: 'Indian startup for property title verification using AI', url: 'landeed.com' },
        { name: 'Cersai (CERSAI)', desc: 'Central registry for securitisation asset reconstruction', url: 'cersai.org.in' },
        { name: 'LandGlide (US)', desc: 'Property boundary overlay on mobile, 150M+ parcels', url: 'landglide.com' },
        { name: 'tnreginet.gov.in', desc: 'TN Registration Dept portal for patta, guideline values', url: 'tnreginet.gov.in' }
      ],
      buildGuide: [
        'Step 1: Catalog all public land data sources: tnreginet, DILRMP, survey records',
        'Step 2: Build web scraper (legal: public data only) for patta, chitta, adangal',
        'Step 3: Create unified search by survey number, owner name, or location',
        'Step 4: Overlay parcel boundaries on Google/Bing satellite imagery',
        'Step 5: Add encumbrance timeline visualization',
        'Step 6: Build property alert system for ownership changes',
        'Step 7: Validate accuracy with 100 sample properties across 5 districts',
        'Step 8: Launch as freemium service, partner with real estate portals'
      ]
    },

    /* ─── 11. LAKE / WATERBODY RESTORATION ────────────────── */
    {
      id: 'lake-restoration',
      title: 'Lake & Waterbody Restoration',
      icon: '\ud83c\udf0a',
      category: 'Environment',
      severity: 'High',
      problem: {
        description: 'Chennai had 600+ lakes in the 1980s but only a fraction remain healthy (CSE research). TN has 41,127 tanks/lakes (PWD data), many encroached or silted. Chembarambakkam, Red Hills, Puzhal\u2014Chennai\'s lifeline reservoirs\u2014have lost 30%+ capacity to siltation. Lake encroachment directly worsened 2015 floods. Pallikaranai marshland (once 6,000 hectares) reduced to 600 hectares.',
        stats: [
          'Chennai lakes: 600+ in 1980s, <30 in healthy condition by 2008 (CSE)',
          'TN total tanks/lakes: 41,127 (PWD data)',
          'Pallikaranai marsh: shrunk from 6,000 to 600 hectares',
          '19 major Chennai lakes lost 43% area from 1980s to 2000s (state records)',
          'Kudimaramathu scheme: 4,778 waterbodies restored but 36,000+ remain',
          'Only 12% of TN tanks have functional sluice gates (TAWDEVA assessment)'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Kudimaramathu (community waterbody restoration): \u20b91,900 crore across phases',
          'Chennai Rivers Restoration Trust (CRRT) for Cooum, Adyar, Buckingham Canal',
          'TN Wetlands Authority formed',
          'Waterbody encroachment removal drives (periodic)',
          'IAMWARM project (World Bank funded) for water resources management'
        ],
        whatsGap: [
          'No public dashboard showing lake health status (water level, quality, encroachment)',
          'Citizen reporting of encroachment has no structured platform',
          'Historical lake boundary data not overlaid on current satellite imagery',
          'Biodiversity around waterbodies not tracked',
          'Community involvement in Kudimaramathu is declining due to lack of monitoring tools'
        ]
      },
      techSolution: {
        what: 'Lake Health Monitor & Community Restoration Tracker',
        approach: 'Satellite-based lake extent monitoring + citizen water quality testing + community reporting of encroachment. Dashboard showing each lake\'s health score. Community adoption model for restoration tracking.',
        features: [
          'Lake health dashboard: water extent (satellite), quality, biodiversity per lake',
          'Historical comparison: lake boundary then (revenue survey) vs now (satellite)',
          'Encroachment reporter: citizen-submitted geo-tagged evidence',
          'Community adoption: RWAs/NGOs adopt a lake, track restoration progress',
          'Water quality: crowdsourced testing using \u20b9500 test kits (pH, TDS, dissolved O2)',
          'Biodiversity log: citizen science bird/fish/plant observations'
        ]
      },
      techStack: {
        frontend: 'Next.js + Leaflet (web-first, map-centric)',
        backend: 'Python Flask + Google Earth Engine (satellite analysis)',
        database: 'PostgreSQL + PostGIS',
        satellite: 'Sentinel-2 (free, 10m resolution, 5-day revisit) for water extent detection',
        ml: 'NDWI (Normalized Difference Water Index) algorithm for water body detection',
        hosting: 'Google Cloud (\u20b93,000\u20137,000/month for Earth Engine usage)'
      },
      revenueModel: [
        'CSR: Lake restoration is compelling CSR activity, sell monitoring as service',
        'B2G: Corporation/PWD subscription for lakewise monitoring',
        'Research: license historical lake extent data to urban planners, researchers',
        'Eco-tourism: partner with restored lakes for bird-watching tourism',
        'Foundation funding: wetland conservation funded by WWF, WNAF, Wildfowl Trust'
      ],
      govtApproach: {
        who: 'PWD (Water Resources), CRRT, TNWDA (Wetlands Authority), GCC Lakes Division',
        how: 'Start with 10\u201320 lakes in Chennai. Present satellite-based encroachment evidence to PWD. Partner with existing lake restoration NGOs (Environmentalist Foundation of India, CRRT).',
        procurement: 'CRRT innovation component. PWD digitization budget. TNWDA monitoring budget.'
      },
      cost: {
        mvp: '\u20b92\u20134 lakh (satellite monitoring + web dashboard for 50 lakes)',
        full: '\u20b910\u201315 lakh (citizen reporting, water quality, community adoption)',
        timeline: 'MVP: 2\u20133 months. Full: 6\u20138 months'
      },
      realExamples: [
        { name: 'Environmentalist Foundation of India (EFI)', desc: 'Restored 130+ waterbodies across India, uses satellite monitoring', url: 'efi.org.in' },
        { name: 'India Water Portal', desc: 'Comprehensive water data platform with lake/river information', url: 'indiawaterportal.org' },
        { name: 'Global Surface Water Explorer (EC-JRC)', desc: 'Satellite-based 35-year history of surface water globally', url: 'global-surface-water.appspot.com' },
        { name: 'Wetland Mitral (MoEFCC)', desc: 'India\'s wetland monitoring system', url: 'indianwetlands.in' }
      ],
      buildGuide: [
        'Step 1: Get TN lake database from PWD (41,127 lakes with coordinates)',
        'Step 2: Compute NDWI from Sentinel-2 for current water extent of each lake',
        'Step 3: Compare with revenue survey boundaries to detect encroachment/shrinkage',
        'Step 4: Build dashboard with lake-by-lake health scores',
        'Step 5: Add citizen water quality reporting with simple test kits',
        'Step 6: Create community adoption module: assign RWAs/NGOs to lakes',
        'Step 7: Pilot with 20 Chennai lakes, validate with EFI/CRRT',
        'Step 8: Present findings to PWD / Corporation for policy action'
      ]
    },

    /* ─── 12. STREET VENDOR MANAGEMENT ────────────────────── */
    {
      id: 'street-vendors',
      title: 'Street Vendor & Hawker Management',
      icon: '\ud83d\uded2',
      category: 'Livelihood',
      severity: 'Medium',
      problem: {
        description: 'TN has estimated 20\u201325 lakh street vendors (national estimate: 1 crore). Street Vendors Act 2014 mandates registration and vending zones, but implementation is slow. Only 3.5 lakh TN vendors registered under PM SVANidhi. Vendors face constant harassment, eviction without due process, and lack of access to credit, insurance, and digital payments.',
        stats: [
          'Estimated street vendors in TN: 20\u201325 lakh',
          'PM SVANidhi registrations in TN: 3.5 lakh (out of 20L+)',
          'Street Vendors Act 2014: TVC (Town Vending Committee) formed in only 60% of TN municipalities',
          'Average daily income of TN street vendor: \u20b9300\u2013700',
          'Only 15% of TN street vendors have bank accounts (PM SVANidhi data)',
          'Digital payment adoption among vendors: under 20%'
        ]
      },
      currentStatus: {
        govtDoing: [
          'PM SVANidhi: \u20b910,000 micro-credit for vendors',
          'Street Vendors Act 2014: vending zone demarcation ongoing',
          'Town Vending Committees (TVCs) established in major cities',
          'FSSAI Hygiene Rating for food vendors'
        ],
        whatsGap: [
          'No digital vending zone map for vendors or customers',
          'Vendor grievance against eviction has no easy platform',
          'Customer discovery: no way to find nearby vendors by product type',
          'SVANidhi loan application support is paper-heavy',
          'Food safety rating for street food vendors not accessible'
        ]
      },
      techSolution: {
        what: 'Digital Platform for Street Vendors',
        approach: 'Vendor registry + map showing vending zones. Customer-facing app to discover vendors by location/product. SVANidhi loan assistance. Digital payment enablement. Grievance redressal for illegal eviction.',
        features: [
          'Vendor map: find registered vendors near you by product category',
          'Vending zone map: demarcated zones with availability status',
          'SVANidhi helper: guide through loan application, document checklist',
          'Digital payment setup: UPI QR code generation + basic training',
          'Vendor grievance: report illegal eviction with evidence upload',
          'Food safety rating: FSSAI compliance + crowdsourced hygiene rating'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile-first for both vendor and customer)',
        backend: 'Node.js Express',
        database: 'PostgreSQL + PostGIS',
        payments: 'UPI deep-link integration (no payment gateway needed)',
        hosting: 'DigitalOcean (\u20b91,500\u20133,000/month)'
      },
      revenueModel: [
        'B2G: Municipality subscription for vendor management (\u20b92\u20134 lakh/year)',
        'Financial services: lead generation for micro-finance, insurance',
        'Advertising: hyperlocal ads from brands targeting vendor supply chain',
        'Data: anonymized vendor density/sales data for urban planning',
        'Vendor premium: featured listing for \u20b9199/month'
      ],
      govtApproach: {
        who: 'Municipal Corporation (TVC), MEPMA (Mission for Elimination of Poverty in Municipal Areas), DIC',
        how: 'Partner with TVCs for vendor registration data. MEPMA has digital livelihood mandate. Present as PM SVANidhi implementation facilitator.',
        procurement: 'MEPMA/DAY-NULM digital livelihood component. SVANidhi tech partner route.'
      },
      cost: {
        mvp: '\u20b92\u20133 lakh (vendor map + SVANidhi helper)',
        full: '\u20b98\u201312 lakh (customer app, payments, grievance, analytics)',
        timeline: 'MVP: 2\u20133 months. Full: 5\u20137 months'
      },
      realExamples: [
        { name: 'PM SVANidhi Portal', desc: 'National portal for street vendor micro-credit', url: 'pmsvanidhi.mohua.gov.in' },
        { name: 'Peppertap/Dunzo', desc: 'Hyperlocal delivery connecting with local vendors', url: 'dunzo.com' },
        { name: 'SEWA (Ahmedabad)', desc: 'Self-Employed Women\'s Association digitizing women vendors', url: 'sewa.org' },
        { name: 'Venddy (Bengaluru)', desc: 'Street food discovery app with vendor ratings', url: 'Pilot stage startup' }
      ],
      buildGuide: [
        'Step 1: Obtain vendor registration data from TVC/municipal office (file RTI)',
        'Step 2: Map vending zones from municipal notification orders',
        'Step 3: Build vendor discovery app: search by location, product, rating',
        'Step 4: Create SVANidhi assistance module with step-by-step guide',
        'Step 5: Add UPI QR code generator for vendor digital payments',
        'Step 6: Build grievance module for illegal eviction reporting',
        'Step 7: Pilot in 1 market area (T. Nagar, Pondy Bazaar, Broadway)',
        'Step 8: Partner with MEPMA/TVC for official adoption'
      ]
    },

    /* ─── 13. PUBLIC TOILET MAPPING ───────────────────────── */
    {
      id: 'public-toilets',
      title: 'Public Toilet Mapping & Maintenance',
      icon: '\ud83d\udebb',
      category: 'Infrastructure',
      severity: 'Medium',
      problem: {
        description: 'Chennai has ~2,000 public toilets but 40%+ are non-functional at any time. No reliable map of working public toilets exists. Women especially suffer\u2014only 30% of public toilets have separate women\'s sections that are functional. Maintenance contracts are opaque. Open defecation still exists in some peri-urban areas despite ODF declarations.',
        stats: [
          'Chennai public toilets: ~2,000 (GCC data)',
          '40%+ non-functional at any given time (newspaper surveys)',
          'Only 30% have functional separate women\'s sections',
          'Swachh Bharat toilets built but 20% already non-functional in rural TN',
          'Toilet attendant salary often unpaid for months (RTI findings)',
          'No official real-time functional status tracking exists'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Swachh Bharat Mission: toilet construction targets met on paper',
          'GCC contracts private agencies for public toilet maintenance',
          'Google Maps shows some public toilets (crowdsourced, unreliable)',
          'SBM Grameen Phase 2: ODF Plus sustainability'
        ],
        whatsGap: [
          'No real-time map of WORKING public toilets',
          'No citizen feedback mechanism on toilet condition',
          'Women\'s toilet availability not tracked separately',
          'No maintenance accountability dashboard',
          'Disabled-accessible toilet information completely absent'
        ]
      },
      techSolution: {
        what: 'Public Toilet Finder & Maintenance Tracker',
        approach: 'Crowdsourced map of public toilets with real-time functional status. Citizens rate cleanliness, report issues. Maintenance accountability dashboard for corporations. Special filters for women, disabled access.',
        features: [
          'Nearest working toilet finder with real-time status',
          'Filters: women\'s, disabled-accessible, free/paid, baby changing',
          'Citizen rating: cleanliness score updated by recent users',
          'Issue reporter: broken fixture, no water, locked during hours',
          'Maintenance dashboard: contractor accountability tracking',
          'Usage analytics: peak hours, facility planning for new locations'
        ]
      },
      techStack: {
        frontend: 'PWA (Progressive Web App) for instant access, no install needed',
        backend: 'Node.js Express',
        database: 'PostgreSQL + PostGIS',
        maps: 'Leaflet + OSM',
        hosting: 'DigitalOcean (\u20b91,000\u20132,000/month)'
      },
      revenueModel: [
        'B2G: Corporation subscription for maintenance monitoring',
        'Advertising: hyperlocal ads near high-traffic toilet locations',
        'Maintenance contracts: bid for digital monitoring alongside cleaning contracts',
        'CSR: Sanitation is high-priority CSR area',
        'Data: facility planning data for urban planners'
      ],
      govtApproach: {
        who: 'GCC Health/Sanitation Dept, SBM Cell, CMDA for new facility planning',
        how: 'Start with volunteer mapping drive (partner with NSS/NCC volunteers). Present to Corporation Sanitation Officer. Apply for SBM Phase 2 technology component.',
        procurement: 'SBM Phase 2 sustainability budget. Smart City sanitation component.'
      },
      cost: {
        mvp: '\u20b91\u20132 lakh (web PWA with crowdsourced map)',
        full: '\u20b95\u20138 lakh (maintenance tracking, analytics, alerts)',
        timeline: 'MVP: 1\u20132 months. Full: 4\u20135 months'
      },
      realExamples: [
        { name: 'Google Toilet Finder', desc: 'Partnership with MoHUA to show public toilets on Google Maps', url: 'Available on Google Maps in Indian cities' },
        { name: 'Flush (Global)', desc: 'Public toilet finder app with 200,000+ locations worldwide', url: 'flushapp.com' },
        { name: 'SBM Toilet Locator', desc: 'Official Swachh Bharat toilet locator (limited coverage)', url: 'sbm.gov.in' },
        { name: 'ToiletBoard Coalition', desc: 'Global coalition for sanitation innovation', url: 'toiletboard.org' }
      ],
      buildGuide: [
        'Step 1: Compile existing public toilet data from GCC + Google Maps + OSM',
        'Step 2: Organize mapping volunteer drive with college NSS units',
        'Step 3: Build PWA with nearest toilet finder + cleanliness rating',
        'Step 4: Add issue reporting with photo evidence',
        'Step 5: Build maintenance dashboard for corporation monitoring',
        'Step 6: Deploy and promote through RWAs and women\'s groups',
        'Step 7: Present maintenance improvement data to Corporation',
        'Step 8: Integrate with Namma Chennai 311 for complaint routing'
      ]
    },

    /* ─── 14. POWER OUTAGE TRACKING ──────────────────────── */
    {
      id: 'power-outage',
      title: 'Power Outage Tracking',
      icon: '\u26a1',
      category: 'Infrastructure',
      severity: 'Medium',
      problem: {
        description: 'TANGEDCO (TN Generation and Distribution Corporation) manages power for 3.4 crore consumers. Scheduled and unscheduled outages are frequent, especially during summer peak. TANGEDCO website shows planned outages but is poorly formatted and not real-time. No notification system for unplanned outages. Businesses and hospitals need advance notice. TANGEDCO customer complaint resolution: 48\u201372 hours average.',
        stats: [
          'TANGEDCO consumers: 3.4 crore (2023)',
          'Summer peak demand: 19,000+ MW (supply: 17,000 MW, causing load shedding)',
          'Average planned outage duration: 4\u20138 hours per maintenance event',
          'Complaint resolution average: 48\u201372 hours',
          'TANGEDCO WhatsApp complaint service: launched 2023, limited adoption',
          'Transformer failures: 15,000+ annually across TN'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TANGEDCO online complaint portal (tangedco.gov.in)',
          'WhatsApp-based complaint system (launched 2023)',
          'Planned outage notices on website (poorly formatted)',
          'Smart meter rollout (early stages)',
          'SCADA system for real-time grid monitoring (internal)'
        ],
        whatsGap: [
          'No real-time outage map for citizens',
          'No push notifications for outages in your area',
          'Planned outage data not in machine-readable format',
          'No estimated restoration time shared with consumers',
          'No crowdsourced outage reporting for unplanned outages'
        ]
      },
      techSolution: {
        what: 'Power Outage Tracker & Alert System',
        approach: 'Scrape TANGEDCO planned outage data + crowdsourced real-time outage reporting. Push notification alerts for your area. Outage heatmap. Estimated restoration time based on historical data. Business continuity tool.',
        features: [
          'Real-time outage map: planned + crowdsourced unplanned outage reports',
          'Area-specific push alerts: know before outage hits (planned) or instantly (unplanned)',
          'Estimated restoration time based on outage type + historical resolution',
          'Outage history: how often does your area lose power?',
          'Complaint integration: file TANGEDCO complaint from within app',
          'Business tool: advance notification for hospitals, cold storage, factories'
        ]
      },
      techStack: {
        frontend: 'React Native mobile + PWA',
        backend: 'Node.js with web scraping (Cheerio/Puppeteer) for TANGEDCO data',
        database: 'PostgreSQL + Redis for real-time',
        notifications: 'Firebase Cloud Messaging + SMS for critical',
        hosting: 'DigitalOcean (\u20b92,000\u20134,000/month)'
      },
      revenueModel: [
        'Premium alerts: businesses pay \u20b9499\u2013999/month for advance notifications',
        'UPS/inverter advertising: contextual ads during outage reports',
        'Solar installer referral: commission from solar installation leads',
        'Data analytics: sell outage pattern data to power equipment companies',
        'B2G: TANGEDCO dashboard for complaint pattern analysis'
      ],
      govtApproach: {
        who: 'TANGEDCO, TNERC (Regulatory Commission), Smart City SPV',
        how: 'Start with publicly available planned outage data scraping. Build user base first, then approach TANGEDCO for official data partnership. TNERC mandates public disclosure of reliability metrics.',
        procurement: 'Smart meter data integration opportunity. TANGEDCO digital transformation budget.'
      },
      cost: {
        mvp: '\u20b92\u20133 lakh (outage scraper + notifications + crowdsource)',
        full: '\u20b98\u201312 lakh (analytics, business tools, TANGEDCO integration)',
        timeline: 'MVP: 2\u20133 months. Full: 5\u20137 months'
      },
      realExamples: [
        { name: 'PowerCut Alert (India)', desc: 'Community app for reporting power outages, operational in several Indian cities', url: 'Play Store: PowerCut Alert' },
        { name: 'DownDetector', desc: 'Crowdsourced outage reporting for services, model applicable to power', url: 'downdetector.in' },
        { name: 'PowerOutage.us', desc: 'US-wide power outage tracker aggregating utility data', url: 'poweroutage.us' },
        { name: 'TANGEDCO Portal', desc: 'Official complaint and planned outage portal', url: 'tangedco.gov.in' }
      ],
      buildGuide: [
        'Step 1: Build scraper for TANGEDCO planned outage notices (published daily)',
        'Step 2: Parse area/street/time from unstructured text using NLP',
        'Step 3: Create location-based alert system (push + SMS)',
        'Step 4: Add crowdsourced outage reporting (GPS + timestamp)',
        'Step 5: Build outage heatmap and area reliability score',
        'Step 6: Add estimated restoration time from historical patterns',
        'Step 7: Launch in Chennai, expand to Coimbatore, Madurai',
        'Step 8: Approach TANGEDCO for official data feed partnership'
      ]
    },

    /* ─── 15. SENIOR CITIZEN SERVICES ─────────────────────── */
    {
      id: 'senior-services',
      title: 'Senior Citizen Services',
      icon: '\ud83d\udc74',
      category: 'Social',
      severity: 'Medium',
      problem: {
        description: 'TN has 82 lakh (8.2 million) senior citizens (65+), 11.2% of population\u2014highest proportion in India. 40% live alone or with only spouse. Old age pension (\u20b91,000/month) reaches only 26 lakh of 82 lakh. Elder abuse cases increasing: 5,000+ reported in 2022 but actual numbers far higher. Many seniors lack digital literacy for accessing e-Sevai, banking, telemedicine.',
        stats: [
          'TN senior citizens (65+): 82 lakh (11.2% of population, highest in India)',
          '40% of TN seniors live alone or with spouse only',
          'Old age pension (\u20b91,000/month) reaches only 26 lakh of 82 lakh eligible',
          'Elder abuse cases: 5,000+ reported (2022), actual far higher',
          'Only 15% of TN seniors can independently use smartphone apps',
          'Fall-related injuries: leading cause of hospitalization for 70+ age group'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Old Age Pension: \u20b91,000/month for BPL seniors',
          'Maintenance and Welfare of Parents & Senior Citizens Act enforcement',
          'Senior Citizen helpline 14567 (Elderline)',
          'District-level Senior Citizen Welfare Committees',
          'Free bus pass for seniors in MTC'
        ],
        whatsGap: [
          'No unified senior citizen services portal',
          'Pension status tracking requires physical visit',
          'Emergency services not designed for seniors (complex UX)',
          'Social isolation not addressed by any digital platform',
          'Caregiver support/community completely absent digitally'
        ]
      },
      techSolution: {
        what: 'Senior Citizen Care & Services Platform',
        approach: 'Ultra-simple interface for seniors: large buttons, voice commands in Tamil, one-tap emergency. Services include pension tracker, medicine reminders, doctor appointment booking, social connection for isolated seniors, caregiver marketplace.',
        features: [
          'One-tap emergency: calls son/daughter + ambulance + helpline 14567',
          'Pension tracker: check status, payment history, apply for arrears',
          'Medicine reminder: photo-based reminder with alarm (no reading needed)',
          'Doctor appointment: book at nearest GH/PHC with transport',
          'Social connect: daily check-in calls from volunteers to isolated seniors',
          'Caregiver finder: verified home nurses, physiotherapists, companions'
        ]
      },
      techStack: {
        frontend: 'React Native with accessibility focus (large fonts, high contrast, Tamil)',
        backend: 'Python Django',
        database: 'PostgreSQL',
        voice: 'Exotel IVR for voice-based interactions',
        hosting: 'DigitalOcean (\u20b92,000\u20134,000/month)'
      },
      revenueModel: [
        'Caregiver marketplace: 10\u201315% commission on bookings',
        'Health insurance: senior citizen insurance lead generation',
        'CSR: Elder care is compelling CSR category',
        'Premium family plan: remote monitoring for NRI children (\u20b9499/month)',
        'B2G: Senior citizen welfare department subscription'
      ],
      govtApproach: {
        who: 'Social Welfare Dept, District Social Welfare Officer, Senior Citizen Welfare Committees',
        how: 'Partner with Elderline (14567) for emergency routing. Approach Social Welfare Dept with pilot for 1 district. HelpAge India is strong partner for scaling.',
        procurement: 'Social Welfare dept budget. NSAP (National Social Assistance Programme) digital component.'
      },
      cost: {
        mvp: '\u20b93\u20134 lakh (emergency SOS + pension tracker + medicine reminder)',
        full: '\u20b910\u201315 lakh (caregiver marketplace, social connect, IVR)',
        timeline: 'MVP: 2\u20133 months. Full: 6\u20138 months'
      },
      realExamples: [
        { name: 'Elderline 14567', desc: 'National elder helpline by MoSJE', url: 'elderline.in' },
        { name: 'HelpAge India', desc: 'Largest elder care NGO in India, mobile health units', url: 'helpageindia.org' },
        { name: 'Emoha Elder Care', desc: 'Indian startup for senior citizen care with tech-enabled monitoring', url: 'emoha.com' },
        { name: 'GrandPad (US)', desc: 'Simplified tablet for seniors with family connection features', url: 'grandpad.net' }
      ],
      buildGuide: [
        'Step 1: Design ultra-simplified UI: 6 large buttons max on home screen',
        'Step 2: Build one-tap emergency: auto-call family contacts + ambulance',
        'Step 3: Add pension status checker via integration with NSAP portal',
        'Step 4: Create medicine reminder with photo-based pill identification',
        'Step 5: Build volunteer daily check-in call system (IVR-based)',
        'Step 6: Add caregiver finder with verification (Aadhaar + police check)',
        'Step 7: Pilot with 200 seniors in 1 district through Social Welfare Dept',
        'Step 8: Scale with HelpAge India / Elderline partnership'
      ]
    },

    /* ─── 16. CORRUPTION & BRIBERY ─────────────────────────── */
    {
      id: 'corruption-bribery',
      title: 'Corruption & Bribery in Government Services',
      icon: '\ud83d\udcb0',
      category: 'Governance',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu ranked 18th in India Corruption Survey 2019 (CMS). Citizens face bribery demands for basic services: property registration (\u20b95,000\u201350,000), building permits (\u20b910,000\u20131 lakh), police FIR filing, ration card issuance, and birth/death certificates. DVAC (Directorate of Vigilance and Anti-Corruption) registers only 200\u2013300 cases/year against a backdrop of millions of affected citizens. RTI requests take 30\u201390 days and are frequently deflected.',
        stats: [
          'TN DVAC: 267 trap cases in 2022, conviction rate ~35%',
          'CMS Survey: 42% of TN citizens reported paying bribes for public services',
          'RTI: TN had 2.8 lakh RTI applications in 2022; 30% pending beyond deadline',
          'Property registration: Unofficial charges of 1\u20133% above stamp duty are common',
          'Building permits: Average 7\u201312 months with multiple unofficial payments'
        ]
      },
      currentStatus: 'DVAC handles complaints but requires physical filing. CM Special Cell accepts online petitions. Anti-corruption helpline (1064) exists but underutilized. Arappor Iyakkam (NGO) has exposed multiple scams through RTI activism.',
      techSolution: {
        what: 'BribeWatch TN \u2014 Anonymous Bribery Reporting & Transparency Platform',
        approach: 'Crowdsourced bribery reports with anonymity protection. Tracks which departments/offices have highest bribery rates. Generates transparency scorecards for government offices. Provides step-by-step guides to get services WITHOUT bribes.',
        features: [
          'Anonymous bribery report with location, department, amount, service type',
          'Heat map of corruption hotspots by district, department, service',
          'Department transparency scorecard (based on citizen reports)',
          'Bribe-free service guide: exact documents needed, timelines, escalation contacts',
          'RTI request auto-generator with proper legal language',
          'DVAC complaint auto-filing with evidence upload',
          'Community verification of reports to prevent misuse',
          'WhatsApp bot for reporting in Tamil (most accessible channel)'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + Next.js (web)',
        backend: 'Node.js/Express with Tor-compatible API endpoints for anonymity',
        database: 'PostgreSQL with anonymized records, no IP logging',
        maps: 'Leaflet + OpenStreetMap for corruption heat maps',
        iot: 'N/A',
        ml: 'Anomaly detection to identify corruption patterns and predict high-risk offices',
        hosting: 'Offshore VPS for anonymity protection + Cloudflare for DDoS',
        data: 'RTI responses (scraped), DVAC annual reports, CMS surveys, user reports'
      },
      revenueModel: [
        'Freemium: Basic reporting free, premium analytics for journalists/NGOs (\u20b92,000/month)',
        'RTI-as-a-Service: File RTI requests for citizens (\u20b9200\u2013500 per request)',
        'Transparency consulting: Help government departments improve scores (\u20b95\u201315 lakh/year)',
        'Media licensing: Aggregated corruption data to investigative journalists'
      ],
      govtApproach: {
        who: 'DVAC, CM Special Cell, TN e-Governance Agency, District Collectors',
        how: 'Position as transparency tool that HELPS honest officials. Start with positive framing: "Help your department score higher." Partner with DVAC for verified complaint routing.',
        procurement: 'Unlikely direct govt procurement. Better route: NGO partnership (Arappor Iyakkam, 5th Pillar) + media pressure for adoption.'
      },
      cost: { mvp: '\u20b94\u20136 lakh', full: '\u20b925\u201340 lakh', timeline: 'MVP: 4 months, Full: 10 months' },
      realExamples: [
        { name: 'I Paid A Bribe (Janaagraha)', desc: 'India\'s first crowdsourced bribery reporting platform from Bangalore. 1.8 lakh+ reports since 2010.', url: 'https://www.ipaidabribe.com/' },
        { name: 'Arappor Iyakkam', desc: 'Chennai-based anti-corruption NGO that exposed \u20b91,000+ crore irregularities through RTI activism.', url: 'https://arfrm.org/' },
        { name: '5th Pillar (Zero Rupee Note)', desc: 'TN-based NGO distributing zero rupee notes as protest tool against bribery. 2.5 million notes distributed.', url: 'https://5thpillar.org/' }
      ],
      buildGuide: [
        'Step 1: Study I Paid A Bribe and Arappor Iyakkam models for what works in Indian context',
        'Step 2: Build anonymous reporting API with no IP/device logging (privacy by design)',
        'Step 3: Create WhatsApp bot interface for Tamil-language reporting (most accessible)',
        'Step 4: Scrape RTI responses and DVAC data to build department baseline scores',
        'Step 5: Build heat map visualization with district/department drill-down',
        'Step 6: Add bribe-free service guides with exact document checklists and timelines',
        'Step 7: Partner with Arappor Iyakkam or 5th Pillar for credibility and report verification',
        'Step 8: Launch in 2\u20133 districts, get media coverage, scale statewide'
      ]
    },

    /* ─── 17. ADDICTION CRISIS ─────────────────────────────── */
    {
      id: 'addiction-crisis',
      title: 'Addiction Crisis (Alcohol, Drugs, Gaming)',
      icon: '\u26a0\ufe0f',
      category: 'Health',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu has one of India\'s highest alcohol consumption rates. TASMAC (state monopoly) operates 5,300+ liquor shops generating \u20b940,000+ crore revenue (2023-24), making the state financially dependent on alcohol sales. Drug abuse is rising: NCRB 2022 shows 15,000+ drug seizure cases in TN. Ganja cultivation in Western Ghats districts (Theni, Dindigul, Idukki border) is a growing concern. Online gaming addiction among youth led to TN banning online gambling (later struck down by courts). NIMHANS estimates 3\u20135% of TN youth have gaming disorder.',
        stats: [
          'TASMAC revenue: \u20b940,240 crore in 2023-24 (\u223c14% of TN\'s own tax revenue)',
          'TN alcohol-related deaths: 20,000+ per year (estimated from liver disease + accident data)',
          'NCRB 2022: 15,847 drug seizure cases in TN (up 23% from 2020)',
          'TN ranks #2 in India for methanol poisoning deaths (hooch tragedies)',
          'Gaming addiction: 3\u20135% of youth (NIMHANS), multiple student suicides linked to online gaming debt',
          'De-addiction centers: Only 45 government centers for 7.5 crore population'
        ]
      },
      currentStatus: 'TASMAC is state-run monopoly with no real incentive to reduce consumption. Government de-addiction helpline 1800-599-0019 exists but poorly known. TN has 45 government de-addiction centers (critically insufficient). NGOs like TTK Hospital, SCARF, and Mohan Foundation run private centers. Online gaming regulation attempted but legally challenged.',
      techSolution: {
        what: 'SoberTN \u2014 Addiction Support, Recovery & Community Platform',
        approach: 'Anonymous peer support platform connecting people struggling with addiction to recovery resources. Tracks TASMAC outlet density, alcohol-related incidents, and provides early intervention tools.',
        features: [
          'Anonymous addiction self-assessment (WHO AUDIT tool adapted for Tamil)',
          'TASMAC outlet density map with proximity alerts for recovering users',
          'De-addiction center finder: all 45 govt + 200+ private centers with reviews',
          'Anonymous peer support chat (moderated by trained counselors)',
          'Family support module: guides for families of addicts',
          'Gaming addiction tracker: screen time monitoring + intervention prompts',
          'Emergency SOS: nearest hospital for alcohol poisoning / overdose',
          'Recovery milestone tracking with community encouragement',
          'Hooch tragedy alert system: crowdsourced reports of illicit liquor'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + PWA for low-bandwidth areas',
        backend: 'Node.js/Express with WebSocket for real-time chat',
        database: 'PostgreSQL (anonymized profiles) + Redis (chat sessions)',
        maps: 'Leaflet + OSM for TASMAC locations and de-addiction centers',
        iot: 'N/A',
        ml: 'NLP for chat moderation, risk assessment from self-reports',
        hosting: 'AWS/DigitalOcean (\u20b93,000\u20135,000/month initial)',
        data: 'TASMAC outlet data (RTI), NCRB drug statistics, WHO AUDIT questionnaire, hospital emergency data'
      },
      revenueModel: [
        'Premium recovery programs: \u20b9299\u2013999/month for structured courses',
        'Corporate wellness: Sell to IT companies for employee assistance (\u20b95\u201310 lakh/year)',
        'Insurance partnerships: Reduced premiums for users in recovery programs',
        'Government contracts: De-addiction awareness campaign platform',
        'Donations and grants from health foundations (WHO, public health orgs)'
      ],
      govtApproach: {
        who: 'TN Dept of Prohibition & Excise, Health & Family Welfare, NIMHANS TN center',
        how: 'Frame as public health tool, not anti-TASMAC. Partner with Health Department for de-addiction center data. Position as reducing healthcare costs from alcohol-related diseases.',
        procurement: 'Health Department digital health initiatives. CSR funding from pharma companies.'
      },
      cost: { mvp: '\u20b95\u20138 lakh', full: '\u20b935\u201350 lakh', timeline: 'MVP: 4 months, Full: 12 months' },
      realExamples: [
        { name: 'Alcoholics Anonymous India', desc: 'AA has 50+ groups in TN but limited digital presence. Most meetings are in-person only.', url: 'https://www.aaindia.org/' },
        { name: 'NIMHANS SHUT Clinic', desc: 'India\'s first clinic for gaming/internet addiction. Service for Healthy Use of Technology.', url: 'https://nimhans.ac.in/' },
        { name: 'Sober Grid (US)', desc: 'Peer-to-peer recovery social network with 250K+ users. Location-based sober community.', url: 'https://www.sobergrid.com/' }
      ],
      buildGuide: [
        'Step 1: Digitize WHO AUDIT questionnaire and adapt to Tamil language and cultural context',
        'Step 2: RTI to get TASMAC outlet locations (5,300+ shops) and map them',
        'Step 3: Build de-addiction center directory from Health Dept data + field verification',
        'Step 4: Create anonymous chat system with trained volunteer moderators',
        'Step 5: Add gaming addiction module with screen-time tracking (Android focus)',
        'Step 6: Pilot with 500 users through TTK Hospital or SCARF partnership',
        'Step 7: Add family support features and emergency SOS',
        'Step 8: Seek Health Dept endorsement and scale through primary health centers'
      ]
    },

    /* ─── 18. CASTE DISCRIMINATION ────────────────────────── */
    {
      id: 'caste-discrimination',
      title: 'Caste Discrimination & Honor Violence',
      icon: '\u26d4',
      category: 'Social',
      severity: 'Critical',
      problem: {
        description: 'Despite progressive Dravidian politics, caste-based discrimination persists in TN. Honor killings of inter-caste couples make headlines regularly. Manual scavenging continues despite being illegal since 1993. NCRB 2022 reports 1,500+ atrocities against SC/ST in TN. Two-tumbler system (separate glasses for Dalits) still exists in some rural areas. Temple entry discrimination, separate burial grounds, and social boycotts of inter-caste families are documented by Evidence (NGO).',
        stats: [
          'NCRB 2022: 1,547 cases of atrocities against SC/ST registered in TN',
          'Honor killings: 20\u201330 reported cases/year in TN (actual numbers higher due to underreporting)',
          'Manual scavenging deaths: 5\u201310/year in TN despite being illegal (Safai Karmachari Andolan data)',
          'SC/ST population: 20.01% SC + 1.1% ST = 21.11% of TN population (Census 2011)',
          'Conviction rate for SC/ST atrocity cases in TN: only 5\u20138% (Human Rights Watch)'
        ]
      },
      currentStatus: 'SC/ST Prevention of Atrocities Act exists but poorly enforced. Special courts for SC/ST cases are understaffed. TN has Adi Dravidar & Tribal Welfare Dept but focuses on schemes, not protection. NGOs like Evidence, Dalit Human Rights Movement document cases. National SC/ST Commission reviews individual complaints.',
      techSolution: {
        what: 'EquityWatch TN \u2014 Caste Discrimination Documentation & Legal Aid Platform',
        approach: 'Secure platform for documenting caste discrimination incidents with legal aid connection. Tracks patterns, connects victims to lawyers, and generates evidence for prosecution under SC/ST Act.',
        features: [
          'Secure incident reporting with photo/video/audio evidence upload',
          'Legal aid directory: SC/ST Act specialists, Legal Services Authority contacts per district',
          'Case tracker: follow SC/ST atrocity cases through court system',
          'Emergency SOS for honor killing threats with police/NGO auto-alert',
          'Heat map of discrimination incidents by type and location',
          'Know Your Rights module: SC/ST Act provisions explained in Tamil',
          'Anonymous whistleblower channel for manual scavenging reports',
          'Community support network connecting inter-caste couples'
        ]
      },
      techStack: {
        frontend: 'React Native with end-to-end encryption',
        backend: 'Node.js with encrypted storage, no plaintext PII',
        database: 'PostgreSQL with field-level encryption for victim data',
        maps: 'Leaflet + OSM for incident mapping (anonymized)',
        iot: 'N/A',
        ml: 'Pattern detection for recurring discrimination hotspots',
        hosting: 'Secure cloud with data residency in India (AWS Mumbai)',
        data: 'NCRB data, SC/ST Commission reports, Evidence NGO documentation, court records'
      },
      revenueModel: [
        'Grant-funded: Human rights foundations (Ford Foundation, Open Society)',
        'Legal tech SaaS: Case management for SC/ST lawyers (\u20b91,000/month)',
        'Research licensing: Anonymized data for academic institutions',
        'Government contracts: Monitoring tool for SC/ST welfare departments'
      ],
      govtApproach: {
        who: 'Adi Dravidar & Tribal Welfare Dept, TN State SC/ST Commission, District Collectors, Legal Services Authority',
        how: 'Frame as implementation monitoring tool for existing laws. Partner with Legal Services Authority for free legal aid integration. Present to SC/ST Commission as case tracking improvement.',
        procurement: 'SC/ST Sub-Plan funding. Legal Services Authority digital initiatives.'
      },
      cost: { mvp: '\u20b96\u20138 lakh', full: '\u20b930\u201345 lakh', timeline: 'MVP: 5 months, Full: 12 months' },
      realExamples: [
        { name: 'Evidence (NGO)', desc: 'Madurai-based organization documenting caste atrocities in TN since 2000. Extensive database of cases.', url: 'https://www.aborad.org/' },
        { name: 'Safai Karmachari Andolan', desc: 'National movement against manual scavenging. Documents deaths and advocates for mechanization.', url: 'https://safaikarmachariandolan.org/' },
        { name: 'National Crime Records Bureau', desc: 'Annual Crime in India report with state-wise SC/ST atrocity data.', url: 'https://ncrb.gov.in/' }
      ],
      buildGuide: [
        'Step 1: Study SC/ST Prevention of Atrocities Act and TN-specific rules thoroughly',
        'Step 2: Design secure, encrypted reporting system with victim identity protection',
        'Step 3: Build legal aid directory from Legal Services Authority and bar council data',
        'Step 4: Create Know Your Rights module in Tamil with visual/audio for low literacy',
        'Step 5: Add emergency SOS feature for honor killing threats',
        'Step 6: Partner with Evidence NGO and Dalit Human Rights Movement for pilot',
        'Step 7: Train community volunteers as digital documenters in 5 high-incident districts',
        'Step 8: Advocate for government adoption as official monitoring tool'
      ]
    },

    /* ─── 19. CHILD PROTECTION ─────────────────────────────── */
    {
      id: 'child-protection',
      title: 'Child Labor & Child Marriage',
      icon: '\ud83d\udc76',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'Despite TN being a progressive state, child labor persists in spinning mills (Erode, Tiruppur), brick kilns, and match factories (Sivakasi). Census 2011 recorded 1.5 lakh child laborers in TN (actual numbers estimated 3\u20135x higher). Child marriage affects 14.7% of girls (NFHS-5), higher in Dharmapuri, Villupuram, and Krishnagiri. \'Sumangali scheme\' (bonded labor of girls in garment factories) was internationally condemned.',
        stats: [
          'Census 2011: 1,51,437 child workers in TN (5\u201314 years)',
          'NFHS-5: 14.7% of women aged 20\u201324 married before 18 in TN',
          'Sivakasi match industry: estimated 25,000\u201345,000 child workers (ILO study)',
          'Child helpline 1098: 2.5 lakh+ calls from TN in 2022-23',
          'Only 35% of rescued child laborers successfully rehabilitated (CWC data)'
        ]
      },
      currentStatus: 'NCPCR and State Commission for Protection of Child Rights monitor. Childline 1098 operates across TN. District Child Protection Units exist in all 38 districts. TN passed rules against Sumangali scheme. NGOs like Pratham, CRY, and SAVE work on rescue and rehabilitation.',
      techSolution: {
        what: 'ChildGuard TN \u2014 Child Protection Monitoring & Reporting Platform',
        approach: 'Anonymous reporting platform for child labor/marriage with automated alert routing to authorities. Uses satellite imagery and supply chain tracing to identify child labor in industries.',
        features: [
          'Anonymous child labor/marriage reporting with geo-tagged evidence',
          'Auto-routing to Childline 1098, CWC, District Magistrate',
          'Supply chain transparency: trace child labor in garment/match factories',
          'School dropout tracker: children who leave school flagged for intervention',
          'Marriage registration cross-check: flag underage registrations',
          'Rehabilitation tracker: follow rescued children through education re-entry',
          'NGO coordination dashboard for multi-agency rescue operations',
          'AI analysis of satellite imagery for informal factories/kilns'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + Progressive Web App',
        backend: 'Python FastAPI for ML pipeline + Node.js for real-time alerts',
        database: 'PostgreSQL with sensitive data encryption',
        maps: 'Google Earth Engine + Leaflet for factory/kiln identification',
        iot: 'N/A',
        ml: 'Computer vision for satellite imagery analysis, NLP for report classification',
        hosting: 'AWS with HIPAA-equivalent data protection',
        data: 'UDISE+ school data, Census child labor data, Childline reports, NFHS surveys'
      },
      revenueModel: [
        'Grant-funded: UNICEF, ILO, CRY, Pratham Foundation',
        'Supply chain auditing SaaS for garment brands (\u20b92\u20135 lakh/audit)',
        'Government contracts: DCPU monitoring tool (\u20b95\u201310 lakh/year per district)',
        'CSR funding from garment industry companies (H&M, Zara supply chain compliance)'
      ],
      govtApproach: {
        who: 'Women & Child Development Dept, District Child Protection Units, Labour Dept, SCPCR',
        how: 'Present as DCPU efficiency tool. Integrate with existing Childline 1098 infrastructure. Use as supply chain compliance tool under Child Labour Act 2016.',
        procurement: 'ICPS (Integrated Child Protection Scheme) funding. CSR from garment companies.'
      },
      cost: { mvp: '\u20b95\u20137 lakh', full: '\u20b930\u201340 lakh', timeline: 'MVP: 4 months, Full: 10 months' },
      realExamples: [
        { name: 'Childline 1098', desc: 'India\'s emergency helpline for children. Handles 40 lakh+ calls/year nationally.', url: 'https://www.childlineindia.org/' },
        { name: 'Pratham (ASER)', desc: 'Annual Status of Education Report tracks out-of-school children. Works in 20+ TN districts.', url: 'https://www.pratham.org/' },
        { name: 'Good Weave', desc: 'International certification for child-labor-free supply chains in South Asian textiles.', url: 'https://goodweave.org/' }
      ],
      buildGuide: [
        'Step 1: Map all Childline 1098, CWC, DCPU contacts for 38 TN districts',
        'Step 2: Build anonymous reporting system with auto-routing to nearest DCPU',
        'Step 3: Integrate UDISE+ data to identify school dropout patterns by area',
        'Step 4: Create supply chain tracing module for Tiruppur garment industry pilot',
        'Step 5: Add rehabilitation tracker with education re-enrollment monitoring',
        'Step 6: Pilot with CRY or SAVE in Sivakasi (match industry) and Tiruppur (garments)',
        'Step 7: Train community volunteers and Anganwadi workers as reporters',
        'Step 8: Seek DCPU official adoption in 5 districts, then scale statewide'
      ]
    },

    /* ─── 20. MENTAL HEALTH ────────────────────────────────── */
    {
      id: 'mental-health',
      title: 'Mental Health Crisis',
      icon: '\ud83e\udde0',
      category: 'Health',
      severity: 'High',
      problem: {
        description: 'Tamil Nadu has India\'s 2nd highest suicide rate (NCRB 2022: 18,925 suicides, rate of 24.9 per lakh \u2014 double the national average of 12.4). Farmer suicides, student suicides (NEET-related), and daily wage worker suicides are persistent crises. TN has only 0.3 psychiatrists per lakh population (WHO recommends 3). Mental health stigma prevents treatment-seeking: only 10\u201315% of those needing help actually access services.',
        stats: [
          'NCRB 2022: 18,925 suicides in TN (2nd highest state, rate: 24.9/lakh)',
          'Student suicides: 1,800+ in 2022 (TN ranks #2 nationally)',
          'Psychiatrists: 0.3 per lakh (WHO recommends 3 per lakh \u2014 10x gap)',
          'DMHP (District Mental Health Programme) covers only 24 of 38 districts',
          'Tele-MANAS helpline: received 15,000+ calls from TN in first year (2022-23)',
          'Estimated 1 in 7 Indians has mental health condition (Lancet 2020)'
        ]
      },
      currentStatus: 'Tele-MANAS (14416) launched 2022 for telecounseling. iCall (TISS) provides phone counseling. SCARF Chennai is a leading mental health NGO. NIMHANS has extension programs in TN. District Mental Health Programme active in 24 districts. TN Mental Health Policy 2021 exists but implementation is slow.',
      techSolution: {
        what: 'MindTN \u2014 Mental Health Access & Early Intervention Platform',
        approach: 'Low-barrier mental health platform in Tamil offering self-assessment, AI-assisted triage, telecounseling, and community support. Integrates with existing Tele-MANAS and district mental health programs.',
        features: [
          'PHQ-9/GAD-7 self-assessment in Tamil with voice interface for low literacy',
          'AI chatbot for initial screening and crisis detection',
          'Telecounseling: connect to nearest available counselor (video/audio/chat)',
          'Crisis SOS: direct line to suicide prevention (AASRA: 9820466726)',
          'Therapist finder: mapped database of psychiatrists, psychologists, counselors per district',
          'Peer support groups: moderated anonymous groups by issue (grief, anxiety, NEET stress)',
          'Employer mental health module: workplace wellness for IT/manufacturing companies',
          'Student stress module: exam anxiety, NEET pressure, career counseling integration'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + PWA for feature phones',
        backend: 'Python FastAPI (ML models) + Node.js (real-time chat)',
        database: 'PostgreSQL with HIPAA-equivalent encryption, Redis for sessions',
        maps: 'Leaflet for therapist/hospital mapping',
        iot: 'Wearable integration (heart rate variability for stress detection)',
        ml: 'NLP for crisis detection in chat, sentiment analysis for risk scoring',
        hosting: 'AWS Mumbai (data residency compliance)',
        data: 'DMHP data, NIMHANS research, WHO assessment tools (PHQ-9, GAD-7), Tele-MANAS data'
      },
      revenueModel: [
        'B2C subscription: \u20b9199\u2013499/month for premium counseling sessions',
        'B2B corporate wellness: \u20b91\u20135 lakh/year per company (IT sector)',
        'B2G: District Mental Health Programme digital tool (\u20b93\u20135 lakh/year per district)',
        'Insurance integration: Mental health pre-screening for health insurers',
        'Grant funding: WHO, NIMHANS, public health foundations'
      ],
      govtApproach: {
        who: 'Health & Family Welfare Dept, DMHP, SCARF, NIMHANS extension, Tele-MANAS',
        how: 'Integrate with Tele-MANAS infrastructure. Present as DMHP force multiplier. Pilot in 5 districts with highest suicide rates.',
        procurement: 'National Mental Health Programme funding. NHM digital health initiatives.'
      },
      cost: { mvp: '\u20b96\u201310 lakh', full: '\u20b940\u201360 lakh', timeline: 'MVP: 5 months, Full: 14 months' },
      realExamples: [
        { name: 'Tele-MANAS (Govt)', desc: 'National telecounseling helpline (14416). 40 lakh+ calls in first year. Free service.', url: 'https://telemanas.mohfw.gov.in/' },
        { name: 'SCARF Chennai', desc: 'Schizophrenia Research Foundation. India\'s leading mental health NGO, based in Chennai.', url: 'https://www.scarfindia.org/' },
        { name: 'iCall (TISS)', desc: 'Psychosocial helpline by Tata Institute. Free counseling via phone/email/chat.', url: 'https://icallhelpline.org/' }
      ],
      buildGuide: [
        'Step 1: Adapt WHO PHQ-9 and GAD-7 tools to Tamil with audio/visual interface',
        'Step 2: Build therapist directory from Medical Council and DMHP data for all 38 districts',
        'Step 3: Develop AI chatbot for initial screening with crisis detection triggers',
        'Step 4: Create telecounseling module with WebRTC video/audio + chat fallback',
        'Step 5: Add peer support group system with trained moderators',
        'Step 6: Pilot with SCARF Chennai in 3 high-suicide-rate districts',
        'Step 7: Integrate with Tele-MANAS for seamless referral pipeline',
        'Step 8: Scale through PHCs (Primary Health Centers) and school counselors'
      ]
    },

    /* ─── 21. DISABILITY ACCESSIBILITY ────────────────────── */
    {
      id: 'disability-access',
      title: 'Disability Accessibility',
      icon: '\u267f',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'Census 2011 records 11.8 lakh persons with disabilities (PwD) in TN (1.6% of population). Rights of Persons with Disabilities Act 2016 mandates accessibility in all public buildings, transport, and digital services \u2014 but compliance is below 20% in TN. Only 36% of government buildings in TN are wheelchair accessible (CAG 2022). Bus stops, railway stations, and public toilets are largely inaccessible.',
        stats: [
          'Census 2011: 11.8 lakh PwD in TN (actual estimated 3\u20134% = 27+ lakh)',
          'Only 36% of TN govt buildings wheelchair accessible (CAG audit 2022)',
          'UDID cards issued: only 4.2 lakh of estimated 27+ lakh PwD (15%)',
          'TN PwD unemployment rate: estimated 70\u201380%',
          'Accessible toilets in public spaces: less than 5% in most cities'
        ]
      },
      currentStatus: 'Welfare of Differently Abled Persons Dept provides UDID cards, assistive devices, pensions. RPwD Act 2016 mandates 5% reservation in govt jobs and 4% in education. Accessibility audit of government buildings incomplete. Chennai Metro is fully accessible but city buses largely are not.',
      techSolution: {
        what: 'AccessTN \u2014 Accessibility Mapping & Rights Platform',
        approach: 'Crowdsourced accessibility mapping of public spaces, transport, and services. Connects PwD with government schemes, assistive tech, and employment opportunities.',
        features: [
          'Crowdsourced accessibility ratings for public buildings, transport, toilets',
          'Navigation routes optimized for wheelchair users (avoiding stairs, broken sidewalks)',
          'UDID registration assistance with document checklist',
          'Government scheme finder: 20+ disability welfare schemes with eligibility checker',
          'Accessible job board: companies with PwD-friendly workplaces',
          'Assistive device marketplace: hearing aids, wheelchairs, prosthetics with subsidy info',
          'Complaint portal: report accessibility violations under RPwD Act',
          'Voice-first interface for visually impaired users'
        ]
      },
      techStack: {
        frontend: 'React Native with full screen reader support (TalkBack/VoiceOver)',
        backend: 'Node.js/Express',
        database: 'PostgreSQL + PostGIS for spatial accessibility data',
        maps: 'Leaflet + OSM with custom accessibility layer',
        iot: 'Bluetooth beacons for indoor navigation in government buildings',
        ml: 'Computer vision for automated accessibility audit from photos',
        hosting: 'AWS/DigitalOcean (\u20b93,000\u20135,000/month)',
        data: 'CAG accessibility audit, UDID database, RPwD Act compliance data, user crowdsourced ratings'
      },
      revenueModel: [
        'B2G: Accessibility audit tool for government departments (\u20b95\u201310 lakh/year)',
        'B2B: Corporate accessibility consulting (\u20b92\u20135 lakh/company)',
        'Assistive device marketplace commission (5\u201310%)',
        'Grant funding: disability rights organizations (CBM, Sense International)'
      ],
      govtApproach: {
        who: 'Dept for Welfare of Differently Abled, State Commissioner for Disabilities, Smart City SPVs',
        how: 'Position as RPwD Act compliance monitoring tool. Present to State Commissioner as enforcement aid.',
        procurement: 'RPwD Act implementation budget. Smart City accessibility mandates.'
      },
      cost: { mvp: '\u20b94\u20136 lakh', full: '\u20b920\u201335 lakh', timeline: 'MVP: 4 months, Full: 10 months' },
      realExamples: [
        { name: 'Wheelmap.org', desc: 'Global crowdsourced wheelchair accessibility map. 1 million+ locations rated.', url: 'https://wheelmap.org/' },
        { name: 'AccessNow', desc: 'App for rating accessibility of places worldwide. Active in 35+ countries.', url: 'https://accessnow.com/' },
        { name: 'Enable India', desc: 'Bangalore-based NGO connecting PwD with employment. Placed 50,000+ in jobs.', url: 'https://enableindia.org/' }
      ],
      buildGuide: [
        'Step 1: Audit RPwD Act requirements and map to app feature checklist',
        'Step 2: Build accessibility rating system (ramp, lift, toilet, signage, staff training)',
        'Step 3: Import CAG audit data for government buildings as baseline',
        'Step 4: Create voice-first interface for visually impaired users from day 1',
        'Step 5: Build scheme finder from Disability Welfare Dept data',
        'Step 6: Pilot with PwD organizations in Chennai (APD, Vidya Sagar, Amar Seva Sangam)',
        'Step 7: Add accessible job board with verified PwD-friendly employers',
        'Step 8: Advocate for government adoption as RPwD compliance monitoring tool'
      ]
    },

    /* ─── 22. COASTAL & FISHING COMMUNITY ─────────────────── */
    {
      id: 'coastal-fishing',
      title: 'Coastal Erosion & Fishing Community Issues',
      icon: '\ud83c\udf0a',
      category: 'Environment',
      severity: 'High',
      problem: {
        description: 'Tamil Nadu has 1,076 km coastline with 591 fishing villages and 10 lakh+ fisherfolk. Coastal erosion threatens 40% of TN coastline (NCSCM study). Climate change is reducing fish catch by 15\u201325%. International Maritime Boundary Line (IMBL) disputes with Sri Lanka lead to arrests of TN fishermen (700+ in Sri Lankan jails at any time). Mechanized trawling damages marine ecosystems. Post-tsunami (2004) and Cyclone Gaja (2018) recovery still incomplete in many villages.',
        stats: [
          'TN coastline: 1,076 km across 13 coastal districts',
          'Fishing population: 10.47 lakh active fisherfolk (Fisheries Dept)',
          'Coastal erosion: 40% of TN coast experiencing erosion (NCSCM 2020)',
          'Sri Lanka arrests: 200\u2013400 TN fishermen arrested annually',
          'Fish catch decline: 15\u201325% reduction over past decade (CMFRI)',
          'Cyclone Gaja 2018: \u20b930,000+ crore damage to coastal TN'
        ]
      },
      currentStatus: 'Fisheries Dept provides subsidies for boats, nets, GPS. INCOIS provides PFZ (Potential Fishing Zone) advisories. Deep-sea fishing policy encourages moving beyond IMBL. CMFRI monitors fish stock. Several NGOs (SNEHA, DHAN Foundation) work in coastal communities.',
      techSolution: {
        what: 'CoastGuard TN \u2014 Fishing Community Safety & Livelihood Platform',
        approach: 'Integrated platform combining IMBL warning system, weather/wave alerts, fish market price transparency, and coastal erosion monitoring. Designed for low-literacy fishermen with voice/visual interface in Tamil.',
        features: [
          'IMBL proximity warning with GPS tracking (prevent arrests)',
          'Real-time weather and wave alerts from IMD/INCOIS',
          'PFZ (fishing zone) advisories on mobile with visual maps',
          'Fish market price tracker: auction prices across TN harbors',
          'Distress SOS button: sends GPS location to Coast Guard and family',
          'Coastal erosion monitoring: satellite imagery change detection',
          'Subsidy and scheme finder for fisherfolk (PMMSY, state schemes)',
          'Voice-based interface in Tamil for low-literacy users'
        ]
      },
      techStack: {
        frontend: 'React Native (Android focus, low-end phones)',
        backend: 'Node.js/Express',
        database: 'PostgreSQL + PostGIS for spatial data, TimescaleDB for time-series',
        maps: 'Leaflet + INCOIS layers + IMBL boundary overlay',
        iot: 'GPS trackers on boats (\u20b92,000\u20135,000 each), satellite communicators for deep sea',
        ml: 'Fish stock prediction from CMFRI data + weather patterns',
        hosting: 'AWS with offline-first sync (boats lose connectivity at sea)',
        data: 'INCOIS PFZ, IMD weather, CMFRI fish stock, NCSCM coastal data, fish market auction prices'
      },
      revenueModel: [
        'B2G: Fisheries Dept monitoring tool (\u20b910\u201320 lakh/year)',
        'Fish trade platform commission (1\u20132% on transactions)',
        'GPS tracker hardware sales to fishing cooperatives',
        'Insurance partnerships: location-verified fishing trip data for claim processing',
        'Grant funding: FAO, World Bank Blue Economy initiatives'
      ],
      govtApproach: {
        who: 'Fisheries Dept, INCOIS, Coast Guard, Maritime Board',
        how: 'Partner with Fisheries Dept for PFZ advisory distribution. Integrate with Coast Guard for distress signals. Use as PMMSY scheme monitoring tool.',
        procurement: 'PMMSY (Pradhan Mantri Matsya Sampada Yojana) digital component. Blue Economy Mission funds.'
      },
      cost: { mvp: '\u20b96\u201310 lakh', full: '\u20b940\u201360 lakh', timeline: 'MVP: 5 months, Full: 12 months' },
      realExamples: [
        { name: 'Fisher Friend (MSSRF)', desc: 'M.S. Swaminathan Foundation\'s mobile advisory for fishermen with PFZ and weather data.', url: 'https://www.mssrf.org/' },
        { name: 'INCOIS PFZ Advisory', desc: 'Free potential fishing zone advisories via SMS. Used by 5 lakh+ fishermen.', url: 'https://incois.gov.in/' },
        { name: 'Abalobi (South Africa)', desc: 'Fisher-led app for documenting catch, monitoring fish stocks. 2,000+ fishers.', url: 'https://abalobi.org/' }
      ],
      buildGuide: [
        'Step 1: Get IMBL coordinates and build proximity warning system with GPS',
        'Step 2: Integrate INCOIS PFZ + IMD weather APIs for advisory module',
        'Step 3: Build voice-based Tamil interface for low-literacy fisherfolk',
        'Step 4: Create fish market price tracker with data from major harbors (Chennai, Rameswaram, Tuticorin)',
        'Step 5: Add SOS distress button with Coast Guard auto-notification',
        'Step 6: Pilot with fishing cooperative in Nagapattinam or Rameswaram (100 boats)',
        'Step 7: Add coastal erosion monitoring using Sentinel-2 satellite imagery (free)',
        'Step 8: Scale through Fisheries Dept partnership and PMMSY funding'
      ]
    },

    /* ─── 23. ILLEGAL SAND MINING ──────────────────────────── */
    {
      id: 'sand-mining',
      title: 'Illegal Sand Mining',
      icon: '\u26cf\ufe0f',
      category: 'Environment',
      severity: 'High',
      problem: {
        description: 'Illegal sand mining is one of TN\'s most destructive environmental and governance problems. Despite state-run TNSMC (TN Sand Mining Coordination), illegal operations continue in rivers like Cauvery, Palar, Vaigai, Thamiraparani. Madras HC has repeatedly intervened. Sand mining mafias have attacked and killed officials and journalists. River beds are deepening 2\u20135 meters, causing bridge collapses, groundwater depletion, and agricultural land erosion.',
        stats: [
          'TN sand demand: 30\u201340 million tonnes/year; legal supply: ~15 million tonnes (50% gap)',
          'Illegal sand mining cases: 15,000+ registered in 2022 (Geology & Mining Dept)',
          'Revenue loss: Estimated \u20b92,000\u20135,000 crore/year from illegal operations',
          'Environmental damage: 35+ river stretches critically affected (CGWB)',
          'Violence: Multiple attacks on officials; journalist Kali Muthu murdered in 2019'
        ]
      },
      currentStatus: 'TNSMC runs legal sand quarries but demand far exceeds supply. Online booking system for sand exists but plagued by hoarding. District-level task forces conduct raids. Madras HC monitors through special bench. M-sand (manufactured sand) promoted as alternative but costs 40\u201360% more.',
      techSolution: {
        what: 'SandWatch TN \u2014 River Mining Monitoring & Alert Platform',
        approach: 'Satellite-based monitoring of river beds combined with citizen reporting and transport tracking to detect illegal sand mining. Uses change detection on satellite imagery to identify unauthorized excavation.',
        features: [
          'Satellite change detection: weekly riverbed monitoring using Sentinel-2 (free)',
          'Citizen reporting: anonymous photo/video reports of illegal mining with geolocation',
          'Sand transport tracker: monitor lorry movements near rivers using ANPR cameras',
          'River health dashboard: bed level changes, erosion rates, groundwater impact',
          'Legal sand availability: real-time stock at TNSMC quarries',
          'Alert system: auto-notify district authorities of detected illegal activity',
          'M-sand vs river sand cost comparison and supplier directory',
          'Public dashboard: transparency on mining permits, quantities, violations'
        ]
      },
      techStack: {
        frontend: 'Next.js (web dashboard) + React Native (citizen reporting app)',
        backend: 'Python FastAPI (satellite image processing) + Node.js (API)',
        database: 'PostgreSQL + PostGIS for spatial data',
        maps: 'Google Earth Engine + Leaflet for river monitoring',
        iot: 'ANPR cameras at bridge checkpoints, drone surveillance integration',
        ml: 'Computer vision for satellite change detection, anomaly detection for transport patterns',
        hosting: 'AWS with GPU instances for image processing',
        data: 'Sentinel-2 satellite imagery (free), TNSMC permits, Geology Dept data, citizen reports'
      },
      revenueModel: [
        'B2G: District monitoring tool (\u20b910\u201320 lakh/year per district)',
        'Construction industry: legal sand availability alerts (\u20b91,000/month)',
        'Environmental compliance: mining company monitoring SaaS',
        'Grant funding: environmental foundations (WWF, CSE, Azim Premji Foundation)'
      ],
      govtApproach: {
        who: 'Geology & Mining Dept, TNSMC, District Collectors, PWD, Madras HC Special Bench',
        how: 'Present to Madras HC Special Bench as court-monitoring tool. Partner with District Collectors for enforcement. Integrate with TNSMC for legal sand tracking.',
        procurement: 'Mining regulation modernization budget. NGT compliance funding.'
      },
      cost: { mvp: '\u20b98\u201312 lakh', full: '\u20b945\u201370 lakh', timeline: 'MVP: 5 months, Full: 14 months' },
      realExamples: [
        { name: 'SandStories.org', desc: 'Global documentation project on sand mining\'s environmental impact. Includes India case studies.', url: 'https://www.sandstories.org/' },
        { name: 'CSE Sand Mining Framework', desc: 'Centre for Science & Environment\'s comprehensive framework for sustainable sand mining in India.', url: 'https://www.cseindia.org/' },
        { name: 'Global Witness', desc: 'International NGO investigating environmental crime including illegal mining globally.', url: 'https://www.globalwitness.org/' }
      ],
      buildGuide: [
        'Step 1: Set up Google Earth Engine pipeline for Sentinel-2 river monitoring across major TN rivers',
        'Step 2: Train change detection model on historical satellite data to identify excavation',
        'Step 3: Build citizen reporting app with anonymous submission and geolocation',
        'Step 4: Create real-time dashboard showing TNSMC legal sand stock across quarries',
        'Step 5: Add transport monitoring at key bridge checkpoints',
        'Step 6: Pilot on Cauvery river in Trichy-Karur stretch (highest illegal activity)',
        'Step 7: Present monitoring data to Madras HC Special Bench for credibility',
        'Step 8: Seek District Collector adoption and scale to all 13 sand-affected districts'
      ]
    },

    /* ─── 24. STRAY DOGS ──────────────────────────────────── */
    {
      id: 'stray-dogs',
      title: 'Stray Dog Population & Human-Animal Conflict',
      icon: '\ud83d\udc15',
      category: 'Infrastructure',
      severity: 'Medium',
      problem: {
        description: 'TN has an estimated 40\u201350 lakh stray dogs. Dog bite cases in TN: 5.5 lakh+ in 2022 (highest in India). Anti-rabies vaccine shortages are frequent. ABC (Animal Birth Control) program covers less than 15% of strays. Conflicts between animal welfare groups and residents demanding culling. Children and elderly are most vulnerable. Blue Cross Chennai handles 1,000+ rescue calls/month.',
        stats: [
          'Estimated stray dogs in TN: 40\u201350 lakh (Livestock Census extrapolation)',
          'Dog bite cases 2022: 5.5 lakh+ (TN ranks #1 in India)',
          'Rabies deaths: 50\u2013100/year in TN (likely underreported)',
          'ABC surgeries 2022-23: only 3.2 lakh (need 10+ lakh for population control)',
          'Anti-rabies vaccine: frequent shortages in govt hospitals'
        ]
      },
      currentStatus: 'ABC rules mandate sterilization, not killing. Blue Cross Chennai, PFA, PAWS are major rescue organizations. Corporation-run ABC centers in Chennai, Coimbatore, Madurai. Supreme Court upheld ABC rules in 2023. Community resistance to feeding bans is contentious.',
      techSolution: {
        what: 'StreetPaws TN \u2014 Stray Dog Management & Coexistence Platform',
        approach: 'Comprehensive stray dog census + ABC tracking + bite incident mapping + community management platform. Helps municipal corporations plan ABC drives and track vaccination status.',
        features: [
          'Stray dog census: photo-based identification with AI tagging',
          'ABC status tracker: which dogs are sterilized/vaccinated (ear-notch verification)',
          'Bite incident mapping with auto-routing to nearest hospital with anti-rabies vaccine',
          'Community feeding point management (reduce conflict)',
          'Rescue request system connected to Blue Cross / PFA / PAWS',
          'Anti-rabies vaccine stock tracker across government hospitals',
          'Corporation ABC drive planning based on population density data',
          'Adoption portal for street dogs assessed as suitable for adoption'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + Next.js (corporation dashboard)',
        backend: 'Python FastAPI (dog identification ML) + Node.js (API)',
        database: 'PostgreSQL + PostGIS for location data',
        maps: 'Leaflet + OSM for stray density and bite incident maps',
        iot: 'RFID tags for sterilized dogs (\u20b950\u2013100 each)',
        ml: 'Computer vision for individual dog identification from photos',
        hosting: 'AWS/DigitalOcean (\u20b93,000\u20135,000/month)',
        data: 'Corporation ABC records, hospital bite data, Blue Cross rescue logs, community reports'
      },
      revenueModel: [
        'B2G: Corporation ABC management tool (\u20b95\u201310 lakh/year per city)',
        'Pet adoption fees/facilitation',
        'CSR funding from animal welfare-focused companies',
        'Grant funding: Humane Society International, WSPA, PFA'
      ],
      govtApproach: {
        who: 'Municipal Corporations, Animal Husbandry Dept, Animal Welfare Board of India',
        how: 'Present as ABC efficiency tool. Help corporations meet Supreme Court mandated ABC targets.',
        procurement: 'Municipal corporation animal management budget. Animal Welfare Board grants.'
      },
      cost: { mvp: '\u20b94\u20136 lakh', full: '\u20b920\u201330 lakh', timeline: 'MVP: 3 months, Full: 8 months' },
      realExamples: [
        { name: 'Blue Cross of India (Chennai)', desc: 'India\'s largest animal welfare org. Handles 1,000+ calls/month. ABC center in Velachery.', url: 'https://www.bluecrossofindia.org/' },
        { name: 'Finding Rover', desc: 'AI-powered facial recognition for lost/found pets. Used by 1,500+ US shelters.', url: 'https://www.findingrover.com/' },
        { name: 'AWBI ABC Program', desc: 'Animal Welfare Board\'s national ABC program guidelines and funding.', url: 'https://awbi.in/' }
      ],
      buildGuide: [
        'Step 1: Build dog photo identification system using computer vision (breed, color, ear notch)',
        'Step 2: Create bite incident reporting with hospital finder (anti-rabies vaccine stock)',
        'Step 3: Map existing ABC records from Chennai Corporation as baseline',
        'Step 4: Add community features: feeding point management, rescue requests',
        'Step 5: Build corporation dashboard for ABC drive planning and tracking',
        'Step 6: Pilot with Chennai Corporation (Zone-wise) and Blue Cross partnership',
        'Step 7: Add adoption portal with behavioral assessment of street dogs',
        'Step 8: Scale to Coimbatore, Madurai, Trichy corporations'
      ]
    },

    /* ─── 25. LAST-MILE TRANSPORT ─────────────────────────── */
    {
      id: 'last-mile-transport',
      title: 'Public Transport Last-Mile Connectivity',
      icon: '\ud83d\ude8c',
      category: 'Infrastructure',
      severity: 'High',
      problem: {
        description: 'While TN has extensive bus network (MTC Chennai, TNSTC statewide), last-mile connectivity from bus stops/metro stations to homes and workplaces is a major gap. Auto-rickshaws charge 2\u20133x meter rates. Share autos are overcrowded and have no fixed schedules. Chennai Metro\'s low ridership (2 lakh vs 12 lakh target) is partly due to poor last-mile connectivity. Rural TN has limited public transport \u2014 many villages have only 2\u20133 bus services/day.',
        stats: [
          'Chennai Metro ridership: ~2 lakh/day vs 12 lakh/day target (last-mile gap)',
          'MTC buses: 3,200+ buses but no real-time tracking for commuters',
          'Auto overcharging: 60\u201370% of rides are above meter rate (consumer surveys)',
          'Rural bus frequency: 30% of TN villages have bus service <3 times/day',
          'Share auto accidents: 200+ deaths/year in TN (overloading)'
        ]
      },
      currentStatus: 'MTC has Chalo app for Chennai bus tracking but coverage is partial. Chennai Metro feeder buses exist but limited routes. Rapido and Uber auto operate in cities. Share auto system is entirely informal with no regulation. TNSTC has online booking but no real-time tracking.',
      techSolution: {
        what: 'CommuteTN \u2014 Unified Public Transport & Last-Mile Platform',
        approach: 'Single platform integrating all TN public transport (MTC, TNSTC, Metro, suburban rail) with last-mile options (share auto, bike-share, walking routes). Real-time tracking, route planning, and digital payments.',
        features: [
          'Unified route planner: bus + metro + train + walk in single journey',
          'Real-time bus tracking using GPS on MTC/TNSTC buses',
          'Share auto route mapping with fare estimates and crowding info',
          'Last-mile options: bike-share, e-rickshaw, walking routes from transit stops',
          'Digital pass: single QR code for MTC + Metro + TNSTC',
          'Accessibility mode: wheelchair-friendly route options',
          'Safety features: SOS button, live location sharing for night travel',
          'Rural transport demand aggregation: request a bus for underserved villages'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + PWA for basic phones',
        backend: 'Node.js/Express + Python for route optimization',
        database: 'PostgreSQL + PostGIS for transit data, Redis for real-time tracking',
        maps: 'MapLibre GL + OSM with transit overlay, GTFS data format',
        iot: 'GPS trackers on buses (\u20b92,000\u20135,000 each)',
        ml: 'Route optimization, demand prediction, ETA estimation',
        hosting: 'AWS (\u20b910,000\u201315,000/month for real-time processing)',
        data: 'MTC route data, Metro GTFS, TNSTC schedules, OpenStreetMap'
      },
      revenueModel: [
        'B2G: MTC/TNSTC passenger information system (\u20b920\u201350 lakh/year)',
        'Digital transit pass commission (0.5\u20131% per transaction)',
        'B2C premium: ad-free experience + advanced routing (\u20b949/month)',
        'Last-mile service partnerships: commission from bike-share/e-rickshaw bookings',
        'Advertising: location-based ads at transit stops'
      ],
      govtApproach: {
        who: 'Transport Dept, MTC, TNSTC, CMRL (Metro), Southern Railway',
        how: 'Present as passenger information system. Integrate with Chennai Smart City mobility initiatives. Partner with CMRL for feeder connectivity data.',
        procurement: 'Smart City Mission mobility projects. MTC modernization budget.'
      },
      cost: { mvp: '\u20b98\u201312 lakh', full: '\u20b950\u201380 lakh', timeline: 'MVP: 5 months, Full: 14 months' },
      realExamples: [
        { name: 'Chalo App', desc: 'Real-time bus tracking in 40+ Indian cities. Available for Chennai MTC but partial coverage.', url: 'https://chaloapp.com/' },
        { name: 'Moovit (Intel)', desc: 'Global public transit app with real-time data. Limited India presence.', url: 'https://moovit.com/' },
        { name: 'Citymapper (London)', desc: 'Gold standard for multi-modal urban transport. Includes bus, metro, bike, walk, ride-share.', url: 'https://citymapper.com/' }
      ],
      buildGuide: [
        'Step 1: Collect GTFS data for Chennai Metro and MTC routes (available through open data)',
        'Step 2: Build route planner with multi-modal journey planning (bus+metro+walk)',
        'Step 3: Deploy GPS trackers on 100 MTC buses for real-time tracking proof-of-concept',
        'Step 4: Map share auto routes in Chennai through volunteer data collection',
        'Step 5: Add digital payment integration (UPI, prepaid transit wallet)',
        'Step 6: Pilot in 2 Chennai zones (Adyar, T.Nagar) covering bus+metro+share auto',
        'Step 7: Add safety features: SOS, live sharing, women-safe routes',
        'Step 8: Expand to Coimbatore, Madurai; approach TNSTC for statewide coverage'
      ]
    },

    /* ─── 26. DIGITAL DIVIDE ──────────────────────────────── */
    {
      id: 'digital-divide',
      title: 'Digital Divide in Rural Areas',
      icon: '\ud83d\udcf1',
      category: 'Education',
      severity: 'High',
      problem: {
        description: 'While TN has 85%+ mobile penetration in cities, rural digital access lags significantly. COVID exposed this gap when online classes left 30\u201340% of rural students without access. Only 47% of TN households have internet access (NFHS-5). Government services (e-Sevai, TNPDS) increasingly require digital access. Women have 30% lower smartphone ownership than men in rural TN. Digital literacy among elderly is below 10%.',
        stats: [
          'NFHS-5: Only 47.2% of TN households have internet access',
          'Rural vs Urban internet: 35% rural vs 72% urban (TRAI 2023)',
          'Women smartphone gap: 30% lower ownership than men in rural TN',
          'E-Sevai services: 200+ govt services online but digital literacy is barrier',
          'COVID education gap: 35% of rural students missed online classes entirely'
        ]
      },
      currentStatus: 'TN e-Governance Agency (TNeGA) runs e-Sevai centers. Free laptop scheme for students continued (1 crore+ distributed since 2011). BharatNet aims to connect all gram panchayats with fiber. CSCs (Common Service Centers) provide digital access points but quality varies.',
      techSolution: {
        what: 'DigitalBridge TN \u2014 Rural Digital Access & Literacy Platform',
        approach: 'Offline-first platform that works on basic smartphones with minimal data. Provides digital literacy training, government service access, and connects rural communities to digital economy.',
        features: [
          'Offline-first design: core features work without internet, sync when connected',
          'Digital literacy modules in Tamil: 20 interactive lessons (UPI, email, e-Sevai)',
          'Voice-based government service guide (works on feature phones)',
          'e-Sevai service helper: step-by-step guide for 50+ common services',
          'Community digital hub finder: CSCs, libraries, e-Sevai centers on map',
          'Digital skill certification: verifiable certificate for employment',
          'Video learning downloads: educational content for offline viewing',
          'WhatsApp-based service delivery for those with only WhatsApp access'
        ]
      },
      techStack: {
        frontend: 'React Native with offline-first (AsyncStorage + SQLite)',
        backend: 'Node.js/Express with sync API',
        database: 'SQLite (local) + PostgreSQL (server) with conflict resolution',
        maps: 'Offline tiles from OSM for rural area mapping',
        iot: 'N/A',
        ml: 'Voice recognition for Tamil dialect variations',
        hosting: 'Lightweight server (\u20b92,000\u20133,000/month)',
        data: 'e-Sevai service catalog, CSC directory, BharatNet coverage data, TNeGA APIs'
      },
      revenueModel: [
        'B2G: Digital literacy campaign platform for TNeGA (\u20b910\u201320 lakh/year)',
        'CSC partnership: digital service facilitation fee (\u20b920\u201350 per service)',
        'Corporate digital inclusion CSR programs',
        'Educational content licensing to schools and colleges'
      ],
      govtApproach: {
        who: 'TNeGA, IT & Digital Services Dept, Rural Development Dept, CSC SPV',
        how: 'Position as digital literacy delivery platform. Integrate with free laptop scheme for student training. Partner with CSCs for rural access points.',
        procurement: 'Digital India programme funding. TNeGA digital literacy budget.'
      },
      cost: { mvp: '\u20b94\u20136 lakh', full: '\u20b920\u201330 lakh', timeline: 'MVP: 4 months, Full: 10 months' },
      realExamples: [
        { name: 'e-Sevai (TNeGA)', desc: 'TN\'s integrated services portal. 200+ services. Kiosks in every taluk.', url: 'https://www.tnesevai.tn.gov.in/' },
        { name: 'Internet Saathi (Google-Tata)', desc: 'Digital literacy program for rural women. Trained 80,000+ village-level trainers.', url: 'Previously active in TN' },
        { name: 'Digital Empowerment Foundation', desc: 'NGO connecting unconnected communities in India. Works in 25+ states.', url: 'https://www.defindia.org/' }
      ],
      buildGuide: [
        'Step 1: Design offline-first architecture with local SQLite + periodic cloud sync',
        'Step 2: Create 20 digital literacy modules in Tamil with voice narration',
        'Step 3: Map all CSCs and e-Sevai centers in TN (3,000+ locations)',
        'Step 4: Build e-Sevai service helper with screenshot-based step-by-step guides',
        'Step 5: Add WhatsApp bot for government service queries',
        'Step 6: Pilot in 50 villages in Villupuram district through CSC network',
        'Step 7: Train Anganwadi workers and SHG leaders as digital literacy trainers',
        'Step 8: Seek TNeGA partnership for statewide rollout through free laptop ecosystem'
      ]
    },

    /* ─── 27. MISINFORMATION & FAKE NEWS ──────────────────── */
    {
      id: 'misinformation',
      title: 'Misinformation & Fake News',
      icon: '\ud83d\udcf0',
      category: 'Governance',
      severity: 'High',
      problem: {
        description: 'Tamil Nadu faces severe misinformation challenges especially during elections, communal tensions, and health crises. WhatsApp forwards in Tamil spread faster than fact-checks. During COVID, fake cures and anti-vaccine misinformation caused significant harm. Caste-based and communal fake news triggers violence. Deepfake political content is emerging. TN has 6 crore+ WhatsApp users with limited media literacy.',
        stats: [
          'TN WhatsApp users: estimated 6 crore+ (highest penetration in South India)',
          'Alt News TN fact-checks: 500+ Tamil fake news debunked in 2023',
          'COVID misinformation: 30% of surveyed TN residents believed at least 1 false cure (ICMR study)',
          'Election misinformation: 2,000+ fake news items flagged during 2021 TN elections',
          'Deepfake: first political deepfake in TN elections detected 2024 (party leader endorsement)'
        ]
      },
      currentStatus: 'Fact-checking organizations like Alt News, BOOM, and Factly cover Tamil content but capacity is limited. TN Police cyber cell handles complaints. ECI has social media monitoring for elections. WhatsApp\'s tip line exists but is underused. Media literacy in school curriculum is absent.',
      techSolution: {
        what: 'TruthTN \u2014 Tamil Fact-Check & Media Literacy Platform',
        approach: 'WhatsApp-integrated fact-checking bot in Tamil. Citizens forward suspicious messages for instant AI-assisted verification. Builds a searchable database of debunked claims. Provides media literacy training.',
        features: [
          'WhatsApp fact-check bot: forward any message for verification in Tamil',
          'AI-assisted claim detection: auto-classify claim type and check against database',
          'Deepfake detection: analyze political videos for manipulation signatures',
          'Searchable fact-check database of 5,000+ Tamil claims',
          'Media literacy courses: 10 modules for schools, colleges, seniors',
          'Election misinformation tracker during election season',
          'Community fact-checker network: trained volunteer verification',
          'Health misinformation alerts: partner with Health Dept for rapid debunking'
        ]
      },
      techStack: {
        frontend: 'Next.js (web) + WhatsApp Business API (bot)',
        backend: 'Python FastAPI (NLP/ML) + Node.js (API)',
        database: 'PostgreSQL (fact-check DB) + Elasticsearch (search)',
        maps: 'N/A',
        iot: 'N/A',
        ml: 'Tamil NLP for claim extraction, image reverse search, deepfake detection (GAN analysis)',
        hosting: 'AWS (\u20b95,000\u201310,000/month with ML compute)',
        data: 'Existing fact-check databases (Alt News, BOOM, Factly), news archives, social media APIs'
      },
      revenueModel: [
        'B2G: Election Commission misinformation monitoring (\u20b910\u201320 lakh per election)',
        'Media licensing: fact-check database for news organizations (\u20b95,000\u201310,000/month)',
        'B2B: Corporate misinformation protection for brands (\u20b92\u20135 lakh/year)',
        'Educational institution licensing for media literacy courses',
        'Grant funding: Google News Initiative, Meta Journalism Project, IFCN'
      ],
      govtApproach: {
        who: 'IT & Digital Services Dept, TN Police Cyber Cell, ECI (during elections), Health Dept',
        how: 'Partner with ECI for election misinformation monitoring. Integrate with Health Dept for health claim verification. Work with TN Police for illegal content flagging.',
        procurement: 'ECI social media monitoring contracts. Digital India media literacy programs.'
      },
      cost: { mvp: '\u20b96\u201310 lakh', full: '\u20b935\u201350 lakh', timeline: 'MVP: 4 months, Full: 12 months' },
      realExamples: [
        { name: 'Alt News', desc: 'India\'s leading fact-checking organization. IFCN certified. Covers Tamil content.', url: 'https://www.altnews.in/' },
        { name: 'BOOM', desc: 'IFCN-certified fact-checker with multi-language support including Tamil.', url: 'https://www.boomlive.in/' },
        { name: 'Shakti (WhatsApp Tipline)', desc: 'WhatsApp\'s official tipline for checking messages in India. Operated by PROTO.', url: 'https://www.proto.in/' }
      ],
      buildGuide: [
        'Step 1: Build Tamil NLP pipeline for claim extraction from WhatsApp messages',
        'Step 2: Create fact-check database by importing Alt News, BOOM Tamil archives',
        'Step 3: Deploy WhatsApp Business API bot for message forwarding and verification',
        'Step 4: Train image reverse-search system for fake photo detection',
        'Step 5: Add deepfake detection module using GAN analysis on political videos',
        'Step 6: Recruit and train 100 volunteer community fact-checkers across TN',
        'Step 7: Pilot during local body election period for real-world validation',
        'Step 8: Seek IFCN certification and ECI partnership for state elections'
      ]
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * 2. GOVERNMENT PORTALS & DATA SOURCES
   * ────────────────────────────────────────────────────────── */
  var GOVT_PORTALS = [
    {
      category: 'Citizen Services',
      portals: [
        { name: 'e-Sevai', url: 'https://www.tnesevai.tn.gov.in/', desc: '200+ government services (certificates, permits, pensions) via Common Service Centers', dataType: 'Service delivery', apiAvailable: false },
        { name: 'Namma Chennai 311', url: 'https://play.google.com/store/apps/details?id=com.gcc.NammaChennai311', desc: 'Chennai Corporation civic grievance app (potholes, garbage, streetlights)', dataType: 'Complaints/grievances', apiAvailable: false },
        { name: 'CPGRAMS', url: 'https://pgportal.gov.in/', desc: 'Centralized Public Grievance Redress and Monitoring System', dataType: 'Grievances', apiAvailable: false },
        { name: 'CM Special Cell', url: 'https://cmcell.tn.gov.in/', desc: 'Chief Minister\'s Special Cell for public petitions', dataType: 'Petitions', apiAvailable: false }
      ]
    },
    {
      category: 'Land & Revenue',
      portals: [
        { name: 'TNREGINET', url: 'https://tnreginet.gov.in/', desc: 'Patta, chitta, adangal, guideline values, encumbrance certificates', dataType: 'Land records', apiAvailable: false },
        { name: 'TNSMART', url: 'https://tnsmart.tn.gov.in/', desc: 'TN Survey and Mapping with Rectified Technology (land resurvey)', dataType: 'Survey data', apiAvailable: false },
        { name: 'DILRMP/NLRMP Portal', url: 'https://dilrmp.gov.in/', desc: 'Digital India Land Records Modernization Programme', dataType: 'Land records', apiAvailable: true }
      ]
    },
    {
      category: 'Environment & Pollution',
      portals: [
        { name: 'TNPCB', url: 'https://tnpcb.gov.in/', desc: 'TN Pollution Control Board \u2014 industry consent orders, air/water quality reports', dataType: 'Pollution data', apiAvailable: false },
        { name: 'CPCB CAAQMS', url: 'https://app.cpcbccr.com/ccr/#/caaqm-dashboard-all/caaqm-landing', desc: 'Real-time air quality from 29 TN monitoring stations', dataType: 'Air quality (real-time)', apiAvailable: true },
        { name: 'ENVIS TN', url: 'http://tnenvis.nic.in/', desc: 'Environmental Information System for TN', dataType: 'Environmental reports', apiAvailable: false },
        { name: 'India WRIS', url: 'https://indiawris.gov.in/', desc: 'India Water Resources Information System \u2014 reservoir, groundwater levels', dataType: 'Water data', apiAvailable: true }
      ]
    },
    {
      category: 'Health',
      portals: [
        { name: 'CMCHIS', url: 'https://www.cmchistn.com/', desc: 'Chief Minister\'s Comprehensive Health Insurance Scheme \u2014 empaneled hospitals, procedures', dataType: 'Insurance/hospitals', apiAvailable: false },
        { name: 'e-Sanjeevani', url: 'https://esanjeevani.mohfw.gov.in/', desc: 'National telemedicine platform operational in TN GHs', dataType: 'Telemedicine', apiAvailable: false },
        { name: 'TNHSP', url: 'https://www.tnhsp.org/', desc: 'TN Health Systems Project \u2014 facility data, drug procurement', dataType: 'Health facilities', apiAvailable: false },
        { name: 'NHP Health Facility Registry', url: 'https://facility.nhp.gov.in/', desc: 'National directory of hospitals, PHCs, labs with location data', dataType: 'Facility locations', apiAvailable: true }
      ]
    },
    {
      category: 'Agriculture',
      portals: [
        { name: 'Agmarknet', url: 'https://agmarknet.gov.in/', desc: 'Daily wholesale market prices for agricultural commodities across TN mandis', dataType: 'Market prices', apiAvailable: true },
        { name: 'e-NAM', url: 'https://enam.gov.in/', desc: 'National Agriculture Market \u2014 33 TN mandis integrated', dataType: 'Market transactions', apiAvailable: true },
        { name: 'Soil Health Card Portal', url: 'https://soilhealth.dac.gov.in/', desc: 'Soil test results and fertilizer recommendations for TN farms', dataType: 'Soil data', apiAvailable: true },
        { name: 'TN SAMB', url: 'https://tnsamb.tn.gov.in/', desc: 'TN State Agricultural Marketing Board \u2014 regulated market data', dataType: 'Market data', apiAvailable: false }
      ]
    },
    {
      category: 'Transport & Traffic',
      portals: [
        { name: 'TNSTC/MTC', url: 'https://tnstc.in/', desc: 'Bus route, schedule data for TNSTC and MTC', dataType: 'Transit schedules', apiAvailable: false },
        { name: 'CMRL', url: 'https://chennaimetrorail.org/', desc: 'Chennai Metro Rail \u2014 route maps, fare calculator, station info', dataType: 'Metro data', apiAvailable: false },
        { name: 'Vaahan/Sarathi', url: 'https://vahan.parivahan.gov.in/', desc: 'Vehicle registration and driving license data (national)', dataType: 'Vehicle data', apiAvailable: true },
        { name: 'NHAI/TN Highways', url: 'https://tnhighways.gov.in/', desc: 'Road project status, highway data for TN', dataType: 'Road data', apiAvailable: false }
      ]
    },
    {
      category: 'Power & Energy',
      portals: [
        { name: 'TANGEDCO', url: 'https://tangedco.gov.in/', desc: 'Electricity billing, complaint portal, planned outage notices', dataType: 'Power data', apiAvailable: false },
        { name: 'TNERC', url: 'https://www.tnerc.gov.in/', desc: 'TN Electricity Regulatory Commission \u2014 tariff orders, quality standards', dataType: 'Regulatory data', apiAvailable: false },
        { name: 'TANGEDCO WhatsApp', url: 'WhatsApp: TANGEDCO official numbers by region', desc: 'Complaint registration and bill query via WhatsApp', dataType: 'Complaints', apiAvailable: false }
      ]
    },
    {
      category: 'Open Data',
      portals: [
        { name: 'data.gov.in', url: 'https://data.gov.in/', desc: 'National Open Government Data portal \u2014 search \'Tamil Nadu\' for state-specific datasets', dataType: 'Various CSV/API datasets', apiAvailable: true },
        { name: 'Census of India', url: 'https://censusindia.gov.in/', desc: 'Census 2011 data at district/taluk/town level for TN', dataType: 'Demographics', apiAvailable: true },
        { name: 'UDISE+ (School Education)', url: 'https://udiseplus.gov.in/', desc: 'School-level data: enrollment, teachers, infrastructure for every TN school', dataType: 'Education data', apiAvailable: true },
        { name: 'National Health Profile', url: 'https://cbhidghs.nic.in/', desc: 'State-level health indicators, infrastructure, disease data', dataType: 'Health statistics', apiAvailable: false },
        { name: 'Bhuvan (ISRO)', url: 'https://bhuvan.nrsc.gov.in/', desc: 'Indian geospatial platform: satellite imagery, thematic maps for TN', dataType: 'Geospatial', apiAvailable: true },
        { name: 'India Meteorological Department', url: 'https://mausam.imd.gov.in/', desc: 'Weather data, rainfall, cyclone warnings for TN', dataType: 'Weather', apiAvailable: true }
      ]
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * 3. FUNDING & SUPPORT for Civic Tech
   * ────────────────────────────────────────────────────────── */
  var CIVIC_FUNDING = [
    {
      category: 'Government Grants & Programs',
      sources: [
        {
          name: 'StartupTN (TANSIM)',
          desc: 'TN Startup and Innovation Mission \u2014 seed funding up to \u20b910 lakh, mentorship, incubation',
          url: 'https://startuptn.in/',
          amount: 'Up to \u20b910 lakh seed fund',
          eligibility: 'TN-registered startup, innovative product/service',
          how: 'Apply online at startuptn.in, pitch to evaluation committee'
        },
        {
          name: 'TN iDEA (Innovation, Development and Entrepreneurship Accelerator)',
          desc: 'Incubation at IIT Madras Research Park, funding + mentorship',
          url: 'https://www.tnidea.tn.gov.in/',
          amount: 'Up to \u20b930 lakh grant-in-aid',
          eligibility: 'TN-based startup, scalable technology product',
          how: 'Apply through TANSIM or directly at iDEA portal'
        },
        {
          name: 'Atal Innovation Mission (AIM / NITI Aayog)',
          desc: 'National program: Atal Incubation Centers (AIC), Atal Tinkering Labs',
          url: 'https://aim.gov.in/',
          amount: 'AIC: up to \u20b910 crore over 5 years; ANIC: up to \u20b930 lakh per idea',
          eligibility: 'Innovative solutions addressing community challenges',
          how: 'Apply via AIM portal during open calls. TN has 15+ AICs including at IIT Madras, Anna University'
        },
        {
          name: 'Smart Cities Mission \u2014 Innovation Challenges',
          desc: 'Open innovation challenges by Smart City SPVs for urban solutions',
          url: 'https://smartcities.gov.in/',
          amount: 'Varies: \u20b95\u201325 lakh per challenge',
          eligibility: 'Solutions for urban governance, mobility, sustainability',
          how: 'Watch for challenges from Chennai, Coimbatore, Madurai Smart City SPVs'
        },
        {
          name: 'MeitY Startup Hub (MSH)',
          desc: 'Ministry of Electronics & IT \u2014 funding for tech startups',
          url: 'https://meitystartuphub.in/',
          amount: 'Up to \u20b925 lakh per startup',
          eligibility: 'Deep tech, IT-based product, registered in India',
          how: 'Apply online during open cohorts. Special focus on civic tech.'
        },
        {
          name: 'NABARD Innovation Fund',
          desc: 'For agricultural, rural livelihood, and financial inclusion innovations',
          url: 'https://www.nabard.org/',
          amount: '\u20b910\u201350 lakh for innovative projects',
          eligibility: 'Solutions for rural/agricultural development',
          how: 'Submit proposal to NABARD TN Regional Office, Chennai'
        }
      ]
    },
    {
      category: 'CSR Funding Routes',
      sources: [
        {
          name: 'Schedule VII (Companies Act 2013) \u2014 Eligible Activities',
          desc: 'Companies with \u20b95 crore+ net profit must spend 2% on CSR. Eligible activities include: environment, education, health, sanitation, rural development, disaster management',
          url: 'https://www.mca.gov.in/content/mca/global/en/acts-rules/ebook/acts.html',
          amount: 'India total CSR: \u20b926,210 crore in 2022-23. TN is top 5 recipient state.',
          eligibility: 'Your civic tech project must align with Schedule VII categories',
          how: 'Identify companies with CSR focus matching your area. Approach CSR heads directly with pilot results. Top TN CSR spenders: TCS, Infosys (Chennai), TVS, Murugappa Group, Ashok Leyland'
        },
        {
          name: 'CSR Box / India CSR Network',
          desc: 'Platforms connecting NGOs/social enterprises with CSR funders',
          url: 'https://csrbox.org/',
          amount: 'Varies by project',
          eligibility: 'Register as NGO/Section 8 company or social enterprise',
          how: 'List your project on CSR matching platforms. Ensure Section 8 / 80G registration.'
        }
      ]
    },
    {
      category: 'Incubators & Accelerators in TN',
      sources: [
        {
          name: 'IIT Madras Incubation Cell (IITMIC)',
          desc: 'India\'s #1 incubator. Focus: deep tech, social impact, civic innovation',
          url: 'https://incubation.iitm.ac.in/',
          amount: 'Seed: \u20b910\u201350 lakh. Follow-on via IITM Pravartak fund.',
          eligibility: 'Tech startups, preference for IIT Madras ecosystem connections',
          how: 'Apply online. Monthly screening. Pitch day selection.'
        },
        {
          name: 'Villgro (Social Enterprise Incubator)',
          desc: 'Chennai-based, India\'s oldest social enterprise incubator',
          url: 'https://villgro.org/',
          amount: 'Up to \u20b930 lakh seed funding + mentorship',
          eligibility: 'Social enterprise solving problems for underserved communities',
          how: 'Apply during cohort open calls. Strong preference for health, education, livelihoods, climate.'
        },
        {
          name: 'Forge (Social Enterprise Accelerator)',
          desc: 'Chennai-based, focuses on social entrepreneurs and civic innovators',
          url: 'https://forgefoundation.in/',
          amount: 'Mentorship + connections + small grants',
          eligibility: 'Social enterprise or NGO with tech component',
          how: 'Apply during annual cohort selection (usually Jan\u2013Mar)'
        },
        {
          name: 'Anna University Centre for Entrepreneurship Development (AU-CED)',
          desc: 'University incubator with MSME and StartupTN partnerships',
          url: 'https://annauniv.edu/',
          amount: 'Up to \u20b910 lakh through StartupTN',
          eligibility: 'Students, alumni, or any TN entrepreneur',
          how: 'Apply through AU-CED or StartupTN portal'
        },
        {
          name: 'RTBI (Rural Technology & Business Incubator, IIT Madras)',
          desc: 'Specifically for rural/social impact tech ventures',
          url: 'https://rtbi.in/',
          amount: 'Seed funding + office space + mentorship',
          eligibility: 'Rural/social impact technology',
          how: 'Apply online. Focus on affordable tech for underserved populations.'
        }
      ]
    },
    {
      category: 'Competitions & Challenges',
      sources: [
        {
          name: 'Smart India Hackathon (SIH)',
          desc: 'Annual national hackathon by MoE. Problem statements from govt ministries.',
          url: 'https://sih.gov.in/',
          amount: '\u20b91 lakh per winning team + implementation support',
          eligibility: 'Student teams (college), open source preferred',
          how: 'Register team, solve assigned civic problem statement. TN colleges are top participants.'
        },
        {
          name: 'India Innovation Challenge Design Contest (IICDC)',
          desc: 'TI + DST collaboration for hardware/IoT innovation',
          url: 'Previously by Texas Instruments + DST',
          amount: '\u20b920 lakh for top ideas + prototyping support',
          eligibility: 'Engineering students/teams',
          how: 'Watch for annual announcements. IoT civic solutions eligible.'
        },
        {
          name: 'Niti Aayog Women Transforming India Awards',
          desc: 'Recognition + funding for women-led social enterprises',
          url: 'https://wep.gov.in/',
          amount: 'Award recognition + ecosystem support',
          eligibility: 'Women entrepreneurs with social impact',
          how: 'Apply during annual call. Women\'s safety, health tech solutions eligible.'
        },
        {
          name: 'NASSCOM Social Innovation Forum',
          desc: 'Annual awards for tech-for-good innovations',
          url: 'https://nasscomfoundation.org/',
          amount: 'Recognition + mentorship + corporate connections',
          eligibility: 'Tech solutions for social impact',
          how: 'Apply during annual call. Strong jury of tech leaders.'
        }
      ]
    },
    {
      category: 'International / Foundation Funding',
      sources: [
        {
          name: 'Google.org Impact Challenge (India)',
          desc: 'Grants for AI/tech solutions to social problems in India',
          url: 'https://impactchallenge.withgoogle.com/',
          amount: 'Up to $2 million per project',
          eligibility: 'Non-profit or social enterprise using AI for impact',
          how: 'Apply during open calls (usually annual). Civic tech is priority area.'
        },
        {
          name: 'Omidyar Network India',
          desc: 'Investment firm focused on governance, digital identity, financial inclusion',
          url: 'https://omidyarnetwork.in/',
          amount: 'Equity investment or grants, \u20b950 lakh\u201310 crore',
          eligibility: 'Scalable governance/transparency tech',
          how: 'Apply via website or warm introduction from portfolio companies'
        },
        {
          name: 'Bill & Melinda Gates Foundation (India)',
          desc: 'Grants for health, nutrition, sanitation, financial services for the poor',
          url: 'https://www.gatesfoundation.org/our-work/places/india',
          amount: 'Varies: typically $100K\u2013$5M',
          eligibility: 'Solutions for public health, sanitation, nutrition in underserved communities',
          how: 'Usually invite-only, but respond to open RFPs on website'
        },
        {
          name: 'Ashoka Changemakers',
          desc: 'Fellowship + funding for social entrepreneurs',
          url: 'https://www.ashoka.org/en-in',
          amount: 'Living stipend + network + credibility for fundraising',
          eligibility: 'Proven social entrepreneur with innovative approach',
          how: 'Nomination-based. Build proof of concept first, then seek nomination.'
        },
        {
          name: 'Azim Premji Foundation',
          desc: 'Major Indian philanthropy focused on education, governance',
          url: 'https://azimpremjifoundation.org/',
          amount: 'Project grants vary',
          eligibility: 'Education, governance, and development focused organizations',
          how: 'Partner on existing programs or submit innovation proposals'
        }
      ]
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * EXPORT
   * ────────────────────────────────────────────────────────── */
  window.CivicTechData = {
    CIVIC_ISSUES: CIVIC_ISSUES,
    GOVT_PORTALS: GOVT_PORTALS,
    CIVIC_FUNDING: CIVIC_FUNDING
  };

})();
