import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, MessageCircle, Mail } from 'lucide-react';
import { MoselLogo } from '@/components/MoselLogo';

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="mb-4 inline-block">
              <MoselLogo fontSize="1.5rem" />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              We build digital products that help ambitious teams launch, grow, and win online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:moseldevteam@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  moseldevteam@gmail.com
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/60146228473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  Chat on WhatsApp
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mosel. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with ❤ in Kuching, Sarawak
          </p>
        </div>
      </div>
    </footer>
  );
}
