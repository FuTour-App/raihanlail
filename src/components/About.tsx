'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '12+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '2+', label: 'Internships' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Section Line
      gsap.fromTo(
        '.section-line',
        { width: 0 },
        {
          width: '80px', // Adjust to your preferred line length
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Photo entrance with a subtle scale
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, x: -60, scale: 0.9, rotate: -2 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      // Text content stagger
      gsap.fromTo(
        '.about-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      )

      // Stats pop-in with back ease
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 90%',
          },
        }
      )

      // Continuous subtle float for the photo
      gsap.to(photoRef.current, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-2/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">02.</span>
          <div className="section-line h-px bg-accent/30" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div ref={photoRef} className="relative group">
            <div className="relative w-72 mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-accent/20 -z-10 transition-colors group-hover:border-accent/40" />
              <div className="absolute -inset-6 border border-accent/10 -z-20" />

              {/* Photo placeholder */}
             <Image src="/photo.png" width={800} height= {800} alt="photo"/>

              {/* Name tag */}
              <div className="absolute -bottom-4 -right-4 bg-surface border border-accent/30 px-4 py-2 shadow-xl">
                <div className="font-mono text-xs text-muted">
                  <span className="text-accent">$</span> whoami
                </div>
                <div className="font-display font-bold text-sm text-text">Raihan Lail</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="about-content space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-text mb-1">
                Hi, I&apos;m <span className="text-accent">Raihan Lail Ramadhan</span> 👋
              </h3>
              <p className="font-mono text-xs text-muted tracking-wider uppercase">
                Full Stack Developer &amp; AI Enthusiast
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              I&apos;m a passionate software developer based in Indonesia, dedicated to crafting elegant digital web-based
              solutions that sit at the intersection of beautiful design and powerful technology.
            </p>

            <p className="text-muted leading-relaxed">
              From building machine learning pipelines to designing intuitive user interfaces, I love
              the full spectrum of software development. I&apos;m currently looking for opportunities where
              I can contribute, grow, and continue learning.
            </p>

            {/* Info list */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: 'Location', val: 'Indonesia 🇮🇩' },
                { label: 'Status', val: '✅ Available' },
                { label: 'Focus', val: 'Full Stack Dev' },
                { label: 'Education', val: 'IS Degree' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 group/item">
                  <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0 transition-transform group-hover/item:scale-150" />
                  <span className="font-mono text-xs text-muted">{item.label}:</span>
                  <span className="font-mono text-xs text-text">{item.val}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-grid grid grid-cols-4 gap-4 pt-4 border-t border-border">
              {stats.map((s, i) => (
                <div key={i} className="stat-item text-center group/stat">
                  <div className="font-display font-bold text-2xl text-accent transition-transform group-hover/stat:-translate-y-1">{s.value}</div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-wider leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}