'use client'

import { useEffect, useState } from 'react'
import { ClientFeedback, readFeedback } from '@/components/client-feedback'

type InternshipApplication = {
  id: string
  name: string
  email: string
  practiceArea: string
  resumeName: string
  submittedAt: string
  status: 'pending'
}

export default function AdminDashboardPage() {
  const [feedback, setFeedback] = useState<ClientFeedback[]>([])
  const [applications, setApplications] = useState<InternshipApplication[]>([])

  useEffect(() => {
    const sync = () => setFeedback(readFeedback())
    const syncApplications = () => {
      const saved = window.localStorage.getItem('law-office-internship-applications')
      setApplications(saved ? JSON.parse(saved) as InternshipApplication[] : [])
    }
    sync()
    syncApplications()
    window.addEventListener('feedback-updated', sync)
    window.addEventListener('storage', sync)
    window.addEventListener('internship-application-updated', syncApplications)
    return () => {
      window.removeEventListener('feedback-updated', sync)
      window.removeEventListener('storage', sync)
      window.removeEventListener('internship-application-updated', syncApplications)
    }
  }, [])

  const pending = feedback.filter((item) => item.status === 'pending').length
  const published = feedback.filter((item) => item.status === 'approved').length
  const pendingApplications = applications.filter((item) => item.status === 'pending').length

  const updateFeedback = (next: ClientFeedback[]) => {
    window.localStorage.setItem('law-office-client-feedback', JSON.stringify(next))
    window.dispatchEvent(new Event('feedback-updated'))
    setFeedback(next)
  }

  const setFeedbackStatus = (id: string, status: ClientFeedback['status']) => {
    updateFeedback(feedback.map((item) => item.id === id ? { ...item, status } : item))
  }

  const deleteFeedback = (id: string) => {
    updateFeedback(feedback.filter((item) => item.id !== id))
  }

  return (
    <main className="admin-dashboard">
      <aside className="admin-dashboard__sidebar">
        <a href="/admin" className="admin-dashboard__brand">
          <span>SK</span>
          <strong>SHIVAM KUMAR<small>LAW OFFICE</small></strong>
        </a>
        <p className="admin-dashboard__label">Workspace</p>
        <nav className="admin-dashboard__nav" aria-label="Admin navigation">
          <a className="is-active" href="#overview">⌂ <span>Overview</span></a>
          <a href="/admin/reviews">✉ <span>Feedback reviews</span>{pending > 0 && <b>{pending}</b>}</a>
          <a href="/admin/applications">▣ <span>Applications</span></a>
          <a href="/blog">↗ <span>View website</span></a>
        </nav>
        <div className="admin-dashboard__sidebar-note">
          <span>ADMIN PANEL</span>
          <p>Review client feedback before it is published on Blogs.</p>
        </div>
      </aside>

      <section className="admin-dashboard__main" id="overview">
        <header className="admin-dashboard__header">
          <div>
            <p className="admin-dashboard__eyebrow">Admin workspace</p>
            <h1>Good morning, Shivam.</h1>
            <p>Here&apos;s what needs your attention today.</p>
          </div>
          <div className="admin-dashboard__profile"><span>SK</span><strong>Admin</strong></div>
        </header>

        <div className="admin-dashboard__stats">
          <article><span>✉</span><p>Pending feedback</p><strong>{pending}</strong><small>Needs review</small></article>
          <article><span>✓</span><p>Published feedback</p><strong>{published}</strong><small>Visible on Blogs</small></article>
          <article><span>▣</span><p>Applications</p><strong>{applications.length}</strong><small>Submitted applications</small></article>
          <article><span>↗</span><p>Analytics</p><strong>—</strong><small>Not connected</small></article>
        </div>

        <div className="admin-dashboard__grid">
          <section className="admin-dashboard__panel admin-dashboard__panel--wide">
            <div className="admin-dashboard__panel-title"><div><p>Blog moderation</p><h2>Recent client feedback</h2></div><a href="/admin/reviews">Review all →</a></div>
            <div className="admin-dashboard__table-wrap">
              {feedback.length === 0 ? <p className="admin-dashboard__empty">No client feedback has been submitted yet.</p> : <table className="admin-dashboard__table"><thead><tr><th>Date</th><th>Username / email</th><th>Matter / Feedback</th><th>Status</th><th>Actions</th></tr></thead><tbody>{feedback.slice(-5).reverse().map((item) => <tr key={item.id}><td>{new Date(item.submittedAt).toLocaleDateString('en-IN')}</td><td><strong>{item.name}</strong><small className="admin-dashboard__email">{item.email || 'Email not provided'}</small></td><td>{item.message}</td><td><b className={`admin-dashboard__status admin-dashboard__status--${item.status}`}>{item.status === 'approved' ? 'Published' : item.status === 'rejected' ? 'Rejected' : 'Pending'}</b></td><td><div className="admin-dashboard__row-actions"><button type="button" onClick={() => setFeedbackStatus(item.id, 'approved')}>Approve</button><button type="button" onClick={() => setFeedbackStatus(item.id, 'rejected')}>Reject</button><button type="button" onClick={() => deleteFeedback(item.id)}>Delete</button></div></td></tr>)}</tbody></table>}
            </div>
          </section>

          <section className="admin-dashboard__panel">
            <div className="admin-dashboard__panel-title"><div><p>Blog moderation</p><h2>Quick actions</h2></div></div>
            <div className="admin-dashboard__actions">
              <a href="/admin/reviews"><span>✉</span><div><strong>Review feedback</strong><small>{pending ? `${pending} waiting for approval` : 'No pending submissions'}</small></div><b>→</b></a>
              <a href="/blog"><span>↗</span><div><strong>Open Blogs page</strong><small>See published content</small></div><b>→</b></a>
              <a href="/services"><span>✎</span><div><strong>Website content</strong><small>Review public pages</small></div><b>→</b></a>
            </div>
          </section>

          <section className="admin-dashboard__panel admin-dashboard__panel--wide" id="applications">
            <div className="admin-dashboard__panel-title"><div><p>People &amp; culture</p><h2>Internship applications</h2></div><a href="/admin/applications">Review applications →</a></div>
            {applications.length === 0 ? <p className="admin-dashboard__empty">No internship applications have been submitted yet.</p> : <div className="admin-dashboard__pipeline"><div><strong>{applications.length}</strong><span>Total applications</span></div><div><strong>{pendingApplications}</strong><span>Pending review</span></div><div><strong>—</strong><span>Shortlisted not recorded</span></div><div><strong>—</strong><span>Interviews not recorded</span></div></div>}
          </section>
        </div>
      </section>
    </main>
  )
}
