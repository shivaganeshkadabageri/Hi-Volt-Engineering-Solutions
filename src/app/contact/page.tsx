import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Building,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { ContactForm } from '@/components/contact/ContactForm';
import { companyData } from '@/content/company';

export const metadata: Metadata = {
  title: 'Contact Us & Request a Quote | Hi-Volt Engineering Solutions',
  description:
    'Contact Hi-Volt Engineering Solutions in Peenya Industrial Area, Bengaluru. Phone: +91 99860 24480 / +91 98800 89509, email: marketing@hivoltengineeringsolutions.com. Request technical quotations and product datasheets.',
};

export default function ContactPage() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    'Hi-Volt Engineering Solutions, Sy No. 38, No. 15, 7th A Cross, Balaji Nagar, Thigalarapalya Main Road, Peenya Industrial Area, Bengaluru 560058'
  )}&output=embed`;

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-semibold">
            <Building className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Peenya Industrial Area, Bengaluru Manufacturing Facility</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Contact &amp; Request a Quotation
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Have a technical requirement for high voltage testing equipment or need legacy WS Test Systems / MWB support? Connect directly with our engineering and procurement team in Bangalore.
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="h-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Contact Details & Tap-to-Call */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Registered Works &amp; Office
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Hi-Volt Engineering Solutions
                </h3>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-slate-900 dark:text-white">Hi-Volt Engineering Solutions</p>
                  <p>Sy No. 38, No. 15, 7th A Cross, Balaji Nagar,</p>
                  <p>Thigalarapalya Main Road,</p>
                  <p>Peenya Industrial Area, Bengaluru &ndash; 560058</p>
                </div>
              </div>

              {/* Tap to Call Numbers */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Mobile Lines (Tap to Call)
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${companyData.contact.phones[0].replace(/\s+/g, '')}`}
                    className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500 transition-colors flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <Phone className="w-4 h-4 text-sky-500" />
                    <span>{companyData.contact.phones[0]}</span>
                  </a>

                  <a
                    href={`tel:${companyData.contact.phones[1].replace(/\s+/g, '')}`}
                    className="flex-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500 transition-colors flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    <Phone className="w-4 h-4 text-sky-500" />
                    <span>{companyData.contact.phones[1]}</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Instant Chat */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Hi-Volt%2C%20I%20would%20like%20to%20enquire%20about%20high%20voltage%20testing%20equipment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Click-to-Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              {/* Email Address */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs sm:text-sm">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                    Technical Inquiries &amp; RFQs:
                  </span>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">
                    Operational Working Hours:
                  </span>
                  <span className="font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    {companyData.contact.businessHours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map (Lazy loaded) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Manufacturing Works Location
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Balaji Nagar, Thigalarapalya Main Road, Peenya Industrial Area, Bengaluru &ndash; 560058
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('Hi-Volt Engineering Solutions, Sy No. 38, No. 15, 7th A Cross, Balaji Nagar, Thigalarapalya Main Road, Peenya Industrial Area, Bengaluru 560058')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
            <iframe
              title="Hi-Volt Engineering Solutions Peenya Industrial Area Bengaluru Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
