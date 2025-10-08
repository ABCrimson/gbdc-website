# GBDC FastWebDevStack v5.1 - Production Ready
**Date**: October 7, 2025 | **Purpose**: Ultra-modern daycare information website
**Stack**: Bun 1.2.23 + Next.js 15.5.4 + React 19.2.0 + TypeScript 5.9.3
**Monthly Cost**: $21-31 (simple, maintainable, effective)

---

## 🎯 PROJECT SCOPE - EXACTLY WHAT YOU NEED

### Core Website Features
- **Modern Homepage** with hero section and smooth animations
- **Programs Page** showing age groups (6 weeks - 12 years)
- **Photo Gallery** pulled directly from Google Maps listing
- **Public Calendar** for closures and events (no login)
- **Contact Form** for general inquiries
- **Tour Request Form** for scheduling visits
- **Embedded Google Maps** showing location
- **Before/After School Program** information
- **Transportation Services** details

### What We're NOT Building
- ❌ Parent portal/logins
- ❌ Payment processing
- ❌ Document management
- ❌ Real-time messaging
- ❌ Staff systems
- ❌ Complex databases
- ❌ User authentication
- ❌ SMS notifications

---

## ⚡ EXACT TECH STACK (October 2025)

### Core Dependencies
```json
{
  "runtime": "bun@1.2.23",
  "framework": "next@15.5.4",
  "react": "react@19.2.0",
  "react-dom": "react-dom@19.2.0",
  "typescript": "typescript@5.9.3"
}
```

### Styling & UI
```json
{
  "tailwindcss": "4.1.14",
  "autoprefixer": "latest",
  "postcss": "latest",
  "@shadcn/ui": "3.4.0",  // Only button, card, spinner
  "clsx": "2.1.1",
  "tailwind-merge": "3.3.1"
}
```

### Forms & Utilities (Updated Versions)
```json
{
  "@emailjs/browser": "4.4.1",
  "react-hot-toast": "2.6.0",    // NEW: Promise-based toasts
  "date-fns": "4.1.0",           // NEW: Major v4 with improved tree-shaking
  "@googlemaps/js-api-loader": "2.0.1"  // NEW: v2 with better TypeScript
}
```

### Development Dependencies (Updated)
```json
{
  "@types/node": "24.7.0",      // Node 24 types
  "@types/react": "19.2.2",     // Matches React 19.2.0
  "@types/react-dom": "19.2.1", // Matches React DOM 19.2.0
  "eslint": "9.37.0",           // Latest ESLint v9
  "eslint-config-next": "15.5.4",
  "prettier": "3.6.2"           // Latest formatter
}
```

---

## 🚨 PROJECT RULES

```bash
# MANDATORY: After EVERY file change
git add -A && git commit -m "feat: [action]" && git push origin main

# DEVELOPMENT PRINCIPLES:
1. Server Components by default (client only for interactivity)
2. Simple forms without validation libraries
3. No complex state management
4. Focus on performance and simplicity
5. Use newest APIs from each package
```

---

## 🎨 MODERN PATTERNS WITH NEW VERSIONS

### date-fns 4.1.0 - New Tree-Shakeable API
```typescript
// ✅ NEW: date-fns v4 with better imports
import { format, addDays, startOfMonth } from 'date-fns/fp'
import { enUS, es } from 'date-fns/locale'

// New functional programming style
const formatDate = format('MMMM d, yyyy')
const nextWeek = addDays(7)

// Better tree-shaking - only imports what you use
export function CalendarEvent({ date, title }) {
  return (
    <div>
      <time>{formatDate(new Date(date))}</time>
      <span>{title}</span>
    </div>
  )
}

// New locale handling
export function LocalizedDate({ date, locale = 'en' }) {
  const localeObj = locale === 'es' ? es : enUS
  return format(date, 'PPPP', { locale: localeObj })
}
```

### @googlemaps/js-api-loader 2.0.1 - New v2 API
```typescript
// ✅ NEW: Version 2 with improved TypeScript and async/await
import { Loader } from '@googlemaps/js-api-loader'

export async function loadGoogleMaps() {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    version: 'quarterly', // NEW: quarterly updates
    libraries: ['places', 'marker'] // NEW: Advanced Markers
  })
  
  // NEW: Better promise handling
  const { Map } = await loader.importLibrary('maps')
  const { AdvancedMarkerElement } = await loader.importLibrary('marker')
  
  return { Map, AdvancedMarkerElement }
}

// Photo Gallery with v2 improvements
export function PhotoGallery() {
  const [photos, setPhotos] = useState<string[]>([])
  
  useEffect(() => {
    async function loadPhotos() {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: 'quarterly'
      })
      
      // NEW: Import specific libraries
      const { PlacesService } = await loader.importLibrary('places')
      
      const service = new PlacesService(document.createElement('div'))
      const place = await service.getDetails({
        placeId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID!,
        fields: ['photos', 'reviews', 'rating'] // Get reviews too
      })
      
      if (place?.photos) {
        const urls = place.photos.slice(0, 12).map(photo => 
          photo.getUrl({ maxWidth: 1200, maxHeight: 800 })
        )
        setPhotos(urls)
      }
    }
    
    loadPhotos()
  }, [])
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {photos.map((url, idx) => (
        <img key={idx} src={url} alt={`Facility ${idx + 1}`} />
      ))}
    </div>
  )
}
```

### react-hot-toast 2.6.0 - Promise Toast Support
```typescript
// ✅ NEW: Promise-based toasts in v2.6.0
import toast from 'react-hot-toast'

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    // NEW: Promise syntax with loading/success/error states
    toast.promise(
      sendContactForm(formData),
      {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: (err) => `Failed: ${err.message}`
      }
    )
  }
  
  // NEW: Custom styled toasts
  const notifySuccess = () => toast.custom((t) => (
    <div className={`${t.visible ? 'animate-slide-up' : 'animate-leave'} 
      bg-white shadow-lg rounded-lg p-4`}>
      ✅ Tour request submitted!
    </div>
  ))
  
  return <form action={handleSubmit}>...</form>
}
```

### TypeScript 5.9.3 with Node 24 Types
```typescript
// ✅ NEW: Using Node 24 type definitions
import { ReadableStream } from 'node:stream/web' // Node 24 streams

// Better type inference with latest TypeScript
const programs = [
  { name: 'Infant', ages: [6, 18] },
  { name: 'Toddler', ages: [18, 36] }
] as const satisfies readonly Program[]

// NEW: Import attributes fully supported
import configData from './config.json' with { type: 'json' }
import styles from './styles.css' with { type: 'css' }
```

### Next.js 15.5.4 Server Functions
```typescript
// app/actions/contact.ts
'use server'

import { revalidatePath } from 'next/cache'

export async function sendContactForm(formData: FormData) {
  // Validate with native APIs
  const email = formData.get('email')?.toString()
  const message = formData.get('message')?.toString()
  
  if (!email || !message) {
    return { error: 'Required fields missing' }
  }
  
  // Send email
  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: Object.fromEntries(formData)
    })
  })
  
  revalidatePath('/')
  return { success: true }
}
```

### React 19.2.0 Modern Features
```typescript
// ✅ Activity component for better performance
import { Activity } from 'react'

export function Navigation({ currentPage }) {
  return (
    <>
      <Activity mode={currentPage === 'home' ? 'visible' : 'hidden'}>
        <HomePage />
      </Activity>
      <Activity mode={currentPage === 'gallery' ? 'visible' : 'hidden'}>
        <GalleryPage />
      </Activity>
    </>
  )
}

// ✅ useEffectEvent for stable handlers
import { useEffectEvent } from 'react'

function TourForm() {
  const [data, setData] = useState({})
  
  const handleSubmit = useEffectEvent(async () => {
    // Always has latest data, never stale
    const result = await scheduleTour(data)
    toast.promise(result, {
      loading: 'Scheduling...',
      success: 'Tour booked!',
      error: 'Please try again'
    })
  })
  
  return <form onSubmit={handleSubmit}>...</form>
}

// ✅ Enhanced transitions
function CTAButton() {
  const [isPending, startTransition] = useTransition({
    priority: 'user-blocking'
  })
  
  return (
    <button onClick={() => startTransition(() => navigate('/tour'))}>
      {isPending ? <Spinner /> : 'Book a Tour'}
    </button>
  )
}
```

### Tailwind CSS 4.1.14 Native Features
```css
/* ✅ Native nesting and layers */
@layer base {
  :root {
    --daycare-blue: oklch(65% 0.2 230);
    --daycare-yellow: oklch(85% 0.15 85);
    --daycare-green: oklch(70% 0.18 145);
  }
}

@layer components {
  .card {
    @apply bg-white rounded-xl shadow-sm;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px oklch(0% 0 0 / 0.1);
    }
    
    .card-title {
      @apply text-2xl font-bold;
    }
  }
}

/* ✅ Container queries */
.program-card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .program-content {
    grid-template-columns: 150px 1fr;
  }
}
```

---

## 📁 PROJECT STRUCTURE

```
gbdc-website/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── programs/page.tsx       # Programs
│   ├── gallery/page.tsx        # Photo gallery
│   ├── calendar/page.tsx       # Public calendar
│   ├── contact/page.tsx        # Contact form
│   ├── tour/page.tsx           # Tour scheduling
│   ├── actions/
│   │   ├── contact.ts          # Contact server function
│   │   └── tour.ts             # Tour server function
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn components (3 only)
│   ├── forms/                  # Form components
│   ├── layout/                 # Header/Footer
│   └── features/               # Gallery, Map, Calendar
├── lib/
│   ├── config.ts               # Site config
│   ├── email.ts                # Email setup
│   └── utils.ts                # Helpers
├── data/
│   ├── programs.json           # Program data
│   └── calendar.json           # Events/closures
└── public/
    └── images/                 # Static images
```

---

## 🚀 INSTALLATION COMMANDS

```bash
# 1. Setup Bun runtime
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# 2. Create Next.js project
bunx create-next-app@latest gbdc-website \
  --typescript --tailwind --app \
  --no-src-dir --import-alias "@/*"

cd gbdc-website

# 3. Install exact versions
bun add react@19.2.0 react-dom@19.2.0 next@15.5.4 typescript@5.9.3
bun add tailwindcss@4.1.14 clsx@2.1.1 tailwind-merge@3.3.1
bun add @emailjs/browser@4.4.1 react-hot-toast@2.6.0
bun add date-fns@4.1.0 @googlemaps/js-api-loader@2.0.1

# 4. Install dev dependencies
bun add -d @types/node@24.7.0 @types/react@19.2.2 @types/react-dom@19.2.1
bun add -d eslint@9.37.0 eslint-config-next@15.5.4 prettier@3.6.2

# 5. Setup shadcn/ui (minimal)
bunx shadcn@latest init
bunx shadcn@latest add button card
# Create custom spinner component

# 6. Create environment file
touch .env.local
```

---

## 🎯 CONFIGURATION FILES

### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: true, // Partial prerendering
    turbo: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        daycare: {
          blue: 'oklch(65% 0.2 230)',
          yellow: 'oklch(85% 0.15 85)',
          green: 'oklch(70% 0.18 145)',
        }
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
      }
    }
  },
  plugins: [],
} satisfies Config
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2025",
    "lib": ["dom", "dom.iterable", "esnext", "ES2025"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

## 💻 KEY IMPLEMENTATIONS

### 1. Contact Form with Promise Toast
```typescript
// components/forms/contact-form.tsx
'use client'

import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'
import { sendContactForm } from '@/app/actions/contact'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="btn-primary"
    >
      {pending ? <Spinner /> : 'Send Message'}
    </button>
  )
}

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    // NEW: Promise-based toast
    toast.promise(
      sendContactForm(formData),
      {
        loading: 'Sending your message...',
        success: 'Thank you! We\'ll be in touch soon.',
        error: 'Something went wrong. Please try again.'
      }
    )
  }
  
  return (
    <form action={handleSubmit} className="space-y-4">
      <input 
        name="name" 
        required 
        placeholder="Your Name"
        className="input"
      />
      <input 
        name="email" 
        type="email" 
        required 
        placeholder="Email"
        className="input"
      />
      <input 
        name="phone" 
        type="tel" 
        placeholder="Phone (optional)"
        className="input"
      />
      <textarea 
        name="message" 
        required 
        placeholder="How can we help?"
        className="textarea"
        rows={4}
      />
      <SubmitButton />
    </form>
  )
}
```

### 2. Calendar with date-fns v4
```typescript
// components/features/calendar.tsx
import { format, isToday, isFuture } from 'date-fns'
import { enUS, es } from 'date-fns/locale'
import events from '@/data/calendar.json'

export function PublicCalendar({ locale = 'en' }) {
  const localeObj = locale === 'es' ? es : enUS
  
  return (
    <div className="space-y-3">
      {events
        .filter(event => isFuture(new Date(event.date)))
        .map(event => (
          <div 
            key={event.id}
            className={`p-4 rounded-lg ${
              isToday(new Date(event.date)) 
                ? 'bg-yellow-100 border-2 border-yellow-400' 
                : 'bg-gray-50'
            }`}
          >
            <time className="font-semibold">
              {format(new Date(event.date), 'PPP', { locale: localeObj })}
            </time>
            <p className="text-gray-600 mt-1">{event.title}</p>
          </div>
        ))
      }
    </div>
  )
}
```

### 3. Google Maps with v2 API
```typescript
// components/features/google-map.tsx
'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    async function initMap() {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: 'quarterly',
        libraries: ['marker']
      })
      
      const { Map } = await loader.importLibrary('maps')
      const { AdvancedMarkerElement } = await loader.importLibrary('marker')
      
      const position = { lat: 41.9847, lng: -88.0158 } // Roselle, IL
      
      const map = new Map(mapRef.current!, {
        zoom: 15,
        center: position,
        mapId: 'GBDC_MAP'
      })
      
      new AdvancedMarkerElement({
        map,
        position,
        title: 'Great Beginnings Day Care'
      })
    }
    
    initMap()
  }, [])
  
  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
    />
  )
}
```

---

## 📊 PERFORMANCE METRICS

| Metric | Target | Expected |
|--------|--------|----------|
| **Lighthouse** | >95 | 98-100 |
| **First Contentful Paint** | <1s | 0.6s |
| **Largest Contentful Paint** | <2.5s | 1.8s |
| **Total Blocking Time** | <200ms | 50ms |
| **Cumulative Layout Shift** | <0.1 | 0.02 |
| **Bundle Size (JS)** | <75KB | ~45KB |

---

## 💰 MONTHLY COSTS

| Service | Cost | Notes |
|---------|------|-------|
| **Vercel Pro** | $20 | Commercial hosting |
| **Domain** | $1.25 | Annual $15 |
| **EmailJS Free** | $0 | 200 emails/month |
| **Google Maps** | $0 | Under free tier |
| **TOTAL** | **$21.25** | All inclusive |

---

## ✅ DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] All forms tested with real email
- [ ] Google Maps API key configured
- [ ] Mobile responsive verified
- [ ] Lighthouse score >95
- [ ] Content reviewed for accuracy
- [ ] Calendar events added
- [ ] Photos loaded from Google

### Deployment Steps
```bash
# 1. Build and test locally
bun run build
bun run start

# 2. Deploy to Vercel
vercel --prod

# 3. Add environment variables in Vercel dashboard
# 4. Configure custom domain
# 5. Enable analytics
```

### Post-Deployment
- [ ] Test forms on production
- [ ] Verify Maps loads
- [ ] Check all pages
- [ ] Submit to Google Search Console
- [ ] Share with stakeholders

---

## 🛠 MAINTENANCE

### Weekly Tasks
- Check EmailJS dashboard for submissions
- Review any error logs in Vercel

### Monthly Tasks  
- Update calendar events
- Check Google Maps API usage
- Review analytics

### Quarterly Tasks
- Update program information
- Refresh photos if needed
- Review and optimize performance

---

## 📝 FINAL NOTES

This configuration uses your exact version specifications with their latest features:
- **date-fns v4** for better tree-shaking
- **Google Maps Loader v2** with improved TypeScript
- **react-hot-toast 2.6** with promise support
- **Latest type definitions** matching React 19.2

The stack remains simple, cost-effective ($21/month), and uses modern best practices without over-engineering.

---

*Great Beginnings Day Care - Modern, Simple, Effective*
*Built with the exact versions you specified*