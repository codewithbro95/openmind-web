export function Philosophy() {
  const principles = [
    { label: 'Simple core', description: 'Index. Search. Ask.' },
    { label: 'Local data', description: 'Your memory stays with you.' },
    { label: 'Your folders', description: 'You decide what is indexed.' },
    { label: 'Visible sources', description: 'Every answer shows its origin.' },
    { label: 'Replaceable models', description: 'The memory outlives the model.' },
    { label: 'Trust by design', description: 'No access without approval.' },
  ]

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight mb-6">
              Years of files.<br />
              No reorganizing required.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty max-w-md">
              Your Downloads folder should not need a cleanup before it becomes useful. OpenMind
              remembers where everything is, so you do not have to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {principles.map((p) => (
              <div
                key={p.label}
                className="border border-border rounded-lg p-4 bg-card hover:border-primary/30 transition-colors"
              >
                <p className="text-foreground text-sm font-semibold mb-1">{p.label}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
