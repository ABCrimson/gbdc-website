/**
 * Loading state for calendar page
 */

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
        <p className="mt-4 text-white text-lg font-medium">Loading Calendar...</p>
      </div>
    </div>
  )
}
