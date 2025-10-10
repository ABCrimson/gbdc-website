import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { SkipLink } from '@/components/ui/skip-link'
import { ErrorBoundary } from '@/components/error-boundary'
import { routing } from '@/i18n/routing'
import '../globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://greatbeginningsdaycare.com'),
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
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Great Beginnings Day Care - Quality childcare for ages 6 weeks to 12 years',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Beginnings Day Care',
    description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL',
    images: ['/opengraph-image'],
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
  type Locale = (typeof routing.locales)[number]
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ChildCare',
              name: 'Great Beginnings Day Care Center',
              description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL',
              url: 'https://greatbeginningsdaycare.com',
              telephone: '(630) 894-3440',
              email: 'gbdcroselle@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '757 E Nerge Rd',
                addressLocality: 'Roselle',
                addressRegion: 'IL',
                postalCode: '60172',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 41.9847,
                longitude: -88.0797,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '06:00',
                  closes: '18:00',
                },
              ],
              priceRange: '$$',
              image: 'https://greatbeginningsdaycare.com/DaycareIcon.webp',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '50',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <SkipLink />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
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
        <Analytics />
      </body>
    </html>
  )
}
