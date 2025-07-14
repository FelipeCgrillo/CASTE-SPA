import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import Sidebar from '../components/Sidebar';

export const metadata: Metadata = {
  title: 'CASTE SPA - Servicios Integrales de Informática',
  description: 'Automatizamos procesos públicos y privados. Desde la región más austral del mundo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
} 