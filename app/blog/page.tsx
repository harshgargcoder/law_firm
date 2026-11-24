import { ChamberHero } from '@/components/chamber-hero'
import { ClientFeedbackSection } from '@/components/client-feedback'
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
        eyebrow="Blogs & client experiences"
        title="Legal notes and client feedback."
        subtitle="Read practical legal updates from the office and selected feedback shared by clients after review."
        primaryHref="/contact"
        primaryLabel="Contact"
        background="/images/law_library.webp"
      />

      <section className="section section-card section-card--notes">
        <div className="section-card__header">
          <p className="eyebrow">Legal notes</p>
          <h3>Clear perspectives on legal issues and practice.</h3>
        </div>
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

      <ClientFeedbackSection />

      <PageFooter />
    </main>
  )
}
