const cards = [
  {
    icon: '⚙️',
    title: 'Engineering depth',
    text: "Former software engineer and SRE with a decade across full stack, data science, and ML/AI. I've shipped production systems at scale and led the teams behind them.",
    accent: 'orange',
  },
  {
    icon: '◎',
    title: 'Capital as a tool',
    text: 'I manage family and personal assets across multiple vehicles. Deploying capital is, to me, a time-complexity problem — unlock present value, reduce future friction.',
    accent: 'green',
  },
  {
    icon: '↗',
    title: 'Business & leadership',
    text: "I've run teams and guided companies to profitability. The pattern is always the same: find the constraint, fix the system, let the people thrive.",
    accent: 'orange',
  },
]

export default function About() {
  return (
    <section id="about" aria-label="About">
      <div className="section__divider" />
      <div className="section">
        <p className="section__label">Background</p>
        <h2 className="section__heading">
          Operator by nature,<br />
          investor by design.
        </h2>
        <div className="about__grid">
          {cards.map(card => (
            <div key={card.title} className={`about__card${card.accent === 'green' ? ' about__card--green' : ''}`}>
              <div className="about__card-icon">{card.icon}</div>
              <h3 className="about__card-title">{card.title}</h3>
              <p className="about__card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
