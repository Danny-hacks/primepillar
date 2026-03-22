import React, { useState } from 'react';
import { useApp } from '@/AppContext';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { showToast } = useApp();
  const ref = useReveal();

  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', subject: 'Property Valuation', message: '' });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    showToast("Message sent! We'll be in touch within one business day.");
    setForm({ fname: '', lname: '', email: '', phone: '', subject: 'Property Valuation', message: '' });
  };

  return (
    <div ref={ref} style={{ background: 'var(--bg-warm)' }}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">Home &rsaquo; <span>Contact</span></p>
          <h1 className="sec-title" style={{ color: 'var(--cream)', fontSize: 'clamp(28px,4vw,44px)' }}>Get In <em>Touch</em></h1>
        </div>
      </div>

      {/* Contact Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 640 }} className="contact-grid-resp">

        {/* Info Side */}
        <div style={{ padding: '80px', background: 'linear-gradient(135deg, rgba(243,180,51,.04) 0%, transparent 60%)' }} className="contact-info-resp">
          <span className="eyebrow reveal">We're Here to Help</span>
          <h2 className="sec-title reveal rd1" style={{ fontSize: 'clamp(26px,3vw,36px)', marginBottom: 14 }}>
            Let's Start a <em>Conversation</em>
          </h2>
          <div className="gold-rule reveal rd2" />
          <p className="lead reveal rd2" style={{ marginBottom: 44 }}>
            Whether you're buying, selling, letting, or need a valuation — our team is ready to assist you with expert, personalised service.
          </p>

          {[
            { label: 'Office Address', val: '61 Avenue Des Goyaviers, Sodnac,\nQuatre Bornes, Mauritius', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', icon2: 'M12 10m-3 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0' },
            { label: 'Phone', val: '+230 467 5001 (Office)\n+230 5259 5005 (Mobile)', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z', icon2: '' },
            { label: 'Email', val: 'info@primepillar.net', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', icon2: 'M22 6L12 13 2 6' },
            { label: 'Office Hours', val: 'Mon – Fri: 8:30 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', icon2: 'M12 6v6l4 2' },
          ].map((item, i) => (
            <div key={i} className={`reveal rd${i + 1}`} style={{ display: 'flex', gap: 18, marginBottom: 28, alignItems: 'flex-start' }}>
              <div style={{ width: 44, height: 44, border: '1px solid rgba(243,180,51,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'rgba(243,180,51,.04)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d={item.icon}/>{item.icon2 && <path d={item.icon2}/>}
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-dk)', marginBottom: 5 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'var(--brown-deep)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.val}</div>
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="reveal" style={{ marginTop: 32, height: 200, background: 'linear-gradient(135deg, var(--bg-warm), var(--border))', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            onClick={() => window.open('https://www.google.com/maps/search/61+Avenue+Des+Goyaviers,+Sodnac,+Quatre+Bornes,+Mauritius', '_blank')}>
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 8px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p style={{ fontSize: 12 }}>Sodnac, Quatre Bornes, Mauritius</p>
              <p style={{ fontSize: 11, marginTop: 4, opacity: 0.5 }}>Click to open in Google Maps</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div style={{ padding: '80px', background: 'var(--card)', borderLeft: '1px solid var(--border)' }} className="contact-form-resp">
          <h2 className="sec-title reveal" style={{ fontSize: 'clamp(24px,3vw,32px)', marginBottom: 8 }}>Send Us a <em>Message</em></h2>
          <p className="lead reveal rd1" style={{ fontSize: 13, marginBottom: 32 }}>We'll get back to you within one business day.</p>

          <form onSubmit={handleSubmit}>
            <div className="reveal rd1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label className="field-label">First Name</label>
                <input className="field-input" placeholder="Jean" value={form.fname} onChange={set('fname')} />
              </div>
              <div>
                <label className="field-label">Last Name</label>
                <input className="field-input" placeholder="Dupont" value={form.lname} onChange={set('lname')} />
              </div>
            </div>

            <div className="reveal rd2" style={{ marginBottom: 16 }}>
              <label className="field-label">Email Address *</label>
              <input className="field-input" type="email" placeholder="jean@example.com" required value={form.email} onChange={set('email')} />
            </div>

            <div className="reveal rd2" style={{ marginBottom: 16 }}>
              <label className="field-label">Phone Number</label>
              <input className="field-input" type="tel" placeholder="+230 5XXX XXXX" value={form.phone} onChange={set('phone')} />
            </div>

            <div className="reveal rd3" style={{ marginBottom: 16 }}>
              <label className="field-label">Subject</label>
              <select className="field-select" value={form.subject} onChange={set('subject')}>
                {['Property Valuation','Buying a Property','Renting a Property','Property Management','Development Enquiry','Project Management','General Enquiry'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="reveal rd3" style={{ marginBottom: 24 }}>
              <label className="field-label">Message</label>
              <textarea className="field-textarea" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={set('message')} />
            </div>

            <button type="submit" className="btn btn-gold reveal rd4" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>

      {/* Quick links CTA strip */}
      <div style={{ background: 'var(--bg-warm)', padding: '56px 60px', borderTop: '1px solid var(--border)' }} className="contact-strip-resp">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }} className="cta-strip-resp">
          {[
            { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', title: 'Browse Properties', desc: 'View our full portfolio of properties for sale and rent.', action: 'View Listings', page: 'properties' as const },
            { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', title: 'Request a Valuation', desc: 'Get a RICS-certified valuation for your property.', action: 'Get a Quote', page: 'services' as const },
            { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', title: 'Our Services', desc: 'Discover the full range of services we offer.', action: 'Explore Services', page: 'services' as const },
          ].map((item, i) => {
            const { goto } = useApp();
            return (
              <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px 28px', textAlign: 'center', cursor: 'pointer', transition: 'border-color .3s, transform .3s' }}
                onClick={() => goto(item.page)}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--gold)'; d.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'var(--border)'; d.style.transform = ''; }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2" style={{ margin: '0 auto 16px' }}><path d={item.icon}/></svg>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, color: 'var(--brown-deep)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.6 }}>{item.desc}</p>
                <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-dk)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  {item.action}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid-resp { grid-template-columns: 1fr !important; }
          .contact-info-resp  { padding: 52px 24px !important; }
          .contact-form-resp  { padding: 52px 24px !important; border-left: none !important; border-top: 1px solid var(--border); }
          .contact-strip-resp { padding: 40px 24px !important; }
          .cta-strip-resp     { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
