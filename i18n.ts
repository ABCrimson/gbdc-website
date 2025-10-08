export const locales = ['en', 'es', 'ru', 'uk'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  uk: 'Українська',
}
