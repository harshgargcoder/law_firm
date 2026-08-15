import Link from 'next/link'

type ChamberHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  background: string
}

export function ChamberHero({
  eyebrow,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  background,
}: ChamberHeroProps) {
  return (
    <section className="chamber-hero section">
      <div
        className="chamber-hero__media"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      />
      <div className="chamber-hero__overlay" aria-hidden="true" />

      <div className="chamber-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="hero__lede">{subtitle}</p>
        <div className="hero__actions">
          <Link className="button button--gold" href={primaryHref}>
            {primaryLabel}
          </Link>
          {secondaryHref ? (
            <Link className="button button--ghost" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
