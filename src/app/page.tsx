import React, { Suspense } from 'react';
import { HeroSlider } from '@/components/home/HeroSlider';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ModularHighlight } from '@/components/home/ModularHighlight';
import { FeaturedSystems } from '@/components/home/FeaturedSystems';
import { WhyHiVolt } from '@/components/home/WhyHiVolt';
import { CustomerStrip } from '@/components/home/CustomerStrip';
import { ContactForm } from '@/components/contact/ContactForm';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { companyData } from '@/content/company';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Equipment Slider & IEC 60060 / IS 2071 claims */}
      <HeroSlider />

      {/* 2. Product Category Highlights */}
      <CategoryGrid />

      {/* 3. Featured Big-Ticket Equipment Strip */}
      <FeaturedSystems />

      {/* 4. Modular High Voltage Test Systems (Prominent Feature) */}
      <ModularHighlight />

      {/* 5. Why Hi-Volt (Strictly Real Claims & Legacy Heritage) */}
      <WhyHiVolt />

      {/* 6. Customer Logos Strip */}
      <CustomerStrip />

      {/* 7. Homepage Quick Enquiry Form Block */}
      <section
        id="quick-quote"
        className="py-16 sm:py-24 bg-slate-100 dark:bg-[#081022] border-t border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Prompt & Direct Sales Contact */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                <span>Direct Manufacturer Enquiry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Request Specifications or a Tailored Commercial Quotation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Whether you are establishing an academic high-voltage laboratory, replacing aging test components, or procuring a 300kV transformer test set, our Bangalore engineering team delivers detailed technical documentation and competitive pricing.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Manufacturing Works &amp; Office</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Sy No. 38, No. 15, 7th A Cross, Balaji Nagar, Thigalarapalya Main Road, Peenya Industrial Area, Bengaluru &ndash; 560058
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Phone className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Direct Engineering Lines</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {companyData.contact.phones[0]} &bull; {companyData.contact.phones[1]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Official Technical Email</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {companyData.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Business Hours</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {companyData.contact.businessHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Component */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="h-96 rounded-2xl bg-white dark:bg-slate-900 animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
