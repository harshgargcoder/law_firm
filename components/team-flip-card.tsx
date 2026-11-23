'use client'

import { useState } from 'react'

type TeamMember = {
  name: string
  role: string
  years: string
  bio: string
}

export function TeamFlipCard({ member, image }: { member: TeamMember; image: string }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleCard = () => setIsFlipped((value) => !value)

  return (
    <article
      className={`team-flip-card${isFlipped ? ' is-flipped' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`${member.name} profile card. Click to ${isFlipped ? 'show photo' : 'show details'}.`}
      onClick={toggleCard}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          toggleCard()
        }
      }}
    >
      <div className="team-flip-card__inner">
        <div className="team-flip-card__face team-flip-card__front">
          <div
            className="team-flip-card__photo"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
          <h4>{member.name}</h4>
          <p>{member.role}</p>
          <small>{member.years}</small>
          <span className="team-flip-card__hint">Hover or tap to view profile</span>
        </div>

        <div className="team-flip-card__face team-flip-card__back">
          <span className="eyebrow">Team profile</span>
          <h4>{member.name}</h4>
          <p className="team-flip-card__role">{member.role}</p>
          <p>{member.bio}</p>
          <a
            className="team-flip-card__linkedin"
            href={`https://www.linkedin.com/in/${member.name.toLowerCase().replaceAll(' ', '-')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name} on LinkedIn`}
            onClick={(event) => event.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0Z" />
            </svg>
            LinkedIn profile
          </a>
        </div>
      </div>
    </article>
  )
}
