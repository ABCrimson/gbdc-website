import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/features/hero'
import { GoogleMap } from '@/components/features/google-map'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import programs from '@/data/programs.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Great Beginnings Day Care Center | Quality Childcare in Roselle, IL',
  description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL. Experienced staff, educational programs, and flexible schedules. Schedule a tour today!',
  keywords: ['daycare', 'childcare', 'preschool', 'Roselle IL', 'infant care', 'toddler care', 'school age care'],
  openGraph: {
    title: 'Great Beginnings Day Care Center',
    description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL',
    url: 'https://greatbeginningsdaycare.com',
    siteName: 'Great Beginnings Day Care Center',
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  // Show only first 2 programs as preview
  const featuredPrograms = programs.slice(0, 2)

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        {/* About Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Welcome to Great Beginnings
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              For over 20 years, we've been providing quality childcare in Roselle, Illinois.
              Our experienced staff creates a nurturing environment where children can learn,
              grow, and thrive.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We offer flexible schedules, educational programs, and a safe, engaging environment
              for children from 6 weeks to 12 years old.
            </p>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-daycare-blue dark:text-daycare-blue mb-2">
                    {program.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                    {program.ageRange}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/programs">View All Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Visit Us
            </h2>
            <div className="max-w-4xl mx-auto">
              <GoogleMap />
              <div className="mt-6 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Great Beginnings Day Care Center</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400">757 E Nerge Rd, Roselle, IL 60172</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  <a href="tel:+16305551234" className="hover:text-daycare-blue transition-colors">
                    (630) 555-1234
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
