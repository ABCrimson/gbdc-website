import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://greatbeginningsdaycare.com'),
}

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  return children
}
