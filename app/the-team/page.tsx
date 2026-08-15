import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'
import { team } from '@/lib/site-content'

export default function TheTeamPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="The team"
        title="Meet the people behind the office."
        subtitle="Our advocates and counsels bring a wealth of expertise and dedication to representing clients across all judicial forums."
        primaryHref="/contact"
        primaryLabel="Contact the office"
        secondaryHref="/"
        secondaryLabel="Back home"
        background="/images/courtroom_hero.png"
      />

      <section className="section section-card section-card--team">
        <div className="team-strip team-strip--large">
          {team.map((member, index) => (
            <article className="team-strip__card" key={member.name}>
              <div
                className="team-strip__photo"
                style={{ backgroundImage: `url(${index % 2 === 0 ? '/images/team_advocate_1.png' : '/images/team_advocate_2.png'})` }}
                aria-hidden="true"
              />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <small>{member.years}</small>
            </article>
          ))}
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
