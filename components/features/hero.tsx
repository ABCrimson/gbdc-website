import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative py-20 px-4 md:py-32 bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10 dark:from-daycare-blue/5 dark:to-daycare-green/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-daycare-yellow/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-daycare-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">
          Great Beginnings Day Care
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-gray-700 dark:text-gray-300 font-medium animate-slide-up">
          Quality childcare for ages 6 weeks to 12 years
        </p>

        <p className="text-base md:text-lg mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up">
          Nurturing environment with experienced staff, educational programs, and flexible schedules in Roselle, IL
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
          <Button
            asChild
            size="lg"
            className="bg-daycare-blue hover:bg-daycare-blue/90 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/tour">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule a Tour
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-daycare-green text-daycare-green hover:bg-daycare-green hover:text-white dark:border-daycare-green dark:text-daycare-green shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/contact">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-daycare-blue dark:text-daycare-blue mb-2">
                20+
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-daycare-green dark:text-daycare-green mb-2">
                100+
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Happy Families
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-daycare-yellow dark:text-daycare-yellow mb-2">
                4.9★
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Google Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
