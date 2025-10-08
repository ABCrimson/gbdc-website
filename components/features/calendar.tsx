'use client'

import { format, isToday, isFuture, addMonths, startOfMonth, endOfMonth } from 'date-fns'
import { enUS, es, ru, uk } from 'date-fns/locale'
import events from '@/data/calendar.json'
import { useEffect, useState } from 'react'

const locales = { en: enUS, es, ru, uk }

interface CalendarEvent {
  id: string
  date: string
  title: string
  type: 'closure' | 'event'
}

export function Calendar() {
  const [locale, setLocale] = useState<'en' | 'es' | 'ru' | 'uk'>('en')

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as 'en' | 'es' | 'ru' | 'uk'
    if (savedLocale) setLocale(savedLocale)
  }, [])

  // Get events for the next 3 months using date-fns 4.1.0
  const today = new Date()
  const threeMonthsLater = addMonths(today, 3)
  const startDate = startOfMonth(today)
  const endDate = endOfMonth(threeMonthsLater)

  const upcomingEvents = (events as CalendarEvent[]).filter(event => {
    const eventDate = new Date(event.date)
    return isFuture(eventDate) && eventDate >= startDate && eventDate <= endDate
  })

  const localeObj = locales[locale]

  return (
    <div className="space-y-3">
      {upcomingEvents.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No upcoming events or closures scheduled.
        </p>
      ) : (
        upcomingEvents.map(event => {
          const eventDate = new Date(event.date)
          const isTodayEvent = isToday(eventDate)

          return (
            <div
              key={event.id}
              className={`p-4 rounded-lg transition-all ${
                isTodayEvent
                  ? 'bg-daycare-yellow/20 border-2 border-daycare-yellow dark:bg-daycare-yellow/10 dark:border-daycare-yellow/50'
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <time className="font-semibold text-daycare-blue dark:text-daycare-blue">
                    {format(eventDate, 'PPP', { locale: localeObj })}
                  </time>
                  {isTodayEvent && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-daycare-yellow text-gray-900 rounded">
                      Today
                    </span>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 mt-1">{event.title}</p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.type === 'closure'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}
                  >
                    {event.type === 'closure' ? 'Closed' : 'Event'}
                  </span>
                </div>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
