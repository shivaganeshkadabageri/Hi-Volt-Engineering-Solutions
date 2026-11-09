import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Wrench,
  Zap,
  ArrowRight,
  History,
} from 'lucide-react';
import {
  companyData,
  aboutTimeline,
  manufacturedEquipmentList,
  authenticAboutContent,
} from '@/content/company';

export const metadata: Metadata = {
  title: 'About | Hi-Volt Engineering Solutions',
  description:
    'Hi-VOLT ENGINEERING SOLUTIONS is a reputed Manufacturer and Supplier of Electrical Testing & Measuring Equipment, established in 2017 at Bangalore, India conforming to IEC 60060 and IS 2071.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Hero with Authentic About Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-semibold">
            <History className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Bangalore, India &bull; Established 2017</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            About
          </h1>

          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              {authenticAboutContent.paragraphs[0]}
            </p>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal pt-6 border-t border-slate-200 dark:border-slate-800">
              {authenticAboutContent.paragraphs[1]}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-md bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-mono font-bold">
                IEC 60060 Conformance
              </span>
              <span className="px-3 py-1.5 rounded-md bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono font-bold">
                IS 2071 Conformance
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-semibold">
                Energy Efficient &amp; Easy to Work With
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-semibold">
                Aesthetic &amp; Skilled Workmanship
              </span>
            </div>
          </div>
        </div>

        {/* Mission Statement Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              <Compass className="w-4 h-4" />
              <span>Our Corporate Commitment</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Making International Standard HV Equipment Universally Accessible
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              &ldquo;{companyData.mission}&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-md bg-sky-900/80 border border-sky-700 font-mono text-sky-300 font-bold">
                IEC 60060 Conformance
              </span>
              <span className="px-3 py-1 rounded-md bg-amber-900/80 border border-amber-700 font-mono text-amber-300 font-bold">
                IS 2071 Conformance
              </span>
            </div>
          </div>
        </div>

        {/* Manufactured Equipment Catalog Scope */}
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Manufactured &amp; Supplied Equipment Scope
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Engineered and assembled in our Bangalore facilities with precision electrical calibration:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {manufacturedEquipmentList.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                <Zap className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500"
            >
              <span>Explore full products catalog with ratings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Background & Heritage Timeline */}
        <div className="space-y-8">
          <div className="border-l-4 border-sky-600 pl-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Company Background &amp; Heritage
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Formed after overwhelming demand following the closure of WS Test Systems Private Limited.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 sm:pl-8 space-y-10">
            {aboutTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0B132B] border-4 border-sky-500 group-hover:scale-125 transition-transform" />

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-mono text-xs font-bold">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Customer Support Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Wrench className="w-3.5 h-3.5" />
                <span>Legacy Systems Continuity</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Active Legacy Brand Support &amp; Retrofits
              </h3>
            </div>
            <Link
              href="/contact?subject=Legacy%20Equipment%20Support%20Enquiry"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0"
            >
              <span>Enquire for Legacy Spares</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Hi-Volt proudly supports legacy customers of the following globally recognized high-voltage equipment manufacturers with matching resistors, inductors, sphere gap upgrades, oil cells, and complete modern control conversions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            {companyData.legacyHeritage.supportedLegacyBrands.map((brand) => (
              <div
                key={brand}
                className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center font-bold text-xs text-sky-300 flex items-center justify-center min-h-[50px]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
