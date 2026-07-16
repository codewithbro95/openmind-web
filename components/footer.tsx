import { Coffee, GitBranch } from 'lucide-react'

export function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/codewithbro95/openmind', external: true },
    { label: 'PyPI', href: 'https://pypi.org/project/openmind-core/', external: true },
    { label: 'MIT License', href: 'https://github.com/codewithbro95/openmind/blob/main/LICENSE', external: true },
    { label: 'Contribute', href: 'https://github.com/codewithbro95/openmind/blob/main/CONTRIBUTING.md', external: true },
  ]

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center text-base font-bold opacity-80 hover:opacity-100 transition-opacity" aria-label="OpenMind home">
          <span className="text-foreground">Open</span>
          <span className="text-primary">Mind</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              {link.label === 'GitHub' && <GitBranch size={13} />}
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground flex items-center gap-1.5 whitespace-nowrap">
          Built with <Coffee size={13} className="text-primary" aria-hidden="true" /> by{' '}
          <a
            href="https://github.com/codewithbro95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            CodeWithBro95
          </a>
        </p>
      </div>
    </footer>
  )
}
