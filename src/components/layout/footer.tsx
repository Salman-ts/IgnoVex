import Link from "next/link";
import { Linkedin, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-violet-600 tracking-tight">
                IgnoVex
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering the next generation of medical and tech professionals through world-class learning, mentorship, and career opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ignovex/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-sky-500 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Platform</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/programs" className="hover:text-primary transition-colors">Academic Programs</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
              <li><Link href="/internships" className="hover:text-primary transition-colors">Internships</Link></li>
              <li><Link href="/mentorship" className="hover:text-primary transition-colors">Find a Mentor</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Student Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Career Pathways</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span>hello@ignovex.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span>123 Innovation Drive<br />Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IgnoVex Education. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
