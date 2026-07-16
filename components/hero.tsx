import { CopyCommandButton } from '@/components/copy-command-button'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Subtle orange glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #f97316 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl text-center relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary text-xs font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Open source · MIT license
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight mb-6">
          The <span className="text-primary">intelligence layer</span><br />
          your computer has been missing.
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10 text-pretty">
          Turn approved folders into private, searchable memory. Find any file or ask grounded
          questions without sending your data to the cloud.
        </p>

        {/* Primary install command */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-3 bg-card border border-border rounded-md px-4 py-2.5 font-mono text-sm w-full sm:w-auto">
            <span className="text-primary select-none">$</span>
            <span className="text-foreground">uv tool install openmind-core</span>
            <CopyCommandButton
              text="uv tool install openmind-core"
              className="text-muted-foreground hover:text-foreground"
            />
          </div>
          <a
            href="https://github.com/codewithbro95/openmind"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all w-full sm:w-auto text-center"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}
