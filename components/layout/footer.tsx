'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t bg-muted/30">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-daycare-blue/50 to-transparent" />

      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
                  Great Beginnings
                </span>
                <span className="text-sm text-muted-foreground">Day Care Center</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('contactUs')}
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>757 E Nerge Rd<br />Roselle, IL 60172</p>
              <p>
                <a
                  href="tel:+16305551234"
                  className="hover:text-daycare-blue transition-colors inline-flex items-center gap-1"
                >
                  (630) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:gbdcroselle@gmail.com"
                  className="hover:text-daycare-blue transition-colors break-all"
                >
                  gbdcroselle@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('hours')}
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">{t('mondayFriday')}</p>
                <p className="text-muted-foreground">{t('time')}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{t('weekends')}</p>
                <p className="text-muted-foreground">{t('closed')}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-daycare-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t('quickLinks')}
            </h3>
            <nav className="space-y-2.5 text-sm">
              {[
                { name: t('links.programs'), href: '/programs' },
                { name: t('links.gallery'), href: '/gallery' },
                { name: t('links.calendar'), href: '/calendar' },
                { name: t('links.tour'), href: '/tour' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-daycare-blue transition-colors group"
                >
                  <span className="inline-flex items-center gap-1">
                    {link.name}
                    <svg className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Great Beginnings Day Care Center. {t('allRightsReserved')}.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-daycare-blue transition-colors">
                {t('privacyPolicy')}
              </Link>
              <Link href="/terms" className="hover:text-daycare-blue transition-colors">
                {t('termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
