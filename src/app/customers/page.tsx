import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Building2, ExternalLink } from 'lucide-react';
import { customerList } from '@/content/customers';

export const metadata: Metadata = {
  title: 'Our Customers & Client Partners | Hi-Volt Engineering Solutions',
  description:
    'Hi-Volt serves educational institutions, academic research laboratories, power equipment manufacturers, and electrical utilities across India and globally, including Hitachi.',
};

export default function CustomersPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Academic, Utility &amp; Industrial Partners</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Our Customers &amp; Client Partners
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Hi-Volt Engineering Solutions supplies precision high-voltage test apparatus to leading educational institutions, electrical research labs, power equipment manufacturers, and electrical utilities throughout India and internationally.
          </p>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {customerList.map((cust) => (
            <div
              key={cust.id}
              className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-sky-500 dark:hover:border-sky-400 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-28 sm:h-32 flex items-center justify-center p-3 bg-white rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 overflow-hidden">
                  <Image
                    src={cust.logo}
                    alt={cust.name}
                    fill
                    unoptimized
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-center">
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                    {cust.name}
                  </h3>
                  {cust.category && (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                      {cust.category}
                    </span>
                  )}
                </div>
              </div>

              {cust.url && (
                <div className="mt-4 pt-2 text-center">
                  <a
                    href={cust.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client Sectors Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
              Academic &amp; Research Labs
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              University engineering colleges, technical institutes, and doctoral high-voltage labs relying on modular construction systems, sphere gaps, and partial discharge training benches.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
              Power Equipment Manufacturers
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Switchgear, power transformer, insulator, and capacitor manufacturers conducting routine factory acceptance tests (FAT) and type testing to IEC standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
              Electrical Utilities &amp; Grid Labs
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Transmission and distribution utilities deploying high-voltage test sets, ASTM D3300 impulse oil test cells, and DC proof test systems for network reliability.
            </p>
          </div>
        </div>

       {/* Note on Client Logos */}
        {/* <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-300 flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-600 dark:text-sky-400" />
          <p className="leading-relaxed">
            Note: As per our content integrity policy, client partner logos are maintained in <code>src/content/customers.ts</code>. Hitachi Energy is verified; remaining client partner logos will be uploaded upon official file transmission.
          </p>
        </div> */}
      </div>
    </div>
  );
}
