"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from 'framer-motion'
import HoverAnimation from "./hover-animation"

export default function Hero() {
  return (
    <section className="container-custom min-h-screen flex items-center pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Content */}
        <div className="space-y-8 relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">Full-stack Developer</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-balance mt-6"
          >
            Hello, I'm <span className="text-gradient">Fathir</span>
          </motion.h1>

          {/* Typing text */}
          {/* Typing text (desktop only) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
            className="
            text-lg sm:text-xl text-muted-foreground
            overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1 w-fit
            animate-typing
            hidden sm:block
            mt-4
          "
          >
            I build beautiful, responsive & interactive design.
          </motion.p>

          {/* Normal text (mobile only) */}
          <p className="text-lg text-muted-foreground sm:hidden mt-4">
            I build beautiful, responsive & interactive design.
          </p>


          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <HoverAnimation scale={1.05}>
              <a href="#contact" className="cta-button">
                Get In Touch
                <ArrowRight size={18} />
              </a>
            </HoverAnimation>
            <HoverAnimation scale={1.03}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all font-medium"
              >
                View Projects
              </a>
            </HoverAnimation>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity animate-pulse-glow"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Image container */}
            <HoverAnimation scale={1.03}>
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1"
                  initial={{ rotate: -10 }}
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full rounded-full bg-background" />
                </motion.div>
                <Image
                  src="/fatir.png"
                  alt="Fathir - Web Developer"
                  width={400}
                  height={400}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </HoverAnimation>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4.0 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-7 h-10 rounded-full border-2 border-primary/50 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
