"use client"

import { Code2, Palette, Smartphone } from "lucide-react"
import HoverAnimation from "./hover-animation"
import RevealSection from "@/components/reveal-section"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Creating responsive and interactive websites using modern technologies like HTML, CSS, JavaScript, and React.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing beautiful and user-friendly interfaces that enhance user experience for web applications.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks great on all devices from mobile to desktop with modern CSS techniques.",
  },
]

export default function Services() {
  return (
    <RevealSection id="services" className="container-custom py-24 lg:py-32" staggerChildren={true} childrenSelector=".animate-fade-in">
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">
          My <span>Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <HoverAnimation key={index} scale={1.05} className="group glass-card p-8 lg:p-10 text-center hover:scale-105 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.15}s` }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </HoverAnimation>
          )
        })}
      </div>
    </RevealSection>
  )
}
