'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import programs from '@/data/programs.json'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

// Color theme for each program
const programColors: Record<string, string> = {
  'infants': '#EC4899',           // Pink
  'toddlers': '#8B5CF6',          // Purple
  'twoYearOlds': '#3B82F6',       // Blue
  'threeYearOlds': '#6366F1',     // Indigo
  'fourFiveYearOlds': '#06B6D4',  // Cyan
  'beforeAfterSchool': '#F97316'  // Orange
}

export default function ProgramsPage() {
  const t = useTranslations('programs')

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section - Blue-to-Teal Gradient */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Content container */}
          <div className="container mx-auto text-center relative">
            <div className="p-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                {t('title')}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Information - Blue-to-Teal Gradient Background */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-daycare-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-daycare-green/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
              {t('detailsTitle')}
            </h2>
            <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
              {t('detailsSubtitle')}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    borderTopWidth: '4px',
                    borderTopColor: programColors[program.id] || '#3B82F6'
                  }}
                >
                  {/* Gradient accent border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-daycare-blue/5 to-daycare-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    {/* Header with age range badge */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
                        {t(`list.${program.id}.name`)}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-daycare-green/10 text-daycare-green rounded-full">
                        {t(`list.${program.id}.ageRange`)}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {t(`list.${program.id}.description`)}
                    </p>

                    {/* Pricing */}
                    {program.pricing && (
                      <div className="mb-6 p-4 rounded-xl bg-daycare-green/5 dark:bg-daycare-green/10 border border-daycare-green/20">
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {t('tuition')}
                          </h4>
                        </div>
                        <div className="ml-7 space-y-1">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-medium">{t('weeklyRate')}:</span> {program.pricing.weeklyRate}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-medium">{t('dailyRate')}:</span> {program.pricing.dailyRate}
                          </p>
                          {program.pricing.note && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 italic mt-2">
                              {program.pricing.note}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Schedule */}
                    {program.schedule && (
                      <div className="mb-6 p-4 rounded-xl bg-daycare-blue/5 dark:bg-daycare-blue/10 border border-daycare-blue/20">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {t('schedule')}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 ml-7">
                          {program.schedule}
                        </p>
                      </div>
                    )}

                    {/* Features with checkmarks */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {t('features')}
                        </h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {(t.raw(`list.${program.id}.features`) as string[]).map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <svg className="w-4 h-4 text-daycare-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <p className="text-lg text-white/90 mb-6">
                {t('cta.title')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/tour"
                  className="inline-flex items-center px-6 py-3 bg-white text-daycare-blue rounded-lg hover:bg-white/90 transition-colors shadow-lg font-medium"
                >
                  {t('cta.scheduleTour')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-daycare-green rounded-lg hover:bg-white/90 transition-colors shadow-lg font-medium"
                >
                  {t('cta.contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
