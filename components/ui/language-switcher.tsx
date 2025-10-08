'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { locales, localeNames } from '@/i18n.ts'

const languages = [
  { code: 'en', name: localeNames.en, flag: '🇺🇸' },
  { code: 'es', name: localeNames.es, flag: '🇪🇸' },
  { code: 'ru', name: localeNames.ru, flag: '🇷🇺' },
  { code: 'uk', name: localeNames.uk, flag: '🇺🇦' },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params?.locale as string || 'en'

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className="relative group">
      <Button variant="ghost" size="sm" className="gap-2" disabled={isPending}>
        <span>
          {languages.find((lang) => lang.code === currentLocale)?.flag || '🇺🇸'}
        </span>
        <span className="hidden sm:inline">
          {currentLocale.toUpperCase()}
        </span>
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            disabled={isPending}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-gray-900 dark:text-white disabled:opacity-50 ${
              currentLocale === lang.code
                ? 'bg-gray-50 dark:bg-gray-700'
                : ''
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
