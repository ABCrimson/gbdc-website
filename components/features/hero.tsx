import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden bg-gradient-to-br from-daycare-blue/5 via-background to-daycare-green/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient Orbs - Reduced size */}
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-daycare-yellow/15 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-daycare-blue/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-daycare-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto relative z-10 text-center max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-card border shadow-sm animate-slide-down">
          <div className="w-2 h-2 bg-daycare-green rounded-full animate-pulse" />
          <span className="text-sm font-medium">Trusted Childcare Since 2004</span>
        </div>

        {/* Main Heading with Gradient Text */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-slide-up">
          <span className="block bg-gradient-to-r from-daycare-blue via-daycare-green to-daycare-blue bg-clip-text text-transparent animate-gradient">
            Great Beginnings
          </span>
          <span className="block text-foreground mt-2">Day Care Center</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-muted-foreground font-medium animate-slide-up" style={{ animationDelay: '100ms' }}>
          Quality childcare for ages <span className="text-daycare-blue font-bold">6 weeks to 12 years</span>
        </p>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
          Nurturing environment with experienced staff, educational programs, and flexible schedules in <span className="font-semibold text-foreground">Roselle, IL</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <Button
            asChild
            size="lg"
            className="bg-daycare-blue hover:bg-daycare-blue/90 text-white shadow-lg hover:shadow-glow transition-all duration-300 group"
          >
            <Link href="/tour" className="flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
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
            className="border-2 border-daycare-green text-daycare-green hover:bg-daycare-green hover:text-white shadow-lg transition-all duration-300 group"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
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

        {/* Trust Indicators */}
        <div className="pt-12 border-t border-border/50 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {[
              { number: '20+', label: 'Years of Experience', color: 'text-daycare-blue', icon: '🏆' },
              { number: '200+', label: 'Happy Families', color: 'text-daycare-green', icon: '👨‍👩‍👧‍👦' },
              { number: '4.9★', label: 'Google Rating', color: 'text-daycare-yellow', icon: '⭐' },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  item.color === 'text-daycare-blue' ? 'from-daycare-blue/50 to-transparent' :
                  item.color === 'text-daycare-green' ? 'from-daycare-green/50 to-transparent' :
                  'from-daycare-yellow/50 to-transparent'
                }`} />

                {/* Content */}
                <div className="relative">
                  <div className="text-4xl mb-2 animate-bounce-slow">{item.icon}</div>
                  <div className={`text-4xl md:text-5xl font-bold ${item.color} mb-2 transition-transform duration-300 group-hover:scale-110`}>
                    {item.number}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
