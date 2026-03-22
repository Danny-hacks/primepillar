import React, { useState } from 'react';
import { useApp } from '@/AppContext';
import PropertyCard from '@/components/PropertyCard';
import { useReveal } from '@/hooks/useReveal';
import { PROPERTIES, LOCATIONS } from '@/data/properties';

const FEATURED_IDS = [1, 4, 10, 15, 3, 13];

const SERVICES = [
  { num: '01', title: 'Valuation Services', desc: 'RICS-certified property valuations accepted by every major bank in Mauritius. Residential, commercial, and land.', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { num: '02', title: 'Development & Sales', desc: 'End-to-end luxury property development and sales, from land acquisition to buyer handover.', icon: 'M2 20h20M4 20V8l8-6 8 6v12' },
  { num: '03', title: 'Management Services', desc: 'Full-service property management covering tenant sourcing, rent collection, and maintenance oversight.', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
  { num: '04', title: 'Project Management', desc: 'Expert construction oversight ensuring timely delivery within budget and to the highest specification.', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' },
  { num: '05', title: 'Real Estate Advisory', desc: 'Strategic investment guidance and market intelligence to power confident real estate decisions.', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z' },
  { num: '06', title: 'Property Letting', desc: 'Full letting service connecting quality landlords with verified tenants, maximising your rental yield.', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
];

const TESTIMONIALS = [
  { quote: "Prime Pillar's valuation team was exceptional — professional, thorough, and the report was accepted by the bank immediately. Genuinely the best in the business.", name: 'Sylvie Randrianasolo', role: 'Property Owner, Grand Baie', init: 'S' },
  { quote: "We purchased our Cosy Garden villa through Prime Pillar and the experience was flawless from start to finish. Their team guided us with total transparency.", name: 'Marc & Isabelle Fontaine', role: 'Homebuyers, Quatre Bornes', init: 'M' },
  { quote: "The property management service has been a game changer. Our investment is protected, tenants are happy, and the team is always just a call away.", name: 'Rajiv Nundkumar', role: 'Property Investor, Moka', init: 'R' },
];

export default function Home() {
  const { goto } = useApp();
  const ref = useReveal();

  const [searchMode, setSearchMode] = useState<'buy' | 'rent' | 'valuation'>('buy');
  const [sType, setSType] = useState('');
  const [sLoc, setSLoc] = useState('');
  const [sBudget, setSBudget] = useState('');
  const [sBeds, setSBeds] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featured = PROPERTIES.filter(p => FEATURED_IDS.includes(p.id));

  const handleSearch = () => {
    goto('properties', {
      filterStatus: searchMode === 'valuation' ? '' : searchMode,
      filterType: sType || undefined,
    });
  };

  const FAQS = [
    { q: "What makes Prime Pillar's valuations different?", a: "Prime Pillar is led by Kentish Moorghen FRICS — a Fellow of the Royal Institution of Chartered Surveyors — the highest internationally recognised standard in property. Our reports are accepted by all major banks and financial institutions in Mauritius." },
    { q: "Can Prime Pillar help me both buy and rent a property?", a: "Absolutely. We offer comprehensive services covering purchase, rental, management, and advisory. Whether you're a first-time buyer, an investor, or seeking a rental home, our dedicated team supports you at every stage." },
    { q: "Which areas of Mauritius do you cover?", a: "We operate island-wide including Grand Baie, Tamarin, Moka, Quatre Bornes, Ebène, Flic en Flac, Belle Mare, Pereybere, Black River and all surrounding regions." },
    { q: "How long does a property valuation take?", a: "A standard residential valuation report is typically completed within 3–5 working days following the site inspection. Complex commercial or large-scale land valuations may take a little longer." },
    { q: "Does Prime Pillar assist with new developments?", a: "Yes. Through our Development & Sales and Project Management divisions, we support developers from concept to completion. Our award-winning Cosy Garden brand is a testament to this capability." },
  ];

  return (
    <div ref={ref}>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 'var(--nav-h)' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,10,2,.65) 0%, rgba(20,10,2,.3) 40%, rgba(20,10,2,.9) 100%), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80) center/cover no-repeat' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(200,147,12,0.08), transparent 70%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 960, animation: 'fadeUp .8s .2s both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(200,147,12,0.35)', padding: '8px 22px', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 500, color: 'var(--gold)', marginBottom: 28 }}>
            <span style={{ width: 5, height: 5, background: 'var(--gold)', borderRadius: '50%', display: 'inline-block' }}/>
            Mauritius Real Estate · Est. 2011 · FRICS Certified
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 300, lineHeight: 1.04, color: 'var(--cream)' }}>
            Discover <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Extraordinary</em><br />Properties in Mauritius
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(245,240,232,.65)', maxWidth: 480, margin: '20px auto 0' }}>
            Luxury homes, expert valuations and exclusive real estate advisory guided by the highest professional standards.
          </p>
        </div>

        {/* Search Panel */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 980, padding: '0 24px', marginTop: 48, animation: 'fadeUp .8s .6s both' }}>
          {/* Tabs */}
          <div style={{ display: 'flex' }}>
            {(['buy', 'rent', 'valuation'] as const).map(tab => (
              <button key={tab} onClick={() => setSearchMode(tab)} style={{
                fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700,
                padding: '11px 28px', border: 'none', cursor: 'pointer',
                background: searchMode === tab ? 'rgba(245,240,232,0.97)' : 'rgba(30,20,8,0.55)',
                color: searchMode === tab ? 'var(--brown-deep)' : 'rgba(245,240,232,.45)',
                borderTop: searchMode === tab ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'all .25s',
              }}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          {/* Search Box */}
          <div style={{ background: 'rgba(250,250,247,0.97)', backdropFilter: 'blur(20px)', padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={sfStyle}>
              <label style={sfLabelStyle}>Property Type</label>
              <select style={sfSelectStyle} value={sType} onChange={e => setSType(e.target.value)}>
                <option value="">All Types</option>
                {['Villa','Apartment','House','Land','Commercial'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div style={sfStyle}>
              <label style={sfLabelStyle}>Location</label>
              <select style={sfSelectStyle} value={sLoc} onChange={e => setSLoc(e.target.value)}>
                <option value="">All Areas</option>
                {LOCATIONS.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div style={sfStyle}>
              <label style={sfLabelStyle}>Budget (Rs)</label>
              <select style={sfSelectStyle} value={sBudget} onChange={e => setSBudget(e.target.value)}>
                <option value="">Any Budget</option>
                <option value="5000000">Up to Rs 5M</option>
                <option value="10000000">Up to Rs 10M</option>
                <option value="20000000">Up to Rs 20M</option>
                <option value="50000000">Up to Rs 50M</option>
              </select>
            </div>
            <div style={sfStyle}>
              <label style={sfLabelStyle}>Bedrooms</label>
              <select style={sfSelectStyle} value={sBeds} onChange={e => setSBeds(e.target.value)}>
                <option value="">Any</option>
                {['1','2','3','4','5'].map(b => <option key={b} value={b}>{b}+</option>)}
              </select>
            </div>
            <button className="btn btn-gold" onClick={handleSearch} style={{ padding: '13px 32px', gap: 8, flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              Search
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', marginTop: 28, border: '1px solid rgba(200,147,12,.2)', background: 'rgba(20,10,2,.5)', backdropFilter: 'blur(12px)', animation: 'fadeUp .8s 1s both' }}>
          {[['13+','Years Active'],['500+','Properties Valued'],['15+','Bank Partners'],['150+','Happy Clients']].map(([n,l]) => (
            <div key={l} style={{ padding: '18px 36px', textAlign: 'center', borderRight: '1px solid rgba(200,147,12,.15)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-light)', marginTop: 5 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', zIndex: 2 }}
          onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}>
          <p style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</p>
          <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'pulse 2s infinite' }} />
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section id="featured" className="sec" style={{ background: 'var(--bg-warm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <div>
            <span className="eyebrow reveal">Latest Listings</span>
            <h2 className="sec-title reveal rd1">Featured <em>Properties</em></h2>
            <div className="gold-rule reveal rd2" />
          </div>
          <button className="btn btn-outline reveal" onClick={() => goto('properties')}>
            View All Properties
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="prop-grid-resp">
          {featured.map((p, i) => (
            <div key={p.id} className={`reveal rd${(i % 3) + 1}`}>
              <PropertyCard property={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sec" style={{ background: 'var(--card)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <div>
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="sec-title reveal rd1">A Full Spectrum of<br /><em>Real Estate Services</em></h2>
            <div className="gold-rule reveal rd2" />
            <p className="lead reveal rd2">From valuation to luxury development, we bring unmatched expertise to every stage of your real estate journey.</p>
          </div>
          <button className="btn btn-outline reveal" onClick={() => goto('services')}>
            All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="srv-grid-resp">
          {SERVICES.map((s, i) => (
            <div key={s.num} className={`reveal rd${(i % 3) + 1}`}
              onClick={() => goto('services')}
              style={{ background: 'var(--bg-warm)', border: '1px solid var(--border)', padding: '40px 34px', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 60, fontWeight: 300, color: 'rgba(200,147,12,.1)', position: 'absolute', top: 12, right: 18, lineHeight: 1 }}>{s.num}</span>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2" style={{ marginBottom: 22 }}>
                <path d={s.icon}/>{s.num === '03' && <><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}{s.num === '04' && <polyline points="22 4 12 14.01 9 11.01"/>}
              </svg>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, color: 'var(--brown-deep)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75 }}>{s.desc}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-dk)' }}>
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <div className="partners-strip">
        <p className="partners-label reveal">Trusted by leading financial institutions across Mauritius</p>
        <div className="partners-grid reveal rd1">
          {['SBM Bank','ABSA Bank','AfrAsia Bank','BCP Bank','Bank One','MauBank','Bank of Baroda','Investec Bank','Swan Group','Govt. of Mauritius'].map(name => (
            <div key={name} className="partner-item"><span>{name}</span></div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="sec" style={{ background: 'var(--brown-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, left: -40, fontFamily: 'var(--font-display)', fontSize: 700, fontWeight: 600, color: 'rgba(200,147,12,.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</div>
        <div className="text-center">
          <span className="eyebrow reveal">Client Stories</span>
          <h2 className="sec-title light reveal rd1">What Our Clients <em>Say</em></h2>
          <div className="gold-rule center reveal rd2" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }} className="testi-grid-resp">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`reveal rd${i + 1}`} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(74,48,20,.5)', padding: '38px 32px', transition: 'border-color .3s, transform .3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,147,12,.4)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,48,20,.5)'; (e.currentTarget as HTMLDivElement).style.transform = ''; }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[...Array(5)].map((_, j) => <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.65, color: 'var(--cream)', marginBottom: 24 }}>"{t.quote}"</blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', border: '1.5px solid var(--gold)', background: 'linear-gradient(135deg, #2a1a0a, #1a0e04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--gold)', flexShrink: 0 }}>{t.init}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--cream)' }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-light)', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--bg-warm)', padding: 0 }} className="why-grid-resp">
        <div style={{ padding: '100px 80px', background: 'linear-gradient(135deg, rgba(200,147,12,.05) 0%, transparent 60%)' }} className="why-left-resp">
          <span className="eyebrow reveal">Why Prime Pillar</span>
          <h2 className="sec-title reveal rd1">The Standard of<br /><em>Excellence</em> Since 2011</h2>
          <div className="gold-rule reveal rd2" />
          <p className="lead reveal rd2">We are led by a Fellow of the Royal Institution of Chartered Surveyors (FRICS) — the highest international standard. Our reports are accepted by every major bank in Mauritius.</p>
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['RICS Certified Valuations', 'Bank-approved reports accepted by all major Mauritian financial institutions.', 'M22 11.08V12a10 10 0 1 1-5.93-9.14'],
              ['Trusted by 15+ Banks', 'Official panel valuers for SBM, ABSA, AfrAsia, BCP, Investec and beyond.', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
              ['Over 13 Years of Expertise', 'A proven track record delivering results for buyers, sellers, and investors.', 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z'],
            ].map(([title, desc, icon], i) => (
              <div key={i} className={`reveal rd${i + 2}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path d={icon}/>{i === 0 && <polyline points="22 4 12 14.01 9 11.01"/>}
                </svg>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--brown-deep)', fontWeight: 500 }}>{title}</strong> — {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '100px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, alignContent: 'center' }} className="why-right-resp">
          {[['13+','Years in Business'],['500+','Properties Valued'],['15+','Banking Partners'],['100%','Client Satisfaction']].map(([n,l], i) => (
            <div key={l} className={`reveal rd${i + 1}`} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '36px 28px', transition: 'border-color .3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--gold)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 300, color: 'var(--gold-dk)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec text-center" style={{ background: 'var(--card)' }}>
        <span className="eyebrow reveal">Common Questions</span>
        <h2 className="sec-title reveal rd1">Frequently Asked <em>Questions</em></h2>
        <div className="gold-rule center reveal rd2" />
        <div style={{ maxWidth: 760, margin: '48px auto 0', textAlign: 'left' }}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`reveal rd${(i % 3) + 1}`} style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 400, color: openFaq === i ? 'var(--gold-dk)' : 'var(--brown-deep)', transition: 'color .25s', textAlign: 'left', gap: 16 }}
              >
                {faq.q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" style={{ flexShrink: 0, transition: 'transform .35s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              <div style={{ maxHeight: openFaq === i ? 220 : 0, overflow: 'hidden', transition: 'max-height .4s ease', fontSize: 14, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.8, paddingBottom: openFaq === i ? 22 : 0 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: 'relative', padding: '120px 60px', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, var(--brown-deep) 0%, #140E04 50%, #1A1204 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,147,12,.08), transparent 70%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        <span className="eyebrow reveal" style={{ position: 'relative', zIndex: 1 }}>Take the Next Step</span>
        <h2 className="reveal rd1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--cream)', maxWidth: 660, margin: '12px auto 18px', position: 'relative', zIndex: 1 }}>
          Ready to Find Your<br /><em style={{ color: 'var(--gold)' }}>Perfect Property?</em>
        </h2>
        <p className="reveal rd2" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-light)', maxWidth: 440, margin: '0 auto 44px', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
          Speak with one of our expert advisors. Whether buying, selling, renting, or investing — Prime Pillar is ready to guide you.
        </p>
        <div className="reveal rd3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          <button className="btn btn-gold" onClick={() => goto('contact')}>
            Schedule a Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn btn-white" onClick={() => goto('properties')}>
            Browse All Properties
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .prop-grid-resp { grid-template-columns: 1fr !important; }
          .srv-grid-resp  { grid-template-columns: 1fr !important; }
          .testi-grid-resp { grid-template-columns: 1fr !important; }
          .why-grid-resp  { grid-template-columns: 1fr !important; }
          .why-left-resp  { padding: 60px 24px !important; }
          .why-right-resp { padding: 60px 24px !important; }
        }
        @media (max-width: 768px) {
          .hero-search-sf { min-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}

const sfStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 7, flex: 1, minWidth: 130 };
const sfLabelStyle: React.CSSProperties = { fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-dk)' };
const sfSelectStyle: React.CSSProperties = { background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontSize: 13, padding: '8px 4px', outline: 'none', WebkitAppearance: 'none', cursor: 'pointer', transition: 'border-color .25s' };
