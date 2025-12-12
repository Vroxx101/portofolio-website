"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollDownIndicator from "@/components/scroll-down-indicator"
import CustomCursor from "@/components/custom-cursor"
import SectionObserver from "@/components/section-observer"
import { motion } from 'framer-motion'
import { useLoading } from '@/contexts/loading-context'

const About = dynamic(() => import("@/components/about"), { ssr: false, loading: () => <div className="h-96" /> })
const Education = dynamic(() => import("@/components/education"), { ssr: false, loading: () => <div className="h-96" /> })
const Services = dynamic(() => import("@/components/services"), { ssr: false, loading: () => <div className="h-96" /> })
const Achievements = dynamic(() => import("@/components/achievements"), { ssr: false, loading: () => <div className="h-96" /> })
const Projects = dynamic(() => import("@/components/projects"), { ssr: false, loading: () => <div className="h-96" /> })
const Contact = dynamic(() => import("@/components/contact"), { ssr: false, loading: () => <div className="h-96" /> })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })
const ThreeDBackground = dynamic(() => import("@/components/three-d-background"), { ssr: false })

export default function Home() {
  const { finishLoading } = useLoading();
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 1500);

    const finishTimer = setTimeout(() => {
      finishLoading();
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [finishLoading])

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {hasLoaded && <ThreeDBackground />}
      </div>

      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-background/50 to-background" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
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
      </motion.div>
    </div>
  )
}
