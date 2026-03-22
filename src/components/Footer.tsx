import { useApp } from '@/AppContext';

export default function Footer() {
  const { goto } = useApp();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand" onClick={() => goto('home')} style={{ cursor: 'pointer' }}>
            <img src="/logo-light.svg" alt="Prime Pillar" style={{ height: 28 }} />
          </div>
          <p className="footer-about">
            Redefining and reshaping the real estate industry of Mauritius since 2011.
            Guided by the highest international professional standards — FRICS certified.
          </p>
          <div className="footer-contacts">
            <a href="#">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              61 Avenue Des Goyaviers, Sodnac, Quatre Bornes
            </a>
            <a href="tel:+2304675001">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
              +230 467 5001 · Office
            </a>
            <a href="tel:+23052595005">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
              +230 5259 5005 · Mobile
            </a>
            <a href="mailto:info@primepillar.net">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@primepillar.net
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Properties</h4>
          <ul>
            <li><button onClick={() => goto('properties', { filterStatus: 'buy' })}>For Sale</button></li>
            <li><button onClick={() => goto('properties', { filterStatus: 'rent' })}>For Rent</button></li>
            <li><button onClick={() => goto('properties', { filterStatus: 'buy', filterType: 'Villa' })}>Villas</button></li>
            <li><button onClick={() => goto('properties', { filterStatus: 'buy', filterType: 'Apartment' })}>Apartments</button></li>
            <li><button onClick={() => goto('properties', { filterStatus: 'buy', filterType: 'Land' })}>Land</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><button onClick={() => goto('services')}>Valuation</button></li>
            <li><button onClick={() => goto('services')}>Development & Sales</button></li>
            <li><button onClick={() => goto('services')}>Management</button></li>
            <li><button onClick={() => goto('services')}>Project Management</button></li>
            <li><button onClick={() => goto('services')}>Advisory</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><button onClick={() => goto('about')}>About Us</button></li>
            <li><button onClick={() => goto('about')}>Our Team</button></li>
            <li><button onClick={() => goto('newsletter')}>Newsletters</button></li>
            <li><button onClick={() => goto('contact')}>Contact</button></li>
            <li><button>Privacy Policy</button></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} <span>Prime Pillar</span> Group. All rights reserved. Mauritius.</p>
        <div className="footer-badges">
          <span className="footer-badge">FRICS Certified</span>
          <span className="footer-badge">RICS Regulated</span>
          <span className="footer-badge">Est. 2011</span>
        </div>
      </div>
    </footer>
  );
}
