import { Link, useNavigate } from 'react-router-dom';
import { Building2, Images, FileText, Shield, LogOut } from 'lucide-react';
import MobileHeader from '../../components/mobile/MobileHeader';

const rows = [
  { to: '/proyectos', icon: Building2, label: 'Nuestra empresa' },
  { to: '/proyectos', icon: Images, label: 'Nuestros proyectos' },
  { to: '/perfil/terminos', icon: FileText, label: 'Términos y condiciones' },
  { to: '/perfil/privacidad', icon: Shield, label: 'Política de privacidad' },
];

export default function MobileProfile() {
  const navigate = useNavigate();

  return (
    <>
      <MobileHeader title="Perfil" />
      <div className="mobile-page">
        <div className="mobile-card flex gap-4 items-center" style={{ marginBottom: 24 }}>
          <div className="mobile-logo-mark" style={{ width: 56, height: 56, fontSize: 22 }}>
            S
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--color-primary)' }}>Cliente demo</div>
            <div style={{ fontSize: 13, color: 'var(--color-gray-500)' }}>Carlos Mendoza</div>
          </div>
        </div>

        <nav>
          {rows.map(({ to, icon: Icon, label }) => (
            <Link key={label} to={to} className="mobile-card flex gap-3 items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Icon size={20} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontWeight: 600 }}>{label}</span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-btn-outline flex gap-2 items-center justify-center"
          style={{ marginTop: 16 }}
          onClick={() => navigate('/login')}
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </>
  );
}
