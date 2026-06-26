import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about IgnoVex — from Ignite Med-X to IGNOVEX. Discover our vision, mission, leadership, and commitment to transforming pharmacy education through innovation and excellence.",
  openGraph: {
    title: "About Us | IgnoVex",
    description: "Learn about IGNOVEX's journey, leadership, vision, and mission to empower healthcare professionals.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
