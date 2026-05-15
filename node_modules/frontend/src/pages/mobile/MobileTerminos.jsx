import MobileHeader from '../../components/mobile/MobileHeader';

export default function MobileTerminos() {
  return (
    <>
      <MobileHeader title="Términos y condiciones" />
      <div className="mobile-page">
        <div className="mobile-card">
          <p style={{ fontSize: 14, color: 'var(--color-gray-600)', lineHeight: 1.65 }}>
            Los servicios de Sion Avanzada Proyectos S.A.S. se rigen por contrato escrito. Las cotizaciones tienen vigencia limitada y los
            pagos se aplican según hitos acordados. Esta vista es informativa; el documento legal definitivo lo entrega el equipo comercial.
          </p>
        </div>
      </div>
    </>
  );
}
