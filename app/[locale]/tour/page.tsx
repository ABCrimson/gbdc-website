'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { TourForm } from '@/components/forms/tour-form'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function TourPage() {
  const t = useTranslations('tour')

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section - Forest Background */}
        <section
          className="relative py-24 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/Forest.webp)'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content container */}
          <div className="container mx-auto text-center relative">
            <div className="p-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white text-shadow-xl">
                {t('title')}
              </h1>
              <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed text-shadow-lg">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Tour Information & Form - Blue-to-Teal Gradient */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Tour Information */}
              <div className="bg-white dark:bg-gray-900/75 border-2 border-gray-200 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-daycare-yellow to-daycare-green bg-clip-text text-transparent">
                  {t('whatToExpect.title')}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-daycare-blue dark:text-daycare-blue mb-3">
                      {t('whatToExpect.duration.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t('whatToExpect.duration.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-daycare-blue dark:text-daycare-blue mb-3">
                      {t('whatToExpect.whatYouSee.title')}
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {(t.raw('whatToExpect.whatYouSee.items') as string[]).map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-daycare-green mr-2 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-daycare-blue dark:text-daycare-blue mb-3">
                      {t('whatToExpect.meetTeam.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t('whatToExpect.meetTeam.description')}
                    </p>
                  </div>

                  <div className="bg-daycare-yellow/10 dark:bg-daycare-yellow/5 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>{t('whatToExpect.note').split(':')[0]}:</strong> {t('whatToExpect.note').split(':')[1]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Booking Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-daycare-green to-daycare-blue bg-clip-text text-transparent">
                  {t('bookTour')}
                </h2>
                <div className="bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl">
                  <TourForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t('cta.description')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+16308943440"
                className="inline-flex items-center px-8 py-3 bg-daycare-blue text-white rounded-lg hover:bg-daycare-blue/90 transition-colors text-lg font-medium"
              >
                {t('cta.callUs')}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-daycare-green text-daycare-green rounded-lg hover:bg-daycare-green hover:text-white transition-colors text-lg font-medium"
              >
                {t('cta.contactUs')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
