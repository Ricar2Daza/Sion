import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DollarSign, TrendingUp, FileText, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { financialData, formatCOP } from '../../data/mockData';

export default function FinanceDashboard() {
  const { kpis, monthlyRevenue, accountsReceivable, invoices } = financialData;

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">ERP — Control Financiero</h1>
          <p className="page-subtitle">Flujo de caja, facturación electrónica, cuentas por cobrar</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline btn-sm"><FileText size={14} /> Nueva Factura</button>
          <button className="btn btn-primary btn-sm">Cierre Mensual</button>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-4" style={{ marginBottom: 'var(--space-6)' }}>
        {[
          { label: 'Ingresos', value: formatCOP(kpis.totalRevenue), icon: ArrowUpRight, color: '#27AE60', bg: '#E8F8EF' },
          { label: 'Egresos', value: formatCOP(kpis.totalExpenses), icon: ArrowDownRight, color: '#E74C3C', bg: '#FDECEB' },
          { label: 'Utilidad Neta', value: formatCOP(kpis.netProfit), icon: TrendingUp, color: '#0E3B24', bg: '#E8F8EF' },
          { label: 'Margen', value: `${kpis.profitMargin}%`, icon: DollarSign, color: '#78C043', bg: '#F0F9E8' },
        ].map((kpi, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-icon" style={{ background: kpi.bg, color: kpi.color }}><kpi.icon size={24} /></div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue Chart + Profit */}
      <div className="grid grid-2" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card">
          <div className="card-header"><h3 className="card-title">Utilidad Mensual</h3></div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E6" />
              <XAxis dataKey="month" stroke="#94A39B" fontSize={12} />
              <YAxis stroke="#94A39B" fontSize={12} tickFormatter={v => `$${(v / 1000000).toFixed(0)}M`} />
              <Tooltip formatter={v => formatCOP(v)} contentStyle={{ borderRadius: '10px' }} />
              <Bar dataKey="utilidad" fill="#78C043" radius={[6, 6, 0, 0]} name="Utilidad" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Accounts Receivable */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Cuentas por Cobrar</h3>
            <span className="badge badge-warning">{formatCOP(kpis.pendingInvoices)}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {accountsReceivable.map((ar, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: ar.status === 'Mora' ? 'var(--color-danger-bg)' : 'var(--color-gray-50)', borderRadius: 'var(--radius-md)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>{ar.client}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>Vence: {ar.dueDate}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{formatCOP(ar.amount)}</div>
                  <span className={`badge ${ar.status === 'Mora' ? 'badge-danger' : 'badge-warning'}`}>{ar.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Facturación Electrónica</h3>
          <span className="badge badge-info">{invoices.length} facturas</span>
        </div>
        <div className="table-container" style={{ border: 'none' }}>
          <table className="table">
            <thead><tr><th>Factura</th><th>DIAN</th><th>Cliente</th><th>Fecha</th><th>Monto</th><th>Estado</th></tr></thead>
            <tbody>
              {invoices.map(inv => (
                <tr key={inv.id}>
                  <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{inv.id}</td>
                  <td style={{ fontSize: '12px', color: 'var(--color-gray-500)' }}>{inv.dian}</td>
                  <td>{inv.client}</td>
                  <td>{inv.date}</td>
                  <td style={{ fontWeight: 600 }}>{formatCOP(inv.amount)}</td>
                  <td><span className={`badge ${inv.status === 'Pagada' ? 'badge-success' : inv.status === 'Parcial' ? 'badge-info' : 'badge-warning'}`}>{inv.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
