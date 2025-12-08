"use client"

import { GraduationCap } from "lucide-react"
import HoverAnimation from "./hover-animation"
import RevealSection from "@/components/reveal-section"

const educationData = [
  {
    period: "2023 - Present",
    school: "SMK Merdeka Bandung",
    description:
      "Rekayasa Perangkat Lunak (Software Engineering). Focusing on web development and programming fundamentals.",
  },
  {
    period: "2020 - 2023",
    school: "SMP AL-Halim Garut",
    description: "Completed junior high school with focus on science and mathematics.",
  },
  {
    period: "2014 - 2020",
    school: "SD Cibeunying",
    description: "Elementary school education with emphasis on basic computer skills and creativity.",
  },
]

export default function Education() {
  return (
    <RevealSection id="education" className="container-custom py-24 lg:py-32" staggerChildren={true} childrenSelector=".animate-fade-in">
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto mt-16">
        {/* Timeline line */}
        <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <HoverAnimation key={index} scale={1.02} className="relative animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
              {/* Timeline dot */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

              {/* Content */}
              <div
                className={`pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:pr-[calc(50%+2rem)] lg:text-right" : "lg:pl-[calc(50%+2rem)]"}`}
              >
                <div className="glass-card p-6 lg:p-8 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-2 mb-3 lg:justify-start">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold text-sm">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.school}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </HoverAnimation>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
