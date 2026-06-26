"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="blob w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-destructive/10 top-[-20%] right-[-10%]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-destructive/10 border border-destructive/20 mx-auto mb-8">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
          An unexpected error occurred. Our team has been notified. Please try again or return home.
        </p>

        {error.digest && (
          <p className="text-muted-foreground/50 text-xs font-mono mb-6">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-3d w-full sm:w-auto h-14 px-8 rounded-full font-bold text-base inline-flex items-center justify-center group cursor-pointer"
          >
            <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>
          <Link href="/">
            <button className="btn-3d-secondary w-full sm:w-auto h-14 px-8 rounded-full font-bold text-base inline-flex items-center justify-center cursor-pointer">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
