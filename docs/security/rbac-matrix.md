# Matriz RBAC (Fase 0)

Roles modelados en `TenantMembership.role` (`TenantRole` enum Prisma).

| Rol | CRM clientes | Órdenes servicio | Pagos intent visita | Agendar visita |
|-----|----------------|------------------|---------------------|----------------|
| CEO | Sí | Sí | Sí | Sí |
| ADMIN | Sí | Sí | Sí | Sí |
| COMERCIAL | Sí | Sí | Sí | Sí |
| TECNICO | Lectura implícita vía API (ajustar en fase campo) | Pendiente granular | Pendiente | Pendiente |
| CLIENTE | Solo si se restringe en fase 1 | Sí (propias en evolución) | Sí | Sí |

**Implementación actual:** los endpoints de CRM, órdenes, pagos y visitas usan `JwtAuthGuard` sin `RolesGuard` granular en todos los handlers; CEO/ADMIN tienen bypass en `RolesGuard` cuando se aplique. La matriz documenta el **objetivo**; el endurecimiento por ruta es trabajo Fase 1.

## Permisos JWT

- `tenantId` y `role` en el access token.
- Refresh token atado a `userId` + `tenantId`.
