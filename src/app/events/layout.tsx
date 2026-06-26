import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Visits",
  description: "Explore IgnoVex's recent hospital visits, industrial tours, and pharmaceutical seminars. Real-world pharmacy experience at top-tier healthcare facilities.",
  openGraph: {
    title: "Events & Visits | IgnoVex",
    description: "Explore IgnoVex's recent hospital visits, industrial tours, and pharmaceutical seminars.",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
