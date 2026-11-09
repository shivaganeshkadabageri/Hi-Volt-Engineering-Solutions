import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { companyData } from '@/content/company';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hivoltengineeringsolutions.com'
  ),
  title: {
    default: 'Hi-Volt Engineering Solutions | High Voltage Test & Measuring Equipment',
    template: '%s | Hi-Volt Engineering Solutions',
  },
  description:
    'Bangalore-based manufacturer and supplier of high voltage electrical testing and measuring equipment built to IEC 60060 and IS 2071. Impulse generators, AC/DC test sets, partial discharge meters, and modular systems.',
  keywords: [
    'high voltage test equipment manufacturer Bangalore',
    'impulse voltage generator',
    'AC HV test set',
    'DC HV test set',
    'partial discharge meter',
    'IEC 60060',
    'IS 2071',
    'ASTM D3300',
    'modular high voltage test systems',
    'sphere gap 250mm',
    'WS Test Systems support',
  ],
  authors: [{ name: 'Hi-Volt Engineering Solutions' }],
  creator: 'Hi-Volt Engineering Solutions',
  publisher: 'Hi-Volt Engineering Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hivoltengineeringsolutions.com',
    siteName: 'Hi-Volt Engineering Solutions',
    title: 'Hi-Volt Engineering Solutions | High Voltage Test & Measuring Systems',
    description:
      'Precision manufacturer of high voltage testing equipment conforming to IEC 60060 & IS 2071. Serving educational labs, power manufacturers, and utilities.',
    images: [
      {
        url: '/images/products/modular-hv-system.svg',
        width: 1200,
        height: 630,
        alt: 'Hi-Volt High Voltage Testing Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hi-Volt Engineering Solutions | High Voltage Test Equipment',
    description:
      'Manufacturer of high voltage electrical testing and measuring equipment conforming to IEC 60060 and IS 2071.',
    images: ['/images/products/modular-hv-system.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B172A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema (Organization & LocalBusiness)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
        '@id': 'https://www.hivoltengineeringsolutions.com/#organization',
        name: companyData.name,
        legalName: companyData.legalName,
        url: 'https://www.hivoltengineeringsolutions.com',
        logo: 'https://www.hivoltengineeringsolutions.com/images/logo.svg',
        description: companyData.mission,
        foundingDate: '2017-10',
        address: {
          '@type': 'PostalAddress',
          streetAddress: companyData.location.street,
          addressLocality: companyData.location.city,
          addressRegion: companyData.location.state,
          postalCode: companyData.location.pincode,
          addressCountry: 'IN',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: companyData.contact.phones[0],
            contactType: 'sales and technical support',
            email: companyData.contact.email,
            areaServed: ['IN', 'Worldwide'],
            availableLanguage: ['English', 'Hindi', 'Kannada'],
          },
        ],
        knowsAbout: [
          'High Voltage Testing',
          'IEC 60060',
          'IS 2071',
          'Impulse Generators',
          'Partial Discharge Measurement',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.hivoltengineeringsolutions.com/#website',
        url: 'https://www.hivoltengineeringsolutions.com',
        name: 'Hi-Volt Engineering Solutions',
        publisher: {
          '@id': 'https://www.hivoltengineeringsolutions.com/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 dark:bg-[#0B132B] text-slate-900 dark:text-slate-100 transition-colors duration-150"
      >
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
