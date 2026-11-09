import { CompanyInfo } from '@/lib/types';

export const companyData: CompanyInfo = {
  name: 'Hi-Volt Engineering Solutions',
  legalName: 'Hi-Volt Engineering Solutions',
  tagline: 'Precision High Voltage Test & Measuring Equipment',
  establishedYear: 2017,
  location: {
    address:
      'No.66, Byaraveshwara Industrial Estate, 4th Main, 3rd Cross, Vinayaka Layout, Andrahalli Main Road, Near Chetan Circle, Peenya 2nd Stage, Bangalore – 560 091, Karnataka, India',
    street:
      'No.66, Byaraveshwara Industrial Estate, 4th Main, 3rd Cross, Vinayaka Layout, Andrahalli Main Road, Near Chetan Circle',
    industrialArea: 'Peenya 2nd Stage',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560 091',
    country: 'India',
    // Accurate Google Maps query coordinate embed
    mapQuery:
      'Hi-Volt Engineering Solutions, Peenya 2nd Stage, Bangalore, Karnataka 560091',
  },
  contact: {
    phones: ['+91 99860 24480', '+91 98800 89509'],
    whatsapp: '+919986024480',
    email: 'marketing@hivoltengineeringsolutions.com',
    businessHours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST',
  },
  mission:
    'To make high voltage test and measuring equipment of international standards available at competitive prices to users across India and worldwide, strictly conforming to IEC 60060 and IS 2071.',
  standards: ['IEC 60060', 'IS 2071', 'ASTM D3300', 'IEC 60270'],
  legacyHeritage: {
    wsTestSystemsNoticeDate: '30 June 2017',
    wsTestSystemsYearsActive: 'more than three decades',
    supportedLegacyBrands: [
      'WS Test Systems (Bangalore)',
      'MWB (India)',
      'MWB Messwandler Bau (Germany)',
      'TERCO (Sweden)',
      'Passoni Villa (Italy)',
    ],
  },
};

export const aboutTimeline = [
  {
    year: 'Pre-2017',
    title: 'Three Decades of Engineering Excellence at WS Test Systems',
    description:
      'The engineering leadership and manufacturing craftsmen accrued over thirty years of specialized high voltage systems design and production under the globally renowned WS Test Systems Private Limited in Bangalore.',
  },
  {
    year: 'June 2017',
    title: 'Closure Notice of WS Test Systems',
    description:
      'On 30 June 2017, all employees of WS Test Systems received closure notices following a corporate restructuring after more than three decades of successful operation.',
  },
  {
    year: 'October 2017',
    title: 'Establishment of Hi-Volt Engineering Solutions',
    description:
      'Responding to overwhelming demand and repeated requests from customers across India and worldwide, the veteran engineering team founded Hi-Volt Engineering Solutions in Bangalore to ensure uninterrupted supply, service, and technical continuity.',
  },
  {
    year: 'Present Day',
    title: 'Global Supply & Legacy Support',
    description:
      'Hi-Volt delivers cutting-edge AC/DC test sets, impulse generators, and modular training systems to academic laboratories, power utilities, and electrical manufacturers, while actively supporting legacy installations of WS Test Systems, MWB, TERCO, and Passoni Villa.',
  },
];

export const manufacturedEquipmentList = [
  'High Voltage Construction Kit',
  'Impulse Voltage/Current Generator',
  'High Voltage AC Test Sets',
  'High Voltage DC Test Sets',
  'Partial Discharge Meters',
  'Measuring / Coupling Capacitors',
  'SF6 Filled Standard Capacitors',
  'Measuring Spark Gaps',
  'Impulse Multiple Chopping Gaps',
  'Compensating Reactors',
  'Impulse Resistors and Inductors',
  'Oil Dielectric Test Cells',
  'High Current Measuring Shunts',
];
