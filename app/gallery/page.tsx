import { Suspense } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PhotoGallery } from '@/components/features/photo-gallery'

export const metadata = {
  title: 'Photo Gallery | Great Beginnings Day Care Center',
  description: 'View photos of our facility, classrooms, and outdoor play areas.',
}

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
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section - 2025 Glassmorphism Design */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-daycare-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-daycare-blue/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Glassmorphism container */}
          <div className="container mx-auto text-center relative">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-daycare-blue via-daycare-yellow to-daycare-green bg-clip-text text-transparent animate-gradient">
                Photo Gallery
              </h1>
              <p className="text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Take a virtual tour of our facility and see where your child will learn and play
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
              See Our Facility in Person
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Photos can only show so much. Schedule a tour to experience our warm,
              welcoming environment firsthand and meet our dedicated staff.
            </p>
            <a
              href="/tour"
              className="inline-flex items-center px-8 py-3 bg-daycare-blue text-white rounded-lg hover:bg-daycare-blue/90 transition-colors text-lg font-medium"
            >
              Schedule a Tour
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
