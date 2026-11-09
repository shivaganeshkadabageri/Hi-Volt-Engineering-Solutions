'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '@/lib/schema';
import { productsData } from '@/content/products';

interface ContactFormProps {
  initialProductSlug?: string;
  initialSubject?: string;
  className?: string;
  isCompact?: boolean;
}

export function ContactForm({
  initialProductSlug,
  initialSubject,
  className = '',
  isCompact = false,
}: ContactFormProps) {
  const searchParams = useSearchParams();
  const productParam = initialProductSlug || searchParams.get('product') || '';
  const subjectParam = initialSubject || searchParams.get('subject') || '';

  const matchedProduct = productsData.find((p) => p.slug === productParam);

  const [formData, setFormData] = useState<ContactFormData>(() => ({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: subjectParam || (matchedProduct ? `Quotation Request: ${matchedProduct.name}` : ''),
    message: matchedProduct
      ? `Dear Hi-Volt Sales Team,\n\nPlease provide a technical quote and standard delivery lead-time for the ${matchedProduct.name} (${matchedProduct.rating}).\n\nOur lab/application requirements are:\n- Intended testing apparatus:\n- Operating environment:\n\nThank you.`
      : '',
    productInterest: productParam,
    botField: '',
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus('idle');

    // 1. Client-side Zod validation
    const clientValidation = contactFormSchema.safeParse(formData);
    if (!clientValidation.success) {
      const fieldErrors: Record<string, string> = {};
      clientValidation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // 2. Server API Submission
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus('success');
        setStatusMessage(resData.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          productInterest: '',
          botField: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(resData.error || 'Failed to submit enquiry. Please try again.');
        if (resData.details) {
          const serverFieldErrors: Record<string, string> = {};
          Object.keys(resData.details).forEach((key) => {
            serverFieldErrors[key] = resData.details[key][0];
          });
          setErrors(serverFieldErrors);
        }
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network connection error. Please verify your connection or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm ${className}`}
    >
      {/* Success Alert Banner */}
      {status === 'success' && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <h4 className="font-bold">Enquiry Received Successfully</h4>
            <p className="mt-1 leading-relaxed">{statusMessage}</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300 underline inline-flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Send another message</span>
            </button>
          </div>
        </div>
      )}

      {/* Error Alert Banner */}
      {status === 'error' && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <h4 className="font-bold">Submission Error</h4>
            <p className="mt-1 leading-relaxed">{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-spam Honeypot (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="botField">Leave this field blank</label>
          <input
            id="botField"
            type="text"
            name="botField"
            tabIndex={-1}
            autoComplete="off"
            value={formData.botField}
            onChange={handleChange}
          />
        </div>

        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Kumar"
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.name
                  ? 'border-rose-500 dark:border-rose-500'
                  : 'border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-rose-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
            >
              Official / Business Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              value={formData.email}
              onChange={handleChange}
              placeholder="name@institution.ac.in / name@company.com"
              className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                errors.email
                  ? 'border-rose-500 dark:border-rose-500'
                  : 'border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-rose-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
            >
              Phone / Mobile (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 99860 24480"
              className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-rose-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
            >
              Company / University / Lab (Optional)
            </label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Electrical Engineering Dept"
              className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Product of Interest Dropdown (Prefilled/Hidden option) */}
        <div>
          <label
            htmlFor="productInterest"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
          >
            Product of Interest
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">General High Voltage Equipment Enquiry</option>
            {productsData.map((prod) => (
              <option key={prod.slug} value={prod.slug}>
                {prod.name} ({prod.rating})
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
          >
            Subject <span className="text-rose-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            required
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Technical Enquiry &amp; Quotation for AC Test Set"
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              errors.subject
                ? 'border-rose-500 dark:border-rose-500'
                : 'border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white'
            }`}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-xs text-rose-500">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1"
          >
            Detailed Specifications &amp; Inquiry <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={isCompact ? 3 : 5}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify your voltage rating, required duty cycle, standard (e.g. IEC 60060), and delivery requirements..."
            className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              errors.message
                ? 'border-rose-500 dark:border-rose-500'
                : 'border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-rose-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 disabled:bg-slate-400 text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Technical Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Technical Enquiry to Hi-Volt</span>
              </>
            )}
          </button>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center">
            Inquiries are routed directly to our Bangalore engineering desk. No spam guaranteed.
          </p>
        </div>
      </form>
    </div>
  );
}
