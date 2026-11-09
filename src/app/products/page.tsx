import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ProductCatalog } from '@/components/products/ProductCatalog';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products Catalogue | High Voltage Test & Measuring Equipment',
  description:
    'Explore Hi-Volt\'s complete range of high voltage electrical test sets, impulse generators, partial discharge meters, oil test cells, and modular construction systems conforming to IEC 60060 and IS 2071.',
};

export default function ProductsPage() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Strictly Conforming to IEC 60060 &amp; IS 2071 Standards</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            High Voltage Test &amp; Measuring Equipment
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Filter our complete catalogue of AC/DC high voltage test sets, impulse voltage &amp; current generators, partial discharge meters, and modular educational systems. Select any model to review full technical ratings and request an official factory quote.
          </p>
        </div>

        {/* Filterable, Searchable Product Catalog */}
        <Suspense
          fallback={
            <div className="space-y-6">
              <div className="h-24 rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-72 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"
                  />
                ))}
              </div>
            </div>
          }
        >
          <ProductCatalog />
        </Suspense>
      </div>
    </div>
  );
}
