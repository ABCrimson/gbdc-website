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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10 dark:from-daycare-blue/5 dark:to-daycare-green/5 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Programs
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Age-appropriate care and education for children from 6 weeks to 12 years
            </p>
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
