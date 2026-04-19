/* ============================================================
 * TN 2026 — Pathfinder: Career & Livelihood Guidance Data
 * ============================================================
 * Comprehensive, factual data for career/livelihood guidance
 * targeting unemployed, underemployed, and those seeking direction.
 *
 * Sources:
 *   - Naan Mudhalvan / TNSDC (naanmudhalvan.tn.gov.in)
 *   - StartupTN / TANSIM (startuptn.in)
 *   - GUIDANCE Tamil Nadu (guidance.tn.gov.in)
 *   - Skill India Digital Hub (skillindiadigital.gov.in)
 *   - SWAYAM / NPTEL (swayam.gov.in / nptel.ac.in)
 *   - MUDRA (mudra.org.in)
 *   - PMEGP / KVIC (kviconline.gov.in)
 *   - Udyam Registration (udyamregistration.gov.in)
 *   - TN Directorate of Employment & Training
 *   - TN MSME Policy 2024, TN Industrial Policy 2021
 *   - DIC Tamil Nadu, TIIC (tiic.org), TANSIDCO (tansidco.org)
 *   - TAHDCO, TNSCST, Stand-Up India (standupmitra.in)
 *   - National Career Service (ncs.gov.in)
 *   - NIELIT (nielit.gov.in), NSDC (nsdcindia.org)
 *   - PLFS 2023-24, NABARD, RBI MSME reports
 *
 * All figures in INR. \u20b9 = Rupee symbol.
 * Data verified as of Q1 2026.
 * ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
   * 1. CAREER PATHWAYS — by Education Level
   * ────────────────────────────────────────────────────────── */
  var CAREER_PATHWAYS = {

    /* ── No Formal Education ─────────────────────────────── */
    no_formal: {
      label: 'No Formal Education',
      labelTa: '\u0b89\u0bb0\u0bbf\u0baf \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0b87\u0bb2\u0bcd\u0bb2\u0bc8',
      icon: '\ud83c\udf31',
      note: 'Many successful entrepreneurs started here. Skills and determination matter more than degrees.',
      paths: [
        {
          title: 'Street Food / Tea Stall',
          skill: 'Cooking, basic hygiene',
          training: { name: 'FSSAI Food Safety Training (FoSTaC)', duration: '1\u20132 days', url: 'https://fostac.fssai.gov.in/' },
          income: '\u20b912,000\u2013\u20b940,000/month',
          investment: '\u20b95,000\u2013\u20b950,000',
          where: 'Apply for FSSAI license (\u20b9100 for petty food operators), get trade license from local body',
          govSupport: 'MUDRA Shishu loan up to \u20b950,000 (no collateral)',
          icon: '\ud83c\udf5c'
        },
        {
          title: 'Construction Worker / Mason',
          skill: 'Physical fitness, basic masonry/painting',
          training: { name: 'Construction Skill Training by NSDC / Sector Skill Council (CSSM)', duration: '2\u20134 weeks', url: 'https://www.nsdcindia.org/' },
          income: '\u20b915,000\u2013\u20b935,000/month',
          investment: 'Nil (tools provided by contractor)',
          where: 'Register at nearest Employment Exchange or contact local contractors. TN Construction Workers Welfare Board registration at https://bocw.tn.gov.in/',
          govSupport: 'TN Construction Workers Welfare Board: accident insurance, education aid for children, maternity benefit',
          icon: '\ud83c\udfd7\ufe0f'
        },
        {
          title: 'Agricultural Labourer / Farmer',
          skill: 'Farming basics, seasonal crop knowledge',
          training: { name: 'Krishi Vigyan Kendra (KVK) training', duration: '3\u20135 days per program', url: 'https://kvk.icar.gov.in/' },
          income: '\u20b98,000\u2013\u20b925,000/month (varies by season)',
          investment: 'Nil for wage labour; \u20b910,000+ for own cultivation',
          where: 'Register with nearest KVK for free training. MGNREGA registration at local Panchayat for 100 days guaranteed work at \u20b9294/day (TN rate)',
          govSupport: 'PM-KISAN: \u20b96,000/year direct transfer. Kisan Credit Card for crop loans at 4% interest',
          icon: '\ud83c\udf3e'
        },
        {
          title: 'Domestic Help / Housekeeping',
          skill: 'Cleaning, cooking, basic English',
          training: { name: 'Domestic Worker Skill Training (NSDC / Domestic Workers Sector Skill Council)', duration: '2\u20136 weeks', url: 'https://www.dwsscindia.com/' },
          income: '\u20b910,000\u2013\u20b925,000/month (higher in Chennai/Coimbatore)',
          investment: 'Nil',
          where: 'Register at local Employment Exchange. Apps: Urban Company, BookMyBai. Direct placement through training centers',
          govSupport: 'PM Shram Yogi Maan-dhan pension scheme for unorganized workers',
          icon: '\ud83c\udfe0'
        },
        {
          title: 'Auto / Taxi Driver',
          skill: 'Driving, basic navigation',
          training: { name: 'TN Transport Department Driving Training', duration: '4\u20136 weeks for LMV license', url: 'https://tnsta.gov.in/' },
          income: '\u20b918,000\u2013\u20b945,000/month',
          investment: '\u20b95,000\u2013\u20b910,000 (license fees + training)',
          where: 'RTO for driving license. Register with Ola/Uber/Rapido for immediate income. Auto permit from RTO',
          govSupport: 'Free auto rickshaw scheme for SC/ST (TAHDCO). EV auto subsidy under TN EV Policy',
          icon: '\ud83d\ude95'
        },
        {
          title: 'Waste Collection / Recycling Business',
          skill: 'Sorting, basic waste management knowledge',
          training: { name: 'Swachh Bharat training modules (free)', duration: '1\u20132 weeks', url: 'https://swachhbharatmission.gov.in/' },
          income: '\u20b910,000\u2013\u20b930,000/month',
          investment: '\u20b92,000\u2013\u20b915,000 (cart, bags)',
          where: 'Register with local municipal corporation. Join existing waste collector cooperatives. Kabadiwala Connect app',
          govSupport: 'MUDRA Shishu loan. PM SVANidhi for street vendors (\u20b910K\u2013\u20b950K working capital)',
          icon: '\u267b\ufe0f'
        }
      ]
    },

    /* ── 8th Pass ────────────────────────────────────────── */
    eighth_pass: {
      label: '8th Pass',
      labelTa: '8\u0b86\u0bae\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf',
      icon: '\ud83d\udcda',
      note: 'ITI admission (some trades) opens at 8th pass. Many skilled trades pay better than desk jobs.',
      paths: [
        {
          title: 'ITI \u2014 Welder / Fitter / Plumber',
          skill: 'Manual dexterity, physical fitness',
          training: { name: 'ITI (Industrial Training Institute) \u2014 TN has 95 Govt + 489 Private ITIs', duration: '1\u20132 years', url: 'https://skillindiadigital.gov.in/' },
          income: '\u20b912,000\u2013\u20b930,000/month (fresher); \u20b925,000\u2013\u20b960,000 (experienced)',
          investment: 'Free in Govt ITIs (SC/ST/OBC fee waiver available)',
          where: 'Apply via TN Directorate of Employment & Training. Online admission at https://det.tn.gov.in/',
          govSupport: 'Free training + stipend in Govt ITIs. National Apprenticeship Promotion Scheme (NAPS): \u20b91,500/month stipend',
          icon: '\ud83d\udd27'
        },
        {
          title: 'Tailoring / Garment Worker',
          skill: 'Sewing, pattern understanding',
          training: { name: 'TNSDC Short-term Tailoring Course / Amma Skill Training', duration: '3\u20136 months', url: 'https://www.tnsdc.in/' },
          income: '\u20b910,000\u2013\u20b930,000/month',
          investment: '\u20b95,000\u2013\u20b920,000 (sewing machine)',
          where: 'Tiruppur/Coimbatore garment clusters always hiring. Register at local Employment Exchange',
          govSupport: 'PM Vishwakarma: \u20b915,000 toolkit grant + \u20b93 lakh loan at 5% for tailors. MUDRA Shishu for machine purchase',
          icon: '\ud83e\uddf5'
        },
        {
          title: 'Two-Wheeler Mechanic',
          skill: 'Mechanical aptitude, basic tools handling',
          training: { name: 'ITI \u2014 Mechanic Motor Vehicle (8th pass eligible) or Short-term NSDC course', duration: '6 months \u2013 2 years', url: 'https://www.nsdcindia.org/' },
          income: '\u20b912,000\u2013\u20b935,000/month',
          investment: '\u20b910,000\u2013\u20b950,000 (tools + small rental shop)',
          where: 'Start as helper at existing workshop. High demand in semi-urban areas',
          govSupport: 'PM Vishwakarma scheme covers blacksmith/mechanic trades. MUDRA Shishu for tools/shop setup',
          icon: '\ud83c\udfcd\ufe0f'
        },
        {
          title: 'Delivery Executive (Swiggy/Zomato/Amazon)',
          skill: 'Driving two-wheeler, smartphone literacy',
          training: { name: 'Self \u2014 need valid DL, smartphone, and vehicle', duration: 'Start within 1 week', url: 'https://www.swiggy.com/delivery-partner' },
          income: '\u20b915,000\u2013\u20b935,000/month (incentive-based)',
          investment: '\u20b92,000\u2013\u20b95,000 (delivery bag, fuel)',
          where: 'Sign up on Swiggy/Zomato/Amazon Flex/Dunzo apps directly. Active in all TN cities',
          govSupport: 'E-Shram card for social security: https://eshram.gov.in/',
          icon: '\ud83d\udeb4'
        },
        {
          title: 'Beautician / Barber',
          skill: 'Hair cutting, grooming, customer service',
          training: { name: 'NSDC Beauty & Wellness Sector Skill Council courses', duration: '2\u20134 months', url: 'https://bwssc.in/' },
          income: '\u20b910,000\u2013\u20b935,000/month',
          investment: '\u20b95,000\u2013\u20b930,000 (tools + small space)',
          where: 'NSDC training centers across TN. Urban Company onboarding for home services',
          govSupport: 'PM Vishwakarma for barbers. MUDRA Shishu for salon setup. PMEGP for larger investment',
          icon: '\u2702\ufe0f'
        },
        {
          title: 'Security Guard',
          skill: 'Physical fitness, basic discipline, alertness',
          training: { name: 'PSARA-licensed security training (Private Security Agencies Regulation Act)', duration: '2\u20134 weeks', url: 'https://www.nsdcindia.org/' },
          income: '\u20b912,000\u2013\u20b922,000/month (TN minimum wage: \u20b9700/day)',
          investment: 'Nil (uniform provided by agency)',
          where: 'Register with security agencies (G4S, SIS, Tops Security). Apply via NCS portal: https://www.ncs.gov.in/',
          govSupport: 'ESI + PF mandatory for security staff. E-Shram registration for benefits',
          icon: '\ud83d\uded1'
        }
      ]
    },

    /* ── 10th Pass ───────────────────────────────────────── */
    tenth_pass: {
      label: '10th Pass (SSLC)',
      labelTa: '10\u0b86\u0bae\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf',
      icon: '\ud83c\udf93',
      note: '10th pass is the gateway to ITI (all trades), Polytechnic diploma, and many government jobs.',
      paths: [
        {
          title: 'ITI \u2014 Electrician / Electronics Mechanic / RAC',
          skill: 'Logical thinking, manual dexterity',
          training: { name: 'ITI \u2014 Electrician (2yr), Electronics Mechanic (2yr), RAC (2yr)', duration: '2 years', url: 'https://det.tn.gov.in/' },
          income: '\u20b915,000\u2013\u20b935,000/month (fresher); \u20b930,000\u2013\u20b970,000 (experienced/licensed)',
          investment: 'Free in Govt ITIs',
          where: 'TN DET online admission. 95 Govt ITIs across all districts. Admission July\u2013August annually',
          govSupport: 'NAPS apprenticeship: \u20b91,500\u2013\u20b99,000/month stipend. ITI tools grant for pass-outs',
          icon: '\u26a1'
        },
        {
          title: 'Polytechnic Diploma (Mechanical/Civil/ECE/EEE/CS)',
          skill: 'SSLC with good marks in Maths/Science',
          training: { name: 'Polytechnic Diploma \u2014 TN has 539 polytechnics (152 Govt)', duration: '3 years', url: 'https://www.tndte.gov.in/' },
          income: '\u20b918,000\u2013\u20b940,000/month (fresher); \u20b930,000\u2013\u20b980,000 (experienced)',
          investment: '\u20b95,000\u2013\u20b915,000/year (Govt); \u20b940,000\u2013\u20b91,00,000/year (Private). BC/MBC/SC/ST: free',
          where: 'Apply at https://www.tndte.gov.in/ during admission season (May\u2013July)',
          govSupport: 'BC/MBC/SC/ST fee waiver. First Graduate scholarship. Naan Mudhalvan mandatory skill courses integrated',
          icon: '\ud83d\udee0\ufe0f'
        },
        {
          title: 'COPA (Computer Operator & Programming Assistant) \u2014 ITI',
          skill: 'Basic computer interest, English reading ability',
          training: { name: 'ITI \u2014 COPA trade', duration: '1 year', url: 'https://det.tn.gov.in/' },
          income: '\u20b912,000\u2013\u20b925,000/month (fresher); \u20b920,000\u2013\u20b945,000 (experienced)',
          investment: 'Free in Govt ITIs',
          where: 'All major Govt ITIs offer COPA. High demand trade',
          govSupport: 'NAPS apprenticeship in IT companies. Naan Mudhalvan free upskilling after ITI',
          icon: '\ud83d\udcbb'
        },
        {
          title: 'Nursing / Lab Technician / Paramedic',
          skill: 'Science aptitude, empathy, attention to detail',
          training: { name: 'ANM (Auxiliary Nurse Midwife) or DMLT (Diploma in Medical Lab Technology)', duration: '1.5\u20132 years', url: 'https://www.tnhealth.tn.gov.in/' },
          income: '\u20b915,000\u2013\u20b935,000/month (fresher); \u20b930,000\u2013\u20b960,000 (experienced)',
          investment: '\u20b920,000\u2013\u20b91,00,000/year (varies by institution)',
          where: 'TN Health Department institutions. Apply through Directorate of Medical Education',
          govSupport: 'Govt hospital placements. SC/ST scholarship. Enormous demand post-COVID',
          icon: '\ud83c\udfe5'
        },
        {
          title: 'Mobile Phone / Laptop Repair Technician',
          skill: 'Curiosity about electronics, steady hands',
          training: { name: 'NSDC Electronics Sector Skill Council short course or NIELIT CCC+', duration: '2\u20136 months', url: 'https://essc-india.org/' },
          income: '\u20b915,000\u2013\u20b945,000/month',
          investment: '\u20b910,000\u2013\u20b950,000 (tools + spare parts)',
          where: 'Start as apprentice in existing shop. Open own shop near residential areas',
          govSupport: 'PM Vishwakarma for repair/maintenance trades. MUDRA Kishor for shop setup',
          icon: '\ud83d\udcf1'
        },
        {
          title: 'Government Jobs (Group D / MTS)',
          skill: '10th pass, age 18\u201327 (relaxation for SC/ST/OBC)',
          training: { name: 'Free competitive exam prep via Naan Mudhalvan Vetri Nichayam', duration: 'Self-paced preparation', url: 'https://candidate.tnskill.tn.gov.in/skillwallet/' },
          income: '\u20b918,000\u2013\u20b935,000/month (+ DA + benefits)',
          investment: 'Nil (exam fee \u20b9100\u2013\u20b9500; waived for SC/ST)',
          where: 'TNPSC Group IV, SSC MTS, Railway Group D. Apply at https://www.tnpsc.gov.in/',
          govSupport: 'Naan Mudhalvan free UPSC/competitive exam coaching. Free coaching for SC/ST by TAHDCO',
          icon: '\ud83c\udfe2'
        },
        {
          title: 'Tally / Accounting Assistant',
          skill: 'Basic math, computer literacy',
          training: { name: 'NSDC Accounting course or Tally Education Pvt Ltd certification', duration: '2\u20134 months', url: 'https://tallysolutions.com/learning/' },
          income: '\u20b912,000\u2013\u20b928,000/month',
          investment: '\u20b93,000\u2013\u20b910,000 (course fee)',
          where: 'Every business needs billing/accounting. High demand in MSME sector',
          govSupport: 'Naan Mudhalvan Tally courses available free for college students. NIELIT basic IT courses',
          icon: '\ud83d\udcca'
        }
      ]
    },

    /* ── 12th Pass ───────────────────────────────────────── */
    twelfth_pass: {
      label: '12th Pass (HSC)',
      labelTa: '12\u0b86\u0bae\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf',
      icon: '\ud83c\udfc6',
      note: '12th pass opens doors to degree programs, bank jobs, police, and all Naan Mudhalvan skill courses.',
      paths: [
        {
          title: 'BPO / Call Center / Data Entry',
          skill: 'English communication, basic computer, typing speed 30+ WPM',
          training: { name: 'Naan Mudhalvan \u2014 Communication Skills & IT Fundamentals (free)', duration: '2\u20134 weeks', url: 'https://naanmudhalvan.tn.gov.in/skillofferings' },
          income: '\u20b915,000\u2013\u20b930,000/month (fresher); \u20b925,000\u2013\u20b950,000 (experienced)',
          investment: 'Nil',
          where: 'Chennai IT corridor (OMR/GST Road), Coimbatore, Madurai. Apply via NCS, Naukri, Indeed',
          govSupport: 'Naan Mudhalvan free placement drives. NSDC PMKVY short-term IT/ITES courses',
          icon: '\ud83d\udcde'
        },
        {
          title: 'Degree + Naan Mudhalvan Skill Track',
          skill: '12th pass with interest in technology/management',
          training: { name: 'Naan Mudhalvan mandatory skill courses in all TN colleges (Microsoft/Google/Cisco/IBM/AWS/Salesforce)', duration: '3 years (integrated with degree)', url: 'https://naanmudhalvan.tn.gov.in/' },
          income: '\u20b925,000\u2013\u20b960,000/month after graduation (placement support)',
          investment: 'Govt college: \u20b91,000\u2013\u20b95,000/year. Private: varies',
          where: 'Join any Arts & Science / Engineering college in TN \u2014 Naan Mudhalvan skills are mandatory in all',
          govSupport: 'Naan Mudhalvan: free industry certifications (Microsoft, Google, Cisco, AWS). Internship stipends. Kalloori Kanavu campus placement drives',
          icon: '\ud83c\udf1f'
        },
        {
          title: 'Police Constable / Fire Service / TN Uniformed Services',
          skill: 'Physical fitness, 12th pass, age 18\u201326',
          training: { name: 'TNUSRB recruitment training (after selection)', duration: 'Selection process + 9 months training', url: 'https://www.tnusrb.tn.gov.in/' },
          income: '\u20b925,000\u2013\u20b945,000/month (+ DA + allowances)',
          investment: '\u20b9500\u20131,000 (application fee; free for SC/ST)',
          where: 'Apply at https://www.tnusrb.tn.gov.in/ when notifications are released',
          govSupport: 'Free physical training camps by TN police. Naan Mudhalvan competitive exam prep. TAHDCO free coaching for SC/ST',
          icon: '\ud83d\udc6e'
        },
        {
          title: 'Bank Clerk / Insurance Agent',
          skill: 'Math aptitude, English, computer skills',
          training: { name: 'IBPS/SBI Clerk exam prep \u2014 free material on Naan Mudhalvan + Vetri Nichayam', duration: '3\u20136 months preparation', url: 'https://www.ibps.in/' },
          income: '\u20b928,000\u2013\u20b940,000/month (clerk); \u20b915,000\u2013\u20b950,000 (insurance agent, commission-based)',
          investment: '\u20b91,000\u2013\u20b95,000 (exam fees + study material)',
          where: 'IBPS notification on ibps.in. SBI on sbi.co.in/careers. LIC agent: apply at nearest LIC branch',
          govSupport: 'Naan Mudhalvan competitive exam coaching. SC/ST free coaching by TAHDCO',
          icon: '\ud83c\udfe6'
        },
        {
          title: 'Sales Executive / Retail',
          skill: 'Communication, product knowledge, persuasion',
          training: { name: 'Retailers Association Skill Council of India (RASCI) courses via NSDC', duration: '1\u20133 months', url: 'https://rasci.in/' },
          income: '\u20b915,000\u2013\u20b935,000/month (+ incentives)',
          investment: 'Nil',
          where: 'Apply at Reliance Retail, D-Mart, Flipkart, organized retail chains. Walk-in interviews common',
          govSupport: 'PMKVY retail courses with placement support',
          icon: '\ud83d\uded2'
        },
        {
          title: 'Digital Marketing / Social Media Freelancing',
          skill: 'Smartphone/computer, creativity, English/Tamil writing',
          training: { name: 'Google Digital Garage (free) + Naan Mudhalvan digital skills', duration: '2\u20138 weeks (self-paced)', url: 'https://learndigital.withgoogle.com/digitalgarage' },
          income: '\u20b910,000\u2013\u20b950,000/month (freelance)',
          investment: '\u20b95,000\u2013\u20b910,000 (laptop/smartphone + internet)',
          where: 'Start on Fiverr, Upwork, or manage local business social media. Kuku FM, YouTube content creation',
          govSupport: 'Naan Mudhalvan free Google/Microsoft certifications. NIELIT digital literacy courses',
          icon: '\ud83d\udcf2'
        },
        {
          title: 'NIELIT O/A/B Level (IT Certification)',
          skill: 'Interest in computers, basic English',
          training: { name: 'NIELIT O-Level (equiv. to Foundation in IT) / A-Level (equiv. to PGDCA)', duration: '1 year (O-Level); 1.5 years (A-Level)', url: 'https://www.nielit.gov.in/' },
          income: '\u20b918,000\u2013\u20b935,000/month (O-Level); \u20b925,000\u2013\u20b960,000 (A-Level)',
          investment: '\u20b910,000\u2013\u20b925,000 (exam + study center fees)',
          where: 'NIELIT centers: Chennai, Coimbatore, Madurai, Trichy, Salem. Apply at nielit.gov.in',
          govSupport: 'NIELIT is a Govt of India (MeitY) organization. SC/ST fee concession available',
          icon: '\ud83d\udda5\ufe0f'
        }
      ]
    },

    /* ── Diploma Holders ─────────────────────────────────── */
    diploma: {
      label: 'Diploma (Polytechnic)',
      labelTa: '\u0b9f\u0bbf\u0baa\u0bcd\u0bb3\u0bcb\u0bae\u0bbe',
      icon: '\ud83d\udd29',
      note: 'Diploma holders are backbone of TN manufacturing. SIPCOT industrial estates and auto corridors have constant demand.',
      paths: [
        {
          title: 'Manufacturing Technician (Auto/Electronics/Mechanical)',
          skill: 'Technical drawing, machine operation, quality control',
          training: { name: 'Polytechnic Diploma + NAPS Apprenticeship in SIPCOT/SIDCO units', duration: '1 year apprenticeship post-diploma', url: 'https://www.apprenticeshipindia.gov.in/' },
          income: '\u20b920,000\u2013\u20b945,000/month (fresher); \u20b935,000\u2013\u20b980,000 (5+ years)',
          investment: 'Nil (apprenticeship is paid)',
          where: 'SIPCOT estates: Sriperumbudur, Oragadam, Hosur, Maraimalai Nagar. Apply via apprenticeshipindia.gov.in',
          govSupport: 'NAPS: \u20b91,500\u2013\u20b99,000/month stipend from Govt. Direct absorption common in Hyundai, TVS, Ashok Leyland, Saint-Gobain',
          icon: '\ud83c\udfed'
        },
        {
          title: 'Electrical Contractor / Licensed Wireman',
          skill: 'Electrical safety, wiring, load calculation',
          training: { name: 'TN Electrical Licensing Board \u2014 Wireman/Supervisor license exam', duration: '2\u20134 months prep + exam', url: 'https://tneb.tn.gov.in/' },
          income: '\u20b925,000\u2013\u20b970,000/month (contractor can earn \u20b91L+)',
          investment: '\u20b910,000\u2013\u20b930,000 (tools + license fees)',
          where: 'TN Electrical Inspectorate for licensing. Every construction project needs licensed electricians',
          govSupport: 'MUDRA Kishor for starting own contracting business. PM Vishwakarma for trade workers',
          icon: '\u26a1'
        },
        {
          title: 'Lateral Entry to B.E./B.Tech (2nd Year)',
          skill: 'Diploma with 50%+ marks',
          training: { name: 'Lateral Entry to Engineering \u2014 TANCA counseling', duration: '3 years (2nd to 4th year)', url: 'https://www.annauniv.edu/' },
          income: '\u20b930,000\u2013\u20b960,000/month post B.E. (campus placement)',
          investment: '\u20b920,000\u2013\u20b950,000/year (Govt engineering college)',
          where: 'Apply via Anna University TANCA for lateral entry. Counseling in July\u2013August',
          govSupport: 'First Graduate scholarship. BC/MBC/SC/ST fee waiver. Naan Mudhalvan integrated skills',
          icon: '\ud83c\udf93'
        },
        {
          title: 'CNC/CAD/CAM Operator',
          skill: 'Technical drawing, computer skills, precision',
          training: { name: 'MSME Tool Room (IGTR Chennai) CNC programming course', duration: '2\u20136 months', url: 'https://www.igtrchennai.in/' },
          income: '\u20b920,000\u2013\u20b950,000/month',
          investment: '\u20b95,000\u2013\u20b920,000 (course fee)',
          where: 'IGTR Chennai (Indo-German Tool Room). CIPET centers. MSME Development Institute courses',
          govSupport: 'Subsidized fees at Govt tool rooms. NSDC CNC courses. Naan Mudhalvan advanced manufacturing tracks',
          icon: '\ud83e\uddf0'
        },
        {
          title: 'Solar Panel Installation / EV Technician',
          skill: 'Electrical basics, roof work safety',
          training: { name: 'NSDC \u2014 Suryamitra (Solar) / EV Technician courses by Skill Council for Green Jobs', duration: '2\u20134 months', url: 'https://sscgj.in/' },
          income: '\u20b920,000\u2013\u20b950,000/month',
          investment: '\u20b95,000\u2013\u20b915,000 (tools)',
          where: 'Growing rapidly in TN due to rooftop solar mandate and EV push. Chennai, Coimbatore EV hubs',
          govSupport: 'TN Solar Energy Policy subsidies. PM Surya Ghar free electricity scheme drives installer demand',
          icon: '\u2600\ufe0f'
        },
        {
          title: 'MSME / Own Manufacturing Unit',
          skill: 'Domain expertise + basic business sense',
          training: { name: 'DIC (District Industries Centre) EDP (Entrepreneurship Development Programme)', duration: '1\u20132 weeks', url: 'https://msmeonline.tn.gov.in/' },
          income: '\u20b930,000\u2013\u20b92,00,000/month (varies widely)',
          investment: '\u20b92,00,000\u2013\u20b925,00,000',
          where: 'Register at DIC in your district. Udyam registration at https://udyamregistration.gov.in/ (free). Apply for SIDCO/SIPCOT industrial plot',
          govSupport: 'PMEGP: 25\u201335% subsidy on project up to \u20b950L. NEEDS scheme: 90% project cost covered for SC/ST. CLCSS: 15% capital subsidy',
          icon: '\ud83c\udfed'
        }
      ]
    },

    /* ── Graduate ────────────────────────────────────────── */
    graduate: {
      label: 'Graduate (B.A./B.Sc./B.Com./B.E./B.Tech)',
      labelTa: '\u0baa\u0b9f\u0bcd\u0b9f\u0baa\u0bcd\u0baa\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0bc1',
      icon: '\ud83c\udf96\ufe0f',
      note: 'Graduates have maximum options. Naan Mudhalvan certifications + internships dramatically improve employability.',
      paths: [
        {
          title: 'IT / Software Development',
          skill: 'Programming (Python/Java/JavaScript), problem solving',
          training: { name: 'Naan Mudhalvan \u2014 Microsoft/Google/AWS/Salesforce/ServiceNow certification tracks (free for TN students)', duration: '3\u20136 months (self-paced)', url: 'https://naanmudhalvan.tn.gov.in/skillofferings' },
          income: '\u20b925,000\u2013\u20b960,000/month (fresher); \u20b950,000\u2013\u20b92,00,000 (experienced)',
          investment: 'Nil (free certifications via Naan Mudhalvan)',
          where: 'Chennai IT corridor (OMR, Sholinganallur, Ambattur). Coimbatore TIDEL Park. Apply via Naan Mudhalvan Kalloori Kanavu placement drives',
          govSupport: 'Naan Mudhalvan: free Microsoft Azure/Google Cloud/AWS/Cisco/IBM certifications. Internship stipends. Campus hiring portal',
          icon: '\ud83d\udcbb'
        },
        {
          title: 'Government Services (TNPSC Group I\u2013IV / UPSC)',
          skill: 'General knowledge, analytical ability, Tamil/English proficiency',
          training: { name: 'Naan Mudhalvan Vetri Nichayam (free UPSC/competitive exam coaching) + TAHDCO free coaching for SC/ST', duration: '6\u201318 months preparation', url: 'https://candidate.tnskill.tn.gov.in/skillwallet/' },
          income: '\u20b935,000\u2013\u20b91,50,000/month (varies by Group)',
          investment: '\u20b91,000\u2013\u20b95,000 (exam fees + books)',
          where: 'TNPSC: https://www.tnpsc.gov.in/. UPSC: https://www.upsc.gov.in/. SSC: https://ssc.nic.in/',
          govSupport: 'Naan Mudhalvan Vetri Nichayam free coaching. TAHDCO coaching centres for SC/ST. Free UPSC coaching for BC/MBC by TN Backward Classes department',
          icon: '\ud83c\udfe2'
        },
        {
          title: 'Startup / Entrepreneurship',
          skill: 'Domain expertise, business planning, networking',
          training: { name: 'StartupTN programs + Startup India registration', duration: 'Ongoing', url: 'https://startuptn.in/' },
          income: 'Variable \u2014 \u20b90 to \u20b910L+/month',
          investment: '\u20b950,000\u2013\u20b910,00,000+',
          where: 'StartupTN: 127 incubation centers across TN. DPIIT recognition at https://www.startupindia.gov.in/. IIT-M Research Park, IITM Incubation Cell, PSG-STEP Coimbatore',
          govSupport: 'TANSEED: seed fund for early-stage startups. TANFUND: global funding connect. TN SC/ST Startup Fund. Startup India Seed Fund Scheme (SISFS). 3-year tax holiday for DPIIT-recognized startups',
          icon: '\ud83d\ude80'
        },
        {
          title: 'Banking / Financial Services',
          skill: 'Quantitative aptitude, English, general awareness',
          training: { name: 'IBPS PO/SO preparation + NISM certification for mutual fund distributors', duration: '3\u20136 months', url: 'https://www.ibps.in/' },
          income: '\u20b935,000\u2013\u20b960,000/month (PO); \u20b920,000\u2013\u20b91,00,000 (financial advisor)',
          investment: '\u20b92,000\u2013\u20b910,000',
          where: 'IBPS notifications for PO/SO. AMFI certification for mutual fund distribution. Insurance agent license from IRDAI',
          govSupport: 'Naan Mudhalvan competitive exam prep. Stand-Up India bank loan for SC/ST/women entrepreneurs (\u20b910L\u2013\u20b91Cr)',
          icon: '\ud83d\udcb0'
        },
        {
          title: 'Teaching / Education Sector',
          skill: 'Subject expertise, communication, patience',
          training: { name: 'B.Ed. (1 year for graduates) + TET qualification', duration: '1 year B.Ed. + TET exam', url: 'https://www.trb.tn.nic.in/' },
          income: '\u20b925,000\u2013\u20b950,000/month (private); \u20b940,000\u2013\u20b91,00,000 (Govt teacher)',
          investment: '\u20b920,000\u2013\u20b91,00,000/year (B.Ed. fees)',
          where: 'TRB (Teachers Recruitment Board): https://www.trb.tn.nic.in/. Private school applications year-round',
          govSupport: 'Govt teacher positions via TRB. PM POSHAN mid-day meal supervisor roles. Online tutoring platforms (Byju\'s, Vedantu hiring)',
          icon: '\ud83d\udc69\u200d\ud83c\udfeb'
        },
        {
          title: 'Export / International Trade',
          skill: 'English, business communication, domain knowledge',
          training: { name: 'IIFT (Indian Institute of Foreign Trade) short courses + ECGC Export training', duration: '1\u20133 months', url: 'https://www.iift.edu/' },
          income: '\u20b925,000\u2013\u20b975,000/month',
          investment: '\u20b910,000\u2013\u20b950,000 (courses + IEC code registration)',
          where: 'Chennai is India\'s 2nd largest port. Tuticorin port growing. Tiruppur garment exports. Sivakasi fireworks/printing exports',
          govSupport: 'IEC code free from DGFT. ECGC export credit insurance. FIEO membership for market access. TN State Export Excellence Awards',
          icon: '\ud83c\udf0d'
        }
      ]
    },

    /* ── Postgraduate ────────────────────────────────────── */
    postgraduate: {
      label: 'Postgraduate (M.A./M.Sc./M.Tech/MBA/MCA)',
      labelTa: '\u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bb2\u0bc8 \u0baa\u0b9f\u0bcd\u0b9f\u0baa\u0bcd\u0baa\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0bc1',
      icon: '\ud83c\udfc5',
      note: 'PG holders can aim for specialized roles, research, consulting, and senior government positions.',
      paths: [
        {
          title: 'Data Science / AI / ML Specialist',
          skill: 'Python, statistics, machine learning frameworks',
          training: { name: 'NPTEL courses (IIT faculty, free) + Naan Mudhalvan AI/ML tracks', duration: '3\u20136 months', url: 'https://nptel.ac.in/' },
          income: '\u20b950,000\u2013\u20b92,00,000/month (fresher with skills); \u20b91,50,000\u2013\u20b95,00,000 (experienced)',
          investment: 'Nil (NPTEL courses are free; certificate exam \u20b91,000)',
          where: 'NPTEL: 6,000+ courses from IITs/IISc. SWAYAM for credit transfer. Chennai/Coimbatore AI startups hiring',
          govSupport: 'NPTEL completely free video courses + \u20b91,000 exam for certificate. SWAYAM credit transfer to universities. Naan Mudhalvan AI/ML certifications',
          icon: '\ud83e\udde0'
        },
        {
          title: 'Research & PhD (Academic Career)',
          skill: 'Research methodology, domain expertise, writing',
          training: { name: 'NET/SET qualification + PhD admission', duration: '3\u20135 years PhD', url: 'https://ugcnet.nta.nic.in/' },
          income: '\u20b931,000/month (JRF fellowship) + \u20b935,000 (SRF); \u20b957,700+ (Assistant Professor)',
          investment: '\u20b92,000 (NET exam fee)',
          where: 'UGC NET for JRF. IIT/Anna University/Madras University PhD programs. CSIR fellowships for science',
          govSupport: 'JRF fellowship: \u20b931,000/month for 2 years + \u20b935,000 for 3 years. HRA + contingency. TN State fellowship for SC/ST',
          icon: '\ud83d\udd2c'
        },
        {
          title: 'Management Consulting / Corporate Strategy',
          skill: 'Analytical thinking, communication, industry knowledge',
          training: { name: 'MBA + industry certifications (PMP, Six Sigma, CFA)', duration: 'Ongoing professional development', url: 'https://www.pmi.org/' },
          income: '\u20b950,000\u2013\u20b93,00,000/month',
          investment: '\u20b910,000\u2013\u20b950,000 (certifications)',
          where: 'Big 4 firms in Chennai. IT consulting companies. Apply via LinkedIn, Naukri',
          govSupport: 'NSDC sector skill council certifications. Industry 4.0 courses on Naan Mudhalvan',
          icon: '\ud83d\udcc8'
        },
        {
          title: 'Public Policy / IAS / IPS',
          skill: 'Analytical writing, current affairs, general knowledge',
          training: { name: 'UPSC CSE preparation \u2014 Naan Mudhalvan Vetri Nichayam + TN free coaching centres', duration: '1\u20132 years preparation', url: 'https://www.upsc.gov.in/' },
          income: '\u20b956,100\u2013\u20b92,50,000/month (IAS pay scale 7th CPC)',
          investment: '\u20b95,000\u2013\u20b920,000 (books + test series)',
          where: 'UPSC CSE: 3 stage exam (Prelims, Mains, Interview). Naan Mudhalvan helpline: 90437 10214',
          govSupport: 'Naan Mudhalvan free UPSC coaching. TAHDCO residential coaching for SC/ST. BC/MBC department coaching centres. \u20b97,500/month stipend for UPSC aspirants (TN Govt scheme)',
          icon: '\ud83c\udfe9'
        },
        {
          title: 'Healthcare Administration / Hospital Management',
          skill: 'Management, healthcare domain knowledge',
          training: { name: 'MHA/MBA Healthcare + hospital administration experience', duration: '2 years MHA', url: 'https://www.tnhealth.tn.gov.in/' },
          income: '\u20b940,000\u2013\u20b91,50,000/month',
          investment: '\u20b950,000\u2013\u20b92,00,000/year (course fees)',
          where: 'TN has India\'s densest hospital network. Apollo, MIOT, CMC Vellore, Govt medical college hospitals',
          govSupport: 'TN Health Department recruitment. National Health Mission (NHM) contractual positions',
          icon: '\ud83c\udfe5'
        }
      ]
    }
  };

  /* ──────────────────────────────────────────────────────────
   * 2. FREE GOVERNMENT RESOURCES
   * ────────────────────────────────────────────────────────── */
  var FREE_RESOURCES = [
    /* ── Skill Training Programs ────────────────────────── */
    {
      category: 'Skill Training',
      icon: '\ud83c\udfaf',
      resources: [
        {
          name: 'Naan Mudhalvan',
          provider: 'TNSDC (Tamil Nadu Skill Development Corporation)',
          description: 'TN flagship skill initiative \u2014 free industry certifications from Microsoft, Google, Cisco, IBM, AWS, Salesforce, ServiceNow, MongoDB integrated into all TN college curricula. Also offers Vetri Nichayam (competitive exam prep), Kalloori Kanavu (campus placement), internships, apprenticeships, and hackathons.',
          who: 'All college students in TN (Engineering, Arts & Science, Polytechnic, ITI, Pharmacy)',
          url: 'https://naanmudhalvan.tn.gov.in/',
          helpline: '+91 99622 20527 / +91 99622 20528',
          app: 'https://play.google.com/store/apps/details?id=in.gov.tn.naanmudhalvan'
        },
        {
          name: 'TNSDC Short-Term Skill Training',
          provider: 'Tamil Nadu Skill Development Corporation',
          description: 'Short-term (2 weeks to 6 months) skill courses in trades like welding, plumbing, electrical, beauty therapy, CNC operation, tally, web development. Courses available at district-level training centers.',
          who: '18+ years, any education level',
          url: 'https://www.tnsdc.in/',
          helpline: 'Contact through Naan Mudhalvan portal'
        },
        {
          name: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana)',
          provider: 'NSDC / Ministry of Skill Development',
          description: 'Free short-term skill training (150\u2013300 hours) in 200+ job roles across 37 sectors. Includes certification, placement support, and \u20b98,000 reward on successful certification.',
          who: 'Indian citizens, class 10th pass (some courses 8th pass)',
          url: 'https://www.pmkvyofficial.org/',
          helpline: '1800-123-9626 (toll free)'
        },
        {
          name: 'Skill India Digital Hub',
          provider: 'Ministry of Skill Development & Entrepreneurship',
          description: 'Unified platform for skill courses, job exchange, apprenticeships, Digital CV creation, and entrepreneurship resources.',
          who: 'Anyone',
          url: 'https://skillindiadigital.gov.in/',
          helpline: 'Available on portal'
        },
        {
          name: 'National Apprenticeship Promotion Scheme (NAPS)',
          provider: 'Ministry of Skill Development',
          description: 'Paid apprenticeships in industries across India. Govt shares 25% of stipend (max \u20b91,500/month). Covers ITI, diploma, graduate apprentices. Over 6 lakh establishments registered.',
          who: 'ITI pass-outs, Diploma holders, Graduates, 10th/12th pass for designated trades',
          url: 'https://www.apprenticeshipindia.gov.in/',
          helpline: '1800-599-0019 (toll free)'
        },
        {
          name: 'NIELIT (National Institute of Electronics & IT)',
          provider: 'Ministry of Electronics & IT (MeitY)',
          description: 'IT certification programs: CCC (basic computer), O-Level (Foundation IT), A-Level (Advanced IT), B-Level (MCA equivalent). Also BCC, ACC for basic digital literacy.',
          who: '10th pass and above',
          url: 'https://www.nielit.gov.in/',
          helpline: 'NIELIT Chennai: 044-2254 1747'
        }
      ]
    },

    /* ── Free Online Courses ────────────────────────────── */
    {
      category: 'Free Online Courses',
      icon: '\ud83d\udcf1',
      resources: [
        {
          name: 'SWAYAM',
          provider: 'Ministry of Education, Government of India',
          description: 'Free online courses from class 9 to postgraduate level by IITs, IIMs, Central Universities. 4-quadrant approach: video lectures, reading material, self-assessment, discussion forum. Credit transfer available to universities.',
          who: 'Anyone (free to learn; \u20b9500\u20131,000 for certificate exam)',
          url: 'https://swayam.gov.in/',
          app: 'https://play.google.com/store/apps/details?id=in.gov.swayam.app'
        },
        {
          name: 'NPTEL (National Programme on Technology Enhanced Learning)',
          provider: 'IITs and IISc',
          description: '6,000+ courses in engineering, science, management, humanities by IIT/IISc faculty. Free video access. Certificate exams at \u20b91,000. NPTEL certificates recognized by AICTE/UGC for credit transfer.',
          who: 'Anyone (primarily UG/PG engineering & science students)',
          url: 'https://nptel.ac.in/',
          helpline: 'support@nptel.iitm.ac.in'
        },
        {
          name: 'Google Digital Garage',
          provider: 'Google',
          description: 'Free courses on digital marketing fundamentals, data analytics, AI basics, online business. Google-certified. Covers SEO, SEM, social media, analytics.',
          who: 'Anyone with internet access',
          url: 'https://learndigital.withgoogle.com/digitalgarage'
        },
        {
          name: 'Coursera for Campus (via Naan Mudhalvan)',
          provider: 'Coursera / TNSDC',
          description: 'TN Govt has partnered with Coursera to provide free access to select courses for Naan Mudhalvan registered students. Google, IBM, Meta professional certificates available.',
          who: 'TN college students registered on Naan Mudhalvan',
          url: 'https://naanmudhalvan.tn.gov.in/skillofferings'
        },
        {
          name: 'DigiSaksham',
          provider: 'Microsoft + Ministry of Labour',
          description: 'Free digital skills training by Microsoft for jobseekers registered at Employment Exchanges. Covers basic IT, advanced computing, coding with Python, data visualization.',
          who: 'Jobseekers registered at Employment Exchanges (age 15\u201335, class 10th pass)',
          url: 'https://digisaksham.nasscom.in/'
        }
      ]
    },

    /* ── Employment Exchanges & Job Portals ──────────────── */
    {
      category: 'Employment Exchanges & Job Portals',
      icon: '\ud83d\udcbc',
      resources: [
        {
          name: 'TN Employment Exchange (Online Registration)',
          provider: 'TN Directorate of Employment & Training',
          description: 'Free registration for job seekers. Required for many Govt job applications. Renewal every 3\u20135 years. 1,035 Employment Exchanges across TN districts.',
          who: 'TN residents, age 15+, any education',
          url: 'https://www.tnvelaivaaippu.gov.in/',
          how: '1. Visit https://www.tnvelaivaaippu.gov.in/ 2. Click "Registration" 3. Fill details with Aadhaar, education certificates, photos 4. Get registration number. OR visit nearest Employment Exchange office with original certificates.',
          helpline: '1800-425-4466 (toll free)'
        },
        {
          name: 'National Career Service (NCS)',
          provider: 'Ministry of Labour & Employment',
          description: 'Free national job portal with 1.3 Cr+ active vacancies. AI-based job matching. Career counseling. Includes Govt and private sector jobs.',
          who: 'Anyone',
          url: 'https://www.ncs.gov.in/',
          helpline: '1800-425-1514 (toll free)'
        },
        {
          name: 'E-Shram Portal',
          provider: 'Ministry of Labour & Employment',
          description: 'National database of unorganized workers. Registration gives: accident insurance (\u20b92 lakh), access to PM social security schemes, and visibility for govt welfare programs. Over 30 Cr registrations.',
          who: 'Unorganized/informal sector workers (street vendors, domestic workers, construction workers, gig workers, agricultural labourers)',
          url: 'https://eshram.gov.in/',
          helpline: '14434'
        }
      ]
    },

    /* ── MSME & Business Support ────────────────────────── */
    {
      category: 'MSME & Business Support',
      icon: '\ud83c\udfed',
      resources: [
        {
          name: 'District Industries Centre (DIC)',
          provider: 'TN MSME Department',
          description: 'First stop for any new business in TN. Services: Udyam registration assistance, project reports, bank loan recommendation, subsidy application (PMEGP, NEEDS, CLCSS), land allotment in SIDCO estates, training programs. One DIC per district (38 DICs in TN).',
          who: 'Anyone starting/running a business in TN',
          url: 'https://msmeonline.tn.gov.in/',
          how: 'Visit DIC office in your district headquarters with: Aadhaar, PAN, project idea. Officers will guide you through Udyam registration, loan application, and subsidy schemes. FREE service.',
          helpline: 'DIC Chennai: 044-2524 0340. Find your district DIC at https://msmeonline.tn.gov.in/'
        },
        {
          name: 'Udyam Registration (MSME Registration)',
          provider: 'Ministry of MSME, Government of India',
          description: 'FREE, permanent, paperless online registration for micro, small, and medium enterprises. Based on self-declaration + Aadhaar/PAN. Unlocks: priority sector lending, lower interest rates, Govt tender preferences, subsidy eligibility, free MSME SAMPARK job portal.',
          who: 'Any business with investment up to \u20b950 Cr and turnover up to \u20b9250 Cr',
          url: 'https://udyamregistration.gov.in/',
          helpline: '1800-180-6763 (toll free)'
        },
        {
          name: 'StartupTN (Tamil Nadu Startup & Innovation Mission)',
          provider: 'Government of Tamil Nadu',
          description: '14,200+ recognized startups, 127 incubation centers across TN. Services: TANSEED (seed fund), AngelsTN (investor education), TN SC/ST Startup Fund, TANFUND (global funding connect), SpaceTech Fund (\u20b910 Cr), Scaleup Incubators program.',
          who: 'DPIIT-recognized startups and aspiring entrepreneurs in TN',
          url: 'https://startuptn.in/',
          how: '1. Get DPIIT recognition at startupindia.gov.in 2. Register on startuptn.in 3. Apply for relevant programs. Office: 10th Floor, CMRL Building, Nandanam, Chennai-35',
          helpline: 'support@startuptn.in'
        },
        {
          name: 'GUIDANCE Tamil Nadu (Single Window)',
          provider: 'Government of Tamil Nadu',
          description: 'Single window clearance for all business approvals in TN. Investment facilitation, land allotment in SIPCOT, building approvals, environmental clearance \u2014 all through one portal. Handles investments from \u20b93 Cr to \u20b93,000 Cr.',
          who: 'Businesses seeking to invest/expand in TN',
          url: 'https://guidance.tn.gov.in/',
          helpline: '044-2220 0501'
        },
        {
          name: 'TIIC (Tamil Nadu Industrial Investment Corporation)',
          provider: 'Government of Tamil Nadu',
          description: 'Term loans for MSMEs: up to \u20b95 Cr for new enterprises, \u20b910 Cr for existing. Interest rates from 10.5% p.a. Special schemes for women, SC/ST, first-generation entrepreneurs.',
          who: 'MSMEs in TN manufacturing & service sectors',
          url: 'https://tiic.org/',
          helpline: '044-2434 2114'
        },
        {
          name: 'TANSIDCO Industrial Estates',
          provider: 'Government of Tamil Nadu',
          description: 'Ready-built industrial sheds and plots for MSMEs in 135+ industrial estates across TN. Subsidized land, common facilities, and infrastructure.',
          who: 'Manufacturing MSMEs',
          url: 'https://tansidco.org/',
          helpline: '044-2822 7351'
        }
      ]
    },

    /* ── Special Programs ───────────────────────────────── */
    {
      category: 'Special Programs',
      icon: '\u2b50',
      resources: [
        {
          name: 'TAHDCO (TN Adi Dravidar Housing & Development Corporation)',
          provider: 'Government of Tamil Nadu',
          description: 'Exclusive support for SC/ST entrepreneurs: NEEDS scheme (90% project cost covered, max \u20b950L), free UPSC/competitive exam coaching, economic assistance programs, educational loans.',
          who: 'SC/ST citizens of Tamil Nadu',
          url: 'https://www.tahdco.tn.gov.in/',
          helpline: '044-2536 7221'
        },
        {
          name: 'Stand-Up India',
          provider: 'SIDBI / Banks',
          description: 'Bank loans from \u20b910 lakh to \u20b91 Crore for SC/ST and women entrepreneurs in manufacturing, services, or trading. At least 1 SC/ST and 1 woman borrower per bank branch.',
          who: 'SC/ST and women entrepreneurs (18+ years, not existing defaulter)',
          url: 'https://www.standupmitra.in/',
          helpline: '1800-180-1111 (toll free)'
        },
        {
          name: 'PM SVANidhi (Street Vendor Support)',
          provider: 'Ministry of Housing & Urban Affairs',
          description: 'Working capital loan for street vendors: 1st loan \u20b910,000, 2nd \u20b920,000, 3rd \u20b950,000. 7% interest subsidy on timely repayment. Digital payment incentive \u20b91,200/year.',
          who: 'Street vendors with vending certificate or survey ID',
          url: 'https://pmsvanidhi.mohua.gov.in/',
          helpline: '1800-11-6163 (toll free)'
        },
        {
          name: 'CGTMSE (Credit Guarantee Fund)',
          provider: 'SIDBI + Ministry of MSME',
          description: 'Collateral-free credit up to \u20b95 Crore for MSMEs. Govt provides guarantee to banks, so entrepreneur does not need to pledge property. Available through any bank/NBFC.',
          who: 'New and existing MSMEs',
          url: 'https://www.cgtmse.in/',
          helpline: '022-6172 8300'
        }
      ]
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * 3. INVESTMENT GUIDE — by Capital Available
   * ────────────────────────────────────────────────────────── */
  var INVESTMENT_GUIDE = [
    {
      bracket: 'zero',
      label: 'Zero Capital (Skills & Labour Only)',
      labelTa: '\u0baa\u0bc2\u0b9c\u0bcd\u0b9c\u0bbf\u0baf\u0bae\u0bcd \u0b87\u0bb2\u0bcd\u0bb2\u0bc8',
      range: '\u20b90',
      icon: '\ud83d\udcaa',
      ideas: [
        {
          name: 'Freelance Services (Content/Design/Social Media)',
          detail: 'Use free tools \u2014 Canva, Google Docs, phone camera. Offer services on Fiverr, Upwork, or to local businesses. Social media management for shops/restaurants.',
          roi: '1\u20132 weeks to first income',
          risk: 'Very Low',
          income: '\u20b95,000\u2013\u20b950,000/month',
          subsidy: 'Nil needed. Use public library/CSC center for internet access'
        },
        {
          name: 'Tiffin Delivery Service (from home)',
          detail: 'Cook meals at home, deliver to offices/PGs/hostels. Start with 5\u201310 customers. Use WhatsApp for orders.',
          roi: '1\u20132 weeks',
          risk: 'Very Low',
          income: '\u20b910,000\u2013\u20b930,000/month',
          subsidy: 'FSSAI petty license: \u20b9100 only. PM SVANidhi first loan: \u20b910,000'
        },
        {
          name: 'Domestic/Cleaning Services (Urban Company etc.)',
          detail: 'Register on Urban Company, Housejoy, or work directly for apartments. Cleaning, cooking, babysitting.',
          roi: 'Immediate (within 1 week)',
          risk: 'Very Low',
          income: '\u20b910,000\u2013\u20b930,000/month',
          subsidy: 'E-Shram card for social security. PM SVANidhi if vending'
        },
        {
          name: 'Agricultural Labour + MGNREGA',
          detail: 'MGNREGA guarantees 100 days work at \u20b9294/day in TN. Combine with seasonal agricultural work. Register at Gram Panchayat.',
          roi: 'Immediate',
          risk: 'Very Low',
          income: '\u20b98,000\u2013\u20b920,000/month',
          subsidy: 'MGNREGA: demand-based guaranteed work. PM-KISAN: \u20b96,000/year. PM Shram Yogi pension'
        },
        {
          name: 'Gig Economy (Delivery/Ride/Micro-tasks)',
          detail: 'Swiggy, Zomato, Ola, Uber, Rapido, Dunzo \u2014 sign up as delivery partner. Need only smartphone + two-wheeler (can be borrowed/rented).',
          roi: 'Same week',
          risk: 'Low',
          income: '\u20b915,000\u2013\u20b940,000/month',
          subsidy: 'E-Shram registration for accident insurance. Some platforms provide vehicle finance'
        }
      ]
    },
    {
      bracket: 'under_10k',
      label: 'Under \u20b910,000',
      labelTa: '\u20b910,000-\u0b95\u0bcd\u0b95\u0bc1 \u0b95\u0bc0\u0bb4\u0bcd',
      range: '\u20b91 \u2013 \u20b910,000',
      icon: '\ud83e\udea7',
      ideas: [
        {
          name: 'Coconut / Flower Vendor',
          detail: 'Buy coconuts/flowers wholesale from market at 4 AM, sell at temples, bus stands. TN has 34,000+ temples \u2014 guaranteed footfall.',
          roi: '1\u20133 days to first profit',
          risk: 'Very Low',
          income: '\u20b910,000\u2013\u20b925,000/month',
          subsidy: 'PM SVANidhi: \u20b910,000 first loan. MUDRA Shishu: up to \u20b950,000'
        },
        {
          name: 'Ironing / Laundry Service',
          detail: 'Iron + charcoal/gas = start ironing service. Residential areas have steady demand. \u20b95\u201310 per piece.',
          roi: '1 week',
          risk: 'Very Low',
          income: '\u20b910,000\u2013\u20b922,000/month',
          subsidy: 'PM SVANidhi. PM Vishwakarma for washermen/dhobi trade'
        },
        {
          name: 'Juice / Sugarcane Cart',
          detail: 'Small hand-press for sugarcane or fruit juicer. Position near bus stand, market, or school.',
          roi: '2\u20134 weeks',
          risk: 'Low',
          income: '\u20b912,000\u2013\u20b930,000/month',
          subsidy: 'PM SVANidhi for street vendors. FSSAI petty license: \u20b9100'
        },
        {
          name: 'Mobile Recharge / Bill Payment Agent (CSC/AEPS)',
          detail: 'Become a Common Service Centre (CSC) VLE or AEPS agent. Just need smartphone/laptop + biometric device. Earn commission on every transaction.',
          roi: '2\u20134 weeks',
          risk: 'Low',
          income: '\u20b98,000\u2013\u20b925,000/month (commission-based)',
          subsidy: 'CSC registration is free: https://register.csc.gov.in/. Biometric device \u20b95,000\u20138,000'
        }
      ]
    },
    {
      bracket: '10k_50k',
      label: '\u20b910,000 \u2013 \u20b950,000',
      labelTa: '\u20b910,000 \u2013 \u20b950,000',
      range: '\u20b910,000 \u2013 \u20b950,000',
      icon: '\ud83d\udcb5',
      ideas: [
        {
          name: 'Street Food Stall (Idli/Dosa/Bajji/Tea)',
          detail: 'Small cart or rented stall. South Indian breakfast = universal demand. Low waste, high margins. Location near office/factory/bus stand is key.',
          roi: '2\u20134 weeks to breakeven',
          risk: 'Low',
          income: '\u20b915,000\u2013\u20b945,000/month',
          subsidy: 'MUDRA Shishu (up to \u20b950K). PM SVANidhi. PMFME (35% subsidy for food processing formalization)'
        },
        {
          name: 'Tailoring / Alteration Shop',
          detail: 'Sewing machine (\u20b98K\u201315K) + iron + small space. Blouse stitching, alterations, school uniforms. Women-dominated trade with growing demand.',
          roi: '1\u20132 months to breakeven',
          risk: 'Low',
          income: '\u20b912,000\u2013\u20b935,000/month',
          subsidy: 'PM Vishwakarma: \u20b915,000 toolkit + \u20b93L loan at 5%. MUDRA Shishu'
        },
        {
          name: 'Mobile Repair + Accessories Shop',
          detail: 'Learn from YouTube + short course. Screen replacement, charging port, battery change. Accessories have 50\u2013100% margin.',
          roi: '1\u20132 months',
          risk: 'Low',
          income: '\u20b915,000\u2013\u20b940,000/month',
          subsidy: 'MUDRA Shishu. PM Vishwakarma for repair trades'
        },
        {
          name: 'Poultry / Egg Retail',
          detail: 'Namakkal district supplies 80% of TN eggs. Buy from Namakkal/Erode wholesale market, retail in your area. Cold chain not needed for eggs.',
          roi: '2\u20134 weeks',
          risk: 'Low\u2013Medium',
          income: '\u20b915,000\u2013\u20b935,000/month',
          subsidy: 'MUDRA Shishu. State poultry subsidy for small-scale farmers'
        },
        {
          name: 'Organic Vegetable Home Delivery',
          detail: 'Buy from weekly shandy/farmer market, deliver to apartments via WhatsApp groups. Subscription model for steady income.',
          roi: '2\u20134 weeks',
          risk: 'Low',
          income: '\u20b912,000\u2013\u20b935,000/month',
          subsidy: 'MUDRA Shishu. FSSAI registration. PM SVANidhi'
        }
      ]
    },
    {
      bracket: '50k_2l',
      label: '\u20b950,000 \u2013 \u20b92,00,000',
      labelTa: '\u20b950,000 \u2013 \u20b92,00,000',
      range: '\u20b950,000 \u2013 \u20b92,00,000',
      icon: '\ud83d\udcb0',
      ideas: [
        {
          name: 'Xerox / Print / DTP Center',
          detail: 'Near college, court, or Govt office. Printer + laminator + spiral binding. Add passport photo service. Steady demand from students and Govt work.',
          roi: '2\u20134 months to breakeven',
          risk: 'Low',
          income: '\u20b920,000\u2013\u20b950,000/month',
          subsidy: 'MUDRA Kishor (up to \u20b95L). PMEGP for higher investment'
        },
        {
          name: 'Water Can Delivery Business',
          detail: 'RO plant water supply to offices and homes. \u20b920L can = \u20b930\u201350/can, cost \u20b915\u201325. High demand in TN summer (March\u2013June). Need: vehicle + storage space.',
          roi: '2\u20133 months',
          risk: 'Low\u2013Medium',
          income: '\u20b920,000\u2013\u20b960,000/month',
          subsidy: 'MUDRA Kishor. Municipal water license required'
        },
        {
          name: 'Catering / Cloud Kitchen',
          detail: 'Home-based catering for small events, office lunches. Register on Swiggy/Zomato for delivery orders. FSSAI license mandatory.',
          roi: '1\u20133 months',
          risk: 'Medium',
          income: '\u20b925,000\u2013\u20b975,000/month',
          subsidy: 'MUDRA Kishor. PMFME 35% subsidy for food processing. FSSAI central license if \u20b912L+ turnover'
        },
        {
          name: 'Mushroom / Terrace Farming',
          detail: 'Oyster mushroom cultivation needs minimal space. Training from KVK (Krishi Vigyan Kendra). Also: terrace hydroponic/aeroponic farming for high-value crops.',
          roi: '2\u20134 months per cycle',
          risk: 'Medium',
          income: '\u20b915,000\u2013\u20b945,000/month',
          subsidy: 'NHM (National Horticulture Mission) 40\u201350% subsidy. NABARD refinance. KVK free training'
        },
        {
          name: 'Computer Training Center',
          detail: 'Basic computer course (MS Office, Tally, DTP) for job seekers. Huge demand in semi-urban/rural TN. 2\u20134 computers, 1 room.',
          roi: '3\u20136 months',
          risk: 'Low\u2013Medium',
          income: '\u20b920,000\u2013\u20b950,000/month',
          subsidy: 'NIELIT Authorized Study Center. MUDRA Kishor. CSC (Common Service Centre) VLE registration'
        }
      ]
    },
    {
      bracket: '2l_10l',
      label: '\u20b92,00,000 \u2013 \u20b910,00,000',
      labelTa: '\u20b92 \u0bb2\u0b9f\u0bcd\u0b9a\u0bae\u0bcd \u2013 \u20b910 \u0bb2\u0b9f\u0bcd\u0b9a\u0bae\u0bcd',
      range: '\u20b92,00,000 \u2013 \u20b910,00,000',
      icon: '\ud83c\udfe6',
      ideas: [
        {
          name: 'Kirana / Grocery Store',
          detail: 'Residential area, 200\u2013400 sqft. Stock essentials + daily needs. JioMart/Udaan B2B apps for wholesale pricing. No GST if turnover < \u20b940L.',
          roi: '3\u20136 months to breakeven',
          risk: 'Low',
          income: '\u20b925,000\u2013\u20b960,000/month',
          subsidy: 'MUDRA Kishor/Tarun. PMEGP (up to \u20b920L for service sector). Udyam registration for benefits'
        },
        {
          name: 'Garment Manufacturing Unit (Small)',
          detail: '5\u201310 tailoring machines + ironing + cutting table. Sub-contracting from Tiruppur/Coimbatore exporters. School uniforms, hospital linen contracts.',
          roi: '4\u20138 months',
          risk: 'Medium',
          income: '\u20b930,000\u2013\u20b91,00,000/month',
          subsidy: 'PMEGP (25\u201335% subsidy). MUDRA Tarun. CLCSS (15% capital subsidy). TANSIDCO industrial shed'
        },
        {
          name: 'Idli/Dosa Batter Manufacturing',
          detail: 'Wet grinder + packaging + delivery. Ready-to-make batter has huge demand in urban TN. Supply to apartments, hostel messes, restaurants.',
          roi: '2\u20134 months',
          risk: 'Low\u2013Medium',
          income: '\u20b930,000\u2013\u20b975,000/month',
          subsidy: 'PMFME: 35% subsidy (max \u20b910L) for micro food processing. FSSAI license. Udyam registration'
        },
        {
          name: 'Photography / Videography Studio',
          detail: 'Wedding/event photography. Camera (\u20b91\u20132L) + editing computer + drone (optional). TN wedding market is \u20b950,000+ Cr/year.',
          roi: '3\u20136 months',
          risk: 'Medium',
          income: '\u20b930,000\u2013\u20b91,00,000/month',
          subsidy: 'MUDRA Tarun. PM Vishwakarma if classified as artisan service'
        },
        {
          name: 'EV / Electric Bike Sales & Service',
          detail: 'Dealership + service center for electric two-wheelers. TN EV Policy 2023 promotes EV adoption. Chennai-Hosur is India\'s EV hub.',
          roi: '6\u201312 months',
          risk: 'Medium',
          income: '\u20b930,000\u2013\u20b91,50,000/month',
          subsidy: 'TN EV Policy incentives. FAME II subsidy for EV sales. MUDRA Tarun'
        }
      ]
    },
    {
      bracket: '10l_50l',
      label: '\u20b910,00,000 \u2013 \u20b950,00,000',
      labelTa: '\u20b910 \u0bb2\u0b9f\u0bcd\u0b9a\u0bae\u0bcd \u2013 \u20b950 \u0bb2\u0b9f\u0bcd\u0b9a\u0bae\u0bcd',
      range: '\u20b910,00,000 \u2013 \u20b950,00,000',
      icon: '\ud83d\udcb8',
      ideas: [
        {
          name: 'Restaurant / South Indian Meals',
          detail: '500\u20131,000 sqft, 5\u201312 staff. South Indian meals (\u20b9100\u2013150/plate) = volume business. Location near commercial area or highway.',
          roi: '8\u201318 months',
          risk: 'Medium\u2013High',
          income: '\u20b950,000\u2013\u20b92,00,000/month',
          subsidy: 'PMEGP (up to \u20b950L manufacturing, \u20b920L service; 25\u201335% subsidy). MUDRA Tarun. Stand-Up India for SC/ST/women'
        },
        {
          name: 'Cold Storage / Warehouse Facility',
          detail: 'Agricultural produce cold storage near mandi/market. Growing demand as food processing scales. SIPCOT/SIDCO land available.',
          roi: '12\u201324 months',
          risk: 'Medium',
          income: '\u20b950,000\u2013\u20b92,00,000/month',
          subsidy: 'NHM 35% subsidy for cold chain. PMFME subsidy. NABARD refinance at 6\u20138%'
        },
        {
          name: 'Agri-Processing Unit (Rice Mill / Oil Press / Spice Grinding)',
          detail: 'TN is a major producer of rice, groundnut, coconut, turmeric, chilli. Value addition through processing doubles margins.',
          roi: '8\u201318 months',
          risk: 'Medium',
          income: '\u20b950,000\u2013\u20b93,00,000/month',
          subsidy: 'PMFME: 35% subsidy. PMEGP: 25\u201335% subsidy. CGTMSE collateral-free up to \u20b95Cr. NABARD RIDF'
        },
        {
          name: 'Diagnostic Lab / Pharmacy',
          detail: 'Pathology lab or retail pharmacy. Healthcare spending growing 15%/year in TN. PharmD/B.Pharm required for pharmacy license.',
          roi: '12\u201318 months',
          risk: 'Medium',
          income: '\u20b950,000\u2013\u20b92,50,000/month',
          subsidy: 'MUDRA Tarun. PMEGP. Stand-Up India for women/SC/ST. Tamil Nadu Pharmacy Council license'
        }
      ]
    },
    {
      bracket: '50l_plus',
      label: '\u20b950,00,000+',
      labelTa: '\u20b950 \u0bb2\u0b9f\u0bcd\u0b9a\u0bae\u0bcd+',
      range: '\u20b950,00,000 and above',
      icon: '\ud83c\udfe2',
      ideas: [
        {
          name: 'Manufacturing Unit in SIPCOT/SIDCO Estate',
          detail: 'Auto components, plastics, sheet metal, packaging. TN is India\'s #1 auto manufacturing state. SIPCOT offers ready-built sheds + infrastructure.',
          roi: '18\u201336 months',
          risk: 'High',
          income: '\u20b91,00,000\u2013\u20b910,00,000/month',
          subsidy: 'TN MSME Policy: 25% capital subsidy (max \u20b930L). 3% interest subvention for 5 years. TIIC term loans. SIPCOT land at subsidized rates. CLCSS: 15% capital subsidy'
        },
        {
          name: 'IT / Software Services Company',
          detail: 'Chennai is India\'s #2 IT city. SaaS corridor (OMR). Coimbatore TIDEL Park. Build product or provide IT services to global clients.',
          roi: '12\u201324 months',
          risk: 'High',
          income: '\u20b92,00,000\u2013\u20b920,00,000+/month',
          subsidy: 'Startup India: 3-year tax holiday. StartupTN TANSEED grant (up to \u20b910L). STPI (Software Technology Park) benefits. ELCOT IT parks subsidized space'
        },
        {
          name: 'Hospital / Clinic / Diagnostic Chain',
          detail: 'Multi-specialty clinic or diagnostic chain. TN health tourism growing. Apollo, Kauvery, Meenakshi Mission models prove viability.',
          roi: '24\u201348 months',
          risk: 'High',
          income: '\u20b92,00,000\u2013\u20b915,00,000+/month',
          subsidy: 'Stand-Up India (\u20b910L\u2013\u20b91Cr for SC/ST/women). TIIC healthcare sector loans. PLI for medical devices. National Health Mission subsidies'
        },
        {
          name: 'Renewable Energy / EV Infrastructure',
          detail: 'Solar farm, EV charging network, battery swapping. TN has India\'s best solar/wind resource. TN EV Policy offers incentives.',
          roi: '24\u201360 months',
          risk: 'Medium\u2013High',
          income: '\u20b91,00,000\u2013\u20b95,00,000+/month',
          subsidy: 'TN Solar Energy Policy: accelerated depreciation, wheeling charges waiver. FAME II for EV infra. PM Surya Ghar scheme. IREDA green energy loans'
        }
      ]
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * 4. DISTRICT-WISE OPPORTUNITY MAP
   * ────────────────────────────────────────────────────────── */
  var DISTRICT_OPPORTUNITIES = [
    {
      district: 'Chennai',
      districtTa: '\u0b9a\u0bc6\u0ba9\u0bcd\u0ba9\u0bc8',
      population: '46.8 lakh (2011 Census)',
      topOpportunity: 'SaaS / IT Product Development',
      icon: '\ud83d\udcbb',
      why: 'India\'s 2nd largest IT hub, Asia\'s 18th ranked startup ecosystem (Startup Genome 2023). 5,683 startups, 47 incubation centers. OMR SaaS corridor has produced companies like Freshworks, Zoho, Chargebee, Kissflow. Talent pool from 600+ colleges.',
      howToStart: 'Register on startuptn.in. Get DPIIT recognition. Join IIT-M Research Park / T-Hub / IITM Incubation Cell. Apply for TANSEED grant (\u20b910L).',
      govSupport: 'StartupTN, ELCOT IT parks, Startup India tax holiday, STPI benefits',
      avgInvestment: '\u20b95L\u2013\u20b950L',
      expectedIncome: '\u20b950,000\u2013\u20b910,00,000+/month'
    },
    {
      district: 'Coimbatore',
      districtTa: '\u0b95\u0bcb\u0baf\u0bae\u0bcd\u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0bc2\u0bb0\u0bcd',
      population: '34.6 lakh',
      topOpportunity: 'Pump & Motor Manufacturing / Export',
      icon: '\ud83d\udca7',
      why: 'Coimbatore produces 50% of India\'s pump sets and 65% of wet grinders. 25,000+ MSMEs in engineering cluster. Known as "Manchester of South India". Strong export network to Middle East, Africa, SE Asia.',
      howToStart: 'Register at DIC Coimbatore. Get Udyam registration. Join Coimbatore District Small Industries Association (CODISSIA). Apply for SIDCO industrial plot.',
      govSupport: 'PMEGP 25\u201335% subsidy, TIIC loans, CODISSIA incubation, MSME Capital Subsidy',
      avgInvestment: '\u20b910L\u2013\u20b91Cr',
      expectedIncome: '\u20b950,000\u2013\u20b95,00,000/month'
    },
    {
      district: 'Madurai',
      districtTa: '\u0bae\u0ba4\u0bc1\u0bb0\u0bc8',
      population: '30.4 lakh',
      topOpportunity: 'Heritage Tourism + Jasmine / Flower Export',
      icon: '\ud83c\udf3a',
      why: 'Madurai Meenakshi Temple draws 15,000+ visitors daily. Madurai jasmine (Malli) has GI tag \u2014 exported to Singapore, Malaysia, Sri Lanka. Under-served heritage tourism market with massive potential.',
      howToStart: 'Tourism: register at TN Tourism Development Corporation. Flower export: get IEC code from DGFT (free). Contact APEDA for export assistance.',
      govSupport: 'NHM floriculture subsidy 40%, PMFME for flower processing, TN Tourism subsidies for heritage hotels',
      avgInvestment: '\u20b92L\u2013\u20b920L',
      expectedIncome: '\u20b930,000\u2013\u20b92,00,000/month'
    },
    {
      district: 'Tiruppur',
      districtTa: '\u0ba4\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd',
      population: '24.8 lakh',
      topOpportunity: 'Technical Textiles / Sustainable Fashion',
      icon: '\ud83d\udc55',
      why: 'India\'s knitwear capital \u2014 \u20b945,000 Cr annual garment exports. 6,000+ garment units. Gap: most units do commodity t-shirts. Technical textiles (medical, automotive, geo-textiles) and sustainable fashion are growing 20%+ CAGR with higher margins.',
      howToStart: 'Register at DIC Tiruppur. Join Tiruppur Exporters Association (TEA). MSME registration. SIPCOT Tiruppur for land.',
      govSupport: 'TN MSME 25% capital subsidy, PMEGP, PLI for textiles, TUFS (Technology Upgradation Fund Scheme)',
      avgInvestment: '\u20b910L\u2013\u20b91Cr',
      expectedIncome: '\u20b950,000\u2013\u20b95,00,000/month'
    },
    {
      district: 'Thanjavur',
      districtTa: '\u0ba4\u0b9e\u0bcd\u0b9a\u0bbe\u0bb5\u0bc2\u0bb0\u0bcd',
      population: '24.1 lakh',
      topOpportunity: 'Organic Rice Processing & Direct-to-Consumer',
      icon: '\ud83c\udf3e',
      why: 'Called "Rice Bowl of Tamil Nadu". Cauvery delta produces premium Seeraga Samba, Ponni, Mappillai Samba rice varieties. Organic/heritage rice sells at 3\u20135x premium. Growing D2C health food market nationwide.',
      howToStart: 'Organic certification via NPOP (National Programme for Organic Production). FSSAI license. Sell via Amazon, Flipkart, own website.',
      govSupport: 'PMFME 35% subsidy for food processing, NHM organic farming support, PM-KISAN, Kisan Credit Card',
      avgInvestment: '\u20b95L\u2013\u20b930L',
      expectedIncome: '\u20b930,000\u2013\u20b92,00,000/month'
    },
    {
      district: 'Salem',
      districtTa: '\u0b9a\u0bc7\u0bb2\u0bae\u0bcd',
      population: '34.8 lakh',
      topOpportunity: 'Steel Fabrication & Agri-Machinery',
      icon: '\u2699\ufe0f',
      why: 'Salem Steel Plant (SAIL subsidiary) anchors a metalworking cluster. 5,000+ small steel/iron units. Gap: agricultural machinery customized for TN crops (turmeric, tapioca, sugarcane) has growing demand. Salem is also TN\'s mango capital.',
      howToStart: 'DIC Salem for Udyam + PMEGP. IGTR (Tool Room) for CNC training. Join Salem Steel Cluster.',
      govSupport: 'PMEGP 25\u201335%, CLCSS 15% capital subsidy, MSME interest subvention 3%',
      avgInvestment: '\u20b910L\u2013\u20b950L',
      expectedIncome: '\u20b940,000\u2013\u20b93,00,000/month'
    },
    {
      district: 'Tiruchirappalli (Trichy)',
      districtTa: '\u0ba4\u0bbf\u0bb0\u0bc1\u0b9a\u0bcd\u0b9a\u0bbf\u0bb0\u0bbe\u0baa\u0bcd\u0baa\u0bb3\u0bcd\u0bb3\u0bbf',
      population: '27.2 lakh',
      topOpportunity: 'Defence / Aerospace Component Manufacturing',
      icon: '\u2708\ufe0f',
      why: 'BHEL, Ordnance Factory, HAL presence. Trichy has India\'s only Dept of Defence Production cluster outside north India. Airport expansion complete. Growing defence offset manufacturing demand from HAL, BEL, DRDO supply chain.',
      howToStart: 'Register on DRDO vendor portal. DIC Trichy for MSME registration. SIDCO Trichy industrial estate for space. BIS certification for defence specs.',
      govSupport: 'Defence offset policy, SIPCOT land, TIIC loans, MAKE IN INDIA defence corridor (TN node)',
      avgInvestment: '\u20b925L\u2013\u20b92Cr',
      expectedIncome: '\u20b91,00,000\u2013\u20b95,00,000/month'
    },
    {
      district: 'Thoothukudi (Tuticorin)',
      districtTa: '\u0ba4\u0bc2\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0b9f\u0bbf',
      population: '17.5 lakh',
      topOpportunity: 'Seafood Processing & Export',
      icon: '\ud83e\udd90',
      why: 'Major port city with India\'s 3rd largest private port (V.O. Chidambaranar Port). Gulf of Mannar coastline = rich marine biodiversity. Shrimp, crab, cuttlefish export to Japan, EU, US. Under-tapped value addition in seafood.',
      howToStart: 'MPEDA (Marine Products Export Development Authority) registration. EIA/FSSAI license. IEC code from DGFT. Set up near port for logistics advantage.',
      govSupport: 'MPEDA subsidy for processing plant, NHM cold chain, PMEGP, Blue Revolution scheme, Sagarmala port-led development',
      avgInvestment: '\u20b910L\u2013\u20b91Cr',
      expectedIncome: '\u20b950,000\u2013\u20b95,00,000/month'
    },
    {
      district: 'Krishnagiri',
      districtTa: '\u0b95\u0bbf\u0bb0\u0bc1\u0bb7\u0bcd\u0ba3\u0b95\u0bbf\u0bb0\u0bbf',
      population: '18.8 lakh',
      topOpportunity: 'Mango & Tomato Processing',
      icon: '\ud83e\udd6d',
      why: 'India\'s largest mango market (Krishnagiri + Hosur). 1.5 lakh tonnes mango production annually. Tomato is 2nd major crop. Massive post-harvest loss (30\u201340%) = opportunity in processing (pulp, pickle, dried, juice). Hosur industrial zone for manufacturing.',
      howToStart: 'PMFME scheme for food processing unit. DIC Krishnagiri. Training from CFTRI (Mysuru) or IIFPT (Thanjavur).',
      govSupport: 'PMFME 35% subsidy, NHM cold chain 35%, NABARD food processing loans, One District One Product (ODOP)',
      avgInvestment: '\u20b95L\u2013\u20b940L',
      expectedIncome: '\u20b930,000\u2013\u20b92,00,000/month'
    },
    {
      district: 'Kancheepuram',
      districtTa: '\u0b95\u0bbe\u0b9e\u0bcd\u0b9a\u0bbf\u0baa\u0bc1\u0bb0\u0bae\u0bcd',
      population: '11.7 lakh',
      topOpportunity: 'Silk Weaving Revival + D2C E-commerce',
      icon: '\ud83e\uddf6',
      why: 'Kancheepuram silk has GI tag \u2014 globally recognized. Traditional weaving community (Devanga/Saligar) declining. Gap: direct-to-consumer silk sales via Instagram/website at 3x retail margin. Heritage value drives premium pricing.',
      howToStart: 'PM Vishwakarma registration for weavers. GI tag usage registration. Set up Instagram/website shop. Partner with existing weavers for supply.',
      govSupport: 'PM Vishwakarma: \u20b915K toolkit + \u20b93L loan at 5%. National Handloom Mission. KVIC support. MUDRA for working capital',
      avgInvestment: '\u20b92L\u2013\u20b920L',
      expectedIncome: '\u20b930,000\u2013\u20b92,00,000/month'
    },
    {
      district: 'Sivagangai',
      districtTa: '\u0b9a\u0bbf\u0bb5\u0b95\u0b99\u0bcd\u0b95\u0bc8',
      population: '13.4 lakh',
      topOpportunity: 'Chettinad Heritage Tourism + Spice Processing',
      icon: '\ud83c\udff0',
      why: 'Chettinad mansions (10,000+ heritage homes) are a globally unique architectural heritage. Under-served tourism market. Chettinad cuisine is internationally famous. Spice blends (masala) have high export potential.',
      howToStart: 'Convert heritage homes to homestays (minimal investment). Chettinad masala production with FSSAI license. Register on Airbnb/Booking.com.',
      govSupport: 'TN Tourism heritage hotel scheme, PMFME for spice processing, Mudra for homestay setup, Swadesh Darshan central tourism scheme',
      avgInvestment: '\u20b95L\u2013\u20b930L',
      expectedIncome: '\u20b925,000\u2013\u20b91,50,000/month'
    },
    {
      district: 'Namakkal',
      districtTa: '\u0ba8\u0bbe\u0bae\u0b95\u0bcd\u0b95\u0bb2\u0bcd',
      population: '17.2 lakh',
      topOpportunity: 'Poultry Tech / Feed Innovation',
      icon: '\ud83d\udc14',
      why: 'India\'s #1 egg producing district. 40 Cr+ eggs/month. 3,000+ poultry farms. Gap: poultry-tech (IoT monitoring, automated feeders, disease prediction), organic/antibiotic-free egg branding, and poultry feed innovation.',
      howToStart: 'Contact Tamil Nadu Veterinary and Animal Sciences University (TANUVAS) for training. DIC Namakkal for MSME registration.',
      govSupport: 'NABARD dairy/poultry loans, NLM (National Livestock Mission) subsidy, MSME capital subsidy',
      avgInvestment: '\u20b910L\u2013\u20b950L',
      expectedIncome: '\u20b950,000\u2013\u20b93,00,000/month'
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * QUICK-START EMERGENCY ACTIONS
   * For someone who needs income THIS WEEK
   * ────────────────────────────────────────────────────────── */
  var EMERGENCY_START = [
    {
      action: 'Register on E-Shram for social security',
      url: 'https://eshram.gov.in/',
      time: '10 minutes',
      benefit: '\u20b92 lakh accident insurance + access to all welfare schemes',
      icon: '\ud83d\udee1\ufe0f'
    },
    {
      action: 'Sign up as Swiggy/Zomato/Rapido delivery partner',
      url: 'https://www.swiggy.com/delivery-partner',
      time: '2\u20133 days for verification',
      benefit: 'Start earning \u20b9500\u20131,000/day immediately',
      icon: '\ud83d\udeb4'
    },
    {
      action: 'Register at TN Employment Exchange (free)',
      url: 'https://www.tnvelaivaaippu.gov.in/',
      time: '15 minutes online',
      benefit: 'Access to Govt job notifications + seniority-based placement',
      icon: '\ud83d\udcbc'
    },
    {
      action: 'Apply for PM SVANidhi (street vendor loan)',
      url: 'https://pmsvanidhi.mohua.gov.in/',
      time: '1 week processing',
      benefit: '\u20b910,000 working capital at subsidized interest',
      icon: '\ud83d\udcb5'
    },
    {
      action: 'Register on National Career Service portal for jobs',
      url: 'https://www.ncs.gov.in/',
      time: '10 minutes',
      benefit: 'AI-matched job recommendations from 1.3 Cr+ vacancies',
      icon: '\ud83d\udd0d'
    },
    {
      action: 'Get MGNREGA job card from Gram Panchayat',
      url: 'https://nrega.nic.in/',
      time: '1\u20132 weeks',
      benefit: '100 days guaranteed work at \u20b9294/day',
      icon: '\ud83c\udfd7\ufe0f'
    },
    {
      action: 'Enroll in free Naan Mudhalvan skill course',
      url: 'https://naanmudhalvan.tn.gov.in/',
      time: '5 minutes to register',
      benefit: 'Free Microsoft/Google/Cisco certifications + placement support',
      icon: '\ud83c\udf1f'
    }
  ];

  /* ──────────────────────────────────────────────────────────
   * KEY HELPLINE NUMBERS
   * ────────────────────────────────────────────────────────── */
  var HELPLINES = [
    { name: 'Naan Mudhalvan (Skills & Training)', number: '+91 99622 20527', icon: '\ud83d\udcde' },
    { name: 'Naan Mudhalvan (Competitive Exams)', number: '+91 90437 10214', icon: '\ud83d\udcda' },
    { name: 'TN Employment Exchange', number: '1800-425-4466', icon: '\ud83d\udcbc', note: 'Toll free' },
    { name: 'MUDRA / Udyami Mitra (Business Loans)', number: '1800-180-1111', icon: '\ud83c\udfe6', note: 'Toll free' },
    { name: 'MSME Udyam Registration', number: '1800-180-6763', icon: '\ud83c\udfed', note: 'Toll free' },
    { name: 'National Career Service', number: '1800-425-1514', icon: '\ud83d\udd0d', note: 'Toll free' },
    { name: 'PMKVY (Skill Training)', number: '1800-123-9626', icon: '\ud83c\udfaf', note: 'Toll free' },
    { name: 'Stand-Up India (SC/ST/Women Loans)', number: '1800-180-1111', icon: '\ud83e\uddcd\u200d\u2640\ufe0f', note: 'Toll free' },
    { name: 'Startup India', number: '1800-115-565', icon: '\ud83d\ude80', note: 'Toll free' },
    { name: 'E-Shram (Unorganized Worker Card)', number: '14434', icon: '\ud83d\udee1\ufe0f' },
    { name: 'PM SVANidhi (Street Vendor Loan)', number: '1800-11-6163', icon: '\ud83d\udcb5', note: 'Toll free' },
    { name: 'TAHDCO (SC/ST Support)', number: '044-2536-7221', icon: '\u2b50' }
  ];

  /* ──────────────────────────────────────────────────────────
   * EXPORT
   * ────────────────────────────────────────────────────────── */
  window.PathfinderData = {
    CAREER_PATHWAYS: CAREER_PATHWAYS,
    FREE_RESOURCES: FREE_RESOURCES,
    INVESTMENT_GUIDE: INVESTMENT_GUIDE,
    DISTRICT_OPPORTUNITIES: DISTRICT_OPPORTUNITIES,
    EMERGENCY_START: EMERGENCY_START,
    HELPLINES: HELPLINES
  };

})();
