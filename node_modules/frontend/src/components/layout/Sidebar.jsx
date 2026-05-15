import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard, Users, Briefcase, DollarSign, UserCog, Package,
  Store, Home, LogOut, ChevronLeft, ChevronRight,
  BarChart3, Wrench, Truck,
} from 'lucide-react';
import { useState } from 'react';

const menuSections = {
  ceo: [
    { section: 'Principal', items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard CEO' },
      { to: '/services', icon: Briefcase, label: 'Servicios' },
    ]},
    { section: 'Gestión', items: [
      { to: '/crm', icon: Users, label: 'CRM Clientes' },
      { to: '/erp', icon: DollarSign, label: 'ERP Finanzas' },
      { to: '/rrhh', icon: UserCog, label: 'RRHH' },
      { to: '/inventory', icon: Package, label: 'Inventario' },
    ]},
    { section: 'Avanzado', items: [
      { to: '/marketplace', icon: Store, label: 'Marketplace' },
      { to: '/reports', icon: BarChart3, label: 'Reportes' },
    ]},
  ],
  admin: [
    { section: 'Principal', items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/services', icon: Briefcase, label: 'Servicios' },
      { to: '/crm', icon: Users, label: 'CRM Clientes' },
    ]},
    { section: 'Operaciones', items: [
      { to: '/erp', icon: DollarSign, label: 'Finanzas' },
      { to: '/rrhh', icon: UserCog, label: 'RRHH' },
      { to: '/inventory', icon: Package, label: 'Inventario' },
      { to: '/marketplace', icon: Store, label: 'Marketplace' },
    ]},
  ],
  comercial: [
    { section: 'Ventas', items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/crm', icon: Users, label: 'Clientes' },
      { to: '/services', icon: Briefcase, label: 'Servicios' },
    ]},
  ],
  tecnico: [
    { section: 'Mi Trabajo', items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Mis Tareas' },
      { to: '/services', icon: Wrench, label: 'Servicios' },
      { to: '/inventory', icon: Package, label: 'Materiales' },
    ]},
  ],
  rrhh: [
    { section: 'RRHH', items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/rrhh', icon: UserCog, label: 'Personal' },
    ]},
  ],
  bodega: [
    { section: 'Bodega', items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/inventory', icon: Package, label: 'Inventario' },
    ]},
  ],
  cliente: [
    { section: 'Mi cuenta', items: [
      { to: '/client', icon: Home, label: 'Inicio' },
      { to: '/client/tracking', icon: Truck, label: 'Mis Servicios' },
    ]},
  ],
};

export default function Sidebar() {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  const sections = menuSections[user.role] || menuSections.admin;

  return (
    <div className={`app-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-logo">SA</div>
          {!collapsed && (
            <div className="sidebar-brand-text">
              <div className="sidebar-brand-name">SION APP</div>
              <div className="sidebar-brand-sub">Enterprise Pro</div>
            </div>
          )}
        </div>

        <div className="sidebar-nav">
          {sections.map((section, i) => (
            <div key={i} className="sidebar-section">
              {!collapsed && <div className="sidebar-section-title">{section.section}</div>}
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                  <item.icon />
                  {!collapsed && <span className="link-text">{item.label}</span>}
                </NavLink>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="sidebar-link"
            style={{ width: '100%', marginBottom: '8px' }}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
            {!collapsed && <span className="link-text">Colapsar</span>}
          </button>
          <button onClick={logout} className="sidebar-link" style={{ width: '100%' }}>
            <LogOut />
            {!collapsed && <span className="link-text">Cerrar Sesión</span>}
          </button>
        </div>
      </nav>
    </div>
  );
}
