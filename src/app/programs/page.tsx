"use client";

import { motion } from "framer-motion";
import { Code, Cpu, BookOpen, Terminal, ArrowRight, Zap, Globe, LayoutTemplate } from "lucide-react";

export default function ProgramsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-lighten" />
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Programs built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-600">the modern era.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            A curated ecosystem of elite curriculums. From full-stack engineering to clinical data science, we equip you with the skills to dominate.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {/* Bento Box 1: Large Feature */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-card rounded-[2.5rem] border border-border/50 p-10 flex flex-col justify-end transition-all hover:shadow-2xl hover:border-primary/30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-transform group-hover:scale-110 duration-700" />
            <div className="absolute top-10 left-10 p-4 bg-background/80 backdrop-blur-md rounded-2xl shadow-sm">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <Zap className="h-4 w-4 mr-1" /> Most Popular
              </div>
              <h2 className="text-4xl font-bold mb-4">Full-Stack Engineering</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md font-light">
                Master React, Next.js, Node, and modern cloud architectures in a rigorous 12-week intensive.
              </p>
              <button className="flex items-center text-sm font-medium hover:text-primary transition-colors group/btn">
                View Syllabus <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Bento Box 2: Tall Feature */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 group relative overflow-hidden bg-card rounded-[2.5rem] border border-border/50 p-10 flex flex-col transition-all hover:shadow-2xl hover:border-violet-500/30">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-500/10 to-transparent" />
            <div className="p-4 bg-background/80 backdrop-blur-md rounded-2xl shadow-sm w-max mb-8">
              <Cpu className="h-8 w-8 text-violet-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Data Science & AI</h2>
            <p className="text-muted-foreground font-light mb-auto">
              Dive deep into machine learning, Python data pipelines, and predictive clinical analytics.
            </p>
            <button className="flex items-center text-sm font-medium hover:text-violet-500 transition-colors group/btn mt-8">
              Explore Track <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </motion.div>

          {/* Bento Box 3: Standard Feature */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-card rounded-[2rem] border border-border/50 p-8 flex flex-col transition-all hover:shadow-xl hover:border-emerald-500/30">
            <div className="flex justify-between items-start mb-auto">
              <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl shadow-sm">
                <LayoutTemplate className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground text-sm font-light">Craft stunning, user-centric interfaces.</p>
          </motion.div>

          {/* Bento Box 4: Standard Feature */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-card rounded-[2rem] border border-border/50 p-8 flex flex-col transition-all hover:shadow-xl hover:border-orange-500/30">
            <div className="flex justify-between items-start mb-auto">
              <div className="p-3 bg-background/80 backdrop-blur-md rounded-xl shadow-sm">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-2">Cloud Architecture</h3>
            <p className="text-muted-foreground text-sm font-light">Scale systems across AWS and GCP.</p>
          </motion.div>

          {/* Bento Box 5: Wide Feature */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 group relative overflow-hidden bg-gradient-to-br from-primary to-violet-600 rounded-[2rem] p-8 flex flex-col justify-center text-white transition-all hover:shadow-2xl hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-2">Enterprise Ready.</h3>
            <p className="text-white/80 font-light mb-6">Designed to match Tier-1 tech giant standards.</p>
            <button className="bg-white text-primary px-6 py-2 rounded-full font-medium text-sm w-max hover:bg-white/90 transition-colors shadow-lg">
              Apply Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
