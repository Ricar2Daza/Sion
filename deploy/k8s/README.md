# Plantilla Kubernetes (ejemplo)

Archivos en esta carpeta son **punto de partida**, no un manifiesto de producción completo.

- `namespace.yaml`: namespace `sion`.
- `api-deployment.yaml`: Deployment + Service del API Nest (imagen `sion-api:latest` debe existir en el registry).
- `web-deployment.yaml`: Deployment + Service de Next.js standalone.

Antes de aplicar:

1. Crear `Secret` `sion-secrets` con `database-url` y `jwt-secret`.
2. Ajustar imágenes y `NEXT_PUBLIC_API_URL` al dominio real detrás del Ingress.
3. Añadir Ingress, HPA, PDB y network policies según política de la organización.

```bash
kubectl apply -f deploy/k8s/namespace.yaml
kubectl apply -f deploy/k8s/api-deployment.yaml
kubectl apply -f deploy/k8s/web-deployment.yaml
```
