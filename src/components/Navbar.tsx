import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { MoselLogo } from '@/components/MoselLogo';

const mint = '#6EE7B7';
const navy = '#0E1217';
const surface = '#151B21';
const muted = '#94A2AC';
const border = '#26303A';
const inkLight = '#ECF1F3';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: `${navy}e6`,
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${border}`,
    }}>
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <MoselLogo fontSize="1.35rem" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    color: isActive ? mint : muted,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = inkLight; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = muted; }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: mint,
                      borderRadius: '999px',
                    }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 22px',
                backgroundColor: mint,
                color: navy,
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              border: `1px solid ${border}`,
              backgroundColor: surface,
              padding: '10px',
              color: inkLight,
            }}
            className="inline-flex md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="pt-4 md:hidden animate-fade-in">
            <div style={{
              borderRadius: '20px',
              border: `1px solid ${border}`,
              backgroundColor: surface,
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              overflow: 'hidden',
            }}>
              <div>
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'block',
                        padding: '20px',
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: isActive ? mint : inkLight,
                        textDecoration: 'none',
                        borderBottom: i < navLinks.length - 1 ? `1px solid ${border}` : 'none',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div style={{ padding: '16px' }}>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '14px',
                    backgroundColor: mint,
                    color: navy,
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
