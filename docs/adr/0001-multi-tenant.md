# ADR 0001: Multi-tenant por `tenantId` en JWT y modelo de datos

## Estado

Aceptado — Fase 0.

## Contexto

SION APP PRO debe soportar múltiples empresas (tenants) con aislamiento de datos y experiencias de producto comparables a Odoo/SAP multi-compañía.

## Decisión

- Cada fila de negocio (`Client`, `ServiceOrder`, `Payment`, `Visit`, etc.) incluye `tenantId` (UUID) referenciando `Tenant`.
- Los usuarios se vinculan a tenants mediante `TenantMembership` con rol (`TenantRole`) por tenant.
- El JWT de acceso incluye `tenantId` y `role` activos en el login; las consultas mutan y leen siempre filtrando por ese `tenantId` desde el usuario autenticado.

## Consecuencias

- Obligatorio auditar que ningún `findMany` / `findFirst` omita `tenantId` (riesgo de fuga cross-tenant).
- Próximo paso recomendado: middleware Prisma o extensión que inyecte `tenantId` por request.
