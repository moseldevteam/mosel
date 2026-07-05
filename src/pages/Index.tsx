import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import moselHeroLogo from '@/assets/images/mosel-hero-logo.png';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const emerald = '#2C6E49';
const sand = '#F5F0E4';
const inkBlack = '#1A1A1A';
const mutedWarm = '#7A7060';

export default function Index() {
  return (
    <div style={{ backgroundColor: sand, minHeight: '100vh', display: 'flex', flexDirection: 'column', }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem' }}>
        <div className="container-custom section-padding text-center">
          <div className="max-w-3xl mx-auto">

            {/* Subtle emerald glow blob */}
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              backgroundColor: emerald,
              opacity: 0.06,
              borderRadius: '50%',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }} />

            <div className="mb-10 animate-fade-in">
              <img src={moselHeroLogo} alt="Mosel" className="h-16 md:h-24 lg:h-28 mx-auto" />
            </div>

            <h1
              style={{ color: inkBlack }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            >
              We're Rebranding.
            </h1>

            <p
              style={{ color: mutedWarm }}
              className="text-xl md:text-2xl mb-4 animate-fade-in"
            >
              Something much bigger is coming.
            </p>

            <p
              style={{ color: mutedWarm }}
              className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in"
            >
              Mosel is undergoing a{' '}
              <span style={{ color: emerald, fontWeight: 700 }}>HUGE REBRANDING</span>
              {' '}— new look, new vision, new energy. Stay tuned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: emerald,
                  color: sand,
                  borderRadius: '12px',
                  fontWeight: 600,
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
                  color: inkBlack,
                  border: `2px solid ${inkBlack}`,
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = inkBlack;
                  e.currentTarget.style.color = sand;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = inkBlack;
                }}
              >
                Get in Touch
              </Link>
            </div>

            {/* Color palette hint */}
            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: emerald }} title="Artisan Emerald Green" />
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: sand, border: `2px solid ${mutedWarm}` }} title="Sand" />
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: inkBlack }} title="Ink Black" />
            </div>
            <p style={{ color: mutedWarm, fontSize: '0.75rem', marginTop: '8px', letterSpacing: '0.05em' }}>
              A SNEAK PEEK OF WHAT'S COMING
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
