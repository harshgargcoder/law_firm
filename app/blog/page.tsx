import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'

const posts = [
  {
    title: 'Arbitration and Public Policy in India',
    text: 'An analysis of judicial intervention in commercial arbitral awards.',
  },
  {
    title: 'Writ Petitions: Best Practices in High Courts',
    text: 'A guide on drafting pleadings and maintaining procedural precision.',
  },
  {
    title: 'Understanding Article 21 and Privacy Rights',
    text: 'Key takeaways from recent Supreme Court constitutional bench rulings.',
  },
]

export default function BlogPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="Blog"
        title="Notes, updates, and chamber stories."
        subtitle="Insights, commentaries, and legal updates from our practitioners on recent developments in Indian jurisprudence."
        primaryHref="/contact"
        primaryLabel="Contact"
        secondaryHref="/"
        secondaryLabel="Back home"
        background="/images/law_library.png"
      />

      <section className="section section-card section-card--notes">
        <div className="notes-grid">
          {posts.map((post) => (
            <article className="note-card" key={post.title}>
              <span className="highlight__line" aria-hidden="true" />
              <h4>{post.title}</h4>
              <p>{post.text}</p>
            </article>
          ))}
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
