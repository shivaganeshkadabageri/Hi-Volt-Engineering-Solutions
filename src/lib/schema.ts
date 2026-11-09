import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[+0-9\s\-()]{7,20}$/.test(val), {
      message: 'Please enter a valid phone number (e.g. +91 99860 24480)',
    }),
  company: z.string().trim().optional(),
  subject: z.string().trim().min(3, { message: 'Subject must be at least 3 characters long' }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters long' }),
  productInterest: z.string().optional(),
  // Honeypot field - must be empty when submitted by human
  botField: z.string().max(0, { message: 'Spam detected' }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
