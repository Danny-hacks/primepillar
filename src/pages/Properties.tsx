import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '@/AppContext';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES, LOCATIONS, AMENITIES_LIST } from '@/data/properties';
import { FilterState } from '@/types';

const PER_PAGE = 9;

export default function Properties() {
  const { nav } = useApp();

  const [filters, setFilters] = useState<FilterState>({
    status: nav.filterStatus || '',
    type: nav.filterType || '',
    location: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    amenities: [],
    sort: 'newest',
  });
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);

  // Sync filters when nav changes (e.g. from dropdown)
  useEffect(() => {
    setFilters(f => ({
      ...f,
      status: nav.filterStatus || '',
      type: nav.filterType || '',
    }));
    setPage(1);
  }, [nav.filterStatus, nav.filterType]);

  const setFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters(f => ({ ...f, [key]: value }));
    setPage(1);
  };

  const toggleAmenity = (a: string) => {
    setFilters(f => ({
      ...f,
      amenities: f.amenities.includes(a) ? f.amenities.filter(x => x !== a) : [...f.amenities, a],
    }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({ status: '', type: '', location: '', minPrice: '', maxPrice: '', beds: '', amenities: [], sort: 'newest' });
    setPage(1);
  };

  const filtered = useMemo(() => {
    let res = [...PROPERTIES];
    if (filters.status) res = res.filter(p => p.status === filters.status);
    if (filters.type) res = res.filter(p => p.type === filters.type);
    if (filters.location) res = res.filter(p => p.location === filters.location);
    if (filters.minPrice) res = res.filter(p => p.price >= Number(filters.minPrice));
    if (filters.maxPrice) res = res.filter(p => p.price <= Number(filters.maxPrice));
    if (filters.beds) res = res.filter(p => p.beds >= Number(filters.beds));
    if (filters.amenities.length) res = res.filter(p => filters.amenities.every(a => p.amenities.includes(a)));

    if (filters.sort === 'price-asc') res.sort((a, b) => a.price - b.price);
    else if (filters.sort === 'price-desc') res.sort((a, b) => b.price - a.price);
    else if (filters.sort === 'beds') res.sort((a, b) => b.beds - a.beds);
    else res.sort((a, b) => b.id - a.id);

    return res;
  }, [filters]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const slice = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const pageTitle = filters.status === 'rent'
    ? 'For Rent' : filters.status === 'buy'
    ? 'For Sale' : 'All Properties';

  return (
    <div style={{ background: 'var(--bg-warm)', minHeight: '100vh' }}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">Home &rsaquo; <span>{pageTitle}</span></p>
          <h1 className="sec-title" style={{ color: 'var(--cream)', fontSize: 'clamp(28px,4vw,44px)' }}>
            {filters.status === 'rent' ? <>Properties <em>for Rent</em></> :
             filters.status === 'buy'  ? <>Properties <em>for Sale</em></> :
             <>All <em>Properties</em></>}
          </h1>
        </div>
      </div>

      {/* Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '290px 1fr', gap: 0, padding: '40px 60px 100px', maxWidth: 1400, margin: '0 auto' }} className="props-layout-resp">

        {/* ── SIDEBAR ── */}
        <aside style={{ position: 'sticky', top: 'calc(var(--nav-h) + 24px)', alignSelf: 'start', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px 24px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h3 style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, color: 'var(--brown-deep)' }}>Filters</h3>
            <button onClick={clearFilters} style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color .25s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-dk)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              Clear All
            </button>
          </div>

          {/* Listing Type */}
          <FGroup label="Listing Type">
            <select className="field-select" value={filters.status} onChange={e => setFilter('status', e.target.value)}>
              <option value="">All</option>
              <option value="buy">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </FGroup>

          {/* Property Type */}
          <FGroup label="Property Type">
            <select className="field-select" value={filters.type} onChange={e => setFilter('type', e.target.value)}>
              <option value="">All Types</option>
              {['Villa','Apartment','House','Land','Commercial'].map(t => <option key={t}>{t}</option>)}
            </select>
          </FGroup>

          {/* Location */}
          <FGroup label="Location">
            <select className="field-select" value={filters.location} onChange={e => setFilter('location', e.target.value)}>
              <option value="">All Areas</option>
              {LOCATIONS.map(l => <option key={l}>{l}</option>)}
            </select>
          </FGroup>

          {/* Price */}
          <FGroup label="Price Range (Rs)">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <input className="field-input" type="number" placeholder="Min" value={filters.minPrice}
                onChange={e => setFilter('minPrice', e.target.value)} style={{ padding: '10px 12px' }} />
              <input className="field-input" type="number" placeholder="Max" value={filters.maxPrice}
                onChange={e => setFilter('maxPrice', e.target.value)} style={{ padding: '10px 12px' }} />
            </div>
          </FGroup>

          {/* Bedrooms */}
          <FGroup label="Min Bedrooms">
            <select className="field-select" value={filters.beds} onChange={e => setFilter('beds', e.target.value)}>
              <option value="">Any</option>
              {['1','2','3','4','5'].map(b => <option key={b} value={b}>{b}+</option>)}
            </select>
          </FGroup>

          {/* Amenities */}
          <FGroup label="Amenities" noBorder>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {AMENITIES_LIST.map(a => (
                <label key={a} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 12, color: 'var(--text-mid)' }}>
                  <input type="checkbox" checked={filters.amenities.includes(a)} onChange={() => toggleAmenity(a)}
                    style={{ width: 14, height: 14, accentColor: 'var(--gold)' }} />
                  {a}
                </label>
              ))}
            </div>
          </FGroup>

          <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
            Apply Filters
          </button>
        </aside>

        {/* ── RESULTS ── */}
        <div style={{ paddingLeft: 32 }} className="results-pad-resp">
          {/* Results Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--brown-deep)' }}>{filtered.length}</strong> {filtered.length === 1 ? 'property' : 'properties'} found
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <label style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Sort</label>
                <select className="field-select" value={filters.sort} onChange={e => setFilter('sort', e.target.value as FilterState['sort'])}
                  style={{ padding: '7px 12px', minWidth: 160 }}>
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="beds">Most Bedrooms</option>
                </select>
              </div>
              {/* View toggle */}
              <div style={{ display: 'flex', gap: 3 }}>
                {(['grid','list'] as const).map(v => (
                  <button key={v} onClick={() => setView(v)}
                    style={{ padding: '7px 10px', border: '1px solid', borderRadius: 'var(--radius-sm)', borderColor: view === v ? 'var(--gold)' : 'var(--border)', background: view === v ? 'rgba(243,180,51,.08)' : 'transparent', color: view === v ? 'var(--gold-dk)' : 'var(--text-muted)', cursor: 'pointer', transition: 'all .25s' }}>
                    {v === 'grid'
                      ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                      : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    }
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid / List */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5" style={{ margin: '0 auto 16px' }}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--brown-deep)', marginBottom: 8 }}>No Properties Found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Try adjusting your filters to see more results.</p>
              <button className="btn btn-outline" style={{ margin: '24px auto 0' }} onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: view === 'list' ? '1fr' : 'repeat(3,1fr)', gap: 2 }} className={view === 'grid' ? 'results-grid-resp' : ''}>
              {slice.map(p => (
                <PropertyCard key={p.id} property={p} listView={view === 'list'} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 48 }}>
              <PgBtn label="←" onClick={() => { if (page > 1) { setPage(p => p - 1); scrollToTop(); } }} disabled={page === 1} />
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <PgBtn key={n} label={String(n)} onClick={() => { setPage(n); scrollToTop(); }} active={n === page} />
              ))}
              <PgBtn label="→" onClick={() => { if (page < totalPages) { setPage(p => p + 1); scrollToTop(); } }} disabled={page === totalPages} />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .props-layout-resp { grid-template-columns: 1fr !important; padding: 32px 24px 80px !important; }
          .results-pad-resp { padding-left: 0 !important; }
          aside { position: static !important; margin-bottom: 24px; }
        }
        @media (max-width: 768px) {
          .results-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function FGroup({ label, children, noBorder }: { label: string; children: React.ReactNode; noBorder?: boolean }) {
  return (
    <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: noBorder ? 'none' : '1px solid var(--border)' }}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

function PgBtn({ label, onClick, active, disabled }: { label: string; onClick: () => void; active?: boolean; disabled?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderRadius: 'var(--radius-sm)', borderColor: active ? 'var(--gold)' : 'var(--border)', background: active ? 'rgba(243,180,51,.1)' : 'var(--card)', color: active ? 'var(--gold-dk)' : 'var(--text-muted)', fontSize: 13, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, transition: 'all .25s' }}>
      {label}
    </button>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
