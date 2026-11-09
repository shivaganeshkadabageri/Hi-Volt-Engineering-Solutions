export interface QualityObjective {
  id: number;
  title: string;
  description: string;
}

export const qualityContent = {
  intro:
    'At Hi-Volt Engineering Solutions, the team firmly believes that quality of the highest order is an absolute prerequisite for continued success and long-lasting relationships with our clients worldwide.',
  corePrinciples: [
    {
      title: 'Universal Responsibility',
      statement:
        'Responsibility for product or service quality rests with every individual or company involved in design, production, assembly, sales, procurement, or service.',
    },
    {
      title: 'Economic Benefit Through Excellence',
      statement:
        'Continuous improvement in the quality of products or services ensures direct economic benefit and sustainable value to the organization and its partners.',
    },
  ],
  policy: {
    headline: 'Our Quality Policy',
    statement:
      'To deliver top quality products to every customer and become "Leaders in High Voltage Test and Measuring equipment Field" through systematic and sincere R&D for new custom-built products and continuous improvement of existing ones.',
  },
  objectives: [
    {
      id: 1,
      title: 'Strict Quality Management System Adherence',
      description:
        'Strictly follow the quality management system throughout all operational phases, from raw material procurement to final inspection and dispatch.',
    },
    {
      id: 2,
      title: 'Proactive Customer Interaction',
      description:
        'Maintain and deepen enduring customer relationships through transparent, regular interaction and dedicated technical support.',
    },
    {
      id: 3,
      title: 'Performance Monitoring via Systematic Feedback',
      description:
        'Monitor product performance in real-world high-voltage test bay conditions through regular customer feedback and technical audits.',
    },
    {
      id: 4,
      title: 'Continuous Workforce Competency & Training',
      description:
        'Provide rigorous, ongoing training to employees to nurture specialized high-voltage craftsmanship and up-to-date engineering standards.',
    },
  ] as QualityObjective[],
  standardsCompliance: [
    {
      code: 'IEC 60060',
      title: 'High-Voltage Test Techniques',
      description: 'General definitions, test requirements, measuring systems, and test procedures for electrical apparatus.',
    },
    {
      code: 'IS 2071',
      title: 'Methods of High Voltage Testing (Indian Standards)',
      description: 'Standard guidelines for dielectric testing with alternating, direct, and impulse voltages.',
    },
    {
      code: 'ASTM D3300',
      title: 'Dielectric Breakdown Voltage of Insulating Oils',
      description: 'Standard test method for dielectric breakdown voltage of insulating liquids under impulse conditions.',
    },
    {
      code: 'IEC 60270',
      title: 'High-Voltage Test Techniques - Partial Discharge Measurements',
      description: 'Standard procedures and specifications for partial discharge calibration and non-destructive insulation diagnostics.',
    },
  ],
};
