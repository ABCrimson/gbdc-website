'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function NotFound() {
  const t = useTranslations('errors')

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-daycare-blue/10 via-white to-daycare-green/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent animate-float">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('pageNotFound')}
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {t('pageNotFoundDescription')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-daycare-blue to-daycare-blue/90 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t('returnHome')}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-daycare-blue dark:text-daycare-green font-semibold rounded-xl border-2 border-daycare-blue dark:border-daycare-green hover:bg-daycare-blue/5 dark:hover:bg-daycare-green/5 transition-all duration-300 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('contactUs')}
          </Link>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-daycare-blue/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-daycare-green/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </div>
    </main>
  )
}
