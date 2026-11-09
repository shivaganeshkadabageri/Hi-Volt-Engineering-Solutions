import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  Wrench,
  Coins,
  History,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { companyData } from '@/content/company';

export function WhyHiVolt() {
  const realClaims = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
      title: 'Built Strictly to IEC 60060 & IS 2071',
      description:
        'Every high voltage construction kit, impulse generator, and AC/DC test set is engineered to meet or exceed national and international high-voltage test techniques standards.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Energy Efficient & Easy to Work With',
      description:
        'Designed with optimized magnetic circuits, low partial discharge baselines, ergonomic operator consoles, and student-safe quick-assembly interlocks.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      title: 'Skilled High-Voltage Workmanship',
      description:
        'Long-lasting performance, electrical insulation endurance, and precision mechanical alignment crafted by technicians with decades of high-voltage manufacturing expertise.',
    },
    {
      icon: <Coins className="w-6 h-6 text-emerald-500" />,
      title: 'Competitive Direct-Manufacturer Pricing',
      description:
        'Available in a flexible range of variants at reasonable, transparent manufacturer pricing without middleman markups for laboratories and industries worldwide.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0B132B] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 4 Real Claims */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                <span>Verified Engineering Value</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Why Engineering Teams Choose Hi-Volt
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                Founded on uncompromising precision, verified international standards, and deep high-voltage equipment heritage in Bangalore.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {realClaims.map((claim) => (
                <div
                  key={claim.title}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60"
                >
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 w-fit mb-3 shadow-xs">
                    {claim.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {claim.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {claim.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Legacy Heritage Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#101c38] text-white p-7 sm:p-8 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center gap-2.5">
                <History className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Legacy Continuity &amp; Support
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Supporting Customers of Legacy High Voltage Brands
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Following closure notices issued to all employees of the globally renowned WS Test Systems Private Limited, Bangalore on 30 June 2017 after over three decades of operation, Hi-Volt was founded to provide uninterrupted technical support, spare parts, and system upgrades.
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2.5">
                  Supported Legacy Installations:
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {companyData.legacyHeritage.supportedLegacyBrands.map((brand) => (
                    <li key={brand} className="flex items-center gap-2 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{brand}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/about"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5"
                >
                  <span>Read Company History &amp; Timeline</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
