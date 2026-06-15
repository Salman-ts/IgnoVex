"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left Column: Editorial Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden bg-card/30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8">
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Let's build the future together.
          </h1>
          <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
            Whether you're looking to partner with us, host an event, or just have a question about our curriculums, our team is ready to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="p-3 bg-card border border-border/50 rounded-2xl mr-6 shadow-sm">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-muted-foreground font-light mt-1">hello@ignovex.org</p>
                <p className="text-muted-foreground font-light">partnerships@ignovex.org</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 bg-card border border-border/50 rounded-2xl mr-6 shadow-sm">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Headquarters</h3>
                <p className="text-muted-foreground font-light mt-1">123 Innovation Drive</p>
                <p className="text-muted-foreground font-light">Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Refined Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex items-center justify-center bg-background border-l border-border/30">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <form action={async (formData) => {
            await sendContactEmail(formData);
          }} className="space-y-8">
            
            <div className="space-y-3">
              <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full h-14 px-4 rounded-xl border border-border/60 bg-card/50 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">Work Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full h-14 px-4 rounded-xl border border-border/60 bg-card/50 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                placeholder="john@hospital.org"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">How can we help?</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={5}
                className="w-full p-4 rounded-xl border border-border/60 bg-card/50 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y transition-all shadow-sm"
                placeholder="Tell us about your inquiry..."
              />
            </div>
            
            <button 
              type="submit" 
              className="group flex w-full h-14 items-center justify-center rounded-xl bg-foreground text-background font-semibold text-base transition-all hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
