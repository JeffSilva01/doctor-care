import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans as DmSans } from 'next/font/google'
import { Header } from './components/header'

const dmSans = DmSans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veterinária Kennedy Gomes',
  description: 'Atendimento veterinário a domicilio de cães e gatos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="antialiased" lang="pt-BR">
      <body className={dmSans.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
