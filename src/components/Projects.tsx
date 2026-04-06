interface Project {
  name: string
  url: string
  tag: string
  target: boolean;
  description: string
  accent: 'orange' | 'green'
}

const projects: Project[] = [
  {
    name: 'SennzaFinne',
    url: 'https://www.sennzafinne.com',
    tag: 'Distillery',
    target: true,
    description: 'Pacfici Northwest Tastes in local Seattle Amaro',
    accent: 'orange',
  },
  {
    name: 'Sweet As Home',
    url: 'https://www.sweetashome.co',
    tag: 'Real Estate',
    target: true,
    description: 'Stewarding assets and building for the future.',
    accent: 'green',
  },
  {
    name: 'Conifore',
    url: 'https://www.conifore.com',
    tag: 'Lending & Capital',
    target: true,
    description: 'A financial services venture focused on clarity, precision, and long-term value creation.',
    accent: 'orange',
  },
  {
    name: 'In the Works...',
    url: 'javascript:void(0);',
    tag: 'Software',
    target: false,
    description: 'Nothing to share yet....',
    accent: 'green',
  },
  {
    name: 'And more...',
    url: 'javascript:void(0);',
    tag: '...',
    target: false,
    description: '',
    accent: 'orange',
  },
]

export default function Projects() {
  return (
    <section id="ventures" aria-label="Ventures">
      <div className="section__divider" />
      <div className="section">
        <p className="section__label">Ventures</p>
        <h2 className="section__heading">
          Projects I'm<br />
          working with.
        </h2>
        <div className="projects__list">
          {projects.map(p => (
            <a
              key={p.name}
              className={`project-row${p.accent === 'green' ? ' project-row--green' : ''}`}
              href={p.url}
              target={p.target ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <span className="project-row__tag">{p.tag}</span>
              <div className="project-row__body">
                <div className="project-row__name">{p.name}</div>
                <div className="project-row__desc">{p.description}</div>
              </div>
              <ExternalArrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExternalArrow() {
  return (
    <svg className="project-row__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  )
}
