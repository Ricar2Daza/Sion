import { useState } from 'react';
import { Plus, Eye, AlertCircle } from 'lucide-react';
import { services, SERVICE_STATES, formatCOP, getStatusBadge } from '../../data/mockData';

export default function ServicePipeline() {
  const [view, setView] = useState('pipeline');
  const [selectedState, setSelectedState] = useState(null);

  const filtered = selectedState ? services.filter(s => s.state === selectedState) : services;

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Gestión de Servicios</h1>
          <p className="page-subtitle">{services.length} servicios activos • Pipeline de 12 estados</p>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1" style={{ background: 'var(--color-gray-100)', borderRadius: 'var(--radius-md)', padding: '3px' }}>
            <button className={`btn btn-sm ${view === 'pipeline' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setView('pipeline')}>Pipeline</button>
            <button className={`btn btn-sm ${view === 'list' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setView('list')}>Lista</button>
          </div>
          <button className="btn btn-primary"><Plus size={16} /> Nuevo Servicio</button>
        </div>
      </div>

      {/* Business Rule Alert */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', borderLeft: '4px solid var(--color-warning)', padding: 'var(--space-4)' }}>
        <div className="flex items-center gap-3" style={{ fontSize: '13px' }}>
          <AlertCircle size={18} style={{ color: 'var(--color-warning)', flexShrink: 0 }} />
          <span><strong>Regla de negocio:</strong> La visita técnica ($80.000 COP) debe pagarse antes de generar cotización. La aprobación financiera depende de Addi / Sistecrédito.</span>
        </div>
      </div>

      {/* Pipeline View */}
      <div className="pipeline" style={{ marginBottom: 'var(--space-6)' }}>
        {SERVICE_STATES.map((state) => {
          const count = services.filter(s => s.state === state).length;
          const isActive = selectedState === state;
          return (
            <div
              key={state}
              className={`pipeline-step ${isActive ? 'active' : count > 0 ? 'completed' : ''}`}
              onClick={() => setSelectedState(isActive ? null : state)}
              style={{ opacity: count === 0 && !isActive ? 0.5 : 1 }}
            >
              <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '2px' }}>{count}</div>
              <div style={{ lineHeight: 1.2 }}>{state}</div>
            </div>
          );
        })}
      </div>

      {/* Kanban or List */}
      {view === 'pipeline' ? (
        <div className="kanban-board">
          {SERVICE_STATES.filter(state => services.some(s => s.state === state)).map(state => (
            <div key={state} className="kanban-column">
              <div className="kanban-column-header">
                <span>{state}</span>
                <span className="kanban-column-count">{services.filter(s => s.state === state).length}</span>
              </div>
              {services.filter(s => s.state === state).map(srv => (
                <div key={srv.id} className="kanban-card">
                  <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-primary)' }}>{srv.id}</span>
                    <span className={`badge ${getStatusBadge(srv.paymentState)}`}>{srv.paymentState}</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{srv.client}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginBottom: '8px' }}>{srv.category}</div>
                  {srv.technician && (
                    <div style={{ fontSize: '11px', color: 'var(--color-gray-400)', marginBottom: '8px' }}>
                      Técnico: {srv.technician}
                    </div>
                  )}
                  {srv.amount > 0 && <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-primary)' }}>{formatCOP(srv.amount)}</div>}
                  {srv.progress > 0 && srv.progress < 100 && (
                    <div style={{ marginTop: '8px' }}>
                      <div className="progress-bar"><div className="progress-fill" style={{ width: `${srv.progress}%` }}></div></div>
                      <div style={{ fontSize: '10px', color: 'var(--color-gray-400)', marginTop: '4px', textAlign: 'right' }}>{srv.progress}%</div>
                    </div>
                  )}
                  {!srv.visitPaid && (
                    <div style={{ marginTop: '8px', padding: '6px 10px', background: 'var(--color-warning-bg)', borderRadius: 'var(--radius-sm)', fontSize: '11px', color: 'var(--color-warning)' }}>
                      ⚠ Requiere pago de visita ($80.000)
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead><tr><th>ID</th><th>Cliente</th><th>Categoría</th><th>Estado</th><th>Técnico</th><th>Pago</th><th>Monto</th><th>Progreso</th><th></th></tr></thead>
            <tbody>
              {filtered.map(srv => (
                <tr key={srv.id}>
                  <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{srv.id}</td>
                  <td>{srv.client}</td>
                  <td>{srv.category}</td>
                  <td><span className="badge badge-primary">{srv.state}</span></td>
                  <td>{srv.technician || '—'}</td>
                  <td><span className={`badge ${getStatusBadge(srv.paymentState)}`}>{srv.paymentState}</span></td>
                  <td style={{ fontWeight: 600 }}>{formatCOP(srv.amount)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="progress-bar" style={{ width: '80px' }}><div className="progress-fill" style={{ width: `${srv.progress}%` }}></div></div>
                      <span style={{ fontSize: '12px' }}>{srv.progress}%</span>
                    </div>
                  </td>
                  <td><button className="btn btn-ghost btn-sm"><Eye size={14} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
