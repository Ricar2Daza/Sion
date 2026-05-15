import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Circle } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { services, SERVICE_STATES, formatCOP } from '../../data/mockData';

export default function MobileTracking() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const id = requestId ? decodeURIComponent(requestId) : '';
  const srv = services.find((s) => s.id === id) || services[0];
  const currentIndex = SERVICE_STATES.indexOf(srv.state);

  return (
    <>
      <MobileHeader title="Detalle solicitud" />
      <div className="mobile-page">
        <div className="mobile-card" style={{ borderTop: '4px solid var(--color-primary)' }}>
          <div style={{ fontWeight: 800, fontSize: 16 }}>{srv.category}</div>
          <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4 }}>{srv.id}</div>
          <div className="flex justify-between" style={{ marginTop: 12 }}>
            <span className="mobile-badge mobile-badge-progress">{srv.state}</span>
            <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{srv.progress}%</span>
          </div>
          <div style={{ fontSize: 13, marginTop: 12, color: 'var(--color-gray-600)' }}>
            Monto: <strong>{formatCOP(srv.amount)}</strong>
          </div>
        </div>

        <h2 className="mobile-section-title">Línea de tiempo</h2>
        <div className="mobile-card">
          {SERVICE_STATES.map((state, i) => {
            const done = i < currentIndex;
            const current = i === currentIndex;
            return (
              <div key={state} className="flex gap-3" style={{ padding: '10px 0', borderBottom: i < SERVICE_STATES.length - 1 ? '1px solid var(--color-gray-100)' : 'none' }}>
                {done ? (
                  <CheckCircle size={20} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                ) : current ? (
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      border: '3px solid var(--color-secondary)',
                      background: 'var(--color-primary)',
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <Circle size={20} style={{ color: 'var(--color-gray-300)', flexShrink: 0 }} />
                )}
                <div>
                  <div style={{ fontWeight: current ? 700 : 500, fontSize: 14, color: current ? 'var(--color-primary)' : 'var(--color-gray-700)' }}>
                    {state}
                  </div>
                  {current && <div style={{ fontSize: 11, color: 'var(--color-gray-500)', marginTop: 2 }}>Estado actual</div>}
                </div>
              </div>
            );
          })}
        </div>

        <button type="button" className="mobile-btn-outline" onClick={() => navigate('/mis-solicitudes')}>
          Volver a mis solicitudes
        </button>
      </div>
    </>
  );
}
