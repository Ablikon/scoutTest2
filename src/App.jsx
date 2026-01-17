import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Integrations from './components/Integrations'
import Timeline from './components/Timeline'
import Results from './components/Results'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Problem />
          <div id="technology">
            <Solution />
          </div>
          <HowItWorks />
          {/* <Timeline /> */}
          <div id="integration">
            <Integrations />
          </div>
          <div id="results">
            <Results />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="faq">
            <FAQ />
          </div>
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
