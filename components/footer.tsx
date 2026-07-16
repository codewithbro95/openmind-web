import Image from 'next/image'
import { GitBranch } from 'lucide-react'

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
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/openmind-logo.png"
            alt="OpenMind"
            width={110}
            height={30}
            className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
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

        <p className="text-xs text-muted-foreground">
          MIT © OpenMind Core
        </p>
      </div>
    </footer>
  )
}
