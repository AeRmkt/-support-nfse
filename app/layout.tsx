import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Support Soluções Inteligentes — Gateway de Emissão de NFS-e',
  description: 'Conecte seu sistema às prefeituras com rapidez, segurança e conformidade fiscal. Gateway de NFS-e para software houses e plataformas SaaS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
