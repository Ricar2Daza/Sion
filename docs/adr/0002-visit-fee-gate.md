# ADR 0002: Puerta de pago — visita técnica 80.000 COP

## Estado

Aceptado — Fase 0.

## Contexto

Regla de negocio no negociable: sin pago de la visita técnica no hay visita agendada ni avance a inspección/cotización formal.

## Decisión

- Concepto de cobro `PaymentType.TECHNICAL_VISIT_FEE` con monto fijo **80.000 COP** (`TECHNICAL_VISIT_FEE_COP` en código).
- `VisitsService.schedule` exige un `Payment` asociado a la misma orden con `status = CONFIRMED` y `type = TECHNICAL_VISIT_FEE` antes de crear `Visit` y pasar `ServiceOrder` a `VISIT_SCHEDULED`.
- Webhook Wompi (stub controlado) puede marcar el pago como `CONFIRMED` mediante `POST /api/v1/webhooks/wompi` con verificación opcional HMAC (`WOMPI_WEBHOOK_SECRET`).

## Consecuencias

- Integración PSP real debe mapear referencias externas a `Payment.id` o campo dedicado y mantener idempotencia.
- Tests de regresión obligatorios para el error `VISIT_FEE_UNPAID` / 422.
