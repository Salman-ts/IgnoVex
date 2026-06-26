"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  error?: string;
  success?: boolean;
  data?: any;
  fieldErrors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
    [key: string]: string[] | undefined;
  };
};

export async function sendContactEmail(prevState: ContactFormState | undefined | null, formData: FormData): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  try {
    const data = await resend.emails.send({
      from: "IgnoVex <onboarding@resend.dev>", // Note: Use your verified domain in production instead of resend.dev
      to: "muhdsalman302@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Message from IgnoVex Platform</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}
