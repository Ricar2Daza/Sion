import { Star, CheckCircle, Search } from 'lucide-react';
import { allies } from '../../data/mockData';
import { useState } from 'react';

export default function AllyNetwork() {
  const [search, setSearch] = useState('');
  const filtered = allies.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.specialty.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Marketplace — Red de Aliados</h1>
          <p className="page-subtitle">{allies.length} aliados registrados • Modelo Uber empresarial interno</p>
        </div>
        <button className="btn btn-primary">+ Registrar Aliado</button>
      </div>

      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div className="search-bar">
          <Search size={18} />
          <input type="text" className="form-input" placeholder="Buscar aliado por nombre o especialidad..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', paddingLeft: '40px' }} />
        </div>
      </div>

      <div className="grid grid-3">
        {filtered.map(ally => (
          <div key={ally.id} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: ally.available ? 'var(--color-success)' : 'var(--color-gray-300)' }} />
            <div className="flex items-center gap-4" style={{ marginBottom: '16px' }}>
              <div className="avatar lg" style={{ background: ally.available ? 'linear-gradient(135deg, #0E3B24, #78C043)' : 'var(--color-gray-300)' }}>
                {ally.name.slice(0, 2).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>{ally.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--color-gray-500)' }}>{ally.specialty}</div>
                <span className={`badge ${ally.available ? 'badge-success' : 'badge-secondary'}`} style={{ marginTop: '4px' }}>
                  {ally.available ? 'Disponible' : 'Ocupado'}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--color-gray-600)', marginBottom: '16px' }}>
              <div className="flex items-center gap-1"><Star size={14} style={{ color: '#F39C12' }} /> {ally.rating}</div>
              <div className="flex items-center gap-1"><CheckCircle size={14} /> {ally.jobs} trabajos</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Ver Perfil</button>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }} disabled={!ally.available}>
                {ally.available ? 'Contratar' : 'No disponible'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
