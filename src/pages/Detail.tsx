import React, { useState } from 'react';
import { useApp } from '@/AppContext';
import { PROPERTIES } from '@/data/properties';
import { formatPrice } from '@/components/PropertyCard';

export default function Detail() {
  const { nav, goto, showToast, toggleFav, favs } = useApp();
  const p = PROPERTIES.find(x => x.id === nav.detailId);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  if (!p) {
    return (
      <div style={{ paddingTop: 'var(--nav-h)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 12 }}>Property not found</h2>
          <button className="btn btn-gold" onClick={() => goto('properties')}>Back to Listings</button>
        </div>
      </div>
    );
  }

  const isFav = favs.has(p.id);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast('Enquiry sent! Our team will be in touch within 24 hours.');
    setName(''); setEmail(''); setPhone(''); setMsg('');
  };

  // Related properties
  const related = PROPERTIES.filter(x => x.id !== p.id && (x.location === p.location || x.type === p.type)).slice(0, 3);

  return (
    <div style={{ background: 'var(--bg-warm)', paddingTop: 'var(--nav-h)' }}>
      {/* Back button */}
      <div style={{ padding: '24px 60px 0' }} className="detail-pad-resp">
        <button onClick={() => goto('properties')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color .25s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-dk)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Listings
        </button>
      </div>

      {/* Hero Image */}
      <div style={{ height: 520, position: 'relative', overflow: 'hidden', margin: '20px 0 0' }} className="detail-hero-resp">
        <img src={p.imgFull} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,10,2,.85) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }} className="detail-pad-resp">
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <span className={`prop-tag ${p.status === 'rent' ? 'tag-rent' : 'tag-sale'}`} style={{ position: 'static' }}>
                {p.status === 'rent' ? 'For Rent' : 'For Sale'}
              </span>
              <span className="prop-tag tag-dev" style={{ position: 'static' }}>{p.type}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, color: 'var(--gold-lt)', lineHeight: 1 }}>
              {formatPrice(p.price, p.status)}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => toggleFav(p.id)}
              style={{ padding: '11px 20px', border: '1px solid rgba(243,180,51,.4)', borderRadius: 'var(--radius-sm)', background: isFav ? 'var(--gold)' : 'rgba(20,10,2,.6)', color: isFav ? '#fff' : 'var(--gold)', backdropFilter: 'blur(8px)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, transition: 'all .25s' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={isFav ? '#fff' : 'none'} stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              {isFav ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, padding: '48px 60px 80px', maxWidth: 1400, margin: '0 auto' }} className="detail-body-resp detail-pad-resp">

        {/* Main */}
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 400, color: 'var(--brown-deep)', marginBottom: 8 }}>{p.title}</h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {p.location}, Mauritius &nbsp;·&nbsp; Ref: {p.ref}
          </p>

          {/* Specs bar */}
          <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: 36, background: 'var(--card)', flexWrap: 'wrap' }}>
            {p.beds > 0 && <SpecBox n={p.beds} label="Bedrooms" />}
            {p.baths > 0 && <SpecBox n={p.baths} label="Bathrooms" />}
            {p.area > 0 && <SpecBox n={p.area} label="m² Area" />}
            <SpecBox n={p.type} label="Type" />
            <SpecBox n={p.year} label="Year Listed" />
          </div>

          {/* Description */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px 36px', marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--brown-deep)', marginBottom: 14 }}>About This Property</h2>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.9 }}>{p.desc}</p>
          </div>

          {/* Amenities */}
          {p.amenities.length > 0 && (
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px 36px', marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--brown-deep)', marginBottom: 18 }}>Features & Amenities</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                {p.amenities.map(a => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-mid)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location section */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px 36px', marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--brown-deep)', marginBottom: 14 }}>Location</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-mid)', marginBottom: 16 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {p.location}, Mauritius
            </div>
            {/* Map placeholder */}
            <div style={{ height: 220, background: 'linear-gradient(135deg, var(--bg-warm), var(--border))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 8px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p style={{ fontSize: 12 }}>{p.location}, Mauritius</p>
                <p style={{ fontSize: 11, marginTop: 4, opacity: 0.6 }}>Map integration available in production</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar – Contact Card */}
        <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 24px)', alignSelf: 'start' }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px', boxShadow: 'var(--shadow-md)', marginBottom: 20 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--brown-deep)', marginBottom: 6 }}>Interested in This Property?</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 24 }}>Our advisor will respond within 24 hours.</p>

            <form onSubmit={handleEnquiry}>
              <div style={{ marginBottom: 12 }}>
                <input className="field-input" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <input className="field-input" type="email" placeholder="Email address" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <input className="field-input" type="tel" placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <textarea className="field-textarea" rows={3} placeholder={`I am interested in Ref: ${p.ref}. Please send me more details.`} value={msg} onChange={e => setMsg(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Send Enquiry
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '20px 0', color: 'var(--text-muted)', fontSize: 11 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />or<div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            </div>

            <a href="tel:+2304675001"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: 13, color: 'var(--brown-deep)', fontSize: 13, textDecoration: 'none', transition: 'all .25s', background: 'transparent', cursor: 'pointer' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold-dk)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brown-deep)'; }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
              Call +230 467 5001
            </a>
          </div>

          {/* Agent card */}
          <div style={{ background: 'var(--brown-deep)', border: '1px solid var(--dark-border)', borderRadius: 'var(--radius)', padding: '24px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px solid var(--gold)', background: 'rgba(243,180,51,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--gold)' }}>KM</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--cream)' }}>Kentish Moorghen</div>
                <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1 }}>FRICS, MCABE · CEO</div>
              </div>
            </div>
            <p style={{ fontSize: 12, fontWeight: 300, color: 'var(--text-light)', lineHeight: 1.6 }}>
              RICS-certified valuations and property advisory. Over 13 years in the Mauritian market.
            </p>
          </div>
        </div>
      </div>

      {/* Related Properties */}
      {related.length > 0 && (
        <div style={{ background: 'var(--card)', padding: '64px 60px', borderTop: '1px solid var(--border)' }} className="detail-pad-resp">
          <span className="eyebrow">You May Also Like</span>
          <h2 className="sec-title" style={{ fontSize: 32, marginBottom: 32 }}>Similar <em>Properties</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="related-grid-resp">
            {related.map(rp => (
              <div key={rp.id} style={{ cursor: 'pointer' }}>
                {/* Inline mini card */}
                <div className="prop-card" onClick={() => { goto('detail', { detailId: rp.id }); window.scrollTo({ top: 0 }); }}>
                  <div className="prop-img">
                    <img src={rp.img} alt={rp.title} className="prop-img-inner" loading="lazy" />
                    <span className={`prop-tag ${rp.status === 'rent' ? 'tag-rent' : 'tag-sale'}`}>{rp.status === 'rent' ? 'For Rent' : 'For Sale'}</span>
                  </div>
                  <div className="prop-body">
                    <div className="prop-price">{formatPrice(rp.price, rp.status)}</div>
                    <div className="prop-title">{rp.title}</div>
                    <div className="prop-loc">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {rp.location}
                    </div>
                  </div>
                  <div className="prop-footer">
                    <span className="prop-ref">Ref: {rp.ref}</span>
                    <span className="prop-view">View <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .detail-body-resp { grid-template-columns: 1fr !important; }
          .detail-pad-resp  { padding-left: 24px !important; padding-right: 24px !important; }
          .detail-hero-resp { height: 320px !important; }
          .related-grid-resp { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .detail-hero-resp { height: 240px !important; }
        }
      `}</style>
    </div>
  );
}

function SpecBox({ n, label }: { n: number | string; label: string }) {
  return (
    <div style={{ padding: '18px 24px', borderRight: '1px solid var(--border)', textAlign: 'center', flex: '1 1 auto', minWidth: 80 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, color: 'var(--gold-dk)', lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 5 }}>{label}</div>
    </div>
  );
}
