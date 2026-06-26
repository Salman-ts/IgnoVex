import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/10 overflow-hidden bg-background">
      {/* 3D Organic Background Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0 pointer-events-none" />
      <div className="blob w-[80vw] h-[80vw] md:w-[1000px] md:h-[1000px] bg-primary/10 bottom-[-50%] left-[10%]" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                <Image 
                  src="/images/logo.png" 
                  alt="IgnoVex Logo" 
                  fill
                  sizes="64px"
                  className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]" 
                />
              </div>
              <span className="text-2xl tracking-tight">
                <span className="font-semibold text-foreground">Igno</span><span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Vex</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
              Ignite Healthcare & Innovation Forum. Empowering pharmacy students and healthcare professionals with cutting-edge academic and industrial exposure.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/175ngeLWot/" },
                { Icon: Instagram, href: "https://www.instagram.com/theignovex?igsh=MWJsdm9obHdsajNmeA==" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/ignovex/" },
                { Icon: Twitter, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="h-12 w-12 rounded-full border border-border/20 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all duration-300 cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">Social link</span>
                </a>
              ))}
            </div>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary inline-block rounded-full" />
              Programs
            </h3>
            <ul className="space-y-4">
              {['Pharm-D Excellence', 'Clinical Rotations', 'Industrial Training', 'Research & Development', 'Regulatory Affairs'].map((item) => (
                <li key={item}>
                  <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:scale-150 group-hover:bg-primary transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary inline-block rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Upcoming Events', href: '/events' },
                { label: 'Hospital Visits', href: '/programs' },
                { label: 'Career Pathways', href: '/programs' },
                { label: 'Contact Us', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:scale-150 group-hover:bg-primary transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary inline-block rounded-full" />
              Connect With Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="h-10 w-10 rounded-full border border-border/20 glass-card flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 group-hover:text-primary transition-all">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-muted-foreground font-light pt-2">Karachi, Pakistan<br/>Pharmaceutical Hub</span>
              </li>
              <li className="flex items-center group">
                <div className="h-10 w-10 rounded-full border border-border/20 glass-card flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 group-hover:text-primary transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-muted-foreground font-light">+92 340 2392739</span>
              </li>
              <li className="flex items-center group">
                <div className="h-10 w-10 rounded-full border border-border/20 glass-card flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 group-hover:text-primary transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:ignitehealthcareinnovationforum@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-light break-all">
                  ignitehealthcareinnovationforum@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="pt-10 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          
          {/* 3D Newsletter Pill */}
          <Link href="/contact" className="bg-background/80 backdrop-blur-xl border border-border/30 rounded-full p-2 pl-6 flex items-center max-w-md w-full shadow-[inset_0_1px_4px_rgba(255,255,255,0.05),_0_10px_30px_-10px_rgba(0,0,0,0.3)] group hover:border-primary/30 transition-colors">
            <span className="text-muted-foreground/80 text-sm font-light flex-1">Have a question? Reach out to us</span>
            <span className="btn-3d px-6 py-2.5 rounded-full text-sm font-semibold shrink-0 cursor-pointer flex items-center">
              Contact <ExternalLink className="ml-2 h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          <p className="text-muted-foreground text-sm font-light flex items-center">
            &copy; {currentYear} IgnoVex <span className="mx-2 w-1.5 h-1.5 rounded-full bg-primary/40 inline-block" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
