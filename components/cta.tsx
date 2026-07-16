'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function Cta() {
  const [copied, setCopied] = useState(false)
  const cmd = 'uv tool install openmind-core'

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 px-6 border-t border-border relative overflow-hidden">
      {/* Bottom orange glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #f97316 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl text-center relative">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary text-xs font-medium px-3 py-1 rounded-full mb-6">
          Open source · MIT
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight mb-6">
          Ask your computer what<br />
          it <span className="text-primary">already knows.</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 text-pretty max-w-lg mx-auto leading-relaxed">
          Install OpenMind in one command. Your files stay yours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 bg-card border border-border rounded-md px-4 py-2.5 font-mono text-sm w-full sm:w-auto">
            <span className="text-primary select-none">$</span>
            <span className="text-foreground">{cmd}</span>
            <button
              onClick={handleCopy}
              className="text-muted-foreground hover:text-foreground transition-colors ml-auto"
              aria-label="Copy command"
            >
              {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
            </button>
          </div>
          <a
            href="https://github.com/codewithbro95/openmind"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
