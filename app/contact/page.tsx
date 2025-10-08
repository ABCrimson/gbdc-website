import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactForm } from '@/components/forms/contact-form'
import { GoogleMap } from '@/components/features/google-map'

export const metadata = {
  title: 'Contact Us | Great Beginnings Day Care Center',
  description: 'Get in touch with us for questions, enrollment information, or to schedule a tour.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section - 2025 Glassmorphism Design */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-daycare-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.3s' }} />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-daycare-blue/20 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Glassmorphism container */}
          <div className="container mx-auto text-center relative">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-daycare-green via-daycare-blue to-daycare-green bg-clip-text text-transparent animate-gradient">
                Contact Us
              </h1>
              <p className="text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
                We'd love to hear from you! Reach out with questions or schedule a visit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-daycare-green to-daycare-blue bg-clip-text text-transparent">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-daycare-blue dark:text-daycare-blue mb-2">
                      Address
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Great Beginnings Day Care Center
                      <br />
                      757 E Nerge Rd
                      <br />
                      Roselle, IL 60172
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="text-lg font-semibold text-daycare-blue dark:text-daycare-blue mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a
                        href="tel:+16308943440"
                        className="hover:text-daycare-blue transition-colors"
                      >
                        (630) 894-3440
                      </a>
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-lg font-semibold text-daycare-blue dark:text-daycare-blue mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a
                        href="mailto:info@greatbeginningsdaycare.com"
                        className="hover:text-daycare-blue transition-colors"
                      >
                        info@greatbeginningsdaycare.com
                      </a>
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-lg font-semibold text-daycare-blue dark:text-daycare-blue mb-2">
                      Hours of Operation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 6:00 AM - 6:00 PM
                      <br />
                      Weekends: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-xl">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Find Us
            </h2>
            <GoogleMap />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
