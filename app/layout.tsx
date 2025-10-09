import type { ReactNode } from 'react'
import './globals.css'

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  return children
}
