'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { type ReactNode, useEffect, useState } from 'react'
import { DisclaimerModal } from '@/components/disclaimer-modal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-team', label: 'The Team' },
  { href: '/internship', label: 'Internship' },
  { href: '/shivam-kumar', label: 'Shivam Kumar' },
  { href: '/life-at-chamber', label: 'Life at Chamber' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFrame({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    setMobileMenuOpen(false)

    // Dynamic Scroll-Driven CSS Variables
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
      
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`)
      document.documentElement.style.setProperty('--scroll-percent', `${scrollPercent}%`)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Intersection Observer for Smooth Reveal Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -40px 0px' 
      }
    )

    const selectors = [
      '.story-panel--text', 
      '.story-panel--visual', 
      '.quote-section__content', 
      '.team-strip__card', 
      '.note-card', 
      '.highlight', 
      '.contact-info-card', 
      '.contact-map-card',
      '.timeline li',
      '.internship-form-card'
    ]

    const elements = document.querySelectorAll(selectors.join(', '))
    elements.forEach((el) => {
      el.classList.remove('is-revealed')
      el.classList.add('reveal-item')
      observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      elements.forEach((el) => {
        observer.unobserve(el)
        el.classList.remove('is-revealed')
      })
      observer.disconnect()
    }
  }, [pathname])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <DisclaimerModal />
      <header className={`topbar ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="topbar__inner">
          <Link className="topbar__brand" href="/" aria-label="Shivam Kumar Law Office home">
            <Image
              src="/images/shivam-kumar-law-office-logo.png"
              alt="Shivam Kumar Law Office logo"
              width={52}
              height={52}
              priority
              className="topbar__brand-logo"
            />
            <div className="topbar__brand-copy">
              <p>Shivam Kumar</p>
              <h1>Law Office</h1>
            </div>
          </Link>

          <button
            type="button"
            className="topbar__menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation-panel"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="topbar__mobile-social" aria-label="Social links">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 18V9.83H5.67V18H8.34ZM7 8.74A1.55 1.55 0 1 0 7 5.64a1.55 1.55 0 0 0 0 3.1ZM18.33 18v-4.46c0-2.25-1.2-3.3-2.8-3.3-1.29 0-1.87.71-2.19 1.2V9.83H10.7c.03.69 0 8.17 0 8.17h2.64v-4.56c0-.24.02-.48.1-.65.23-.48.76-.98 1.65-.98 1.16 0 1.63.89 1.63 2.2V18h2.64Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8.2h2.75l.4-3.2H13.5V8.55c0-.93.25-1.56 1.6-1.56h1.7V4.12c-.3-.04-1.34-.12-2.55-.12-2.52 0-4.25 1.54-4.25 4.36V10.6H7.3v3.2h2.7V22h3.5Z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 3H21l-6.95 7.95L22 21h-5.76l-4.51-5.6L6.83 21H4.7l7.34-8.39L2 3h5.92l4.03 5.03L18.9 3Zm-1.01 16h1.66L7.01 4.89H5.24L17.89 19Z" />
              </svg>
            </a>
          </div>

          <div className="topbar__panel" id="primary-navigation-panel">
            <nav className="topbar__nav" aria-label="Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActiveLink(link.href) ? 'is-active' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {children}
    </>
  )
}

export function PageFooter() {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <p>Copyright (c) 2026 Shivam Kumar Law Office</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Developed with love by harshgargcoder</p>
      </div>
      <div className="footer__socials">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
