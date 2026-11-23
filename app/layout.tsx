import type { ReactNode } from 'react'
import { SiteFrame } from '@/components/site-frame'
import './globals.css'

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
