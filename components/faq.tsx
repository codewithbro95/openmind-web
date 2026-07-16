import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/lib/site'

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-border last:border-b-0">
      <summary
        className="flex w-full cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden"
      >
        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          {q}
        </span>
        <ChevronDown
          size={16}
          className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="pb-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </details>
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
          {faqItems.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
