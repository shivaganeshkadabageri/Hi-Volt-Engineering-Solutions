'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { companyData } from '@/content/company';
import { productCategories } from '@/content/products';

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // On non-home pages: display only a clean, minimal copyright & privacy policy strip
  if (!isHomePage) {
    return (
      <footer
        className="bg-slate-950 text-slate-400 border-t border-slate-900 py-6 text-xs"
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Hi-Volt Engineering Solutions. All rights reserved.
          </p>
          <span className="hidden sm:inline text-slate-600">•</span>
          <Link
            href="/privacy"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    );
  }

  // On Home page: render the full comprehensive engineering footer
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" aria-label="Footer">
      {/* Upper Footer: Engineering Credibility Banner */}
      <div className="border-b border-slate-900 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">IEC 60060 &amp; IS 2071 Standard Compliance</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Every high-voltage test set and impulse generator is engineered, manufactured, and calibrated strictly against national and international HV standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1 rounded bg-sky-950 text-sky-400 font-bold font-mono text-xs shrink-0 mt-0.5">
                EST. 2017
              </div>
              <div>
                <h4 className="font-bold text-white">Three Decades Engineering Heritage</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Formed by veteran specialists following the closure of WS Test Systems Bangalore, continuing decades of world-class high-voltage craftsmanship.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Legacy Support &amp; Retrofits</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Specialized upgrades, spare parts, and wave-shaping components for WS Test Systems, MWB (India &amp; Germany), TERCO (Sweden), and Passoni Villa (Italy).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-56 h-14">
              <Image
                src="/images/logo-dark.png"
                alt="Hi-Volt Engineering Solutions"
                fill
                unoptimized
                className="object-contain object-left"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Hi-VOLT ENGINEERING SOLUTIONS is a reputed Manufacturer and Supplier of Electrical Testing &amp; Measuring Equipment. Conforming to IEC 60060 and IS 2071 standards.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 font-mono">
                IEC 60060
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 font-mono">
                IS 2071
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 font-mono">
                ASTM D3300
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 font-mono">
                IEC 60270
              </span>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-400 transition-colors">
                  Products Catalogue
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-sky-400 transition-colors">
                  Quality Policy &amp; Objectives
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:text-sky-400 transition-colors">
                  Our Customers
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About Hi-Volt
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Contact &amp; Enquiry
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Product Range */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Equipment Range
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat)}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products/modular-high-voltage-test-systems"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  Modular HV Systems &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Manufacturing Facility & Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Works &amp; Office
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                {companyData.location.address}
              </span>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`tel:${companyData.contact.phones[0].replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`tel:${companyData.contact.phones[1].replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.phones[1]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Hi-Volt%2C%20I%20would%20like%20to%20enquire%20about%20high%20voltage%20testing%20equipment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-900/60 text-emerald-300 border border-emerald-800 text-xs font-semibold hover:bg-emerald-800/80 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp Instant Inquiry</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} Hi-Volt Engineering Solutions. All rights reserved.
          </p>
          <span className="hidden sm:inline text-slate-700">•</span>
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
