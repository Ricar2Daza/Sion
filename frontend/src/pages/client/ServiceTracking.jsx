import { CheckCircle, Circle, User, DollarSign, FileText } from 'lucide-react';
import { services, SERVICE_STATES, formatCOP } from '../../data/mockData';

export default function ServiceTracking() {
  const srv = services[0]; // Demo: Carlos Mendoza's active service
  const currentIndex = SERVICE_STATES.indexOf(srv.state);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="page-header">
        <h1 className="page-title">Seguimiento del Servicio</h1>
        <p className="page-subtitle">{srv.id} — {srv.category}</p>
      </div>

      {/* Service Card */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', borderTop: '4px solid var(--color-primary)' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '18px' }}>{srv.category}</div>
            <div style={{ fontSize: '13px', color: 'var(--color-gray-500)' }}>Solicitado: {srv.date}</div>
          </div>
          <span className="badge badge-primary" style={{ fontSize: '13px', padding: '6px 14px' }}>{srv.state}</span>
        </div>
        <div className="grid grid-3" style={{ gap: 'var(--space-4)' }}>
          <div className="flex items-center gap-2" style={{ fontSize: '13px' }}>
            <User size={16} style={{ color: 'var(--color-gray-400)' }} />
            <div><div style={{ color: 'var(--color-gray-400)', fontSize: '11px' }}>Técnico</div>{srv.technician}</div>
          </div>
          <div className="flex items-center gap-2" style={{ fontSize: '13px' }}>
            <DollarSign size={16} style={{ color: 'var(--color-gray-400)' }} />
            <div><div style={{ color: 'var(--color-gray-400)', fontSize: '11px' }}>Monto</div>{formatCOP(srv.amount)}</div>
          </div>
          <div className="flex items-center gap-2" style={{ fontSize: '13px' }}>
            <FileText size={16} style={{ color: 'var(--color-gray-400)' }} />
            <div><div style={{ color: 'var(--color-gray-400)', fontSize: '11px' }}>Pago</div>{srv.paymentState}</div>
          </div>
        </div>
        {/* Progress Bar */}
        <div style={{ marginTop: '20px' }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>Progreso general</span>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>{srv.progress}%</span>
          </div>
          <div className="progress-bar" style={{ height: '8px' }}>
            <div className="progress-fill" style={{ width: `${srv.progress}%` }}></div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="card">
        <h3 className="card-title" style={{ marginBottom: '20px' }}>Línea de Tiempo</h3>
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {SERVICE_STATES.map((state, i) => {
            const isCompleted = i < currentIndex;
            const isCurrent = i === currentIndex;
            const isFuture = i > currentIndex;
            return (
              <div key={state} style={{ position: 'relative', paddingBottom: i < SERVICE_STATES.length - 1 ? '28px' : '0', opacity: isFuture ? 0.4 : 1 }}>
                {/* Line */}
                {i < SERVICE_STATES.length - 1 && (
                  <div style={{
                    position: 'absolute', left: '-22px', top: '24px', width: '2px', height: 'calc(100% - 4px)',
                    background: isCompleted ? 'var(--color-secondary)' : 'var(--color-gray-200)'
                  }} />
                )}
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-30px', top: '2px' }}>
                  {isCompleted ? (
                    <CheckCircle size={18} style={{ color: 'var(--color-secondary)' }} />
                  ) : isCurrent ? (
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--color-primary)', border: '3px solid var(--color-secondary)', animation: 'pulse 2s infinite' }} />
                  ) : (
                    <Circle size={18} style={{ color: 'var(--color-gray-300)' }} />
                  )}
                </div>
                {/* Content */}
                <div>
                  <div style={{ fontWeight: isCurrent ? 700 : isCompleted ? 600 : 400, fontSize: '14px', color: isCurrent ? 'var(--color-primary)' : isCompleted ? 'var(--color-gray-800)' : 'var(--color-gray-400)' }}>
                    {state}
                  </div>
                  {(isCompleted || isCurrent) && (
                    <div style={{ fontSize: '12px', color: 'var(--color-gray-400)', marginTop: '2px' }}>
                      {isCurrent ? 'Estado actual' : 'Completado'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
