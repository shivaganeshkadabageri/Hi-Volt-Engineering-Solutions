import React from 'react';
import Link from 'next/link';
import {
  Activity,
  Zap,
  Layers,
  FlaskConical,
  Gauge,
  Sliders,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { productCategories, productsData } from '@/content/products';

interface CategoryMeta {
  icon: React.ReactNode;
  summary: string;
  count: number;
}

export function CategoryGrid() {
  const getCategoryDetails = (cat: string): CategoryMeta => {
    const count = productsData.filter((p) => p.category === cat).length;
    switch (cat) {
      case 'AC Test Sets':
        return {
          icon: <Zap className="w-6 h-6 text-sky-500" />,
          summary: 'Power frequency dielectric withstand testing up to 300kV / 300kVA for transformers and switchgear.',
          count,
        };
      case 'DC Test Sets':
        return {
          icon: <Activity className="w-6 h-6 text-emerald-500" />,
          summary: 'Single and two-stage cascade DC test benches up to 280kV for cable and power capacitor proof testing.',
          count,
        };
      case 'Impulse Generators':
        return {
          icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
          summary: 'Marx impulse generators from 300kV 15kJ to 1200kV 120kJ and 600kV 25kA impulse current sets.',
          count,
        };
      case 'Partial Discharge':
        return {
          icon: <Gauge className="w-6 h-6 text-cyan-500" />,
          summary: 'Non-destructive insulation diagnostics reading in pC, with DTM meter, AKV-D impedance, and PDG calibrator.',
          count,
        };
      case 'Oil Testing':
        return {
          icon: <FlaskConical className="w-6 h-6 text-orange-500" />,
          summary: 'Vertical and horizontal test cells plus impulse breakdown sets conforming strictly to ASTM D3300.',
          count,
        };
      case 'Measurement Accessories':
        return {
          icon: <Sliders className="w-6 h-6 text-indigo-500" />,
          summary: 'Ø250mm sphere gaps (100–500mm), wave-shaping resistors/inductors, and 0.1Ω 100kA measuring shunts.',
          count,
        };
      case 'Modular Systems':
        return {
          icon: <Layers className="w-6 h-6 text-purple-500" />,
          summary: 'Inter-convertible construction kit (1, 2 & 3 stage) for educational labs and medium voltage testing.',
          count,
        };
      default:
        return {
          icon: <Zap className="w-6 h-6 text-sky-500" />,
          summary: 'Precision high voltage equipment.',
          count,
        };
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0E172F] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              <span>Standard Product Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Equipment Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
              Browse our high voltage product lines conforming strictly to IEC 60060, IS 2071, and ASTM standards.
            </p>
          </div>
          <Link
            href="/products"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500"
          >
            <span>View All 19 Equipment Items</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((cat) => {
            const meta = getCategoryDetails(cat);
            return (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                className="group relative bg-white dark:bg-slate-900/90 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500 dark:hover:border-sky-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                      {meta.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                      {meta.count} {meta.count === 1 ? 'Model' : 'Models'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {cat}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {meta.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                  <span>Browse Range</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* Quick Quote Callout Card */}
          <div className="bg-gradient-to-br from-slate-900 to-sky-950 rounded-xl p-6 border border-sky-800/50 shadow-md text-white flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                Direct Engineering Help
              </span>
              <h3 className="text-base font-bold text-white mt-2">
                Need a Custom Test Setup?
              </h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Contact our Bangalore engineering team with your lab dimensions, test ratings, and applicable standards.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors"
            >
              <span>Send Specifications</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
