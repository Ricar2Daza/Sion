import { useState } from 'react';
import { Search, Plus, MapPin, Phone, Star, CheckCircle } from 'lucide-react';
import { employees, getStatusBadge } from '../../data/mockData';

export default function EmployeeList() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const filtered = employees.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'Todos' || e.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statuses = ['Todos', 'Disponible', 'En obra', 'En ruta', 'Descanso', 'Vacaciones'];
  const statusCounts = statuses.reduce((acc, s) => {
    acc[s] = s === 'Todos' ? employees.length : employees.filter(e => e.status === s).length;
    return acc;
  }, {});

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">RRHH — Personal y Operaciones</h1>
          <p className="page-subtitle">{employees.length} empleados registrados • Control de asistencia y GPS</p>
        </div>
        <button className="btn btn-primary"><Plus size={16} /> Nuevo Empleado</button>
      </div>

      {/* Status Summary */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)', marginBottom: 'var(--space-6)' }}>
        {statuses.map(s => (
          <div key={s} className={`card ${statusFilter === s ? '' : ''}`}
            style={{ cursor: 'pointer', textAlign: 'center', borderColor: statusFilter === s ? 'var(--color-primary)' : undefined, background: statusFilter === s ? 'rgba(14,59,36,0.03)' : undefined }}
            onClick={() => setStatusFilter(s)}>
            <div style={{ fontSize: '24px', fontWeight: 700 }}>{statusCounts[s]}</div>
            <div style={{ fontSize: '12px', color: 'var(--color-gray-500)', marginTop: '4px' }}>{s}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div className="search-bar">
          <Search size={18} />
          <input type="text" className="form-input" placeholder="Buscar empleado por nombre o rol..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', paddingLeft: '40px' }} />
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-3">
        {filtered.map(emp => (
          <div key={emp.id} className="card" style={{ cursor: 'pointer' }}>
            <div className="flex items-center gap-4" style={{ marginBottom: '16px' }}>
              <div className="avatar lg">{emp.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>{emp.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--color-gray-500)' }}>{emp.role}</div>
                <span className={`badge ${getStatusBadge(emp.status)}`} style={{ marginTop: '4px' }}>{emp.status}</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--color-gray-600)' }}>
              <div className="flex items-center gap-2"><Phone size={14} /> {emp.phone}</div>
              <div className="flex items-center gap-2"><CheckCircle size={14} /> {emp.projects} proyectos completados</div>
              <div className="flex items-center gap-2"><Star size={14} style={{ color: 'var(--color-warning)' }} /> {emp.rating} / 5.0</div>
              <div className="flex items-center gap-2"><MapPin size={14} /> {emp.lat.toFixed(3)}, {emp.lng.toFixed(3)}</div>
            </div>
            <div className="flex gap-2" style={{ marginTop: '16px' }}>
              <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Ver Perfil</button>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>Asignar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
