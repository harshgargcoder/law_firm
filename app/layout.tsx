import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteFrame } from '@/components/site-frame'
import { siteUrl } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shivam Kumar Law Office | Senior Advocate in New Delhi',
    template: '%s | Shivam Kumar Law Office',
  },
  description:
    'Shivam Kumar Law Office provides litigation, constitutional, civil, and commercial legal counsel before the Supreme Court of India, Delhi High Court, and tribunals.',
  keywords: [
    'Shivam Kumar Law Office',
    'senior advocate in New Delhi',
    'Supreme Court of India advocate',
    'Delhi High Court lawyer',
    'constitutional law',
    'civil litigation',
    'commercial disputes',
  ],
  applicationName: 'Shivam Kumar Law Office',
  authors: [{ name: 'Shivam Kumar Law Office' }],
  creator: 'Shivam Kumar Law Office',
  publisher: 'Shivam Kumar Law Office',
  category: 'legal services',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shivam Kumar Law Office',
    title: 'Shivam Kumar Law Office | Senior Advocate in New Delhi',
    description:
      'Litigation, constitutional, civil, and commercial legal counsel in New Delhi.',
    images: [{ url: '/images/shivam-kumar-law-office-logo.webp', alt: 'Shivam Kumar Law Office logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Shivam Kumar Law Office | Senior Advocate in New Delhi',
    description: 'Experienced legal counsel and litigation advocacy in New Delhi.',
    images: ['/images/shivam-kumar-law-office-logo.webp'],
  },
  icons: {
    icon: '/images/shivam-kumar-law-office-logo.webp',
    shortcut: '/images/shivam-kumar-law-office-logo.webp',
    apple: '/images/shivam-kumar-law-office-logo.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Shivam Kumar Law Office',
              description:
                'Litigation, constitutional, civil, and commercial legal counsel in New Delhi.',
              url: siteUrl,
              image: `${siteUrl}/images/shivam-kumar-law-office-logo.webp`,
              telephone: '+91-11-23320067',
              email: 'info@shivamkumarlawoffice.example',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '22, Silver Arch Apartment, Ferozshah Road',
                addressLocality: 'New Delhi',
                postalCode: '110001',
                addressCountry: 'IN',
              },
              areaServed: 'India',
              openingHours: 'Mo-Fr 09:30-17:30',
            }),
          }}
        />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  )
}
