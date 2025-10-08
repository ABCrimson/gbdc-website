import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
      </body>
    </html>
  )
}
