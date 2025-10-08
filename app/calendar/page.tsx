import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Calendar } from '@/components/features/calendar'

export const metadata = {
  title: 'Calendar & Events | Great Beginnings Day Care Center',
  description: 'View our upcoming events and closure dates.',
}

export default function CalendarPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10 dark:from-daycare-blue/5 dark:to-daycare-green/5 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Calendar & Events
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed about upcoming events, holidays, and closure dates
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Upcoming Events & Closures
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We observe major holidays and close for staff training days. Please plan accordingly.
              </p>
              <Calendar />
            </div>

            {/* Hours Information */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Regular Hours
              </h2>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span>6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Weekends</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Please ensure pickup before 6:00 PM. Late pickup fees apply after closing time.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Questions About Our Schedule?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Contact us if you have questions about specific dates or need to arrange
              alternative care during closures.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-daycare-green text-white rounded-lg hover:bg-daycare-green/90 transition-colors text-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
