import React from 'react';
import { useApp } from '@/AppContext';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  {
    num: '01',
    title: 'Valuation Services',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    desc: 'Prime Pillar provides RICS-certified property valuations for residential, commercial, and industrial assets. Our reports are accepted by all major banks and financial institutions in Mauritius — giving you complete confidence in every transaction.',
    points: ['Mortgage & bank panel valuations', 'Market value & rental appraisals', 'Insurance replacement cost valuations', 'Probate & litigation support valuations', 'Development appraisals & feasibility reports'],
    cta: 'Request a Valuation',
  },
  {
    num: '02',
    title: 'Development & Sales',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    desc: 'End-to-end luxury property development and sales. From site acquisition to buyer handover, we deliver architecturally distinguished homes crafted for discerning buyers. Our Cosy Garden and The Pride brands set the benchmark for residential quality in Mauritius.',
    points: ['Land acquisition & feasibility', 'Luxury residential development', 'Off-plan & new development sales', 'Sales strategy & marketing', 'Buyer advisory & transaction management'],
    cta: 'Explore Projects',
  },
  {
    num: '03',
    title: 'Management Services',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    desc: "Comprehensive property management solutions that protect your investment and maximise returns. We ensure a seamless experience for both owners and tenants, handling everything from tenant sourcing to maintenance coordination so you don't have to.",
    points: ['Tenant sourcing & vetting', 'Rent collection & financial reporting', 'Maintenance & repair coordination', 'Legal compliance & lease management', 'Property inspections & condition reports'],
    cta: 'Enquire Now',
  },
  {
    num: '04',
    title: 'Project Management',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    desc: 'Expert oversight of construction and development projects from concept through to practical completion. We represent client interests across the full build cycle, ensuring delivery on time, within budget, and to the specification agreed.',
    points: ['Pre-construction planning & procurement', 'Site supervision & contractor management', 'Cost management & value engineering', 'Quality assurance & snagging', 'Handover coordination & defects management'],
    cta: 'Discuss Your Project',
  },
  {
    num: '05',
    title: 'Real Estate Advisory',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    desc: 'Strategic investment advisory and market intelligence to help you make confident, informed decisions in the Mauritian property market. Whether acquiring, divesting, or restructuring a portfolio, our advice is grounded in rigorous research and professional expertise.',
    points: ['Investment strategy & portfolio review', 'Market research & due diligence', 'Foreign buyer advisory (IRS/PDS/RES)', 'Rental yield optimisation', 'Off-market acquisition sourcing'],
    cta: 'Book a Consultation',
  },
  {
    num: '06',
    title: 'Property Letting',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'Full letting service connecting quality landlords with thoroughly vetted tenants. We handle everything from advertising and viewings through to tenancy agreements and move-in coordination — maximising your rental yield with minimal hassle.',
    points: ['Property marketing & photography', 'Tenant viewings & referencing', 'Tenancy agreement preparation', 'Move-in & move-out management', 'Ongoing landlord support'],
    cta: 'List Your Property',
  },
];

export default function Services() {
  const { goto } = useApp();
  const ref = useReveal();

  return (
    <div ref={ref} style={{ background: 'var(--bg)' }}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">Home &rsaquo; <span>Services</span></p>
          <h1 className="sec-title" style={{ color: 'var(--cream)', fontSize: 'clamp(28px,4vw,44px)' }}>Our <em>Services</em></h1>
        </div>
      </div>

      {/* Intro */}
      <section className="sec text-center" style={{ background: 'var(--bg-warm)' }}>
        <span className="eyebrow reveal">Full Spectrum</span>
        <h2 className="sec-title reveal rd1">Everything You Need in<br /><em>Real Estate</em></h2>
        <div className="gold-rule center reveal rd2" />
        <p className="lead reveal rd2" style={{ margin: '0 auto' }}>
          From RICS-certified valuations to luxury property development, Prime Pillar delivers a complete suite of professional real estate services — all under one roof.
        </p>
        {/* Service number strip */}
        <div className="reveal rd3" style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 48, border: '1px solid var(--border)', background: 'var(--card)', maxWidth: 720, margin: '48px auto 0', flexWrap: 'wrap' }}>
          {SERVICES.map(s => (
            <div key={s.num} style={{ padding: '20px 28px', borderRight: '1px solid var(--border)', textAlign: 'center', flex: '1 1 auto', minWidth: 100 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 300, color: 'var(--gold-dk)' }}>{s.num}</div>
              <div style={{ fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{s.title.split(' ')[0]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Rows */}
      {SERVICES.map((s, i) => {
        const isEven = i % 2 === 1;
        return (
          <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)', direction: isEven ? 'rtl' : 'ltr' }} className="srv-row-resp">
            <div style={{ padding: '80px', background: isEven ? 'var(--bg-warm)' : 'var(--card)', direction: 'ltr' }} className="srv-txt-resp">
              <span className="eyebrow reveal">{s.num}</span>
              <h2 className="sec-title reveal rd1" style={{ fontSize: 'clamp(26px,3vw,36px)' }}>{s.title}</h2>
              <div className="gold-rule reveal rd2" />
              <p className="lead reveal rd2" style={{ marginBottom: 24 }}>{s.desc}</p>
              <ul className="reveal rd3" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {s.points.map(pt => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text-mid)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <button className="btn btn-gold reveal rd3" onClick={() => goto('contact')}>{s.cta}</button>
            </div>
            <div style={{ minHeight: 420, backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', direction: 'ltr' }}>
              <div style={{ position: 'absolute', inset: 0, background: isEven ? 'linear-gradient(to right, rgba(20,10,2,.15), transparent)' : 'linear-gradient(to left, rgba(20,10,2,.15), transparent)' }} />
            </div>
          </div>
        );
      })}

      {/* CTA */}
      <section style={{ position: 'relative', padding: '100px 60px', textAlign: 'center', background: 'var(--brown-deep)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,147,12,.07), transparent 70%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        <span className="eyebrow reveal" style={{ position: 'relative', zIndex: 1 }}>Get Started</span>
        <h2 className="reveal rd1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', fontWeight: 300, color: 'var(--cream)', maxWidth: 600, margin: '12px auto 18px', position: 'relative', zIndex: 1 }}>
          Ready to Work with <em style={{ color: 'var(--gold)' }}>Prime Pillar?</em>
        </h2>
        <p className="reveal rd2" style={{ fontSize: 15, fontWeight: 300, color: 'var(--text-light)', maxWidth: 420, margin: '0 auto 40px', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
          Contact our team today to discuss how we can help you achieve your real estate goals.
        </p>
        <div className="reveal rd3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          <button className="btn btn-gold" onClick={() => goto('contact')}>
            Contact Us Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn btn-white" onClick={() => goto('properties')}>
            Browse Properties
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .srv-row-resp  { grid-template-columns: 1fr !important; direction: ltr !important; }
          .srv-txt-resp  { padding: 52px 24px !important; }
        }
      `}</style>
    </div>
  );
}
