'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Does OpenMind send my files anywhere?',
    a: 'No. Your files stay in place, and OpenMind processes them on your machine through your local model provider.',
  },
  {
    q: 'Which model providers does OpenMind support?',
    a: 'LM Studio is supported today. More local model providers are planned.',
  },
  {
    q: 'What file types can OpenMind index?',
    a: 'Text, Markdown, PDF, DOCX, CSV, HTML, and images. Local OCR handles scans and image-based PDFs.',
  },
  {
    q: 'Can I search without a chat model?',
    a: 'Yes. Search uses an embedding model; a chat model is only needed for generated answers.',
  },
  {
    q: 'Where is the data stored?',
    a: 'OpenMind keeps its state in SQLite and searchable memory in LanceDB, under your local OpenMind data directory.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Frequently asked questions.
          </h2>
        </div>

        <div className="divide-y-0">
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
