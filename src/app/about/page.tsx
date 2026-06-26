"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { 
  Building2, 
  Lightbulb, 
  Target, 
  Users, 
  GraduationCap, 
  Globe2, 
  Award,
  ChevronRight,
  Stethoscope,
  Network,
  BriefcaseMedical,
  Rocket
} from "lucide-react";
import { useRef } from "react";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <main className="relative z-10 pt-24 pb-20">
        {/* === Hero Section === */}
        <section className="container mx-auto px-6 pt-12 md:pt-20 pb-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">About IGNOVEX</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-teal-400">Potential</span> Into Impact
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              IGNOVEX is a professional learning, development, and career-building platform focused on empowering pharmacy students and healthcare professionals. We bridge the gap between academic learning and real-world industry requirements.
            </motion.p>
          </motion.div>
        </section>

        {/* === From Ignite to IGNOVEX === */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-muted/30 -skew-y-3 transform origin-top-left -z-10" />
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background shadow-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Our History</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold">From <span className="text-orange-500">IGNITE</span> to <span className="text-primary">IGNOVEX</span></h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2021 as Ignite Med-X, our journey began with a focus on inspiring learning, creativity, and professional growth in the healthcare and pharmaceutical sectors. We started as an educational and awareness-based platform encouraging students to explore opportunities beyond traditional academic pathways.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As our vision expanded into practical implementation, leadership, innovation, and professional excellence, we evolved into IGNOVEX. 
                </p>
                
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "IGN", desc: "Ignite" },
                    { title: "OV", desc: "Innovation / Overcome" },
                    { title: "EX", desc: "Execute / Excellence" }
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-4 rounded-xl border border-border/20 text-center shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform">
                      <h4 className="text-2xl font-black text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-3xl blur-2xl opacity-20" />
                <div className="relative glass-card p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl aspect-square flex flex-col justify-center items-center">
                   <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <Image src="/images/logo.png" alt="IGNOVEX Logo" fill className="object-contain drop-shadow-2xl" />
                   </div>
                   <p className="text-center mt-8 font-medium text-lg text-foreground/80">Igniting ideas, overcoming challenges, executing with excellence.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* === Leadership Messages === */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Messages</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The visionaries driving IGNOVEX towards a future of excellence and innovation.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* CEO Message */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-border/20 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">CEO's Message</h3>
                <blockquote className="flex-grow text-muted-foreground font-light leading-relaxed italic mb-8 relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</span>
                  At IGNOVEX, we believe that true success begins with knowledge, innovation, and the courage to create opportunities for others. The healthcare and pharmaceutical industries are evolving rapidly, and students today require more than academic excellence. They need practical exposure, leadership skills, industry awareness, and the confidence to adapt to global opportunities.
                </blockquote>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    AM
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Dr. Areesha Abdul Majeed</h4>
                    <p className="text-sm text-primary font-medium">CEO & Founder, IGNOVEX</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* President Message */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-border/20 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">President's Message</h3>
                <blockquote className="flex-grow text-muted-foreground font-light leading-relaxed italic mb-8 relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-blue-500/20 font-serif">"</span>
                  We are committed to empowering students and professionals through innovation, practical learning, leadership development, and professional networking. We provide a dynamic platform where students can showcase their talent, skills, creativity, and achievements while gaining recognition and valuable real-world exposure.
                </blockquote>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    UQ
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Dr. Syed Muhammad Umair Qadri</h4>
                    <p className="text-sm text-blue-500 font-medium">President & Regional Manager, IGNOVEX</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* === Vision & Mission === */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-background/80 backdrop-blur-xl p-10 rounded-3xl border border-primary/20 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a globally recognized platform for innovation, learning, and excellence that empowers healthcare and pharmaceutical professionals to transform ideas into impactful realities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-background/80 backdrop-blur-xl p-10 rounded-3xl border border-blue-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <ul className="space-y-4">
                  {[
                    "Igniting creativity, leadership, and professional growth.",
                    "Providing innovative training, mentorship, and internship opportunities.",
                    "Bridging the gap between academic education and industry requirements.",
                    "Supporting future healthcare leaders through skill development and career counseling.",
                    "Promoting entrepreneurship, networking, and remote work readiness."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* === Core Focus Areas === */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Focus Areas</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our specialized areas designed to build the next generation of healthcare leaders.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "1. Industrial & Clinical Internships",
                desc: "Practical industry exposure designed to improve technical knowledge, workplace understanding, and professional confidence in healthcare and pharmaceutical settings.",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: Users,
                title: "2. Professional Career Counseling",
                desc: "Guiding students towards future-ready pathways via mentorship, CV guidance, interview preparation, and awareness of international and digital career opportunities.",
                color: "from-primary to-indigo-500"
              },
              {
                icon: GraduationCap,
                title: "3. Advanced Industry Training",
                desc: "Workshops, webinars, and certification programs to enhance competencies in communication, leadership, digital marketing, and research understanding.",
                color: "from-emerald-500 to-teal-400"
              },
              {
                icon: Rocket,
                title: "4. Entrepreneurship & Employment Readiness",
                desc: "Supporting young entrepreneurs and startups by promoting innovation, business development, strategic thinking, and corporate skill enhancement.",
                color: "from-orange-500 to-amber-400"
              }
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-background p-8 rounded-3xl border border-border/40 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg text-white`}>
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === Core Values === */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/30 -z-10" />
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Core Values</span></h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Innovation First", desc: "Creative thinking and modern solutions.", icon: Lightbulb },
                { title: "Excellence", desc: "Striving for excellence in every initiative.", icon: Award },
                { title: "Integrity", desc: "Honesty, transparency, and ethical practices.", icon: BriefcaseMedical },
                { title: "Growth Mindset", desc: "Continuous learning and adaptability.", icon: Network },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 text-center rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* === Future Goals & Conclusion === */}
        <section className="py-24 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto glass-card p-10 md:p-14 rounded-3xl border border-primary/20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10 mix-blend-screen" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Goals</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
              IGNOVEX aims to expand its impact globally by establishing innovative educational initiatives, strategic collaborations, professional mentorship programs, and international networking opportunities. We envision a future where students and professionals are not limited by traditional boundaries but are inspired to innovate, lead, and create meaningful change in society.
            </p>
            <div className="h-px w-24 bg-border/50 mx-auto mb-8" />
            <p className="text-lg font-medium text-foreground">
              "With a commitment to innovation and execution, IGNOVEX stands as a platform dedicated to transforming potential into achievement and ideas into impact."
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
