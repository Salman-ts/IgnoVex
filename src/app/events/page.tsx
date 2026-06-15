"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, ArrowUpRight } from "lucide-react";

const events = [
  { id: 1, title: "Global Tech Summit 2026", date: "October 15", month: "Oct", day: "15", time: "9:00 AM EST", location: "San Francisco, CA", type: "Conference", desc: "A 3-day immersive experience featuring keynotes from Apple, Google, and Meta engineers.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" },
  { id: 2, title: "AI & Machine Learning Hackathon", date: "November 02", month: "Nov", day: "02", time: "48 Hours", location: "Virtual / Global", type: "Hackathon", desc: "Build the future of clinical AI. 48 hours to solve real-world medical data challenges.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" },
  { id: 3, title: "Winter Career Fair", date: "December 10", month: "Dec", day: "10", time: "10:00 AM EST", location: "New York City, NY", type: "Networking", desc: "Connect directly with recruiters from top-tier hospitals and tech companies.", img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80" }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/40 bg-card/30 backdrop-blur-lg sticky top-0 z-40">
        <div className="container mx-auto px-6 py-6 md:py-10 flex flex-col md:flex-row justify-between items-center mt-16 md:mt-0">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Events Schedule</h1>
            <p className="text-muted-foreground mt-2 font-light">Join the IgnoVex global community.</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Host an Event
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
        <div className="space-y-16">
          {events.map((event, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              key={event.id} 
              className="group flex flex-col md:flex-row gap-8 items-start relative"
            >
              {/* Timeline Connector */}
              {i !== events.length - 1 && (
                <div className="hidden md:block absolute left-[5.5rem] top-24 bottom-[-4rem] w-px bg-border group-hover:bg-primary/50 transition-colors" />
              )}
              
              {/* Date Block */}
              <div className="flex-shrink-0 flex md:flex-col items-center md:items-end md:w-32 pt-2 z-10">
                <span className="text-sm font-medium text-primary uppercase tracking-widest mr-4 md:mr-0 md:mb-1">{event.month}</span>
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">{event.day}</span>
              </div>

              {/* Content Block */}
              <div className="flex-1 bg-card border border-border/50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                <div className="h-48 md:h-64 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
                    {event.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-sm font-medium text-foreground/80 mb-8 pb-8 border-b border-border/40">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" /> {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" /> {event.location}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors group/btn">
                    Register to attend 
                    <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
