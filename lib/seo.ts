import type { Metadata } from 'next'

const siteName = 'Shivam Kumar Law Office'
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://law-firm-peach-phi.vercel.app'

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteName}`, description, url: path, type: 'website' },
    twitter: { card: 'summary', title: `${title} | ${siteName}`, description },
  }
}
