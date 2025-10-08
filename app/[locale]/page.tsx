'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/features/hero'
import { GoogleMap } from '@/components/features/google-map'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import programs from '@/data/programs.json'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  const featuredPrograms = programs.slice(0, 3)

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />

        {/* About Section - Warm Blue-to-Teal Gradient */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-daycare-yellow/12 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-daycare-blue/12 rounded-full blur-3xl" />
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white pb-2 leading-tight">
                {t('home.about.title')}
              </h2>
              <div className="w-20 h-1 bg-white/60 mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('home.about.paragraph1')}
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('home.about.paragraph2')}
                </p>
                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-daycare-blue hover:bg-daycare-blue/90">
                    <Link href="/programs">{t('common.viewPrograms')}</Link>
                  </Button>
                  <Button asChild className="bg-white text-daycare-green hover:bg-white/90 shadow-md">
                    <Link href="/tour">{t('common.scheduleTour')}</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <svg className="w-8 h-8 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>,
                    title: t('home.about.features.licensed.title'),
                    desc: t('home.about.features.licensed.description')
                  },
                  {
                    icon: <svg className="w-8 h-8 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
                    title: t('home.about.features.staff.title'),
                    desc: t('home.about.features.staff.description')
                  },
                  {
                    icon: <svg className="w-8 h-8 text-daycare-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
                    title: t('home.about.features.meals.title'),
                    desc: t('home.about.features.meals.description')
                  },
                  {
                    icon: <svg className="w-8 h-8 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>,
                    title: t('home.about.features.programs.title'),
                    desc: t('home.about.features.programs.description')
                  },
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-white/60 dark:border-gray-700/60 p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-white/80 dark:hover:border-gray-600/80 hover:bg-white/80 dark:hover:bg-gray-900/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-70" />
                    <div className="relative">
                      <div className="mb-3">{item.icon}</div>
                      <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs - Blue-to-Teal Gradient */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Playful background pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white pb-2 leading-tight">{t('home.featuredPrograms.title')}</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                {t('home.featuredPrograms.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredPrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-daycare-blue/5 to-daycare-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-daycare-blue/10 dark:bg-daycare-blue/20 flex items-center justify-center mb-4 group-hover:bg-daycare-blue/20 dark:group-hover:bg-daycare-blue/30 transition-colors">
                        <svg className="w-6 h-6 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-daycare-blue dark:group-hover:text-daycare-blue transition-colors">
                        {t(`programs.list.${program.id}.name`)}
                      </h3>
                      <p className="text-sm font-semibold text-daycare-green mb-3">
                        {t(`programs.list.${program.id}.ageRange`)}
                      </p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t(`programs.list.${program.id}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="group bg-white text-daycare-blue hover:bg-white/90">
                <Link href="/programs" className="flex items-center gap-2">
                  {t('home.featuredPrograms.viewAll')}
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Activities & Curriculum Section - Warm Blue-to-Teal Gradient */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 right-1/3 w-96 h-96 bg-daycare-green/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-daycare-yellow/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white pb-2 leading-tight">
                {t('home.activities.title')}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                {t('home.activities.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Nutrition & Meals */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-daycare-green/5 to-daycare-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-daycare-green/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t('home.activities.nutrition.title')}
                  </h3>
                  <ul className="space-y-3">
                    {(t.raw('home.activities.nutrition.features') as string[]).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-daycare-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Educational Programs */}
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-daycare-blue/5 to-daycare-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-daycare-blue/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t('home.activities.curriculum.title')}
                  </h3>
                  <ul className="space-y-3">
                    {(t.raw('home.activities.curriculum.features') as string[]).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-daycare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional highlight */}
            <div className="text-center bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {t('home.activities.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Nature/Landscape Hero Section - Forest Background */}
        <section
          className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(/Forest.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
                {t('home.nature.title')}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-shadow-md leading-relaxed">
                {t('home.nature.description')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="bg-white text-daycare-blue hover:bg-white/90">
                  <Link href="/tour">{t('home.nature.scheduleVisit')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-daycare-blue">
                  <Link href="/programs">{t('home.nature.explorePrograms')}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
        </section>

        {/* Location Section - Blue-to-Teal Gradient */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white pb-2 leading-tight">{t('home.location.title')}</h2>
              <p className="text-lg text-white/90">
                {t('home.location.description')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <GoogleMap />
              </div>
              <div className="mt-8 text-center space-y-4">
                <div>
                  <p className="text-xl font-bold text-white mb-2">
                    Great Beginnings Day Care Center
                  </p>
                  <p className="text-white/90">757 E Nerge Rd, Roselle, IL 60172</p>
                </div>
                <div className="flex justify-center gap-6 flex-wrap">
                  <a
                    href="tel:+16305551234"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (630) 894-3440
                  </a>
                  <a
                    href="mailto:gbdcroselle@gmail.com"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t('common.emailUs')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
