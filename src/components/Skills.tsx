'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython,
  SiTensorflow, SiDocker, SiPostgresql, SiFirebase, SiGit,
  SiFigma, SiLinux, SiLaravel
} from 'react-icons/si'
import { FaGolang } from "react-icons/fa6";


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const skillIcons: Record<string, { icon: React.ElementType; color: string }> = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#ffffff' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Laravel': { icon: SiLaravel, color: '#339933' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Golang': { icon: FaGolang, color: '#2496ED' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Git': { icon: SiGit, color: '#F05032' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  
}

const skills = Object.entries(skillIcons).map(([name, { icon, color }]) => ({
  name, icon, color
}))

const categories = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Figma'] },
  { name: 'Backend', items: ['Node.js', 'Golang', 'Laravel', 'Python', 'PostgreSQL', 'Firebase'] },
  { name: 'DevOps & Tools', items: ['Docker', 'Git', ] },
  { name: 'AI / ML', items: ['TensorFlow', 'Python'] },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-icon',
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        '.cat-bar',
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cat-list',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-accent/3 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-accent text-sm">05.</span>
          <div className="section-line" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Icon grid */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
              Tech Stack
            </p>
            <div className="skills-grid grid grid-cols-4 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="skill-icon group relative flex flex-col items-center gap-2 p-4 bg-surface border border-border hover:border-accent/40 transition-all duration-300 cursor-default"
                  >
                    <Icon
                      style={{ color: skill.color }}
                      className="text-3xl group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="font-mono text-[9px] text-muted group-hover:text-text transition-colors tracking-wide text-center leading-tight">
                      {skill.name}
                    </span>
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-8">
              By Category
            </p>
            <div className="cat-list space-y-6">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">
                      {cat.name}
                    </span>
                    <span className="font-mono text-[10px] text-accent/60">
                      {cat.items.length} tools
                    </span>
                  </div>
                  <div className="relative h-1 bg-surface-2 border border-border mb-3">
                    <div
                      className="cat-bar absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-2"
                      style={{ width: `${(cat.items.length / skills.length) * 100 * 2}%`, maxWidth: '85%' }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => {
                      const skillData = skillIcons[item]
                      const Icon = skillData?.icon
                      return (
                        <div key={item} className="flex items-center gap-1.5 bg-surface/60 border border-border/60 px-3 py-1">
                          {Icon && (
                            <Icon
                              className="text-sm"
                              style={{ color: skillData.color }}
                            />
                          )}
                          <span className="font-mono text-xs text-muted">{item}</span>
                        </div>
                      )
                    })}
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
