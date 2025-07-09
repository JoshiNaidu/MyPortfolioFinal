import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <section id="home" className="relative h-screen overflow-hidden">
        <Hero />
      </section>

      <section id="about" className="py-20 relative z-30">
        <About />
      </section>

      <section id="experience" className="py-20 bg-slate-800/50 relative z-30">
        <Experience />
      </section>

      <section id="skills" className="py-20 relative z-30">
        <Skills />
      </section>

      <section id="contact" className="py-20 bg-slate-800/50 relative z-30">
        <Contact />
      </section>
    </div>
  )
}

export default App