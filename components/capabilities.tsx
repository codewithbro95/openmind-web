import {
  FolderOpen,
  Search,
  MessageSquare,
  FileText,
  RefreshCw,
  Lock,
} from 'lucide-react'

const capabilities = [
  {
    icon: FolderOpen,
    title: 'Folder-level control',
    description: 'You choose every folder. OpenMind sees nothing else.',
  },
  {
    icon: RefreshCw,
    title: 'Incremental indexing',
    description: 'Only new or changed files are indexed. Everything else is skipped.',
  },
  {
    icon: Search,
    title: 'Search without chat',
    description: 'Find files by meaning without loading a chat model.',
  },
  {
    icon: MessageSquare,
    title: 'Source-grounded answers',
    description: 'Every answer links back to the files it came from.',
  },
  {
    icon: FileText,
    title: 'Built for real files',
    description: 'Search documents, PDFs, scans, screenshots, and images with local OCR.',
  },
  {
    icon: Lock,
    title: 'Private by default',
    description: 'Your files and memory stay on your machine. No cloud sync or telemetry.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Private memory,<br className="hidden sm:inline" /> built for real files.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-card p-6 flex flex-col gap-3 group hover:bg-secondary transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <cap.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-sm">{cap.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
