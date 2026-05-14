'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content > *',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Background Glow - Centered */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-3/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 ">
         <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">06.</span>
          <div className="section-line" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text tracking-tight">
            Contact
          </h2>
        </div>
        {/* Header - Centered */}

        <div className="contact-content space-y-12 text-center">
          {/* Main Text */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-3xl md:text-5xl text-text leading-tight">
              Let&apos;s build something{' '}
              <span className="text-accent">extraordinary</span> together.
            </h3>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              I&apos;m currently open to freelance projects, internships, and full-time roles. 
              Whether you have a project in mind or just want to connect — my inbox is always open.
            </p>
          </div>

          {/* Contact links - Adjusted to a centered grid/list */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Email', val: 'raihanlail07@gmail.com', href: 'mailto:raihanlail07@gmail.com', icon: '✉' },
              { label: 'LinkedIn', val: 'linkedin.com/in/raihan-lail-ramadhan', href: 'https://www.linkedin.com/in/raihan-lail-ramadhan-750909220/', icon: '🔗' },
              { label: 'GitHub', val: 'github.com/raihanlail', href: 'https://github.com/raihanlail', icon: '⌥' },
              { label: 'Instagram', val: '@raihanlail07', href: 'https://www.instagram.com/raihanlail07/', icon: '📷' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-4 p-5 bg-surface border border-border hover:border-accent/40 transition-all duration-300 text-left"
              >
                <span className="text-xl w-8 text-center">{item.icon}</span>
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-wider">{item.label}</div>
                  <div className="font-mono text-sm text-text group-hover:text-accent transition-colors">{item.val}</div>
                </div>
                <span className="ml-auto text-muted group-hover:text-accent group-hover:translate-x-1 transition-all text-lg">→</span>
              </a>
            ))}
          </div>

          {/* Final CTA */}
          <div className="pt-8">
            <a 
              href="mailto:alex@example.com"
              className="inline-block font-mono text-sm border border-accent/40 px-12 py-4 text-accent hover:bg-accent/10 transition-all"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}