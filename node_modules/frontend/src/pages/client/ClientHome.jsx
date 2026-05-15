import { ChefHat, DoorOpen, Tv, Hammer, Building2, Wrench, Zap, Paintbrush, ArrowRight, Phone } from 'lucide-react';
import { SERVICE_CATEGORIES, services } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';

const iconMap = { ChefHat, DoorOpen, Tv, Hammer, Building2, Wrench, Zap, Paintbrush };

export default function ClientHome() {
  const navigate = useNavigate();
  const myServices = services.filter(s => s.client === 'Carlos Mendoza');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Hero Banner */}
      <div className="card gradient-hero" style={{ color: 'white', marginBottom: 'var(--space-6)', padding: 'var(--space-8)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(120,192,67,0.1)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '13px', opacity: 0.7, marginBottom: '8px' }}>Sion Avanzada Proyectos S.A.S.</div>
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: '8px', color: 'white' }}>¡Bienvenido, Carlos!</h1>
          <p style={{ opacity: 0.8, marginBottom: '24px', maxWidth: '400px' }}>¿Qué servicio necesitas hoy? Pedir un servicio será tan fácil como pedir una pizza.</p>
          <button className="btn btn-secondary btn-lg">
            Agendar Servicio <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Service Categories */}
      <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Todos los Servicios</h2>
      <div className="grid grid-2" style={{ marginBottom: 'var(--space-6)' }}>
        {SERVICE_CATEGORIES.map(cat => {
          const Icon = iconMap[cat.icon] || Wrench;
          return (
            <div key={cat.id} className="card flex items-center gap-4" style={{ cursor: 'pointer', padding: 'var(--space-4)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', background: 'rgba(14,59,36,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                <Icon size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>{cat.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>{cat.desc}</div>
              </div>
              <ArrowRight size={16} style={{ color: 'var(--color-gray-400)' }} />
            </div>
          );
        })}
      </div>

      {/* My Active Services */}
      <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Mis Solicitudes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        {myServices.length > 0 ? myServices.map(srv => (
          <div key={srv.id} className="card flex items-center justify-between" style={{ padding: 'var(--space-4)', cursor: 'pointer' }}
            onClick={() => navigate('/client/tracking')}>
            <div className="flex items-center gap-3">
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(120,192,67,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wrench size={18} style={{ color: 'var(--color-primary)' }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>{srv.category}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>{srv.date}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge badge-primary">{srv.state}</span>
              <div style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginTop: '4px' }}>{srv.progress}%</div>
            </div>
          </div>
        )) : (
          <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)', color: 'var(--color-gray-400)' }}>
            No tienes solicitudes activas
          </div>
        )}
      </div>

      {/* Payment Methods */}
      <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Métodos de Pago</h2>
      <div className="grid grid-3" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
          <div style={{ fontWeight: 700, fontSize: '18px', color: 'var(--color-primary)', marginBottom: '4px' }}>Addi</div>
          <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>Compra ahora, paga después</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
          <div style={{ fontWeight: 700, fontSize: '18px', color: '#E74C3C', marginBottom: '4px' }}>Sistecrédito</div>
          <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>Crédito fácil y rápido</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
          <div style={{ fontWeight: 700, fontSize: '18px', color: '#3498DB', marginBottom: '4px' }}>PSE / Transferencia</div>
          <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>Pago tradicional</div>
        </div>
      </div>

      {/* Contact */}
      <div className="card" style={{ background: 'var(--color-gray-50)', textAlign: 'center', padding: 'var(--space-6)' }}>
        <Phone size={24} style={{ color: 'var(--color-primary)', margin: '0 auto 8px' }} />
        <div style={{ fontWeight: 600, marginBottom: '4px' }}>¿Necesitas ayuda?</div>
        <div style={{ fontSize: '13px', color: 'var(--color-gray-500)', marginBottom: '12px' }}>Lun-Vie 8:00 AM - 6:00 PM • Sáb 8:00 AM - 2:00 PM</div>
        <div style={{ fontWeight: 700, fontSize: '18px', color: 'var(--color-primary)' }}>315 467 8234</div>
      </div>
    </div>
  );
}
