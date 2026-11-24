'use client'

import { FormEvent, useEffect, useState } from 'react'

export type ClientFeedback = {
  id: string
  name: string
  email: string
  matter: string
  message: string
  rating: number
  submittedAt: string
  status: 'pending' | 'approved' | 'rejected'
}

const STORAGE_KEY = 'law-office-client-feedback'

const defaultFeedback: ClientFeedback[] = []

export function readFeedback(): ClientFeedback[] {
  if (typeof window === 'undefined') return defaultFeedback

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (!saved) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultFeedback))
    return defaultFeedback
  }

  try {
    return (JSON.parse(saved) as ClientFeedback[]).filter((item) => item.id !== 'sample-1')
  } catch {
    return defaultFeedback
  }
}

function saveFeedback(feedback: ClientFeedback[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback))
  window.dispatchEvent(new Event('feedback-updated'))
}

export function ClientFeedbackSection() {
  const [feedback, setFeedback] = useState<ClientFeedback[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    const sync = () => setFeedback(readFeedback())
    sync()
    window.addEventListener('feedback-updated', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('feedback-updated', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const approved = feedback.filter((item) => item.status === 'approved')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const entry: ClientFeedback = {
      id: crypto.randomUUID(),
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      matter: String(form.get('matter') || '').trim(),
      message: String(form.get('message') || '').trim(),
      rating: Number(form.get('rating') || 5),
      submittedAt: new Date().toISOString(),
      status: 'pending',
    }

    saveFeedback([...readFeedback(), entry])
    setFeedback(readFeedback())
    setShowConfirmation(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="section section-card feedback-section">
        <div className="section-card__header">
          <p className="eyebrow">Client experiences</p>
          <h3>Words from people we have represented.</h3>
          <p>Feedback is reviewed before publication. We share only comments that clients have chosen to make public.</p>
        </div>
        <div className="feedback-grid">
          {approved.map((item) => (
            <article className="feedback-card" key={item.id}>
              <div className="feedback-stars" aria-label={`${item.rating} out of 5 stars`}>{'★'.repeat(item.rating)}</div>
              <p>“{item.message}”</p>
              <footer><strong>{item.name}</strong><span>{item.matter}</span></footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section feedback-form-section">
        <div className="feedback-form-copy">
          <p className="eyebrow">Share your experience</p>
          <h3>Your feedback helps us improve.</h3>
          <p>Leave a short note about your experience with the office. Your submission will remain private until it is reviewed and approved.</p>
        </div>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Matter type<input name="matter" placeholder="For example: civil matter" /></label>
          <label>Rating<select name="rating" defaultValue="5"><option value="5">5 — Excellent</option><option value="4">4 — Very good</option><option value="3">3 — Good</option><option value="2">2 — Fair</option><option value="1">1 — Poor</option></select></label>
          <label className="feedback-form__full">Your feedback<textarea name="message" required rows={5} placeholder="Tell us about your experience" /></label>
          <button className="button button--gold" type="submit">Submit for review</button>
        </form>
      </section>

      {showConfirmation && (
        <div className="feedback-modal-backdrop" role="presentation" onClick={() => setShowConfirmation(false)}>
          <div className="feedback-modal" role="dialog" aria-modal="true" aria-labelledby="feedback-modal-title" onClick={(event) => event.stopPropagation()}>
            <span className="feedback-modal__icon" aria-hidden="true">✓</span>
            <p className="eyebrow">Submission received</p>
            <h3 id="feedback-modal-title">Your feedback has been noted.</h3>
            <p>Thank you for sharing your experience. Our office will review it before anything is published on the Blogs page.</p>
            <button className="button button--gold" type="button" onClick={() => setShowConfirmation(false)}>Done</button>
          </div>
        </div>
      )}
    </>
  )
}
