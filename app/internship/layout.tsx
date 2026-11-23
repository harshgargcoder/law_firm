import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Legal Internship Program in New Delhi',
  'Apply for a legal internship at Shivam Kumar Law Office and gain supervised experience in legal research, drafting, and litigation practice.',
  '/internship',
)

export default function InternshipLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children
}
