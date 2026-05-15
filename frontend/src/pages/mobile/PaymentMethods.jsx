import MobileHeader from '../../components/mobile/MobileHeader';

export default function PaymentMethods() {
  return (
    <>
      <MobileHeader title="Método de pago" />
      <div className="mobile-page">
        <p style={{ fontSize: 14, color: 'var(--color-gray-600)', marginBottom: 20, lineHeight: 1.5 }}>
          Financia tu proyecto o paga con medios tradicionales. Las integraciones reales se conectan cuando el backend esté listo.
        </p>

        <h2 className="mobile-section-title">Financiación</h2>
        <div className="mobile-card" style={{ textAlign: 'center', padding: 24 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--color-primary)', letterSpacing: -1 }}>Addi</div>
          <p style={{ fontSize: 13, color: 'var(--color-gray-500)', marginTop: 8 }}>Compra ahora, paga después</p>
        </div>
        <div className="mobile-card" style={{ textAlign: 'center', padding: 24 }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: '#E74C3C' }}>Sistecrédito</div>
          <p style={{ fontSize: 13, color: 'var(--color-gray-500)', marginTop: 8 }}>Crédito ágil para remodelación</p>
        </div>

        <h2 className="mobile-section-title">Pago tradicional</h2>
        <div className="mobile-card flex gap-3 items-center">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(52, 152, 219, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#3498DB',
            }}
          >
            PSE
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>Transferencia / tarjeta</div>
            <div style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>Te enviamos link o datos según etapa del proyecto</div>
          </div>
        </div>
      </div>
    </>
  );
}
