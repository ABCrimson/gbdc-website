export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-daycare-blue/5 via-background to-daycare-green/5">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-daycare-blue/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-daycare-blue rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gradient-to-r from-daycare-blue to-daycare-green rounded animate-pulse mx-auto"></div>
          <div className="h-3 w-24 bg-muted rounded animate-pulse mx-auto" style={{ animationDelay: '150ms' }}></div>
        </div>
      </div>
    </div>
  )
}
