'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b shadow-sm'
        : 'bg-background/50 backdrop-blur-md border-b border-transparent'
    }`}>
      <nav className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2 transition-transform hover:scale-105">
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-daycare-blue to-daycare-green bg-clip-text text-transparent">
              Great Beginnings
            </span>
            <span className="text-xs text-muted-foreground">Day Care Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-daycare-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border/50">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              asChild
              className="bg-daycare-blue hover:bg-daycare-blue/90 shadow-md hover:shadow-glow transition-all duration-300"
            >
              <Link href="/tour">Schedule Tour</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'top-2.5 rotate-45' : 'top-0'
              }`} />
              <span className={`absolute left-0 top-2 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-5'
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out-cubic ${
        mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t bg-background/95 backdrop-blur-xl">
          <div className="container px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                  mobileMenuOpen ? 'animate-slide-in-left' : ''
                } hover:bg-muted hover:text-foreground`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className={`flex items-center justify-between py-3 px-4 rounded-lg bg-muted/50 ${
              mobileMenuOpen ? 'animate-slide-in-left' : ''
            }`} style={{ animationDelay: '250ms' }}>
              <span className="text-sm font-medium">Language</span>
              <LanguageSwitcher />
            </div>

            <Button
              asChild
              className={`w-full bg-daycare-blue hover:bg-daycare-blue/90 shadow-md ${
                mobileMenuOpen ? 'animate-slide-in-left' : ''
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <Link href="/tour" onClick={() => setMobileMenuOpen(false)}>
                Schedule Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
