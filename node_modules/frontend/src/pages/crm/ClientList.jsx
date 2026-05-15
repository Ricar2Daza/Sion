import { useState } from 'react';
import { Search, Plus, Eye, Star, Phone, Mail } from 'lucide-react';
import { clients, formatCOP, getScoreBadge } from '../../data/mockData';

export default function ClientList() {
  const [search, setSearch] = useState('');
  const [scoreFilter, setScoreFilter] = useState('Todos');

  const filtered = clients.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchScore = scoreFilter === 'Todos' || c.score === scoreFilter;
    return matchSearch && matchScore;
  });

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">CRM — Gestión de Clientes</h1>
          <p className="page-subtitle">{clients.length} clientes registrados • Pipeline de ventas activo</p>
        </div>
        <button className="btn btn-primary"><Plus size={16} /> Nuevo Cliente</button>
      </div>

      {/* Score Summary */}
      <div className="grid grid-4" style={{ marginBottom: 'var(--space-6)' }}>
        {['Premium', 'VIP', 'Frecuente', 'Riesgoso'].map(score => {
          const count = clients.filter(c => c.score === score).length;
          const colors = { Premium: '#0E3B24', VIP: '#78C043', Frecuente: '#3498DB', Riesgoso: '#E74C3C' };
          return (
            <div key={score} className="card" style={{ cursor: 'pointer', borderTop: `3px solid ${colors[score]}` }} onClick={() => setScoreFilter(score === scoreFilter ? 'Todos' : score)}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: colors[score] }}>{count}</div>
              <div style={{ fontSize: '13px', color: 'var(--color-gray-500)', marginTop: '4px' }}>Clientes {score}</div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="flex items-center gap-4">
          <div className="search-bar" style={{ flex: 1 }}>
            <Search size={18} />
            <input type="text" className="form-input" placeholder="Buscar cliente..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', paddingLeft: '40px' }} />
          </div>
          <div className="tabs" style={{ borderBottom: 'none' }}>
            {['Todos', 'Premium', 'VIP', 'Frecuente', 'Riesgoso'].map(s => (
              <button key={s} className={`tab ${scoreFilter === s ? 'active' : ''}`} onClick={() => setScoreFilter(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Client Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Ciudad</th>
              <th>Score</th>
              <th>Proyectos</th>
              <th>Total Invertido</th>
              <th>Asesor</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(client => (
              <tr key={client.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar sm">{client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--color-gray-800)' }}>{client.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--color-gray-400)' }}>Último: {client.lastContact}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1" style={{ fontSize: '12px' }}><Phone size={12} />{client.phone}</span>
                    <span className="flex items-center gap-1" style={{ fontSize: '12px' }}><Mail size={12} />{client.email}</span>
                  </div>
                </td>
                <td>{client.city}</td>
                <td><span className={`badge ${getScoreBadge(client.score)}`}><Star size={10} style={{ marginRight: '4px' }} />{client.score}</span></td>
                <td style={{ textAlign: 'center' }}>{client.totalProjects}</td>
                <td style={{ fontWeight: 600 }}>{formatCOP(client.totalSpent)}</td>
                <td>{client.advisor}</td>
                <td><span className={`badge ${client.status === 'Activo' ? 'badge-success' : client.status === 'Mora' ? 'badge-danger' : 'badge-secondary'}`}>{client.status}</span></td>
                <td><button className="btn btn-ghost btn-sm"><Eye size={14} /> Ver</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
