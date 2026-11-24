import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'

const services = [
  ['Constitutional & Public Law', 'Research and advice on constitutional questions, administrative decisions, and public-law remedies, including writ proceedings where appropriate.'],
  ['Civil Litigation', 'Assistance with civil suits, interim applications, appeals, injunctions, recovery matters, and other contested proceedings based on the facts of each case.'],
  ['Commercial & Contract Disputes', 'Advice and representation in contractual disagreements, payment and performance disputes, business claims, and settlement discussions.'],
  ['Tribunal & Regulatory Work', 'Preparation and representation in matters before appropriate tribunals and regulatory forums, with close attention to procedure, limitation, and documentary evidence.'],
  ['Legal Research & Drafting', 'Preparation of legal opinions, petitions, replies, rejoinders, written submissions, applications, and case notes supported by focused research.'],
  ['Case Assessment & Strategy', 'An early review of the facts, documents, legal issues, and available remedies so clients can understand their options, risks, and next steps.'],
] as const

export default function ServicesPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="What we do"
        title="Services"
        subtitle="Careful legal analysis, clear drafting, and considered representation for disputes and public-law matters."
        primaryHref="/contact"
        primaryLabel="Discuss your matter"
        background="/images/courtroom_hero.webp"
      />

      <section className="section section-card">
        <div className="section-card__header">
          <p className="eyebrow">Our practice</p>
          <h3>Practical legal support, grounded in the facts of each matter.</h3>
          <p>
            Every matter begins with its documents, deadlines, and legal issues. The scope of work is discussed
            after an initial review, and advice is tailored to the client&apos;s circumstances rather than a fixed formula.
          </p>
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
