import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProgramCards } from '@/components/features/program-cards'
import programs from '@/data/programs.json'

export const metadata = {
  title: 'Programs | Great Beginnings Day Care Center',
  description: 'Explore our childcare programs for infants, toddlers, preschoolers, and school-age children.',
}

interface Program {
  id: string
  name: string
  ageRange: string
  description: string
  features: string[]
  schedule?: string
}

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section - 2025 Glassmorphism Design */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-daycare-blue/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-daycare-green/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Glassmorphism container */}
          <div className="container mx-auto text-center relative">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-daycare-blue via-daycare-green to-daycare-blue bg-clip-text text-transparent animate-gradient">
                Our Programs
              </h1>
              <p className="text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Age-appropriate care and education for children from 6 weeks to 12 years
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <ProgramCards />
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Program Details
            </h2>

            <div className="space-y-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl font-bold text-daycare-blue dark:text-daycare-blue mb-3">
                    {program.name}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {program.description}
                  </p>

                  {/* Schedule */}
                  {program.schedule && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Schedule
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {program.schedule}
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Features
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {program.features.map((feature: string, idx: number) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Have questions about our programs?
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="/tour"
                  className="inline-flex items-center px-6 py-3 bg-daycare-blue text-white rounded-lg hover:bg-daycare-blue/90 transition-colors"
                >
                  Schedule a Tour
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-daycare-green text-daycare-green rounded-lg hover:bg-daycare-green hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
