import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/features/hero'
import { GoogleMap } from '@/components/features/google-map'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import programs from '@/data/programs.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Great Beginnings Day Care Center | Quality Childcare in Roselle, IL',
  description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL. Experienced staff, educational programs, and flexible schedules. Schedule a tour today!',
  keywords: ['daycare', 'childcare', 'preschool', 'Roselle IL', 'infant care', 'toddler care', 'school age care'],
  openGraph: {
    title: 'Great Beginnings Day Care Center',
    description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL',
    url: 'https://greatbeginningsdaycare.com',
    siteName: 'Great Beginnings Day Care Center',
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  const featuredPrograms = programs.slice(0, 3)

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
                Welcome to Great Beginnings
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-daycare-blue to-daycare-green mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For over <span className="font-bold text-daycare-blue">20 years</span>, we've been providing quality childcare in Roselle, Illinois.
                  Our experienced staff creates a nurturing environment where children can learn, grow, and thrive.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer flexible schedules, educational programs, and a safe, engaging environment
                  for children from 6 weeks to 12 years old.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-daycare-blue hover:bg-daycare-blue/90">
                    <Link href="/programs">View Programs</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-daycare-green text-daycare-green hover:bg-daycare-green hover:text-white">
                    <Link href="/tour">Schedule Tour</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <svg className="w-8 h-8 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>,
                    title: 'Licensed & Certified',
                    desc: 'State approved facility'
                  },
                  {
                    icon: <svg className="w-8 h-8 text-daycare-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
                    title: 'Experienced Staff',
                    desc: '20+ years combined'
                  },
                  {
                    icon: <svg className="w-8 h-8 text-daycare-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
                    title: 'Nutritious Meals',
                    desc: 'Fresh daily menu'
                  },
                  {
                    icon: <svg className="w-8 h-8 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>,
                    title: 'Educational Programs',
                    desc: 'Age-appropriate curriculum'
                  },
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Age-appropriate care and education tailored to your child's developmental stage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredPrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="group card animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-xl bg-daycare-blue/10 flex items-center justify-center mb-4 group-hover:bg-daycare-blue/20 transition-colors">
                      <svg className="w-5 h-5 text-daycare-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-daycare-blue transition-colors">
                      {program.name}
                    </h3>
                    <p className="text-sm font-semibold text-daycare-green mb-3">
                      {program.ageRange}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/programs" className="flex items-center gap-2">
                  View All Programs
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us</h2>
              <p className="text-lg text-muted-foreground">
                Come see our beautiful facility and meet our caring staff
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <GoogleMap />
              </div>
              <div className="mt-8 text-center space-y-4">
                <div>
                  <p className="text-xl font-bold text-foreground mb-2">
                    Great Beginnings Day Care Center
                  </p>
                  <p className="text-muted-foreground">757 E Nerge Rd, Roselle, IL 60172</p>
                </div>
                <div className="flex justify-center gap-6 flex-wrap">
                  <a
                    href="tel:+16305551234"
                    className="inline-flex items-center gap-2 text-daycare-blue hover:text-daycare-blue/80 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (630) 555-1234
                  </a>
                  <a
                    href="mailto:info@greatbeginningsdaycare.com"
                    className="inline-flex items-center gap-2 text-daycare-green hover:text-daycare-green/80 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
