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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10 dark:from-daycare-blue/5 dark:to-daycare-green/5 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Photo Gallery
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Take a virtual tour of our facility and see where your child will learn and play
            </p>
          </div>
        </section>

        {/* Gallery Grid with Suspense */}
        <section className="py-16 px-4">
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
