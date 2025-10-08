export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981]">
      <div className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="h-12 w-64 bg-white/20 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-white/10 rounded animate-pulse mx-auto"></div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
            <div className="aspect-video bg-white/20 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
