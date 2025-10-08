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
      <main id="main-content" className="flex-1">
        {/* Hero Section - Blue-to-Teal Gradient */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Content container */}
          <div className="container mx-auto text-center relative">
            <div className="p-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Calendar & Events
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Stay informed about upcoming events, holidays, and closure dates
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section - Blue-to-Teal Gradient */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 -left-1/4 w-80 h-80 bg-daycare-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 -right-1/4 w-80 h-80 bg-daycare-green/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Upcoming Events & Closures Card */}
            <div className="group bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl mb-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-daycare-blue/40">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-daycare-blue/10 dark:bg-daycare-blue/20 transition-colors group-hover:bg-daycare-blue/20 dark:group-hover:bg-daycare-blue/30">
                  <svg className="w-6 h-6 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
                  Upcoming Events & Closures
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                We observe major holidays and close for staff training days. Please plan accordingly.
              </p>
              <Calendar />
            </div>

            {/* Regular Hours Card */}
            <div className="group bg-white dark:bg-gray-900/85 dark:backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-daycare-green/40">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-daycare-green/10 dark:bg-daycare-green/20 transition-colors group-hover:bg-daycare-green/20 dark:group-hover:bg-daycare-green/30">
                  <svg className="w-6 h-6 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-daycare-green to-daycare-blue bg-clip-text text-transparent">
                  Regular Hours
                </h2>
              </div>

              {/* Hours grid */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-daycare-blue/5 dark:bg-daycare-blue/10 border border-daycare-blue/20">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-daycare-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900 dark:text-white">Monday - Friday</span>
                  </div>
                  <span className="text-lg font-bold text-daycare-blue">6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-gray-900 dark:text-white">Weekends</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-400">Closed</span>
                </div>
              </div>

              {/* Notice */}
              <div className="mt-6 p-4 rounded-xl bg-daycare-yellow/10 dark:bg-daycare-yellow/20 border border-daycare-yellow/30">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-daycare-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Please ensure pickup before 6:00 PM. Late pickup fees apply after closing time.
                  </p>
                </div>
              </div>
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
