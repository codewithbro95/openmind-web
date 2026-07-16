'use client'

import { useEffect, useRef, useState } from 'react'
import { CopyCommandButton } from '@/components/copy-command-button'

type CodeLine = {
  prompt?: string
  code: string
  comment?: string
}

function CodeBlock({ lines }: { lines: CodeLine[] }) {
  const [isVisible, setIsVisible] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const installerCommand = lines[0]?.code ?? ''

  useEffect(() => {
    const terminal = terminalRef.current
    if (!terminal) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(terminal)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={terminalRef} className="relative bg-[#0d0d0d] border border-border rounded-xl overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/50" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <span className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <CopyCommandButton
          text={installerCommand}
          showLabel
          className="text-xs text-[#8a8a8a] hover:text-white"
        />
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={`${line.code}-${i}`}
            className={`flex min-h-[1.75rem] items-start gap-2 ${isVisible ? 'terminal-line-enter' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 180}ms` }}
          >
            {line.prompt !== undefined && (
              <span className="text-primary select-none mt-0.5">{line.prompt}</span>
            )}
            <span>
              <span className="text-[#f5f5f5]">{line.code}</span>
              {line.comment && <span className="text-[#8a8a8a]">  # {line.comment}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Install() {
  const [tab, setTab] = useState<'uv' | 'pipx'>('uv')

  const uvLines = [
    { prompt: '$', code: 'uv tool install openmind-core' },
    { prompt: '$', code: 'openmind setup', comment: 'configure model provider' },
    { prompt: '$', code: 'openmind index start', comment: 'start background indexing' },
    { prompt: '$', code: 'openmind search "order receipt"' },
    { prompt: '$', code: 'openmind ask "What was the order ID?"' },
  ]

  const pipxLines = [
    { prompt: '$', code: 'pipx install openmind-core' },
    { prompt: '$', code: 'openmind setup', comment: 'configure model provider' },
    { prompt: '$', code: 'openmind index start', comment: 'start background indexing' },
    { prompt: '$', code: 'openmind search "order receipt"' },
    { prompt: '$', code: 'openmind ask "What was the order ID?"' },
  ]

  return (
    <section id="install" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Installation</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Install. Set up. Ask.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-pretty leading-relaxed">
            Install the <code className="text-primary font-mono">openmind</code> CLI and build your private memory.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Code block */}
          <div>
            <div className="flex gap-2 mb-4">
              {(['uv', 'pipx'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-md text-sm font-mono transition-all ${
                    tab === t
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <CodeBlock key={tab} lines={tab === 'uv' ? uvLines : pipxLines} />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-5">
            {[
              {
                step: '1',
                title: 'Install',
                body: (
                  <>
                    Run <code className="text-primary font-mono text-sm">uv tool install openmind-core</code> or{' '}
                    <code className="text-primary font-mono text-sm">pipx install openmind-core</code>.
                  </>
                ),
              },
              {
                step: '2',
                title: 'Setup',
                body: (
                  <>
                    Run <code className="text-primary font-mono text-sm">openmind setup</code> to connect your local model provider.
                    Currently supports <span className="text-foreground">LM Studio</span>.
                  </>
                ),
              },
              {
                step: '3',
                title: 'Index',
                body: (
                  <>
                    Choose the folders OpenMind can access. Indexing runs in the background.
                  </>
                ),
              },
              {
                step: '4',
                title: 'Search or Ask',
                body: (
                  <>
                    Find files by meaning or ask questions with sources attached.
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-mono font-bold">{item.step}</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-2">
              <a
                href="https://pypi.org/project/openmind-core/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View on PyPI
              </a>
              <a
                href="https://github.com/codewithbro95/openmind"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
