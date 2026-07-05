import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import moselLogo from '@/assets/images/mosel-nav-logo.png';

const emerald = '#2C6E49';
const sand = '#F5F0E4';
const inkBlack = '#1A1A1A';
const mutedWarm = '#7A7060';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
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
      backgroundColor: `${sand}e6`,
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${inkBlack}18`,
    }}>
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={moselLogo} alt="Mosel Logo" className="h-8 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
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
                    color: isActive ? emerald : mutedWarm,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = inkBlack; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = mutedWarm; }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: emerald,
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
                backgroundColor: emerald,
                color: sand,
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
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
              border: `1px solid ${inkBlack}30`,
              backgroundColor: sand,
              padding: '10px',
              color: inkBlack,
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
              borderRadius: '24px',
              border: `1px solid ${inkBlack}18`,
              backgroundColor: sand,
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
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
                        fontSize: '1.25rem',
                        fontWeight: 500,
                        color: isActive ? emerald : inkBlack,
                        textDecoration: 'none',
                        borderBottom: i < navLinks.length - 1 ? `1px solid ${inkBlack}12` : 'none',
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
                    backgroundColor: emerald,
                    color: sand,
                    borderRadius: '999px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
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
