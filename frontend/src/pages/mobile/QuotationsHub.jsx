import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { INITIAL_REVIEW_FEE } from '../../data/mobileCatalog';
import { formatCOP } from '../../data/mockData';

export default function QuotationsHub() {
  const navigate = useNavigate();

  return (
    <>
      <MobileHeader title="Cotizaciones" />
      <div className="mobile-page">
        <div className="mobile-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--color-primary)', marginBottom: 8 }}>Revisión inicial</div>
          <p style={{ fontSize: 14, color: 'var(--color-gray-600)', lineHeight: 1.5, marginBottom: 12 }}>
            Agenda una visita técnica desde {formatCOP(INITIAL_REVIEW_FEE)}. El valor se descuenta si avanzas con el proyecto.
          </p>
          <button type="button" className="mobile-btn-primary" onClick={() => navigate('/servicios')}>
            Elegir servicio <ArrowRight size={18} />
          </button>
        </div>

        <h2 className="mobile-section-title">Seguimiento</h2>
        <button type="button" className="mobile-card flex gap-3 items-center" style={{ width: '100%' }} onClick={() => navigate('/mis-solicitudes')}>
          <FileText size={22} style={{ color: 'var(--color-primary)' }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700 }}>Mis solicitudes</div>
            <div style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>Estado de cotizaciones y obras</div>
          </div>
        </button>
      </div>
    </>
  );
}
