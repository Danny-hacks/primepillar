import { useApp } from '@/AppContext';
import { useReveal } from '@/hooks/useReveal';

const VALUES = [
  { letter: 'P', name: 'People',     desc: 'We believe in our people and know that success is achieved as a team.' },
  { letter: 'R', name: 'Respect',    desc: 'We respect the rights of others and treat everyone fairly and with dignity.' },
  { letter: 'I', name: 'Integrity',  desc: 'We strive to do the right thing and always act in an ethical manner.' },
  { letter: 'M', name: 'Meaningful', desc: 'We work towards improving the built environment for all.' },
  { letter: 'E', name: 'Experience', desc: 'We deliver the best customer experience through modern, innovative approaches.' },
];

const TEAM = [
  {
    init: 'KM',
    name: 'Kentish Moorghen',
    creds: 'FRICS, MCABE',
    role: 'Chief Executive Officer',
    email: 'kentish@primepillar.net',
    bio: 'A Fellow of the Royal Institution of Chartered Surveyors (FRICS), Kentish brings internationally recognised property expertise to the Mauritian market. With over 13 years leading Prime Pillar, he has established the firm as the benchmark for professional standards in local real estate.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
  },
  {
    init: 'KD',
    name: 'Krishan Deeljore',
    creds: 'MCIPD',
    role: 'Independent Director',
    bio: 'A Chartered Member of the Institute of Personnel and Development, Krishan provides independent governance and strategic direction to the Prime Pillar Group. His expertise in human capital and organisational development underpins our culture of excellence.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
  },
  {
    init: 'PP',
    name: 'Advisory Team',
    creds: 'Experienced Professionals',
    role: 'Real Estate Advisors',
    bio: 'Our team of seasoned real estate professionals covers every discipline — from residential sales and lettings to commercial advisory and project oversight. Each member shares a commitment to client service and professional integrity.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80',
  },
];

const PARTNERS = [
  'SBM Bank (Mauritius) Ltd','ABSA Bank (Mauritius) Ltd','AfrAsia Bank Ltd','BCP Bank (Mauritius) Ltd','Bank One Ltd',
  'MauBank Ltd','Bank of Baroda','SBI Bank (Mauritius) Ltd','Mutual Aid Association Ltd','ABC Banking Corporation Ltd',
  'Investec Bank (Mauritius) Ltd','Government of Mauritius','HYVEC Partners','Swan Group','The Mauritius Civil Service',
];

export default function About() {
  const { goto } = useApp();
  const ref = useReveal();

  return (
    <div ref={ref} style={{ background: 'var(--bg)' }}>
      {/* ── HERO INTRO ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 'var(--nav-h)' }} className="about-intro-resp">
        <div style={{ padding: '100px 80px', background: 'linear-gradient(135deg, rgba(243,180,51,.04) 0%, transparent 50%)' }} className="about-text-resp">
          <span className="eyebrow reveal">Est. 2011</span>
          <h1 className="sec-title reveal rd1">Who <em>We Are</em></h1>
          <div className="gold-rule reveal rd2" />
          <p className="lead reveal rd2" style={{ marginBottom: 20 }}>
            Prime Pillar is guided by four principles: enhancing people's lives, creating the perfect residential environment, transforming the real estate industry, and providing the highest professional standards.
          </p>
          <p className="lead reveal rd3">
            The Prime Pillar Group specialises in building luxury homes, providing industry-leading property valuation services, and delivering exclusive real estate advisory — serving the Mauritian market since 2011.
          </p>
          <div className="reveal rd3" style={{ marginTop: 36, padding: '28px 32px', border: '1px solid rgba(243,180,51,.2)', background: 'rgba(243,180,51,.04)', borderLeft: '3px solid var(--gold)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontStyle: 'italic', color: 'var(--brown-deep)', lineHeight: 1.6 }}>
              "One Team, One Mission: Redefine and Reshape the Real Estate Industry of Mauritius"
            </p>
          </div>
        </div>
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 560, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(250,250,247,.15), transparent 40%)' }} />
        </div>
      </div>

      {/* ── MISSION / VISION ── */}
      <section className="sec-sm" style={{ background: 'var(--brown-deep)', padding: '72px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="mv-grid-resp">
          {[
            { label: 'Mission', text: 'Provide an unrivaled product, service and customer experience reflecting our expertise, passion for real estate and commitment towards serving our clients.' },
            { label: 'Vision', text: 'To redefine and reshape the real estate industry of Mauritius, setting the benchmark for professionalism and client service.' },
            { label: 'Standards', text: 'Guided by RICS — the Royal Institution of Chartered Surveyors — we uphold the highest international standards in property valuation and advisory.' },
          ].map((item, i) => (
            <div key={i} className={`reveal rd${i + 1}`} style={{ padding: '40px 36px', border: '1px solid var(--dark-border)', background: 'rgba(255,255,255,.03)', transition: 'border-color .3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(243,180,51,.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--dark-border)'}>
              <div style={{ width: 40, height: 2, background: 'var(--gold)', marginBottom: 20 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 300, color: 'var(--cream)', marginBottom: 14 }}>{item.label}</h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-light)', lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES (PRIME) ── */}
      <section className="sec" style={{ background: 'var(--bg-warm)' }}>
        <div className="text-center">
          <span className="eyebrow reveal">What Drives Us</span>
          <h2 className="sec-title reveal rd1">Our Core <em>Values</em></h2>
          <div className="gold-rule center reveal rd2" />
          <p className="lead reveal rd2" style={{ margin: '0 auto 48px' }}>
            Our PRIME values are the foundation of every relationship, every report, and every property we develop.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 2 }} className="val-grid-resp">
          {VALUES.map((v, i) => (
            <div key={v.letter} className={`reveal rd${i + 1}`} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '40px 28px', textAlign: 'center', transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-4px)'; d.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; d.style.boxShadow = ''; }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, fontWeight: 300, color: 'var(--gold)', lineHeight: 1, marginBottom: 12 }}>{v.letter}</div>
              <div style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, color: 'var(--brown-deep)', marginBottom: 10 }}>{v.name}</div>
              <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.65 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="sec" style={{ background: 'var(--card)' }}>
        <span className="eyebrow reveal">Our People</span>
        <h2 className="sec-title reveal rd1">The <em>Management Team</em></h2>
        <div className="gold-rule reveal rd2" />
        <p className="lead reveal rd2" style={{ marginBottom: 48 }}>The professionals behind Prime Pillar bring decades of combined expertise and a shared commitment to excellence.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="team-grid-resp">
          {TEAM.map((m, i) => (
            <div key={i} className={`reveal rd${i + 1}`} style={{ background: 'var(--bg-warm)', border: '1px solid var(--border)', overflow: 'hidden', transition: 'border-color .3s, transform .3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; }}>
              {/* Photo */}
              <div style={{ height: 260, overflow: 'hidden', position: 'relative', background: 'var(--bg-warm)' }}>
                <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(20%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,10,2,.5) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                  <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold-pale)', fontWeight: 600 }}>{m.creds}</div>
                </div>
              </div>
              <div style={{ padding: '24px 28px 28px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--brown-deep)', marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: 'var(--gold-dk)', letterSpacing: 1, marginBottom: 12 }}>{m.role}</div>
                <p style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 16 }}>{m.bio}</p>
                {m.email && (
                  <a href={`mailto:${m.email}`} style={{ fontSize: 12, color: 'var(--gold-dk)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    {m.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="sec-sm" style={{ background: 'var(--bg-warm)', padding: '64px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }} className="stats-grid-resp">
          {[['13+','Years in Business'],['500+','Properties Valued'],['15+','Banking Partners'],['150+','Happy Clients']].map(([n,l], i) => (
            <div key={l} className={`reveal rd${i + 1}`} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '40px 32px', textAlign: 'center', transition: 'border-color .3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--gold)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 300, color: 'var(--gold-dk)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <div className="partners-strip">
        <p className="partners-label reveal">Our Trusted Partners &amp; Clients</p>
        <div className="partners-grid reveal rd1">
          {PARTNERS.map(name => (
            <div key={name} className="partner-item"><span>{name}</span></div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--card)', padding: '80px 60px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <span className="eyebrow reveal">Work With Us</span>
        <h2 className="sec-title reveal rd1" style={{ marginBottom: 14 }}>Ready to Get <em>Started?</em></h2>
        <div className="gold-rule center reveal rd2" />
        <p className="lead reveal rd2" style={{ margin: '0 auto 36px' }}>Whether you need a valuation, want to buy or rent, or are looking to develop — our team is ready to help.</p>
        <div className="reveal rd3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-gold" onClick={() => goto('contact')}>Contact the Team</button>
          <button className="btn btn-outline" onClick={() => goto('services')}>Our Services</button>
        </div>
      </section>

      <style>{`
        @media (max-width: 1000px) {
          .about-intro-resp { grid-template-columns: 1fr !important; }
          .about-text-resp  { padding: 60px 24px !important; margin-top: 0 !important; }
          .mv-grid-resp     { grid-template-columns: 1fr !important; }
          .val-grid-resp    { grid-template-columns: repeat(2,1fr) !important; }
          .team-grid-resp   { grid-template-columns: 1fr !important; }
          .stats-grid-resp  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .val-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
