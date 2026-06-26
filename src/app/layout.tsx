import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#001233" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | IgnoVex",
    default: "IgnoVex — Empowering Pharmacy Students Worldwide",
  },
  description: "A world-class platform for pharmacy students — premium learning, hospital & industrial visits, clinical internships, seminars, webinars, and elite professional mentorship.",
  keywords: ["pharmacy students", "hospital visits", "industrial visits", "pharma seminars", "clinical pharmacy", "drug discovery", "pharmacy education", "IgnoVex"],
  authors: [{ name: "IgnoVex Education" }],
  openGraph: {
    title: "IgnoVex — Empowering Pharmacy Students Worldwide",
    description: "Premium learning, hospital & industrial visits, clinical internships, and mentorship for pharmacy students.",
    type: "website",
    locale: "en_US",
    siteName: "IgnoVex",
  },
  twitter: {
    card: "summary_large_image",
    title: "IgnoVex — Empowering Pharmacy Students Worldwide",
    description: "Premium learning, hospital & industrial visits, clinical internships, and mentorship for pharmacy students.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden" data-scroll-behavior="smooth">

      <body suppressHydrationWarning className={`${inter.variable} ${jakarta.variable} font-sans antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
              <Navbar />
              <main className="flex-1 w-full">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
