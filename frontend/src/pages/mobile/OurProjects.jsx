import { useMemo, useState } from 'react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { PROJECT_GALLERY, GALLERY_FILTERS } from '../../data/mobileCatalog';

export default function OurProjects() {
  const [filter, setFilter] = useState('Todos');

  const items = useMemo(() => {
    if (filter === 'Todos') return PROJECT_GALLERY;
    return PROJECT_GALLERY.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <MobileHeader title="Nuestros proyectos" />
      <div className="mobile-page">
        <div className="mobile-tabs" style={{ flexWrap: 'wrap' }}>
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`mobile-chip${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mobile-gallery">
          {items.map((p) => (
            <figure key={p.id}>
              <img src={p.image} alt={p.title} loading="lazy" />
              <figcaption style={{ fontSize: 11, fontWeight: 600, marginTop: 6, color: 'var(--color-gray-600)' }}>
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
