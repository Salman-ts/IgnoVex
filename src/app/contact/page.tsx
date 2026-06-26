"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Building2, School, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "@/app/actions/send-email";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    sendContactEmail,
    {}
  );

  return (
    <div className="min-h-screen bg-background pb-32 overflow-hidden">
      {/* Background Organic Blobs */}
      <div className="blob w-[60vw] h-[60vw] md:w-[700px] md:h-[700px] bg-primary/10 top-[-20%] right-[-10%]" />
      <div className="blob w-[50vw] h-[50vw] md:w-[500px] md:h-[500px] bg-indigo-500/10 bottom-[10%] left-[-10%]" style={{ animationDelay: "1s" }} />

      <div className="relative pt-32 sm:pt-40 pb-16 border-b border-border/10">
        <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary mb-8 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1),_0_0_30px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md">
              <Mail className="h-4 w-4 mr-2" /> Connect With Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 drop-shadow-sm">
              Let&apos;s build the <span className="text-gradient">future.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re a university looking to partner, or an industry leader willing to host a visit.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-border/10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Reach Out Direct</h3>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start group">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 sm:mr-5 shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                    <p className="text-muted-foreground font-light text-sm">Karachi, Pakistan<br/>Pharmaceutical Hub</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 sm:mr-5 shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+923302457103" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm">+92 330 2457103</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 sm:mr-5 shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:ignitehealthcareinnovationforum@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-light text-sm break-all">
                      ignitehealthcareinnovationforum@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="card-3d glass-card rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 text-center border border-border/10">
                <Building2 className="h-7 w-7 sm:h-8 sm:w-8 mx-auto mb-3 text-emerald-500" />
                <h4 className="font-semibold text-sm">Industry Partners</h4>
              </div>
              <div className="card-3d glass-card rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 text-center border border-border/10">
                <School className="h-7 w-7 sm:h-8 sm:w-8 mx-auto mb-3 text-indigo-500" />
                <h4 className="font-semibold text-sm">Universities</h4>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            className="lg:col-span-3 card-3d glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-border/10"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 drop-shadow-sm">Send a Message</h3>

            {/* Success State */}
            {state.success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground font-light max-w-sm">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            {/* Form */}
            {!state.success && (
              <form action={formAction} className="space-y-5 sm:space-y-6">
                {/* Global Error */}
                {state.error && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    {state.error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground ml-1">First Name</label>
                    <input 
                      id="firstName"
                      name="firstName"
                      type="text" 
                      maxLength={100}
                      className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 px-4 sm:px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner text-base"
                      placeholder="John"
                    />
                    {state.fieldErrors?.firstName && (
                      <p className="text-destructive text-xs ml-1">{state.fieldErrors.firstName[0]}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground ml-1">Last Name</label>
                    <input 
                      id="lastName"
                      name="lastName"
                      type="text" 
                      maxLength={100}
                      className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 px-4 sm:px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner text-base"
                      placeholder="Doe"
                    />
                    {state.fieldErrors?.lastName && (
                      <p className="text-destructive text-xs ml-1">{state.fieldErrors.lastName[0]}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    maxLength={254}
                    className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 px-4 sm:px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner text-base"
                    placeholder="john@hospital.com"
                  />
                  {state.fieldErrors?.email && (
                    <p className="text-destructive text-xs ml-1">{state.fieldErrors.email[0]}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground ml-1">Subject / Inquiry Type</label>
                  <select 
                    id="subject"
                    name="subject"
                    className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 px-4 sm:px-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none shadow-inner text-base"
                  >
                    <option value="">Select a subject...</option>
                    <option value="Host a Hospital/Industrial Visit">Host a Hospital/Industrial Visit</option>
                    <option value="Partner for a Seminar">Partner for a Seminar</option>
                    <option value="Student Inquiry">Student Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                  {state.fieldErrors?.subject && (
                    <p className="text-destructive text-xs ml-1">{state.fieldErrors.subject[0]}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    minLength={10}
                    maxLength={5000}
                    className="w-full rounded-xl sm:rounded-2xl bg-background/50 border border-border/30 p-4 sm:p-5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none shadow-inner text-base"
                    placeholder="How can we collaborate?"
                  />
                  {state.fieldErrors?.message && (
                    <p className="text-destructive text-xs ml-1">{state.fieldErrors.message[0]}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="btn-3d w-full h-14 sm:h-16 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center group mt-4 shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
