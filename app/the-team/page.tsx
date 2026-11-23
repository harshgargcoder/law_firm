import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'
import { TeamFlipCard } from '@/components/team-flip-card'
import { team } from '@/lib/site-content'

export default function TheTeamPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="The team"
        title="Meet the people behind the office."
        subtitle="Our advocates and counsels bring a wealth of expertise and dedication to representing clients across all judicial forums."
        primaryHref="#team-members"
        primaryLabel="Meet my Team"
        background="/images/courtroom_hero.webp"
      />

      <section id="team-members" className="section section-card section-card--team">
        <div className="team-strip team-strip--large">
          {team.map((member, index) => (
            <TeamFlipCard
              key={member.name}
              member={member}
              image={index % 2 === 0 ? '/images/team_advocate_1.webp' : '/images/team_advocate_2.webp'}
            />
          ))}
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
