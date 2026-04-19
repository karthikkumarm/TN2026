/* ============================================================
 * TN 2026 — Policy Link Mapping for Existing Manifesto Schemes
 * ============================================================
 * Maps manifesto scheme indices (from D[] array) to relevant
 * existing TN/Central government policy portals where applicable.
 *
 * Format: POLICY_LINKS[schemeIndex] = { url, label, existing }
 *   - url: government portal link
 *   - label: short description of which policy applies
 *   - existing: true if TN already has this policy in some form
 * ============================================================ */

(function () {
  'use strict';

  // Scheme indices mapped to relevant government portals.
  // Only schemes with a clear policy linkage are included.
  var POLICY_LINKS = {
    // Batch 1: Women & Family Welfare
    0: { url: 'https://tnlegalservices.tn.gov.in/', label: 'TN Legal Services Authority', existing: true },
    1: { url: 'https://icds.tn.gov.in/', label: 'TN ICDS — Integrated Child Development', existing: true },
    2: { url: 'https://skhm.tn.gov.in/', label: 'TN Social Welfare — Kalaignar Insurance', existing: true },
    3: { url: 'https://www.tn.gov.in/scheme', label: 'TN Schemes Portal', existing: false },

    // Batch 2: Education, Youth, Employment, Technology
    4: { url: 'https://www.naanmudhalvan.tn.gov.in/', label: 'Naan Mudhalvan — Skills Platform', existing: true },
    5: { url: 'https://emis.tn.gov.in/', label: 'TN EMIS — Education Monitoring', existing: true },
    6: { url: 'https://www.startuptn.in/', label: 'StartupTN — Startup Ecosystem', existing: true },
    7: { url: 'https://tnvelaivaaippu.gov.in/', label: 'TN Employment Exchange', existing: true },

    // Batch 3: Agriculture, Farmers, Fishermen
    10: { url: 'https://www.tn.gov.in/department/2', label: 'TN Agriculture Department', existing: true },
    11: { url: 'https://www.tn.gov.in/department/2', label: 'TN Agriculture — Crop Insurance', existing: true },
    12: { url: 'https://fisheries.tn.gov.in/', label: 'TN Fisheries Department', existing: true },

    // Batch 4: Healthcare, Social Security
    14: { url: 'https://cmchistn.com/', label: 'CMCHIS — Chief Minister Health Insurance', existing: true },
    15: { url: 'https://skhm.tn.gov.in/', label: 'TN Health — Kalaignar Insurance', existing: true },
    16: { url: 'https://www.tnhealth.tn.gov.in/', label: 'TN Public Health Department', existing: true },

    // Batch 5: Housing, Infrastructure, Urban
    20: { url: 'https://www.tnhb.tn.gov.in/', label: 'TN Housing Board', existing: true },
    21: { url: 'https://tnurbanepay.tn.gov.in/', label: 'TN Urban e-Pay Portal', existing: true },
    22: { url: 'https://www.cmda.gov.in/', label: 'CMDA — Chennai Metro Development', existing: true },
    23: { url: 'https://sipcotweb.tn.gov.in/', label: 'SIPCOT — Industrial Parks', existing: true },

    // Batch 6: Governance, Autonomy
    26: { url: 'https://tnsta.gov.in/', label: 'TN State Commission', existing: true },

    // Batch 7: Tamil Identity, Ecology, Culture
    30: { url: 'https://www.tn.gov.in/tamilculture', label: 'TN Tamil Culture Department', existing: true },
    31: { url: 'https://teda.in/', label: 'TEDA — TN Energy Development Agency', existing: true }
  };

  // Check if a scheme index has a policy link
  function hasPolicy(schemeIdx) {
    return POLICY_LINKS.hasOwnProperty(schemeIdx);
  }

  // Get policy link HTML for a scheme index
  function getPolicyHtml(schemeIdx) {
    var p = POLICY_LINKS[schemeIdx];
    if (!p) return '';
    var badge = p.existing
      ? '<span style="display:inline-block;font-size:10px;padding:2px 6px;border-radius:4px;background:rgba(46,204,113,.15);color:#2ECC71;font-weight:700;margin-right:6px">EXISTING POLICY</span>'
      : '<span style="display:inline-block;font-size:10px;padding:2px 6px;border-radius:4px;background:rgba(230,126,34,.15);color:#E67E22;font-weight:700;margin-right:6px">PROPOSED</span>';
    return '<div style="padding:10px 14px;margin-top:10px;border-radius:8px;background:rgba(200,146,42,.06);border:1px solid rgba(200,146,42,.15);font-size:12px">'
      + badge
      + '<a href="' + p.url + '" target="_blank" rel="noopener" style="color:#C8922A;font-weight:600">' + p.label + ' ↗</a>'
      + '</div>';
  }

  window.PolicyLinks = {
    POLICY_LINKS: POLICY_LINKS,
    hasPolicy: hasPolicy,
    getPolicyHtml: getPolicyHtml
  };

})();
