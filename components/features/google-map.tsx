'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

// Great Beginnings Day Care Center - 757 E Nerge Rd, Roselle, IL 60172
const GBDC_LOCATION = { lat: 41.9847, lng: -88.0797 }
const GBDC_ADDRESS = '757 E Nerge Rd, Roselle, IL 60172'

export function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function initMap() {
      try {
        // Using @googlemaps/js-api-loader 2.0.1 with new importLibrary method
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
          version: 'quarterly', // NEW: quarterly updates
          libraries: ['marker'] // NEW: Advanced Markers
        })

        // NEW: Better promise handling with importLibrary
        const { Map } = await loader.importLibrary('maps')
        const { AdvancedMarkerElement } = await loader.importLibrary('marker')

        if (!mapRef.current) return

        // Create map
        const map = new Map(mapRef.current, {
          zoom: 16,
          center: GBDC_LOCATION,
          mapId: 'GBDC_MAP', // Required for AdvancedMarkerElement
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
        })

        // Create advanced marker
        new AdvancedMarkerElement({
          map,
          position: GBDC_LOCATION,
          title: 'Great Beginnings Day Care Center - ' + GBDC_ADDRESS,
        })
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
