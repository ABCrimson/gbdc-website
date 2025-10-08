export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981]">
      {/* Hero skeleton */}
      <div className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="h-12 w-64 bg-white/20 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-white/10 rounded animate-pulse mx-auto"></div>
        </div>
      </div>

      {/* Calendar skeleton */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-900/85 rounded-2xl p-8 mb-8 animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-64 w-full bg-gray-200 rounded"></div>
          </div>

          <div className="bg-white dark:bg-gray-900/85 rounded-2xl p-8 animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-16 w-full bg-gray-200 rounded"></div>
              <div className="h-16 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
