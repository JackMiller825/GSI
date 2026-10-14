import { lazy, Suspense, useEffect, useState } from 'react'
import { startPublicAnalytics } from './analytics/tracker.ts'
import { isDashboardLocation } from './dashboard/path.ts'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { useHashAlignment } from './hooks/useHashAlignment.ts'
import { Community } from './sections/Community.tsx'
import { Hero } from './sections/Hero.tsx'
import { HowToBuy } from './sections/HowToBuy.tsx'
import { Story } from './sections/Story.tsx'
import { Tokenomics } from './sections/Tokenomics.tsx'

const Dashboard = lazy(() => import('./dashboard/Dashboard.tsx'))

export default function App() {
  const [dashboard, setDashboard] = useState(() => isDashboardLocation())

  useEffect(() => {
    const sync = () => setDashboard(isDashboardLocation())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  useEffect(() => {
    if (!dashboard) return
    const meta = document.querySelector('meta[name="robots"]')
    const previous = meta?.getAttribute('content') ?? null
    meta?.setAttribute('content', 'noindex, nofollow')
    const previousTitle = document.title
    document.title = 'Private Visitor Dashboard'
    return () => {
      if (previous) meta?.setAttribute('content', previous)
      document.title = previousTitle
    }
  }, [dashboard])

  if (dashboard) {
    return (
      <Suspense fallback={<main className="dash"><p>Loading dashboard…</p></main>}>
        <Dashboard />
      </Suspense>
    )
  }

  return <PublicSite />
}

function PublicSite() {
  useHashAlignment()
  useEffect(() => startPublicAnalytics(), [])

  return (
    <>
      <div className="starfield" aria-hidden="true" />
      <div className="cape-drift" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Tokenomics />
        <HowToBuy />
        <Community />
      </main>
      <Footer />
    </>
  )
}
