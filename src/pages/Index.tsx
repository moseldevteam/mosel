import { Link } from 'react-router-dom';
import { ArrowRight, Code2, ShoppingCart, Palette, Bot } from 'lucide-react';
import { MoselLogo } from '@/components/MoselLogo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/data/projects';

const mint = '#6EE7B7';
const navy = '#0E1217';
const surface = '#151B21';
const border = '#26303A';
const muted = '#94A2AC';
const inkLight = '#ECF1F3';

const offerings = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom responsive websites and web apps — from landing pages to full-stack platforms — built for speed and clean UX.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Multi-seller marketplaces, online stores, and product catalogues with smart admin dashboards and seamless checkout.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma prototypes and polished design systems that put user experience first — from wireframes to production-ready visuals.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Bilingual AI chatbots, automated email flows, and intelligent tools that keep your business running around the clock.',
  },
];

export default function Index() {
  return (
    <div style={{ backgroundColor: navy, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '5rem',
        }}>
          {/* Mint glow */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            backgroundColor: mint,
            opacity: 0.05,
            borderRadius: '50%',
            filter: 'blur(120px)',
            pointerEvents: 'none',
          }} />

          <div className="container-custom w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="max-w-3xl mx-auto">

              <div className="mb-8 animate-fade-in">
                <MoselLogo fontSize="4.5rem" className="block" />
              </div>

              <div className="mb-6 animate-fade-in" style={{ animationDelay: '80ms' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  backgroundColor: `${mint}18`,
                  color: mint,
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  border: `1px solid ${mint}30`,
                }}>
                  DIGITAL AGENCY · KUCHING, SARAWAK
                </span>
              </div>

              <h1
                style={{ color: inkLight, animationDelay: '130ms' }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight"
              >
                We Build Digital Products<br />
                <span style={{ color: mint }}>That Drive Results.</span>
              </h1>

              <p
                style={{ color: muted, animationDelay: '180ms' }}
                className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
              >
                From websites and e-commerce platforms to AI chatbots and custom software — Mosel helps ambitious teams launch and grow online.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                style={{ animationDelay: '230ms' }}
              >
                <Link
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    backgroundColor: mint,
                    color: navy,
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  See Our Work
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 28px',
                    backgroundColor: 'transparent',
                    color: inkLight,
                    border: `1px solid ${border}`,
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = mint;
                    e.currentTarget.style.color = mint;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.color = inkLight;
                  }}
                >
                  Get In Touch
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── Featured Work ──────────────────────────────────────── */}
        <section style={{ backgroundColor: surface }} className="section-padding">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p style={{ color: mint, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px' }}>
                  SELECTED WORK
                </p>
                <h2 style={{ color: inkLight }} className="text-3xl md:text-4xl font-bold">
                  What We've Built
                </h2>
              </div>
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: mint,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Offerings ──────────────────────────────────────── */}
        <section style={{ backgroundColor: navy }} className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p style={{ color: mint, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px' }}>
                OUR OFFERINGS
              </p>
              <h2 style={{ color: inkLight }} className="text-3xl md:text-4xl font-bold mb-4">
                What We Do
              </h2>
              <p style={{ color: muted }} className="text-base max-w-lg mx-auto">
                End-to-end digital solutions built to help your business grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerings.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl opacity-0 animate-fade-in-up"
                  style={{
                    backgroundColor: surface,
                    border: `1px solid ${border}`,
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards',
                    transition: 'border-color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = `${mint}55`)}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = border)}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${mint}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <item.icon color={mint} size={22} />
                  </div>
                  <h3 style={{ color: inkLight }} className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p style={{ color: muted }} className="text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'transparent',
                  color: mint,
                  border: `1px solid ${mint}50`,
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = `${mint}12`;
                  e.currentTarget.style.borderColor = mint;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = `${mint}50`;
                }}
              >
                View Pricing & Packages
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: surface, borderTop: `1px solid ${border}` }} className="section-padding">
          <div className="container-custom text-center">
            <h2 style={{ color: inkLight }} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p style={{ color: muted }} className="text-lg max-w-xl mx-auto mb-8">
              Let's talk about what you need. We'll scope it, design it, and build it — together.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: mint,
                color: navy,
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
