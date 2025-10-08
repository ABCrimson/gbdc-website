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

        {/* Detailed Information - Redesigned with Modern Styling */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-daycare-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-daycare-green/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
              Program Details
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive information about each of our carefully designed programs
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/60 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient accent border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-daycare-blue/5 to-daycare-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    {/* Header with age range badge */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
                        {program.name}
                      </h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-daycare-green/10 text-daycare-green rounded-full">
                        {program.ageRange}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Schedule */}
                    {program.schedule && (
                      <div className="mb-6 p-4 rounded-xl bg-daycare-blue/5 dark:bg-daycare-blue/10 border border-daycare-blue/20">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Schedule
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
                          Features
                        </h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {program.features.map((feature: string, idx: number) => (
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
