'use client'

import { useTranslations } from 'next-intl'

export function SkipLink() {
  const t = useTranslations('accessibility')

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-daycare-blue focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-daycare-blue/50 transition-all"
    >
      {t('skipToMain')}
    </a>
  )
}
