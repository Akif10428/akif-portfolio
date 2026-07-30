import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { CurrentFocus } from './components/CurrentFocus'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { WhyMe } from './components/WhyMe'
import { MessengerFloat } from './components/MessengerFloat'
import { initAnalytics } from './lib/analytics'
import './App.css'

function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CurrentFocus />
        <Services />
        <WhyMe />
        <Work />
        <Contact />
      </main>
      <Footer />
      <MessengerFloat />
    </>
  )
}

export default App
