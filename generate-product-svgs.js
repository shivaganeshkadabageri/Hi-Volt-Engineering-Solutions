const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const products = [
  {
    filename: 'partial-discharge-meter.svg',
    title: 'Partial Discharge Meter',
    subtitle: 'Calibrated pC / DTM / AKV-D / PDG',
    code: 'IEC 60270 / IS 2071',
    color: '#0284C7',
    iconType: 'pulse-scope'
  },
  {
    filename: 'vertical-oil-test-cell.svg',
    title: 'Vertical Oil Test Cell',
    subtitle: 'ASTM D3300 Dielectric Cell',
    code: 'ASTM D3300 / IEC 60060',
    color: '#F59E0B',
    iconType: 'vertical-cell'
  },
  {
    filename: 'horizontal-oil-test-cell.svg',
    title: 'Horizontal Oil Test Cell',
    subtitle: 'HV Dielectric Oil Vessel',
    code: 'IEC 60156 / IS 6792',
    color: '#0284C7',
    iconType: 'horizontal-cell'
  },
  {
    filename: 'impulse-test-set-oil.svg',
    title: 'Impulse Test Set for Oil',
    subtitle: 'Lightning Breakdown Bench',
    code: 'ASTM D3300 / IEC 60060',
    color: '#F59E0B',
    iconType: 'oil-impulse'
  },
  {
    filename: 'sphere-gap-250mm.svg',
    title: 'Sphere Gap Ø250 mm',
    subtitle: 'Measuring & Chopping Spark Gap',
    code: 'IEC 60052 / IS 2071',
    color: '#0284C7',
    iconType: 'sphere-gap'
  },
  {
    filename: 'impulse-voltage-generator-300kv.svg',
    title: 'Impulse Voltage Generator',
    subtitle: '300 kV / 15 kJ Marx Circuit',
    code: 'IEC 60060 / 1.2/50 µs',
    color: '#F59E0B',
    iconType: 'marx-generator'
  },
  {
    filename: 'dc-test-set-140kv.svg',
    title: 'DC Single Stage Test Set',
    subtitle: '140 kV / 25 mA HV DC Set',
    code: 'IEC 60060 / IS 2071',
    color: '#0284C7',
    iconType: 'dc-set'
  },
  {
    filename: 'dc-two-stage-280kv.svg',
    title: 'DC Two Stage Cascade Set',
    subtitle: '280 kV / 20 mA Cascaded DC',
    code: 'IEC 60060 / IS 2071',
    color: '#0284C7',
    iconType: 'dc-cascade'
  },
  {
    filename: 'dc-capacitor-test-set.svg',
    title: 'DC Power Capacitor Test Set',
    subtitle: 'Proof & Surge Absorption System',
    code: 'IEC 60871 / IS 13925',
    color: '#F59E0B',
    iconType: 'capacitor-set'
  },
  {
    filename: 'ac-test-set-100kv.svg',
    title: 'AC High Voltage Test Set',
    subtitle: '100 kV / 20 kVA Low-PD Set',
    code: 'IEC 60060 / IS 2071',
    color: '#0284C7',
    iconType: 'ac-transformer'
  },
  {
    filename: 'ac-test-set-200kv.svg',
    title: 'AC High Voltage Test Set',
    subtitle: '200 kV / 20 kVA Power Frequency',
    code: 'IEC 60060 / IS 2071',
    color: '#0284C7',
    iconType: 'ac-transformer'
  },
  {
    filename: 'ac-test-set-300kv.svg',
    title: 'AC High Voltage Test Set',
    subtitle: '300 kV / 20 kVA Transmission Class',
    code: 'IEC 60060 / IS 2071',
    color: '#0284C7',
    iconType: 'ac-transformer'
  },
  {
    filename: 'impulse-resistors-inductors.svg',
    title: 'Impulse Resistors & Inductors',
    subtitle: '1 Ω–10 MΩ | 1 µH–1 H Wave-Shaping',
    code: 'IEC 60060-1 / IS 2071',
    color: '#F59E0B',
    iconType: 'wave-shaping'
  },
  {
    filename: 'shunt-high-current.svg',
    title: 'High Current Measuring Shunt',
    subtitle: '0.1 Ω / Up to 100 kA Coaxial',
    code: 'IEC 62475 / IS 2071',
    color: '#0284C7',
    iconType: 'shunt'
  },
  {
    filename: 'modular-hv-system.svg',
    title: 'Modular High Voltage Test System',
    subtitle: 'Single / Two / Three Stage (100kV AC / Up to 420kV)',
    code: 'IEC 60060 & IS 2071 Certified',
    color: '#0284C7',
    iconType: 'modular-system'
  },
  {
    filename: 'ac-test-transformer-300kv-300kva.svg',
    title: 'AC Test Transformer',
    subtitle: '300 kV / 300 kVA Heavy Industrial Duty',
    code: 'IEC 60060 / IS 2071',
    color: '#0284C7',
    iconType: 'large-transformer'
  },
  {
    filename: 'impulse-generator-1200kv.svg',
    title: 'Impulse Voltage Generator',
    subtitle: '1200 kV / 120 kJ EHV Multi-Stage',
    code: 'IEC 60060 / IEC 60099 Arrester Test',
    color: '#F59E0B',
    iconType: 'large-impulse'
  },
  {
    filename: 'impulse-current-generator-600kv.svg',
    title: 'Impulse Current Generator',
    subtitle: '600 kV / 25 kA Surge Current System',
    code: 'IEC 60099-4 / IEC 62475',
    color: '#F59E0B',
    iconType: 'current-impulse'
  },
  {
    filename: 'impulse-steep-front.svg',
    title: 'Impulse Steep Front Testing',
    subtitle: '> 1000 kV/µs Rate of Rise',
    code: 'IEC 61109 / Polymer Insulators',
    color: '#F59E0B',
    iconType: 'steep-front'
  }
];

function renderGraphic(type) {
  switch (type) {
    case 'pulse-scope':
      return `
        <!-- Display Frame -->
        <rect x="220" y="80" width="360" height="190" rx="12" fill="#0B132B" stroke="#0284C7" stroke-width="2.5" />
        <!-- Grid Lines -->
        <path d="M240 175 H560 M400 95 V255" stroke="#1E293B" stroke-dasharray="4 4" stroke-width="1.5"/>
        <path d="M280 95 V255 M340 95 V255 M460 95 V255 M520 95 V255" stroke="#1E293B" stroke-dasharray="2 4" stroke-width="1"/>
        <!-- PD Pulses (picocoulomb spikes) -->
        <path d="M240 175 Q280 175 300 175 L310 110 L315 185 L325 175 Q360 175 380 175 L390 125 L395 190 L405 175 Q440 175 470 175 L480 100 L486 210 L496 175 H560" 
              fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <!-- Scale indicator -->
        <text x="245" y="108" font-family="monospace" font-size="12" fill="#F59E0B">PD: 1.8 pC</text>
        <text x="500" y="108" font-family="monospace" font-size="12" fill="#38BDF8">50 Hz</text>
      `;
    case 'sphere-gap':
      return `
        <!-- Pedestals -->
        <rect x="260" y="240" width="80" height="20" rx="4" fill="#334155"/>
        <rect x="460" y="240" width="80" height="20" rx="4" fill="#334155"/>
        <line x1="300" y1="240" x2="300" y2="175" stroke="#64748B" stroke-width="8"/>
        <line x1="500" y1="240" x2="500" y2="175" stroke="#64748B" stroke-width="8"/>
        <!-- Spheres (Ø250mm) -->
        <circle cx="300" cy="175" r="50" fill="url(#brassGrad)" stroke="#B45309" stroke-width="2"/>
        <circle cx="500" cy="175" r="50" fill="url(#brassGrad)" stroke="#B45309" stroke-width="2"/>
        <!-- Spark Arc -->
        <path d="M350 175 L375 165 L395 185 L425 168 L450 175" fill="none" stroke="#FDE047" stroke-width="3.5" filter="url(#arcGlow)"/>
        <!-- Dimension Line -->
        <line x1="350" y1="230" x2="450" y2="230" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="385" y="225" font-family="sans-serif" font-size="11" fill="#38BDF8" text-anchor="middle">Gap (d)</text>
      `;
    case 'marx-generator':
    case 'large-impulse':
      return `
        <!-- Column Base -->
        <rect x="340" y="250" width="120" height="20" rx="4" fill="#1E293B"/>
        <!-- Insulator Column Stages -->
        <rect x="360" y="200" width="80" height="45" rx="6" fill="#0B132B" stroke="#0284C7" stroke-width="2"/>
        <rect x="360" y="145" width="80" height="45" rx="6" fill="#0B132B" stroke="#0284C7" stroke-width="2"/>
        <rect x="360" y="90" width="80" height="45" rx="6" fill="#0B132B" stroke="#0284C7" stroke-width="2"/>
        <!-- Toroid / Top Corona Ring -->
        <ellipse cx="400" cy="80" rx="75" ry="16" fill="none" stroke="#94A3B8" stroke-width="8"/>
        <!-- Spark Gap Discs -->
        <circle cx="345" cy="168" r="8" fill="#F59E0B"/>
        <circle cx="455" cy="168" r="8" fill="#F59E0B"/>
        <!-- Impulse Wave Curve -->
        <path d="M220 220 Q240 100 270 120 T320 220" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="3 3"/>
        <text x="270" y="110" font-family="monospace" font-size="10" fill="#F59E0B">1.2/50 µs</text>
      `;
    case 'vertical-cell':
    case 'horizontal-cell':
    case 'oil-impulse':
      return `
        <!-- Oil Chamber Body -->
        <rect x="320" y="95" width="160" height="150" rx="14" fill="#FEF3C7" fill-opacity="0.2" stroke="#D97706" stroke-width="3"/>
        <!-- Liquid Level -->
        <path d="M322 135 Q400 130 478 135 V240 H322 Z" fill="#F59E0B" fill-opacity="0.25"/>
        <!-- Electrodes inside -->
        <circle cx="370" cy="180" r="14" fill="#94A3B8" stroke="#475569" stroke-width="2"/>
        <circle cx="430" cy="180" r="14" fill="#94A3B8" stroke="#475569" stroke-width="2"/>
        <line x1="330" y1="180" x2="356" y2="180" stroke="#64748B" stroke-width="4"/>
        <line x1="444" y1="180" x2="470" y2="180" stroke="#64748B" stroke-width="4"/>
        <!-- Spark in Oil -->
        <path d="M384 180 L395 174 L405 186 L416 180" fill="none" stroke="#FBBF24" stroke-width="3" filter="url(#arcGlow)"/>
        <!-- ASTM Label -->
        <text x="400" y="118" font-family="sans-serif" font-weight="bold" font-size="12" fill="#D97706" text-anchor="middle">ASTM D3300</text>
      `;
    case 'modular-system':
      return `
        <!-- Base Frame with wheels -->
        <rect x="250" y="245" width="300" height="15" rx="3" fill="#334155"/>
        <circle cx="270" cy="265" r="7" fill="#64748B"/>
        <circle cx="530" cy="265" r="7" fill="#64748B"/>
        <!-- 3 Inter-convertible Modular Columns -->
        <!-- Stage 1 -->
        <rect x="270" y="140" width="60" height="100" rx="5" fill="#0B132B" stroke="#0284C7" stroke-width="2"/>
        <ellipse cx="300" cy="135" rx="38" ry="8" fill="none" stroke="#38BDF8" stroke-width="3"/>
        <text x="300" y="195" font-family="monospace" font-size="10" fill="#38BDF8" text-anchor="middle">Stage 1</text>
        <!-- Stage 2 -->
        <rect x="370" y="100" width="60" height="140" rx="5" fill="#0B132B" stroke="#0284C7" stroke-width="2"/>
        <ellipse cx="400" cy="95" rx="38" ry="8" fill="none" stroke="#38BDF8" stroke-width="3"/>
        <text x="400" y="175" font-family="monospace" font-size="10" fill="#38BDF8" text-anchor="middle">Stage 2</text>
        <!-- Stage 3 -->
        <rect x="470" y="60" width="60" height="180" rx="5" fill="#0B132B" stroke="#0284C7" stroke-width="2"/>
        <ellipse cx="500" cy="55" rx="38" ry="8" fill="none" stroke="#38BDF8" stroke-width="3"/>
        <text x="500" y="155" font-family="monospace" font-size="10" fill="#38BDF8" text-anchor="middle">Stage 3</text>
        <!-- Interconnect Bars -->
        <line x1="330" y1="140" x2="370" y2="140" stroke="#F59E0B" stroke-width="2.5"/>
        <line x1="430" y1="100" x2="470" y2="100" stroke="#F59E0B" stroke-width="2.5"/>
      `;
    default:
      return `
        <!-- High Voltage Transformer / Reactor Silhouette -->
        <rect x="310" y="140" width="180" height="115" rx="8" fill="#0B132B" stroke="#0284C7" stroke-width="2.5"/>
        <!-- Bushing Insulator -->
        <path d="M380 140 L388 80 H412 L420 140 Z" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
        <line x1="375" y1="95" x2="425" y2="95" stroke="#38BDF8" stroke-width="2.5"/>
        <line x1="373" y1="110" x2="427" y2="110" stroke="#38BDF8" stroke-width="2.5"/>
        <line x1="371" y1="125" x2="429" y2="125" stroke="#38BDF8" stroke-width="2.5"/>
        <!-- Corona Ball on Top -->
        <circle cx="400" cy="72" r="14" fill="#94A3B8" stroke="#0284C7" stroke-width="2"/>
        <!-- Sine Wave AC Symbol -->
        <path d="M350 200 Q375 175 400 200 T450 200" fill="none" stroke="#38BDF8" stroke-width="3"/>
      `;
  }
}

for (const p of products) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#070D18"/>
    </linearGradient>
    <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A"/>
      <stop offset="50%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
    <filter id="arcGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Technical Background Grid -->
  <rect width="800" height="320" rx="16" fill="url(#bgGrad)"/>
  <g stroke="#1E293B" stroke-width="1" opacity="0.6">
    <line x1="0" y1="40" x2="800" y2="40"/>
    <line x1="0" y1="80" x2="800" y2="80"/>
    <line x1="0" y1="120" x2="800" y2="120"/>
    <line x1="0" y1="160" x2="800" y2="160"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="240" x2="800" y2="240"/>
    <line x1="0" y1="280" x2="800" y2="280"/>
    
    <line x1="80" y1="0" x2="80" y2="320"/>
    <line x1="160" y1="0" x2="160" y2="320"/>
    <line x1="240" y1="0" x2="240" y2="320"/>
    <line x1="320" y1="0" x2="320" y2="320"/>
    <line x1="400" y1="0" x2="400" y2="320"/>
    <line x1="480" y1="0" x2="480" y2="320"/>
    <line x1="560" y1="0" x2="560" y2="320"/>
    <line x1="640" y1="0" x2="640" y2="320"/>
    <line x1="720" y1="0" x2="720" y2="320"/>
  </g>

  <!-- Graphic Schematic -->
  ${renderGraphic(p.iconType)}

  <!-- Overlay Header Badge -->
  <g transform="translate(35, 30)">
    <rect width="180" height="24" rx="4" fill="#0284C7" fill-opacity="0.15" stroke="#0284C7" stroke-width="1"/>
    <text x="10" y="16" font-family="'Segoe UI', system-ui, sans-serif" font-weight="700" font-size="11" fill="#38BDF8" letter-spacing="1">HI-VOLT TEST SYSTEM</text>
  </g>

  <!-- Technical Standard Tag -->
  <g transform="translate(560, 30)">
    <rect width="205" height="24" rx="4" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="12" y="16" font-family="'Segoe UI', monospace" font-size="10.5" fill="#94A3B8" letter-spacing="0.5">${p.code}</text>
  </g>

  <!-- Bottom Details Bar -->
  <g transform="translate(35, 260)">
    <text x="0" y="16" font-family="'Segoe UI', system-ui, sans-serif" font-weight="800" font-size="19" fill="#F8FAFC" letter-spacing="0.5">${p.title}</text>
    <text x="0" y="36" font-family="'Segoe UI', system-ui, sans-serif" font-weight="600" font-size="13" fill="#38BDF8">${p.subtitle}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(targetDir, p.filename), svg, 'utf-8');
}

console.log('Generated all product SVGs successfully!');
