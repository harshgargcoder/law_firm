import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'

const lifeAtChamber = [
  'Briefing sessions where interns are invited to argue and test their reasoning.',
  'Moot sessions that simulate trial experience and build courtroom confidence.',
  'A congenial environment shaped by collaboration, discipline, and individual growth.',
  'An active research habit supported by books, files, and senior feedback.',
]

export default function LifeAtChamberPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="Life at chamber"
        title="Daily practice, mentoring, and chamber culture."
        subtitle="A look into our academic rigor, case briefings, advocacy simulations, and collaborative culture."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/"
        secondaryLabel="Back home"
        background="/images/law_library.png"
      />

      <section className="section section-card section-card--soft">
        <div className="highlights">
          {lifeAtChamber.map((item, index) => (
            <article className="highlight" key={item}>
              <span className="highlight__line" aria-hidden="true" />
              <h4>{['Briefing', 'Mooting', 'Culture', 'Research'][index]}</h4>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
