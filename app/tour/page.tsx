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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10 dark:from-daycare-blue/5 dark:to-daycare-green/5 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Schedule a Tour
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Experience our facility firsthand and meet our caring, professional staff
            </p>
          </div>
        </section>

        {/* Tour Information & Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Tour Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
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
                          className="w-6 h-6 text-daycare-green mr-2 flex-shrink-0"
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
                          className="w-6 h-6 text-daycare-green mr-2 flex-shrink-0"
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
                          className="w-6 h-6 text-daycare-green mr-2 flex-shrink-0"
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
                          className="w-6 h-6 text-daycare-green mr-2 flex-shrink-0"
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
                          className="w-6 h-6 text-daycare-green mr-2 flex-shrink-0"
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Book Your Tour
                </h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
                href="tel:+16305551234"
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
