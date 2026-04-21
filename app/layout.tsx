import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Velhio — Tartas de Queso Artesanales · Madrid',
  description:
    'Tartas de queso artesanales muy cremosas en Madrid. Elaboradas a mano con receta familiar desde Uruguay. Pedidos al 661 764 709.',
  openGraph: {
    title: 'Velhio — Tartas de Queso Artesanales',
    description: 'Una cucharada y ya no hay vuelta atrás.',
    url: 'https://velhio.es',
    siteName: 'Velhio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
