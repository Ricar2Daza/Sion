import { useParams, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { getServiceById, INITIAL_REVIEW_FEE } from '../../data/mobileCatalog';
import { formatCOP } from '../../data/mockData';

export default function QuoteInitial() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <>
        <MobileHeader title="Cotización" />
        <div className="mobile-page">
          <button type="button" className="mobile-btn-primary" onClick={() => navigate('/servicios')}>
            Elegir servicio
          </button>
        </div>
      </>
    );
  }

  const checklist = [
    'Visita técnica en tu ubicación',
    'Evaluación del proyecto y medidas',
    'Propuesta técnica inicial',
    'Asesoría con especialista',
  ];

  return (
    <>
      <MobileHeader title="Cotización inicial" />
      <div className="mobile-page">
        <div className="mobile-card" style={{ borderTop: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-gray-500)', textTransform: 'uppercase' }}>
            Costo revisión inicial
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--color-primary)', margin: '8px 0' }}>
            {formatCOP(INITIAL_REVIEW_FEE)}
          </div>
          <p style={{ fontSize: 13, color: 'var(--color-gray-600)', lineHeight: 1.5 }}>
            Este valor cubre la visita y el levantamiento para cotizar tu proyecto. Se descuenta del valor total si contratas con nosotros.
          </p>
        </div>

        <h2 className="mobile-section-title">Qué cubre</h2>
        {checklist.map((line) => (
          <div key={line} className="flex gap-2 items-center mobile-card" style={{ padding: '12px 14px' }}>
            <Check size={18} style={{ color: 'var(--color-secondary)' }} />
            <span style={{ fontSize: 14 }}>{line}</span>
          </div>
        ))}

        <button
          type="button"
          className="mobile-btn-primary"
          style={{ marginTop: 16 }}
          onClick={() => {
            navigate(`/agendar?cotizacion=1&servicio=${service.id}`);
          }}
        >
          Solicitar revisión
        </button>
        <button type="button" className="mobile-btn-outline" style={{ marginTop: 12 }} onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </>
  );
}
