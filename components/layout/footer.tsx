import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-daycare-blue mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Great Beginnings Day Care Center</p>
              <p>757 E Nerge Rd</p>
              <p>Roselle, IL 60172</p>
              <p className="mt-3">
                <a
                  href="tel:+16305551234"
                  className="hover:text-daycare-blue transition-colors"
                >
                  (630) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@greatbeginningsdaycare.com"
                  className="hover:text-daycare-blue transition-colors"
                >
                  info@greatbeginningsdaycare.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-daycare-blue mb-4">
              Hours of Operation
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium">Monday - Friday</p>
              <p>6:00 AM - 6:00 PM</p>
              <p className="mt-3 font-medium">Weekends</p>
              <p>Closed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-daycare-blue mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/programs"
                className="block text-gray-600 hover:text-daycare-blue transition-colors"
              >
                Our Programs
              </Link>
              <Link
                href="/gallery"
                className="block text-gray-600 hover:text-daycare-blue transition-colors"
              >
                Photo Gallery
              </Link>
              <Link
                href="/calendar"
                className="block text-gray-600 hover:text-daycare-blue transition-colors"
              >
                Calendar & Events
              </Link>
              <Link
                href="/tour"
                className="block text-gray-600 hover:text-daycare-blue transition-colors"
              >
                Schedule a Tour
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {currentYear} Great Beginnings Day Care Center. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-daycare-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-daycare-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
