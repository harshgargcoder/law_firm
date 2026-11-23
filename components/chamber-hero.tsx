import { AnchorScrollLink } from '@/components/anchor-scroll-link'

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
        <h1>{title}</h1>
        <p className="hero__lede">{subtitle}</p>
        <div className="hero__actions">
          <AnchorScrollLink className="button button--gold" href={primaryHref}>
            {primaryLabel}
          </AnchorScrollLink>
          {secondaryHref ? (
            <AnchorScrollLink className="button button--ghost" href={secondaryHref}>
              {secondaryLabel}
            </AnchorScrollLink>
          ) : null}
        </div>
      </div>
    </section>
  )
}
