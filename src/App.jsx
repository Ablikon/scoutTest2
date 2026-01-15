import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Integrations from './components/Integrations'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Results from './components/Results'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Timeline />
      <Problem />
      <Solution />
      <Integrations />
      <HowItWorks />
      <Pricing />
      <Results />
      <FAQ />
      <CTA />
    </div>
  )
}

export default App
