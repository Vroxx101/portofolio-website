"use client"

import { Trophy, Award, GraduationCap, Briefcase } from "lucide-react"
import HoverAnimation from "./hover-animation"
import RevealSection from "@/components/reveal-section"

const achievements = [
  {
    icon: Trophy,
    title: "Web Development Course",
    description: "Completed advanced web development course with focus on React and modern JavaScript.",
  },
  {
    icon: Award,
    title: "UI/UX Design Certification",
    description: "Earned certification in user interface and user experience design principles.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Maintained top grades in computer science and mathematics throughout school.",
  },
  {
    icon: Briefcase,
    title: "20+ Projects",
    description: "Created over 20 web projects ranging from simple websites to complex applications.",
  },
]

export default function Achievements() {
  return (
    <RevealSection className="container-custom py-24 lg:py-32" staggerChildren={true} childrenSelector=".animate-fade-in">
      <div className="glass-card p-8 lg:p-12 rounded-3xl">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-title">
            My <span>Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <HoverAnimation key={index} scale={1.05} className="group p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 text-center transition-all duration-500 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-serif font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{achievement.description}</p>
              </HoverAnimation>
            )
          })}
        </div>
      </div>
    </RevealSection>
  )
}
