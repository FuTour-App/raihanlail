'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.5 }
    )

    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu animation logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // Prevent scroll when menu is open
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: 'power4.out' })
      gsap.fromTo(
        '.mobile-link',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      )
    } else {
      document.body.style.overflow = 'unset'
      gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power4.in' })
    }
  }, [isOpen])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || isOpen
            ? 'py-3 bg-[rgba(4,8,18,0.9)] backdrop-blur-md border-b border-border'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-lg tracking-wider z-[70]">
            <span className="text-accent">/</span>
            <span className="text-text">Lail</span>
            <span className="text-muted">.</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200 tracking-widest uppercase"
                >
                  <span className="text-accent opacity-60 mr-1">0{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-mono text-xs text-accent border border-accent/40 px-4 py-2 hover:bg-accent/10 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[70] p-2 text-accent focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
              <span className={`h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'w-6 translate-y-2.5 -rotate-45' : 'w-6'}`} />
              <span className={`h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : 'w-4'}`} />
              <span className={`h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[55] bg-[rgba(4,8,18,0.98)] backdrop-blur-xl translate-x-full md:hidden flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        </div>

        <ul className="flex flex-col items-center gap-8">
          {navItems.map((item, i) => (
            <li key={i} className="mobile-link">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-3xl text-text hover:text-accent transition-colors tracking-tight"
              >
                <span className="font-mono text-xs text-accent mr-2">0{i + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-link pt-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm text-accent border border-accent/40 px-8 py-4 hover:bg-accent/10 transition-all"
            >
              Get In Touch
            </a>
          </li>
        </ul>
        
        {/* Decorative background element for mobile menu */}
        <div className="absolute bottom-10 font-mono text-[10px] text-muted tracking-[0.5em] uppercase opacity-30">
          Raihan Lail // 2026
        </div>
      </div>
    </>
  )
}