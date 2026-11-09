export type ProductCategory =
  | 'AC Test Sets'
  | 'DC Test Sets'
  | 'Impulse Generators'
  | 'Partial Discharge'
  | 'Oil Testing'
  | 'Measurement Accessories'
  | 'Modular Systems';

export interface ProductSpec {
  key: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  rating: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  specifications: ProductSpec[];
  applicableStandards: string[];
  datasheetUrl?: string; // e.g. "TODO: add datasheet"
  featured?: boolean;
  isModularHighlight?: boolean;
  applications?: string[];
  relatedProductSlugs?: string[];
}

export interface Customer {
  id: string;
  name: string;
  logo: string;
  url?: string;
  isPlaceholder?: boolean;
  category?:
    | 'Utility'
    | 'Manufacturer'
    | 'Academic / Research'
    | 'Power Equipment Manufacturer'
    | 'Academic / Research Institution'
    | 'Electrical Utility'
    | 'Testing & Certification Laboratory'
    | string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear: number;
  aboutText?: {
    paragraphs: string[];
  };
  location: {
    address: string;
    addressLines?: string[];
    street: string;
    industrialArea: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    mapQuery: string;
  };
  contact: {
    phones: string[];
    whatsapp: string;
    email: string;
    businessHours: string;
  };
  mission: string;
  standards: string[];
  legacyHeritage: {
    wsTestSystemsNoticeDate: string;
    wsTestSystemsYearsActive: string;
    supportedLegacyBrands: string[];
  };
}
