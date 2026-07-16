import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Install } from '@/components/install'
import { Capabilities } from '@/components/capabilities'
import { Philosophy } from '@/components/philosophy'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { Footer } from '@/components/footer'
import { faqItems, siteConfig, siteUrl } from '@/lib/site'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl.toString(),
    description: siteConfig.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS, Windows, Linux',
    description: siteConfig.description,
    url: siteUrl.toString(),
    downloadUrl: siteConfig.pypiUrl,
    codeRepository: siteConfig.githubUrl,
    license: siteConfig.licenseUrl,
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: siteConfig.authorName,
      url: siteConfig.authorUrl,
    },
    featureList: [
      'Local document and image indexing',
      'Semantic search across local files',
      'Source-grounded AI answers',
      'Offline OCR for scans and image-based PDFs',
      'Incremental background indexing',
      'User-approved folder access',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <Install />
        <Capabilities />
        <Philosophy />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
