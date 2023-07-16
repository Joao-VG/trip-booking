import './globals.css'
import {  Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','800','900'] })

export const metadata = {
  title: 'Trip Booking',
  description: 'Trip booking system for a travel agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h1>Barra de Navegação</h1>
        
        {children}</body>
    </html>
  )
}
