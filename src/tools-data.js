/* ================================================================
 * TN Launchpad — Business Tools Module
 * ================================================================
 * Cost Calculator, Scheme Eligibility Checker, Compliance Calendar
 * ================================================================ */
(function(){
'use strict';

/* ─── COST CALCULATOR ─── */
/* Maps capital ranges to viable business ideas */
var CAPITAL_BRACKETS = [
  {
    min: 0, max: 50000, label: 'Under ₹50K',
    ideas: [
      { name: 'Street Food Cart', capital: '₹20K-50K', monthly: '₹15K-40K', risk: 'Low', icon: '🍜',
        details: 'Idli/dosa cart, juice stall, snacks. FSSAI license ₹100. No GST if under ₹20L/year.' },
      { name: 'Tailoring / Alterations', capital: '₹15K-40K', monthly: '₹12K-25K', risk: 'Low', icon: '🧵',
        details: 'Home-based or small shop. One sewing machine + iron. Growing demand in residential areas.' },
      { name: 'Mobile Repair Shop', capital: '₹30K-50K', monthly: '₹15K-35K', risk: 'Low', icon: '📱',
        details: 'Screen replacement, battery change. YouTube learning. Tools + initial spare parts inventory.' },
      { name: 'Tiffin / Cloud Kitchen', capital: '₹20K-50K', monthly: '₹20K-50K', risk: 'Medium', icon: '🍱',
        details: 'Home-cooked meals delivery via Swiggy/Zomato. FSSAI license required. Low fixed cost.' },
      { name: 'Freelance Digital Services', capital: '₹10K-30K', monthly: '₹15K-60K', risk: 'Low', icon: '💻',
        details: 'Graphic design, social media management, content writing. Laptop + internet. Fiverr/Upwork.' }
    ],
    schemes: ['MUDRA Shishu (up to ₹50K)', 'PM Vishwakarma (₹3L loan at 5%)']
  },
  {
    min: 50000, max: 500000, label: '₹50K – ₹5L',
    ideas: [
      { name: 'Grocery / Kirana Store', capital: '₹2L-5L', monthly: '₹25K-60K', risk: 'Low', icon: '🏪',
        details: 'Residential area shop. 200-400 sqft. Initial inventory ₹1.5-3L. GST required if >₹40L/year.' },
      { name: 'Beauty Salon / Parlor', capital: '₹1L-5L', monthly: '₹20K-50K', risk: 'Medium', icon: '💇',
        details: 'Basic setup. Training course ₹10-20K. License from local body. Growing demand.' },
      { name: 'Print Shop / Xerox Center', capital: '₹2L-5L', monthly: '₹20K-40K', risk: 'Low', icon: '🖨️',
        details: 'Near college/government office. Printer + laminator + binding. Steady demand for documents.' },
      { name: 'Mushroom Farming', capital: '₹50K-2L', monthly: '₹15K-40K', risk: 'Medium', icon: '🍄',
        details: 'Small space sufficient. Oyster/button mushroom. Training from KVK. Growing health food demand.' },
      { name: 'Photography / Videography', capital: '₹1L-5L', monthly: '₹25K-80K', risk: 'Medium', icon: '📷',
        details: 'Wedding/event photography. Camera + editing setup. High demand in TN wedding market.' }
    ],
    schemes: ['MUDRA Kishore (₹50K-5L)', 'PMEGP (up to ₹20L service)', 'PM Vishwakarma']
  },
  {
    min: 500000, max: 2500000, label: '₹5L – ₹25L',
    ideas: [
      { name: 'Restaurant / Fast Food', capital: '₹5L-25L', monthly: '₹40K-1.5L', risk: 'Medium', icon: '🍽️',
        details: 'South Indian restaurant or fast food. 500-1000 sqft. 5-8 staff. FSSAI + Fire NOC + Trade License.' },
      { name: 'Garment Manufacturing Unit', capital: '₹10L-25L', monthly: '₹50K-2L', risk: 'Medium', icon: '👔',
        details: 'Small unit with 5-10 machines. Tiruppur/Coimbatore cluster. Sub-contracting from exporters.' },
      { name: 'Auto Spare Parts Shop', capital: '₹10L-25L', monthly: '₹40K-1L', risk: 'Low', icon: '🔧',
        details: 'Near service stations. Inventory ₹8-20L. Chennai auto corridor has massive demand.' },
      { name: 'Agri-Processing Unit', capital: '₹5L-20L', monthly: '₹30K-80K', risk: 'Medium', icon: '🌾',
        details: 'Rice mill, flour mill, oil pressing, or spice processing. PMFME 35% subsidy available.' },
      { name: 'IT Services / Software Dev', capital: '₹5L-15L', monthly: '₹50K-3L', risk: 'Medium', icon: '🖥️',
        details: 'Small team, office space. Web dev, app dev, IT support. Chennai/Coimbatore/Madurai IT hubs.' }
    ],
    schemes: ['MUDRA Tarun (₹5L-10L)', 'PMEGP (up to ₹50L mfg)', 'CLCSS (15% subsidy)', 'TANSEED (₹10L grant)']
  },
  {
    min: 2500000, max: 10000000, label: '₹25L – ₹1Cr',
    ideas: [
      { name: 'Manufacturing Unit (MSME)', capital: '₹25L-1Cr', monthly: '₹1L-5L', risk: 'Medium-High', icon: '🏭',
        details: 'Auto parts, plastic molding, sheet metal. SIPCOT/SIDCO industrial estates. 25% capital subsidy.' },
      { name: 'Franchise (Brand Restaurant/Retail)', capital: '₹30L-1Cr', monthly: '₹80K-3L', risk: 'Medium', icon: '🏬',
        details: 'A2B, Saravana Bhavan, Dominos, Subway. Proven model, brand recognition, training provided.' },
      { name: 'Cold Storage / Warehouse', capital: '₹50L-1Cr', monthly: '₹1L-3L', risk: 'Medium', icon: '❄️',
        details: 'Near agricultural markets or industrial areas. Growing cold chain demand. PMFME subsidy.' },
      { name: 'EV Charging Station', capital: '₹25L-80L', monthly: '₹50K-2L', risk: 'Medium-High', icon: '⚡',
        details: 'Highway or city locations. FAME subsidy available. TN EV Policy support. Growing EV adoption.' }
    ],
    schemes: ['TIIC Loans (up to ₹5Cr)', 'MSME Capital Subsidy (25%)', 'MSME Interest Subvention (3%)', 'CLCSS']
  },
  {
    min: 10000000, max: 100000000, label: '₹1Cr – ₹10Cr',
    ideas: [
      { name: 'Export-Oriented Manufacturing', capital: '₹1Cr-10Cr', monthly: '₹5L-25L', risk: 'High', icon: '📦',
        details: 'Garments, leather, auto parts, engineering goods for export. SEZ benefits. SIPCOT land.' },
      { name: 'IT Product Company', capital: '₹1Cr-5Cr', monthly: '₹5L-20L', risk: 'High', icon: '🚀',
        details: 'SaaS product, mobile app, AI/ML product. Chennai SaaS ecosystem. VC funding potential.' },
      { name: 'Hotel / Resort', capital: '₹2Cr-10Cr', monthly: '₹3L-15L', risk: 'High', icon: '🏨',
        details: 'Tourist locations — Mahabalipuram, Ooty, Kodaikanal, Rameswaram. Tourism growing steadily.' }
    ],
    schemes: ['TIIC Term Loans', 'Startup India Tax Holiday', 'PLI (if eligible sector)', 'GUIDANCE single window']
  }
];

/* ─── SCHEME ELIGIBILITY CHECKER ─── */
/* Questions to determine matching schemes */
var ELIGIBILITY_QUESTIONS = [
  {
    id: 'category',
    question: 'What is your social category?',
    options: [
      { value: 'general', label: 'General' },
      { value: 'obc', label: 'OBC' },
      { value: 'sc', label: 'SC (Scheduled Caste)' },
      { value: 'st', label: 'ST (Scheduled Tribe)' },
      { value: 'woman', label: 'Woman Entrepreneur' }
    ]
  },
  {
    id: 'capital',
    question: 'How much capital do you have or plan to invest?',
    options: [
      { value: 'micro', label: 'Under ₹1 Lakh' },
      { value: 'small', label: '₹1 Lakh – ₹10 Lakh' },
      { value: 'medium', label: '₹10 Lakh – ₹1 Crore' },
      { value: 'large', label: '₹1 Crore – ₹10 Crore' },
      { value: 'mega', label: 'Above ₹10 Crore' }
    ]
  },
  {
    id: 'sector',
    question: 'Which sector is your business in?',
    options: [
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'services', label: 'Services / IT' },
      { value: 'food', label: 'Food Processing' },
      { value: 'textiles', label: 'Textiles / Garments' },
      { value: 'agriculture', label: 'Agriculture / Allied' },
      { value: 'retail', label: 'Retail / Trading' },
      { value: 'ev_auto', label: 'EV / Automobile' },
      { value: 'tech', label: 'Tech Startup / SaaS' }
    ]
  },
  {
    id: 'stage',
    question: 'What stage is your business?',
    options: [
      { value: 'idea', label: 'Just an idea' },
      { value: 'starting', label: 'About to start' },
      { value: 'running', label: 'Already running (< 3 years)' },
      { value: 'established', label: 'Established (3+ years)' }
    ]
  },
  {
    id: 'location',
    question: 'Where will your business be located?',
    options: [
      { value: 'chennai', label: 'Chennai / Metro area' },
      { value: 'urban', label: 'Other city / Urban area' },
      { value: 'rural', label: 'Rural / Village area' },
      { value: 'industrial', label: 'Industrial estate / SEZ' }
    ]
  }
];

/* Scheme matching rules */
var SCHEME_RULES = [
  { scheme: 'MUDRA Shishu', match: function(a){ return a.capital === 'micro'; }, benefit: 'Loan up to ₹50,000 — no collateral' },
  { scheme: 'MUDRA Kishore', match: function(a){ return a.capital === 'small'; }, benefit: 'Loan ₹50K-₹5 Lakh — no collateral' },
  { scheme: 'MUDRA Tarun', match: function(a){ return a.capital === 'small' || a.capital === 'medium'; }, benefit: 'Loan ₹5L-₹10 Lakh — no collateral' },
  { scheme: 'PMEGP', match: function(a){ return a.stage === 'idea' || a.stage === 'starting'; }, benefit: 'Up to ₹50L (manufacturing) / ₹20L (service) — 15-35% subsidy' },
  { scheme: 'PM Vishwakarma', match: function(a){ return a.capital === 'micro' || a.capital === 'small'; }, benefit: '₹3L loan at 5% interest + toolkit grant for artisans/craftspeople' },
  { scheme: 'Startup India', match: function(a){ return a.sector === 'tech' || a.stage === 'idea' || a.stage === 'starting'; }, benefit: 'Tax holiday 3 of 10 years + self-certification + Fund of Funds access' },
  { scheme: 'PLI', match: function(a){ return a.capital === 'large' || a.capital === 'mega'; }, benefit: '4-6% incentive on incremental sales for 5 years' },
  { scheme: 'CLCSS', match: function(a){ return a.sector === 'manufacturing' || a.sector === 'textiles'; }, benefit: '15% capital subsidy up to ₹15L for technology upgradation' },
  { scheme: 'PMFME', match: function(a){ return a.sector === 'food'; }, benefit: '35% capital subsidy up to ₹10L for food processing' },
  { scheme: 'NEEDS (SC/ST)', match: function(a){ return a.category === 'sc' || a.category === 'st'; }, benefit: '25% capital subsidy up to ₹30L for SC/ST entrepreneurs' },
  { scheme: 'TAHDCO', match: function(a){ return a.category === 'sc' || a.category === 'st'; }, benefit: 'Loans and subsidies up to ₹10L for SC/ST entrepreneurs' },
  { scheme: 'SC/ST Package', match: function(a){ return a.category === 'sc' || a.category === 'st'; }, benefit: '30% capital subsidy + TAHDCO credit + free training' },
  { scheme: 'Women Entrepreneur Package', match: function(a){ return a.category === 'woman'; }, benefit: 'Extra 5% capital subsidy + priority TIIC lending + EMI deferment' },
  { scheme: 'TANSEED Grant', match: function(a){ return a.sector === 'tech' && (a.stage === 'idea' || a.stage === 'starting'); }, benefit: 'Grant up to ₹10L for innovative startups' },
  { scheme: 'StartupTN', match: function(a){ return a.stage === 'idea' || a.stage === 'starting'; }, benefit: 'Incubation, mentorship, co-working space, access to TANSEED' },
  { scheme: 'TIIC Term Loan', match: function(a){ return a.capital === 'medium' || a.capital === 'large'; }, benefit: 'Capital equipment loans at competitive rates up to ₹5Cr' },
  { scheme: 'MSME Capital Subsidy', match: function(a){ return a.stage !== 'established' && (a.sector === 'manufacturing' || a.sector === 'textiles' || a.sector === 'food'); }, benefit: '25% subsidy on fixed assets up to ₹30L' },
  { scheme: 'MSME Interest Subvention', match: function(a){ return a.stage !== 'established'; }, benefit: '3% interest subsidy on term loans for 5 years' },
  { scheme: 'MSME Power Tariff', match: function(a){ return a.sector === 'manufacturing' || a.sector === 'textiles'; }, benefit: '₹1/unit power tariff discount for first 3 years' },
  { scheme: 'TN EV Policy Incentives', match: function(a){ return a.sector === 'ev_auto'; }, benefit: '100% stamp duty exemption, SGST reimbursement, 15% capital subsidy' },
  { scheme: 'SFURTI Cluster', match: function(a){ return a.location === 'rural'; }, benefit: 'Cluster development up to ₹5Cr — shared infrastructure for traditional industries' },
  { scheme: 'GeM Registration', match: function(a){ return a.sector === 'manufacturing' || a.sector === 'services'; }, benefit: 'Direct access to government procurement — no tender fees' },
  { scheme: 'ODOP', match: function(a){ return a.location === 'rural' || a.location === 'urban'; }, benefit: 'Branding, marketing & infrastructure support for district-specific products' },
  { scheme: 'ZED Certification', match: function(a){ return a.stage === 'running' || a.stage === 'established'; }, benefit: 'Quality/environmental certification — up to ₹5L subsidy' }
];

function checkEligibility(answers){
  var results = [];
  for(var i = 0; i < SCHEME_RULES.length; i++){
    if(SCHEME_RULES[i].match(answers)){
      results.push({ scheme: SCHEME_RULES[i].scheme, benefit: SCHEME_RULES[i].benefit });
    }
  }
  return results;
}

/* ─── COMPLIANCE CALENDAR ─── */
var CALENDAR = [
  { month: 'January', deadlines: [
    { date: 'Jan 7', task: 'TDS/TCS deposit for December', type: 'tax', icon: '💰' },
    { date: 'Jan 11', task: 'GSTR-1 (monthly filers) for December', type: 'gst', icon: '📋' },
    { date: 'Jan 15', task: 'PF/ESI payment for December', type: 'labor', icon: '👷' },
    { date: 'Jan 20', task: 'GSTR-3B for December', type: 'gst', icon: '📋' },
    { date: 'Jan 31', task: 'TDS return (Q3) — Form 26Q', type: 'tax', icon: '💰' },
    { date: 'Jan 31', task: 'Advance Tax — 4th installment', type: 'tax', icon: '💰' }
  ]},
  { month: 'February', deadlines: [
    { date: 'Feb 7', task: 'TDS/TCS deposit for January', type: 'tax', icon: '💰' },
    { date: 'Feb 11', task: 'GSTR-1 for January', type: 'gst', icon: '📋' },
    { date: 'Feb 15', task: 'PF/ESI payment for January', type: 'labor', icon: '👷' },
    { date: 'Feb 20', task: 'GSTR-3B for January', type: 'gst', icon: '📋' }
  ]},
  { month: 'March', deadlines: [
    { date: 'Mar 7', task: 'TDS/TCS deposit for February', type: 'tax', icon: '💰' },
    { date: 'Mar 11', task: 'GSTR-1 for February', type: 'gst', icon: '📋' },
    { date: 'Mar 15', task: 'PF/ESI payment for February + Advance Tax 4th installment', type: 'labor', icon: '👷' },
    { date: 'Mar 20', task: 'GSTR-3B for February', type: 'gst', icon: '📋' },
    { date: 'Mar 31', task: 'Financial Year closing — books finalization', type: 'compliance', icon: '📕' },
    { date: 'Mar 31', task: 'MSME payment to suppliers (within 45 days)', type: 'compliance', icon: '🔔' }
  ]},
  { month: 'April', deadlines: [
    { date: 'Apr 7', task: 'TDS/TCS deposit for March', type: 'tax', icon: '💰' },
    { date: 'Apr 11', task: 'GSTR-1 for March', type: 'gst', icon: '📋' },
    { date: 'Apr 15', task: 'PF/ESI payment for March', type: 'labor', icon: '👷' },
    { date: 'Apr 20', task: 'GSTR-3B for March', type: 'gst', icon: '📋' },
    { date: 'Apr 25', task: 'Professional Tax payment (half-yearly/annual)', type: 'tax', icon: '💰' },
    { date: 'Apr 30', task: 'GSTR-4 (Annual — Composition Scheme)', type: 'gst', icon: '📋' }
  ]},
  { month: 'May', deadlines: [
    { date: 'May 7', task: 'TDS/TCS deposit for April', type: 'tax', icon: '💰' },
    { date: 'May 11', task: 'GSTR-1 for April', type: 'gst', icon: '📋' },
    { date: 'May 15', task: 'PF/ESI payment for April', type: 'labor', icon: '👷' },
    { date: 'May 20', task: 'GSTR-3B for April', type: 'gst', icon: '📋' },
    { date: 'May 31', task: 'TDS return (Q4 Jan-Mar) — Form 26Q', type: 'tax', icon: '💰' }
  ]},
  { month: 'June', deadlines: [
    { date: 'Jun 7', task: 'TDS/TCS deposit for May', type: 'tax', icon: '💰' },
    { date: 'Jun 11', task: 'GSTR-1 for May', type: 'gst', icon: '📋' },
    { date: 'Jun 15', task: 'PF/ESI payment for May + Advance Tax 1st installment (15%)', type: 'labor', icon: '👷' },
    { date: 'Jun 20', task: 'GSTR-3B for May', type: 'gst', icon: '📋' }
  ]},
  { month: 'July', deadlines: [
    { date: 'Jul 7', task: 'TDS/TCS deposit for June', type: 'tax', icon: '💰' },
    { date: 'Jul 11', task: 'GSTR-1 for June', type: 'gst', icon: '📋' },
    { date: 'Jul 15', task: 'PF/ESI payment for June', type: 'labor', icon: '👷' },
    { date: 'Jul 20', task: 'GSTR-3B for June', type: 'gst', icon: '📋' },
    { date: 'Jul 31', task: 'ITR filing due date (non-audit individuals/firms)', type: 'tax', icon: '💰' },
    { date: 'Jul 31', task: 'TDS return (Q1 Apr-Jun) — Form 26Q', type: 'tax', icon: '💰' }
  ]},
  { month: 'August', deadlines: [
    { date: 'Aug 7', task: 'TDS/TCS deposit for July', type: 'tax', icon: '💰' },
    { date: 'Aug 11', task: 'GSTR-1 for July', type: 'gst', icon: '📋' },
    { date: 'Aug 15', task: 'PF/ESI payment for July', type: 'labor', icon: '👷' },
    { date: 'Aug 20', task: 'GSTR-3B for July', type: 'gst', icon: '📋' }
  ]},
  { month: 'September', deadlines: [
    { date: 'Sep 7', task: 'TDS/TCS deposit for August', type: 'tax', icon: '💰' },
    { date: 'Sep 11', task: 'GSTR-1 for August', type: 'gst', icon: '📋' },
    { date: 'Sep 15', task: 'PF/ESI payment for August + Advance Tax 2nd installment (45%)', type: 'labor', icon: '👷' },
    { date: 'Sep 20', task: 'GSTR-3B for August', type: 'gst', icon: '📋' },
    { date: 'Sep 30', task: 'GSTR-9 Annual Return due (extended usually)', type: 'gst', icon: '📋' }
  ]},
  { month: 'October', deadlines: [
    { date: 'Oct 7', task: 'TDS/TCS deposit for September', type: 'tax', icon: '💰' },
    { date: 'Oct 11', task: 'GSTR-1 for September', type: 'gst', icon: '📋' },
    { date: 'Oct 15', task: 'PF/ESI payment for September', type: 'labor', icon: '👷' },
    { date: 'Oct 20', task: 'GSTR-3B for September', type: 'gst', icon: '📋' },
    { date: 'Oct 25', task: 'Professional Tax payment (half-yearly)', type: 'tax', icon: '💰' },
    { date: 'Oct 31', task: 'ITR due date (audit cases)', type: 'tax', icon: '💰' },
    { date: 'Oct 31', task: 'TDS return (Q2 Jul-Sep) — Form 26Q', type: 'tax', icon: '💰' }
  ]},
  { month: 'November', deadlines: [
    { date: 'Nov 7', task: 'TDS/TCS deposit for October', type: 'tax', icon: '💰' },
    { date: 'Nov 11', task: 'GSTR-1 for October', type: 'gst', icon: '📋' },
    { date: 'Nov 15', task: 'PF/ESI payment for October', type: 'labor', icon: '👷' },
    { date: 'Nov 20', task: 'GSTR-3B for October', type: 'gst', icon: '📋' },
    { date: 'Nov 30', task: 'GSTR-9 Annual Return (final deadline, if extended)', type: 'gst', icon: '📋' }
  ]},
  { month: 'December', deadlines: [
    { date: 'Dec 7', task: 'TDS/TCS deposit for November', type: 'tax', icon: '💰' },
    { date: 'Dec 11', task: 'GSTR-1 for November', type: 'gst', icon: '📋' },
    { date: 'Dec 15', task: 'PF/ESI payment for November + Advance Tax 3rd installment (75%)', type: 'labor', icon: '👷' },
    { date: 'Dec 20', task: 'GSTR-3B for November', type: 'gst', icon: '📋' },
    { date: 'Dec 31', task: 'GST Annual Return (GSTR-9) — final', type: 'gst', icon: '📋' },
    { date: 'Dec 31', task: 'Belated ITR / Revised ITR filing deadline', type: 'tax', icon: '💰' }
  ]}
];

/* Get business ideas for a capital amount */
function getIdeasForCapital(amount){
  for(var i = 0; i < CAPITAL_BRACKETS.length; i++){
    if(amount >= CAPITAL_BRACKETS[i].min && amount <= CAPITAL_BRACKETS[i].max){
      return CAPITAL_BRACKETS[i];
    }
  }
  /* If above highest bracket, return the highest */
  return CAPITAL_BRACKETS[CAPITAL_BRACKETS.length - 1];
}

/* Get deadlines for current/specific month */
function getDeadlines(monthIndex){
  if(monthIndex === undefined) monthIndex = new Date().getMonth();
  return CALENDAR[monthIndex] || CALENDAR[0];
}

/* Get upcoming deadlines (next 30 days) */
function getUpcoming(){
  var now = new Date();
  var month = now.getMonth();
  var day = now.getDate();
  var results = [];
  var current = CALENDAR[month];
  if(current){
    for(var i = 0; i < current.deadlines.length; i++){
      var d = current.deadlines[i];
      var dDay = parseInt(d.date.replace(/[^0-9]/g, ''), 10);
      if(dDay >= day) results.push(d);
    }
  }
  /* Add next month's early deadlines */
  var next = CALENDAR[(month + 1) % 12];
  if(next){
    for(var j = 0; j < next.deadlines.length && results.length < 10; j++){
      results.push(next.deadlines[j]);
    }
  }
  return results;
}

var TOOLS_INTRO = {
  K: 'Want to know what business you can start with your pocket money savings? Or find out which government programs can help you? These tools are like having a business advisor in your pocket!',
  T: 'Three powerful tools to kickstart your business journey: a Cost Calculator that tells you what you can start with your budget, a Scheme Finder that matches you with government subsidies and loans, and a Compliance Calendar so you never miss a deadline.',
  V: 'Three practical tools for Tamil Nadu entrepreneurs: (1) Cost Calculator — input your capital, get matched with viable business ideas and relevant schemes, (2) Scheme Eligibility Checker — answer 5 questions to find matching government subsidies and loans, (3) Compliance Calendar — month-by-month filing deadlines so you stay compliant.',
  W: 'These tools operationalize the subsidy and regulatory information: the Cost Calculator maps capital availability to business viability profiles, the Eligibility Checker performs rule-based matching across 24 central and state schemes based on entrepreneur demographics and business characteristics, and the Compliance Calendar aggregates GST, TDS, PF/ESI, and corporate filing requirements into a unified timeline.',
  E: 'The toolset addresses information asymmetry — a key market failure in MSME formation. The Cost Calculator reduces entry uncertainty by mapping capital to risk-adjusted return profiles. The Eligibility Checker aggregates fragmented subsidy information (24 schemes across central and state governments) into a single decision framework. The Compliance Calendar reduces regulatory compliance costs by providing structured deadline management.'
};

window.ToolsData = {
  CAPITAL_BRACKETS: CAPITAL_BRACKETS,
  ELIGIBILITY_QUESTIONS: ELIGIBILITY_QUESTIONS,
  SCHEME_RULES: SCHEME_RULES,
  CALENDAR: CALENDAR,
  TOOLS_INTRO: TOOLS_INTRO,
  getIdeasForCapital: getIdeasForCapital,
  checkEligibility: checkEligibility,
  getDeadlines: getDeadlines,
  getUpcoming: getUpcoming
};

})();
