# Runbook — entorno local SION APP PRO

## Requisitos

- Node.js 22+ (recomendado), npm 10+
- Podman o Docker Compose
- PostgreSQL 15 (vía compose)

## Base de datos

1. Levantar infra: `podman-compose up -d postgres` (o el archivo completo con `api`/`web` cuando se construyan imágenes).
2. `DATABASE_URL` en `backend/.env` apuntando a `postgresql://sion_user:sion_password@localhost:5432/sion_db?schema=public`
3. Si la base **está vacía**: `cd backend && npx prisma migrate deploy`
4. Si `migrate deploy` falla con **P3005** (esquema no vacío sin historial Prisma): hacer baseline según [documentación Prisma](https://www.prisma.io/docs/guides/migrate/production-troubleshooting) o usar base nueva/volumen limpio.
5. Seed: `cd backend && npx prisma db seed`

## API Nest

```bash
cd backend
npm run start:dev
```

- API: `http://localhost:4000/api/v1`
- Swagger: `http://localhost:4000/api/docs`

## Frontend Vite

```bash
cd frontend
npm run dev
```

Proxy `/api` → `localhost:4000`. El cliente usa base `http://localhost:4000/api/v1` por defecto en `src/services/api.js`.

## Next.js (`apps/web-client`)

La app Next vive en `apps/web-client` **fuera de los npm workspaces** de la raíz (solo `backend` y `frontend` están en workspaces para evitar conflictos de instalación en Windows). Instalación:

```bash
cd apps/web-client
npm install
npm run dev
```

Variables: copiar `.env.example` a `.env.local`. En Docker Compose, `API_INTERNAL_URL` apunta al servicio `api` para fetch en servidor.

## Monorepo (backend + frontend)

En la raíz `Sion/`:

```bash
npm install
npm run dev:api
npm run dev:web
```

## Login demo

Tras seed: `ceo@sion.com` / `sion123` con `tenantSlug: sion` (el cliente Vite ya envía `sion` en login).
