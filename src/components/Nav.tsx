import React, { useState, useEffect } from 'react';
import { useApp } from '@/AppContext';

const NAV_STYLE: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
  height: 'var(--nav-h)',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0 60px',
  transition: 'background 0.4s, box-shadow 0.4s',
};

export default function Nav() {
  const { nav, goto } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isHome = nav.page === 'home';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setMobileOpen(false), [nav.page]);

  const solid = !isHome || scrolled;

  const bg = solid
    ? 'rgba(30,20,8,0.97)'
    : 'transparent';
  const shadow = solid ? '0 1px 0 rgba(74,48,20,0.4)' : 'none';

  const navigate = (page: Parameters<typeof goto>[0], opts?: Parameters<typeof goto>[1]) => {
    goto(page, opts);
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{ ...NAV_STYLE, background: bg, boxShadow: shadow }}>
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          {/* Pillar SVG mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="24" height="2.5" fill="#C8930C"/>
            <rect x="4" y="25.5" width="24" height="2.5" fill="#C8930C"/>
            <rect x="6" y="8" width="4" height="17" fill="#C8930C"/>
            <rect x="22" y="8" width="4" height="17" fill="#C8930C"/>
            <rect x="12" y="8" width="8" height="2.5" fill="#C8930C"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--cream)' }}>
            PRIME<span style={{ color: 'var(--gold)' }}>PILLAR</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}
          className="nav-desktop-links">
          {[
            { label: 'Buy', items: [
              { label: 'All For Sale', page: 'properties' as const, opts: { filterStatus: 'buy' } },
              { label: 'Villas', page: 'properties' as const, opts: { filterStatus: 'buy', filterType: 'Villa' } },
              { label: 'Apartments', page: 'properties' as const, opts: { filterStatus: 'buy', filterType: 'Apartment' } },
              { label: 'Houses', page: 'properties' as const, opts: { filterStatus: 'buy', filterType: 'House' } },
              { label: 'Land', page: 'properties' as const, opts: { filterStatus: 'buy', filterType: 'Land' } },
            ]},
            { label: 'Rent', items: [
              { label: 'All Rentals', page: 'properties' as const, opts: { filterStatus: 'rent' } },
              { label: 'Villas for Rent', page: 'properties' as const, opts: { filterStatus: 'rent', filterType: 'Villa' } },
              { label: 'Apartments for Rent', page: 'properties' as const, opts: { filterStatus: 'rent', filterType: 'Apartment' } },
            ]},
            { label: 'Services', items: [
              { label: 'Valuation Services', page: 'services' as const },
              { label: 'Development & Sales', page: 'services' as const },
              { label: 'Management Services', page: 'services' as const },
              { label: 'Project Management', page: 'services' as const },
              { label: 'Real Estate Advisory', page: 'services' as const },
            ]},
            { label: 'About Us', items: [
              { label: 'Who We Are', page: 'about' as const },
              { label: 'Our Team', page: 'about' as const },
              { label: 'Our Partners', page: 'about' as const },
            ]},
          ].map(item => (
            <li
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button style={linkStyle}>{item.label}</button>
              {activeDropdown === item.label && (
                <div style={dropdownStyle}>
                  {item.items.map(sub => (
                    <button
                      key={sub.label}
                      onClick={() => navigate(sub.page, 'opts' in sub ? sub.opts : undefined)}
                      style={dropItemStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <button style={linkStyle} onClick={() => navigate('newsletter')}>Newsletters</button>
          </li>
          <li>
            <button style={linkStyle} onClick={() => navigate('contact')}>Contact</button>
          </li>
        </ul>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="nav-right">
          <a href="tel:+2304675001" style={{ fontSize: 11, letterSpacing: 1.5, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
            className="nav-tel">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
            </svg>
            +230 467 5001
          </a>
          <button className="btn btn-gold" style={{ padding: '10px 22px' }} onClick={() => navigate('contact')}>
            Contact Us
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
          className="hamburger"
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--cream)', transition: 'all .3s', transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}/>
          <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--cream)', opacity: mobileOpen ? 0 : 1, transition: 'opacity .3s' }}/>
          <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--cream)', transition: 'all .3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}/>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, bottom: 0,
          background: 'rgba(30,20,8,.98)', backdropFilter: 'blur(20px)',
          zIndex: 190, overflowY: 'auto', padding: '32px 24px',
          display: 'flex', flexDirection: 'column',
        }}>
          {[
            { label: 'Buy Property',  page: 'properties' as const, opts: { filterStatus: 'buy' }  },
            { label: 'Rent Property', page: 'properties' as const, opts: { filterStatus: 'rent' } },
            { label: 'Services',      page: 'services'    as const },
            { label: 'About Us',      page: 'about'       as const },
            { label: 'Newsletters',   page: 'newsletter'  as const },
            { label: 'Contact',       page: 'contact'     as const },
          ].map(item => (
            <button
              key={item.label}
              onClick={() => navigate(item.page, 'opts' in item ? item.opts : undefined)}
              style={{ display: 'block', padding: '16px 0', fontSize: 16, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--cream)', fontWeight: 300, background: 'none', border: 'none', borderBottom: '1px solid var(--dark-border)', cursor: 'pointer', textAlign: 'left' }}
            >
              {item.label}
            </button>
          ))}
          <button className="btn btn-gold" style={{ marginTop: 32 }} onClick={() => navigate('contact')}>
            Book a Consultation
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .nav-desktop-links { display: none !important; }
          .nav-right { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (max-width: 768px) {
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}

const linkStyle: React.CSSProperties = {
  fontSize: 11, letterSpacing: 2, fontWeight: 500, textTransform: 'uppercase',
  color: 'rgba(245,240,232,0.8)', padding: '10px 14px',
  background: 'none', border: 'none', cursor: 'pointer',
  transition: 'color .25s', whiteSpace: 'nowrap',
};

const dropdownStyle: React.CSSProperties = {
  position: 'absolute', top: '100%', left: 0,
  background: 'rgba(30,20,8,0.98)',
  border: '1px solid var(--dark-border)',
  borderTop: '2px solid var(--gold)',
  minWidth: 200, padding: '8px 0',
  display: 'flex', flexDirection: 'column',
  backdropFilter: 'blur(16px)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  zIndex: 10,
};

const dropItemStyle: React.CSSProperties = {
  display: 'block', padding: '10px 20px',
  fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
  fontWeight: 400, color: 'var(--text-light)',
  background: 'none', border: 'none', cursor: 'pointer',
  textAlign: 'left', transition: 'color .2s, padding .2s',
  width: '100%',
};
