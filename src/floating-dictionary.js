(function(){
'use strict';

/* ── TN Launchpad Floating Dictionary ──
   A floating button that opens a search-based glossary overlay.
   Users can look up any term related to business, government, elections, or Tamil Nadu.
*/

var GLOSSARY = [
  {term:'GSDP', def:'Gross State Domestic Product — the total value of all goods and services produced within a state in a year. Tamil Nadu GSDP: ~₹35.68 lakh crore ($420B).'},
  {term:'MSME', def:'Micro, Small and Medium Enterprises. Micro: investment up to ₹1 crore. Small: up to ₹10 crore. Medium: up to ₹50 crore.'},
  {term:'MUDRA', def:'Micro Units Development and Refinance Agency. Provides loans up to ₹10 lakh without collateral under Shishu (₹50K), Kishore (₹5L), Tarun (₹10L) categories.'},
  {term:'PMEGP', def:'Prime Minister\'s Employment Generation Programme. Subsidy: 25-35% of project cost. Max project cost: ₹50 lakh (manufacturing), ₹20 lakh (service).'},
  {term:'FDI', def:'Foreign Direct Investment — investment from foreign companies/individuals into Indian businesses. TN attracted $42.3B FDI (2000-2024).'},
  {term:'SEZ', def:'Special Economic Zone — designated areas with tax benefits and simplified regulations to boost exports and attract investment.'},
  {term:'TIDCO', def:'Tamil Nadu Industrial Development Corporation. Promotes large and medium industries in the state.'},
  {term:'SIPCOT', def:'State Industries Promotion Corporation of Tamil Nadu. Develops industrial complexes and provides land to industries.'},
  {term:'TANSIDCO', def:'Tamil Nadu Small Industries Development Corporation. Supports small-scale industries with land, sheds, and raw materials.'},
  {term:'StartupTN', def:'Tamil Nadu Startup and Innovation Mission (TANSIM). Provides incubation, funding (up to ₹30 lakh), mentoring, and co-working spaces.'},
  {term:'TIIC', def:'Tamil Nadu Industrial Investment Corporation. Provides term loans for setting up industries in Tamil Nadu.'},
  {term:'ECI', def:'Election Commission of India — constitutional body that conducts elections to Parliament, State Legislatures, and offices of President and Vice President.'},
  {term:'Manifesto', def:'A public declaration of policies and promises by a political party before elections. Outlines what the party intends to do if elected.'},
  {term:'Constituency', def:'A specific geographic area whose voters elect a single representative to the legislative assembly. TN has 234 assembly constituencies.'},
  {term:'FRBM', def:'Fiscal Responsibility and Budget Management Act. Mandates state governments to limit fiscal deficit to 3% of GSDP and debt to 25% of GSDP.'},
  {term:'Revenue Deficit', def:'When government\'s revenue expenditure exceeds revenue receipts. Indicates the government is spending more than it earns from taxes and fees.'},
  {term:'Fiscal Deficit', def:'Total borrowing needed by government in a year. = Total Expenditure - Total Revenue. TN fiscal deficit: ~3.3% of GSDP.'},
  {term:'Capex', def:'Capital Expenditure — government spending on creating assets like roads, bridges, hospitals, and schools. Generates long-term economic value.'},
  {term:'GSDP per Capita', def:'GSDP divided by total population. Measures average economic output per person. TN: ~₹2.5 lakh/person/year.'},
  {term:'PPP', def:'Public-Private Partnership — government and private companies jointly funding and running a project (e.g., highways, metro, hospitals).'},
  {term:'CSR', def:'Corporate Social Responsibility. Companies with ₹5+ crore net profit must spend 2% of average profit on social activities (education, health, environment).'},
  {term:'GeM', def:'Government e-Marketplace — online platform for government procurement. All government departments must buy through GeM for transparency.'},
  {term:'DPIIT', def:'Department for Promotion of Industry and Internal Trade. Recognizes startups and administers Startup India initiative.'},
  {term:'Udyam', def:'MSME registration portal (replaced Udyog Aadhaar). Free online registration at udyamregistration.gov.in. Required for availing MSME benefits.'},
  {term:'FSSAI', def:'Food Safety and Standards Authority of India. License required for any food business. Basic registration for <₹12 lakh turnover, State license for ₹12L-20Cr.'},
  {term:'GST', def:'Goods and Services Tax. Unified indirect tax replacing 17+ taxes. Slabs: 5%, 12%, 18%, 28%. GSTIN mandatory for businesses with >₹40L turnover.'},
  {term:'ROI', def:'Return on Investment. Measures profitability: (Net Profit / Investment) x 100. A 25% ROI means ₹25 earned per ₹100 invested.'},
  {term:'MVP', def:'Minimum Viable Product — simplest version of a product with core features. Used to test market demand before full development.'},
  {term:'SaaS', def:'Software as a Service — cloud-based software sold via subscription. Chennai is called \"SaaS Capital of India\" with 5000+ SaaS companies.'},
  {term:'Breakeven', def:'The point where total revenue equals total costs — no profit, no loss. After breakeven, every additional sale generates profit.'},
  {term:'Working Capital', def:'Money needed to run day-to-day business operations: inventory, salaries, rent, utilities. Formula: Current Assets - Current Liabilities.'},
  {term:'Collateral', def:'Asset pledged as security for a loan (property, gold, FD). If you can\'t repay, the bank takes the collateral. MUDRA loans are collateral-free.'},
  {term:'Subsidy', def:'Financial assistance from government to reduce business costs. Types: capital subsidy (reduces investment), interest subsidy (reduces loan cost).'},
  {term:'Panchayat', def:'Village-level self-government body. Three tiers: Village Panchayat, Panchayat Union (block), District Panchayat. Handles local governance.'},
  {term:'Municipality', def:'Urban local body governing a town. Tamil Nadu has 138 municipalities. Handles water, roads, waste, building permits in urban areas.'},
  {term:'Corporation', def:'Urban local body governing a major city. TN has 21 municipal corporations including Chennai, Coimbatore, Madurai, Salem, Trichy.'},
  {term:'MGNREGA', def:'Mahatma Gandhi National Rural Employment Guarantee Act. Guarantees 100 days of wage employment per year to rural households. Wage: ₹281/day in TN.'},
  {term:'TNSRLM', def:'Tamil Nadu State Rural Livelihoods Mission. Organizes rural women into Self Help Groups (SHGs) for microfinance and livelihood activities.'},
  {term:'SHG', def:'Self Help Group — group of 10-20 women who save together and take loans from the group fund. 4.5 lakh SHGs in Tamil Nadu.'},
  {term:'API', def:'Application Programming Interface — a way for software programs to communicate with each other. Government APIs provide data for civic tech apps.'},
  {term:'IoT', def:'Internet of Things — physical devices (sensors, cameras) connected to the internet to collect and share data. Used in smart city solutions.'},
  {term:'GIS', def:'Geographic Information System — technology for mapping and analyzing spatial data. Used for flood mapping, land records, urban planning.'},
  {term:'TNPDS', def:'Tamil Nadu Public Distribution System. Distributes essential commodities (rice, sugar, kerosene) through 34,000+ ration shops to 2+ crore families.'},
  {term:'Aadhaar', def:'12-digit unique identity number issued by UIDAI. Links to biometrics. Required for bank accounts, subsidies, and many government schemes.'},
  {term:'PAN', def:'Permanent Account Number — 10-character alphanumeric ID from Income Tax department. Required for financial transactions above ₹50,000.'},
  {term:'TIN', def:'Tax Identification Number (or GSTIN) — 15-digit number for businesses registered under GST. Format: State code + PAN + entity number.'},
  {term:'NEET', def:'National Eligibility cum Entrance Test for medical admissions. Controversial in TN — state passed exemption bill (pending Presidential assent).'},
  {term:'DMK', def:'Dravida Munnetra Kazhagam — ruling party of Tamil Nadu (as of 2024). Founded 1949. President: M.K. Stalin. Dravidian ideology.'},
  {term:'AIADMK', def:'All India Anna Dravida Munnetra Kazhagam — principal opposition party. Founded 1972 by M.G. Ramachandran. General Secretary: Edappadi K. Palaniswami.'},
  {term:'TVK', def:'Tamilaga Vettri Kazhagam — political party founded by actor Vijay in 2024. Contesting elections for the first time in TN 2026.'},
  {term:'NTK', def:'Naam Tamilar Katchi — founded by Seeman (2010). Tamil nationalist ideology. Growing vote share in recent elections.'},
  {term:'Delimitation', def:'Redrawing constituency boundaries based on population changes. Upcoming delimitation after 2026 census could change TN\'s seat allocation.'},
  {term:'Anti-defection', def:'Law preventing elected representatives from switching parties. Under 10th Schedule, defection = disqualification unless 2/3rds of party defects.'},
  {term:'Smart City', def:'Government initiative to develop 100 cities with digital infrastructure. TN cities: Chennai, Coimbatore, Madurai, Salem, Thanjavur, Tiruchirappalli, Vellore.'},
  {term:'District Collector', def:'Head of district administration. IAS officer appointed by state government. Controls revenue, law & order, development schemes in the district.'},
  {term:'Lakh', def:'Indian numbering: 1 lakh = 1,00,000 = 100,000. Used for salaries, investments, and government budgets.'},
  {term:'Crore', def:'Indian numbering: 1 crore = 1,00,00,000 = 10 million. TN budget: ~₹4.2 lakh crore = ₹4.2 trillion.'},
  {term:'NABARD', def:'National Bank for Agriculture and Rural Development. Provides refinance to banks for agriculture and rural loans. Funds watershed and RIDF projects.'},
  {term:'SIDBI', def:'Small Industries Development Bank of India. Apex bank for financing MSMEs. Provides loans, equity, and microfinance through intermediaries.'},
  {term:'NPA', def:'Non-Performing Asset — a loan where borrower has stopped making payments for 90+ days. High NPAs reduce bank lending capacity.'},
  {term:'CIBIL Score', def:'Credit score from 300-900. Above 750 is good. Banks check this before approving loans. Improve by paying EMIs on time and keeping credit utilization low.'}
];

var isOpen = false;
var overlay = null;
var fab = null;

function esc(s) {
  if (!s) return '';
  var d = document.createElement('div');
  d.appendChild(document.createTextNode(s));
  return d.innerHTML;
}

function createFAB() {
  fab = document.createElement('button');
  fab.id = 'dictFAB';
  fab.innerHTML = '&#128214;';
  fab.title = 'Dictionary — Look up any term';
  fab.setAttribute('aria-label', 'Open Dictionary');
  var bottomPos = window.innerWidth < 769 ? '80px' : '80px';
  fab.style.cssText = 'position:fixed;bottom:' + bottomPos + ';right:24px;width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#1E2329,#262C34);border:1px solid rgba(200,146,42,.4);color:#C8922A;font-size:22px;cursor:pointer;z-index:95;box-shadow:0 4px 16px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;transition:all .2s;';
  fab.addEventListener('mouseenter', function() { this.style.borderColor = '#C8922A'; this.style.transform = 'scale(1.1)'; });
  fab.addEventListener('mouseleave', function() { this.style.borderColor = 'rgba(200,146,42,.4)'; this.style.transform = 'scale(1)'; });
  fab.addEventListener('click', toggleDict);
  document.body.appendChild(fab);
}

function createOverlay() {
  overlay = document.createElement('div');
  overlay.id = 'dictOverlay';
  var isMobile = window.innerWidth < 500;
  if (isMobile) {
    overlay.style.cssText = 'position:fixed;bottom:0;left:0;right:0;width:100%;max-height:70vh;background:#161A1F;border-top:1px solid #262C34;border-radius:12px 12px 0 0;z-index:96;box-shadow:0 -4px 32px rgba(0,0,0,.5);display:none;flex-direction:column;overflow:hidden;font-family:Inter,-apple-system,sans-serif;';
  } else {
    overlay.style.cssText = 'position:fixed;bottom:140px;right:24px;width:380px;max-height:480px;background:#161A1F;border:1px solid #262C34;border-radius:12px;z-index:96;box-shadow:0 8px 32px rgba(0,0,0,.5);display:none;flex-direction:column;overflow:hidden;font-family:Inter,-apple-system,sans-serif;';
  }

  var header = document.createElement('div');
  header.style.cssText = 'padding:14px 16px;border-bottom:1px solid #262C34;display:flex;align-items:center;gap:10px;';
  header.innerHTML = '<span style="font-size:18px">&#128214;</span><input id="dictSearch" type="text" placeholder="Search terms..." style="flex:1;background:#1E2329;border:1px solid #262C34;border-radius:8px;padding:8px 12px;color:#F0ECE4;font-size:13px;font-family:inherit;outline:none" /><button id="dictClose" style="background:none;border:none;color:#7A7265;cursor:pointer;font-size:18px;padding:4px" title="Close">&#10005;</button>';
  overlay.appendChild(header);

  var body = document.createElement('div');
  body.id = 'dictBody';
  body.style.cssText = 'flex:1;overflow-y:auto;padding:8px 16px 16px;scrollbar-width:thin;scrollbar-color:rgba(200,146,42,.3) transparent;';
  overlay.appendChild(body);

  document.body.appendChild(overlay);

  document.getElementById('dictClose').addEventListener('click', toggleDict);
  document.getElementById('dictSearch').addEventListener('input', function() {
    renderResults(this.value.trim());
  });

  renderResults('');
}

function renderResults(query) {
  var body = document.getElementById('dictBody');
  if (!body) return;
  var q = query.toLowerCase();
  var filtered = GLOSSARY.filter(function(g) {
    if (!q) return true;
    return g.term.toLowerCase().indexOf(q) > -1 || g.def.toLowerCase().indexOf(q) > -1;
  });

  if (filtered.length === 0) {
    body.innerHTML = '<div style="padding:24px 0;text-align:center;color:#7A7265;font-size:13px">No matching terms found.</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var g = filtered[i];
    html += '<div style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.04)">';
    html += '<div style="font-size:14px;font-weight:600;color:#C8922A;margin-bottom:4px">' + esc(g.term) + '</div>';
    html += '<div style="font-size:12px;color:#B8B0A2;line-height:1.6">' + esc(g.def) + '</div>';
    html += '</div>';
  }
  body.innerHTML = html;
}

function toggleDict() {
  if (!overlay) createOverlay();
  isOpen = !isOpen;
  overlay.style.display = isOpen ? 'flex' : 'none';
  if (isOpen) {
    var input = document.getElementById('dictSearch');
    if (input) { input.value = ''; renderResults(''); input.focus(); }
  }
}

function init() {
  createFAB();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.FloatingDictionary = { toggle: toggleDict };

})();
