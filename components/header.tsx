"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { motion } from 'framer-motion'
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
    // Close mobile menu first
    setIsOpen(false)

    // Wait for menu close animation
    setTimeout(() => {
      const headerOffset = 80
      const elementPosition = targetSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }, 300) // match your animation duration
  }
}


  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-card rounded-none border-x-0 border-t-0 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          {/* Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3.0 }}
          >
            <HoverAnimation scale={1.05} duration={0.3}>
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, '#home')}
                className="text-2xl font-serif font-bold text-primary tracking-tight"
              >
                Fathir
              </a>
            </HoverAnimation>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="relative group"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 3.2 + index * 0.1 }}
                >
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
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3.8 }}
          >
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
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
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
        </motion.div>
      </div>
    </motion.header>
  )
}
