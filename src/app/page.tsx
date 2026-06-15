"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Calendar, Trophy, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // High quality Unsplash medical/tech student images
  const bgImages = [
    "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={containerRef} className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Dynamic Image Grid Background */}
        <div className="absolute inset-0 -z-30 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 dark:opacity-20 rotate-12 scale-125 pointer-events-none">
          {bgImages.map((src, i) => (
            <motion.div 
              key={i}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              className="relative w-full h-[800px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={src} alt="Medical Students" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Heavy Glass Overlay */}
        <div className="absolute inset-0 -z-20 bg-background/70 backdrop-blur-[8px] dark:bg-background/80 dark:backdrop-blur-[12px]" />
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-lighten opacity-80 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-lighten opacity-80" />

        <motion.div 
          style={{ opacity }}
          className="container px-4 md:px-6 flex flex-col items-center text-center space-y-10 relative z-10 pt-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-primary/30 px-5 py-2 text-sm font-medium bg-background/60 backdrop-blur-xl shadow-2xl shadow-primary/10"
          >
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-foreground/90 tracking-wide">Empowering 45,000+ Medical & Tech Students Globally</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter max-w-6xl leading-[1.1] drop-shadow-lg text-foreground"
          >
            Redefining Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-blue-500 to-primary drop-shadow-xl inline-block pb-4">
              Future Today.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl font-light leading-relaxed"
          >
            A world-class platform designed to elevate your journey through premium learning, clinical internships, and elite professional mentorship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 pt-8"
          >
            <Link 
              href="/programs" 
              className="group relative inline-flex h-16 items-center justify-center rounded-full bg-foreground px-12 text-lg font-medium text-background shadow-2xl transition-all hover:scale-105 hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Programs
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-16 items-center justify-center rounded-full border border-border/50 bg-background/30 backdrop-blur-xl px-12 text-lg font-medium shadow-lg transition-all hover:bg-background/80 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Lavish Cards (30% Secondary Structural Color) */}
      <section className="py-32 bg-secondary text-secondary-foreground relative border-t border-border/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-secondary to-secondary" />
        
        {/* Decorative elements for artistic glory */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 mix-blend-screen" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-secondary-foreground">Designed for Excellence</h2>
            <p className="text-secondary-foreground/80 text-xl max-w-3xl mx-auto font-light">Equipping medical and technology students with the tools to succeed in modern landscapes, crafted with unparalleled elegance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Elite Programs", desc: "Curated curriculums by industry leaders.", color: "text-primary", bg: "bg-primary/10" },
              { icon: Calendar, title: "Global Events", desc: "Access to world-class seminars and summits.", color: "text-blue-300", bg: "bg-blue-300/10" },
              { icon: Users, title: "1:1 Mentorship", desc: "Direct guidance from top-tier professionals.", color: "text-primary", bg: "bg-primary/10" },
              { icon: Trophy, title: "Internships", desc: "Exclusive placement opportunities globally.", color: "text-blue-300", bg: "bg-blue-300/10" }
            ].map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                key={i} 
                className="group flex flex-col items-center text-center p-10 bg-background/5 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-secondary-foreground/10 hover:shadow-2xl hover:border-primary/50 transition-all duration-500 cursor-pointer"
              >
                <div className={`h-24 w-24 rounded-3xl ${feature.bg} flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner ring-1 ring-white/10`}>
                  <feature.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">{feature.title}</h3>
                <p className="text-secondary-foreground/70 text-lg leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
