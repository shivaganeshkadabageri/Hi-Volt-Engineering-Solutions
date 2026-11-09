import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layers, CheckCircle2, ArrowRight, Zap, GraduationCap, Factory } from 'lucide-react';

export function ModularHighlight() {
  const ranges = [
    {
      stage: 'Single Stage',
      ac: '100 kV AC',
      dcImpulse: '140 kV DC / Impulse',
      description: 'Ideal baseline for fundamental laboratory teaching and single-component flashover experiments.',
    },
    {
      stage: 'Two Stage',
      ac: '100 kV AC',
      dcImpulse: '280 kV DC / Impulse',
      description: 'Expanded research capacity for medium-voltage insulators, vacuum bottles, and surge devices.',
    },
    {
      stage: 'Three Stage',
      ac: '100 kV AC',
      dcImpulse: '420 kV DC / Impulse',
      description: 'High-voltage research range supporting advanced impulse breakdown investigations and switchgear testing.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0B132B] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flagship Highlight Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white p-8 sm:p-12 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/60 border border-sky-700 text-sky-300 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Flagship: Modular HV Construction Kit</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Modular High Voltage Test Systems
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Inter-convertible high voltage construction system designed specifically for educational institutions for academic and research use with all required safety features. Conforms strictly to{' '}
                <strong className="text-sky-300 font-bold">IEC 60060 and IS 2071</strong>.
              </p>

              {/* Two Column Use Case Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic &amp; Student Labs</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Can be dismantled and reassembled quickly by students with built-in visible grounding and foolproof interlocks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
                    <Factory className="w-4 h-4" />
                    <span>Commercial Testing Scope</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Suited to testing vacuum interrupters, lightning arresters, insulators, instrument transformers, and switchgear.
                  </p>
                </div>
              </div>

              {/* Instrumentation Integration */}
              <div className="text-xs text-slate-300 flex items-start gap-2 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Easily integrated with Partial Discharge measuring equipment, and capacitance and Tan delta bridges.
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/products/modular-high-voltage-test-systems"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow"
                >
                  <span>Explore 3-Stage Modular Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact?product=modular-high-voltage-test-systems&subject=Modular%20HV%20Test%20System%20Quote"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  <span>Request System Quote</span>
                </Link>
              </div>
            </div>

            {/* Right: The 3 Standardized Ranges Table */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <Image
                  src="/images/products/modular-hv-system.svg"
                  alt="Modular High Voltage Test System Schematics"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-2.5">
                {ranges.map((r) => (
                  <div
                    key={r.stage}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-white">{r.stage}</span>
                      <span className="text-amber-400 font-mono">
                        {r.ac} / {r.dcImpulse}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
