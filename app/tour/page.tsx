import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { TourForm } from '@/components/forms/tour-form'

export const metadata = {
  title: 'Schedule a Tour | Great Beginnings Day Care Center',
  description: 'Book a tour of our facility and see why families trust us with their children.',
}

export default function TourPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section - 2025 Glassmorphism Design */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-daycare-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-daycare-green/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Glassmorphism container */}
          <div className="container mx-auto text-center relative">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-daycare-yellow via-daycare-green to-daycare-blue bg-clip-text text-transparent animate-gradient">
                Schedule a Tour
              </h1>
              <p className="text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Experience our facility firsthand and meet our caring, professional staff
              </p>
            </div>
          </div>
        </section>

        {/* Tour Information & Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Tour Information */}
              <div className="bg-white dark:bg-gray-900/40 border-2 border-gray-200 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-daycare-yellow to-daycare-green bg-clip-text text-transparent">
                  What to Expect
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-daycare-blue dark:text-daycare-blue mb-3">
                      Duration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Tours typically last 30 minutes, giving you plenty of time to see our
                      facility and ask questions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-daycare-blue dark:text-daycare-blue mb-3">
                      What You'll See
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
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
                        All age-appropriate classrooms
                      </li>
                      <li className="flex items-start">
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
                        Indoor and outdoor play areas
                      </li>
                      <li className="flex items-start">
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
                        Learning and activity centers
                      </li>
                      <li className="flex items-start">
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
                        Meal preparation and dining areas
                      </li>
                      <li className="flex items-start">
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
                        Safety and security features
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-daycare-blue dark:text-daycare-blue mb-3">
                      Meet Our Team
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      You'll have the opportunity to meet our experienced teachers and staff,
                      and learn about their qualifications and approach to childcare.
                    </p>
                  </div>

                  <div className="bg-daycare-yellow/10 dark:bg-daycare-yellow/5 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Note:</strong> Tours are available Monday through Friday during
                      regular business hours. We recommend scheduling at least 24 hours in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Booking Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-daycare-green to-daycare-blue bg-clip-text text-transparent">
                  Book Your Tour
                </h2>
                <div className="bg-white dark:bg-gray-900/60 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl">
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
              Have Questions Before Booking?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Feel free to call us or send a message if you'd like to discuss your needs
              before scheduling a tour.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+16308943440"
                className="inline-flex items-center px-8 py-3 bg-daycare-blue text-white rounded-lg hover:bg-daycare-blue/90 transition-colors text-lg font-medium"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-daycare-green text-daycare-green rounded-lg hover:bg-daycare-green hover:text-white transition-colors text-lg font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
