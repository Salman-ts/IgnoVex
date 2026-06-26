import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with IgnoVex. Partner for hospital visits, industrial tours, seminars, or student inquiries. Connect with the Ignite Healthcare & Innovation Forum.",
  openGraph: {
    title: "Contact Us | IgnoVex",
    description: "Get in touch with IgnoVex for partnerships, visits, and student inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
