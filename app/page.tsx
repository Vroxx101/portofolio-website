"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Services from "@/components/services"
import Achievements from "@/components/achievements"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollDownIndicator from "@/components/scroll-down-indicator"
import CustomCursor from "@/components/custom-cursor"
import SectionObserver from "@/components/section-observer"

const ThreeDBackground = dynamic(() => import("@/components/three-d-background"), {
  ssr: false,
})

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">{mounted && <ThreeDBackground />}</div>

      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10">
        <CustomCursor />
        <Header />
        <main>
          <SectionObserver id="home">
            <Hero />
          </SectionObserver>
          <SectionObserver id="about">
            <About />
          </SectionObserver>
          <SectionObserver id="education">
            <Education />
          </SectionObserver>
          <SectionObserver id="services">
            <Services />
          </SectionObserver>
          <SectionObserver id="achievements">
            <Achievements />
          </SectionObserver>
          <SectionObserver id="projects">
            <Projects />
          </SectionObserver>
          <SectionObserver id="contact">
            <Contact />
          </SectionObserver>
        </main>
        <Footer />
        <ScrollToTop />
        <ScrollDownIndicator />
      </div>
    </div>
  )
}
