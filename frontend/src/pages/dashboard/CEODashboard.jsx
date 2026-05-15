import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Briefcase, CheckCircle, AlertTriangle, Clock, Star, Percent } from 'lucide-react';
import { financialData, services, employees, formatCOP, SERVICE_STATES } from '../../data/mockData';

const CHART_COLORS = ['#0E3B24', '#78C043', '#2ECC71', '#3498DB', '#E67E22', '#9B59B6'];

const pipelineCounts = SERVICE_STATES.map(state => ({
  name: state.length > 12 ? state.slice(0, 12) + '…' : state,
  count: services.filter(s => s.state === state).length
}));

const categoryData = [
  { name: 'Cocinas', value: 35 }, { name: 'Clósets', value: 20 },
  { name: 'Remodelaciones', value: 18 }, { name: 'Electricidad', value: 12 },
  { name: 'Plomería', value: 8 }, { name: 'Otros', value: 7 },
];

export default function CEODashboard() {
  const { kpis, monthlyRevenue } = financialData;

  const kpiCards = [
    { label: 'Ingresos Totales', value: formatCOP(kpis.totalRevenue), trend: '+12.5%', up: true, icon: DollarSign, color: '#0E3B24' },
    { label: 'Utilidad Neta', value: formatCOP(kpis.netProfit), trend: '+8.2%', up: true, icon: TrendingUp, color: '#78C043' },
    { label: 'Proyectos Activos', value: kpis.activeProjects, trend: '+3', up: true, icon: Briefcase, color: '#3498DB' },
    { label: 'Clientes Activos', value: kpis.activeClients, trend: '+5', up: true, icon: Users, color: '#2ECC71' },
    { label: 'Tasa Conversión', value: kpis.conversionRate + '%', trend: '+2.1%', up: true, icon: Percent, color: '#E67E22' },
    { label: 'Satisfacción', value: kpis.satisfaction + '/5', trend: '+0.2', up: true, icon: Star, color: '#F39C12' },
    { label: 'Ticket Promedio', value: formatCOP(kpis.avgTicket), trend: '+5.3%', up: true, icon: DollarSign, color: '#9B59B6' },
    { label: 'Facturas Pendientes', value: formatCOP(kpis.pendingInvoices), trend: '-2', up: false, icon: Clock, color: '#E74C3C' },
  ];

  const activeEmployees = employees.filter(e => ['Disponible', 'En obra', 'En ruta'].includes(e.status));

  return (
    <div>
      <div className="page-header flex items-center justify-between">
        <div>
          <h1 className="page-title">Dashboard Ejecutivo</h1>
          <p className="page-subtitle">Bienvenido, Jhoan. Resumen operativo en tiempo real.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline btn-sm">Exportar PDF</button>
          <button className="btn btn-primary btn-sm">Actualizar</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 'var(--space-6)' }}>
        {kpiCards.map((kpi, i) => (
          <div key={i} className="kpi-card" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="kpi-icon" style={{ background: kpi.color + '12', color: kpi.color }}>
              <kpi.icon size={24} />
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
            <span className={`kpi-trend ${kpi.up ? 'up' : 'down'}`}>
              {kpi.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {kpi.trend}
            </span>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-2" style={{ marginBottom: 'var(--space-6)' }}>
        {/* Revenue Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Ingresos vs Egresos</h3>
            <span className="badge badge-success">2026</span>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="gradIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#78C043" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#78C043" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradEgresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E74C3C" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#E74C3C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E6" />
              <XAxis dataKey="month" stroke="#94A39B" fontSize={12} />
              <YAxis stroke="#94A39B" fontSize={12} tickFormatter={v => `$${(v/1000000).toFixed(0)}M`} />
              <Tooltip formatter={(v) => formatCOP(v)} contentStyle={{ borderRadius: '10px', border: '1px solid #E2E8E6' }} />
              <Area type="monotone" dataKey="ingresos" stroke="#78C043" fill="url(#gradIngresos)" strokeWidth={2.5} name="Ingresos" />
              <Area type="monotone" dataKey="egresos" stroke="#E74C3C" fill="url(#gradEgresos)" strokeWidth={2} name="Egresos" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Distribución por Servicio</h3>
            <span className="badge badge-info">Este mes</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <ResponsiveContainer width="50%" height={280}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" >
                  {categoryData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {categoryData.map((cat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: CHART_COLORS[i] }} />
                    <span>{cat.name}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline + Activity */}
      <div className="grid grid-2" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Pipeline de Servicios</h3>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={pipelineCounts} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E6" />
              <XAxis type="number" stroke="#94A39B" fontSize={12} />
              <YAxis type="category" dataKey="name" width={110} stroke="#94A39B" fontSize={11} />
              <Tooltip contentStyle={{ borderRadius: '10px' }} />
              <Bar dataKey="count" fill="#0E3B24" radius={[0, 6, 6, 0]} name="Servicios" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Equipo Activo</h3>
            <span className="badge badge-success">{activeEmployees.length} en campo</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '260px', overflowY: 'auto' }}>
            {employees.slice(0, 8).map(emp => (
              <div key={emp.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-gray-100)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="avatar sm">{emp.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>{emp.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-gray-500)' }}>{emp.role}</div>
                  </div>
                </div>
                <span className={`badge ${emp.status === 'Disponible' ? 'badge-success' : emp.status === 'En obra' ? 'badge-warning' : emp.status === 'En ruta' ? 'badge-info' : 'badge-secondary'}`}>
                  {emp.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="card" style={{ borderLeft: '4px solid var(--color-warning)' }}>
        <div className="card-header">
          <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={18} style={{ color: 'var(--color-warning)' }} />
            Alertas Críticas
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: 'var(--color-danger-bg)', borderRadius: 'var(--radius-md)', fontSize: '13px' }}>
            <AlertTriangle size={16} style={{ color: 'var(--color-danger)', flexShrink: 0 }} />
            <span><strong>Factura vencida:</strong> Andrés Pérez debe $3.500.000 — 9 días en mora</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: 'var(--color-warning-bg)', borderRadius: 'var(--radius-md)', fontSize: '13px' }}>
            <AlertTriangle size={16} style={{ color: 'var(--color-warning)', flexShrink: 0 }} />
            <span><strong>Stock bajo:</strong> 3 productos por debajo del mínimo — requiere reposición</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: 'var(--color-info-bg)', borderRadius: 'var(--radius-md)', fontSize: '13px' }}>
            <CheckCircle size={16} style={{ color: 'var(--color-info)', flexShrink: 0 }} />
            <span><strong>Nuevo lead:</strong> Valentina Ochoa solicitó servicio de pintura — asignar asesor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
