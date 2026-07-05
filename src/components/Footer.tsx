import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, MessageCircle } from 'lucide-react';
import moselLogoFooter from '@/assets/images/mosel-logo-footer.png';
import { Mail } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ],
};

const socialLinks: { href: string; icon?: any; label: string }[] = [];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center">
            <Link to="/" className="mb-6">
              <img src={moselLogoFooter} alt="Mosel Logo" className="w-48 h-auto object-contain transition-all duration-300 hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.3)]" />
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed text-center">
              We help you get more sales and grow together side by side!
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:moseldevteam@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  moseldevteam@gmail.com
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/60146228473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-background/50 text-sm text-center w-full">
            © {new Date().getFullYear()} Mosel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
