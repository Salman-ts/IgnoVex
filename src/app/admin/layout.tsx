import type { Metadata } from "next";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "IgnoVex platform administration dashboard.",
  robots: { index: false, follow: false },
};

/**
 * Server-side admin authorization gate.
 * This runs BEFORE any page content is sent to the browser.
 * Google/Meta-level security: never trust client-side checks alone.
 */
const AUTHORIZED_ADMINS = ["muhdsalman302@gmail.com"];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  // Not authenticated → redirect to home (Clerk middleware will show sign-in)
  if (!userId) {
    redirect("/");
  }

  // Authenticated but not authorized admin → redirect to home
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  if (!userEmail || !AUTHORIZED_ADMINS.includes(userEmail)) {
    redirect("/");
  }

  // Authorized admin → render the dashboard
  return <>{children}</>;
}
