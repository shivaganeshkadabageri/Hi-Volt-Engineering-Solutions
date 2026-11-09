import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Building2 } from 'lucide-react';
import { customerList } from '@/content/customers';

export function CustomerStrip() {
  return (
    <section className="py-14 bg-slate-50 dark:bg-[#070D18] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Trusted By Industry &amp; Academia</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Customer Relationships Across India &amp; Worldwide
            </h3>
          </div>
          <Link
            href="/customers"
            className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 inline-flex items-center gap-1 shrink-0"
          >
            <span>View Full Customer Grid</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Customer Logos Strip - Full Color by Default & Larger Sizing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {customerList.map((cust) => (
            <div
              key={cust.id}
              className="group p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-sky-500/50 hover:shadow-md"
            >
              <div className="relative w-full h-20 sm:h-24 p-2 bg-white rounded-lg flex items-center justify-center shadow-xs border border-slate-100 dark:border-slate-800 overflow-hidden">
                <Image
                  src={cust.logo}
                  alt={cust.name}
                  fill
                  unoptimized
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2.5 truncate max-w-[160px] text-center" title={cust.name}>
                {cust.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
