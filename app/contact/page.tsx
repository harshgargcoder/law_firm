import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'

export default function ContactPage() {
  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="Get in touch"
        title="Contact the chamber"
        subtitle="Speak with our legal experts. Shivam Kumar Law Office provides professional representation and advocacy in New Delhi."
        primaryHref="/"
        primaryLabel="Back home"
        secondaryHref="/the-team"
        secondaryLabel="The team"
        background="/images/contact_office.png"
      />

      <section className="section contact-banner contact-banner--page">
        <div className="contact-banner__content">
          <div className="contact-section-container">
            <div className="contact-info-column">
              <article className="contact-info-card">
                <div className="contact-info-card__icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="contact-info-card__content">
                  <span className="contact-info-card__label">Address</span>
                  <h4 className="contact-info-card__value">22, Silver Arch Apartment, Ferozshah Road, New Delhi - 110001</h4>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-info-card__icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="contact-info-card__content">
                  <span className="contact-info-card__label">Business hours</span>
                  <h4 className="contact-info-card__value">Monday - Friday 9:30 AM - 5:30 PM</h4>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-info-card__icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="contact-info-card__content">
                  <span className="contact-info-card__label">Phone</span>
                  <h4 className="contact-info-card__value">+91-11-23320067 / 68</h4>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-info-card__icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="contact-info-card__content">
                  <span className="contact-info-card__label">E-mail</span>
                  <h4 className="contact-info-card__value">info@shivamkumarlawoffice.example</h4>
                </div>
              </article>
            </div>

            <div className="contact-map-card">
              <div className="contact-map-card__map-container">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                    </pattern>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#d7aa2b" stopOpacity="1" />
                      <stop offset="100%" stopColor="#d7aa2b" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="rgba(8, 16, 55, 0.2)" />
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  
                  <path d="M-10,120 L410,120" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="16" fill="none" />
                  <path d="M-10,120 L410,120" stroke="rgba(215, 170, 43, 0.1)" strokeWidth="18" fill="none" />
                  <path d="M120,-10 L120,310" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="16" fill="none" />
                  
                  <path d="M-10,40 L300,310" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="12" fill="none" />

                  <text x="200" y="112" fill="rgba(255, 255, 255, 0.5)" fontSize="9" letterSpacing="2" textAnchor="middle" fontFamily="sans-serif">FEROZSHAH ROAD</text>
                  <text x="128" y="50" fill="rgba(255, 255, 255, 0.5)" fontSize="9" letterSpacing="2" transform="rotate(90, 128, 50)" fontFamily="sans-serif">TOLSTOY MARG</text>
                  <text x="80" y="190" fill="rgba(255, 255, 255, 0.3)" fontSize="8" letterSpacing="1" transform="rotate(40, 80, 190)" fontFamily="sans-serif">CANNING ROAD</text>

                  <circle cx="320" cy="200" r="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
                  <text x="320" y="222" fill="rgba(255, 255, 255, 0.4)" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Supreme Court</text>

                  <circle cx="50" cy="60" r="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
                  <text x="50" y="82" fill="rgba(255, 255, 255, 0.4)" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Delhi High Court</text>

                  <circle cx="200" cy="120" r="18" fill="url(#glow)">
                    <animate attributeName="r" values="8;24;8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="200" cy="120" r="6" fill="#d7aa2b" stroke="#fff" strokeWidth="2" />
                  <path d="M200,120 L200,95" stroke="#d7aa2b" strokeWidth="2" strokeDasharray="3,3" />
                  <rect x="130" y="65" width="140" height="24" rx="4" fill="#0c1743" stroke="#d7aa2b" strokeWidth="1" />
                  <text x="200" y="79" fill="#ffd86f" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="Georgia, serif" letterSpacing="0.5">SHIVAM KUMAR LAW OFFICE</text>
                </svg>
              </div>
              <a href="https://maps.google.com/?q=22,+Silver+Arch+Apartment,+Ferozshah+Road,+New+Delhi" target="_blank" rel="noopener noreferrer" className="contact-map-card__btn">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
