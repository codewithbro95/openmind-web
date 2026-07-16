export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Index',
      description:
        'Choose your folders. OpenMind indexes documents and images locally in the background.',
      detail: 'Only approved folders. Nothing uploaded.',
    },
    {
      number: '02',
      title: 'Search',
      description:
        'Find files by meaning, even when you cannot remember the name or location.',
      detail: 'No chat model required.',
    },
    {
      number: '03',
      title: 'Ask',
      description:
        'Get streaming answers grounded in your files, with sources you can verify.',
      detail: 'Your model. Your files. Your answers.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Memory-first, not chat-first.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-pretty leading-relaxed">
            Three simple operations turn scattered files into useful memory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {steps.map((step) => (
            <div key={step.number} className="bg-card p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-mono text-sm">{step.number}</span>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              <p className="text-xs text-primary/70 font-mono mt-auto">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Architecture callout */}
        <div className="mt-8 border border-primary/20 bg-primary/5 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-primary font-mono text-xs uppercase tracking-wide whitespace-nowrap">Architecture</span>
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">SQLite</span> keeps track of what OpenMind is doing.{' '}
            <span className="text-foreground font-medium">LanceDB</span> stores what OpenMind knows.
          </p>
        </div>
      </div>
    </section>
  )
}
