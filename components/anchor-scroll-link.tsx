'use client'

import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'

export function AnchorScrollLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return

    const target = document.getElementById(href.slice(1))
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}
