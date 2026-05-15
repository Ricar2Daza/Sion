import { useParams, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { getServiceById } from '../../data/mobileCatalog';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <>
        <MobileHeader title="Servicio" />
        <div className="mobile-page">
          <p>No encontramos este servicio.</p>
          <button type="button" className="mobile-btn-primary" onClick={() => navigate('/servicios')}>
            Ver catálogo
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <MobileHeader title="Detalle" />
      <div style={{ position: 'relative' }}>
        <img src={service.image} alt="" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
        <div
          style={{
            marginTop: -24,
            borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
            background: '#fff',
            position: 'relative',
            padding: 'var(--space-5)',
          }}
        >
          <h1 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 8 }}>
            {service.name}
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)', lineHeight: 1.55, marginBottom: 20 }}>
            {service.fullDesc}
          </p>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: 'var(--color-gray-800)' }}>Incluye</h2>
          <ul style={{ marginBottom: 24 }}>
            {service.included.map((line) => (
              <li key={line} className="flex gap-2 items-start" style={{ marginBottom: 10, fontSize: 14 }}>
                <Check size={18} className="flex-shrink-0" style={{ color: 'var(--color-secondary)', marginTop: 2 }} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="mobile-btn-primary" onClick={() => navigate(`/servicios/${service.id}/cotizacion`)}>
            Solicitar cotización
          </button>
        </div>
      </div>
    </>
  );
}
