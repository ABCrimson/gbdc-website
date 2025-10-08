import type { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import './globals.css'

type RootLayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// Since we have the `[locale]` segment, the default locale is used for
// all pages that don't match a locale prefix.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  return children
}
