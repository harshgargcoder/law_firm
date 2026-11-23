import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  'Legal Services',
  'Explore the legal services and litigation support provided by Shivam Kumar Law Office in New Delhi.',
  '/services',
)

const services = [
  ['Constitutional Law', 'Strategic advice and representation in constitutional questions, public law disputes, and matters before constitutional courts.'],
  ['Civil Litigation', 'Focused representation in civil disputes, appeals, writ petitions, and complex proceedings before the Supreme Court and High Courts.'],
  ['Commercial Disputes', 'Practical counsel for commercial litigation, contractual disputes, corporate matters, and business-critical legal strategy.'],
  ['Tribunal & Regulatory Matters', 'Representation before specialised tribunals and regulatory forums, supported by careful research and procedural expertise.'],
  ['Legal Research & Drafting', 'Thorough legal research and precise drafting of petitions, counter-affidavits, written submissions, and review motions.'],
  ['Strategic Legal Counsel', 'Early assessment, case planning, and clear advice to help clients make informed decisions throughout a dispute.'],
] as const

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="What we do"
        title="Services"
        subtitle="Focused legal counsel, meticulous preparation, and determined advocacy for complex matters across India."
        primaryHref="/contact"
        primaryLabel="Discuss your matter"
        background="/images/courtroom_hero.webp"
      />

      <section className="section section-card">
        <div className="section-card__header">
          <p className="eyebrow">Our practice</p>
          <h3>Experience that is built around your legal objectives.</h3>
        </div>
        <div className="highlights">
          {services.map(([title, text]) => (
            <article className="highlight" key={title}>
              <span className="highlight__line" aria-hidden="true" />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
