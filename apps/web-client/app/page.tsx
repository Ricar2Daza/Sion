import { fetchTenantsPublic } from '@/lib/api';

export default async function HomePage() {
  let tenants: { id: string; name: string; slug: string }[] = [];
  let error: string | null = null;
  try {
    tenants = await fetchTenantsPublic();
  } catch (e) {
    error = e instanceof Error ? e.message : 'Error de conexión';
  }

  return (
    <main>
      <h1>Sion Avanzada Proyectos</h1>
      <p>
        Portal Next.js del monorepo SION APP PRO. API base:{' '}
        <code>{process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}</code>
      </p>
      <div className="card">
        <h2 style={{ marginTop: 0, fontSize: '1.1rem', color: 'var(--sion-primary)' }}>Tenants públicos (demo API)</h2>
        {error && <p role="alert">No se pudo cargar: {error}</p>}
        {!error && (
          <ul>
            {tenants.map((t) => (
              <li key={t.id}>
                <strong>{t.name}</strong> — <code>{t.slug}</code>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
