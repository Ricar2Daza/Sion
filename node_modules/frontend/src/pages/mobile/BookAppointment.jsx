import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';
import { MOBILE_SERVICES } from '../../data/mobileCatalog';

const TIME_SLOTS = ['8:00', '9:30', '11:00', '2:00', '3:30', '5:00'];

export default function BookAppointment() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const defaultService = params.get('servicio') || '';
  const isQuote = params.get('cotizacion') === '1';

  const [serviceId, setServiceId] = useState(defaultService || MOBILE_SERVICES[0].id);
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [address, setAddress] = useState('');
  const [busy, setBusy] = useState(false);

  const title = isQuote ? 'Agendar revisión' : 'Agendar cita';

  const serviceOptions = useMemo(() => MOBILE_SERVICES.map((s) => ({ value: s.id, label: s.name })), []);

  const submit = () => {
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      navigate('/mis-solicitudes');
    }, 600);
  };

  return (
    <>
      <MobileHeader title={title} />
      <div className="mobile-page">
        <label className="mobile-label">Servicio</label>
        <select className="mobile-select" value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <label className="mobile-label">Fecha preferida</label>
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <Calendar
            size={18}
            style={{ position: 'absolute', left: 14, top: 14, color: 'var(--color-gray-400)', pointerEvents: 'none' }}
          />
          <input
            type="date"
            className="mobile-input"
            style={{ paddingLeft: 44 }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <label className="mobile-label">Hora sugerida</label>
        <div className="mobile-slots">
          {TIME_SLOTS.map((t) => (
            <button
              key={t}
              type="button"
              className={`mobile-slot${slot === t ? ' active' : ''}`}
              onClick={() => setSlot(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <label className="mobile-label" style={{ marginTop: 8 }}>
          Dirección
        </label>
        <div style={{ position: 'relative' }}>
          <MapPin size={18} style={{ position: 'absolute', left: 14, top: 14, color: 'var(--color-gray-400)' }} />
          <input
            className="mobile-input"
            style={{ paddingLeft: 44 }}
            placeholder="Barrio, ciudad, referencia"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="button" className="mobile-btn-primary" disabled={busy || !date || !slot || !address} onClick={submit}>
          {busy ? 'Guardando…' : 'Confirmar cita'}
        </button>
      </div>
    </>
  );
}
