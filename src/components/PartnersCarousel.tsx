import { useState } from 'react';

const PARTNERS: { name: string; logo?: string; domain?: string }[] = [
  { name: 'SBM Bank', logo: '/partners/sbm.jpg' },
  { name: 'ABSA Bank', logo: '/partners/absa.webp' },
  { name: 'AfrAsia Bank', domain: 'afrasiabank.com' },
  { name: 'BCP Bank', domain: 'bfrancegroup.com' },
  { name: 'Bank One', domain: 'bankone.mu' },
  { name: 'MauBank', domain: 'maubank.mu' },
  { name: 'Bank of Baroda', domain: 'bankofbaroda.in' },
  { name: 'SBI Bank', domain: 'sbi.co.in' },
  { name: 'ABC Banking', domain: 'abcbanking.mu' },
  { name: 'Investec', domain: 'investec.com' },
  { name: 'Swan Group', domain: 'swan.mu' },
  { name: 'Govt. of Mauritius', domain: 'govmu.org' },
];

function PartnerLogo({ name, logo, domain }: { name: string; logo?: string; domain?: string }) {
  const [failed, setFailed] = useState(false);
  const src = logo || (domain ? `https://logo.clearbit.com/${domain}?size=80` : '');

  return (
    <div className="carousel-item">
      {src && !failed ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          style={{
            height: 32,
            maxWidth: 110,
            objectFit: 'contain',
            filter: 'grayscale(100%) opacity(0.55)',
            transition: 'filter 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
          onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)')}
        />
      ) : (
        <span className="carousel-text-logo">{name}</span>
      )}
    </div>
  );
}

export default function PartnersCarousel({ label }: { label?: string }) {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="carousel-section">
      <p className="carousel-label reveal">
        {label || 'Trusted by leading financial institutions across Mauritius'}
      </p>
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {items.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} name={p.name} logo={p.logo} domain={p.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
