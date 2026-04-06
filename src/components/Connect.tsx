const CALENDAR_URL = 'https://calendar.app.google/gyEcR3WvVVftFkjt9'

export default function Connect() {
  return (
    <section id="connect" aria-label="Connect">
      <div className="section__divider" />
      <div className="section">
        <p className="section__label">Connect</p>
        <div className="connect__inner">
          <h2 className="connect__heading">
            Have a puzzle<br />
            worth solving?
          </h2>

          <a className="connect__cal-btn" href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
            <div className="connect__cal-icon">
              <CalendarIcon />
            </div>
            <div className="connect__cal-text">
              <div className="connect__cal-title">Book a meeting</div>
              <div className="connect__cal-sub">Google Calendar · 30 min</div>
            </div>
            <ExternalArrow />
          </a>

          <div className="connect__secondary">
            <a className="connect__secondary-link" href="mailto:info@stevenstevenson.com">
              <MailIcon />
              info@stevenstevenson.com
            </a>
            <a
              className="connect__secondary-link"
              href="https://www.linkedin.com/in/stevenstevenson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function ExternalArrow() {
  return (
    <svg className="connect__cal-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  )
}
