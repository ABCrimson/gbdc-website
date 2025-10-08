'use client'

import { Suspense } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PhotoGallery } from '@/components/features/photo-gallery'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(9)].map((_, idx) => (
        <div
          key={idx}
          className="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
        />
      ))}
    </div>
  )
}

export default function GalleryPage() {
  const t = useTranslations('gallery')

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section - Blue-to-Teal Gradient */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
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

        {/* Gallery Grid with Suspense - Blue-to-Teal Gradient */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          <div className="container mx-auto">
            <Suspense fallback={<GallerySkeleton />}>
              <PhotoGallery />
            </Suspense>
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
            <Link
              href="/tour"
              className="inline-flex items-center px-8 py-3 bg-daycare-blue text-white rounded-lg hover:bg-daycare-blue/90 transition-colors text-lg font-medium"
            >
              {t('cta.button')}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
