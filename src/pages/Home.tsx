import React, { useState } from 'react';
import { useApp } from '@/AppContext';
import PropertyCard from '@/components/PropertyCard';
import PartnersCarousel from '@/components/PartnersCarousel';
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

const TEAM = [
  { init: 'KM', name: 'Kentish Moorghen', creds: 'FRICS, MCABE', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80' },
  { init: 'KD', name: 'Krishan Deeljore', creds: 'MCIPD', role: 'Independent Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80' },
  { init: 'PP', name: 'Advisory Team', creds: 'Experienced Professionals', role: 'Real Estate Advisors', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80' },
];

const TESTIMONIALS = [
  { quote: "Prime Pillar's valuation team was exceptional — professional, thorough, and the report was accepted by the bank immediately. Genuinely the best in the business.", name: 'Sylvie Randrianasolo', role: 'Property Owner, Grand Baie', init: 'S' },
  { quote: "We purchased our Cosy Garden villa through Prime Pillar and the experience was flawless from start to finish. Their team guided us with total transparency.", name: 'Marc & Isabelle Fontaine', role: 'Homebuyers, Quatre Bornes', init: 'M' },
  { quote: "The property management service has been a game changer. Our investment is protected, tenants are happy, and the team is always just a call away.", name: 'Rajiv Nundkumar', role: 'Property Investor, Moka', init: 'R' },
];

export default function Home() {
  const { goto } = useApp();
  const ref = useReveal();

  const [searchMode, setSearchMode] = useState<'buy' | 'rent'>('buy');
  const [sType, setSType] = useState('');
  const [sLoc, setSLoc] = useState('');
  const [sBudget, setSBudget] = useState('');
  const [sBeds, setSBeds] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featured = PROPERTIES.filter(p => FEATURED_IDS.includes(p.id));

  const handleSearch = () => {
    goto('properties', {
      filterStatus: searchMode,
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 60% 40%, rgba(243,180,51,0.08), transparent 70%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 960, animation: 'fadeUp .8s .2s both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(243,180,51,0.35)', borderRadius: 'var(--radius)', padding: '8px 22px', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 500, color: 'var(--gold)', marginBottom: 28 }}>
            <span style={{ width: 5, height: 5, background: 'var(--gold)', borderRadius: '50%', display: 'inline-block' }}/>
            Mauritius Real Estate · Est. 2011 · FRICS Certified
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 600, lineHeight: 1.1, color: 'var(--cream)' }}>
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
            {(['buy', 'rent'] as const).map(tab => (
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
          <div style={{ background: 'rgba(250,250,247,0.97)', backdropFilter: 'blur(20px)', padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap', borderRadius: '0 0 var(--radius) var(--radius)' }}>
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
        <div className="hero-stats-strip" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', marginTop: 28, border: '1px solid rgba(243,180,51,.2)', borderRadius: 'var(--radius)', background: 'rgba(20,10,2,.5)', backdropFilter: 'blur(12px)', animation: 'fadeUp .8s 1s both' }}>
          {[['13+','Years Active'],['500+','Properties Valued'],['15+','Bank Partners'],['150+','Happy Clients']].map(([n,l]) => (
            <div key={l} style={{ padding: '16px 28px', textAlign: 'center', borderRight: '1px solid rgba(243,180,51,.15)', flex: '1 1 auto', minWidth: 120 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, color: 'var(--gold)', lineHeight: 1 }}>{n}</div>
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

      {/* ── SERVICES (What We Do) ── */}
      <section id="featured" className="sec" style={{ background: 'var(--card)' }}>
        <div className="text-center" style={{ marginBottom: 52 }}>
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="sec-title reveal rd1">A Full Spectrum of <em>Real Estate Services</em></h2>
          <div className="gold-rule center reveal rd2" />
          <p className="lead reveal rd2" style={{ margin: '0 auto 24px' }}>From valuation to luxury development, we bring unmatched expertise to every stage of your real estate journey.</p>
          <button className="btn btn-outline reveal rd3" onClick={() => goto('services')}>
            All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="srv-grid-resp">
          {SERVICES.map((s, i) => (
            <div key={s.num} className={`reveal rd${(i % 3) + 1}`}
              onClick={() => goto('services')}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '36px 30px', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-4px)'; d.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; d.style.boxShadow = ''; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'rgba(243,180,51,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dk)" strokeWidth="1.5">
                    <path d={s.icon}/>{s.num === '03' && <><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>}{s.num === '04' && <polyline points="22 4 12 14.01 9 11.01"/>}
                  </svg>
                </div>
                <span style={{ fontSize: 32, fontWeight: 700, color: 'var(--gold)', opacity: 0.25, lineHeight: 1 }}>{s.num}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75 }}>{s.desc}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-dk)' }}>
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section className="sec" style={{ background: 'var(--bg-warm)' }}>
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

      {/* ── OUR DEVELOPMENTS ── */}
      <section className="sec" style={{ background: 'var(--card)' }}>
        <div className="text-center">
          <span className="eyebrow reveal">Our Projects</span>
          <h2 className="sec-title reveal rd1">Our <em>Developments</em></h2>
          <div className="gold-rule center reveal rd2" />
          <p className="lead reveal rd2" style={{ margin: '0 auto 48px' }}>Award-winning residential developments crafted with precision, quality, and modern living in mind.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="dev-grid-resp">
          {[
            { name: 'Cosy Garden 5', location: 'Quatre Bornes', status: 'Sold Out', desc: 'The flagship Cosy Garden brand — a decade of redefining residential living in Mauritius.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
            { name: 'Cosy Garden 6', location: 'Quatre Bornes', status: 'Ongoing', desc: 'Growing in quality and product variety. Premium units starting from Rs 7,500,000.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
            { name: 'The Pride', location: 'Mauritius', status: 'Coming Soon', desc: 'An exciting new development from Prime Pillar — details coming soon.', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80' },
          ].map((dev, i) => (
            <div key={i} className={`reveal rd${i + 1}`}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', transition: 'border-color .3s, transform .3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; }}>
              <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                <img src={dev.img} alt={dev.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 14, right: 14, padding: '5px 14px', borderRadius: 'var(--radius-sm)', background: dev.status === 'Ongoing' ? 'var(--gold)' : 'var(--brown-deep)', color: dev.status === 'Ongoing' ? 'var(--brown-deep)' : 'var(--cream)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700 }}>
                  {dev.status}
                </div>
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--brown-deep)', marginBottom: 6 }}>{dev.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: 10 }}>{dev.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--text-mid)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dk)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {dev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <PartnersCarousel label="Our Trusted Partners" />

      {/* ── THE TEAM ── */}
      <section className="sec" style={{ background: 'var(--bg-warm)' }}>
        <div className="text-center">
          <span className="eyebrow reveal">Our People</span>
          <h2 className="sec-title reveal rd1">The <em>Team</em></h2>
          <div className="gold-rule center reveal rd2" />
          <p className="lead reveal rd2" style={{ margin: '0 auto 48px' }}>The professionals behind Prime Pillar bring decades of combined expertise and a shared commitment to excellence.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="team-grid-resp">
          {TEAM.map((m, i) => (
            <div key={i} className={`reveal rd${i + 1}`}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', transition: 'border-color .3s, transform .3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; }}>
              <div style={{ height: 260, overflow: 'hidden', position: 'relative' }}>
                <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,10,2,.5) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold-pale)', fontWeight: 600 }}>{m.creds}</div>
                </div>
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--brown-deep)', marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: 'var(--gold-dk)', letterSpacing: 1 }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center reveal rd3" style={{ marginTop: 40 }}>
          <button className="btn btn-outline" onClick={() => goto('about')}>
            Learn More About Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="sec" style={{ background: 'var(--brown-deep)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, left: -40, fontFamily: 'var(--font-display)', fontSize: 700, fontWeight: 600, color: 'rgba(243,180,51,.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</div>
        <div className="text-center">
          <span className="eyebrow reveal">Client Stories</span>
          <h2 className="sec-title light reveal rd1">What Our Clients <em>Say</em></h2>
          <div className="gold-rule center reveal rd2" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }} className="testi-grid-resp">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`reveal rd${i + 1}`} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(74,48,20,.5)', padding: '38px 32px', borderRadius: 'var(--radius)', transition: 'border-color .3s, transform .3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(243,180,51,.4)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
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
        <div style={{ padding: '100px 80px', background: 'linear-gradient(135deg, rgba(243,180,51,.05) 0%, transparent 60%)' }} className="why-left-resp">
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
        <div style={{ padding: '100px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignContent: 'center' }} className="why-right-resp">
          {[['13+','Years in Business'],['500+','Properties Valued'],['15+','Banking Partners'],['100%','Client Satisfaction']].map(([n,l], i) => (
            <div key={l} className={`reveal rd${i + 1}`} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '36px 28px', transition: 'border-color .3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--gold)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'}>
              <div style={{ fontSize: 44, fontWeight: 700, color: 'var(--gold-dk)', lineHeight: 1 }}>{n}</div>
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
      <section className="cta-image-section">
        <div className="cta-image-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80)' }} />
        <div className="cta-image-content">
          <span className="eyebrow reveal" style={{ color: 'var(--gold)' }}>Take the Next Step</span>
          <h2 className="sec-title light reveal rd1" style={{ fontSize: 'clamp(32px, 5vw, 56px)', margin: '0 auto 18px' }}>
            Ready to Find Your<br /><em>Perfect Property?</em>
          </h2>
          <div className="gold-rule center reveal rd2" />
          <p className="reveal rd2" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-light)', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Speak with one of our expert advisors. Whether buying, selling, renting, or investing — Prime Pillar is ready to guide you.
          </p>
          <div className="reveal rd3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-gold" onClick={() => goto('contact')}>Schedule a Consultation</button>
            <button className="btn btn-white" onClick={() => goto('properties')}>Browse All Properties</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .prop-grid-resp { grid-template-columns: 1fr !important; }
          .srv-grid-resp  { grid-template-columns: 1fr !important; }
          .dev-grid-resp  { grid-template-columns: 1fr !important; }
          .team-grid-resp  { grid-template-columns: 1fr !important; }
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
