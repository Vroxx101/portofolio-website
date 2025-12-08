"use client"

import { motion } from "framer-motion"
import { MousePointer2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function ScrollDownIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollToElement } = useSmoothScroll()

  const handleClick = () => {
    scrollToElement('about')
  }

  // Hide the indicator after the user has scrolled past the hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        if (rect.bottom < 0) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      aria-label="Scroll down"
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="p-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 group-hover:bg-primary/20 transition-all"
      >
        <MousePointer2 size={20} className="text-primary" />
      </motion.div>
      <span className="mt-2 text-xs text-muted-foreground font-medium tracking-wider uppercase">
        Scroll Down
      </span>
    </motion.button>
  )
}