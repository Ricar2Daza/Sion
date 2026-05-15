import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppLayout from './components/layout/AppLayout';
import Login from './pages/Login';
import CEODashboard from './pages/dashboard/CEODashboard';
import ClientList from './pages/crm/ClientList';
import ServicePipeline from './pages/services/ServicePipeline';
import FinanceDashboard from './pages/erp/FinanceDashboard';
import EmployeeList from './pages/rrhh/EmployeeList';
import StockDashboard from './pages/inventory/StockDashboard';
import AllyNetwork from './pages/marketplace/AllyNetwork';

// Mobile Pages
import MobileShell from './components/mobile/MobileShell';
import MobileHome from './pages/mobile/MobileHome';
import ServicesList from './pages/mobile/ServicesList';
import ServiceDetail from './pages/mobile/ServiceDetail';
import BookAppointment from './pages/mobile/BookAppointment';
import MyRequests from './pages/mobile/MyRequests';
import MobileTracking from './pages/mobile/MobileTracking';
import QuotationsHub from './pages/mobile/QuotationsHub';
import QuoteInitial from './pages/mobile/QuoteInitial';
import PaymentMethods from './pages/mobile/PaymentMethods';
import BusinessHours from './pages/mobile/BusinessHours';
import OurProjects from './pages/mobile/OurProjects';
import MobileProfile from './pages/mobile/MobileProfile';
import MobileTerminos from './pages/mobile/MobileTerminos';
import MobilePrivacidad from './pages/mobile/MobilePrivacidad';

function ProtectedRoutes() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  if (user.role === 'cliente') {
    return (
      <Routes>
        <Route element={<MobileShell />}>
          <Route index element={<MobileHome />} />
          <Route path="servicios" element={<ServicesList />} />
          <Route path="servicios/:id" element={<ServiceDetail />} />
          <Route path="agendar" element={<BookAppointment />} />
          <Route path="mis-solicitudes" element={<MyRequests />} />
          <Route path="rastreo/:requestId" element={<MobileTracking />} />
          <Route path="cotizaciones" element={<QuotationsHub />} />
          <Route path="cotizar/:id" element={<QuoteInitial />} />
          <Route path="pagos" element={<PaymentMethods />} />
          <Route path="horario" element={<BusinessHours />} />
          <Route path="proyectos" element={<OurProjects />} />
          <Route path="perfil" element={<MobileProfile />} />
          <Route path="perfil/terminos" element={<MobileTerminos />} />
          <Route path="perfil/privacidad" element={<MobilePrivacidad />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<CEODashboard />} />
        <Route path="/crm" element={<ClientList />} />
        <Route path="/services" element={<ServicePipeline />} />
        <Route path="/erp" element={<FinanceDashboard />} />
        <Route path="/rrhh" element={<EmployeeList />} />
        <Route path="/inventory" element={<StockDashboard />} />
        <Route path="/marketplace" element={<AllyNetwork />} />
        <Route path="/reports" element={<CEODashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to={user.role === 'cliente' ? '/' : '/dashboard'} replace /> : <Login />} />
      <Route path="/*" element={<ProtectedRoutes />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
