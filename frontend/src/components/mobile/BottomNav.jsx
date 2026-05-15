import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, CalendarDays, FileText, User } from 'lucide-react';

const items = [
  { to: '/', icon: Home, label: 'Inicio' },
  { to: '/servicios', icon: LayoutGrid, label: 'Servicios' },
  { to: '/agendar', icon: CalendarDays, label: 'Citas' },
  { to: '/cotizaciones', icon: FileText, label: 'Cotizaciones' },
  { to: '/perfil', icon: User, label: 'Perfil' },
];

export default function BottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navegación principal">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => `mobile-nav-item${isActive ? ' active' : ''}`}
        >
          <Icon size={22} strokeWidth={2.25} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
