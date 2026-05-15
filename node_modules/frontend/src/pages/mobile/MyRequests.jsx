import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileHeader from '../../components/mobile/MobileHeader';
import { services } from '../../data/mockData';

const DEMO_CLIENT = 'Carlos Mendoza';

function tabForState(state) {
  const completed = ['Proyecto finalizado', 'Garantía activa'];
  const pending = ['Solicitud recibida', 'Visita agendada', 'Cotización enviada', 'Inspección realizada', 'Pago confirmado'];
  if (completed.includes(state)) return 'done';
  if (pending.includes(state)) return 'pending';
  return 'progress';
}

const tabs = [
  { id: 'all', label: 'Todas' },
  { id: 'pending', label: 'Pendientes' },
  { id: 'progress', label: 'En proceso' },
  { id: 'done', label: 'Completadas' },
];

export default function MyRequests() {
  const [tab, setTab] = useState('all');
  const navigate = useNavigate();

  const list = useMemo(() => {
    const mine = services.filter((s) => s.client === DEMO_CLIENT);
    if (tab === 'all') return mine;
    return mine.filter((s) => tabForState(s.state) === tab);
  }, [tab]);

  const badgeClass = (state) => {
    const t = tabForState(state);
    if (t === 'done') return 'mobile-badge mobile-badge-done';
    if (t === 'pending') return 'mobile-badge mobile-badge-pending';
    return 'mobile-badge mobile-badge-progress';
  };

  return (
    <>
      <MobileHeader title="Mis solicitudes" />
      <div className="mobile-page">
        <div className="mobile-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`mobile-tab${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <div className="mobile-card" style={{ textAlign: 'center', color: 'var(--color-gray-500)' }}>
            No hay solicitudes en esta pestaña.
          </div>
        ) : (
          list.map((srv) => (
            <button
              key={srv.id}
              type="button"
              className="mobile-card flex gap-3 items-start"
              style={{ width: '100%', textAlign: 'left' }}
              onClick={() => navigate(`/solicitud/${encodeURIComponent(srv.id)}`)}
            >
              <img
                className="mobile-list-thumb"
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&q=80"
                alt=""
              />
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: 15 }}>{srv.category}</div>
                <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4 }}>{srv.date}</div>
                <span className={badgeClass(srv.state)} style={{ marginTop: 10 }}>
                  {srv.state}
                </span>
              </div>
            </button>
          ))
        )}
      </div>
    </>
  );
}
