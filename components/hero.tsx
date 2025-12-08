"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import HoverAnimation from "./hover-animation"
import RevealSection from "@/components/reveal-section"

export default function Hero() {
  return (
    <RevealSection id="home" className="container-custom min-h-screen flex items-center pt-32 pb-20" y={30} duration={1.2}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Content */}
        <div className="space-y-8 relative z-10">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-medium text-sm">Full-stack Developer</span>
              </div>
            </div>

            {/* Title */}
            <div className="animate-fade-in mt-10" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-balance">
                Hello, I'm <span className="text-gradient">Fathir</span>
              </h1>
            </div>

            {/* Typing text */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg sm:text-xl text-muted-foreground overflow-hidden whitespace-nowrap border-r-2 border-primary pr-1 w-fit animate-typing">
                I build beautiful, responsive & interactive websites.
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-in mt-8" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-wrap gap-4">
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
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end relative z-10">
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity animate-pulse-glow" />

              {/* Image container */}
              <HoverAnimation scale={1.03}>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background" />
                  </div>
                  <Image
                    src="/fatir.png"
                    alt="Fathir - Web Developer"
                    width={400}
                    height={400}
                    priority
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </HoverAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <div className="animate-bounce">
          <div className="w-7 h-10 rounded-full border-2 border-primary/50 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></div>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
