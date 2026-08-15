import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteFrame } from '@/components/site-frame'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Shivam Kumar Law Office',
    template: '%s | Shivam Kumar Law Office',
  },
  description: 'An elegant law firm landing page inspired by a classic chambers website.',
  icons: {
    icon: '/images/shivam-kumar-law-office-logo.png',
    shortcut: '/images/shivam-kumar-law-office-logo.png',
    apple: '/images/shivam-kumar-law-office-logo.png',
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
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  )
}
