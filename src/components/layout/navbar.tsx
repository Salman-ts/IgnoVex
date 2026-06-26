"use client";

import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, Show } from "@clerk/nextjs";
import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/20 bg-background/80 backdrop-blur-md shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-50 group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-400" />
    </button>
  );
}

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 50) {
      setIsScrolled(true);
      if (latest > previous && latest > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setIsScrolled(false);
      setIsHidden(false);
    }
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, handleEscape]);

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-[60] w-full transition-all duration-500 flex justify-center pt-4 sm:pt-6 px-4 sm:px-6 ${isScrolled ? "pointer-events-none" : ""}`}
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[0.16,1,0.3,1]
            ${isScrolled 
              ? "h-16 w-full max-w-5xl glass-card rounded-full px-5 sm:px-8 border border-white/10" 
              : "h-20 w-full max-w-7xl bg-transparent px-2"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className={`relative flex items-center justify-center transition-all duration-500 ${isScrolled ? 'h-11 w-11 sm:h-12 sm:w-12' : 'h-14 w-14 sm:h-16 sm:w-16'}`}>
              <Image 
                src="/images/logo.png" 
                alt="IgnoVex Logo" 
                fill
                priority
                sizes="64px"
                className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]" 
              />
            </div>
            <span className={`tracking-tight transition-all duration-500 ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
              <span className="font-semibold">Igno</span><span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Vex</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer overflow-hidden group
                  ${pathname === link.href 
                    ? "text-primary-foreground shadow-[inset_0_1px_4px_rgba(255,255,255,0.2),_0_4px_15px_-5px_rgba(var(--primary),0.5)]" 
                    : "text-foreground/80 hover:text-foreground"
                  }`}
              >
                {pathname === link.href && (
                  <motion.div 
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-primary -z-10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {pathname !== link.href && (
                  <div className="absolute inset-0 bg-muted/50 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all duration-300 -z-10" />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Right Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <ThemeToggle />
            
            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-3">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors px-4 py-2.5 cursor-pointer bg-transparent border-none">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="btn-3d text-sm font-semibold h-10 px-6 rounded-full inline-flex items-center justify-center cursor-pointer border-none">
                    Get Started
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <Link href="/admin" className="text-sm font-semibold hover:text-primary transition-colors text-foreground/80 px-4 py-2.5 cursor-pointer">Dashboard</Link>
                <UserButton />
              </Show>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/20 glass-card shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-[70]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ===== Mobile Full-Screen 3D Organic Drawer ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 bg-background/40 backdrop-blur-xl md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%", opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: "100%", opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[65] h-full w-[85%] max-w-sm glass-card shadow-[-20px_0_50px_rgba(0,0,0,0.2)] md:hidden flex flex-col border-l border-white/10"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center gap-3 p-6 sm:p-8 border-b border-border/10">
                <div className="relative h-12 w-12">
                  <Image src="/images/logo.png" alt="IgnoVex Logo" fill sizes="48px" className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]" />
                </div>
                <span className="text-xl tracking-tight">
                  <span className="font-semibold">Igno</span><span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Vex</span>
                </span>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 sm:px-8">
                <div className="space-y-3">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30, rotateX: 30 }}
                      animate={{ opacity: 1, x: 0, rotateX: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.5, type: "spring" }}
                      style={{ perspective: 1000 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl text-lg font-bold transition-all duration-300 cursor-pointer shadow-sm
                          ${pathname === link.href
                            ? "bg-primary text-primary-foreground shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),_0_10px_20px_-5px_rgba(var(--primary),0.5)]"
                            : "bg-muted/30 text-foreground/80 hover:bg-muted/50 hover:text-foreground"
                          }`}
                      >
                        {link.label}
                        <ArrowRight className={`h-5 w-5 ${pathname === link.href ? 'opacity-100' : 'opacity-40'}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="my-8 border-t border-border/10" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-background/50 rounded-2xl p-5 text-center border border-border/10 shadow-inner">
                    <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-emerald-400">45K+</p>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Students</p>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-5 text-center border border-border/10 shadow-inner">
                    <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-violet-400">100+</p>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Programs</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 sm:p-8 border-t border-border/10 space-y-4"
              >
                <Show when="signed-out">
                  <SignUpButton mode="modal">
                    <button onClick={() => setMobileOpen(false)} className="btn-3d w-full h-14 rounded-2xl font-bold text-base flex items-center justify-center group cursor-pointer border-none">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </SignUpButton>
                  <SignInButton mode="modal">
                    <button onClick={() => setMobileOpen(false)} className="btn-3d-secondary w-full h-14 rounded-2xl font-bold text-base flex items-center justify-center cursor-pointer border-none mt-4">
                      Sign In
                    </button>
                  </SignInButton>
                </Show>
                <Show when="signed-in">
                  <Link 
                    href="/admin" 
                    onClick={() => setMobileOpen(false)}
                    className="btn-3d-secondary w-full h-14 rounded-2xl font-bold text-base flex items-center justify-center cursor-pointer mb-4"
                  >
                    Dashboard
                  </Link>
                  <div className="flex justify-center items-center gap-3">
                    <UserButton />
                  </div>
                </Show>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
