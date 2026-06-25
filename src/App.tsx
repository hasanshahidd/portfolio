import { useLenis } from './hooks/useLenis'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Divider from './components/Divider'
import ScrollProgress from './components/ScrollProgress'
import AuroraBackground from './components/AuroraBackground'
import FlowFieldBackground from './three/FlowFieldBackground'
import TechMarquee from './components/TechMarquee'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Process from './sections/Process'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Stats from './sections/Stats'
import Contact from './sections/Contact'

export default function App() {
  useLenis()

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <AuroraBackground />
      <FlowFieldBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <TechMarquee />
        <Services />
        <About />
        <Divider />
        <Process />
        <Skills />
        <Divider flip />
        <Projects />
        <Divider />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
