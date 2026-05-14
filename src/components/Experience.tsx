'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '@/data/portfolio'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      // Animate each experience card
      gsap.fromTo(
        '.exp-card',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.exp-list',
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-2/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">04.</span>
          <div className="section-line" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="exp-list relative max-w-3xl">
          {/* Vertical line */}
          <div className="timeline-line absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

          <div className="space-y-8 pl-12">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="exp-card relative">
                {/* Timeline dot */}
                <div className="absolute -left-[2.55rem] top-4 w-3 h-3 bg-bg border-2 border-accent rounded-full z-10">
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                </div>

                {/* Card */}
                <div className="card-futuristic p-6 corner-tl corner-br group">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-accent/80 mt-0.5">{exp.company}</p>
                    </div>
                    <div className="font-mono text-xs text-muted border border-border px-3 py-1 whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Sequence number */}
                  <div className="absolute bottom-3 right-4 font-mono text-[10px] text-border">
                    {String(i + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
