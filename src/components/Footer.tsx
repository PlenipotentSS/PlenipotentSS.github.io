export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer__copy">© {year} Steven Stevenson</p>
      <button
        className="footer__top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        Back to top
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </button>
    </footer>
  )
}
