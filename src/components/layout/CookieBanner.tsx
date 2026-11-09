'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

function enableAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (gaId && typeof window !== 'undefined' && !document.getElementById('ga-script')) {
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(inlineScript);
  }
}

export function CookieBanner() {
  const [consentState, setConsentState] = useState<'pending' | 'accepted' | 'rejected'>('accepted');
  const [isClient, setIsClient] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('hivolt-cookie-consent');
    if (!saved) {
      setConsentState('pending');
    } else {
      setConsentState(saved as 'accepted' | 'rejected');
      if (saved === 'accepted') {
        enableAnalytics();
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('hivolt-cookie-consent', 'accepted');
    setConsentState('accepted');
    enableAnalytics();
  };

  const handleRejectAll = () => {
    localStorage.setItem('hivolt-cookie-consent', 'rejected');
    setConsentState('rejected');
  };

  const handleSaveCustom = () => {
    if (analyticsEnabled) {
      localStorage.setItem('hivolt-cookie-consent', 'accepted');
      setConsentState('accepted');
      enableAnalytics();
    } else {
      localStorage.setItem('hivolt-cookie-consent', 'rejected');
      setConsentState('rejected');
    }
    setShowCustomizeModal(false);
  };

  if (!isClient || consentState !== 'pending') {
    return null;
  }

  return (
    <>
      {/* Banner */}
      <aside
        aria-label="Cookie consent banner"
        className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl text-slate-200"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hi-Volt Engineering Solutions uses technical cookies essential for website functionality and optional anonymous analytics to optimize your engineering research experience. Read our{' '}
              <Link href="/privacy" className="text-sky-400 underline hover:text-sky-300">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setShowCustomizeModal(true)}
              className="px-3.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
            >
              Customize
            </button>
            <button
              onClick={handleRejectAll}
              className="px-3.5 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-1.5 rounded-md text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </aside>

      {/* Customize Modal */}
      {showCustomizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6 text-slate-800 dark:text-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold">Cookie Preferences</h3>
              <button
                onClick={() => setShowCustomizeModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Strictly Necessary Cookies</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                    Required for core website security, session navigation, and preference memory.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded">
                  Always Active
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Anonymous Analytics</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                    Helps us analyze catalog traffic patterns to improve technical documentation.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2">
              <button
                onClick={() => setShowCustomizeModal(false)}
                className="px-3 py-1.5 rounded text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveCustom}
                className="px-4 py-1.5 rounded text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
