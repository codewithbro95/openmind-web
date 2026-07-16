'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GitBranch, Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/openmind-logo.png"
            alt="OpenMind logo"
            width={130}
            height={36}
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
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
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">How it works</a>
          <a href="#install" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Install</a>
          <a href="#capabilities" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Capabilities</a>
          <a href="#faq" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">FAQ</a>
          <a
            href="https://github.com/codewithbro95/openmind"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <GitBranch size={16} /> GitHub
          </a>
        </div>
      )}
    </header>
  )
}
