"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background Organic Blobs */}
      <div className="blob w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-primary/15 top-[-20%] right-[-10%]" />
      <div className="blob w-[40vw] h-[40vw] md:w-[400px] md:h-[400px] bg-indigo-500/10 bottom-[-10%] left-[-10%]" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        {/* Logo */}
        <div className="relative h-20 w-20 mx-auto mb-8">
          <Image src="/images/logo.png" alt="IgnoVex Logo" fill sizes="80px" className="object-contain drop-shadow-lg" />
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center rounded-full border border-destructive/20 bg-destructive/10 px-5 py-2 text-sm font-semibold text-destructive mb-6 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1)] backdrop-blur-md">
          <Search className="h-4 w-4 mr-2" /> Page Not Found
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40">
          404
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl font-light mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="btn-3d w-full sm:w-auto h-14 px-8 rounded-full font-bold text-base inline-flex items-center justify-center group cursor-pointer">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </button>
          </Link>
          <button
            onClick={() => typeof window !== "undefined" && window.history.back()}
            className="btn-3d-secondary w-full sm:w-auto h-14 px-8 rounded-full font-bold text-base inline-flex items-center justify-center group cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
