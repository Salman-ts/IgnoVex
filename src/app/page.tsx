"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Microscope, Activity, ArrowUpRight, CheckCircle2, Factory, Stethoscope } from "lucide-react";
import { useRef } from "react";

// Enterprise-grade homepage components
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 3D Organic Background Blob */}
      <div className="!fixed top-[-20%] right-[-10%] blob w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-primary/20 z-[-1]" />
      <div className="!fixed bottom-[-20%] left-[-10%] blob w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-indigo-500/10 z-[-1]" style={{ animationDelay: "3s" }} />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 overflow-hidden border-b border-border/10">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary mb-6 sm:mb-8 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1)] backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-2"></span>
                Empowering the Next Generation of Healthcare Leaders
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-primary drop-shadow-sm leading-[1.1]">
                Ignite Healthcare & <br className="hidden sm:block" />
                <span className="text-gradient font-black">Innovation Forum.</span>
              </h1>
              
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
                Bridging the gap between academic learning and practical exposure. Join IgnoVex for structured clinical rotations, industrial tours, and expert-led healthcare seminars.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/programs" className="w-full sm:w-auto">
                  <button className="btn-3d w-full sm:w-auto h-13 sm:h-14 px-6 sm:px-8 rounded-full font-bold text-base sm:text-lg inline-flex items-center justify-center group">
                    Explore Programs
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/events" className="w-full sm:w-auto">
                  <button className="btn-3d-secondary w-full sm:w-auto h-13 sm:h-14 px-6 sm:px-8 rounded-full font-bold text-base sm:text-lg inline-flex items-center justify-center group">
                    View Recent Visits
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== STATISTICS SECTION ===== */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Active Students", value: "45K+", color: "from-emerald-400 to-teal-500" },
              { label: "Hospital Visits", value: "20+", color: "from-blue-400 to-indigo-500" },
              { label: "Industrial Tours", value: "15+", color: "from-amber-400 to-orange-500" },
              { label: "Expert Seminars", value: "50+", color: "from-purple-400 to-pink-500" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                className="card-3d bg-card border border-border/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center flex flex-col items-center justify-center relative overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className={`absolute -inset-4 bg-gradient-to-br ${stat.color} opacity-[0.03]`} />
                <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${stat.color} mb-1 sm:mb-2 drop-shadow-sm`}>
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHARMACY OPPORTUNITIES BENTO GRID ===== */}
      <section className="py-16 sm:py-24 lg:py-32 relative z-10 bg-background/50 backdrop-blur-3xl border-y border-border/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">Our Core Offerings</h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
              We provide enterprise-grade exposure for pharmacy students across all sectors of the healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {/* Main Feature - Industrial */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="md:col-span-2 card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Factory className="h-28 sm:h-40 w-28 sm:w-40" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg shadow-orange-500/20">
                    <Factory className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Industrial Manufacturing Tours</h3>
                  <p className="text-muted-foreground font-light text-base sm:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed">
                    Exclusive visits to WHO-prequalified facilities like Getz Pharma and PharmEvo. Understand GMP, packaging, and QA/QC at an industrial scale.
                  </p>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {['Automated Packaging Lines', 'Sterile Manufacturing', 'Quality Control Labs'].map((item, i) => (
                    <li key={i} className="flex items-center text-foreground font-medium text-sm sm:text-base">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2 sm:mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Feature 2 - Clinical */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Stethoscope className="h-24 sm:h-32 w-24 sm:w-32" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white mb-5 sm:mb-6 shadow-lg shadow-pink-500/20">
                  <Stethoscope className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Clinical Rotations</h3>
                <p className="text-muted-foreground font-light text-sm sm:text-base mb-4 sm:mb-6">
                  Hands-on experience in premium facilities like South City and Jamal Noor Hospital.
                </p>
                <div className="mt-auto">
                  <Link href="/events" className="text-rose-500 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform text-sm sm:text-base">
                    View Hospitals <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Research */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Microscope className="h-24 sm:h-32 w-24 sm:w-32" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white mb-5 sm:mb-6 shadow-lg shadow-purple-500/20">
                  <Microscope className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Research & Seminars</h3>
                <p className="text-muted-foreground font-light text-sm sm:text-base mb-4 sm:mb-6">
                  Engage with academic veterans at Ziauddin University and understand the future of R&D.
                </p>
                <div className="mt-auto">
                  <Link href="/programs" className="text-violet-500 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform text-sm sm:text-base">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

             {/* Feature 4 - Networking */}
             <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="md:col-span-2 card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-blue-400 to-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                  <Activity className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-center sm:text-left">Global Healthcare Network</h3>
                  <p className="text-muted-foreground font-light text-base sm:text-lg mb-0 max-w-2xl leading-relaxed text-center sm:text-left">
                    Build professional networking opportunities with national and international speakers. IgnoVex connects you directly to the leaders shaping the healthcare industry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-20 sm:py-28 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-5xl mx-auto rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden card-3d bg-card border border-border/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 relative z-10 tracking-tight drop-shadow-sm">Ready to elevate your career?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 font-light max-w-2xl mx-auto relative z-10">
              Join the Ignite Healthcare & Innovation Forum today and start your journey with top-tier industrial and clinical exposure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <Link href="/programs" className="w-full sm:w-auto">
                <button className="btn-3d w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-full font-bold text-base sm:text-lg inline-flex items-center justify-center group">
                  Join Programs
                  <ArrowUpRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
