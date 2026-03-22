const PARTNERS: { name: string; logo: string }[] = [
  { name: 'SBM Bank', logo: '/partners/sbm.jpg' },
  { name: 'ABSA Bank', logo: '/partners/absa.webp' },
];

export default function PartnersCarousel({ label }: { label?: string }) {
  // Render two identical sets — the CSS animation shifts by -50%,
  // so when the first set scrolls out the second takes its place seamlessly.
  // Repeat each set enough times so it's wider than any viewport.
  const repeat = Math.max(8, Math.ceil(20 / PARTNERS.length));
  const set: typeof PARTNERS = [];
  for (let r = 0; r < repeat; r++) set.push(...PARTNERS);

  return (
    <section className="carousel-section">
      <p className="carousel-label reveal">
        {label || 'Trusted by leading financial institutions across Mauritius'}
      </p>
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {/* First set */}
          {set.map((p, i) => (
            <div key={`a-${i}`} className="carousel-item">
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  height: 72,
                  maxWidth: 200,
                  objectFit: 'contain',
                  filter: 'grayscale(100%) opacity(0.55)',
                  transition: 'filter 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)')}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {set.map((p, i) => (
            <div key={`b-${i}`} className="carousel-item">
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  height: 72,
                  maxWidth: 200,
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
