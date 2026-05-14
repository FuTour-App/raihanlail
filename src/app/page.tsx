'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="relative py-10 border-t border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg">
            <span className="text-accent">/</span>
            <span className="text-text">Lail</span>
            <span className="text-muted">.</span>
          </div>
          <p className="font-mono text-xs text-muted text-center">
            <span className="text-accent">©</span> 2026 Raihan Lail Ramadhan
           
          </p>
       
        </div>
      </footer>
    </main>
  )
}
