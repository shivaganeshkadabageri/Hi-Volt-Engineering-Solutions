import { Product, ProductCategory } from '@/lib/types';

export const productCategories: ProductCategory[] = [
  'AC Test Sets',
  'DC Test Sets',
  'Impulse Generators',
  'Partial Discharge',
  'Oil Testing',
  'Measurement Accessories',
  'Modular Systems',
];

export const productsData: Product[] = [
  // 1. Partial Discharge Meter
  {
    slug: 'partial-discharge-meter',
    name: 'Partial Discharge Meter',
    category: 'Partial Discharge',
    rating: 'Reading in picocoulombs (pC)',
    shortDescription:
      'Non-destructive testing instrument for measuring insulation quality, with readings calibrated directly in picocoulombs (pC).',
    fullDescription:
      'The Partial Discharge Meter is an essential non-destructive diagnostic instrument utilized to evaluate the integrity and quality of high-voltage insulation systems in transformers, cables, switchgear, and rotating machines. Calibrated to display discharge magnitudes directly in picocoulombs (pC), this system allows engineers to detect microscopic voids and insulation degradation prior to catastrophic electrical failure. The complete testing kit includes the Partial Discharge Meter DTM with dedicated filter unit, Measuring Impedance AKV-D with matched co-axial connecting cable, and a precision Pulse Calibrator PDG for on-site calibration in accordance with international standards.',
    image: '/images/products/partial-discharge-meter.svg',
    applicableStandards: ['IEC 60270', 'IS 2071', 'IEC 60060'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Measurement Scale', value: 'Picocoulombs (pC)' },
      { key: 'Testing Methodology', value: 'Non-destructive high voltage insulation quality analysis' },
      { key: 'System Components Included', value: 'Partial Discharge Meter DTM with filter, Measuring Impedance AKV-D with co-axial connecting cable, Pulse Calibrator PDG' },
      { key: 'Bandwidth & Filter Settings', value: 'TODO: add datasheet' },
      { key: 'Input Impedance / Attenuation', value: 'TODO: add datasheet' },
      { key: 'Power Supply', value: 'TODO: add datasheet' },
    ],
    applications: [
      'Power transformer factory acceptance and diagnostics',
      'HV cable joint and termination testing',
      'Gas-insulated switchgear (GIS) quality assurance',
      'Academic and high-voltage research laboratories',
    ],
    relatedProductSlugs: [
      'modular-high-voltage-test-systems',
      'ac-test-set-100kv-20kva',
      'sphere-gap-250mm',
    ],
  },

  // 2. Vertical Oil Test Cell
  {
    slug: 'vertical-oil-test-cell',
    name: 'Vertical Oil Test Cell',
    category: 'Oil Testing',
    rating: 'As per ASTM D3300',
    shortDescription:
      'Specialized test cell for finding the dielectric breakdown characteristics of insulating fluids in a vertical configuration according to ASTM D3300.',
    fullDescription:
      'The Vertical Oil Test Cell is designed strictly in conformance with ASTM D3300 specifications for dielectric testing of electrical insulating liquids. Engineered for precision and chemical resistance, this cell supports rigorous lightning impulse breakdown investigations, enabling power utilities and oil refiners to benchmark dielectric strength under steep voltage transients.',
    image: '/images/products/vertical-oil-test-cell.svg',
    applicableStandards: ['ASTM D3300', 'IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Standard Compliance', value: 'ASTM D3300' },
      { key: 'Vessel Orientation', value: 'Vertical configuration' },
      { key: 'Electrode Arrangement', value: 'Spherical / Point plane as per standard - TODO: add datasheet' },
      { key: 'Chamber Volume', value: 'TODO: add datasheet' },
      { key: 'Electrode Gap Adjustment', value: 'Micrometer precision spacing control' },
    ],
    applications: [
      'Transformer oil dielectric breakdown assessment',
      'Impulse withstand evaluation of bio-based ester fluids',
      'Quality control for oil processing and filtration plants',
    ],
    relatedProductSlugs: [
      'horizontal-oil-test-cell',
      'impulse-test-set-for-oil-testing',
      'impulse-voltage-generator-300kv-15kj',
    ],
  },

  // 3. Horizontal Oil Test Cell
  {
    slug: 'horizontal-oil-test-cell',
    name: 'Horizontal Oil Test Cell',
    category: 'Oil Testing',
    rating: 'High Voltage Dielectric Oil Vessel',
    shortDescription:
      'Precision horizontal oil test chamber for dielectric breakdown voltage measurements of transformer oil and dielectric liquids.',
    fullDescription:
      'Engineered with transparent high-strength dielectric housing and precision adjustable electrodes, the Horizontal Oil Test Cell allows visual inspection and accurate dielectric breakdown voltage testing under both power-frequency AC and impulse stress. Designed for straightforward cleaning, oil sampling, and repeatable gap calibration.',
    image: '/images/products/horizontal-oil-test-cell.svg',
    applicableStandards: ['IEC 60156', 'IS 6792', 'ASTM D1816'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Vessel Orientation', value: 'Horizontal configuration' },
      { key: 'Chamber Material', value: 'High dielectric transparent acrylic / glass cylinder' },
      { key: 'Electrode Type', value: 'Standard brass/stainless steel spherical or VDE profile - TODO: add datasheet' },
      { key: 'Volume', value: 'TODO: add datasheet' },
      { key: 'Rated Breakdown Voltage', value: 'TODO: add datasheet' },
    ],
    applications: [
      'Power transformer oil testing',
      'Switchgear insulating fluid testing',
      'Research on synthetic and natural ester dielectrics',
    ],
    relatedProductSlugs: [
      'vertical-oil-test-cell',
      'impulse-test-set-for-oil-testing',
      'ac-test-set-100kv-20kva',
    ],
  },

  // 4. Impulse Test Set for Oil Testing
  {
    slug: 'impulse-test-set-for-oil-testing',
    name: 'Impulse Test Set for Oil Testing',
    category: 'Oil Testing',
    rating: 'ASTM D3300 Lightning Breakdown',
    shortDescription:
      'Complete impulse test bench for finding lightning impulse breakdown voltage of oil dielectric as per ASTM D3300.',
    fullDescription:
      'The Impulse Test Set for Oil Testing is a turnkey impulse testing bench dedicated to evaluating the lightning impulse withstand performance of transformer oil and liquid dielectrics in strict conformance with ASTM D3300 and IEC 60060. The system features an integrated impulse generator, precision charging supply, high voltage test cell, and voltage divider for waveform verification.',
    image: '/images/products/impulse-test-set-oil.svg',
    applicableStandards: ['ASTM D3300', 'IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Standard Conformance', value: 'ASTM D3300, IEC 60060, IS 2071' },
      { key: 'Measurement Target', value: 'Lightning impulse breakdown voltage of liquid dielectrics' },
      { key: 'Standard Waveform', value: '1.2/50 µs lightning impulse' },
      { key: 'Maximum Peak Voltage', value: 'TODO: add datasheet' },
      { key: 'Energy Rating', value: 'TODO: add datasheet' },
    ],
    applications: [
      'Power transformer design validation',
      'New insulating liquid formulation R&D',
      'Refinery acceptance testing',
    ],
    relatedProductSlugs: [
      'vertical-oil-test-cell',
      'impulse-voltage-generator-300kv-15kj',
      'sphere-gap-250mm',
    ],
  },

  // 5. Sphere Gap Ø250 mm
  {
    slug: 'sphere-gap-250mm',
    name: 'Sphere Gap Ø250 mm',
    category: 'Measurement Accessories',
    rating: 'Ø250 mm (Range: 100 mm – 500 mm available)',
    shortDescription:
      'Calibrated measuring spark gap for peak high voltage measurement; range includes 100 mm to 500 mm diameter and impulse multiple chopping gaps.',
    fullDescription:
      'Sphere gaps are the globally recognized primary reference standard for measuring peak values of AC, DC, and impulse high voltages in accordance with IEC 60052 and IS 2071. This Ø250 mm sphere gap features precision copper/brass spheres with polished surfaces, motorized gap distance adjustment with digital readouts, and integrated protective series resistors. In addition to standard measuring spark gaps ranging from 100 mm to 500 mm in diameter, Hi-Volt also supplies impulse multiple chopping sphere gaps for steep-front impulse generation and voltage chopping.',
    image: '/images/products/sphere-gap-250mm.svg',
    applicableStandards: ['IEC 60052', 'IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Standard Diameter', value: 'Ø250 mm' },
      { key: 'Available Diameter Range', value: '100 mm to 500 mm diameter variants available' },
      { key: 'Chopping Options', value: 'Impulse multiple chopping sphere gaps available' },
      { key: 'Distance Drive', value: 'Motorized with manual fine adjustment option' },
      { key: 'Peak Voltage Measuring Range', value: 'TODO: add datasheet' },
    ],
    applications: [
      'Peak voltage calibration for high voltage test systems',
      'Lightning impulse chopping for transformer testing',
      'High-voltage academic laboratory experiments',
    ],
    relatedProductSlugs: [
      'impulse-voltage-generator-300kv-15kj',
      'ac-test-set-100kv-20kva',
      'dc-single-stage-140kv-25ma',
    ],
  },

  // 6. Impulse Voltage Generator 300kV 15kJ
  {
    slug: 'impulse-voltage-generator-300kv-15kj',
    name: 'Impulse Voltage Generator 300kV 15kJ',
    category: 'Impulse Generators',
    rating: '300kV / 15kJ',
    shortDescription:
      'High-energy Marx-circuit impulse voltage generator producing standard 1.2/50 µs lightning and switching impulses for testing power apparatus.',
    fullDescription:
      'The 300kV 15kJ Impulse Voltage Generator is engineered for academic research, high-voltage testing facilities, and electrical apparatus manufacturers. Operating on the proven Marx circuit topology, it delivers high-energy 1.2/50 µs lightning impulse waveforms and standard switching impulse waves with precise stage trigger timing, low internal inductance, and robust safety earthing bars.',
    image: '/images/products/impulse-voltage-generator-300kv.svg',
    applicableStandards: ['IEC 60060-1', 'IEC 60060-2', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Rated Peak Impulse Voltage', value: '300 kV' },
      { key: 'Rated Energy', value: '15 kJ' },
      { key: 'Standard Waveforms', value: 'Lightning impulse (1.2/50 µs), switching impulse' },
      { key: 'Charging Voltage per Stage', value: 'TODO: add datasheet' },
      { key: 'Trigger Method', value: 'Electronic tri-gap trigger / manual optical trigger' },
    ],
    applications: [
      'Impulse testing of distribution transformers',
      'Insulator and bushing flashover verification',
      'Surge protective device testing',
    ],
    relatedProductSlugs: [
      'impulse-resistors-and-inductors',
      'sphere-gap-250mm',
      'impulse-voltage-generator-1200kv-120kj',
    ],
  },

  // 7. DC Single Stage 140kV 25mA
  {
    slug: 'dc-single-stage-140kv-25ma',
    name: 'DC Single Stage 140kV 25mA',
    category: 'DC Test Sets',
    rating: '140kV / 25mA',
    shortDescription:
      'Compact single-stage high voltage DC test set for dielectric withstand, cable testing, and research applications.',
    fullDescription:
      'The DC Single Stage 140kV 25mA test set provides a stable, ripple-filtered direct current high-voltage output for testing cables, generator windings, switchgear, and capacitive loads. Built with high-grade silicon rectifier stacks, protective damping resistors, and automatic grounding switches, it guarantees safe operation in testing bays and academic labs.',
    image: '/images/products/dc-test-set-140kv.svg',
    applicableStandards: ['IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Rated DC Voltage', value: '140 kV' },
      { key: 'Rated Output Current', value: '25 mA continuous' },
      { key: 'Topology', value: 'Single Stage Half-Wave / Full-Wave Rectified' },
      { key: 'Ripple Factor', value: 'TODO: add datasheet' },
      { key: 'Grounding Safety', value: 'Automatic motorized discharge grounding switch' },
    ],
    applications: [
      'HV cable DC proof testing',
      'Power capacitor leakage current measurement',
      'High-voltage academic laboratory demonstrations',
    ],
    relatedProductSlugs: [
      'dc-two-stage-280kv-20ma',
      'dc-test-set-power-capacitor-testing',
      'modular-high-voltage-test-systems',
    ],
  },

  // 8. DC Two Stage 280kV 20mA
  {
    slug: 'dc-two-stage-280kv-20ma',
    name: 'DC Two Stage 280kV 20mA',
    category: 'DC Test Sets',
    rating: '280kV / 20mA',
    shortDescription:
      'Two-stage cascaded DC high voltage test set delivering up to 280kV for transmission class equipment and insulation research.',
    fullDescription:
      'The DC Two Stage 280kV 20mA system is designed for high-voltage testing of power transmission apparatus, high-voltage bushings, and insulation materials. Its cascaded configuration provides high voltage while maintaining a compact vertical footprint and superior voltage stabilization under variable load conditions.',
    image: '/images/products/dc-two-stage-280kv.svg',
    applicableStandards: ['IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Rated DC Output Voltage', value: '280 kV' },
      { key: 'Rated Continuous Current', value: '20 mA' },
      { key: 'Configuration', value: 'Two-Stage Cascade' },
      { key: 'Polarity', value: 'Positive / Negative configurable' },
      { key: 'Voltage Regulation', value: 'Motorized variable autotransformer' },
    ],
    applications: [
      'Transmission apparatus insulation testing',
      'GIS component DC withstand testing',
      'Advanced insulation research and development',
    ],
    relatedProductSlugs: [
      'dc-single-stage-140kv-25ma',
      'dc-test-set-power-capacitor-testing',
      'sphere-gap-250mm',
    ],
  },

  // 9. DC Test Set for Power Capacitor Testing
  {
    slug: 'dc-test-set-power-capacitor-testing',
    name: 'DC Test Set for Power Capacitor Testing',
    category: 'DC Test Sets',
    rating: 'Custom HV DC Capacitor Proof System',
    shortDescription:
      'Specialized DC testing equipment engineered for high-energy discharge conditions in power capacitor proof and endurance testing.',
    fullDescription:
      'Designed specifically to manage the stored capacitive energy during the proof testing of power factor correction capacitors, filter capacitors, and energy storage banks. This DC test set integrates heavy-duty surge-absorbing discharge resistors, overvoltage clamping circuits, and fast electronic trip protection to prevent catastrophic specimen destruction during dielectric breakdown.',
    image: '/images/products/dc-capacitor-test-set.svg',
    applicableStandards: ['IEC 60871', 'IS 13925', 'IEC 60060'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Application', value: 'Power capacitor dielectric withstand & energy absorption' },
      { key: 'Discharge Protection', value: 'High energy discharge resistor network with automated grounding' },
      { key: 'Continuous Current', value: 'TODO: add datasheet' },
      { key: 'Maximum Test Voltage', value: 'TODO: add datasheet' },
    ],
    applications: [
      'Routine and type testing of shunt power capacitors',
      'Surge capacitor endurance testing',
      'Capacitor manufacturing quality control',
    ],
    relatedProductSlugs: [
      'dc-single-stage-140kv-25ma',
      'dc-two-stage-280kv-20ma',
      'shunt-for-high-current-measurement',
    ],
  },

  // 10. AC Test Set 100kV 20kVA
  {
    slug: 'ac-test-set-100kv-20kva',
    name: 'AC Test Set 100kV 20kVA',
    category: 'AC Test Sets',
    rating: '100kV / 20kVA',
    shortDescription:
      'Power frequency AC high voltage test system for dielectric withstand and partial discharge testing of electrical equipment.',
    fullDescription:
      'The 100kV 20kVA AC Test Set is a workhorse for utility maintenance laboratories, equipment manufacturers, and academic institutes. Designed with low partial discharge characteristics, it can be combined with partial discharge meters for precision insulation diagnosis. Complete with an ergonomic operator control desk, electronic trip units, and digital metering.',
    image: '/images/products/ac-test-set-100kv.svg',
    applicableStandards: ['IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Rated Output Voltage', value: '100 kV RMS' },
      { key: 'Rated Power Capacity', value: '20 kVA' },
      { key: 'Operating Frequency', value: '50 Hz / 60 Hz' },
      { key: 'Partial Discharge Level', value: '< 5 pC at rated voltage - TODO: add datasheet' },
      { key: 'Control Desk', value: 'Manual / Motorized regulator console with dual digital readouts' },
    ],
    applications: [
      'Dry-type and oil transformer dielectric testing',
      'Switchgear and vacuum bottle withstand tests',
      'Insulator and bushing batch qualification',
    ],
    relatedProductSlugs: [
      'ac-test-set-200kv-20kva',
      'partial-discharge-meter',
      'modular-high-voltage-test-systems',
    ],
  },

  // 11. AC Test Set 200kV 20kVA
  {
    slug: 'ac-test-set-200kv-20kva',
    name: 'AC Test Set 200kV 20kVA',
    category: 'AC Test Sets',
    rating: '200kV / 20kVA',
    shortDescription:
      'Robust 200kV power frequency AC testing equipment suitable for high voltage apparatus insulation validation.',
    fullDescription:
      'Constructed for heavy industrial duty in transformer manufacturing plants and high voltage testing centers, the 200kV 20kVA AC Test Set delivers pristine sine wave high-voltage power. Its cylinder-type or tank-type transformer construction ensures maximum thermal endurance and minimal electromagnetic emissions.',
    image: '/images/products/ac-test-set-200kv.svg',
    applicableStandards: ['IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Rated Output Voltage', value: '200 kV RMS' },
      { key: 'Rated Power Capacity', value: '20 kVA' },
      { key: 'Operating Frequency', value: '50 Hz / 60 Hz' },
      { key: 'Transformer Insulation', value: 'High dielectric transformer mineral oil' },
      { key: 'Short Circuit Impedance', value: 'TODO: add datasheet' },
    ],
    applications: [
      'High voltage circuit breaker testing',
      'Polymeric and porcelain insulator proof testing',
      'R&D and university high-voltage engineering labs',
    ],
    relatedProductSlugs: [
      'ac-test-set-100kv-20kva',
      'ac-test-set-300kv-20kva',
      'sphere-gap-250mm',
    ],
  },

  // 12. AC Test Set 300kV 20kVA
  {
    slug: 'ac-test-set-300kv-20kva',
    name: 'AC Test Set 300kV 20kVA',
    category: 'AC Test Sets',
    rating: '300kV / 20kVA',
    shortDescription:
      'High-voltage 300kV AC dielectric test system providing precise voltage control and comprehensive safety interlocks.',
    fullDescription:
      'The AC Test Set 300kV 20kVA enables power-frequency dielectric testing of high-voltage transmission apparatus up to the 300kV class. Features include high-accuracy voltage division, fast overcurrent and overvoltage tripping, and an insulated casing suitable for indoor test bays with tight spatial constraints.',
    image: '/images/products/ac-test-set-300kv.svg',
    applicableStandards: ['IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Rated Output Voltage', value: '300 kV RMS' },
      { key: 'Rated Power Capacity', value: '20 kVA' },
      { key: 'Operating Frequency', value: '50 Hz / 60 Hz' },
      { key: 'Duty Rating', value: 'Continuous / 30-minute intermittent rated - TODO: add datasheet' },
      { key: 'Safety Interlocks', value: 'Door interlocks, emergency stop, zero-voltage start interlock' },
    ],
    applications: [
      'Transmission apparatus insulation testing',
      'Substation equipment factory acceptance tests',
      'National calibration and standardizing laboratories',
    ],
    relatedProductSlugs: [
      'ac-test-transformer-300kv-300kva',
      'ac-test-set-200kv-20kva',
      'partial-discharge-meter',
    ],
  },

  // 13. Impulse Resistors and Inductors
  {
    slug: 'impulse-resistors-and-inductors',
    name: 'Impulse Resistors and Inductors',
    category: 'Measurement Accessories',
    rating: 'Resistors: 1 Ω – 10 MΩ | Inductors: 1 µH – 1 H',
    shortDescription:
      'Precision wave-shaping components for impulse generators of any design, with resistors from 1 Ω to 10 MΩ and inductors from 1 µH to 1 H.',
    fullDescription:
      'Hi-Volt manufactures high-stability wave-shaping components tailored for impulse voltage and current generators of any make or design. Resistors span from 1 Ω to 10 MΩ and are wound non-inductively with high impulse energy dissipation capacity. Air-core inductors range from 1 µH to 1 H, engineered to withstand extreme mechanical forces and electromagnetic stress during high-current surges.',
    image: '/images/products/impulse-resistors-inductors.svg',
    applicableStandards: ['IEC 60060-1', 'IEC 60060-2', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Resistor Resistance Range', value: '1 Ω to 10 MΩ' },
      { key: 'Inductor Inductance Range', value: '1 µH to 1 H' },
      { key: 'Generator Compatibility', value: 'Compatible with impulse generators of any manufacturer or design' },
      { key: 'Voltage & Energy Ratings', value: 'Custom configured to customer system parameters' },
      { key: 'Construction', value: 'Non-inductive wirewound / ceramic / air-core high current coils' },
    ],
    applications: [
      'Lightning and switching waveform front and tail shaping',
      'Oscillatory surge generation',
      'Universal upgrade or replacement for legacy impulse generators',
    ],
    relatedProductSlugs: [
      'impulse-voltage-generator-300kv-15kj',
      'shunt-for-high-current-measurement',
      'sphere-gap-250mm',
    ],
  },

  // 14. Shunt for High Current Measurement
  {
    slug: 'shunt-for-high-current-measurement',
    name: 'Shunt for High Current Measurement',
    category: 'Measurement Accessories',
    rating: '0.1 Ω, Current Ratings up to 100 kA',
    shortDescription:
      'Low-inductance coaxial measurement shunt for impulse current generators of any design; 0.1 Ω with current ratings up to 100 kA.',
    fullDescription:
      'The Coaxial High Current Measurement Shunt is designed for measuring fast-rise transient surge currents generated by impulse current systems. Built with low temperature coefficient resistance alloys in a concentric tubular coaxial geometry, it eliminates inductive coupling errors, ensuring true nanosecond rise-time fidelity at ratings up to 100 kA.',
    image: '/images/products/shunt-high-current.svg',
    applicableStandards: ['IEC 62475', 'IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    specifications: [
      { key: 'Nominal Resistance', value: '0.1 Ω' },
      { key: 'Current Ratings', value: 'Up to 100 kA peak' },
      { key: 'Geometry', value: 'Coaxial tubular low-inductance structure' },
      { key: 'Generator Compatibility', value: 'Compatible with impulse current generators of any design' },
      { key: 'Bandwidth / Rise Time', value: 'TODO: add datasheet' },
    ],
    applications: [
      'Lightning surge arrester residual voltage measurement',
      'Fuse and breaker short-time current testing',
      'High-current pulsed power laboratories',
    ],
    relatedProductSlugs: [
      'impulse-current-generator-600kv-25ka',
      'impulse-resistors-and-inductors',
      'impulse-voltage-generator-300kv-15kj',
    ],
  },

  // 15. Modular High Voltage Test Systems (PROMINENT HIGHLIGHT)
  {
    slug: 'modular-high-voltage-test-systems',
    name: 'Modular High Voltage Test Systems',
    category: 'Modular Systems',
    rating: '100kV AC / Up to 420kV DC & Impulse',
    shortDescription:
      'Inter-convertible high voltage construction system in 3 ranges: Single Stage (100kV AC / 140kV DC/Impulse), Two Stage (100kV AC / 280kV DC/Impulse), and Three Stage (100kV AC / 420kV DC/Impulse).',
    fullDescription:
      'Hi-Volt Modular High Voltage Test Systems are versatile, inter-convertible construction kits engineered specifically for educational institutions, academic research, and medium voltage power equipment manufacturers. Available in three standardized scalable ranges: Single stage (100kV AC / 140kV DC/Impulse), Two stage (100kV AC / 280kV DC/Impulse), and Three stage (100kV AC / 420kV DC/Impulse). Conforming strictly to IEC 60060 and IS 2071, this modular system allows students and technicians to dismantle and reassemble the equipment quickly while incorporating all essential safety interlocks, visible grounding, and fault protections. Beyond training, the system is fully equipped to perform commercial proof testing on small and medium voltage power apparatus including vacuum interrupters, lightning arresters, line insulators, instrument transformers, and switchgear. It integrates seamlessly with partial discharge measuring equipment and capacitance / Tan delta bridges.',
    image: '/images/products/modular-hv-system.svg',
    applicableStandards: ['IEC 60060', 'IS 2071', 'IEC 60270'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    isModularHighlight: true,
    specifications: [
      { key: 'Range 1 (Single Stage)', value: '100 kV AC / 140 kV DC / Impulse' },
      { key: 'Range 2 (Two Stage)', value: '100 kV AC / 280 kV DC / Impulse' },
      { key: 'Range 3 (Three Stage)', value: '100 kV AC / 420 kV DC / Impulse' },
      { key: 'Standard Compliance', value: 'IEC 60060 and IS 2071' },
      { key: 'Educational Safety Features', value: 'Designed for student hands-on dismantling and rapid reassembly with complete interlocks and earthing' },
      { key: 'Commercial Testing Scope', value: 'Vacuum interrupters, lightning arresters, insulators, instrument transformers, switchgear' },
      { key: 'Diagnostic Integration', value: 'Integrates with Partial Discharge measuring equipment and Capacitance / Tan delta bridges' },
    ],
    applications: [
      'University and technical college high-voltage teaching laboratories',
      'Medium-voltage vacuum interrupter and switchgear testing',
      'Instrument transformer (CT/PT) dielectric verification',
      'Hands-on research in breakdown phenomena and dielectric materials',
    ],
    relatedProductSlugs: [
      'partial-discharge-meter',
      'ac-test-set-100kv-20kva',
      'dc-single-stage-140kv-25ma',
      'sphere-gap-250mm',
    ],
  },

  // 16. AC Test Transformer 300kV 300kVA (Featured system)
  {
    slug: 'ac-test-transformer-300kv-300kva',
    name: 'AC Test Transformer 300kV 300kVA',
    category: 'AC Test Sets',
    rating: '300kV / 300kVA Continuous',
    shortDescription:
      'High-capacity heavy-duty AC test transformer engineered for high-power factory acceptance testing and severe dielectric testing.',
    fullDescription:
      'Representing Hi-Volt\'s high-capacity manufacturing capabilities, the 300kV 300kVA AC Test Transformer is engineered for continuous and long-duration dielectric testing of high-voltage transformers, cables, and bushings. Built with high-purity magnetic cores, advanced oil insulation circulation, and minimal corona discharge design.',
    image: '/images/products/ac-test-transformer-300kv-300kva.svg',
    applicableStandards: ['IEC 60060', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Rated Output Voltage', value: '300 kV' },
      { key: 'Rated Power Capacity', value: '300 kVA' },
      { key: 'Duty Cycle', value: 'Continuous heavy-duty rated' },
      { key: 'Cooling Medium', value: 'Mineral oil immersed (ONAN)' },
      { key: 'Partial Discharge Baseline', value: 'Low PD baseline (< 5 pC) - TODO: add datasheet' },
    ],
    applications: [
      'Heavy electrical manufacturing plant test bays',
      'Long-duration cable testing under AC stress',
      'Substation transformer routine testing',
    ],
    relatedProductSlugs: [
      'ac-test-set-300kv-20kva',
      'partial-discharge-meter',
      'modular-high-voltage-test-systems',
    ],
  },

  // 17. Impulse Voltage Generator 1200kV 120kJ (Featured system)
  {
    slug: 'impulse-voltage-generator-1200kv-120kj',
    name: 'Impulse Voltage Generator 1200kV 120kJ',
    category: 'Impulse Generators',
    rating: '1200kV / 120kJ',
    shortDescription:
      'Extra-high-voltage Marx impulse generator built for lightning arrester testing, polymeric insulator testing, and EHV apparatus.',
    fullDescription:
      'An industrial flagship high-voltage installation from Hi-Volt, the 1200kV 120kJ Impulse Voltage Generator provides the massive peak voltage and energy required for testing extra-high-voltage (EHV) grid apparatus. Specifically developed for lightning arrester testing, polymeric insulator testing, and transformer impulse testing in accordance with IEC 60060 and IEC 60099.',
    image: '/images/products/impulse-generator-1200kv.svg',
    applicableStandards: ['IEC 60060-1', 'IEC 60060-2', 'IEC 60099-4', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Peak Impulse Voltage', value: '1200 kV' },
      { key: 'Total Stored Energy', value: '120 kJ' },
      { key: 'Waveforms Produced', value: 'Standard Lightning Impulse (1.2/50 µs) and Switching Impulse (250/2500 µs)' },
      { key: 'Target Key Applications', value: 'Lightning arrester testing, polymeric insulator testing, EHV apparatus' },
      { key: 'Charging System', value: 'Automated polarity reversing DC high voltage charger' },
    ],
    applications: [
      'Type and routine testing of EHV lightning arresters',
      'Polymeric and composite line insulator testing',
      'High-voltage power transformer impulse verification',
    ],
    relatedProductSlugs: [
      'impulse-current-generator-600kv-25ka',
      'impulse-steep-front-testing-1000kv-us',
      'impulse-resistors-and-inductors',
    ],
  },

  // 18. Impulse Current Generator 600kV 25kA (Featured system)
  {
    slug: 'impulse-current-generator-600kv-25ka',
    name: 'Impulse Current Generator 600kV 25kA',
    category: 'Impulse Generators',
    rating: '600kV / 25kA',
    shortDescription:
      'High-energy impulse current system built for lightning arrester discharge testing and polymeric insulator testing.',
    fullDescription:
      'Engineered to deliver high-amplitude current surges up to 25 kA with voltages reaching 600 kV. Designed specifically for lightning arrester discharge testing, polymeric insulator testing, varistor residual voltage characterization, and high-energy surge durability investigations.',
    image: '/images/products/impulse-current-generator-600kv.svg',
    applicableStandards: ['IEC 60099-4', 'IEC 62475', 'IS 2071'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Rated Current Amplitude', value: '25 kA (8/20 µs lightning current waveform)' },
      { key: 'Operating Peak Voltage', value: '600 kV' },
      { key: 'Primary Applications', value: 'Lightning arrester testing, polymeric insulator testing' },
      { key: 'Current Waveforms', value: '8/20 µs, 4/10 µs high-current, 30/80 µs switching surge' },
      { key: 'Shunt Compatibility', value: 'Integrated 0.1 Ω coaxial measuring shunt' },
    ],
    applications: [
      'Metal-oxide surge arrester (MOV) discharge testing',
      'Polymeric line insulator flashover durability',
      'Surge protection device (SPD) qualification',
    ],
    relatedProductSlugs: [
      'impulse-voltage-generator-1200kv-120kj',
      'shunt-for-high-current-measurement',
      'impulse-steep-front-testing-1000kv-us',
    ],
  },

  // 19. Impulse Steep Front Testing 1000kV/µs (Featured system)
  {
    slug: 'impulse-steep-front-testing-1000kv-us',
    name: 'Impulse Steep Front Testing System 1000kV/µs',
    category: 'Impulse Generators',
    rating: '1000kV/µs Steep Front',
    shortDescription:
      'Ultra-fast rate-of-rise impulse apparatus achieving >1000kV/µs, dedicated to polymeric insulator testing and steep-front dielectric evaluations.',
    fullDescription:
      'The Impulse Steep Front Testing System delivers ultra-fast voltage transients exceeding 1000 kV/µs rate of rise. Designed in conformance with modern IEC composite insulator specifications, this system is primarily deployed for steep-front impulse testing on polymeric and composite insulators to detect internal flaws, interfaces, and core tracking before equipment is deployed on grid lines.',
    image: '/images/products/impulse-steep-front.svg',
    applicableStandards: ['IEC 61109', 'IEC 62217', 'IEC 60060-1'],
    datasheetUrl: 'TODO: add datasheet',
    featured: true,
    specifications: [
      { key: 'Rate of Voltage Rise', value: '> 1000 kV/µs steep front' },
      { key: 'Key Applications', value: 'Polymeric insulator testing, composite insulator interface verification' },
      { key: 'Chopping Assembly', value: 'Ultra-fast pressurized chopping sphere gap' },
      { key: 'Diagnostics Interface', value: 'High-speed capacitive divider and transient recorder interface' },
    ],
    applications: [
      'Polymeric insulator steep-front impulse type tests',
      'Composite post insulator verification',
      'Transmission line hardware quality assurance',
    ],
    relatedProductSlugs: [
      'impulse-voltage-generator-1200kv-120kj',
      'impulse-current-generator-600kv-25ka',
      'sphere-gap-250mm',
    ],
  },
];
