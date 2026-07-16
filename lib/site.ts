const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')

export const siteUrl = new URL(deploymentHost)
export const isPreviewDeployment = process.env.VERCEL_ENV === 'preview'

export const siteConfig = {
  name: 'OpenMind',
  title: 'OpenMind: Private AI Memory for Your Local Files',
  description:
    'Index, search, and ask questions across documents, PDFs, scans, and images while your files and searchable memory stay private on your computer.',
  shortDescription: 'Private, local AI memory for your files.',
  githubUrl: 'https://github.com/codewithbro95/openmind',
  pypiUrl: 'https://pypi.org/project/openmind-core/',
  licenseUrl: 'https://github.com/codewithbro95/openmind/blob/main/LICENSE',
  authorName: 'CodeWithBro95',
  authorUrl: 'https://github.com/codewithbro95',
} as const

export const faqItems = [
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
] as const
