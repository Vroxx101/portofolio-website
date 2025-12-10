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
import { motion } from 'framer-motion'
import { useLoading } from '@/contexts/loading-context'

const ThreeDBackground = dynamic(() => import("@/components/three-d-background"), {
  ssr: false,
})

export default function Home() {
  const { finishLoading } = useLoading();
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    // This effect ensures the ThreeJS background loads after the animation
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 1500); // Slightly before the loading screen disappears to prepare

    // Finish loading after components have loaded
    const finishTimer = setTimeout(() => {
      finishLoading();
    }, 2200); // Finish slightly before the loading screen timeout

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [finishLoading])

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {hasLoaded && <ThreeDBackground />}
      </div>

      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content with initial fade animation */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }} // Delay until after loading screen
      >
        <CustomCursor />
        <Header />
        <main>
          <SectionObserver id="home">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              <Hero />
            </motion.div>
          </SectionObserver>
          <SectionObserver id="about">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
            >
              <About />
            </motion.div>
          </SectionObserver>
          <SectionObserver id="education">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
            >
              <Education />
            </motion.div>
          </SectionObserver>
          <SectionObserver id="services">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
            >
              <Services />
            </motion.div>
          </SectionObserver>
          <SectionObserver id="achievements">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.8 }}
            >
              <Achievements />
            </motion.div>
          </SectionObserver>
          <SectionObserver id="projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.0 }}
            >
              <Projects />
            </motion.div>
          </SectionObserver>
          <SectionObserver id="contact">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.2 }}
            >
              <Contact />
            </motion.div>
          </SectionObserver>
        </main>
        <Footer />
        <ScrollToTop />
        <ScrollDownIndicator />
      </motion.div>
    </div>
  )
}
