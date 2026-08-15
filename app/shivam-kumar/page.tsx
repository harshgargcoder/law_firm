import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'

const milestones = [
  '1973 - B.A. English (Hons.), St. Stephen\'s College, Delhi University',
  '1977 - B.A. Jurisprudence, St. Edmund Hall, Oxford University',
  '1978 - B.C.L., St. Edmund Hall, Oxford University',
  '1979 - M.A., St. Edmund Hall, Oxford University',
  '2014 - Elected Honorary Fellow, St. Edmund Hall, Oxford University',
]

export default function ShivamKumarPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="Senior advocate"
        title="Mr. Shivam Kumar"
        subtitle="Senior Advocate with over three decades of litigation experience before the Supreme Court and Delhi High Court."
        primaryHref="/contact"
        primaryLabel="Get in touch"
        secondaryHref="/internship"
        secondaryLabel="Internship"
        background="/images/courtroom_hero.png"
      />

      <section className="section quote-section quote-section--profile">
        <div className="quote-section__bg" style={{ backgroundImage: 'url(/images/shivam.jpeg)' }} />
        <div className="quote-section__overlay" />
        <div className="quote-section__content">
          <ul className="timeline timeline--light">
            {milestones.map((milestone) => (
              <li key={milestone}>{milestone}</li>
            ))}
          </ul>
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
