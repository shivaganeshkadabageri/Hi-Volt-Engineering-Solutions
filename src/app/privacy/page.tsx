import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';
import { companyData } from '@/content/company';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Rights | Hi-Volt Engineering Solutions',
  description:
    'Hi-Volt Engineering Solutions privacy policy: how we process B2B customer inquiries, technical specifications, and cookie preferences.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-[#0B132B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Privacy Policy &amp; Data Rights
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Last Updated: November 2026 &bull; Hi-Volt Engineering Solutions, Bangalore
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-sky-500" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              Hi-Volt Engineering Solutions operates as a B2B manufacturer of high voltage electrical test apparatus. We collect information submitted voluntarily by visitors, lab heads, procurement officers, and researchers through our online quotation and contact forms:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs">
              <li>Full Name and Professional Title</li>
              <li>Official / Business Email Address</li>
              <li>Phone or Mobile Contact Numbers</li>
              <li>Institution, Academic Department, or Company Name</li>
              <li>Product of Interest and Technical Testing Specifications</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-500" />
              <span>2. How We Use Technical Inquiry Data</span>
            </h2>
            <p>
              Your contact details and technical requirements are utilized strictly for:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs">
              <li>Generating commercial proposals, quotation estimates, and tender responses.</li>
              <li>Providing technical datasheets, schematics, and standard conformance documentation.</li>
              <li>Providing after-sales support, warranty service, and legacy WS Test Systems parts support.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              We never sell, rent, or disclose your corporate or institutional data to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-500" />
              <span>3. Cookies &amp; Anonymous Analytics</span>
            </h2>
            <p>
              Our website uses strictly necessary technical cookies to retain your display preferences (such as Light/Dark mode). Optional anonymous analytics cookies may be used to measure site traffic patterns and optimize catalog navigation, activated only after explicit consent via our cookie banner.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              4. Contacting Our Data Controller
            </h2>
            <p className="text-xs">
              If you wish to review, update, or request the deletion of any inquiry records held by Hi-Volt, contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono space-y-1">
              <p>Hi-Volt Engineering Solutions</p>
              <p>Email: {companyData.contact.email}</p>
              <p>Phone: {companyData.contact.phones[0]}</p>
              <p>Address: Sy No. 38, No. 15, 7th A Cross, Balaji Nagar, Thigalarapalya Main Road, Peenya Industrial Area, Bengaluru - 560058, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
