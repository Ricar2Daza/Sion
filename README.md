# Sion - Plataforma ERP/CRM Multi-tenant

Sion es una plataforma empresarial completa para gestión de servicios, clientes, pagos y flujos de trabajo. Diseñada con arquitectura multi-tenant para soportar múltiples empresas con aislamiento de datos.

## 📋 Características Principales

### Backend (NestJS + Prisma + PostgreSQL)
- **Autenticación JWT** con multi-tenencia (tenantId en token)
- **API RESTful** documentada con Swagger
- **Modelo de datos completo**: Clientes, Órdenes de Servicio, Pagos, Visitas, Inventario
- **Roles de usuario**: CEO, ADMIN, COMERCIAL, TECNICO, CLIENTE
- **Integración de pagos** preparada para pasarelas externas
- **Webhooks** para notificaciones externas

### Frontend Principal (React + Vite)
- **Interfaz administrativa** con paneles para diferentes roles
- **Sistema de diseño propio** (`design-system.css`)
- **Componentes móviles** optimizados (`MobileShell`, `BottomNav`)
- **Módulos completos**: Dashboard, CRM, Servicios, Inventario, RRHH, ERP

### Web Client (Next.js)
- **Aplicación ligera** para usuarios finales o portal de autogestión
- **App Router** de Next.js 15

## 🏗️ Arquitectura

```
Sion/
├── backend/              # API NestJS con Prisma ORM
├── frontend/            # Aplicación React principal
├── apps/web-client/     # Aplicación Next.js
├── deploy/k8s/          # Manifiestos Kubernetes
├── docs/               # Documentación y ADRs
└── podman-compose.yml   # Orquestación local
```

### Multi-tenencia
- **Aislamiento lógico** por `tenantId` en todas las entidades
- **TenantMembership** para gestión de usuarios y roles por empresa
- **Filtrado automático** en consultas para prevenir fugas de datos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- PostgreSQL 14+
- Podman/Docker (opcional)

### 1. Configuración Inicial
```bash
# Clonar repositorio
git clone <repo-url>
cd Sion

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install

# Instalar dependencias del web-client
cd ../apps/web-client
npm install
```

### 2. Configuración de Base de Datos
```bash
# Volver a la raíz del proyecto
cd ../..

# Configurar variables de entorno (copiar .env.example)
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Editar backend/.env con tus credenciales PostgreSQL
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/sion_db"
```

### 3. Migraciones y Seed
```bash
# Ejecutar migraciones Prisma
cd backend
npx prisma db push

# Generar cliente Prisma
npx prisma generate

# (Opcional) Ejecutar seed de datos iniciales
npx prisma db seed

# (Opcional) Abrir Prisma Studio para gestión visual
npx prisma studio
```

## 🏃‍♂️ Ejecución

### Desarrollo Local
```bash
# En terminal 1: Backend API
cd backend
npm run start:dev
# API: http://localhost:3000/api/v1
# Swagger: http://localhost:3000/api/docs

# En terminal 2: Frontend principal
cd frontend
npm run dev
# Frontend: http://localhost:5173

# En terminal 3: Web Client (opcional)
cd apps/web-client
npm run dev
# Web Client: http://localhost:3000
```

### Usando el Monorepo
```bash
# Desde la raíz del proyecto
npm run dev:api      # Inicia backend
npm run dev:web      # Inicia frontend
npm run dev:next     # Inicia web-client
```

### Producción
```bash
# Construir todos los proyectos
npm run build

# Construir solo web-client
npm run build:next
```

## 📊 Modelo de Datos

### Entidades Principales
- **Tenant**: Empresa/cliente del sistema
- **User**: Usuario con credenciales
- **TenantMembership**: Relación usuario-tenant con rol
- **Client**: Cliente de un tenant
- **ServiceOrder**: Orden de servicio con flujo de estados
- **Payment**: Transacciones de pago
- **Visit**: Visitas técnicas programadas
- **Employee**: Empleados del tenant
- **Product**: Productos en inventario

### Estados de ServiceOrder
```
SOLICITUD_RECIBIDA → VISITA_AGENDADA → PAGO_CONFIRMADO → 
INSPECCION_REALIZADA → COTIZACION_ENVIADA → PROYECTO_APROBADO → 
FINANCIACION_VALIDADA → EN_EJECUCION → EN_SUPERVISION → 
ENTREGA_FINAL → GARANTIA_ACTIVA → PROYECTO_FINALIZADO
```

## 🔧 Scripts Disponibles

### Backend (`backend/`)
```bash
npm run start:dev      # Desarrollo con hot-reload
npm run start:prod     # Producción
npm run test           # Tests unitarios
npm run test:e2e       # Tests end-to-end
npm run lint           # Linting
```

### Frontend (`frontend/`)
```bash
npm run dev            # Desarrollo
npm run build          # Construcción para producción
npm run preview        # Vista previa de producción
npm run lint           # Linting
```

### Web Client (`apps/web-client/`)
```bash
npm run dev            # Desarrollo
npm run build          # Construcción
npm run start          # Producción
npm run lint           # Linting
```

## 🐳 Docker y Kubernetes

### Docker/Podman
```bash
# Usar podman-compose para desarrollo local
podman-compose up -d

# Construir imágenes individuales
cd backend && docker build -t sion-api .
cd frontend && docker build -t sion-web .
```

### Kubernetes
Los manifiestos están en `deploy/k8s/`:
- `namespace.yaml`: Namespace para el proyecto
- `api-deployment.yaml`: Deployment del backend
- `web-deployment.yaml`: Deployment del frontend

## 📚 Documentación Adicional

- **ADRs**: `docs/adr/` - Decisiones de arquitectura
- **Seguridad**: `docs/security/` - Matriz RBAC y políticas
- **Runbook**: `docs/runbook-local.md` - Guía de operaciones locales

## 🛡️ Seguridad

- **JWT con tenantId** para aislamiento de datos
- **RBAC por tenant** con roles específicos
- **Validación de entrada** con class-validator
- **Filtrado automático** por tenant en consultas Prisma

## 🔄 Flujo de Trabajo Típico

1. **Cliente** agenda visita técnica a través de la app móvil
2. **Sistema** genera orden de servicio y cobra tarifa de visita
3. **Técnico** realiza inspección y envía cotización
4. **Cliente** aprueba proyecto y gestiona financiación
5. **Equipo** ejecuta proyecto con seguimiento en tiempo real
6. **Sistema** genera documentación final y activa garantía

## 🐛 Solución de Problemas

### Error común: Import faltante MobileStore
Si encuentras el error `Failed to resolve import "./pages/mobile/MobileStore"`:
- El componente MobileStore no existe en el proyecto actual
- Se eliminó la importación y ruta correspondiente en `frontend/src/App.jsx`
- Si necesitas funcionalidad de tienda, crea el componente correspondiente

### Base de datos no conecta
1. Verifica `DATABASE_URL` en `backend/.env`
2. Asegúrate que PostgreSQL esté corriendo
3. Ejecuta `npx prisma db push` para aplicar migraciones

## 📞 Soporte

Para reportar issues o solicitar características:
1. Revisa la documentación en `docs/`
2. Consulta los ADRs para decisiones de arquitectura
3. Verifica el estado de los servicios con los endpoints de salud

---

**Estado del Proyecto**: Desarrollo Activo  
**Última Actualización**: $(date +%Y-%m-%d)  
**Versión**: 0.1.0