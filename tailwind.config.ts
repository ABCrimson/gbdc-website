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
