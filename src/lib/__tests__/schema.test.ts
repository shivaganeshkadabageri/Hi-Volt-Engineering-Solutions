import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '../schema';

describe('Contact Form Validation Schema', () => {
  it('validates a complete, valid form payload', () => {
    const validData = {
      name: 'Dr. Ramesh Kumar',
      email: 'ramesh.kumar@iisc.ac.in',
      phone: '+91 99860 24480',
      company: 'High Voltage Laboratory, IISc',
      subject: 'Quotation for Modular High Voltage Test System',
      message: 'We are looking to set up an impulse and AC high voltage testing bench conforming to IEC 60060.',
      productInterest: 'modular-high-voltage-test-systems',
      botField: '',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects submissions with missing or invalid email', () => {
    const invalidEmailData = {
      name: 'Ramesh Kumar',
      email: 'not-an-email',
      subject: 'Inquiry',
      message: 'Need quotation for 100kV AC test set.',
    };

    const result = contactFormSchema.safeParse(invalidEmailData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors.some((e) => e.path.includes('email'))).toBe(true);
    }
  });

  it('rejects submissions with short messages', () => {
    const shortMessageData = {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Quote',
      message: 'Hi', // Under 10 characters
    };

    const result = contactFormSchema.safeParse(shortMessageData);
    expect(result.success).toBe(false);
  });

  it('detects honeypot bot submissions when botField is populated', () => {
    const botData = {
      name: 'Spam Bot',
      email: 'spammer@botnet.ru',
      subject: 'SEO Services Offer',
      message: 'We offer cheap search engine optimization services.',
      botField: 'I am a spam bot',
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });
});
