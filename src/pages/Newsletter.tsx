import React, { useState } from 'react';
import { useApp } from '@/AppContext';
import { useReveal } from '@/hooks/useReveal';

const ARTICLES = [
  {
    date: 'March 2025',
    category: 'Market Report',
    title: 'Mauritius Property Market – Q1 2025 Review',
    summary: 'An in-depth analysis of residential and commercial property trends, price movements, and emerging hotspots across the island. Featuring data from over 200 transactions.',
    color: '#1a2a1a',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
  },
  {
    date: 'January 2025',
    category: 'Investment Guide',
    title: 'Investing in Mauritius Real Estate: The 2025 Guide',
    summary: 'Everything foreign investors need to know about purchasing property in Mauritius — from legal frameworks and tax incentives to IRS, PDS and Smart City scheme opportunities.',
    color: '#1a1a2a',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
  },
  {
    date: 'November 2024',
    category: 'Luxury Segment',
    title: 'Luxury Villa Market: Grand Baie & Tamarin Report',
    summary: 'A comparative study of the premium villa market across Mauritius\'s most sought-after coastal locations, with price forecasts and buyer sentiment analysis.',
    color: '#2a1a1a',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  },
  {
    date: 'September 2024',
    category: 'Valuation Update',
    title: 'Bank Panel Valuation Standards – What Buyers Need to Know',
    summary: 'How RICS-certified valuations differ from standard estimates, why they matter to banks, and how Prime Pillar\'s reports are structured for seamless mortgage approvals.',
    color: '#1a2a2a',
    icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
  },
  {
    date: 'July 2024',
    category: 'Rental Market',
    title: 'The Mauritius Rental Market: Yields, Demand & Outlook',
    summary: 'Current rental yields by location, tenant demand trends, and a forward outlook for the letting market — essential reading for landlords and buy-to-let investors.',
    color: '#1a1a1a',
    icon: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z',
  },
  {
    date: 'May 2024',
    category: 'Development News',
    title: 'The Pride Development – Exclusive Preview',
    summary: 'An inside look at Prime Pillar\'s flagship new development on the west coast — design inspiration, specification highlights, and first-release pricing details.',
    color: '#2a1a0a',
    icon: 'M2 20h20M4 20V8l8-6 8 6v12',
  },
];

export default function Newsletter() {
  const { showToast } = useApp();
  const ref = useReveal();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed! You\'ll receive our next newsletter shortly.');
    setEmail('');
  };

  return (
    <div ref={ref} style={{ background: 'var(--bg-warm)' }}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">Home &rsaquo; <span>Newsletters</span></p>
          <h1 className="sec-title" style={{ color: 'var(--cream)', fontSize: 'clamp(28px,4vw,44px)' }}>Market <em>Insights</em></h1>
        </div>
      </div>

      <section className="sec">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span className="eyebrow reveal">Reports & Analysis</span>
            <h2 className="sec-title reveal rd1">Real Estate <em>News & Reports</em></h2>
            <div className="gold-rule reveal rd2" />
            <p className="lead reveal rd2">Expert commentary, market data and property insights from the Prime Pillar team — keeping you informed and ahead of the market.</p>
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="nl-grid-resp">
          {ARTICLES.map((a, i) => (
            <article key={i} className={`reveal rd${(i % 3) + 1}`}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer', transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-3px)'; d.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; d.style.boxShadow = ''; }}>
              {/* Coloured header */}
              <div style={{ height: 160, background: `linear-gradient(135deg, ${a.color}, #0a0a0a)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 20 }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(243,180,51,.35)" strokeWidth="1">
                  <path d={a.icon}/>
                </svg>
                <div style={{ position: 'absolute', top: 14, left: 14, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(20,10,2,.7)', padding: '5px 10px' }}>{a.date}</div>
                <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-light)', background: 'rgba(20,10,2,.7)', padding: '5px 10px' }}>{a.category}</div>
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 500, color: 'var(--brown-deep)', marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 18 }}>{a.summary}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-dk)' }}>
                  Read Report
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe Block */}
        <div className="reveal" style={{ marginTop: 64, background: 'var(--brown-deep)', border: '1px solid var(--dark-border)', padding: '56px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(243,180,51,.07), transparent 70%)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow">Stay Informed</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 300, color: 'var(--cream)', margin: '10px 0 12px' }}>
              Stay Ahead of the <em style={{ color: 'var(--gold)' }}>Market</em>
            </h3>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-light)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
              Subscribe to the Prime Pillar newsletter and receive the latest property market insights, investment opportunities, and new listings directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', maxWidth: 520, margin: '0 auto', gap: 0 }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ flex: 1, background: 'rgba(250,250,247,.07)', border: '1px solid rgba(243,180,51,.3)', borderRight: 0, color: 'var(--cream)', fontFamily: 'var(--font-body)', fontSize: 13, padding: '14px 18px', outline: 'none', transition: 'border-color .25s' }}
              />
              <button type="submit" className="btn btn-gold" style={{ padding: '14px 28px', flexShrink: 0 }}>
                Subscribe
              </button>
            </form>
            <p style={{ fontSize: 11, color: 'var(--text-light)', opacity: 0.5, marginTop: 12 }}>No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .nl-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
