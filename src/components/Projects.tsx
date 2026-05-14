'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image' // Import Next.js Image
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/portfolio'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">03.</span>
          <div className="section-line" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text tracking-tight">
            Projects
          </h2>
          <span className="ml-auto font-mono text-xs text-muted border border-border px-2 py-1">
            {projects.length} total
          </span>
        </div>

        {/* Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card card-futuristic corner-tl corner-br rounded-sm group relative overflow-hidden"
            >
              {/* Card top image container */}
              <div className="relative h-48 w-full border-b border-border overflow-hidden bg-surface">
                {/* Next.js Image Component */}
                <Image
                 src={project.imageUrl || '/placeholder.png'} // Cleans path if needed
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20 opacity-60" />

                {/* Project number */}
                <div className="absolute top-3 left-3 z-10 font-mono text-[10px] text-white bg-bg/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  #{String(project.id).padStart(2, '0')}
                </div>

                {/* Source links */}
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  {project.source.filter(s => s.link).map((src) => (
                    <a
                      key={src.title}
                      href={src.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[9px] text-accent border border-accent/40 px-2 py-0.5 bg-bg/80 backdrop-blur-sm hover:bg-accent hover:text-bg transition-all"
                    >
                      {src.title}
                    </a>
                  ))}
                </div>

                {/* Diagonal accent cutout */}
                <div className="absolute bottom-0 right-0 z-10 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-surface" />
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-text mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tag-pill opacity-60">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>

              {/* Hover bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}