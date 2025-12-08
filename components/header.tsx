"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import HoverAnimation from "./hover-animation"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  {
    label: "Services",
    children: [
      { href: "#services", label: "Services" },
      { href: "#achievements", label: "Achievements" },
      { href: "#projects", label: "Projects" },
    ],
  },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle("light-mode")
  }

  const handleNavClick = () => setIsOpen(false)

  // Fungsi untuk scroll ke section dengan animasi halus
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Offset untuk header
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-card rounded-none border-x-0 border-t-0 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          {/* Brand */}
          <HoverAnimation scale={1.05} duration={0.3}>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-2xl font-serif font-bold text-primary tracking-tight"
            >
              Fathir
            </a>
          </HoverAnimation>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.children ? (
                    <>
                      <HoverAnimation scale={1.05} duration={0.2}>
                        <button className="flex items-center gap-1.5 text-foreground/80 font-medium hover:text-primary transition-colors py-2">
                          {item.label}
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </button>
                      </HoverAnimation>
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="glass-card py-2 min-w-[180px] shadow-xl">
                          {item.children.map((child) => (
                            <HoverAnimation key={child.href} scale={1.02} duration={0.2}>
                              <a
                                href={child.href}
                                onClick={(e) => scrollToSection(e, child.href)}
                                className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                              >
                                {child.label}
                              </a>
                            </HoverAnimation>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <HoverAnimation scale={1.05} duration={0.2}>
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="text-foreground/80 font-medium hover:text-primary transition-colors relative py-2 group/link"
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover/link:w-full transition-all duration-300" />
                      </a>
                    </HoverAnimation>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <HoverAnimation scale={1.1} duration={0.2}>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl hover:bg-foreground/5 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </HoverAnimation>

            <HoverAnimation scale={1.1} duration={0.2}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-xl hover:bg-foreground/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </HoverAnimation>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
        >
          <nav className="glass-card p-4 rounded-2xl">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.children ? (
                    <div className="space-y-1">
                      <span className="block px-4 py-2 text-foreground/60 text-sm font-medium">{item.label}</span>
                      {item.children.map((child) => (
                        <HoverAnimation key={child.href} scale={1.05} duration={0.2}>
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={(e) => {
                              scrollToSection(e, child.href);
                              handleNavClick();
                            }}
                            className="block px-6 py-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                          >
                            {child.label}
                          </a>
                        </HoverAnimation>
                      ))}
                    </div>
                  ) : (
                    <HoverAnimation key={item.href} scale={1.05} duration={0.2}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          scrollToSection(e, item.href);
                          handleNavClick();
                        }}
                        className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                    </HoverAnimation>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
