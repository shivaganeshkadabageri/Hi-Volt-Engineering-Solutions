import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
} from 'lucide-react';
import { qualityContent } from '@/content/quality';

export const metadata: Metadata = {
  title: 'Quality Policy & Objectives | Hi-Volt Engineering Solutions',
  description:
    'Our dedication to quality of the highest order as a prerequisite for continued success. Discover Hi-Volt\'s Quality Policy, organizational objectives, and IEC/IS testing standards conformance.',
};

export default function QualityPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Uncompromising High Voltage Standards</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Quality Policy &amp; Corporate Objectives
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {qualityContent.intro}
          </p>
        </div>

        {/* "The company recognizes that..." 2 Key Principles */}
        <div className="space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              The Company Recognizes That:
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Foundational principles guiding our team at every level of manufacturing and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityContent.corePrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-mono font-bold text-sm">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {principle.statement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Policy Feature Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              <Award className="w-4 h-4" />
              <span>Official Policy Declaration</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {qualityContent.policy.headline}
            </h2>

            <blockquote className="text-base sm:text-xl font-medium text-slate-200 leading-relaxed italic border-l-2 border-amber-400 pl-4 my-4">
              &ldquo;{qualityContent.policy.statement}&rdquo;
            </blockquote>

            <p className="text-xs text-slate-400 leading-relaxed">
              Every design revision, insulation upgrade, and manufacturing iteration is grounded in rigorous test bay verification and direct technical customer feedback.
            </p>
          </div>
        </div>

        {/* Quality Objectives: 4-Card Layout */}
        <div className="space-y-6">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Quality Objectives
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Four measurable operational pillars maintained across all engineering processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityContent.objectives.map((obj) => (
              <div
                key={obj.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs flex items-center justify-center">
                      #{obj.id}
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                    {obj.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Standards Compliance Grid */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Technical Standards Framework
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Our high-voltage equipment satisfies the stringent measurement accuracy and safety criteria of international bodies.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 shrink-0"
            >
              <span>Explore Products Built to These Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityContent.standardsCompliance.map((std) => (
              <div
                key={std.code}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80"
              >
                <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-xs">
                  {std.code}
                </span>
                <h3 className="font-bold text-xs text-slate-900 dark:text-white mt-1">
                  {std.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
