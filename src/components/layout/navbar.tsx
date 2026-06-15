"use client";

import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/50 backdrop-blur-md shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 50) {
      setIsScrolled(true);
      // Hide navbar when scrolling down, show when scrolling up
      if (latest > previous && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 flex justify-center pt-4 px-4 ${isScrolled ? "pointer-events-none" : ""}`}
    >
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out overflow-hidden
          ${isScrolled 
            ? "h-14 w-full max-w-4xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5 rounded-full px-6" 
            : "h-16 w-full max-w-7xl bg-transparent px-2"
          }`}
      >
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-secondary-foreground">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 tracking-tight transition-all ${isScrolled ? 'text-lg' : 'text-xl'}`}>
            IgnoVex
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/programs" className="transition-colors hover:text-primary text-foreground/80 hover:text-foreground">Programs</Link>
          <Link href="/events" className="transition-colors hover:text-primary text-foreground/80 hover:text-foreground">Events</Link>
          <Link href="/contact" className="transition-colors hover:text-primary text-foreground/80 hover:text-foreground">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Show when="signed-out">
            <div className="hidden md:flex items-center">
              <SignInButton mode="modal">
                <button className="text-sm font-medium hover:text-primary mr-4 transition-colors">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className={`inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:scale-105 active:scale-95 ${isScrolled ? 'h-8 px-4 rounded-full' : 'h-9 px-4 rounded-md'}`}>
                  Get Started
                </button>
              </SignUpButton>
            </div>
          </Show>
          <Show when="signed-in">
            <Link href="/admin" className="text-sm font-medium hover:text-primary mr-4 transition-colors text-foreground/80">Dashboard</Link>
            <UserButton />
          </Show>
        </div>
      </div>
    </motion.header>
  );
}
