'use client'

import { useEffect, useRef, useState } from 'react'
import { ChamberHero } from '@/components/chamber-hero'
import { PageFooter } from '@/components/site-frame'
import { internships } from '@/lib/site-content'

const practiceAreas = [
  'Criminal Law',
  'Civil Litigation',
  'Divorce & Family Law',
  'Property Law',
  'Constitutional Law',
  'Corporate & Commercial Law',
  'Contract Law',
  'Consumer Protection',
  'Cyber Crime & Technology Law',
  'Intellectual Property Law',
  'Arbitration & Mediation',
  'Labour & Employment Law',
  'Tax & Financial Law',
  'Real Estate Law',
  'Human Rights Law',
  'Environmental Law',
] as const

export default function InternshipPage() {
  const submitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    coverLetter: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') setStatus('idle')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
      if (status === 'error') setStatus('idle')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.practiceArea) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }
    if (!file) {
      setStatus('error')
      setErrorMessage('Please upload your CV/Resume.')
      return
    }
    setStatus('submitting')
    // Simulate an API submit call.
    if (submitTimerRef.current) {
      clearTimeout(submitTimerRef.current)
    }
    submitTimerRef.current = setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) {
        clearTimeout(submitTimerRef.current)
      }
    }
  }, [])

  return (
    <main className="site-shell">
      <ChamberHero
        eyebrow="Internship"
        title="Learn the practice, not just the theory."
        subtitle="Our internship program provides law students with immersive, hands-on litigation experience and professional mentoring."
        primaryHref="#apply-form"
        primaryLabel="Apply now"
        background="/images/courtroom_hero.webp"
      />

      <section className="section story-grid story-grid--internship">
        <div className="story-panel story-panel--text story-panel--light">
          <p className="eyebrow">Program details</p>
          <h3>What interns can expect.</h3>
          {internships.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="story-panel story-panel--visual">
          <div className="story-panel__photo story-panel__photo--tall" style={{ backgroundImage: 'url(/images/internship_study.webp)' }} />
          <div className="story-panel__badge">Open for applications</div>
        </div>
      </section>

      <section className="section section-card section-card--notes">
        <div className="notes-grid">
          <article className="note-card">
            <span className="highlight__line" aria-hidden="true" />
            <h4>Research</h4>
            <p>Legal research, citation checking, and brief preparation.</p>
          </article>
          <article className="note-card">
            <span className="highlight__line" aria-hidden="true" />
            <h4>Mentoring</h4>
            <p>Briefing sessions, feedback, and supervised learning.</p>
          </article>
          <article className="note-card">
            <span className="highlight__line" aria-hidden="true" />
            <h4>Exposure</h4>
            <p>Court workflow, chamber etiquette, and professional rhythm.</p>
          </article>
        </div>
      </section>

      <section id="apply-form" className="section internship-form-section">
        <div className="internship-form-container">
          <div className="internship-form-card">
            <h3>Apply for Internship</h3>
            
            {status === 'success' ? (
              <div className="form-message form-message--success">
                <h4>Application Submitted Successfully!</h4>
                <p>Thank you for applying to Shivam Kumar Law Office. Our team will review your CV and get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="form-message form-message--error">
                    {errorMessage}
                  </div>
                )}
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Doe"
                      disabled={status === 'submitting'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="john@example.com"
                      disabled={status === 'submitting'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                      disabled={status === 'submitting'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Attach CV/Resume *</label>
                    <div className="form-file-container">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="form-file-input"
                        disabled={status === 'submitting'}
                      />
                      <div className="form-file-label">
                        <span>
                          {file ? (
                            <strong>Selected File: {file.name}</strong>
                          ) : (
                            <>Drag & drop or <strong>browse</strong> to upload</>
                          )}
                        </span>
                        <small className="file-info">Supports PDF, DOC, DOCX up to 5MB</small>
                      </div>
                    </div>
                  </div>

                  <div className="form-group form-group--full">
                    <label htmlFor="practiceArea" className="form-label">Area of Interest / Legal Role *</label>
                    <input
                      type="text"
                      id="practiceArea"
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Select or type a legal area"
                      list="practice-area-options"
                      autoComplete="off"
                      disabled={status === 'submitting'}
                      required
                    />
                    <datalist id="practice-area-options">
                      {practiceAreas.map((area) => (
                        <option key={area} value={area} />
                      ))}
                    </datalist>
                  </div>

                  <div className="form-group form-group--full">
                    <label htmlFor="coverLetter" className="form-label">Cover Letter / Statement of Purpose</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      className="form-textarea"
                      placeholder="Why do you want to intern at Shivam Kumar Law Office? Briefly explain your areas of interest."
                      disabled={status === 'submitting'}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="button button--gold form-submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
