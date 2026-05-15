import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sion Avanzada — Portal',
  description: 'SION APP PRO — Cliente y servicios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
