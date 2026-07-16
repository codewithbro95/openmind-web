import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = 'OpenMind - Private AI memory for your local files'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0d0d0d',
          color: '#f7f7f7',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'flex-start',
            border: '1px solid #2a2a2a',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            padding: '64px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700 }}>
            <span>Open</span>
            <span style={{ color: '#f97316' }}>Mind</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 900 }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
              Private AI memory for your local files.
            </div>
            <div style={{ color: '#a3a3a3', fontSize: 28, lineHeight: 1.4 }}>
              Index. Search. Ask. Your files stay on your computer.
            </div>
          </div>

          <div style={{ color: '#f97316', display: 'flex', fontSize: 22 }}>
            {siteConfig.githubUrl.replace('https://', '')}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
