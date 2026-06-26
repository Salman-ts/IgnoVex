"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, MapPin, Building2, Microscope, ArrowUpRight, Sparkles, HeartPulse, Stethoscope, Users, Presentation } from "lucide-react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";

// Real-world visits data with accurate images and custom content
interface EventData {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  type: string;
  desc: string;
  img: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

const events: EventData[] = [
  { 
    id: "getz-pharma", 
    title: "Getz Pharma Industrial Visit", 
    date: "Recent", month: "Ind", day: "01", 
    time: "Industrial Tour", 
    location: "Getz Pharma Facility", 
    type: "Industrial Visit", 
    desc: "A comprehensive industrial tour at Getz Pharma, one of the largest WHO-prequalified pharmaceutical manufacturing facilities in the region. Students gained firsthand exposure to state-of-the-art GMP manufacturing, automated packaging lines, and advanced quality control laboratories, understanding the rigorous standards of global pharmaceutical production.", 
    img: "/images/events/getz pharma.jpeg",
    icon: Building2,
    color: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/5"
  },
  { 
    id: "pharmevo", 
    title: "PharmEvo Educational Visit", 
    date: "Recent", month: "Ind", day: "02", 
    time: "Corporate & Plant Tour", 
    location: "PharmEvo HQ & Facility", 
    type: "Industrial Visit", 
    desc: "An insightful visit to PharmEvo, renowned for its commitment to ethical practices and research-driven solutions. The session included interactive discussions on drug formulation, supply chain management, and the integration of modern technology in pharmaceutical operations.", 
    img: "/images/events/pharmevo .jpeg",
    icon: Sparkles,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/5"
  },
  { 
    id: "ziauddin", 
    title: "Ziauddin University Pharmacy Seminar", 
    date: "Recent", month: "Sem", day: "03", 
    time: "Academic Seminar", 
    location: "Ziauddin University", 
    type: "Seminar", 
    desc: "An exclusive academic and professional seminar hosted at Ziauddin University. Industry leaders and academic veterans discussed the evolving landscape of clinical pharmacy, research methodologies, and future career trajectories for PharmD graduates in a rapidly advancing healthcare sector.", 
    img: "/images/events/ziauddin university seminar .jpeg",
    icon: Presentation,
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  { 
    id: "south-city", 
    title: "South City Hospital Clinical Rotation", 
    date: "Recent", month: "Clin", day: "04", 
    time: "Clinical Rotation", 
    location: "South City Hospital", 
    type: "Hospital Visit", 
    desc: "A premium clinical rotation at South City Hospital. Pharmacy students observed real-time clinical workflows, inpatient drug dispensing, patient counseling, and therapeutic drug monitoring, bridging the gap between theoretical pharmacology and practical patient care.", 
    img: "/images/events/South city.jpeg",
    icon: HeartPulse,
    color: "text-rose-400",
    gradient: "from-rose-500/20 to-pink-500/5"
  },
  { 
    id: "jamal-noor", 
    title: "Jamal Noor Hospital Visit", 
    date: "Recent", month: "Clin", day: "05", 
    time: "Hospital Tour", 
    location: "Jamal Noor Hospital", 
    type: "Hospital Visit", 
    desc: "An engaging educational visit providing students with valuable insights into the daily operations of a busy clinical pharmacy department. Participants learned about prescription auditing, adverse drug reaction reporting, and the crucial role of pharmacists in a multidisciplinary team.", 
    img: "/images/events/jamal noor.jpeg",
    icon: Stethoscope,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/5"
  },
  { 
    id: "aisha-vision", 
    title: "Aisha Vision Hospital Visit", 
    date: "Recent", month: "Clin", day: "06", 
    time: "Specialized Clinical Visit", 
    location: "Aisha Vision Hospital", 
    type: "Hospital Visit", 
    desc: "A specialized clinical exposure visit focusing on the pharmaceutical requirements for ophthalmic care. Students explored sterile preparations, specialized drug delivery systems, and the strict aseptic techniques required in specialized hospital settings.", 
    img: "/images/events/Aisha vision hospital.jpeg",
    icon: Microscope,
    color: "text-violet-400",
    gradient: "from-violet-500/20 to-purple-500/5"
  },
  { 
    id: "mediate", 
    title: "Mediate Pharma Corporate Visit", 
    date: "Recent", month: "Corp", day: "07", 
    time: "Corporate Visit", 
    location: "Mediate Pharma", 
    type: "Industrial Visit", 
    desc: "A deep dive into pharmaceutical marketing, distribution, and emerging industry trends. The visit equipped students with an understanding of business operations, regulatory affairs, and career opportunities beyond traditional clinical and manufacturing roles.", 
    img: "/images/events/mediate main.jpeg",
    icon: Users,
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-blue-500/5"
  },
];

// 3D Tilt Card Component
function EventCard({ event, index }: { event: EventData, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const IconComponent = event.icon;

  return (
    <motion.div 
      ref={cardRef}
      style={{ y, rotateX, opacity, scale, perspective: 1000 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-16 items-center relative group w-full card-3d`}
    >
      {/* Image Side with 3D Pop */}
      <div className="w-full lg:w-1/2 relative transform-gpu transition-transform duration-500 group-hover:translate-z-10 group-hover:scale-[1.02]">
        <div className={`absolute -inset-4 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 -z-10`} />
        
        <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
          <Image 
            src={event.img} 
            alt={event.title} 
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" 
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 transform-gpu translate-z-20">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-2xl">
              <IconComponent className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${event.color}`} />
              {event.type}
            </span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center transform-gpu transition-all duration-500 group-hover:translate-x-2">
        <div className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary mb-3 sm:mb-4 bg-primary/10 w-max px-3 py-1 rounded-full border border-primary/20 shadow-inner">
          <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" /> {event.location}
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground drop-shadow-sm">
          {event.title}
        </h2>
        
        <p className="text-muted-foreground font-light text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed">
          {event.desc}
        </p>
        
        <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border/40">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Status</span>
            <span className="font-medium text-emerald-500 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" /> Completed
            </span>
          </div>
          <div className="w-px h-8 sm:h-10 bg-border/50" />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Category</span>
            <span className="font-medium text-foreground text-sm sm:text-base">{event.time}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {

  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-32 overflow-hidden">
      {/* Background Organic Blobs */}
      <div className="blob w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-primary/20 top-[-20%] left-[-10%]" />
      <div className="blob w-[50vw] h-[50vw] md:w-[600px] md:h-[600px] bg-indigo-500/10 top-[20%] right-[-10%]" style={{ animationDelay: "2s" }} />

      {/* Page Header */}
      <div className="relative pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 border-b border-border/10">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            style={{ perspective: 1000 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary mb-6 sm:mb-8 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_0_30px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md">
              <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" /> Clinical & Industrial Exposure
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 drop-shadow-sm leading-[1.1]">
              Real-World <br className="hidden sm:block" />
              <span className="text-gradient">Pharmacy Experience.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto px-2">
              Explore our recent visits to top-tier hospitals and leading pharmaceutical plants. We bridge the gap between academic theory and industry practice.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Events List with Advanced 3D Scroll Animations */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl relative z-10">
        <div className="space-y-20 sm:space-y-32 lg:space-y-48">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
      
      {/* Footer CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto px-4 sm:px-5 mt-10 text-center relative z-10"
      >
        <div className="inline-flex flex-col items-center p-8 sm:p-10 lg:p-16 rounded-[2rem] sm:rounded-[3rem] bg-card border border-border/20 glass-card max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 mix-blend-overlay" />
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 relative z-10 drop-shadow-sm">Want to host a visit?</h3>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 relative z-10 max-w-xl">Partner with IgnoVex to train the next generation of healthcare professionals and leaders.</p>
          <Link href="/contact" className="relative z-10 btn-3d px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg flex items-center group">
            Contact Partnerships
            <ArrowUpRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
