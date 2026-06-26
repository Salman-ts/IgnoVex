"use client";

import { motion } from "framer-motion";
import { BookOpen, Stethoscope, Briefcase, Microscope, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface Program {
  id: string;
  title: string;
  icon: LucideIcon;
  desc: string;
  color: string;
  bg: string;
  gradient: string;
  features: string[];
}

const programs: Program[] = [
  {
    id: "clinical",
    title: "Clinical Pharmacy Practice",
    icon: Stethoscope,
    desc: "Advanced rotations in premium hospitals like South City and Jamal Noor. Learn inpatient dispensing, therapeutic monitoring, and multidisciplinary care.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    gradient: "from-rose-500/20 to-pink-500/5",
    features: ["Prescription Auditing", "Patient Counseling", "Ward Rounds"]
  },
  {
    id: "industrial",
    title: "Industrial Manufacturing",
    icon: Factory,
    desc: "Hands-on tours and internships at WHO-prequalified facilities. Master the art of scalable drug production, GMP compliance, and packaging.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    gradient: "from-amber-500/20 to-orange-500/5",
    features: ["Sterile Manufacturing", "QA / QC Labs", "Supply Chain"]
  },
  {
    id: "research",
    title: "Drug Discovery & R&D",
    icon: Microscope,
    desc: "Dive into cutting-edge research methodologies. Participate in exclusive seminars at leading academic institutions like Ziauddin University.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    gradient: "from-violet-500/20 to-purple-500/5",
    features: ["Formulation Science", "Clinical Trials", "Academic Publishing"]
  },
  {
    id: "regulatory",
    title: "Regulatory & Corporate Affairs",
    icon: Briefcase,
    desc: "Understand the business side of pharma. Engage with companies like Mediate Pharma to learn marketing, distribution, and global regulations.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    gradient: "from-emerald-500/20 to-teal-500/5",
    features: ["Product Registration", "Pharma Marketing", "Global Guidelines"]
  }
];

export default function ProgramsPage() {

  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-32 overflow-hidden">
      {/* Background Organic Blobs */}
      <div className="blob w-[70vw] h-[70vw] md:w-[900px] md:h-[900px] bg-primary/10 top-[-10%] right-[-20%]" />
      <div className="blob w-[50vw] h-[50vw] md:w-[700px] md:h-[700px] bg-emerald-500/10 bottom-[10%] left-[-20%]" style={{ animationDelay: "2s" }} />

      <div className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 border-b border-border/10">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary mb-6 sm:mb-8 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_0_30px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md">
              <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" /> Our Curriculum
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 drop-shadow-sm leading-[1.1]">
              Comprehensive <span className="text-gradient">Programs.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto px-2">
              Designed specifically to elevate Pharm-D students from academic learners to industry-ready professionals.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12">
          {programs.map((prog, i) => {
            const IconComponent = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                className="card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden group border border-border/10 flex flex-col"
              >
                <div className={`absolute -inset-4 bg-gradient-to-br ${prog.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10`} />
                
                <div className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl ${prog.bg} flex items-center justify-center mb-6 sm:mb-8 border border-white/5 shadow-inner`}>
                  <IconComponent className={`h-7 w-7 sm:h-8 sm:w-8 ${prog.color}`} />
                </div>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-tight drop-shadow-sm">{prog.title}</h2>
                <p className="text-muted-foreground font-light text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {prog.desc}
                </p>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 border-t border-border/20 pt-6 sm:pt-8">
                  {prog.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-foreground font-medium text-sm sm:text-base">
                      <CheckCircle2 className={`h-4 w-4 sm:h-5 sm:w-5 ${prog.color} mr-2 sm:mr-3 shrink-0`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Link href="/events" className="btn-3d w-full py-3.5 sm:py-4 rounded-xl font-bold inline-flex items-center justify-center group cursor-pointer shadow-lg text-sm sm:text-base">
                    View Related Events
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
