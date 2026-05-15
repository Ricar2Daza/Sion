const apiBase =
  process.env.API_INTERNAL_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:4000/api/v1';

export async function fetchTenantsPublic() {
  const res = await fetch(`${apiBase}/tenants/public`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<{ id: string; name: string; slug: string }[]>;
}
