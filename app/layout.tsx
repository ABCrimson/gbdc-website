import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Great Beginnings Day Care',
  description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
