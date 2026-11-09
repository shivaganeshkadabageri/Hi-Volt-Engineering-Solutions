import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/schema';
import { isRateLimited } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown-ip';

    const { limited } = isRateLimited(ip, 5, 10 * 60 * 1000);
    if (limited) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few minutes before submitting another enquiry.',
        },
        { status: 429 }
      );
    }

    // 2. Parse and Validate Body
    const body = await request.json();
    const parseResult = contactFormSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please review the highlighted fields.',
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // 3. Honeypot Spam Check
    if (data.botField && data.botField.trim() !== '') {
      // Silently discard spam submission
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been received.',
      });
    }

    // 4. Send Email via Nodemailer (if configured) or fallback to logged dispatch
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || 'marketing@hivoltengineeringsolutions.com';

    const emailSubject = `[Hi-Volt Web Enquiry] ${data.subject}${
      data.productInterest ? ` - Product: ${data.productInterest}` : ''
    }`;

    const textContent = `
NEW HIGH VOLTAGE INQUIRY RECEIVED
=================================
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company / Institution: ${data.company || 'Not provided'}
Product of Interest: ${data.productInterest || 'General Inquiry'}

Subject: ${data.subject}

Message:
${data.message}

Timestamp: ${new Date().toISOString()}
Sender IP: ${ip}
`;

    if (host && user && pass && host !== 'smtp.example.com') {
      const transporter = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"Hi-Volt Website Inquiries" <${user}>`,
        to: recipient,
        replyTo: data.email,
        subject: emailSubject,
        text: textContent,
      });
    } else {
      console.log('Simulating email delivery (SMTP not configured):', {
        to: recipient,
        subject: emailSubject,
        sender: data.email,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        'Thank you for contacting Hi-Volt Engineering Solutions. Our high-voltage engineering team will review your specifications and respond shortly.',
    });
  } catch (error) {
    console.error('Error processing contact enquiry:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          'An unexpected server error occurred while sending your message. Please contact us directly at marketing@hivoltengineeringsolutions.com or call +91 99860 24480.',
      },
      { status: 500 }
    );
  }
}
