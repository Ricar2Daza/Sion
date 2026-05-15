import { MessageCircle } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';

const WHATSAPP = 'https://wa.me/573154678234';

export default function BusinessHours() {
  return (
    <>
      <MobileHeader title="Horario de atención" />
      <div className="mobile-page">
        <div className="mobile-card">
          <div className="flex justify-between items-center" style={{ padding: '12px 0', borderBottom: '1px solid var(--color-gray-100)' }}>
            <span style={{ fontWeight: 600 }}>Lunes a viernes</span>
            <span style={{ color: 'var(--color-gray-600)' }}>8:00 – 18:00</span>
          </div>
          <div className="flex justify-between items-center" style={{ padding: '12px 0', borderBottom: '1px solid var(--color-gray-100)' }}>
            <span style={{ fontWeight: 600 }}>Sábados</span>
            <span style={{ color: 'var(--color-gray-600)' }}>8:00 – 14:00</span>
          </div>
          <div className="flex justify-between items-center" style={{ padding: '12px 0' }}>
            <span style={{ fontWeight: 600 }}>Domingos y festivos</span>
            <span style={{ color: 'var(--color-gray-500)' }}>Cita previa</span>
          </div>
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mobile-btn-primary"
          style={{ marginTop: 20, textDecoration: 'none' }}
        >
          <MessageCircle size={20} />
          Contáctanos por WhatsApp
        </a>
      </div>
    </>
  );
}
