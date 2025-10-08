import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { SkipLink } from '@/components/ui/skip-link'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: 'Great Beginnings Day Care',
    template: '%s | Great Beginnings Day Care',
  },
  description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL. Nurturing environment with experienced staff, educational programs, and flexible schedules.',
  keywords: ['daycare', 'childcare', 'preschool', 'Roselle IL', 'infant care', 'toddler program', 'before and after school care'],
  authors: [{ name: 'Great Beginnings Day Care' }],
  icons: {
    icon: '/DaycareIcon.webp',
    shortcut: '/DaycareIcon.webp',
    apple: '/DaycareIcon.webp',
  },
  openGraph: {
    title: 'Great Beginnings Day Care',
    description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL',
    url: 'https://greatbeginningsdaycare.com',
    siteName: 'Great Beginnings Day Care',
    locale: 'en_US',
    type: 'website',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <SkipLink />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#fff',
                  color: '#333',
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                },
                success: {
                  iconTheme: {
                    primary: 'oklch(70% 0.18 145)',
                    secondary: '#fff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
