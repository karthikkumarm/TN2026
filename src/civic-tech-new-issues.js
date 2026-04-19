/* ============================================================
 * NEW CIVIC ISSUES — 12 Additional Entries for CIVIC_ISSUES[]
 * Ready to append after issue #15 (Senior Citizen Services)
 * ============================================================ */

    /* ─── 16. CORRUPTION & BRIBERY ────────────────────────── */
    {
      id: 'corruption-bribery',
      title: 'Corruption & Bribery in Government Services',
      icon: '🏛️',
      category: 'Governance',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu ranks among India\'s most corrupt states for citizen-facing services. Transparency International India\'s surveys consistently place TN in the bottom half. The DVAC (Directorate of Vigilance and Anti-Corruption) received 8,300+ complaints in 2022 but conviction rate is below 6%. Bribery is endemic in RTO (₹500–₹2,000 for license), sub-registrar offices (₹5,000–₹50,000 for property registration), revenue departments (₹1,000–₹10,000 for patta/chitta), and police stations. The CBI\'s 2023 report found TN had the 4th highest disproportionate assets cases among state officials.',
        stats: [
          'DVAC complaints received: 8,300+ in 2022; conviction rate below 6%',
          'TII India Corruption Survey: 62% of TN respondents paid a bribe for public services',
          'RTO bribery: ₹500–₹2,000 typical per license/registration (citizen surveys)',
          'Sub-registrar offices: ₹5,000–₹50,000 for property registration facilitation',
          'DVAC trap cases: 350+ in 2022, but only tip of iceberg',
          'TN Lokayukta: institution exists but has had vacancy for years at a time'
        ]
      },
      currentStatus: {
        govtDoing: [
          'DVAC (Directorate of Vigilance and Anti-Corruption) handles complaints',
          'e-Sevai digitization of 200+ services to reduce face-to-face interaction',
          'CM Special Cell for corruption petitions',
          'RTI Act enables information access (but slow compliance)',
          'DVAC toll-free helpline 1800-233-4455'
        ],
        whatsGap: [
          'No anonymous, secure bribery reporting platform for citizens',
          'DVAC complaint process requires physical visit or complex forms',
          'No real-time tracking of bribery hotspots by department/location',
          'Service delivery timelines not transparently tracked',
          'No crowdsourced corruption experience database',
          'Whistleblower protection effectively absent at state level'
        ]
      },
      techSolution: {
        what: 'Anti-Corruption Transparency & Reporting Platform',
        approach: 'Anonymous bribery reporting with verified service interaction data. Crowdsourced corruption heatmap by department, location, and service type. Service delivery timeline tracker comparing promised vs actual. RTI request automation and tracking. All data anonymized and aggregated to protect reporters.',
        features: [
          'Anonymous bribery report: department, amount demanded, service type, location',
          'Corruption heatmap: which offices, departments, services have most reports',
          'Service timeline tracker: how long did your patta/license actually take vs promised',
          'RTI request generator: auto-draft RTI applications for common queries',
          'Know Your Rights: what each service should cost, timeline, and process',
          'DVAC complaint integration: file formal complaints with evidence',
          'Department scorecard: transparency rating based on citizen experiences'
        ]
      },
      techStack: {
        frontend: 'Next.js PWA (no app install needed, reducing barrier)',
        backend: 'Node.js Express with end-to-end encryption for reports',
        database: 'PostgreSQL with encrypted PII columns, anonymization layer',
        security: 'Tor-friendly, no mandatory login, metadata stripping on uploads',
        maps: 'Leaflet + OSM for location heatmaps',
        hosting: 'Privacy-focused hosting (Hetzner/OVH) — ₹3,000–8,000/month',
        data: 'e-Sevai service catalog, RTI responses, DVAC public data'
      },
      revenueModel: [
        'CSR: Anti-corruption is Schedule VII eligible (promoting transparency)',
        'Foundation grants: Ford Foundation, Omidyar Network, Luminate fund anti-corruption tech',
        'Media partnerships: anonymized data reports licensed to media houses',
        'Consulting: transparency audits for government departments wanting improvement',
        'Training: anti-corruption compliance training for government staff'
      ],
      govtApproach: {
        who: 'DVAC, TN Right to Service Commission, State Vigilance Commission, District Collectors',
        how: 'Start as citizen platform (no govt permission needed). Build data, publish reports. Approach DVAC with aggregated insights. Partner with ADR (Association for Democratic Reforms) for advocacy.',
        procurement: 'Not B2G initially — civic society funded. Later: TN Right to Service Commission digital tools.'
      },
      cost: {
        mvp: '₹3–5 lakh (anonymous reporting portal + heatmap + service timelines)',
        full: '₹12–18 lakh (RTI automation, DVAC integration, department scorecards)',
        timeline: 'MVP: 3–4 months. Full platform: 8–10 months'
      },
      realExamples: [
        { name: 'I Paid A Bribe (Janaagraha)', desc: 'India\'s pioneering bribery reporting platform, 190,000+ reports. Founded in Bangalore.', url: 'ipaidabribe.com' },
        { name: 'Arappor Iyakkam', desc: 'Chennai-based anti-corruption NGO using RTI data to expose scams', url: 'arappor.org' },
        { name: 'DVAC TN', desc: 'Official anti-corruption directorate with online complaint facility', url: 'dvac.tn.gov.in' },
        { name: 'OpenCity (Ukraine)', desc: 'Transparent city services platform reducing corruption through digitization', url: 'opencity.in.ua' }
      ],
      buildGuide: [
        'Step 1: Build anonymous reporting form (department, service, amount, location) with E2E encryption',
        'Step 2: Create aggregated corruption heatmap — NO individual reports displayed publicly',
        'Step 3: Compile service catalog from e-Sevai: official fee, timeline, documents for each service',
        'Step 4: Build "Know Your Rights" module so citizens know what\'s free/chargeable',
        'Step 5: Add RTI request generator with templates for common corruption queries',
        'Step 6: Partner with Arappor Iyakkam and 5th Pillar for credibility and reach',
        'Step 7: Publish quarterly transparency reports by department/district',
        'Step 8: Approach DVAC and Right to Service Commission with insights for systemic reform'
      ]
    },

    /* ─── 17. ADDICTION (ALCOHOL, DRUGS, GAMING) ──────────── */
    {
      id: 'addiction-crisis',
      title: 'Addiction Crisis (Alcohol, Drugs, Gaming)',
      icon: '🚫',
      category: 'Health',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu has one of India\'s highest alcohol consumption rates. TASMAC (state liquor monopoly) earned ₹45,000+ crore revenue in 2023-24, with 5,300+ retail outlets. TN records 15,000+ alcohol-related deaths annually including accidents, liver disease, and suicides. Drug abuse is rising sharply: Chennai NCB seizures up 300% since 2019. Ganja, synthetic drugs (MDMA, LSD), and methamphetamine trafficking via Sri Lankan route affects coastal TN. Online gaming addiction among youth surged post-COVID: TN banned online gambling in 2022 (later struck down by Madras HC) after multiple youth suicides linked to gaming debt.',
        stats: [
          'TASMAC revenue: ₹45,000+ crore (2023-24), 5,300+ outlets',
          'Alcohol-related deaths in TN: ~15,000/year (accidents, liver disease, suicide)',
          'TN per capita alcohol consumption: 50% higher than national average',
          'NCB drug seizures in Chennai: up 300% since 2019',
          'Online gaming-linked youth suicides: 20+ reported in 2020-22',
          'TN has only 42 government de-addiction centers for 7.2 crore population',
          'Women-headed households affected by spouse alcoholism: estimated 15 lakh families'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TASMAC monopoly on liquor distribution (but also revenue dependent)',
          'TN Prohibition and Excise Dept enforcement',
          'De-addiction centers: 42 government + ~200 private/NGO (many unregulated)',
          'Online gaming ban attempted in 2022 (struck down by Madras HC)',
          'Drug-free TN campaigns by TN Police',
          'NIMHANS and Govt. Institute of Mental Health provide some support'
        ],
        whatsGap: [
          'No centralized helpline/app for addiction support in Tamil',
          'De-addiction centers not mapped, reviewed, or verified for quality',
          'Family support resources completely absent digitally',
          'No community support platform (AA/NA equivalent) accessible digitally in Tamil',
          'No anonymous reporting of drug peddling hotspots',
          'Youth gaming addiction not addressed by any platform'
        ]
      },
      techSolution: {
        what: 'Addiction Recovery & Family Support Platform',
        approach: 'Anonymous addiction support platform in Tamil. De-addiction center finder with user reviews and verification. Community support groups (online AA/NA meetings in Tamil). Family support resources for affected spouses/children. Anonymous drug peddling hotspot reporting to police. Youth gaming addiction assessment and intervention.',
        features: [
          'Anonymous self-assessment: alcohol/drug/gaming addiction screening tools',
          'De-addiction center finder: verified centers with cost, type, reviews, success data',
          'Tamil AA/NA meetings: virtual support groups with anonymous attendance',
          'Family support: resources for spouses, children of addicts. Legal rights info.',
          'Youth gaming risk assessment and parental controls guidance',
          'Anonymous drug peddling hotspot reporter (routes to TN Police narcotics)',
          'Recovery tracker: personal sobriety milestones with community encouragement'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + Next.js (web) — fully Tamil-localized',
        backend: 'Python Django with strong privacy controls',
        database: 'PostgreSQL with encrypted personal data, anonymous analytics',
        video: 'Jitsi Meet (open-source) for virtual support group meetings',
        hosting: 'DigitalOcean (₹3,000–6,000/month)',
        ai: 'Chatbot using open-source LLM for initial screening and support'
      },
      revenueModel: [
        'CSR: Health/de-addiction is Schedule VII CSR eligible activity',
        'De-addiction center listing: verified center premium listing (₹5,000–10,000/year)',
        'Corporate wellness: employee addiction support program (₹50/employee/month)',
        'Insurance: health insurance tie-up for de-addiction treatment',
        'Grants: WHO, UNODC fund substance abuse prevention tech',
        'Government: NMBA (National Mental Health & De-addiction Programme) funding'
      ],
      govtApproach: {
        who: 'TN Health Dept (Mental Health), Prohibition & Excise Dept, TN Police Narcotics, Social Defence Dept',
        how: 'Partner with Govt. Institute of Mental Health (Kilpauk) for clinical validation. Approach Social Defence Dept for de-addiction center database. Police partnership for anonymous drug tipoff routing.',
        procurement: 'National Mental Health Programme (NMHP) digital component. Social Defence Dept budget.'
      },
      cost: {
        mvp: '₹4–6 lakh (self-assessment + center finder + anonymous reporting)',
        full: '₹15–22 lakh (virtual meetings, recovery tracker, AI chatbot, family support)',
        timeline: 'MVP: 3–4 months. Full: 8–12 months'
      },
      realExamples: [
        { name: 'iCall (TISS)', desc: 'Mumbai-based psychosocial helpline with substance abuse counseling', url: 'icallhelpline.org' },
        { name: 'Amethyst (Chennai)', desc: 'Chennai-based addiction treatment center with structured program', url: 'amethysthospital.in' },
        { name: 'NIMHANS Helpline', desc: 'National mental health/addiction helpline: 080-46110007', url: 'nimhans.ac.in' },
        { name: 'Quit Genius (UK)', desc: 'Digital addiction treatment platform using CBT', url: 'quitgenius.com' }
      ],
      buildGuide: [
        'Step 1: Build anonymous addiction screening tools (AUDIT for alcohol, DAST for drugs) in Tamil',
        'Step 2: Compile and verify de-addiction center database from Social Defence Dept + field visits',
        'Step 3: Create anonymous drug peddling hotspot reporter with police routing',
        'Step 4: Build virtual Tamil AA/NA support group platform using Jitsi',
        'Step 5: Add family support module: legal rights, financial aid, counselor finder',
        'Step 6: Build youth gaming addiction screener with parent notification',
        'Step 7: Partner with Govt. Institute of Mental Health (Kilpauk) for clinical oversight',
        'Step 8: Launch through PHCs, schools, and women\'s self-help groups'
      ]
    },

    /* ─── 18. CASTE DISCRIMINATION & HONOR VIOLENCE ──────── */
    {
      id: 'caste-discrimination',
      title: 'Caste Discrimination & Honor Violence',
      icon: '⚖️',
      category: 'Social',
      severity: 'Critical',
      problem: {
        description: 'Tamil Nadu records 3,000+ cases under SC/ST Prevention of Atrocities Act annually — 3rd highest in India. Honor killings persist: 20+ documented cases in 2020-23 linked to inter-caste marriages. Manual scavenging continues despite being banned since 1993 — 144 sanitation worker deaths in TN from 2017-2023 (Safai Karamchari Andolan data). Two-tumbler system, separate burial grounds, and temple entry restrictions still exist in several rural TN districts. Discrimination in education: Dalit students face seating segregation and caste slurs in some rural schools.',
        stats: [
          'SC/ST Atrocity cases in TN: 3,089 (NCRB 2022) — 3rd highest in India',
          'Honor killings: 20+ documented cases in 2020-23 (People\'s Union for Civil Liberties data)',
          'Manual scavenging deaths: 144 sanitation workers died in TN (2017-2023)',
          'Conviction rate for atrocity cases in TN: below 10% (NCRB)',
          'Separate burial grounds still exist in 100+ TN villages (EVIDENCE survey)',
          'Two-tumbler system reported in villages across Dharmapuri, Villupuram, Tirunelveli districts'
        ]
      },
      currentStatus: {
        govtDoing: [
          'SC/ST Prevention of Atrocities Act enforcement (TN is relatively proactive)',
          'Special courts for atrocity cases (28 exclusive courts in TN)',
          'Adi Dravidar & Tribal Welfare Dept programs',
          'Inter-caste marriage incentive: ₹50,000 (recent increase to ₹2.5 lakh)',
          'Manual scavenging prohibition and rehabilitation schemes',
          'State Commission for SC/ST monitors cases'
        ],
        whatsGap: [
          'No digital platform for reporting caste discrimination safely',
          'Atrocity case status tracking requires physical court visits',
          'No mapping of villages where discriminatory practices persist',
          'Legal aid information not accessible in Tamil digitally',
          'Victim support services fragmented and hard to locate',
          'No community alert system for honor violence threats'
        ]
      },
      techSolution: {
        what: 'Caste Discrimination Reporting & Justice Tracker',
        approach: 'Secure, anonymous platform to report caste discrimination incidents. Case tracker for SC/ST Atrocity Act cases through courts. Legal aid connector to free lawyers. Community alert for inter-caste couples facing threats. Mapping discriminatory practices by village/district for advocacy. All designed with survivor safety as top priority.',
        features: [
          'Anonymous incident reporter: type of discrimination, location, evidence upload',
          'SC/ST Atrocity case tracker: FIR status, court dates, judgment tracking',
          'Free legal aid connector: lawyers registered under DLSA who handle atrocity cases',
          'Safety alert for inter-caste couples: threat reporting, safe house connector',
          'Discrimination practice mapper: villages with two-tumbler, separate burials, etc.',
          'Rights awareness: know your rights under PoA Act in simple Tamil',
          'Rehabilitation tracker: compensation and rehabilitation entitlements under the Act'
        ]
      },
      techStack: {
        frontend: 'Next.js PWA with end-to-end encryption, Tamil-first UI',
        backend: 'Python Django with security-hardened deployment',
        database: 'PostgreSQL with encrypted sensitive data, role-based access',
        security: 'Metadata stripping, no IP logging, optional Tor access',
        maps: 'Leaflet + OSM (aggregated data only, no individual incident locations)',
        hosting: 'Privacy-focused hosting (₹5,000–10,000/month)',
        data: 'NCRB data, State Commission reports, DLSA lawyer database'
      },
      revenueModel: [
        'Foundation grants: Ford Foundation, EqualityLabs, Dalit Foundation fund caste justice tech',
        'CSR: Social justice is Schedule VII eligible',
        'Legal aid commissions: DLSA/NALSA digital tool partnerships',
        'Academic research: anonymized data for social science research',
        'Training: caste sensitization modules for corporates and institutions'
      ],
      govtApproach: {
        who: 'Adi Dravidar & Tribal Welfare Dept, DLSA (District Legal Services Authority), State SC/ST Commission, DGP (SC/ST Protection Cell)',
        how: 'Partner with DLSA for legal aid integration. Approach State SC/ST Commission with anonymized data. Work with Evidence, Dalit Human Rights Movement for grassroots reach.',
        procurement: 'SC/ST Sub-Plan budget (TN allocates ~20% of budget). DLSA digital legal aid component.'
      },
      cost: {
        mvp: '₹4–6 lakh (anonymous reporting + case tracker + legal aid connector)',
        full: '₹15–20 lakh (community alert system, mapping, rehabilitation tracker)',
        timeline: 'MVP: 3–4 months. Full: 8–10 months'
      },
      realExamples: [
        { name: 'Evidence (TN)', desc: 'Tamil Nadu-based Dalit rights organization documenting caste atrocities', url: 'evidence.org.in' },
        { name: 'Equality Labs (US/India)', desc: 'Tech-focused caste equity organization with reporting tools', url: 'equalitylabs.org' },
        { name: 'National SC/ST Hub', desc: 'Government portal for SC/ST welfare scheme information', url: 'scsthub.in' },
        { name: 'I Am Not a Virus (UK)', desc: 'Discrimination reporting platform — model for anonymous reporting', url: 'iamnotavirus.info' }
      ],
      buildGuide: [
        'Step 1: Build encrypted anonymous incident reporting with categorization (discrimination type, location)',
        'Step 2: Create SC/ST Atrocity Act case tracker — integrate with eCourts API for status',
        'Step 3: Compile DLSA free lawyer database for atrocity cases by district',
        'Step 4: Build inter-caste couple safety module: threat assessment, safe house directory',
        'Step 5: Design "Know Your Rights" module for PoA Act provisions in simple Tamil',
        'Step 6: Partner with Evidence, Dalit Human Rights Movement, and TN DLSA',
        'Step 7: Deploy with extreme security — legal review for compliance with IT Act',
        'Step 8: Publish anonymized district-level discrimination reports for advocacy'
      ]
    },

    /* ─── 19. CHILD LABOR & CHILD MARRIAGE ────────────────── */
    {
      id: 'child-protection',
      title: 'Child Labor & Child Marriage',
      icon: '🧒',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'Despite progressive laws, TN still has significant child labor and child marriage. Census 2011 recorded 1.5 lakh child laborers (5-14 age) in TN; actual numbers are far higher per NGO estimates (5-8 lakh including informal sector). Sivakasi (Virudhunagar) remains India\'s infamous child labor hub in fireworks/matchstick factories. NFHS-5 data shows 12.1% of TN women aged 20-24 married before 18. Districts like Dharmapuri, Villupuram, Ariyalur have child marriage rates above 20%. COVID disrupted schooling and increased both child labor and child marriage rates.',
        stats: [
          'Child laborers in TN: 1.5 lakh (Census 2011); NGO estimates: 5-8 lakh (2023)',
          'Sivakasi fireworks/matchstick industry: employs estimated 50,000+ children',
          'NFHS-5: 12.1% of TN women (20-24) married before age 18',
          'High child marriage districts: Dharmapuri (22%), Villupuram (19%), Ariyalur (21%)',
          'Child trafficking cases in TN: 450+ (NCRB 2022)',
          'School dropout rate increased 3-4% post-COVID, correlating with child labor increase',
          'Only 26 Child Welfare Committees functional across TN\'s 38 districts'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Child Labour (Prohibition & Regulation) Amendment Act 2016 enforcement',
          'Childline 1098 helpline operational in TN',
          'District Child Protection Units (DCPU) in all 38 districts',
          'TN State Commission for Protection of Child Rights',
          'NCLP (National Child Labour Project) schools for rehabilitation',
          'Integrated Child Protection Scheme (ICPS) implementation'
        ],
        whatsGap: [
          'No digital tool for citizens to report child labor anonymously',
          'Childline 1098 overwhelmed: average 30-minute wait times reported',
          'No mapping of child labor hotspots by industry/location',
          'Rescued children rehabilitation tracking absent digitally',
          'Child marriage early warning system nonexistent',
          'School dropout monitoring not connected to child protection alerts'
        ]
      },
      techSolution: {
        what: 'Child Protection Alert & Rehabilitation Tracker',
        approach: 'Anonymous child labor/marriage reporting with photo evidence. Hotspot mapping by industry and location. School dropout early warning system connected to child protection. Rescued child rehabilitation tracker. Childline 1098 load-sharing through digital triage. Community volunteer network for monitoring.',
        features: [
          'Anonymous reporter: report child labor/marriage with GPS + optional photo',
          'Hotspot heatmap: child labor concentration by industry, area (aggregated)',
          'School dropout alert: flag children missing 15+ days for welfare check',
          'Rescued child tracker: rehabilitation progress — education, health, family',
          'Childline triage: non-emergency reports via app to reduce 1098 call load',
          'Volunteer network: trained community monitors in high-risk areas',
          'Legal resource: file complaints, know FIR process, track case'
        ]
      },
      techStack: {
        frontend: 'React Native mobile + PWA web',
        backend: 'Python Django with role-based access (reporters, DCPU, CWC)',
        database: 'PostgreSQL with encrypted child data (POCSO compliance)',
        security: 'Anonymous reporting, no mandatory registration, metadata stripping',
        maps: 'Leaflet + OSM for aggregated hotspot maps',
        hosting: 'AWS/DigitalOcean (₹3,000–6,000/month)',
        data: 'UDISE+ school attendance, Childline call data, NCRB data'
      },
      revenueModel: [
        'Foundation grants: UNICEF, Save the Children, CRY fund child protection tech',
        'CSR: Child welfare is top CSR category under Schedule VII',
        'B2G: DCPU/CWC digital tool subscription (₹2–5 lakh/district/year)',
        'Training: child protection training modules for schools and panchayats',
        'Consulting: child labor supply chain audits for export-facing industries'
      ],
      govtApproach: {
        who: 'Social Defence Dept, DCPU, Child Welfare Committees, Labour Dept, School Education Dept',
        how: 'Partner with Childline 1098 for complaint routing. Approach DCPU for rehabilitation tracker pilot. Integrate with UDISE+ for dropout monitoring. Work with CRY/Save the Children for grassroots deployment.',
        procurement: 'ICPS (Integrated Child Protection Scheme) digital component. NCLP project budget.'
      },
      cost: {
        mvp: '₹4–6 lakh (anonymous reporting + hotspot map + school dropout alerts)',
        full: '₹15–20 lakh (rehabilitation tracker, volunteer network, legal tools)',
        timeline: 'MVP: 3–4 months. Full: 8–10 months'
      },
      realExamples: [
        { name: 'Childline 1098', desc: 'India\'s child emergency helpline, operational in all TN districts', url: 'childlineindia.org' },
        { name: 'CRY (Child Rights and You)', desc: 'Major child rights NGO with TN programs in Sivakasi, Dharmapuri', url: 'cry.org' },
        { name: 'Save the Children India', desc: 'Global child protection org with TN presence', url: 'savethechildren.in' },
        { name: 'Bachpan Bachao Andolan', desc: 'Kailash Satyarthi\'s organization rescuing child laborers', url: 'bfrv.org' }
      ],
      buildGuide: [
        'Step 1: Build anonymous child labor/marriage reporting with GPS + photo upload',
        'Step 2: Create aggregated hotspot map from reports + existing NCLP/DCPU data',
        'Step 3: Integrate UDISE+ school attendance data for dropout early warning',
        'Step 4: Build rehabilitation tracking module for DCPUs (rescued child progress)',
        'Step 5: Create volunteer registration and monitoring assignment system',
        'Step 6: Partner with Childline 1098, CRY, and District DCPUs',
        'Step 7: Pilot in high-risk districts: Virudhunagar, Dharmapuri, Villupuram',
        'Step 8: Present data-backed advocacy reports to State Commission for Child Rights'
      ]
    },

    /* ─── 20. MENTAL HEALTH CRISIS ────────────────────────── */
    {
      id: 'mental-health',
      title: 'Mental Health Crisis',
      icon: '🧠',
      category: 'Health',
      severity: 'High',
      problem: {
        description: 'Tamil Nadu has one of India\'s highest suicide rates: 25.5 per 100,000 (national avg: 12.4). TN recorded 18,925 suicides in 2022 (NCRB) — 2nd highest among all states. Student suicides have surged: 1,200+ in 2022 alone, linked to exam pressure, NEET anxiety, and pandemic isolation. TN has only 0.3 psychiatrists per 100,000 population vs WHO recommendation of 3.0. Government Institute of Mental Health (Kilpauk) is only major public facility serving 7.2 crore people. Mental health stigma remains extreme — NIMHANS study found 75% of TN respondents would not seek professional help.',
        stats: [
          'TN suicides: 18,925 (2022, NCRB) — 2nd highest state in India',
          'TN suicide rate: 25.5 per 100,000 vs national avg 12.4',
          'Student suicides in TN: 1,200+ in 2022 (NCRB)',
          'Psychiatrists in TN: 0.3 per 100,000 (WHO recommends 3.0)',
          'Only 1 major government mental health hospital (Kilpauk, Chennai)',
          'NIMHANS survey: 75% of TN respondents won\'t seek professional mental health help',
          'NEET-related student suicides in TN: 30+ documented since 2017'
        ]
      },
      currentStatus: {
        govtDoing: [
          'iCall/SNEHA helplines operational in TN',
          'District Mental Health Programme (DMHP) in all 38 districts',
          'Mental Healthcare Act 2017 implemented',
          'TN State Mental Health Authority constituted',
          'NIMHANS extension center in Madurai',
          'e-Sanjeevani telemedicine includes mental health consultations'
        ],
        whatsGap: [
          'No 24/7 Tamil-language mental health chatbot/helpline app',
          'DMHP psychiatrists cover 1-2 days/month per PHC — grossly inadequate',
          'No school-level mental health screening or referral system',
          'Student distress reporting not connected to intervention',
          'Peer support/community mental health completely absent digitally',
          'Mental health professionals directory not available in one place'
        ]
      },
      techSolution: {
        what: 'Mental Health Support & Early Intervention Platform',
        approach: 'Tamil-language mental health support with AI-assisted screening, teletherapy marketplace, peer support communities, and crisis intervention routing. School-level mental health screening for students. Destigmatization through content and community. 24/7 crisis chatbot with escalation to human counselors.',
        features: [
          'Tamil AI chatbot: 24/7 initial support with escalation to human counselors',
          'Self-screening: PHQ-9 (depression), GAD-7 (anxiety) validated in Tamil',
          'Therapist finder: psychiatrists, psychologists, counselors by district with fees',
          'Teletherapy: affordable video counseling (₹300–₹800/session)',
          'Student support: school-level wellness check-in, anonymous distress reporting',
          'Peer support groups: anxiety, depression, grief, addiction — Tamil-language',
          'Crisis helpline integration: one-tap connect to SNEHA, iCall, Vandrevala Foundation'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + Next.js (web) — calming UI, Tamil-first',
        backend: 'Python Django with HIPAA-equivalent privacy controls',
        database: 'PostgreSQL with encrypted health records',
        video: 'Jitsi Meet / Daily.co for teletherapy',
        ai: 'Fine-tuned open-source LLM for Tamil mental health chatbot',
        hosting: 'AWS with India region (₹5,000–12,000/month for video + AI)',
        data: 'NIMHANS protocols, WHO mhGAP guidelines, validated Tamil screening tools'
      },
      revenueModel: [
        'Teletherapy commission: 15–20% of session fee',
        'Corporate wellness: employee mental health program (₹100/employee/month)',
        'B2G: DMHP digital screening tool (₹3–5 lakh/district/year)',
        'Educational institutions: student wellness module (₹50,000/school/year)',
        'Grants: Grand Challenges Canada, Wellcome Trust fund mental health tech',
        'CSR: Mental health awareness is CSR-eligible activity'
      ],
      govtApproach: {
        who: 'Health Dept (DMHP), School Education Dept, State Mental Health Authority, NIMHANS',
        how: 'Partner with DMHP for district-level deployment. Approach School Education Dept for student screening. Collaborate with SNEHA/iCall for crisis routing. NIMHANS Madurai for clinical validation.',
        procurement: 'DMHP digital health allocation. National Mental Health Programme (NMHP) under NHM.'
      },
      cost: {
        mvp: '₹5–8 lakh (chatbot + screening tools + therapist directory + crisis routing)',
        full: '₹20–30 lakh (teletherapy platform, school module, AI chatbot, peer support)',
        timeline: 'MVP: 4–5 months. Full: 10–14 months'
      },
      realExamples: [
        { name: 'SNEHA (Chennai)', desc: 'Chennai-based suicide prevention helpline since 1986: 044-24640050', url: 'snehaindia.org' },
        { name: 'iCall (TISS)', desc: 'Psychosocial helpline: 9152987821, also provides email counseling', url: 'icallhelpline.org' },
        { name: 'YourDOST', desc: 'Indian online counseling platform, used by 100+ colleges', url: 'yourdost.com' },
        { name: 'Wysa (India)', desc: 'AI-based mental health chatbot, clinically validated', url: 'wysa.com' }
      ],
      buildGuide: [
        'Step 1: Validate Tamil translations of PHQ-9, GAD-7 screening tools with clinical team',
        'Step 2: Build 24/7 Tamil chatbot with crisis detection and escalation protocols',
        'Step 3: Compile therapist/counselor directory from TN Medical Council + NIMHANS databases',
        'Step 4: Create teletherapy booking and video session platform',
        'Step 5: Design school wellness module: periodic anonymous check-ins for students',
        'Step 6: Build peer support group system with trained moderators',
        'Step 7: Partner with SNEHA for crisis routing, NIMHANS for clinical oversight',
        'Step 8: Pilot in 5 schools + 2 colleges, then approach DMHP for district scaling'
      ]
    },

    /* ─── 21. DISABILITY ACCESSIBILITY ────────────────────── */
    {
      id: 'disability-access',
      title: 'Disability Accessibility',
      icon: '♿',
      category: 'Social',
      severity: 'High',
      problem: {
        description: 'TN has 11.8 lakh persons with disabilities (Census 2011), likely 20+ lakh currently. Accessible India Campaign (Sugamya Bharat Abhiyan) compliance is abysmally low: under 5% of government buildings in TN are fully accessible. Chennai Metro is accessible but feeder transport (buses, autos) is not. Only 2% of websites of TN government departments meet basic WCAG accessibility standards. UDID (Unique Disability ID) enrollment covers only 40% of PwDs. Employment rate for PwDs in TN: below 30% despite 4% reservation in government jobs.',
        stats: [
          'PwDs in TN: 11.8 lakh (Census 2011); estimated 20+ lakh currently',
          'Accessible India Campaign compliance in TN: below 5% of government buildings',
          'WCAG compliance of TN govt websites: only 2% meet basic standards',
          'UDID enrollment: only 40% of TN PwDs registered',
          'PwD employment rate in TN: below 30%',
          '4% reservation in govt jobs: only 1.2% filled by PwDs in TN (CAG audit)',
          'Accessible public toilets: fewer than 100 across Chennai (GCC data)'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Rights of Persons with Disabilities Act 2016 implementation',
          'TN Differently Abled Persons Welfare Dept programs',
          'UDID (Unique Disability ID) enrollment drives',
          'Free bus pass for PwDs on MTC/TNSTC',
          'Accessible India Campaign (Sugamya Bharat) audits',
          'State Commissioner for Persons with Disabilities office'
        ],
        whatsGap: [
          'No accessibility map of public buildings, transit stops, restaurants',
          'UDID enrollment process is complex and inaccessible itself',
          'No employment platform specifically for PwDs in TN',
          'Scheme information scattered across 10+ departments',
          'Accessible transit route planner nonexistent',
          'No citizen tool to report accessibility barriers'
        ]
      },
      techSolution: {
        what: 'Accessibility Map & Inclusive Services Platform',
        approach: 'Crowdsourced accessibility map of public spaces, transport, and services. Unified PwD scheme finder. Accessible employment portal connecting PwDs with inclusive employers. Accessibility barrier reporter for government buildings and public spaces. Screen-reader optimized, voice-navigable, and available in Tamil.',
        features: [
          'Accessibility map: rate buildings, transit stops, restaurants for wheelchair, visual, hearing access',
          'Accessible route planner: wheelchair-friendly routes using elevation + ramp data',
          'PwD scheme finder: all 50+ schemes across departments in one searchable portal',
          'UDID enrollment guide: step-by-step with document checklist',
          'Inclusive job board: employers committed to PwD hiring with accessibility info',
          'Barrier reporter: photograph and report inaccessible government buildings',
          'Assistive tech marketplace: wheelchairs, hearing aids, screen readers with subsidy info'
        ]
      },
      techStack: {
        frontend: 'Next.js with WCAG 2.1 AA compliance, screen reader optimized, voice navigation',
        backend: 'Python Django',
        database: 'PostgreSQL + PostGIS for spatial accessibility data',
        maps: 'Leaflet + OSM with custom accessibility layer',
        accessibility: 'ARIA landmarks, skip navigation, high contrast, adjustable font',
        hosting: 'DigitalOcean (₹2,000–5,000/month)',
        data: 'Accessible India Campaign audit data, UDID database, OSM accessibility tags'
      },
      revenueModel: [
        'CSR: Disability inclusion is CSR-eligible and underserved category',
        'B2G: State Commissioner for PwD digital reporting tool',
        'Employer listings: companies pay for "inclusive employer" badge (₹25,000/year)',
        'Assistive device commissions: marketplace commission on hearing aids, wheelchairs',
        'Foundation grants: CBM, Sightsavers, Wellcome Trust fund disability tech',
        'Consulting: accessibility audits for businesses and government buildings'
      ],
      govtApproach: {
        who: 'Differently Abled Welfare Dept, State Commissioner for PwD, Accessible India Campaign, Smart City SPVs',
        how: 'Partner with State Commissioner for PwD for official data. Approach Smart City SPVs for accessible infrastructure mapping. Work with NIEPMD (National Institute for Empowerment of PwD, Chennai) for technical expertise.',
        procurement: 'Accessible India Campaign digital tools budget. Differently Abled Welfare Dept scheme portal.'
      },
      cost: {
        mvp: '₹3–5 lakh (accessibility map + scheme finder + barrier reporter)',
        full: '₹12–18 lakh (route planner, job board, assistive tech marketplace)',
        timeline: 'MVP: 3–4 months. Full: 8–10 months'
      },
      realExamples: [
        { name: 'NIEPMD (Chennai)', desc: 'National Institute for Empowerment of Persons with Multiple Disabilities — India\'s apex disability center', url: 'niepmd.tn.nic.in' },
        { name: 'Wheelmap.org', desc: 'Global crowdsourced wheelchair accessibility map', url: 'wheelmap.org' },
        { name: 'Enable India', desc: 'Bangalore-based employment platform for persons with disabilities', url: 'enableindia.org' },
        { name: 'AXS Map', desc: 'Accessibility mapping platform rating businesses on disability access', url: 'axsmap.com' }
      ],
      buildGuide: [
        'Step 1: Build WCAG 2.1 AA-compliant web app with screen reader, voice, and keyboard navigation',
        'Step 2: Create accessibility rating system for public spaces (wheelchair, visual, hearing, cognitive)',
        'Step 3: Compile all PwD schemes from TN Differently Abled Dept, MOSJE, NHM into unified search',
        'Step 4: Build UDID enrollment guide with document checklist and nearest enrollment center',
        'Step 5: Create inclusive job board connecting with employer disability networks',
        'Step 6: Add barrier reporter with photo evidence and routing to State Commissioner',
        'Step 7: Partner with NIEPMD Chennai and disability rights organizations for testing and outreach',
        'Step 8: Pilot with 3 disability organizations, then approach State Commissioner for scaling'
      ]
    },

    /* ─── 22. COASTAL EROSION & FISHING COMMUNITY ─────────── */
    {
      id: 'coastal-fishing',
      title: 'Coastal Erosion & Fishing Community Issues',
      icon: '🌊',
      category: 'Environment',
      severity: 'High',
      problem: {
        description: 'Tamil Nadu has 1,076 km of coastline — 2nd longest among Indian states — with 591 fishing villages and 10.6 lakh fisherfolk families. Coastal erosion is severe: 42% of TN coastline is eroding (National Centre for Coastal Research). 500+ fishing families displaced annually by sea erosion in districts like Nagapattinam, Ramanathapuram, and Kanyakumari. Mechanized trawlers encroach on artisanal fishing zones. Fish catch has declined 30% in 20 years due to overfishing and climate change. Cyclone damage: Cyclone Gaja (2018) destroyed 10,000+ boats; Michaung (2023) caused ₹10,000+ crore damage.',
        stats: [
          'TN coastline: 1,076 km; 591 fishing villages; 10.6 lakh fisherfolk families',
          '42% of TN coastline is eroding (National Centre for Coastal Research)',
          '500+ fishing families displaced annually by coastal erosion',
          'Fish catch decline: 30% reduction in 20 years (CMFRI data)',
          'Cyclone Gaja (2018): 10,000+ boats destroyed, ₹15,000 crore damage',
          'TN fisherfolk deaths at sea: 150+ annually (many unreported)',
          'Sri Lankan Navy incidents: 200+ TN fishermen arrested annually in Palk Strait'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TN Fisheries Dept: subsidies for boats, nets, engines',
          'FIMSUL (Fisheries Management for Sustainable Livelihoods) project',
          'INCOIS ocean state forecasts for fishermen',
          'Cyclone shelters: 500+ along TN coast',
          'Ban on mechanized fishing during breeding season (Apr-Jun)',
          'Coastal erosion countermeasures: seawalls, groynes (sporadic)'
        ],
        whatsGap: [
          'No digital platform for real-time fishing zone safety alerts in Tamil',
          'Coastal erosion monitoring not accessible to affected communities',
          'Fish market price transparency absent — middlemen exploit fisherfolk',
          'No distress alert system for fishermen at sea (beyond ISRO system)',
          'Fishing license/subsidy tracking not digitized for fishermen',
          'No community mapping of erosion-threatened villages'
        ]
      },
      techSolution: {
        what: 'Coastal Community Safety & Livelihoods Platform',
        approach: 'Real-time sea safety alerts with INCOIS data in Tamil via SMS/voice. Fish price transparency from landing centers. Distress SOS for fishermen at sea. Coastal erosion community monitoring with satellite data. Fishing subsidy and license tracker. Community weather station network.',
        features: [
          'Sea safety: real-time wave, wind, cyclone alerts via SMS/IVR in Tamil',
          'Distress SOS: one-button alert from sea with GPS coordinates to Coast Guard',
          'Fish price tracker: real-time prices at major landing centers and markets',
          'Coastal erosion monitor: satellite imagery + community photo reports over time',
          'Subsidy tracker: fishing boat, net, engine subsidy application and status',
          'Fishing zone map: where artisanal vs mechanized zones are, plus restricted areas',
          'Weather station: low-cost community weather stations for hyperlocal forecasts'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + IVR/SMS for non-smartphone users',
        backend: 'Python FastAPI',
        database: 'PostgreSQL + PostGIS for spatial/marine data',
        maps: 'Leaflet + OpenSeaMap for marine features',
        iot: 'Low-cost weather stations (ESP32 + BME280 + anemometer, ₹3,000–5,000 each)',
        satellite: 'Sentinel-2 (ESA, free) for coastal erosion monitoring',
        hosting: 'AWS (₹3,000–8,000/month)',
        data: 'INCOIS (ocean state), NCCR (coastal erosion), CMFRI (fish catch), IMD (weather)'
      },
      revenueModel: [
        'B2G: Fisheries Dept subscription for digital subsidy management (₹5–10 lakh/year)',
        'Fish marketplace: commission on direct fisher-to-buyer transactions',
        'Insurance: fishing boat insurance data partnership',
        'CSR: Coastal community welfare is CSR-eligible',
        'IoT hardware: sell/maintain weather stations to fishing cooperatives',
        'Grants: FAO, WorldFish, Blue Economy funds support fishing tech'
      ],
      govtApproach: {
        who: 'Fisheries Dept, NCCR (National Centre for Coastal Research, Chennai), Indian Coast Guard, INCOIS',
        how: 'Start with INCOIS data integration (they have API). Approach Fisheries Dept for landing center price data. Partner with fishing cooperatives for community deployment. NCCR Chennai for erosion data.',
        procurement: 'Blue Revolution (Neel Kranti Mission) digital component. FIMSUL Phase 2.'
      },
      cost: {
        mvp: '₹5–7 lakh (sea safety alerts + fish prices + SOS + erosion reports)',
        full: '₹18–25 lakh (IoT weather stations, satellite monitoring, marketplace)',
        timeline: 'MVP: 3–4 months. Full: 10–12 months'
      },
      realExamples: [
        { name: 'INCOIS Fisher Friend', desc: 'ISRO/INCOIS mobile app for ocean state forecasts for Indian fishermen', url: 'incois.gov.in' },
        { name: 'mKRISHI Fisheries (TCS)', desc: 'TCS app providing potential fishing zone advisories', url: 'mkrishi.com' },
        { name: 'NCCR Chennai', desc: 'National Centre for Coastal Research — India\'s apex coastal monitoring body', url: 'nccr.gov.in' },
        { name: 'Abalobi (South Africa)', desc: 'Fisher-driven data app for small-scale fisheries management', url: 'abalobi.org' }
      ],
      buildGuide: [
        'Step 1: Integrate INCOIS ocean state forecast API for sea safety alerts',
        'Step 2: Build SMS/IVR delivery system for non-smartphone fisherfolk in Tamil',
        'Step 3: Create fish price aggregator from major TN landing centers (Kasimedu, Tuticorin, Rameswaram)',
        'Step 4: Build distress SOS module with GPS coordinates → Coast Guard routing',
        'Step 5: Set up Sentinel-2 satellite monitoring for 10 erosion-prone coastal stretches',
        'Step 6: Deploy 5–10 community weather stations in fishing villages',
        'Step 7: Partner with fishing cooperatives in Nagapattinam and Ramanathapuram for pilot',
        'Step 8: Approach Fisheries Dept and NCCR with pilot data for state-wide scaling'
      ]
    },

    /* ─── 23. ILLEGAL SAND MINING ─────────────────────────── */
    {
      id: 'sand-mining',
      title: 'Illegal Sand Mining',
      icon: '⛏️',
      category: 'Environment',
      severity: 'High',
      problem: {
        description: 'Illegal sand mining is one of TN\'s most destructive environmental crimes. Despite the state\'s sand quarry ban (2003) and regulated TNSMC (TN State Marketing Corporation) system, illegal mining continues rampantly in rivers like Cauvery, Thamiraparani, Palar, and Vaigai. Madras HC has repeatedly intervened — a 2020 order noted "rampant illegal sand mining destroying river ecosystems." Sand mafia-related violence: 3 officials murdered in TN since 2017. River beds have dropped 3–5 meters in several stretches, destroying groundwater recharge. Bridge collapses linked to sand mining: Cauvery bridge collapse (2018) killed 2.',
        stats: [
          'TN sand demand: ~30 million tonnes/year; legal supply: ~10 million tonnes (2023)',
          'Illegal mining estimated at 60-70% of total sand extraction in TN',
          'Sand mafia-related murders: 3 officials/activists killed in TN since 2017',
          'River bed lowering: 3–5 meters in Palar, Cauvery, Thamiraparani stretches',
          'Madras HC orders against illegal sand mining: 200+ since 2015',
          'TNSMC sand price: ₹500–700/unit; black market: ₹3,000–₹15,000/unit',
          'Construction cost increase due to sand scarcity: 20-30% in TN'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TNSMC (TN Sand Marketing Corporation) regulates legal sand supply',
          'Online sand booking: sand.tn.gov.in for legal purchase',
          'District-level Sand Monitoring Committees',
          'Madras HC-appointed committees to monitor sand mining',
          'M-sand (manufactured sand) promotion as alternative',
          'Mining & Geology Dept enforcement squads'
        ],
        whatsGap: [
          'No citizen reporting tool for illegal sand mining activity',
          'TNSMC supply is insufficient — drives people to illegal sources',
          'Night-time mining goes undetected (satellite monitoring is daytime only)',
          'No real-time river bed level monitoring accessible publicly',
          'Whistleblower protection absent — reporters face threats',
          'No tracking of sand lorry movements (despite GPS mandate)'
        ]
      },
      techSolution: {
        what: 'Sand Mining Watch & River Protection Platform',
        approach: 'Anonymous illegal mining activity reporter with photo/video evidence. Satellite-based river bed change detection using Sentinel-2 data. Sand lorry movement tracker (TNSMC GPS integration). River health dashboard with community water level monitoring. M-sand availability finder.',
        features: [
          'Anonymous mining reporter: report with location, time, photo/video evidence',
          'Satellite river monitor: quarterly river bed change detection maps',
          'Sand lorry tracker: GPS-based monitoring of TNSMC registered lorries',
          'River health dashboard: water level, sand depth, ecosystem health by river stretch',
          'M-sand finder: locate nearest M-sand manufacturers with price comparison',
          'Legal sand availability: real-time TNSMC stock and booking status',
          'Alert system: notify downstream communities of upstream mining activity'
        ]
      },
      techStack: {
        frontend: 'Next.js PWA + React Native mobile',
        backend: 'Python FastAPI with secure anonymous submission',
        database: 'PostgreSQL + PostGIS for spatial analysis',
        satellite: 'Sentinel-2 (ESA, free), Google Earth Engine for change detection',
        maps: 'Leaflet + OSM with river overlay data',
        security: 'Anonymous reporting, encrypted evidence storage, no IP logging',
        hosting: 'AWS/DigitalOcean (₹3,000–8,000/month)',
        data: 'TNSMC sand data, CWC river water levels, Sentinel-2 satellite imagery'
      },
      revenueModel: [
        'Foundation grants: environmental foundations fund anti-mining tech',
        'Media licensing: satellite change detection reports for investigative journalism',
        'B2G: District Mining & Geology Dept monitoring dashboard',
        'M-sand marketplace: listing fees from M-sand manufacturers',
        'Consulting: environmental impact assessments for sand mining areas',
        'CSR: River restoration is environmental CSR-eligible'
      ],
      govtApproach: {
        who: 'Mining & Geology Dept, TNSMC, District Collectors, Madras HC-appointed monitoring committees',
        how: 'Start as citizen watchdog platform (no govt permission needed). Build evidence through satellite monitoring. Submit reports to HC monitoring committees and District Collectors. Partner with environmental groups like Arappor Iyakkam.',
        procurement: 'TNSMC digital monitoring component. District mineral fund allocation.'
      },
      cost: {
        mvp: '₹4–6 lakh (anonymous reporting + satellite monitoring + M-sand finder)',
        full: '₹15–22 lakh (lorry tracker, river health dashboard, alert system)',
        timeline: 'MVP: 3–4 months. Full: 8–12 months'
      },
      realExamples: [
        { name: 'Arappor Iyakkam', desc: 'Chennai NGO that exposed ₹150 crore illegal sand mining scam using RTI', url: 'arappor.org' },
        { name: 'sand.tn.gov.in', desc: 'Official TNSMC online sand booking portal', url: 'sand.tn.gov.in' },
        { name: 'SandStories.org', desc: 'Global platform documenting illegal sand mining worldwide', url: 'sandstories.org' },
        { name: 'Global Sand Observatory (UNEP)', desc: 'UN initiative monitoring global sand extraction', url: 'unepgrid.ch' }
      ],
      buildGuide: [
        'Step 1: Set up Sentinel-2 satellite monitoring pipeline for major TN river stretches',
        'Step 2: Build anonymous mining activity reporter with encrypted evidence upload',
        'Step 3: Create quarterly river bed change detection maps using Google Earth Engine',
        'Step 4: Compile M-sand manufacturer database with locations and prices',
        'Step 5: Integrate TNSMC legal sand booking data (sand.tn.gov.in scraping)',
        'Step 6: Build river health dashboard aggregating water level + sand depth data',
        'Step 7: Partner with Arappor Iyakkam and environmental lawyers for evidence routing',
        'Step 8: Submit satellite evidence reports to Madras HC monitoring committee'
      ]
    },

    /* ─── 24. STRAY DOG MENACE ────────────────────────────── */
    {
      id: 'stray-dogs',
      title: 'Stray Dog Population & Human-Animal Conflict',
      icon: '🐕',
      category: 'Infrastructure',
      severity: 'Medium',
      problem: {
        description: 'Tamil Nadu has an estimated 25-30 lakh stray dogs — Chennai alone has 8+ lakh (GCC survey 2023). Dog bite cases in TN: 6.8 lakh in 2022 (Integrated Disease Surveillance Programme data) — highest among southern states. TN recorded 12 rabies deaths in 2022. GCC\'s Animal Birth Control (ABC) program sterilizes only 30,000 dogs/year against a population of 8+ lakh. Stray dog attacks on children and elderly are rising: 50+ serious mauling cases in Chennai in 2023. Madras HC has received 500+ PILs on stray dog menace since 2022.',
        stats: [
          'Stray dogs in TN: estimated 25-30 lakh; Chennai alone: 8+ lakh',
          'Dog bite cases in TN: 6.8 lakh (2022, IDSP data)',
          'Rabies deaths in TN: 12 in 2022',
          'GCC ABC (sterilization) rate: 30,000/year vs 8+ lakh population',
          'Serious mauling cases in Chennai: 50+ in 2023',
          'Anti-rabies vaccine shortage reported in 60% of TN PHCs (2023 audit)',
          'Madras HC PILs on stray dogs: 500+ since 2022'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Animal Birth Control (ABC) program by GCC and municipalities',
          'Blue Cross of India (Chennai) conducts ABC surgeries',
          'Anti-rabies vaccination drives (sporadic)',
          'Corporation dog catchers for ABC (not culling — Supreme Court order)',
          'Madras HC monitoring committee for stray dog management'
        ],
        whatsGap: [
          'No real-time stray dog concentration map',
          'No way for citizens to report aggressive stray dog packs',
          'ABC sterilization status of dogs not tracked digitally',
          'Dog bite first-aid and nearest anti-rabies vaccine location unknown',
          'No community feeding management system',
          'Stray dog-related complaints not routed to ABC teams efficiently'
        ]
      },
      techSolution: {
        what: 'Stray Dog Management & Public Safety Platform',
        approach: 'Crowdsourced stray dog concentration map. Report aggressive packs for ABC team response. Track ABC-sterilized dogs (ear-notch verification). Anti-rabies vaccine finder for nearest available hospital. Community dog feeding coordination. Dog bite first-aid guide.',
        features: [
          'Stray dog hotspot map: crowdsourced reports of stray packs by area',
          'Aggressive dog alert: report threatening packs for ABC team dispatch',
          'ABC tracker: map sterilized (ear-notched) vs unsterilized dogs',
          'Anti-rabies finder: nearest hospital/PHC with available anti-rabies vaccine',
          'Dog bite first-aid: immediate steps guide + nearest treatment center',
          'Community feeder network: coordinate feeding spots to reduce food aggression',
          'Adoption board: healthy strays available for adoption with vaccination status'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + PWA',
        backend: 'Node.js Express',
        database: 'PostgreSQL + PostGIS for spatial mapping',
        maps: 'Leaflet + OSM',
        ai: 'Image recognition for ear-notch detection (sterilized dog identification)',
        hosting: 'DigitalOcean (₹2,000–4,000/month)',
        data: 'GCC ABC data, IDSP dog bite data, hospital anti-rabies stock'
      },
      revenueModel: [
        'B2G: Municipal corporation subscription for ABC management dashboard (₹3–5 lakh/year)',
        'Pet industry advertising: pet food, veterinary clinics, pet shops',
        'CSR: Animal welfare is Schedule VII CSR-eligible',
        'Veterinary partnerships: commission on vaccination/treatment bookings',
        'Foundation grants: Humane Society International, FIAPO fund animal welfare tech'
      ],
      govtApproach: {
        who: 'GCC/Municipal Corporation (Health/Veterinary), Animal Welfare Board of India, Blue Cross',
        how: 'Partner with Blue Cross Chennai for ABC data. Approach GCC Veterinary Officer for official integration. Present hotspot data to Madras HC monitoring committee.',
        procurement: 'Municipal corporation ABC budget. Animal Welfare Board grants.'
      },
      cost: {
        mvp: '₹2–4 lakh (hotspot map + alert system + anti-rabies finder)',
        full: '₹8–12 lakh (ABC tracker, AI ear-notch detection, feeding coordination)',
        timeline: 'MVP: 2–3 months. Full: 5–7 months'
      },
      realExamples: [
        { name: 'Blue Cross of India', desc: 'Chennai-based animal welfare organization conducting 30,000+ ABC surgeries/year', url: 'bluecrossofindia.org' },
        { name: 'StreetDogWatch (Bangalore)', desc: 'Community platform for reporting and managing stray dog issues', url: 'Community platform' },
        { name: 'Animal Welfare Board of India', desc: 'Statutory body under MoEFCC for animal welfare regulation', url: 'awbi.in' },
        { name: 'HSI India (Humane Society)', desc: 'International organization supporting ABC programs in India', url: 'hsi.org' }
      ],
      buildGuide: [
        'Step 1: Build crowdsourced stray dog reporting with GPS + photo',
        'Step 2: Create hotspot heatmap aggregating reports by area',
        'Step 3: Add aggressive dog alert with routing to nearest ABC team',
        'Step 4: Compile anti-rabies vaccine availability from GHs and PHCs',
        'Step 5: Build ABC sterilization tracker with ear-notch photo verification',
        'Step 6: Create community feeding spot coordinator',
        'Step 7: Partner with Blue Cross Chennai and GCC Veterinary dept for pilot',
        'Step 8: Scale to other municipalities with corporation ABC budget funding'
      ]
    },

    /* ─── 25. LAST-MILE PUBLIC TRANSPORT CONNECTIVITY ─────── */
    {
      id: 'last-mile-transport',
      title: 'Public Transport Last-Mile Connectivity',
      icon: '🚌',
      category: 'Infrastructure',
      severity: 'High',
      problem: {
        description: 'While Chennai has MTC buses, Metro rail, and MRTS, the last-mile connectivity is abysmal. 65% of Chennai Metro stations lack feeder bus services within 500 meters (CMRL survey). Auto-rickshaw refusal rate: 80%+ for short trips. Share auto routes are unregulated, overcrowded, and unsafe (especially for women). Tier-2 cities (Coimbatore, Madurai, Trichy) have even worse public transport: average wait time 30-45 minutes. TNSTC routes cut by 15% since 2018 due to financial losses. 40% of TN workers spend 2+ hours commuting daily.',
        stats: [
          '65% of Chennai Metro stations lack feeder bus connectivity within 500m',
          'Auto-rickshaw refusal rate: 80%+ for short trips in Chennai',
          'Average bus wait time in Tier-2 cities: 30–45 minutes',
          'TNSTC routes cut by 15% since 2018 due to ₹5,000+ crore accumulated losses',
          '40% of TN urban workers spend 2+ hours commuting daily',
          'Share auto accidents: 200+ serious injuries annually in Chennai (traffic police data)',
          'Only 3% of Chennai trips are by public transport (down from 8% in 2010)'
        ]
      },
      currentStatus: {
        govtDoing: [
          'Chennai Metro Phase 2: 118 km (under construction)',
          'MTC fleet renewal: 2,000 new buses (2023-24)',
          'CMRL feeder bus services (limited routes)',
          'Chennai unified mobility card (pilot)',
          'Electric bus deployment: 500+ planned for Chennai'
        ],
        whatsGap: [
          'No multimodal trip planner combining Metro + bus + auto + walk',
          'Real-time bus tracking absent on most MTC/TNSTC routes',
          'Share auto routes not documented or mapped anywhere',
          'Last-mile from Metro/bus stop to destination completely unplanned',
          'No demand-responsive transit for underserved areas',
          'Commuter feedback not integrated into route planning'
        ]
      },
      techSolution: {
        what: 'Multimodal Last-Mile Transit Planner',
        approach: 'Comprehensive trip planner combining all modes: Metro, MTC bus, TNSTC bus, share auto, cycle, and walk. Real-time vehicle tracking where available. Crowdsourced share auto route mapping. Demand-responsive shuttle recommendations for transit deserts. Feedback system for route improvement.',
        features: [
          'Multimodal trip planner: Metro + bus + auto + walk combined routes',
          'Real-time bus tracking: crowdsourced + GPS from MTC fleet',
          'Share auto route mapper: community-mapped share auto routes with fares',
          'Last-mile solutions: bicycle, e-scooter, walking routes from transit stops',
          'Transit desert alerts: identify areas with poor connectivity for advocacy',
          'Commuter feedback: rate routes, report issues, suggest new routes',
          'Fare calculator: accurate fare across all modes combined'
        ]
      },
      techStack: {
        frontend: 'React Native (mobile) + PWA',
        backend: 'Node.js Express with real-time capabilities (WebSocket)',
        database: 'PostgreSQL + PostGIS + Redis for real-time tracking',
        maps: 'MapLibre GL + OSM with GTFS data for transit',
        routing: 'OpenTripPlanner (open-source multimodal router)',
        hosting: 'AWS/DigitalOcean (₹5,000–10,000/month for real-time)',
        data: 'CMRL schedule, MTC GTFS (if available), OSM road data, crowdsourced share auto data'
      },
      revenueModel: [
        'Advertising: hyperlocal ads for riders (shops near transit stops)',
        'B2G: Transit authority subscription for demand data (₹5–10 lakh/year)',
        'Mobility partnerships: Ola/Uber/Rapido last-mile integration referrals',
        'E-scooter/bicycle rental partnerships: commission on last-mile rides',
        'Data licensing: commuter flow data for real estate, retail, urban planning',
        'Premium features: save favorite routes, departure alerts, seat availability'
      ],
      govtApproach: {
        who: 'CMRL, MTC, TNSTC, Chennai Unified Metropolitan Transport Authority (CUMTA), Smart City',
        how: 'Start with crowdsourced data (no permission needed). Approach CMRL for schedule API (they are relatively tech-forward). MTC GPS data via RTI. Present demand data to CUMTA for route planning advocacy.',
        procurement: 'Smart City mobility component. CUMTA data integration. MTC digital transformation.'
      },
      cost: {
        mvp: '₹4–6 lakh (trip planner + share auto mapper + crowdsourced tracking)',
        full: '₹15–22 lakh (real-time tracking, demand analytics, multi-city)',
        timeline: 'MVP: 3–4 months. Full: 8–10 months'
      },
      realExamples: [
        { name: 'Chalo (India)', desc: 'Real-time bus tracking app operational in several Indian cities', url: 'chalo.com' },
        { name: 'Moovit (Global)', desc: 'Multimodal transit app used in 3,500+ cities worldwide', url: 'moovitapp.com' },
        { name: 'OpenTripPlanner', desc: 'Open-source multimodal route planner used by transit agencies globally', url: 'opentripplanner.org' },
        { name: 'Citymapper (London)', desc: 'Gold standard multimodal transit app', url: 'citymapper.com' }
      ],
      buildGuide: [
        'Step 1: Get CMRL schedule data and create GTFS feed for Chennai Metro',
        'Step 2: Crowdsource share auto routes with volunteer mapping drives',
        'Step 3: Set up OpenTripPlanner instance with Metro + bus + walking data',
        'Step 4: Build mobile app with multimodal trip planning',
        'Step 5: Add crowdsourced real-time bus tracking (users report bus sightings)',
        'Step 6: Create transit desert map showing underserved areas',
        'Step 7: Partner with CMRL for official data feed and feeder bus optimization',
        'Step 8: Expand to Coimbatore and Madurai with TNSTC data'
      ]
    },

    /* ─── 26. DIGITAL DIVIDE IN RURAL AREAS ───────────────── */
    {
      id: 'digital-divide',
      title: 'Digital Divide in Rural Areas',
      icon: '📡',
      category: 'Education',
      severity: 'High',
      problem: {
        description: 'Despite TN being India\'s most urbanized large state (53% urban), 47% of population lives in rural areas with severe digital exclusion. TRAI data shows internet penetration in rural TN: 38% vs 85% in urban. During COVID, 60% of rural TN students couldn\'t access online classes. Only 23% of rural TN households have a computer/tablet. Digital literacy among rural adults (18-60): below 25%. e-Sevai services require digital access that rural citizens often lack. BharatNet fiber connectivity reaches only 40% of TN gram panchayats despite 100% target.',
        stats: [
          'Internet penetration: rural TN 38% vs urban 85% (TRAI 2023)',
          'COVID online class access: 60% of rural TN students excluded',
          'Rural households with computer/tablet: only 23% (NFHS-5)',
          'Digital literacy among rural adults: below 25%',
          'BharatNet connectivity: only 40% of TN gram panchayats connected (vs 100% target)',
          'Rural bank accounts with active digital transactions: only 15%',
          'e-Sevai kiosks: 2,000+ but many non-functional or understaffed'
        ]
      },
      currentStatus: {
        govtDoing: [
          'BharatNet: fiber optic to gram panchayats (40% connected in TN)',
          'e-Sevai Common Service Centers (CSCs): 2,000+ across TN',
          'TNeGA (TN e-Governance Agency) digital inclusion programs',
          'PMGDISHA (PM Gramin Digital Saksharta Abhiyan) digital literacy',
          'TN Govt free laptop scheme for school students',
          'Kalvi TV educational channel during COVID'
        ],
        whatsGap: [
          'No offline-first digital service delivery for low-connectivity areas',
          'Digital literacy training not sustained beyond initial PMGDISHA session',
          'e-Sevai kiosks have no accountability for service quality',
          'No platform connecting rural residents with digital volunteers',
          'Vernacular (Tamil) content insufficient on government platforms',
          'No community digital hub model beyond e-Sevai kiosks'
        ]
      },
      techSolution: {
        what: 'Rural Digital Inclusion & Offline Services Platform',
        approach: 'Offline-first PWA for government services that works with minimal connectivity. Digital literacy modules in Tamil via gamified learning. Digital volunteer network connecting tech-savvy youth with rural seniors. Community WiFi hotspot management system. Simplified Tamil-first interfaces for essential services. Voice-based navigation for non-literate users.',
        features: [
          'Offline-first services: access e-Sevai forms, scheme info without internet',
          'Tamil digital literacy: gamified modules for basic digital skills',
          'Digital volunteer network: tech-savvy youth help seniors access services',
          'Community WiFi manager: track usage, bandwidth, and content for shared hotspots',
          'Voice assistant: Tamil voice-based navigation for non-literate users',
          'Service kiosk monitor: rate e-Sevai kiosks for functionality and service quality',
          'Scheme eligibility checker: offline-capable tool to find applicable government schemes'
        ]
      },
      techStack: {
        frontend: 'PWA with Service Worker for offline functionality, Tamil-first UI',
        backend: 'Python Django with sync-when-online architecture',
        database: 'PouchDB (client-side) syncing to PostgreSQL (server) when online',
        voice: 'Mozilla DeepSpeech / Whisper for Tamil speech recognition',
        hosting: 'AWS/DigitalOcean (₹3,000–6,000/month)',
        offline: 'IndexedDB for local data storage, background sync API',
        data: 'e-Sevai service catalog, scheme databases, BharatNet connectivity data'
      },
      revenueModel: [
        'B2G: TNeGA partnership for offline e-Sevai delivery tool',
        'CSR: Digital inclusion is CSR-eligible (rural development category)',
        'Telecom partnerships: Airtel/Jio rural penetration data collaboration',
        'Training: digital literacy course licensing to panchayats (₹10,000/year)',
        'Foundation grants: Digital Empowerment Foundation, Google.org fund digital inclusion',
        'Community WiFi: management platform license to BharatNet operators'
      ],
      govtApproach: {
        who: 'TNeGA, BharatNet (BBNL), Rural Development Dept, School Education Dept, CSC SPV',
        how: 'Approach TNeGA for offline e-Sevai pilot. Partner with BharatNet for community WiFi management. Work with PMGDISHA coordinators for training content. School Education Dept for student digital literacy.',
        procurement: 'BharatNet last-mile digital services. TNeGA digital inclusion budget. PMGDISHA Phase 2.'
      },
      cost: {
        mvp: '₹4–6 lakh (offline PWA + scheme finder + digital literacy modules)',
        full: '₹15–20 lakh (voice assistant, volunteer network, WiFi management)',
        timeline: 'MVP: 3–4 months. Full: 8–12 months'
      },
      realExamples: [
        { name: 'TNeGA', desc: 'TN e-Governance Agency driving digital government services', url: 'tnega.tn.gov.in' },
        { name: 'Digital Empowerment Foundation', desc: 'India\'s leading digital inclusion NGO with community network programs', url: 'defindia.org' },
        { name: 'Internet Saathi (Google-Tata)', desc: 'Women-led digital literacy program in rural India', url: 'internetsaathi.org' },
        { name: 'Gram Vaani', desc: 'Voice-based community platform for low-literacy rural populations', url: 'gramvaani.org' }
      ],
      buildGuide: [
        'Step 1: Build offline-first PWA with Service Worker caching for essential services',
        'Step 2: Create Tamil scheme eligibility checker with offline database',
        'Step 3: Design gamified Tamil digital literacy modules (5 levels: basic to advanced)',
        'Step 4: Build digital volunteer matching system (tech youth ↔ rural seniors)',
        'Step 5: Integrate Tamil voice recognition for hands-free navigation',
        'Step 6: Create e-Sevai kiosk rating and accountability tracker',
        'Step 7: Pilot in 5 village panchayats through BharatNet infrastructure',
        'Step 8: Approach TNeGA with pilot results for state-wide offline e-Sevai'
      ]
    },

    /* ─── 27. MISINFORMATION & FAKE NEWS ──────────────────── */
    {
      id: 'misinformation',
      title: 'Misinformation & Fake News',
      icon: '📰',
      category: 'Governance',
      severity: 'High',
      problem: {
        description: 'Tamil Nadu is one of India\'s most politically active states, making it a prime target for misinformation. WhatsApp forwards reach 10+ crore TN users; an estimated 30% of political forwards contain misleading claims. During elections, fake news volume spikes 400% (BOOM Live analysis). Health misinformation during COVID caused at least 12 documented deaths in TN from self-medication with harmful substances. Caste-based hate speech and communal tension-stoking via social media have led to violence: Kattumannarkoil riots (2023) were preceded by viral fake videos. Deepfake political content is emerging threat for 2026 TN elections.',
        stats: [
          'WhatsApp users in TN: 10+ crore; 30% of political forwards contain misinformation',
          'Fake news volume during TN elections: 400% spike (BOOM Live)',
          'COVID misinformation deaths in TN: 12+ documented cases',
          'Communal violence incidents preceded by viral fake content: 5+ in 2022-23',
          'Tamil fact-checking organizations: only 3-4 active (vs 50+ Tamil news outlets)',
          'Digital literacy (identifying fake news): below 15% among 40+ age group',
          'Police cyber crime cells: 100+ pending fake news cases per district'
        ]
      },
      currentStatus: {
        govtDoing: [
          'TN Police Cyber Crime Wing handles fake news complaints',
          'IT Act Section 66D used against fake news spreaders',
          'Election Commission\'s Voluntary Code of Ethics for social media',
          'CERT-In handles takedown requests',
          'TN Police social media monitoring during elections'
        ],
        whatsGap: [
          'No Tamil-language fact-checking platform at scale',
          'No tool for citizens to quickly verify claims before sharing',
          'WhatsApp forwards cannot be fact-checked at source',
          'No media literacy program for schools or rural adults',
          'Deepfake detection tools nonexistent for Tamil content',
          'Fact-check results don\'t reach the same audience as the original fake news'
        ]
      },
      techSolution: {
        what: 'Tamil Fact-Check & Media Literacy Platform',
        approach: 'WhatsApp/Telegram bot for instant claim verification in Tamil. Community fact-checkers trained and verified. Media literacy modules for schools and community groups. Deepfake detection for Tamil political content. Database of debunked claims searchable by keyword/image. Pre-bunking: proactive alerts about common misinformation patterns before they spread.',
        features: [
          'WhatsApp fact-check bot: forward suspicious message → get verification in minutes',
          'Claim database: searchable repository of fact-checked Tamil claims',
          'Image/video reverse search: check if media is old/manipulated/out of context',
          'Deepfake detector: AI-based analysis for synthetic Tamil audio/video',
          'Community fact-checkers: trained volunteers who verify claims',
          'Media literacy course: 10-module program for schools and community groups',
          'Pre-bunking alerts: proactive notifications about emerging misinformation patterns'
        ]
      },
      techStack: {
        frontend: 'Next.js (web) + WhatsApp Business API + Telegram Bot API',
        backend: 'Python Django with NLP pipeline for Tamil claim matching',
        database: 'PostgreSQL + Elasticsearch for claim search',
        ai: 'Tamil NLP for claim similarity matching, deepfake detection models',
        whatsapp: 'WhatsApp Business API (Meta for Developers) or Twilio',
        hosting: 'AWS (₹5,000–15,000/month for AI processing)',
        data: 'IFCN fact-check database, Google Fact Check API, Tamil news corpus'
      },
      revenueModel: [
        'Foundation grants: Google News Initiative, Meta Journalism Project fund fact-checking',
        'IFCN certification: access to Meta\'s Third-Party Fact-Checking Program (revenue share)',
        'Media literacy training: charge institutions for workshops (₹25,000–50,000 per workshop)',
        'Consulting: political campaign misinformation monitoring for Election Commission',
        'CSR: Media literacy is CSR-eligible under education category',
        'Subscription: premium fact-check service for media houses and corporates'
      ],
      govtApproach: {
        who: 'TN Police Cyber Crime Wing, Election Commission (CEO TN), School Education Dept, TNeGA',
        how: 'Partner with IFCN (International Fact-Checking Network) for credibility. Approach CEO TN for election fact-checking official status. Work with School Education Dept for media literacy curriculum. Collaborate with BOOM Live, Alt News for methodology.',
        procurement: 'Election Commission voter awareness budget. School Education media literacy component.'
      },
      cost: {
        mvp: '₹5–8 lakh (WhatsApp bot + claim database + image reverse search)',
        full: '₹20–30 lakh (deepfake detection, community platform, media literacy modules)',
        timeline: 'MVP: 4–5 months. Full: 10–14 months'
      },
      realExamples: [
        { name: 'BOOM Live', desc: 'India\'s IFCN-certified fact-checking platform with Tamil vertical', url: 'boomlive.in' },
        { name: 'Alt News', desc: 'India\'s leading fact-checking website', url: 'altnews.in' },
        { name: 'Shakti (Google)', desc: 'Google\'s counter-misinformation initiative for Indian languages', url: 'google.com' },
        { name: 'Full Fact (UK)', desc: 'Automated fact-checking tools, model for scalable verification', url: 'fullfact.org' }
      ],
      buildGuide: [
        'Step 1: Build claim database with Elasticsearch backend for Tamil text search',
        'Step 2: Create WhatsApp bot using Business API: receive claims, match against database',
        'Step 3: Build community fact-checker portal: volunteer registration, training, verification workflow',
        'Step 4: Add image/video reverse search using Google Vision API + TinEye',
        'Step 5: Train Tamil NLP model for claim similarity matching (semantic search)',
        'Step 6: Apply for IFCN certification (International Fact-Checking Network)',
        'Step 7: Create school media literacy curriculum (10 modules) and pilot in 20 schools',
        'Step 8: Approach CEO TN for official election fact-checking partnership for 2026'
      ]
    }
