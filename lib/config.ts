export interface NavigationItem {
  name: string
  href: string
  description?: string
}

export interface Program {
  id: string
  name: string
  ageRange: string
  description: string
  features: string[]
  ratio?: string
  schedule?: {
    arrival: string
    meals: string[]
    activities: string[]
    departure: string
  }
  meals?: string[]
}

export interface ContactInfo {
  name: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  phone: string
  email: string
  hours: {
    weekdays: string
    weekends: string
  }
}

export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  author: string
  siteUrl: string
}

// Site Metadata
export const siteMetadata: SiteMetadata = {
  title: 'Great Beginnings Day Care Center',
  description: 'Quality childcare for ages 6 weeks to 12 years in Roselle, IL. Nurturing environment with experienced staff and educational programs.',
  keywords: [
    'daycare',
    'childcare',
    'preschool',
    'Roselle IL',
    'infant care',
    'toddler care',
    'school age care',
    'before and after school care'
  ],
  author: 'Great Beginnings Day Care Center',
  siteUrl: 'https://greatbeginningsdaycare.com'
}

// Navigation Items
export const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Welcome to Great Beginnings'
  },
  {
    name: 'Programs',
    href: '/programs',
    description: 'Our childcare programs'
  },
  {
    name: 'Gallery',
    href: '/gallery',
    description: 'Photo gallery'
  },
  {
    name: 'Calendar',
    href: '/calendar',
    description: 'Events and closures'
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch'
  },
  {
    name: 'Schedule Tour',
    href: '/tour',
    description: 'Book a facility tour'
  }
]

// Contact Information
export const contactInfo: ContactInfo = {
  name: 'Great Beginnings Day Care Center',
  address: {
    street: '757 E Nerge Rd',
    city: 'Roselle',
    state: 'IL',
    zip: '60172'
  },
  phone: '(630) 555-1234',
  email: 'info@greatbeginningsdaycare.com',
  hours: {
    weekdays: '6:00 AM - 6:00 PM',
    weekends: 'Closed'
  }
}

// Social Media Links (if needed in future)
export const socialLinks = {
  facebook: '',
  instagram: '',
  twitter: ''
}

// Program Categories
export const programCategories = [
  {
    id: 'infant',
    name: 'Infant Care',
    ageRange: '6 weeks - 18 months',
    icon: '👶'
  },
  {
    id: 'toddler',
    name: 'Toddler Care',
    ageRange: '18 months - 3 years',
    icon: '🧒'
  },
  {
    id: 'preschool',
    name: 'Preschool',
    ageRange: '3 - 5 years',
    icon: '🎨'
  },
  {
    id: 'school-age',
    name: 'School-Age Care',
    ageRange: '5 - 12 years',
    icon: '🚌'
  }
]

// Feature Highlights
export const featureHighlights = [
  {
    title: 'Experienced Staff',
    description: 'Our teachers are qualified, caring professionals with years of experience',
    icon: '👩‍🏫'
  },
  {
    title: 'Safe Environment',
    description: 'Secure facility with modern safety features and monitored access',
    icon: '🔒'
  },
  {
    title: 'Educational Programs',
    description: 'Age-appropriate curriculum designed to promote learning and development',
    icon: '📚'
  },
  {
    title: 'Nutritious Meals',
    description: 'Healthy breakfast, lunch, and snacks prepared fresh daily',
    icon: '🍎'
  },
  {
    title: 'Flexible Schedules',
    description: 'Full-time and part-time options available to fit your family needs',
    icon: '📅'
  },
  {
    title: 'Outdoor Play',
    description: 'Spacious playground and daily outdoor activities weather permitting',
    icon: '🌳'
  }
]

// Google Maps Configuration
export const googleMapsConfig = {
  location: {
    lat: 41.9847,
    lng: -88.0797
  },
  zoom: 16,
  address: '757 E Nerge Rd, Roselle, IL 60172'
}
