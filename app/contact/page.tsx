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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10 dark:from-daycare-blue/5 dark:to-daycare-green/5 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out with questions or schedule a visit.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
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
                        href="tel:+16305551234"
                        className="hover:text-daycare-blue transition-colors"
                      >
                        (630) 555-1234
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
