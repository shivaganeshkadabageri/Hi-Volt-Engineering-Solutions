import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface FeaturedCapability {
  title: string;
  rating: string;
  slug: string;
  image: string;
  applications: string;
  highlight: string;
}

const bigTicketSystems: FeaturedCapability[] = [
  {
    title: 'AC Test Transformer',
    rating: '300kV / 300kVA',
    slug: 'ac-test-transformer-300kv-300kva',
    image: '/images/products/ac-test-transformer-300kv-300kva.svg',
    applications: 'Heavy electrical apparatus routine & severe dielectric proof tests',
    highlight: 'Continuous heavy industrial rated AC power frequency supply',
  },
  {
    title: 'Impulse Voltage Generator',
    rating: '1200kV / 120kJ',
    slug: 'impulse-voltage-generator-1200kv-120kj',
    image: '/images/products/impulse-generator-1200kv.svg',
    applications: 'Lightning arrester testing, polymeric insulator testing, EHV grid gear',
    highlight: 'Massive Marx bank delivering 1.2/50µs and switching impulse surges',
  },
  {
    title: 'Impulse Current Generator',
    rating: '600kV / 25kA',
    slug: 'impulse-current-generator-600kv-25ka',
    image: '/images/products/impulse-current-generator-600kv.svg',
    applications: 'Lightning arrester testing, surge varistors, ground conductor durability',
    highlight: 'High amplitude 25kA surge currents with 0.1Ω coaxial measuring shunt',
  },
  {
    title: 'Impulse Steep Front Testing',
    rating: '1000kV/µs Rate of Rise',
    slug: 'impulse-steep-front-testing-1000kv-us',
    image: '/images/products/impulse-steep-front.svg',
    applications: 'Polymeric insulator testing, composite line insulator interface checks',
    highlight: 'Ultra-fast voltage rise exceeding 1000 kV/µs with pressurized gap',
  },
];

export function FeaturedSystems() {
  return (
    <section className="py-16 sm:py-20 bg-slate-100 dark:bg-[#070E20] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            <span>High-Capacity Installations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Featured Systems &amp; Heavy Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
            Engineered for severe high-power proof testing, lightning arrester testing, and polymeric insulator testing in compliance with IEC standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bigTicketSystems.map((item) => (
            <div
              key={item.slug}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-44 bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[10px] font-mono font-bold text-amber-400">
                    {item.rating}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold block mb-0.5">
                      Applications:
                    </strong>
                    {item.applications}
                  </div>

                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                    {item.highlight}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/products/${item.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 pt-3 border-t border-slate-100 dark:border-slate-800"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
