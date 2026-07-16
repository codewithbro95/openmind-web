import { GitBranch, Menu, Star, X } from 'lucide-react'

const GITHUB_REPOSITORY_API = 'https://api.github.com/repos/codewithbro95/openmind'

type GitHubRepository = {
  stargazers_count?: number
}

async function getGitHubStars(): Promise<number | null> {
  try {
    const response = await fetch(GITHUB_REPOSITORY_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(2000),
    })

    if (!response.ok) return null

    const repository = (await response.json()) as GitHubRepository
    return typeof repository.stargazers_count === 'number'
      ? repository.stargazers_count
      : null
  } catch {
    return null
  }
}

function formatStars(stars: number): string {
  return new Intl.NumberFormat('en', {
    notation: stars >= 1000 ? 'compact' : 'standard',
    maximumFractionDigits: 1,
  }).format(stars)
}

function StarCount({ stars }: { stars: number | null }) {
  if (stars === null) return null

  return (
    <span className="flex items-center gap-1 rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-foreground">
      <Star size={12} className="text-primary" aria-hidden="true" />
      <span>{formatStars(stars)}</span>
    </span>
  )
}

export async function Navbar() {
  const stars = await getGitHubStars()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center text-lg font-bold" aria-label="OpenMind home">
          <span className="text-foreground">Open</span>
          <span className="text-primary">Mind</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#install" className="hover:text-foreground transition-colors">Install</a>
          <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/codewithbro95/openmind"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitBranch size={16} />
            <span>GitHub</span>
            <StarCount stars={stars} />
          </a>
        </div>

        {/* Native disclosure works even before JavaScript hydration. */}
        <details className="md:hidden group">
          <summary
            className="list-none cursor-pointer text-muted-foreground hover:text-foreground [&::-webkit-details-marker]:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={20} className="group-open:hidden" />
            <X size={20} className="hidden group-open:block" />
          </summary>

          <nav aria-label="Mobile navigation" className="fixed top-14 left-0 right-0 border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm shadow-xl">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How it works</a>
            <a href="#install" className="text-muted-foreground hover:text-foreground">Install</a>
            <a href="#capabilities" className="text-muted-foreground hover:text-foreground">Capabilities</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
            <a
              href="https://github.com/codewithbro95/openmind"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <GitBranch size={16} />
              <span>GitHub</span>
              <StarCount stars={stars} />
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}
