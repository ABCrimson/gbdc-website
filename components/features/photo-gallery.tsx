'use client'

import { useEffect, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import Image from 'next/image'

interface Photo {
  url: string
  attribution: string
}

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPhotos() {
      try {
        // Using @googlemaps/js-api-loader 2.0.1 with new importLibrary
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
          version: 'quarterly'
        })

        // NEW: Import specific libraries
        const { PlacesService } = await loader.importLibrary('places')
        const { Map } = await loader.importLibrary('maps')

        // PlacesService requires a map element
        const mapDiv = document.createElement('div')
        const map = new Map(mapDiv)
        const service = new PlacesService(map)

        // Get place details with photos
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID

        if (!placeId) {
          throw new Error('Place ID not configured')
        }

        service.getDetails(
          {
            placeId: placeId,
            fields: ['photos', 'name']
          },
          (place, status) => {
            if (status === 'OK' && place?.photos) {
              const photoUrls = place.photos.slice(0, 12).map(photo => ({
                url: photo.getUrl({ maxWidth: 1200, maxHeight: 800 }),
                attribution: photo.html_attributions?.[0] || ''
              }))
              setPhotos(photoUrls)
            } else {
              throw new Error('Failed to load photos from Google Places')
            }
            setLoading(false)
          }
        )
      } catch (err) {
        console.error('Error loading photos:', err)
        setError('Unable to load photos at this time.')
        setLoading(false)
      }
    }

    if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      loadPhotos()
    } else {
      setError('Google Maps API key is not configured.')
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
          />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">{error}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Please check back later or contact us directly.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {photos.map((photo, idx) => (
        <div
          key={idx}
          className="relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <Image
            src={photo.url}
            alt={`Facility photo ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}
