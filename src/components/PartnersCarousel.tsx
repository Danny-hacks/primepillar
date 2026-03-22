const PARTNERS: { name: string; logo: string }[] = [
  { name: 'SBM Bank', logo: '/partners/sbm.jpg' },
  { name: 'ABSA Bank', logo: '/partners/absa.webp' },
];

export default function PartnersCarousel({ label }: { label?: string }) {
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="carousel-section">
      <p className="carousel-label reveal">
        {label || 'Trusted by leading financial institutions across Mauritius'}
      </p>
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {items.map((p, i) => (
            <div key={`${p.name}-${i}`} className="carousel-item">
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  height: 56,
                  maxWidth: 180,
                  objectFit: 'contain',
                  filter: 'grayscale(100%) opacity(0.55)',
                  transition: 'filter 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
