import { useState } from 'react';
import { Search, Plus, AlertTriangle, Package as PkgIcon, QrCode } from 'lucide-react';
import { inventory, formatCOP, getStatusBadge } from '../../data/mockData';

export default function StockDashboard() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');

  const filtered = inventory.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'Todos' || p.status === filter;
    return matchSearch && matchFilter;
  });

  const lowStock = inventory.filter(p => p.status === 'Bajo stock').length;
  const outOfStock = inventory.filter(p => p.status === 'Agotado').length;
  const totalValue = inventory.reduce((sum, p) => sum + (p.stock * p.price), 0);

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Inventario y Logística</h1>
          <p className="page-subtitle">{inventory.length} productos • Control QR y alertas automáticas</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline btn-sm"><QrCode size={14} /> Escanear QR</button>
          <button className="btn btn-primary"><Plus size={16} /> Nuevo Producto</button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#E8F8EF', color: '#27AE60' }}><PkgIcon size={24} /></div>
          <div className="kpi-value">{inventory.length}</div>
          <div className="kpi-label">Total Productos</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#FEF5E7', color: '#F39C12' }}><AlertTriangle size={24} /></div>
          <div className="kpi-value">{lowStock}</div>
          <div className="kpi-label">Stock Bajo</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: '#FDECEB', color: '#E74C3C' }}><AlertTriangle size={24} /></div>
          <div className="kpi-value">{outOfStock}</div>
          <div className="kpi-label">Agotados</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon" style={{ background: 'rgba(14,59,36,0.08)', color: '#0E3B24' }}><PkgIcon size={24} /></div>
          <div className="kpi-value" style={{ fontSize: 'var(--text-xl)' }}>{formatCOP(totalValue)}</div>
          <div className="kpi-label">Valor Total Inventario</div>
        </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-4)' }}>
        <div className="flex items-center gap-4">
          <div className="search-bar" style={{ flex: 1 }}>
            <Search size={18} />
            <input type="text" className="form-input" placeholder="Buscar producto..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', paddingLeft: '40px' }} />
          </div>
          <div className="tabs" style={{ borderBottom: 'none' }}>
            {['Todos', 'Disponible', 'Bajo stock', 'Agotado'].map(s => (
              <button key={s} className={`tab ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="table-container">
        <table className="table">
          <thead><tr><th>Producto</th><th>Categoría</th><th>Stock</th><th>Mínimo</th><th>Precio Unit.</th><th>Unidad</th><th>Estado</th><th>Valor Total</th></tr></thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td><span className="badge badge-secondary">{p.category}</span></td>
                <td>
                  <div className="flex items-center gap-2">
                    <span style={{ fontWeight: 600, color: p.stock <= p.minStock ? 'var(--color-danger)' : 'var(--color-gray-800)' }}>{p.stock}</span>
                    {p.stock <= p.minStock && <AlertTriangle size={14} style={{ color: 'var(--color-danger)' }} />}
                  </div>
                </td>
                <td style={{ color: 'var(--color-gray-500)' }}>{p.minStock}</td>
                <td>{formatCOP(p.price)}</td>
                <td>{p.unit}</td>
                <td><span className={`badge ${getStatusBadge(p.status)}`}>{p.status}</span></td>
                <td style={{ fontWeight: 600 }}>{formatCOP(p.stock * p.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
