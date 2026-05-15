import { useAuth } from '../../contexts/AuthContext';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { notifications } from '../../data/mockData';
import { useState } from 'react';

export default function Header({ onMenuToggle }) {
  const { user } = useAuth();
  const [showNotifs, setShowNotifs] = useState(false);

  if (!user) return null;

  const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-left">
          <button className="btn-icon btn-ghost" onClick={onMenuToggle} style={{ display: 'none' }}>
            <Menu size={20} />
          </button>
          <div className="header-search">
            <Search />
            <input type="text" placeholder="Buscar servicios, clientes, empleados..." className="form-input" />
          </div>
        </div>
        <div className="header-right">
          <div style={{ position: 'relative' }}>
            <button className="notification-btn" onClick={() => setShowNotifs(!showNotifs)}>
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            {showNotifs && (
              <div style={{
                position: 'absolute', top: '48px', right: 0, width: '360px', background: 'white',
                borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-gray-200)',
                zIndex: 'var(--z-dropdown)', animation: 'fadeInDown 0.2s ease-out'
              }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--color-gray-100)', fontWeight: 600, fontSize: '14px' }}>
                  Notificaciones
                </div>
                {notifications.map(n => (
                  <div key={n.id} style={{ padding: '12px 20px', borderBottom: '1px solid var(--color-gray-50)', display: 'flex', gap: '12px', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gray-50)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%', marginTop: 6, flexShrink: 0,
                      background: n.type === 'danger' ? 'var(--color-danger)' : n.type === 'warning' ? 'var(--color-warning)' : n.type === 'success' ? 'var(--color-success)' : 'var(--color-info)'
                    }} />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-gray-800)' }}>{n.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginTop: 2 }}>{n.message}</div>
                      <div style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginTop: 4 }}>{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="user-menu">
            <div className="avatar">{initials}</div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.roleInfo.label}</div>
            </div>
            <ChevronDown size={16} style={{ color: 'var(--color-gray-400)' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
