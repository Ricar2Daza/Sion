// ══════════════════════════════════════════════════════════════
// SION APP PRO — Mock Data
// ══════════════════════════════════════════════════════════════

export const SERVICE_STATES = [
  'Solicitud recibida', 'Visita agendada', 'Pago confirmado', 'Inspección realizada',
  'Cotización enviada', 'Proyecto aprobado', 'Financiación validada', 'En ejecución',
  'En supervisión', 'Entrega final', 'Garantía activa', 'Proyecto finalizado'
];

export const PAYMENT_STATES = ['Pendiente', 'Parcial', 'Confirmado', 'Financiado', 'Mora', 'Jurídico', 'Cerrado'];

export const EMPLOYEE_STATES = ['Disponible', 'En obra', 'En ruta', 'Descanso', 'Incapacidad', 'Vacaciones', 'Suspendido'];

export const PRODUCT_STATES = ['Disponible', 'Bajo stock', 'Agotado', 'Pedido proveedor', 'Descontinuado'];

export const CLIENT_SCORES = ['Premium', 'VIP', 'Frecuente', 'Riesgoso'];

export const SERVICE_CATEGORIES = [
  { id: 'cocinas', name: 'Cocinas Integrales', icon: 'ChefHat', desc: 'Diseño y fabricación a la medida' },
  { id: 'closets', name: 'Clósets a tu Medida', icon: 'DoorOpen', desc: 'Diseño y fabricación personalizada' },
  { id: 'muebles', name: 'Muebles de TV', icon: 'Tv', desc: 'Diseños modernos y funcionales' },
  { id: 'remodelaciones', name: 'Remodelaciones', icon: 'Hammer', desc: 'Interiores y exteriores' },
  { id: 'construccion', name: 'Construcción', icon: 'Building2', desc: 'Obra nueva, ampliaciones y más' },
  { id: 'plomeria', name: 'Plomería', icon: 'Wrench', desc: 'Instalación y mantenimiento' },
  { id: 'electricidad', name: 'Electricidad', icon: 'Zap', desc: 'Redes eléctricas residenciales' },
  { id: 'pintura', name: 'Pintura y Acabados', icon: 'Paintbrush', desc: 'Interior y exterior' },
];

export const clients = [
  { id: 1, name: 'Carlos Mendoza', email: 'carlos@email.com', phone: '315 467 8234', city: 'Valledupar', score: 'Premium', totalProjects: 8, totalSpent: 45200000, advisor: 'Ana García', lastContact: '2026-05-08', status: 'Activo' },
  { id: 2, name: 'María López', email: 'maria@email.com', phone: '300 123 4567', city: 'Valledupar', score: 'VIP', totalProjects: 5, totalSpent: 32100000, advisor: 'Pedro Ruiz', lastContact: '2026-05-07', status: 'Activo' },
  { id: 3, name: 'Jorge Herrera', email: 'jorge@email.com', phone: '310 987 6543', city: 'Valledupar', score: 'Frecuente', totalProjects: 3, totalSpent: 15800000, advisor: 'Ana García', lastContact: '2026-05-05', status: 'Activo' },
  { id: 4, name: 'Lucía Ramírez', email: 'lucia@email.com', phone: '312 555 7890', city: 'Santa Marta', score: 'Premium', totalProjects: 6, totalSpent: 38500000, advisor: 'Pedro Ruiz', lastContact: '2026-05-09', status: 'Activo' },
  { id: 5, name: 'Andrés Pérez', email: 'andres@email.com', phone: '318 222 3344', city: 'Barranquilla', score: 'Riesgoso', totalProjects: 2, totalSpent: 8200000, advisor: 'Ana García', lastContact: '2026-04-28', status: 'Mora' },
  { id: 6, name: 'Camila Torres', email: 'camila@email.com', phone: '315 111 2233', city: 'Valledupar', score: 'Frecuente', totalProjects: 4, totalSpent: 21400000, advisor: 'Pedro Ruiz', lastContact: '2026-05-06', status: 'Activo' },
  { id: 7, name: 'Diego Castillo', email: 'diego@email.com', phone: '300 444 5566', city: 'Valledupar', score: 'VIP', totalProjects: 7, totalSpent: 52300000, advisor: 'Ana García', lastContact: '2026-05-09', status: 'Activo' },
  { id: 8, name: 'Valentina Ochoa', email: 'valentina@email.com', phone: '310 777 8899', city: 'Valledupar', score: 'Frecuente', totalProjects: 2, totalSpent: 9600000, advisor: 'Pedro Ruiz', lastContact: '2026-05-03', status: 'Activo' },
  { id: 9, name: 'Fernando Díaz', email: 'fernando@email.com', phone: '312 333 4455', city: 'Valledupar', score: 'Riesgoso', totalProjects: 1, totalSpent: 4500000, advisor: 'Ana García', lastContact: '2026-04-15', status: 'Inactivo' },
  { id: 10, name: 'Isabella Martínez', email: 'isabella@email.com', phone: '318 666 7788', city: 'Santa Marta', score: 'Premium', totalProjects: 9, totalSpent: 67800000, advisor: 'Pedro Ruiz', lastContact: '2026-05-09', status: 'Activo' },
];

export const employees = [
  { id: 1, name: 'Roberto Suárez', role: 'Técnico Eléctrico', status: 'En obra', phone: '315 111 0001', projects: 12, rating: 4.8, lat: 10.475, lng: -73.253 },
  { id: 2, name: 'Miguel Ángel Ruiz', role: 'Carpintero', status: 'Disponible', phone: '315 111 0002', projects: 18, rating: 4.9, lat: 10.468, lng: -73.261 },
  { id: 3, name: 'Juan Pablo Gómez', role: 'Plomero', status: 'En ruta', phone: '315 111 0003', projects: 9, rating: 4.5, lat: 10.482, lng: -73.245 },
  { id: 4, name: 'Sandra Morales', role: 'Supervisora', status: 'Disponible', phone: '315 111 0004', projects: 24, rating: 4.9, lat: 10.470, lng: -73.255 },
  { id: 5, name: 'Pedro Jiménez', role: 'Albañil', status: 'En obra', phone: '315 111 0005', projects: 15, rating: 4.6, lat: 10.473, lng: -73.249 },
  { id: 6, name: 'Luis Hernández', role: 'Pintor', status: 'Descanso', phone: '315 111 0006', projects: 11, rating: 4.7, lat: 10.465, lng: -73.258 },
  { id: 7, name: 'Carlos Vargas', role: 'Soldador', status: 'Disponible', phone: '315 111 0007', projects: 7, rating: 4.4, lat: 10.478, lng: -73.242 },
  { id: 8, name: 'Diana Rojas', role: 'Arquitecta', status: 'En obra', phone: '315 111 0008', projects: 20, rating: 5.0, lat: 10.471, lng: -73.251 },
  { id: 9, name: 'Andrés Castro', role: 'Técnico HVAC', status: 'Vacaciones', phone: '315 111 0009', projects: 6, rating: 4.3, lat: 10.469, lng: -73.260 },
  { id: 10, name: 'Marcela Pinto', role: 'Diseñadora', status: 'Disponible', phone: '315 111 0010', projects: 14, rating: 4.8, lat: 10.476, lng: -73.247 },
];

export const services = [
  { id: 'SRV-2026-001', client: 'Carlos Mendoza', category: 'Cocinas Integrales', state: 'En ejecución', technician: 'Roberto Suárez', paymentState: 'Confirmado', amount: 12500000, visitPaid: true, date: '2026-04-15', progress: 65 },
  { id: 'SRV-2026-002', client: 'María López', category: 'Clósets a tu Medida', state: 'Cotización enviada', technician: 'Miguel Ángel Ruiz', paymentState: 'Pendiente', amount: 8200000, visitPaid: true, date: '2026-05-01', progress: 30 },
  { id: 'SRV-2026-003', client: 'Jorge Herrera', category: 'Remodelaciones', state: 'Visita agendada', technician: 'Sandra Morales', paymentState: 'Confirmado', amount: 80000, visitPaid: true, date: '2026-05-10', progress: 10 },
  { id: 'SRV-2026-004', client: 'Lucía Ramírez', category: 'Electricidad', state: 'Proyecto finalizado', technician: 'Roberto Suárez', paymentState: 'Cerrado', amount: 3500000, visitPaid: true, date: '2026-03-20', progress: 100 },
  { id: 'SRV-2026-005', client: 'Diego Castillo', category: 'Construcción', state: 'En supervisión', technician: 'Diana Rojas', paymentState: 'Financiado', amount: 45000000, visitPaid: true, date: '2026-02-10', progress: 85 },
  { id: 'SRV-2026-006', client: 'Camila Torres', category: 'Plomería', state: 'Entrega final', technician: 'Juan Pablo Gómez', paymentState: 'Confirmado', amount: 2800000, visitPaid: true, date: '2026-04-28', progress: 95 },
  { id: 'SRV-2026-007', client: 'Valentina Ochoa', category: 'Pintura y Acabados', state: 'Solicitud recibida', technician: null, paymentState: 'Pendiente', amount: 0, visitPaid: false, date: '2026-05-09', progress: 0 },
  { id: 'SRV-2026-008', client: 'Isabella Martínez', category: 'Cocinas Integrales', state: 'Financiación validada', technician: 'Miguel Ángel Ruiz', paymentState: 'Financiado', amount: 18700000, visitPaid: true, date: '2026-04-22', progress: 45 },
  { id: 'SRV-2026-009', client: 'Andrés Pérez', category: 'Muebles de TV', state: 'Pago confirmado', technician: 'Miguel Ángel Ruiz', paymentState: 'Confirmado', amount: 80000, visitPaid: true, date: '2026-05-08', progress: 15 },
  { id: 'SRV-2026-010', client: 'Fernando Díaz', category: 'Remodelaciones', state: 'Garantía activa', technician: 'Pedro Jiménez', paymentState: 'Cerrado', amount: 22300000, visitPaid: true, date: '2026-01-15', progress: 100 },
];

export const inventory = [
  { id: 1, name: 'Tablero MDF 15mm', category: 'Maderas', stock: 45, minStock: 20, price: 185000, unit: 'Lámina', status: 'Disponible' },
  { id: 2, name: 'Tubo PVC 1/2"', category: 'Plomería', stock: 8, minStock: 15, price: 12500, unit: 'Metro', status: 'Bajo stock' },
  { id: 3, name: 'Cable #12 AWG', category: 'Eléctrico', stock: 200, minStock: 50, price: 3200, unit: 'Metro', status: 'Disponible' },
  { id: 4, name: 'Pintura Vinilo Blanco', category: 'Pinturas', stock: 0, minStock: 10, price: 95000, unit: 'Galón', status: 'Agotado' },
  { id: 5, name: 'Cemento Gris x50kg', category: 'Construcción', stock: 120, minStock: 30, price: 32000, unit: 'Bulto', status: 'Disponible' },
  { id: 6, name: 'Bisagra Hidráulica', category: 'Herrajes', stock: 35, minStock: 25, price: 18500, unit: 'Unidad', status: 'Disponible' },
  { id: 7, name: 'Silicona Transparente', category: 'Sellantes', stock: 5, minStock: 12, price: 15800, unit: 'Tubo', status: 'Bajo stock' },
  { id: 8, name: 'Granito Negro Absoluto', category: 'Piedras', stock: 12, minStock: 5, price: 320000, unit: 'm²', status: 'Disponible' },
  { id: 9, name: 'Tornillo Drywall 6x1"', category: 'Fijación', stock: 2000, minStock: 500, price: 85, unit: 'Unidad', status: 'Disponible' },
  { id: 10, name: 'Lámina Acero Inox', category: 'Metales', stock: 3, minStock: 5, price: 280000, unit: 'Lámina', status: 'Bajo stock' },
  { id: 11, name: 'Acrílico Transparente 3mm', category: 'Plásticos', stock: 0, minStock: 8, price: 145000, unit: 'Lámina', status: 'Agotado' },
  { id: 12, name: 'Interruptor Doble', category: 'Eléctrico', stock: 50, minStock: 20, price: 22000, unit: 'Unidad', status: 'Disponible' },
];

export const allies = [
  { id: 1, name: 'ElectriPro Valledupar', specialty: 'Electricista', rating: 4.8, jobs: 45, available: true, photo: null },
  { id: 2, name: 'Diseños Caribe', specialty: 'Diseñador de Interiores', rating: 4.9, jobs: 32, available: true, photo: null },
  { id: 3, name: 'TransporCesar', specialty: 'Transportista', rating: 4.5, jobs: 67, available: false, photo: null },
  { id: 4, name: 'AquaFix SAS', specialty: 'Plomero', rating: 4.7, jobs: 28, available: true, photo: null },
  { id: 5, name: 'ArquiNova', specialty: 'Arquitecto', rating: 5.0, jobs: 15, available: true, photo: null },
  { id: 6, name: 'SoldaMax', specialty: 'Soldador', rating: 4.6, jobs: 38, available: true, photo: null },
];

export const financialData = {
  monthlyRevenue: [
    { month: 'Ene', ingresos: 42000000, egresos: 28000000, utilidad: 14000000 },
    { month: 'Feb', ingresos: 38000000, egresos: 25000000, utilidad: 13000000 },
    { month: 'Mar', ingresos: 51000000, egresos: 32000000, utilidad: 19000000 },
    { month: 'Abr', ingresos: 47000000, egresos: 30000000, utilidad: 17000000 },
    { month: 'May', ingresos: 55000000, egresos: 33000000, utilidad: 22000000 },
  ],
  kpis: {
    totalRevenue: 233000000,
    totalExpenses: 148000000,
    netProfit: 85000000,
    profitMargin: 36.5,
    activeProjects: 24,
    completedProjects: 156,
    activeClients: 87,
    employeeCount: 32,
    avgTicket: 8500000,
    conversionRate: 68,
    satisfaction: 4.7,
    pendingInvoices: 12400000,
  },
  accountsReceivable: [
    { client: 'Carlos Mendoza', amount: 4200000, dueDate: '2026-05-15', status: 'Pendiente' },
    { client: 'Diego Castillo', amount: 8200000, dueDate: '2026-05-20', status: 'Pendiente' },
    { client: 'Andrés Pérez', amount: 3500000, dueDate: '2026-04-30', status: 'Mora' },
  ],
  invoices: [
    { id: 'FAC-001', client: 'Carlos Mendoza', amount: 12500000, date: '2026-04-15', status: 'Pagada', dian: 'DIAN-2026-0412' },
    { id: 'FAC-002', client: 'María López', amount: 8200000, date: '2026-05-01', status: 'Pendiente', dian: 'DIAN-2026-0513' },
    { id: 'FAC-003', client: 'Diego Castillo', amount: 45000000, date: '2026-02-10', status: 'Parcial', dian: 'DIAN-2026-0214' },
    { id: 'FAC-004', client: 'Lucía Ramírez', amount: 3500000, date: '2026-03-20', status: 'Pagada', dian: 'DIAN-2026-0315' },
    { id: 'FAC-005', client: 'Camila Torres', amount: 2800000, date: '2026-04-28', status: 'Pagada', dian: 'DIAN-2026-0416' },
  ],
};

export const notifications = [
  { id: 1, type: 'warning', title: 'Stock bajo', message: 'Tubo PVC 1/2" por debajo del mínimo', time: 'Hace 5 min' },
  { id: 2, type: 'success', title: 'Pago recibido', message: 'Carlos Mendoza - $4.200.000', time: 'Hace 15 min' },
  { id: 3, type: 'info', title: 'Nueva solicitud', message: 'Valentina Ochoa solicita servicio de pintura', time: 'Hace 30 min' },
  { id: 4, type: 'danger', title: 'Factura vencida', message: 'Andrés Pérez - $3.500.000 en mora', time: 'Hace 1 hora' },
  { id: 5, type: 'info', title: 'Técnico en ruta', message: 'Juan Pablo Gómez en camino a obra', time: 'Hace 2 horas' },
];

export const formatCOP = (value) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('es-CO').format(value);
};

export const getScoreBadge = (score) => {
  const map = { 'Premium': 'badge-primary', 'VIP': 'badge-secondary', 'Frecuente': 'badge-info', 'Riesgoso': 'badge-danger' };
  return map[score] || 'badge-info';
};

export const getStatusBadge = (status) => {
  const map = {
    'Disponible': 'badge-success', 'En obra': 'badge-warning', 'En ruta': 'badge-info',
    'Descanso': 'badge-secondary', 'Incapacidad': 'badge-danger', 'Vacaciones': 'badge-primary', 'Suspendido': 'badge-danger',
    'Pendiente': 'badge-warning', 'Parcial': 'badge-info', 'Confirmado': 'badge-success',
    'Financiado': 'badge-primary', 'Mora': 'badge-danger', 'Jurídico': 'badge-danger', 'Cerrado': 'badge-secondary',
    'Bajo stock': 'badge-warning', 'Agotado': 'badge-danger', 'Pedido proveedor': 'badge-info', 'Descontinuado': 'badge-secondary',
  };
  return map[status] || 'badge-info';
};
