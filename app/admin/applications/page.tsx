'use client'

import { useEffect, useState } from 'react'

type InternshipApplication = {
  id: string
  name: string
  email: string
  phone: string
  practiceArea: string
  coverLetter: string
  resumeName: string
  submittedAt: string
  status: 'pending'
}

const STORAGE_KEY = 'law-office-internship-applications'

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<InternshipApplication[]>([])

  useEffect(() => {
    const sync = () => {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      setApplications(saved ? JSON.parse(saved) as InternshipApplication[] : [])
    }
    sync()
    window.addEventListener('storage', sync)
    window.addEventListener('internship-application-updated', sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('internship-application-updated', sync)
    }
  }, [])

  const removeApplication = (id: string) => {
    const next = applications.filter((application) => application.id !== id)
    setApplications(next)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    window.dispatchEvent(new Event('internship-application-updated'))
  }

  return (
    <main className="admin-reviews-page">
      <header className="admin-reviews-header">
        <div>
          <p className="eyebrow">People &amp; culture</p>
          <h1>Internship applications</h1>
          <p>Review applications submitted through the public internship form.</p>
        </div>
        <div className="admin-reviews-header__links">
          <a className="admin-reviews-back" href="/admin">← Admin dashboard</a>
          <a className="admin-reviews-back" href="/internship">View public form →</a>
        </div>
      </header>

      <section className="admin-review-summary">
        <div><strong>{applications.length}</strong><span>Total applications</span></div>
        <div><strong>{applications.length}</strong><span>Pending review</span></div>
      </section>

      <section className="admin-review-list">
        <h2>Submitted applications</h2>
        {applications.length === 0 ? <p className="admin-review-empty">No internship applications have been submitted yet.</p> : applications.slice().reverse().map((application) => (
          <article className="admin-review-card" key={application.id}>
            <div className="admin-review-card__meta">
              <strong>{application.name}</strong>
              <span>{application.email}</span>
              <span>{application.phone}</span>
              <span>{application.practiceArea}</span>
            </div>
            <p>{application.coverLetter || 'No cover letter was provided.'}</p>
            <div className="admin-application-details">
              <span>Submitted: {new Date(application.submittedAt).toLocaleDateString('en-IN')}</span>
              <span>CV: {application.resumeName}</span>
            </div>
            <div className="admin-review-card__actions">
              <button type="button" className="admin-review-delete" onClick={() => removeApplication(application.id)}>Delete</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
