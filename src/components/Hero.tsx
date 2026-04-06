export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">Hello, I am Steven Stevenson</p>

      <h1 className="hero__name">
        Every problem<br />
        is a <em>puzzle.</em>
      </h1>

      <p className="hero__tagline">
        Engineer, investor, and operator — I build things, back things, and find the levers that make both work.
      </p>

      <div className="hero__pills">
        <span className="hero__pill hero__pill--orange">Full Stack</span>
        <span className="hero__pill hero__pill--orange">ML / AI</span>
        <span className="hero__pill hero__pill--orange">SRE</span>
        <span className="hero__pill hero__pill--green">Business Management</span>
        <span className="hero__pill hero__pill--green">Team Leadership</span>
        <span className="hero__pill hero__pill--green">Operations</span>
      </div>

      <button className="hero__cta" onClick={() => scrollTo('connect')}>
        Get in touch
        <ArrowRight />
      </button>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
