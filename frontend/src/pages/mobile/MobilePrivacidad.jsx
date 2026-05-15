import MobileHeader from '../../components/mobile/MobileHeader';

export default function MobilePrivacidad() {
  return (
    <>
      <MobileHeader title="Política de privacidad" />
      <div className="mobile-page">
        <div className="mobile-card">
          <p style={{ fontSize: 14, color: 'var(--color-gray-600)', lineHeight: 1.65 }}>
            Tratamos tus datos personales para agendar visitas, cotizar y ejecutar proyectos. No vendemos tus datos a terceros. Puedes
            solicitar rectificación o supresión contactando a nuestro canal oficial. Política detallada disponible con el aviso de
            tratamiento firmado.
          </p>
        </div>
      </div>
    </>
  );
}
