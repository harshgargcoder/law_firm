'use client'

import { useEffect, useState } from 'react'

export function DisclaimerModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const seen = window.sessionStorage.getItem('law-firm-disclaimer-seen')
    if (!seen) {
      setOpen(true)
    }
  }, [])

  function closeModal() {
    window.sessionStorage.setItem('law-firm-disclaimer-seen', 'true')
    setOpen(false)
  }

  function handleDecline() {
    window.location.href = 'https://www.google.com'
  }

  if (!open) {
    return null
  }

  return (
    <div className="disclaimer" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className="disclaimer__backdrop" aria-hidden="true" />

      <div className="disclaimer__panel">
        <p className="eyebrow">Disclaimer</p>
        <h3 id="disclaimer-title">Bar Council of India Compliance</h3>
        
        <p>
          Under the rules of the Bar Council of India, Shivam Kumar Law Office (the &quot;Chamber&quot;) 
          is prohibited from soliciting work or advertising in any form or manner. By clicking 
          &quot;I Agree&quot; below, the user acknowledges and confirms the following:
        </p>
        
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', lineHeight: '1.75', color: 'rgba(255, 255, 255, 0.9)' }}>
          <li style={{ marginBottom: '10px' }}>
            The user wishes to gain more information about the Chamber, its practice areas, and its attorneys, 
            for their own information and use.
          </li>
          <li style={{ marginBottom: '10px' }}>
            The information is made available/provided to the user only on their specific request, and any 
            information obtained or material downloaded from this website is completely at the user&apos;s volition.
          </li>
          <li style={{ marginBottom: '10px' }}>
            Any transmission, receipt, or use of this site does not create any advocate-client relationship.
          </li>
          <li>
            The information on this website is provided solely for informational purposes and should not be 
            interpreted as legal advice or solicitation.
          </li>
        </ul>

        <div className="disclaimer__actions">
          <button className="button button--gold" onClick={closeModal}>
            I Agree
          </button>
          <button className="button button--ghost" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
