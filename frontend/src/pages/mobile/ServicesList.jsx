import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { MOBILE_SERVICES } from '../../data/mobileCatalog';

export default function ServicesList() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return MOBILE_SERVICES;
    return MOBILE_SERVICES.filter(
      (s) =>
        s.name.toLowerCase().includes(t) ||
        s.shortDesc.toLowerCase().includes(t) ||
        s.category.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <>
      <MobileHeader title="Todos los servicios" />
      <div className="mobile-page">
        <div className="mobile-search-wrap">
          <Search size={18} />
          <input
            className="mobile-search"
            placeholder="Buscar servicio..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Buscar"
          />
        </div>
        {filtered.map((s) => (
          <button
            key={s.id}
            type="button"
            className="mobile-card flex gap-3 items-center"
            style={{ width: '100%', textAlign: 'left' }}
            onClick={() => navigate(`/servicios/${s.id}`)}
          >
            <img className="mobile-list-thumb" src={s.image} alt="" />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--color-primary)' }}>{s.name}</div>
              <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4, lineHeight: 1.4 }}>{s.shortDesc}</div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
