"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Strict server-side validation schema
const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name is too long")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name is too long")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email is too long")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(1, "Please select a subject")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long")
    .trim(),
});

export type ContactFormState = {
  error?: string;
  success?: boolean;
  fieldErrors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    [key: string]: string[] | undefined;
  };
};

/**
 * Escape HTML special characters to prevent XSS in email templates.
 * Enterprise-grade: never trust user input in HTML context.
 */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  prevState: ContactFormState | undefined | null,
  formData: FormData
): Promise<ContactFormState> {
  // Extract and validate all fields the form actually sends
  const rawData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, subject, message } = result.data;

  // Sanitize all user input before HTML interpolation
  const safeName = escapeHtml(`${firstName} ${lastName}`);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const recipientEmail =
    process.env.ADMIN_EMAIL || "muhdsalman302@gmail.com";

  try {
    await resend.emails.send({
      from: "IgnoVex <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `[IgnoVex] ${safeSubject} — from ${safeName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #111827; margin: 0;">New Contact Submission</h2>
            <p style="color: #6b7280; margin: 4px 0 0;">via IgnoVex Platform</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 100px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 500;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #111827;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Subject</td>
              <td style="padding: 8px 0; color: #111827;">${safeSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Message</p>
            <p style="color: #111827; line-height: 1.6; margin: 0;">${safeMessage}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 32px; text-align: center;">
            This email was sent from the IgnoVex contact form.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("[IgnoVex] Failed to send contact email:", err);
    return { error: "Failed to send your message. Please try again later." };
  }
}
