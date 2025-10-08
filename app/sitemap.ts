import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://greatbeginningsdaycare.com'

  const pages = ['', '/programs', '/gallery', '/calendar', '/contact', '/tour']
  const priorities = {
    '': 1,
    '/programs': 0.9,
    '/gallery': 0.8,
    '/calendar': 0.8,
    '/contact': 0.7,
    '/tour': 0.9,
  }

  // Generate sitemap entries for all locales
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priorities[page as keyof typeof priorities] || 0.5,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  )
}
