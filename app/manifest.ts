import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Private AI Memory`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d0d',
    theme_color: '#f97316',
    icons: [
      {
        src: '/om-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/om-apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
