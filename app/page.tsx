import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Install } from '@/components/install'
import { Capabilities } from '@/components/capabilities'
import { Philosophy } from '@/components/philosophy'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Install />
      <Capabilities />
      <Philosophy />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
