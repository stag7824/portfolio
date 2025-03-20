import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'

// Import components
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import HexRain from './components/HexRain'

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-primary min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        
        <HexRain />
        
        <footer className="py-8 px-4 bg-gray-900 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Syed Talha Ahmed Gardazi. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This portfolio is open-source and available on GitHub.
            </p>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

export default App
