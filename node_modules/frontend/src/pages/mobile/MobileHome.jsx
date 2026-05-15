import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  Bell,
  ChefHat,
  DoorOpen,
  Tv,
  Hammer,
  Building2,
  Wrench,
  Zap,
  Paintbrush,
  Grid3X3,
  ArrowRight,
} from 'lucide-react';
import { MOBILE_SERVICES } from '../../data/mobileCatalog';
import { services } from '../../data/mockData';

const iconById = {
  cocinas: ChefHat,
  closets: DoorOpen,
  'muebles-tv': Tv,
  remodelaciones: Hammer,
  construccion: Building2,
  plomeria: Wrench,
  electricidad: Zap,
  pintura: Paintbrush,
};

const DEMO_CLIENT = 'Carlos Mendoza';

export default function MobileHome() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const myRequests = services.filter((s) => s.client === DEMO_CLIENT).slice(0, 3);

  const gridItems = [...MOBILE_SERVICES.slice(0, 8), { id: 'mas', name: 'Más', isMore: true }];

  return (
    <>
      <div className={`mobile-drawer-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden />
      <aside className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        <div className="mobile-logo-mark" style={{ marginBottom: 24 }}>
          S
        </div>
        <nav onClick={() => setMenuOpen(false)}>
          <Link to="/servicios">Todos los servicios</Link>
          <Link to="/mis-solicitudes">Mis solicitudes</Link>
          <Link to="/cotizaciones">Cotizaciones</Link>
          <Link to="/agendar">Agendar cita</Link>
          <Link to="/pagos">Métodos de pago</Link>
          <Link to="/horario">Horario de atención</Link>
          <Link to="/proyectos">Nuestros proyectos</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/login">Acceso equipo</Link>
        </nav>
      </aside>

      <div className="mobile-topbar">
        <button type="button" className="mobile-icon-btn" onClick={() => setMenuOpen(true)} aria-label="Menú">
          <Menu size={22} />
        </button>
        <div className="flex items-center gap-2" style={{ flex: 1, justifyContent: 'center' }}>
          <div className="mobile-logo-mark">S</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 10, color: 'var(--color-gray-500)', fontWeight: 600 }}>Sion Avanzada</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-primary)' }}>Proyectos S.A.S.</div>
          </div>
        </div>
        <button type="button" className="mobile-icon-btn" aria-label="Notificaciones">
          <Bell size={20} />
        </button>
      </div>

      <div className="mobile-page">
        <div className="mobile-hero">
          <img
            src="https://images.unsplash.com/photo-1556912170-3b899be8c63e?w=1200&q=80"
            alt=""
          />
          <div className="mobile-hero-overlay">
            <h1>¡Bienvenido!</h1>
            <p>Construcción y remodelación con estándar profesional. ¿Qué proyecto tienes en mente?</p>
            <button type="button" className="mobile-btn-primary" style={{ maxWidth: 260 }} onClick={() => navigate('/agendar')}>
              Agendar servicio <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <h2 className="mobile-section-title">Nuestros servicios</h2>
        <div className="mobile-grid-3">
          {gridItems.map((item) => {
            if (item.isMore) {
              return (
                <button
                  key="mas"
                  type="button"
                  className="mobile-tile"
                  onClick={() => navigate('/servicios')}
                >
                  <div className="mobile-tile-icon">
                    <Grid3X3 size={22} />
                  </div>
                  <span>Más</span>
                </button>
              );
            }
            const Icon = iconById[item.id] || Hammer;
            return (
              <button
                key={item.id}
                type="button"
                className="mobile-tile"
                onClick={() => navigate(`/servicios/${item.id}`)}
              >
                <div className="mobile-tile-icon">
                  <Icon size={22} />
                </div>
                <span>{item.name.replace(' integrales', '').replace(' a tu medida', '')}</span>
              </button>
            );
          })}
        </div>

        <button type="button" className="mobile-btn-primary" style={{ marginBottom: 28 }} onClick={() => navigate('/agendar')}>
          Agendar servicio
        </button>

        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <h2 className="mobile-section-title" style={{ marginBottom: 0 }}>
            Mis solicitudes
          </h2>
          <Link to="/mis-solicitudes" style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-secondary)' }}>
            Ver todas
          </Link>
        </div>
        {myRequests.length === 0 ? (
          <div className="mobile-card" style={{ textAlign: 'center', color: 'var(--color-gray-500)' }}>
            Aún no tienes solicitudes.
          </div>
        ) : (
          myRequests.map((srv) => (
            <button
              key={srv.id}
              type="button"
              className="mobile-card"
              style={{ width: '100%', textAlign: 'left' }}
              onClick={() => navigate(`/solicitud/${encodeURIComponent(srv.id)}`)}
            >
              <div className="flex gap-3 items-center">
                <img
                  className="mobile-list-thumb"
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&q=80"
                  alt=""
                />
                <div className="flex-1">
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{srv.category}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4 }}>{srv.date}</div>
                  <span className="mobile-badge mobile-badge-progress" style={{ marginTop: 8 }}>
                    {srv.state}
                  </span>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </>
  );
}
