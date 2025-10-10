'use client'

import { useEffect, useRef, useState } from 'react'

// Great Beginnings Day Care Center - 757 E Nerge Rd, Roselle, IL 60172
const GBDC_LOCATION = { lat: 41.9847, lng: -88.0797 }
const GBDC_ADDRESS = '757 E Nerge Rd, Roselle, IL 60172'

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function initMap() {
      try {
        // Using @googlemaps/js-api-loader 2.0.1 functional API
        const { setOptions, importLibrary } = await import('@googlemaps/js-api-loader')

        setOptions({
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
          v: 'weekly',
        })

        // Load and wait for Google Maps libraries
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const google = (await importLibrary('maps')) as any

        if (!mapRef.current) return

        // Create map
        const map = new google.Map(mapRef.current, {
          zoom: 16,
          center: GBDC_LOCATION,
          mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || undefined,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
        })

        // Use Advanced Marker if Map ID is configured, otherwise use classic Marker
        if (process.env.NEXT_PUBLIC_GOOGLE_MAP_ID) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const markerLib = (await importLibrary('marker')) as any
          new markerLib.AdvancedMarkerElement({
            map,
            position: GBDC_LOCATION,
            title: 'Great Beginnings Day Care Center - ' + GBDC_ADDRESS,
          })
        } else {
          // Fallback to classic marker if no Map ID
          new google.Marker({
            map,
            position: GBDC_LOCATION,
            title: 'Great Beginnings Day Care Center - ' + GBDC_ADDRESS,
          })
        }
      } catch (err) {
        console.error('Error loading Google Maps:', err)
        setError('Failed to load map. Please check your API key.')
      }
    }

    if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      initMap()
    } else {
      setError('Google Maps API key is not configured.')
    }
  }, [])

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">{error}</p>
      </div>
    )
  }

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-lg shadow-lg"
      aria-label="Map showing Great Beginnings Day Care Center at 757 E Nerge Rd, Roselle, IL 60172"
    />
  )
}
