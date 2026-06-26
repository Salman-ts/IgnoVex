import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Comprehensive pharmacy programs including clinical rotations, industrial manufacturing tours, drug discovery R&D, and regulatory affairs training.",
  openGraph: {
    title: "Programs | IgnoVex",
    description: "Comprehensive pharmacy programs including clinical rotations, industrial manufacturing tours, and research.",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
