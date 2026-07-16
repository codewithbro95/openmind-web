import Image from 'next/image'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const contributors = [
  {
    name: siteConfig.communityName,
    description: 'A community of Cameroonian developers who love open source.',
    logo: '/oss-cameroon.png',
    href: siteConfig.communityUrl,
  },
]

export function Contributors() {
  return (
    <section
      id="contributors"
      aria-labelledby="contributors-heading"
      className="scroll-mt-14 border-t border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div className="max-w-md">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Contributors
          </p>
          <h2
            id="contributors-heading"
            className="text-balance text-3xl font-bold text-foreground sm:text-4xl"
          >
            We grow in the open.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Built with people and communities who believe personal AI should stay open and local.
          </p>

          <a
            href={`${siteConfig.githubUrl}/blob/main/CONTRIBUTING.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <GitBranch size={16} aria-hidden="true" />
            Become a contributor
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="">
          {contributors.map((contributor) => (
            <a
              key={contributor.name}
              href={contributor.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${contributor.name}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 transition-colors hover:text-primary sm:gap-7 sm:py-8"
            >
              <Image
                src={contributor.logo}
                alt={`${contributor.name} logo`}
                width={240}
                height={216}
                className="h-20 w-20 rounded-full bg-white object-cover ring-1 ring-border transition-transform duration-200 group-hover:scale-105 sm:h-24 sm:w-24"
              />
              <span>
                <span className="block text-base font-semibold text-foreground sm:text-lg">
                  {contributor.name}
                </span>
                <span className="mt-1 block text-sm  tracking-widest text-muted-foreground">
                  {contributor.description}
                </span>
              </span>
              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="text-muted-foreground transition-colors group-hover:text-primary"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
