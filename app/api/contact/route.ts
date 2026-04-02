import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import arcjet, { shield, detectBot, fixedWindow } from '@arcjet/next';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// Initialize Arcjet with protection rules
const aj = process.env.ARCJET_KEY ? arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Shield protects your application from common attacks
    shield({
      mode: "LIVE", 
    }),
    // Detect and block bots
    detectBot({
      mode: "LIVE", 
      allow: [], // block all bots
    }),
    // Rate limiting - 1 submission per 5 minutes per IP
    fixedWindow({
      mode: "LIVE", // Actually block requests
      window: "1m", // 5 minutes window
      max: 1, // maximum 1 request per window
    }),
  ],
}) : null;

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    // Get request body
    const body = await request.json();
    
    // Validate form data
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid form data' },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Apply Arcjet protection
    if (aj) {
      const decision = await aj.protect(request);
      
      if (decision.isDenied()) {
        // Calculate reset time (5 minutes from now)
        const resetTime = new Date(Date.now() + 5 * 60 * 1000);
        
        return NextResponse.json(
          { 
            message: 'Too many requests. Please try again later.',
            rateLimited: true,
            resetTime: resetTime.toISOString()
          },
          { status: 429 }
        );
      }
    }

    // Send email using Resend
    if (!resend) {
      console.error('Resend not configured');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'delivered@resend.dev',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from: ${request.headers.get('user-agent')}</small></p>
      `,
    });

    console.log('Resend data:', data);
    console.log('Resend error:', error);

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Calculate next available time (5 minutes from now for successful submission)
    const resetTime = new Date(Date.now() + 5 * 60 * 1000);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        rateLimited: false,
        resetTime: resetTime.toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
