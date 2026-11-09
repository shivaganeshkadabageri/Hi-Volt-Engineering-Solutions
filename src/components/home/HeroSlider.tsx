'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Slide {
  id: string;
  badge: string;
  title: string;
  rating: string;
  description: string;
  image: string;
  slug: string;
  standards: string[];
}

const slides: Slide[] = [
  {
    id: 'modular-systems',
    badge: 'Educational & Industrial Flagship',
    title: 'Modular High Voltage Test Systems',
    rating: 'Single / Two / Three Stage: Up to 420kV',
    description:
      'Inter-convertible construction kit designed for university research laboratories and small/medium voltage power equipment testing. Dismantles and reassembles quickly with student-safe interlocks.',
    image: '/images/products/modular-hv-system.svg',
    slug: 'modular-high-voltage-test-systems',
    standards: ['IEC 60060', 'IS 2071'],
  },
  {
    id: 'impulse-1200kv',
    badge: 'High-Power Testing Systems',
    title: 'Impulse Voltage Generator',
    rating: '1200kV / 120kJ Peak Transient Power',
    description:
      'Full-scale Marx impulse generator engineered for severe lightning arrester testing, polymeric insulator characterization, and extra-high-voltage substation equipment validation.',
    image: '/images/products/impulse-generator-1200kv.svg',
    slug: 'impulse-voltage-generator-1200kv-120kj',
    standards: ['IEC 60060-1', 'IEC 60099-4', 'IS 2071'],
  },
  {
    id: 'pd-meter',
    badge: 'Non-Destructive Insulation Quality',
    title: 'Partial Discharge Measuring System',
    rating: 'Calibrated Picocoulomb (pC) Diagnostics',
    description:
      'Turnkey PD diagnostic kit with DTM meter, AKV-D measuring impedance, co-axial cable, and PDG pulse calibrator. Critical for void and corona detection in HV apparatus.',
    image: '/images/products/partial-discharge-meter.svg',
    slug: 'partial-discharge-meter',
    standards: ['IEC 60270', 'IS 2071'],
  },
  {
    id: 'ac-test-sets',
    badge: 'Dielectric Proof Testing',
    title: 'AC High Voltage Test Sets',
    rating: '100kV, 200kV & 300kV / 20kVA – 300kVA',
    description:
      'Power frequency dielectric withstand testing for switchgear, dry and oil-immersed transformers, vacuum interrupters, and porcelain/composite insulators.',
    image: '/images/products/ac-test-set-100kv.svg',
    slug: 'ac-test-set-100kv-20kva',
    standards: ['IEC 60060', 'IS 2071'],
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800 bg-tech-grid"
      aria-label="Featured High Voltage Test Equipment"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative Technical Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Real Claims & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Standards Compliance Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>Conforms Strictly to IEC 60060 &amp; IS 2071</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </div>

            {/* Main Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              High Voltage Test &amp; Measuring Equipment Built to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300">
                IEC 60060 &amp; IS 2071
              </span>
            </h1>

            {/* Real Claim Supporting Line */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Engineered in Bangalore, India for educational research laboratories, power apparatus manufacturers, and electrical utilities worldwide. Energy-efficient, reliable, and backed by skilled high-voltage workmanship.
            </p>

            {/* Real Proof Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Modular student-safe construction kits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Up to 1200kV impulse &amp; 300kV AC sets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Supports legacy WS Test Systems &amp; MWB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Rapid quotations for lab heads &amp; R&amp;D</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-all duration-150 shadow-lg shadow-sky-600/25"
              >
                <span>View Products Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?subject=Request%20for%20Quotation"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-sm transition-all duration-150 shadow-md"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Carousel of Featured Equipment */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-2xl overflow-hidden">
              {/* Slide Counter & Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  Featured Equipment {currentSlide + 1} / {slides.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {slide.standards.map((st) => (
                    <span
                      key={st}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slide Image Preview */}
              <div className="relative w-full h-56 sm:h-64 my-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-contain p-2 transition-transform duration-500"
                />
              </div>

              {/* Slide Info */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white truncate">
                    {slide.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-amber-400 shrink-0">
                    {slide.rating}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Carousel Controls & Direct Link */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/products/${slide.slug}`}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>Inspect Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    aria-label="Previous featured equipment"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-1 px-1">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentSlide ? 'w-5 bg-sky-400' : 'w-1.5 bg-slate-700'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="p-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    aria-label="Next featured equipment"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
