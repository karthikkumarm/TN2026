(function(){
'use strict';

var REGIONS = [
  {
    name: 'Chennai Metro',
    icon: '🏙️',
    districts: [
      { name: 'Chennai', tier: 'A', industries: ['IT/ITES', 'Automobiles', 'Financial Services', 'GCC Hub', 'Logistics'],
        companies: ['TCS', 'Cognizant', 'Hyundai', 'Ashok Leyland', 'Freshworks', 'Zoho'], 
        advantages: ['Major port city', '100+ GCCs', 'SaaS capital of India', 'GSDP contributor #1'],
        opportunities: 'IT, SaaS startups, fintech, GCC services, auto ancillaries, logistics' },
      { name: 'Chengalpattu', tier: 'A', industries: ['Automobiles', 'Electronics', 'Pharma', 'SEZ'],
        companies: ['Ford (closed)', 'Samsung', 'Mahindra World City', 'Renault-Nissan'],
        advantages: ['SEZ ecosystem', 'Proximity to Chennai', 'Auto corridor'],
        opportunities: 'Auto components, electronics assembly, pharma, SEZ-based manufacturing' },
      { name: 'Tiruvallur', tier: 'A', industries: ['Electronics', 'Automobiles', 'Heavy Industry', 'Port'],
        companies: ['Foxconn', 'Flextronics', 'Kamarajar Port', 'CPCL Refinery'],
        advantages: ['Sriperumbudur electronics cluster', 'India\'s largest smartphone assembly zone', 'Dual port access'],
        opportunities: 'Electronics manufacturing, EV components, port logistics, refinery ancillaries' },
      { name: 'Kancheepuram', tier: 'B', industries: ['Silk weaving', 'Auto components', 'Tourism'],
        companies: ['Various silk cooperatives', 'Auto ancillary units'],
        advantages: ['UNESCO heritage potential', 'Silk weaving tradition', 'Temple tourism'],
        opportunities: 'Heritage tourism, silk e-commerce, auto ancillaries, food processing' }
    ]
  },
  {
    name: 'Northern TN',
    icon: '🏔️',
    districts: [
      { name: 'Vellore', tier: 'B', industries: ['Leather', 'Healthcare', 'Education'],
        companies: ['VIT University', 'CMC Vellore', 'Leather units (Ambur/Ranipet)'],
        advantages: ['Leather processing hub (Ambur, Ranipet, Vaniyambadi)', 'Premium medical tourism'],
        opportunities: 'Leather products, medical tourism, education services, health tech' },
      { name: 'Ranipet', tier: 'B', industries: ['Leather', 'Chemicals', 'SIPCOT complex'],
        companies: ['SIPCOT Ranipet', 'Leather tanneries'],
        advantages: ['Established SIPCOT industrial complex', 'Leather cluster'],
        opportunities: 'Leather processing, chemical manufacturing, industrial services' },
      { name: 'Tiruvannamalai', tier: 'C', industries: ['Spiritual tourism', 'Agriculture', 'Handloom'],
        companies: ['Sri Ramanasramam tourism ecosystem'],
        advantages: ['Major pilgrimage center', 'Girivalam circuit tourism'],
        opportunities: 'Spiritual tourism, organic farming, handloom textiles, wellness retreats' },
      { name: 'Villupuram', tier: 'C', industries: ['Agriculture', 'Cashew processing', 'Sugarcane'],
        companies: ['Sugarcane mills', 'Cashew processing units'],
        advantages: ['Agricultural heartland', 'Proximity to Puducherry'],
        opportunities: 'Agri-processing, cashew value addition, sugarcane by-products' },
      { name: 'Krishnagiri', tier: 'B', industries: ['Horticulture (Mango)', 'Granite', 'EV manufacturing'],
        companies: ['Ola Electric', 'Granite quarries', 'Mango export clusters'],
        advantages: ['India\'s mango capital', 'Hosur industrial corridor', 'EV hub emerging'],
        opportunities: 'EV manufacturing, mango processing/export, granite industry, electronics' },
      { name: 'Dharmapuri', tier: 'C', industries: ['Agriculture', 'Horticulture', 'Small-scale manufacturing'],
        companies: ['Various agri-businesses'],
        advantages: ['Horticultural diversity', 'Low land costs'],
        opportunities: 'Fruit processing, dairy, small-scale manufacturing' },
      { name: 'Tirupattur', tier: 'C', industries: ['Leather', 'Agriculture', 'Small industry'],
        companies: ['Leather units (Vaniyambadi)'],
        advantages: ['Leather belt extension', 'Low costs'],
        opportunities: 'Leather goods, agri-processing, small-scale industry' }
    ]
  },
  {
    name: 'Western TN (Kongu Belt)',
    icon: '🏭',
    districts: [
      { name: 'Coimbatore', tier: 'A', industries: ['Textiles', 'Pumps/Motors', 'Engineering', 'IT', 'Jewelry'],
        companies: ['LMW', 'Elgi Equipments', 'Pricol', 'Roots Group', 'KG Group'],
        advantages: ['"Manchester of South India"', '~50% of India\'s pump/motor output', 'Strong SME ecosystem'],
        opportunities: 'Textile machinery, pump/motor manufacturing, IT services, engineering, jewelry' },
      { name: 'Tiruppur', tier: 'A', industries: ['Knitwear/Garments', 'Textiles'],
        companies: ['TEA members (5000+ units)', 'Various knitwear exporters'],
        advantages: ['"Knitwear Capital of India"', '$3.5-4B exports', '600,000+ employed'],
        opportunities: 'Garment manufacturing, textile tech, sustainable fashion, fabric innovation' },
      { name: 'Erode', tier: 'B', industries: ['Textiles', 'Turmeric', 'Handloom'],
        companies: ['Turmeric market (India\'s largest)', 'Textile units'],
        advantages: ['India\'s largest turmeric market', 'Strong handloom tradition'],
        opportunities: 'Turmeric value-addition, textiles, organic farming, agri-tech' },
      { name: 'Salem', tier: 'B', industries: ['Steel', 'Textiles', 'Agriculture', 'Mangoes'],
        companies: ['Salem Steel Plant (SAIL)', 'Various steel re-rolling mills'],
        advantages: ['Major steel cluster', 'Salem-Chennai corridor development'],
        opportunities: 'Steel products, auto parts, textiles, mango processing' },
      { name: 'Namakkal', tier: 'B', industries: ['Poultry', 'Transport/Trucks', 'Eggs'],
        companies: ['India\'s egg capital — poultry farms', 'Transport companies'],
        advantages: ['"Egg City of India"', 'Major trucking hub', '~35% of India\'s egg production'],
        opportunities: 'Poultry tech, cold chain logistics, truck/transport services, feed manufacturing' },
      { name: 'Karur', tier: 'B', industries: ['Home textiles', 'Banking'],
        companies: ['Karur Vysya Bank', 'Textile exporters'],
        advantages: ['Home textile export hub', 'Strong banking tradition'],
        opportunities: 'Home textiles (towels, bed linen), banking services, e-commerce' },
      { name: 'Nilgiris', tier: 'B', industries: ['Tea', 'Tourism', 'Horticulture'],
        companies: ['Tea estates', 'Tourism operators'],
        advantages: ['Premium tea production', 'Hill station tourism', 'Cool climate agriculture'],
        opportunities: 'Tea export, eco-tourism, specialty horticulture, wellness tourism' },
      { name: 'Dindigul', tier: 'C', industries: ['Locks', 'Tanneries', 'Agriculture'],
        companies: ['"Lock City" — 3000+ lock units'],
        advantages: ['India\'s lock manufacturing capital', 'Leather tanning cluster'],
        opportunities: 'Security hardware, leather products, food processing' }
    ]
  },
  {
    name: 'Central TN',
    icon: '🌾',
    districts: [
      { name: 'Tiruchirappalli (Trichy)', tier: 'A', industries: ['Heavy Engineering', 'Defense', 'Education'],
        companies: ['BHEL', 'OFT (Ordnance Factory)', 'NIT Trichy', 'HAPP'],
        advantages: ['Major defense & heavy engineering hub', 'Premium education cluster', 'Airport connectivity'],
        opportunities: 'Defense ancillaries, heavy engineering, education tech, tourism' },
      { name: 'Madurai', tier: 'A', industries: ['Tourism', 'Textiles', 'Automobile', 'IT emerging'],
        companies: ['Meenakshi Temple tourism ecosystem', 'Various textile units', 'IT parks'],
        advantages: ['Major temple city — millions of pilgrims/year', 'Airport hub for southern TN', 'Growing IT sector'],
        opportunities: 'Heritage tourism, textiles, IT/BPO, food processing, auto services' },
      { name: 'Thanjavur', tier: 'B', industries: ['Rice', 'Art/Crafts', 'Tourism'],
        companies: ['Rice mills', 'Tanjore art workshops'],
        advantages: ['"Rice Bowl of Tamil Nadu"', 'UNESCO heritage (Big Temple)', 'Classical arts center'],
        opportunities: 'Rice export, heritage tourism, art/craft e-commerce, cultural experiences' },
      { name: 'Sivaganga', tier: 'C', industries: ['Agriculture', 'Chettinad tourism'],
        companies: ['Chettinad hotels', 'Agricultural cooperatives'],
        advantages: ['Chettinad heritage architecture', 'Historical banking community legacy'],
        opportunities: 'Heritage tourism, hospitality, agri-processing' },
      { name: 'Pudukkottai', tier: 'C', industries: ['Agriculture', 'Granite', 'Small industry'],
        companies: ['Granite quarries'],
        advantages: ['Granite deposits', 'Historical heritage'],
        opportunities: 'Granite processing, agriculture, rural tourism' },
      { name: 'Ariyalur', tier: 'C', industries: ['Cement', 'Limestone', 'Agriculture'],
        companies: ['Dalmia Cement', 'India Cements'],
        advantages: ['Major limestone/cement cluster'],
        opportunities: 'Cement manufacturing, construction materials, agri-processing' }
    ]
  },
  {
    name: 'Southern TN',
    icon: '🌊',
    districts: [
      { name: 'Thoothukudi (Tuticorin)', tier: 'B', industries: ['Port', 'Salt', 'Thermal Power', 'Marine'],
        companies: ['VOC Port', 'Tuticorin Alkali Chemicals', 'Salt pans'],
        advantages: ['Major port — gateway for southern TN exports', 'Salt production hub', 'Upcoming industrial corridor'],
        opportunities: 'Port-based logistics, salt/chemical manufacturing, marine products, trade facilitation' },
      { name: 'Tirunelveli', tier: 'B', industries: ['Agriculture', 'Windmill/Renewable', 'Education'],
        companies: ['Wind farms (Muppandal cluster)', 'Manonmaniam Sundaranar University'],
        advantages: ['Major wind energy corridor', 'Educational hub for southern TN'],
        opportunities: 'Renewable energy, agri-processing, education services, banana export' },
      { name: 'Kanyakumari', tier: 'B', industries: ['Tourism', 'Rubber', 'Fisheries', 'Renewable Energy'],
        companies: ['Tourism operators', 'Rubber estates'],
        advantages: ['India\'s southern tip — iconic tourism', 'Wind/solar energy potential'],
        opportunities: 'Tourism, rubber products, marine/fisheries, renewable energy' },
      { name: 'Virudhunagar', tier: 'B', industries: ['Fireworks', 'Matches', 'Printing'],
        companies: ['Sivakasi fireworks cluster (~90% of India\'s fireworks)', 'Printing/offset cluster'],
        advantages: ['"Mini Japan" — Sivakasi printing hub', '90% of India\'s fireworks from Sivakasi'],
        opportunities: 'Fireworks/pyrotechnics, printing/publishing, match manufacturing, safety equipment' },
      { name: 'Ramanathapuram', tier: 'C', industries: ['Fisheries', 'Salt', 'Tourism'],
        companies: ['Fishing cooperatives', 'Rameswaram tourism'],
        advantages: ['Major fishing coast', 'Rameswaram pilgrimage tourism'],
        opportunities: 'Marine products, religious tourism, seaweed cultivation, salt' },
      { name: 'Theni', tier: 'C', industries: ['Agriculture', 'Cardamom', 'Tourism'],
        companies: ['Spice gardens', 'Cardamom estates'],
        advantages: ['Cardamom and spice production', 'Hill station proximity (Meghamalai)'],
        opportunities: 'Spice processing/export, eco-tourism, organic farming' },
      { name: 'Tenkasi', tier: 'C', industries: ['Agriculture', 'IT (Zoho)'],
        companies: ['Zoho Corporation (HQ moved here)'],
        advantages: ['Zoho\'s rural IT experiment', 'Low cost base'],
        opportunities: 'IT/BPO (Zoho ecosystem), agri-processing, rural tech' },
      { name: 'Kanniyakumari', tier: 'B', industries: ['Rubber', 'Fisheries', 'Tourism'],
        companies: ['Rubber estates', 'Tourism operators'],
        advantages: ['Tourist landmark', 'Renewable energy', 'Rubber production'],
        opportunities: 'Tourism, rubber products, renewable energy, fisheries' },
      { name: 'Perambalur', tier: 'C', industries: ['Agriculture', 'Dairy'],
        companies: ['Dairy cooperatives'],
        advantages: ['Low cost', 'Agricultural potential'],
        opportunities: 'Dairy processing, agricultural value addition' }
    ]
  },
  {
    name: 'Delta Region',
    icon: '🌿',
    districts: [
      { name: 'Nagapattinam', tier: 'C', industries: ['Fisheries', 'Agriculture', 'Temple tourism'],
        companies: ['Fishing cooperatives', 'Agricultural markets'],
        advantages: ['Historical port city (Chola era)', 'Marine resources'],
        opportunities: 'Marine products, heritage tourism, agri-processing' },
      { name: 'Tiruvarur', tier: 'C', industries: ['Agriculture (Rice)', 'Classical music/arts'],
        companies: ['Rice mills', 'Music/arts organizations'],
        advantages: ['"Land of the Saints"', 'Tyagaraja music heritage', 'Rich paddy land'],
        opportunities: 'Rice export, cultural tourism, agri-processing' },
      { name: 'Mayiladuthurai', tier: 'C', industries: ['Agriculture', 'Temple tourism'],
        companies: ['Agricultural cooperatives'],
        advantages: ['Temple town', 'Fertile delta land'],
        opportunities: 'Agri-processing, temple tourism, organic farming' },
      { name: 'Cuddalore', tier: 'B', industries: ['Chemicals/Petrochemicals', 'SIPCOT', 'Port'],
        companies: ['SIPCOT Cuddalore complex', 'Chemical industries'],
        advantages: ['Major SIPCOT chemical/petrochemical complex', 'Minor port'],
        opportunities: 'Chemical manufacturing, pharma, industrial services' },
      { name: 'Kallakurichi', tier: 'C', industries: ['Agriculture', 'Small industry'],
        companies: ['Agricultural cooperatives'],
        advantages: ['Agricultural potential', 'Low costs'],
        opportunities: 'Agri-processing, small-scale manufacturing' }
    ]
  }
];

/* Tier summary for the whole district section */
var DISTRICT_INTRO = {
  K: 'Tamil Nadu has 38 districts, and each one is like a special character in a video game — each has unique powers! Some make cars, some grow rice, some catch fish, and some write computer code. Let\'s explore what makes each area special!',
  T: 'Tamil Nadu\'s 38 districts are incredibly diverse economically. Chennai is the tech and auto hub, Coimbatore is the pump capital, Tiruppur makes T-shirts for the world, Sivakasi makes fireworks, and Namakkal produces a third of India\'s eggs. Here\'s what each district offers for business.',
  V: 'Tamil Nadu\'s 38 districts span Tier A (mature industrial ecosystems like Chennai, Coimbatore, Trichy) to Tier C (emerging opportunities with lower costs). Each district offers distinct advantages based on existing industry clusters, infrastructure, and natural resources.',
  W: 'The district-level economic mapping reveals spatial concentration patterns: manufacturing corridors (Chennai-Sriperumbudur-Hosur), agro-processing belts (Delta, Kongu), and specialized clusters (Sivakasi fireworks, Namakkal poultry, Tiruppur textiles). Policy intervention efficacy varies significantly by district tier.',
  E: 'District-level analysis reveals classic core-periphery dynamics: Tier A districts (Chennai Metro, Coimbatore, Trichy) exhibit agglomeration economies with diversified industrial bases, while Tier C districts offer factor cost advantages (land, labor) suitable for labor-intensive or resource-proximate industries. The spatial distribution of economic activity follows transport corridor logic (NH/rail connectivity) and cluster-formation dynamics.'
};

/* Helper: get districts by economic tier */
function getByTier(tierLetter){
  var results = [];
  for(var r = 0; r < REGIONS.length; r++){
    for(var d = 0; d < REGIONS[r].districts.length; d++){
      if(REGIONS[r].districts[d].tier === tierLetter){
        var dist = REGIONS[r].districts[d];
        dist.region = REGIONS[r].name;
        results.push(dist);
      }
    }
  }
  return results;
}

/* Helper: search districts */
function search(query){
  query = query.toLowerCase();
  var results = [];
  for(var r = 0; r < REGIONS.length; r++){
    for(var d = 0; d < REGIONS[r].districts.length; d++){
      var dist = REGIONS[r].districts[d];
      var haystack = (dist.name + ' ' + dist.industries.join(' ') + ' ' + dist.opportunities).toLowerCase();
      if(haystack.indexOf(query) !== -1){
        var copy = {};
        for(var k in dist) copy[k] = dist[k];
        copy.region = REGIONS[r].name;
        results.push(copy);
      }
    }
  }
  return results;
}

window.DistrictData = {
  REGIONS: REGIONS,
  DISTRICT_INTRO: DISTRICT_INTRO,
  getByTier: getByTier,
  search: search
};

})();
