"use client"

import SkillBar from "./skill-bar"
import RevealSection from "@/components/reveal-section"

const skills = [
  { name: "HTML & CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "UI/UX Design", percentage: 80 },
]

export default function About() {
  return (
    <RevealSection className="container-custom py-24 lg:py-32" staggerChildren={true} childrenSelector=".animate-fade-in">
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
        {/* About Text */}
        <div
          className="glass-card p-8 lg:p-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Who am I?</h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I am a student of Merdeka Vocational School majoring in RPL (Software Engineering), I focus on website
              development, with full stack developer skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a student, I'm constantly learning and exploring new technologies to improve my skills. I enjoy working
              on personal projects and collaborating with others to create amazing digital experiences.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div
          className="glass-card p-8 lg:p-10 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">My Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} inView={true} />
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
