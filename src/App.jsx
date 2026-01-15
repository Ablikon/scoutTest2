import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks' // Repurposed as Segments/Use Cases
import Results from './components/Results'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Results />
      <FAQ />
      <CTA />
    </div>
  )
}

export default App
