/* ============================================================
 * TN 2026 — Audience Tier System (5-tier explainability)
 * ============================================================
 * Renders any concept at 5 reading/expertise levels:
 *   K = Kid       (~10 yrs)  — concrete metaphors, no jargon, examples from games/snacks/family
 *   T = Teen      (~15 yrs)  — civics-class level, school examples
 *   V = Voter     (18+)      — newspaper-reader level, neutral
 *   W = Wonk      (policy)   — institutional names, comparative refs
 *   E = Economist            — fiscal multipliers, opportunity cost, GDP %
 * ============================================================ */

(function () {
  'use strict';

  var TIERS = [
    { id: 'K', label: 'Kid (10)',   icon: '🧒', desc: 'Simple words, real-life examples' },
    { id: 'T', label: 'Teen (15)',  icon: '🎒', desc: 'Civics-class level' },
    { id: 'V', label: 'Voter 18+',  icon: '🗳️', desc: 'Neutral newspaper level' },
    { id: 'W', label: 'Policy Wonk', icon: '📚', desc: 'Institutional + comparative' },
    { id: 'E', label: 'Economist',  icon: '📈', desc: 'Fiscal + multiplier analysis' }
  ];

  var VERDICT_HUMAN = {
    I: { K: 'Good idea',          T: 'Worth keeping',         V: 'Include',           W: 'Recommend implementation', E: 'Positive NPV; productive use of capital' },
    C: { K: 'Okay, but careful',  T: 'Has good and bad parts', V: 'Conditional',      W: 'Implement with modifications', E: 'Mixed multiplier; conditional on targeting + sunset clauses' },
    E: { K: 'Not a great idea',   T: 'More problems than benefits', V: 'Exclude',     W: 'Do not implement',          E: 'Negative NPV; consumption transfer crowding out capex' },
    R: { K: 'Need to study more', T: 'Needs more info',       V: 'Review',            W: 'Requires further analysis', E: 'Insufficient data for cost-benefit' },
    U: { K: "Can't be rated",     T: 'Hard to score',         V: 'Unratable',         W: 'Not amenable to scoring',   E: 'Outside cost-benefit framework' }
  };

  var STAR_HUMAN = {
    5: { K: '5 stars — really good!',     T: 'Excellent',     V: 'Excellent (5★)',    W: 'Best-in-class',     E: 'Top quintile cost-effectiveness' },
    4: { K: '4 stars — pretty good',      T: 'Strong',        V: 'Strong (4★)',       W: 'Above-average',     E: 'Above-median ROI' },
    3: { K: '3 stars — okay',             T: 'Fair',          V: 'Fair (3★)',         W: 'Median quality',    E: 'Median multiplier' },
    2: { K: '2 stars — not so good',      T: 'Weak',          V: 'Weak (2★)',         W: 'Below-average',     E: 'Below-median; high deadweight loss' },
    1: { K: '1 star — bad',               T: 'Poor',          V: 'Poor (1★)',         W: 'Worst-in-class',    E: 'Bottom quintile; net welfare loss likely' },
    0: { K: 'Not given a star',           T: 'Unrated',       V: 'Unrated',           V_alt: '—', W: 'Unrated', E: 'Unrated' }
  };

  var PARTY_HUMAN = {
    DMK: {
      K: 'DMK — the party in charge of Tamil Nadu right now',
      T: 'DMK — the ruling party in Tamil Nadu (since 2021)',
      V: 'Dravida Munnetra Kazhagam — incumbent, INDIA bloc',
      W: 'DMK — incumbent state government, Stalin-led, INDIA bloc constituent',
      E: 'DMK — incumbent; manifesto reflects continuation premium + signature welfare schemes'
    },
    ADMK: {
      K: 'ADMK — used to run Tamil Nadu before',
      T: 'ADMK — the main opposition party (used to govern)',
      V: 'All India Anna Dravida Munnetra Kazhagam — main opposition',
      W: 'ADMK — principal opposition, NDA-aligned, Palaniswami-led',
      E: 'ADMK — opposition; manifesto pivots to direct cash + freebies to recover voter base'
    },
    TVK: {
      K: 'TVK — a new party started by actor Vijay',
      T: 'TVK — Tamilaga Vetri Kazhagam, started by actor Vijay in 2024',
      V: 'Tamilaga Vetri Kazhagam — new party launched by actor Vijay (2024)',
      W: 'TVK — debutant; cinema-celebrity-led mobilisation, untested electoral machine',
      E: 'TVK — debutant; manifesto is highest-cost in absolute terms, lowest fiscal anchoring'
    },
    NTK: {
      K: 'NTK — a small party that talks a lot about Tamil pride',
      T: 'NTK — Naam Tamilar Katchi, focuses on Tamil identity and ecology',
      V: 'Naam Tamilar Katchi — Tamil-nationalist, ecology-focused, third-front',
      W: 'NTK — third-force; Seeman-led, ethno-nationalist + agrarian-ecological platform',
      E: 'NTK — third-force; only manifesto with structural fiscal sustainability framing'
    }
  };

  /**
   * Convert a money string like "₹16,440 Cr/yr" into tier-appropriate explanation.
   */
  function explainCost(costStr, tier) {
    if (!costStr || costStr === '—') return '';
    // Try to extract the crore number
    var m = costStr.match(/₹?\s*([\d,]+(?:\.\d+)?)\s*(?:[–-]\s*[\d,]+(?:\.\d+)?)?\s*Cr/i);
    if (!m) return costStr;
    var cr = parseFloat(m[1].replace(/,/g, ''));
    var recurring = /\/yr|annually|annual/i.test(costStr);
    var oneTime = /one[-\s]?time/i.test(costStr);
    var TN_TAX_REVENUE_CR = 200000; // ~₹2 lakh crore TN own-tax revenue
    var pct = (cr / TN_TAX_REVENUE_CR * 100);

    switch (tier) {
      case 'K': {
        // Convert to "if you collected ₹100 in pocket money, this scheme would eat ₹X"
        var perHundred = Math.round(pct);
        if (perHundred >= 1) {
          return `${costStr} — that's like spending ₹${perHundred} out of every ₹100 the state collects in tax`;
        }
        return `${costStr} — a small slice of the state budget`;
      }
      case 'T':
        return `${costStr} (≈ ${pct.toFixed(1)}% of TN's annual tax revenue${recurring ? ', every year' : oneTime ? ', one-time' : ''})`;
      case 'V':
        return `${costStr}${recurring ? ' (recurring annual cost)' : oneTime ? ' (one-time outlay)' : ''}`;
      case 'W':
        return `${costStr} ≈ ${pct.toFixed(2)}% of own-tax revenue${recurring ? ' (recurring; cumulative 5-yr ≈ ₹' + Math.round(cr*5).toLocaleString('en-IN') + ' Cr)' : ''}`;
      case 'E': {
        var debt_pct = (cr / 1071000 * 100); // TN debt ~₹10.71 L Cr
        var capex_pct = (cr / 60000 * 100);  // TN annual capex ~₹60K Cr
        return `${costStr} | ${pct.toFixed(2)}% own-tax · ${capex_pct.toFixed(1)}% annual capex · ${debt_pct.toFixed(2)}% of outstanding debt${recurring ? ' (perpetuity)' : ''}`;
      }
      default: return costStr;
    }
  }

  /**
   * Render a scheme at a given tier. Returns rich object the tooltip layer consumes.
   * scheme: { id, batchId, party, name, stars, cost, verdict, insight, pros[], cons[], worldContext, tnRelevance, categoryTitle }
   */
  function renderSchemeForTier(scheme, tierId) {
    var t = tierId || 'V';
    var verdictTxt = (VERDICT_HUMAN[scheme.verdict] || VERDICT_HUMAN.U)[t];
    var starTxt = (STAR_HUMAN[scheme.stars] || STAR_HUMAN[0])[t];
    var partyTxt = (PARTY_HUMAN[scheme.party] || { [t]: scheme.party })[t];
    var costTxt = explainCost(scheme.cost, t);

    var headlines = {
      K: `${partyTxt.split('—')[0].trim()} promises: ${simplifyName(scheme.name)}.`,
      T: `${scheme.party} proposes: ${scheme.name}`,
      V: `${scheme.party}: ${scheme.name}`,
      W: `${scheme.party} (${scheme.categoryTitle}): ${scheme.name}`,
      E: `${scheme.party} | Cat ${scheme.batchId} | ${scheme.name}`
    };

    return {
      tier: t,
      headline: headlines[t],
      stars: starTxt,
      party: partyTxt,
      cost: costTxt,
      verdict: verdictTxt,
      summary: framedSummary(scheme, t),
      pros: scheme.pros.map(function(p){ return simplifyLine(p, t); }),
      cons: scheme.cons.map(function(c){ return simplifyLine(c, t); }),
      context: framedContext(scheme, t),
      whyItMatters: framedRelevance(scheme, t)
    };
  }

  function simplifyName(name) {
    // Strip parenthetical Tamil names + dashes for kids
    return name.replace(/\s*[—–]\s*/g, ' — ').replace(/\([^)]*\)/g, '').trim();
  }

  function framedSummary(s, t) {
    var insight = s.insight || '';
    switch (t) {
      case 'K': return `Quick verdict: ${verdictKidLine(s)}. The grown-ups looking at this scheme say — ${kidify(insight)}.`;
      case 'T': return `Bottom line — ${insight}`;
      case 'V': return insight;
      case 'W': return `Recommendation: ${insight}. Verdict code: ${s.verdict}. Quality score: ${s.stars}/5.`;
      case 'E': return `Policy verdict: ${s.verdict}. Quality decile: ${qualityDecile(s.stars)}. Note: ${insight}`;
    }
  }

  function verdictKidLine(s) {
    if (s.verdict === 'I') return 'this is a good promise';
    if (s.verdict === 'C') return 'this promise is okay but needs careful planning';
    if (s.verdict === 'E') return 'this promise has more problems than help';
    if (s.verdict === 'R') return 'we need more information before saying';
    return "we can't really score this one";
  }

  function qualityDecile(stars) {
    if (stars >= 5) return 'top quintile';
    if (stars >= 4) return 'second quintile';
    if (stars === 3) return 'median';
    if (stars === 2) return 'fourth quintile';
    if (stars === 1) return 'bottom quintile';
    return 'unscored';
  }

  /** Convert dense political/economic prose to kid/teen-friendly. Lightweight, deterministic. */
  function kidify(text) {
    if (!text) return '';
    return text
      .replace(/₹\s*([\d,]+)\s*Cr/g, function(m, n){ return n + " crore rupees"; })
      .replace(/\bcapex\b/gi, 'building things like roads and hospitals')
      .replace(/\bGDP\b/g, "the state's total earnings")
      .replace(/\bSECC\b/g, 'a list of poor families')
      .replace(/\bcrowd[- ]?out\b/gi, 'take money away from')
      .replace(/\bopportunity cost\b/gi, 'what we give up')
      .replace(/\bfiscal\b/gi, 'money/budget')
      .replace(/\bmultiplier\b/gi, 'how much extra good it does')
      .replace(/\bsubsidy\b/gi, 'help with money')
      .replace(/\bsunset clause\b/gi, 'end-date rule')
      .replace(/\btargeting\b/gi, 'choosing only the right people')
      .replace(/\bSHG\b/g, "women's savings groups")
      .replace(/\bNPV\b/g, 'long-term value');
  }

  function teenify(text) {
    if (!text) return '';
    return text
      .replace(/\bSECC\b/g, 'SECC (the official poverty list)')
      .replace(/\bGDP\b/g, "GDP (the state's total income)")
      .replace(/\bSHG\b/g, "SHG (Self-Help Group of women)")
      .replace(/\bNPV\b/g, "NPV (long-term net value)");
  }

  /** Transform text for Policy Wonk tier — institutional language, implementation framing */
  function wonkify(text) {
    if (!text) return '';
    return text
      .replace(/\bfree\b/gi, 'zero-price (state-subsidised)')
      .replace(/\bwill help\b/gi, 'is designed to target')
      .replace(/\bjobs\b/gi, 'employment (direct + backward linkage)')
      .replace(/\bfarmers\b/gi, 'agricultural landholders')
      .replace(/\bpoor families\b/gi, 'BPL households (SECC 2011)')
      .replace(/\bevery year\b/gi, 'per annum (recurring liability)')
      .replace(/\bsave money\b/gi, 'achieve fiscal consolidation')
      .replace(/\bcut costs\b/gi, 'rationalise expenditure')
      .replace(/\bwaste\b/gi, 'leakage / deadweight loss')
      .replace(/\brisk\b/gi, 'implementation risk')
      .replace(/\btakes money from\b/gi, 'crowds out allocation from')
      .replace(/\btax revenue\b/gi, 'own-tax revenue (non-devolved)');
  }

  /** Transform text for Economist tier — fiscal multiplier language, opportunity cost framing */
  function economize(text) {
    if (!text) return '';
    return text
      .replace(/\bfree\b/gi, 'zero-marginal-cost (100% exchequer-funded)')
      .replace(/\bwill help\b/gi, 'is expected to yield positive externalities for')
      .replace(/\bjobs\b/gi, 'employment (direct + induced + multiplier)')
      .replace(/\bfarmers\b/gi, 'agricultural producer-households')
      .replace(/\bpoor families\b/gi, 'households below poverty line (Tendulkar methodology)')
      .replace(/\bevery year\b/gi, 'per annum (perpetuity assumption for NPV)')
      .replace(/\bsave money\b/gi, 'reduce fiscal deficit ratio')
      .replace(/\bcut costs\b/gi, 'compress the expenditure-to-GSDP ratio')
      .replace(/\bwaste\b/gi, 'deadweight loss')
      .replace(/\brisk\b/gi, 'variance in expected outcome')
      .replace(/\bgrowth\b/gi, 'marginal output growth')
      .replace(/\bspending\b/gi, 'fiscal outlay')
      .replace(/\btakes money from\b/gi, 'crowds out capital expenditure on')
      .replace(/\btax revenue\b/gi, 'own-tax revenue (GSDP-normalised)');
  }

  function simplifyLine(line, tier) {
    if (!line) return '';
    if (tier === 'K') return kidify(line);
    if (tier === 'T') return teenify(line);
    if (tier === 'W') return wonkify(line);
    if (tier === 'E') return economize(line);
    return line;
  }

  function framedContext(s, t) {
    var ctx = s.worldContext || '';
    if (!ctx) return '';
    if (t === 'K') return 'Other countries tried something like this: ' + kidify(shortest(ctx));
    if (t === 'T') return 'How other places handled it: ' + teenify(shortest(ctx));
    if (t === 'V') return ctx;
    if (t === 'W') return 'Comparative policy evidence — ' + wonkify(ctx) + ' Implementation pathway analysis required for TN-specific adaptation.';
    if (t === 'E') return 'Cross-country empirical comparators — ' + economize(ctx) + ' Caution: external validity of natural experiments across jurisdictions remains contested (Deaton 2010).';
  }

  function framedRelevance(s, t) {
    var rel = s.tnRelevance || '';
    if (!rel) return '';
    if (t === 'K') return 'Why this matters in Tamil Nadu: ' + kidify(shortest(rel));
    if (t === 'T') return 'Why this matters for TN: ' + teenify(shortest(rel));
    if (t === 'V') return rel;
    if (t === 'W') return 'TN binding constraints & implementation capacity — ' + wonkify(rel);
    if (t === 'E') return 'TN baseline parameters & elasticity assumptions — ' + economize(rel);
  }

  /** First sentence — for kids/teens we trim aggressively. */
  function shortest(text) {
    if (!text) return '';
    var m = text.match(/^[^.!?]+[.!?]/);
    return m ? m[0] : text.slice(0, 160) + (text.length > 160 ? '…' : '');
  }

  // ============================================================
  // UI String tooltips — generic concepts used across the site
  // ============================================================
  // Format: { K: '...', T: '...', V: '...', W: '...', E: '...' }
  var UI_GLOSSARY = {
    'manifesto': {
      K: 'A list of promises a party makes before an election. Like a wish-list.',
      T: 'The official document where a party lists what they will do if elected.',
      V: "A party's pre-election promise document.",
      W: 'Election-cycle policy commitment document; basis for accountability tracking post-election.',
      E: 'Pre-election commitment instrument; rarely fiscally costed; signals voter-targeting strategy.'
    },
    'verdict': {
      K: 'What the experts think — should we keep this promise or not?',
      T: 'Our recommendation: include, exclude, conditional, review, or unratable.',
      V: 'Recommendation: Include / Conditional / Exclude / Review / Unratable.',
      W: 'Five-state classification across cost-effectiveness, fiscal sustainability, and welfare impact axes.',
      E: 'Policy disposition derived from cost-benefit, fiscal-multiplier, and crowding-out analysis.'
    },
    'stars': {
      K: 'Out of 5 stars — like rating a movie. More stars = better promise.',
      T: 'Quality rating from 1 to 5 stars.',
      V: 'Quality score (1–5) based on cost, evidence, and impact.',
      W: 'Composite quality decile — combines cost-effectiveness, evidence base, and second-order effects.',
      E: 'Quintile-based quality rank: cost-effectiveness × evidence-strength × multiplier-magnitude.'
    },
    'cost': {
      K: 'How much money the promise will cost to keep.',
      T: 'The estimated price tag of the scheme — usually per year.',
      V: 'Annual or one-time fiscal cost.',
      W: 'Estimated annual outlay; recurring vs one-time distinction noted.',
      E: 'Nominal cost; expressed as % of own-tax revenue, % of capex, and % of outstanding debt for opportunity-cost framing.'
    },
    'category': {
      K: 'A group — like grouping toys by type. We grouped 174 promises into 7 baskets.',
      T: 'One of 7 themes the manifestos cover.',
      V: 'Thematic grouping (7 categories total).',
      W: 'Sectoral cluster used for cross-party comparison.',
      E: 'Sectoral aggregation enabling marginal-rate comparison across competing parties within the same expenditure envelope.'
    },
    'party': {
      K: 'A group of people who want to run the state. There are many such groups.',
      T: 'A political organisation contesting the election.',
      V: 'A registered political party contesting TN 2026.',
      W: 'Electoral vehicle with distinct ideology, alliance position, and voter base.',
      E: 'Electoral firm competing for vote-share; manifesto = signaling instrument to median voter.'
    },
    'pros': { K: 'Good things about this promise.',  T: 'Arguments for keeping the promise.', V: 'Reasons in favour.', W: 'Supporting arguments.', E: 'Pro-side cost-benefit factors.' },
    'cons': { K: 'Bad things about this promise.',   T: 'Arguments against the promise.',     V: 'Reasons against.',   W: 'Counter-arguments.',  E: 'Con-side cost-benefit factors.' },
    'world-context': {
      K: 'What other countries tried that was similar.',
      T: 'How other places handled a similar idea.',
      V: 'Evidence from comparable schemes worldwide.',
      W: 'Comparative empirical record.',
      E: 'Cross-country natural-experiment comparators.'
    },
    'tn-relevance': {
      K: 'Why this matters in Tamil Nadu.',
      T: 'Why TN specifically should care.',
      V: 'TN-specific context and constraints.',
      W: 'State-level baseline + binding constraints.',
      E: 'TN baseline parameters + state-specific elasticity assumptions.'
    },
    'forecast': {
      K: 'Our guess of who will win — like guessing who wins a cricket match.',
      T: 'Predicted seat count under different scenarios.',
      V: 'Scenario-based seat projection.',
      W: 'Multi-scenario seat-share model with named alliance configurations.',
      E: 'Stochastic seat-projection across 7 alliance scenarios; first-past-the-post translation of vote-share.'
    },
    'ntk': {
      K: 'NTK is a small party that talks a lot about saving Tamil things.',
      T: 'NTK = Naam Tamilar Katchi. Small party, Tamil-identity focus.',
      V: 'NTK — Naam Tamilar Katchi; third-front, ethno-cultural platform.',
      W: 'NTK — Seeman-led; agrarian-ecological + ethno-nationalist platform; vote-splitter risk for Dravidian majors.',
      E: 'NTK — only manifesto with structural fiscal-sustainability framing; otherwise minimal seat math.'
    },
    'money': {
      K: 'Where the state gets money and where it spends it.',
      T: 'TN budget basics — income from tax, spending on welfare and roads.',
      V: 'Fiscal snapshot — revenue, expenditure, debt.',
      W: 'TN public finance: own-tax revenue, devolution, debt-servicing, capex/revex split.',
      E: 'TN consolidated fund: ₹2L Cr own-tax, ₹10.71L Cr debt, ₹60K Cr capex, debt/GSDP ratio approaching FRBM limit.'
    },
    'spotlight': {
      K: 'The very best promises — like the gold-medal ones.',
      T: 'The 5-star schemes — best of the best.',
      V: 'Top-rated (5★) schemes across all parties.',
      W: 'Best-in-class schemes; quintile leaders for replication candidacy.',
      E: 'Top-quintile schemes — highest cost-effectiveness × evidence-strength × multiplier composite.'
    },
    'deepdive': {
      K: 'Looking at every single promise one by one.',
      T: 'Detailed analysis of all 174 schemes.',
      V: 'Full per-scheme analysis (174 schemes).',
      W: 'Granular per-scheme analysis with verdict, evidence, and TN-specific context.',
      E: 'Scheme-level cost-benefit notation with comparative empirics.'
    }
  };

  // ============================================================
  // Public API
  // ============================================================
  window.AudienceTiers = {
    TIERS,
    VERDICT_HUMAN,
    STAR_HUMAN,
    PARTY_HUMAN,
    UI_GLOSSARY,
    renderSchemeForTier,
    explainCost,
    kidify, teenify, wonkify, economize,
    /** Get current saved tier or default to 'V'. */
    current() {
      try { return localStorage.getItem('tn26_tier') || 'V'; } catch (e) { return 'V'; }
    },
    /** Set + persist current tier. Fires 'tn26:tier-change' on document. */
    setCurrent(t) {
      if (!TIERS.find(function(x){ return x.id === t; })) return;
      try { localStorage.setItem('tn26_tier', t); } catch (e) {}
      document.dispatchEvent(new CustomEvent('tn26:tier-change', { detail: { tier: t } }));
    },
    /** Look up a UI glossary entry at a given tier (or current). */
    glossary(key, tier) {
      var t = tier || window.AudienceTiers.current();
      var entry = UI_GLOSSARY[key];
      if (!entry) return null;
      return entry[t] || entry.V || '';
    }
  };
})();
