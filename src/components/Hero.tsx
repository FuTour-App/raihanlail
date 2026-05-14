'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython,
  SiTensorflow, SiDocker, SiPostgresql, SiFirebase, SiGit,
  SiFigma, SiLinux
} from 'react-icons/si'

// Updated with icons, specific brand colors, and varying sizes
const floatingItems = [
  { label: <SiReact />, x: '10%', y: '20%', color: 'text-[#61DAFB]', size: 'text-2xl' },
  { label: <SiPython />, x: '80%', y: '15%', color: 'text-[#3776AB]', size: 'text-3xl' },
  { label: <SiTensorflow />, x: '85%', y: '65%', color: 'text-[#FF6F00]', size: 'text-4xl' },
  { label: <SiTypescript />, x: '8%', y: '70%', color: 'text-[#3178C6]', size: 'text-xl' },
  { label: <SiNodedotjs />, x: '15%', y: '45%', color: 'text-[#339933]', size: 'text-3xl' },
  { label: <SiDocker />, x: '78%', y: '40%', color: 'text-[#2496ED]', size: 'text-2xl' },
  { label: <SiNextdotjs />, x: '70%', y: '80%', color: 'text-white', size: 'text-xl' },
  { label: <SiPostgresql />, x: '25%', y: '10%', color: 'text-[#4169E1]', size: 'text-lg' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const floatRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      floatRefs.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }
    )

    tl.fromTo(
      '.hero-line',
      { opacity: 0, y: 60, skewX: -5 },
      { opacity: 1, y: 0, skewX: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.3'
    )

    tl.fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.4'
    )

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )

    gsap.to('.scanline', {
      y: '100vh',
      duration: 4,
      ease: 'none',
      repeat: -1,
      delay: 1,
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (clientX - cx) / cx
      const dy = (clientY - cy) / cy

      floatRefs.current.forEach((el, i) => {
        if (!el) return
        const depth = 0.02 + i * 0.008
        gsap.to(el, {
          x: dx * 30 * depth * 100,
          y: dy * 20 * depth * 100,
          duration: 0.8,
          ease: 'power1.out',
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden"
    >
      <div className="scanline absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none z-10 opacity-50" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-2/5 blur-[100px]" />
      </div>

      {/* Floating Icons rendering logic */}
      {floatingItems.map((item, i) => (
        <div
          key={i}
          ref={el => { floatRefs.current[i] = el }}
          className={`absolute flex items-center justify-center p-3 border border-border/30 bg-surface/20 backdrop-blur-md rounded-xl transition-all hover:border-accent/50 hover:bg-surface/60 group float-${(i % 3) + 1}`}
          style={{ left: item.x, top: item.y }}
        >
          <div className={`${item.color} ${item.size} transition-transform duration-300 group-hover:scale-110`}>
            {item.label}
          </div>
        </div>
      ))}

      <div className="absolute top-20 left-8 w-20 h-20 border-l border-t border-accent/20" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-accent/20" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-border bg-surface/60 px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Available for work
          
        </div>

        <h1 className="font-display font-bold leading-none mb-6 overflow-hidden">
          <span className="hero-line block text-[clamp(2rem,6vw,4rem)] text-muted tracking-widest uppercase">
            Hello, I&apos;m
          </span>
          <span
            className="hero-line glitch-text block text-[clamp(3.5rem,10vw,7.5rem)] text-text tracking-tight"
            data-text="Raihan Lail"
          >
            Raihan Lail 
          </span>
          <span className="hero-line block text-[clamp(1.5rem,4vw,2.5rem)] text-accent tracking-wider">
            Full Stack Developer
            <span className="cursor text-text">_</span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="max-w-xl mx-auto text-muted font-body text-base md:text-lg leading-relaxed mb-10"
        >
          I build fast, scalable, and intelligent digital products — specialized in web-based software development.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative font-mono text-sm text-bg bg-accent px-8 py-3 overflow-hidden hover:bg-accent/90 transition-colors"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-accent-2 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              View Projects →
            </span>
          </a>
          <a
            href="#contact"
            className="font-mono text-sm text-accent border border-accent/40 px-8 py-3 hover:bg-accent/10 hover:border-accent transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  )
}