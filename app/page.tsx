import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:py-32 bg-gradient-to-br from-daycare-blue/10 to-daycare-green/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Great Beginnings Day Care Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Quality childcare for ages 6 weeks to 12 years
            </p>
            <p className="text-lg mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nurturing environment with experienced staff, educational programs, and flexible schedules in Roselle, IL
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-daycare-blue hover:bg-daycare-blue/90">
                <Link href="/tour">Schedule a Tour</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold mb-2">Infant Care</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Loving care for babies 6 weeks to 18 months
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Preschool</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Educational programs for ages 3-5 years
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-semibold mb-2">School-Age Care</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Before & after school care for ages 5-12
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
