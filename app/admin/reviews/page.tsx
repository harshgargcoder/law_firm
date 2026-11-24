'use client'

import { useEffect, useState } from 'react'
import { ClientFeedback, readFeedback } from '@/components/client-feedback'

function updateFeedback(items: ClientFeedback[]) {
  window.localStorage.setItem('law-office-client-feedback', JSON.stringify(items))
  window.dispatchEvent(new Event('feedback-updated'))
}

export default function AdminReviewsPage() {
  const [items, setItems] = useState<ClientFeedback[]>([])

  useEffect(() => setItems(readFeedback()), [])

  const setStatus = (id: string, status: ClientFeedback['status']) => {
    const next = items.map((item) => item.id === id ? { ...item, status } : item)
    setItems(next)
    updateFeedback(next)
  }

  const removeFeedback = (id: string) => {
    const next = items.filter((item) => item.id !== id)
    setItems(next)
    updateFeedback(next)
  }

  const pending = items.filter((item) => item.status === 'pending')
  const approved = items.filter((item) => item.status === 'approved')
  const rejected = items.filter((item) => item.status === 'rejected')

  return (
    <main className="admin-reviews-page">
      <header className="admin-reviews-header">
        <div>
          <p className="eyebrow">Admin review</p>
          <h1>Client feedback</h1>
          <p>Review submissions before they appear on the public Blogs page.</p>
        </div>
        <div className="admin-reviews-header__links">
          <a className="admin-reviews-back" href="/admin">← Admin dashboard</a>
          <a className="admin-reviews-back" href="/blog">View public page →</a>
        </div>
      </header>

      <section className="admin-review-summary">
        <div><strong>{pending.length}</strong><span>Pending review</span></div>
        <div><strong>{approved.length}</strong><span>Published</span></div>
        <div><strong>{rejected.length}</strong><span>Rejected</span></div>
      </section>

      <section className="admin-review-list">
        <h2>Pending submissions</h2>
        {pending.length === 0 ? <p className="admin-review-empty">No feedback is waiting for review.</p> : pending.map((item) => (
          <article className="admin-review-card" key={item.id}>
            <div className="admin-review-card__meta"><strong>{item.name}</strong><span>{item.email || 'Email not provided'}</span><span>{item.matter || 'Client feedback'}</span><span>{'★'.repeat(item.rating)}</span></div>
            <p>“{item.message}”</p>
            <div className="admin-review-card__actions">
              <button type="button" className="admin-review-approve" onClick={() => setStatus(item.id, 'approved')}>Approve &amp; publish</button>
              <button type="button" className="admin-review-reject" onClick={() => setStatus(item.id, 'rejected')}>Reject</button>
              <button type="button" className="admin-review-delete" onClick={() => removeFeedback(item.id)}>Delete</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
