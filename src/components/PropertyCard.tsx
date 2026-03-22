import React from 'react';
import { Property } from '@/types';
import { useApp } from '@/AppContext';

interface Props {
  property: Property;
  listView?: boolean;
}

export function formatPrice(price: number, status: string): React.ReactNode {
  if (status === 'rent') {
    return <>{`Rs ${price.toLocaleString()}`}<sub>/mo</sub></>;
  }
  if (price >= 1_000_000) {
    const m = price / 1_000_000;
    return `Rs ${m % 1 === 0 ? m : m.toFixed(1)}M`;
  }
  return `Rs ${price.toLocaleString()}`;
}

export default function PropertyCard({ property: p, listView = false }: Props) {
  const { showDetail, toggleFav, favs } = useApp();
  const isFav = favs.has(p.id);

  const tagClass = p.status === 'rent' ? 'tag-rent' : 'tag-sale';
  const tagLabel = p.status === 'rent' ? 'For Rent' : 'For Sale';

  return (
    <div
      className={`prop-card${listView ? ' list-view' : ''}`}
      onClick={() => showDetail(p.id)}
      role="article"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && showDetail(p.id)}
    >
      <div className="prop-img">
        <img src={p.img} alt={p.title} className="prop-img-inner" loading="lazy" />
        <span className={`prop-tag ${tagClass}`}>{tagLabel}</span>
        {p.tag && <span className="prop-tag tag-dev" style={{ top: 14, left: p.status ? 90 : 14 }}>{p.tag}</span>}
        <button
          className={`prop-fav${isFav ? ' faved' : ''}`}
          onClick={e => { e.stopPropagation(); toggleFav(p.id); }}
          aria-label={isFav ? 'Remove from favourites' : 'Add to favourites'}
        >
          <svg viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="prop-body">
          <div className="prop-price">{formatPrice(p.price, p.status)}</div>
          <div className="prop-title">{p.title}</div>
          <div className="prop-loc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {p.location}, Mauritius
          </div>
          {(p.beds > 0 || p.baths > 0 || p.area > 0) && (
            <div className="prop-meta">
              {p.beds > 0 && (
                <div className="pm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  {p.beds} Beds
                </div>
              )}
              {p.baths > 0 && (
                <div className="pm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12h16v4a6 6 0 0 1-12 0v-2H4V4a2 2 0 0 1 2-2h2"/>
                  </svg>
                  {p.baths} Baths
                </div>
              )}
              {p.area > 0 && (
                <div className="pm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="1"/>
                  </svg>
                  {p.area} m²
                </div>
              )}
            </div>
          )}
        </div>

        <div className="prop-footer">
          <span className="prop-ref">Ref: {p.ref}</span>
          <span className="prop-view">
            View Property
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
