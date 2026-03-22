import { useState } from 'react';

const PARTNERS = [
  { name: 'SBM Bank', domain: 'sbmgroup.mu' },
  { name: 'ABSA Bank', domain: 'absa.co.za' },
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

function PartnerLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const logoUrl = `https://logo.clearbit.com/${domain}?size=80`;

  return (
    <div className="carousel-item">
      {!failed ? (
        <img
          src={logoUrl}
          alt={name}
          onError={() => setFailed(true)}
          style={{
            height: 36,
            maxWidth: 100,
            objectFit: 'contain',
            filter: 'grayscale(100%) opacity(0.5)',
            transition: 'filter 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
          onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)')}
        />
      ) : (
        <span className="carousel-text-logo">{name}</span>
      )}
    </div>
  );
}

export default function PartnersCarousel({ label }: { label?: string }) {
  // Duplicate the list for seamless infinite scroll
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="carousel-section">
      <p className="carousel-label reveal">
        {label || 'Trusted by leading financial institutions across Mauritius'}
      </p>
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {items.map((p, i) => (
            <PartnerLogo key={`${p.domain}-${i}`} name={p.name} domain={p.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
