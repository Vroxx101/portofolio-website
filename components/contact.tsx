"use client"

import { Github, MessageCircle, Instagram, Mail, Send, MapPin, Phone, Calendar, MessageCircle as MessageIcon } from "lucide-react"
import AnimatedDiv from "./animated-div"
import HoverAnimation from "./hover-animation"
import ScrollAnimation from "./scroll-animation"
import ShimmerEffect from "./shimmer-effect"
import RevealSection from "@/components/reveal-section"

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: "alfathirfahri23@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=alfathirfahri23@gmail.com",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: MessageIcon,
    label: "WhatsApp",
    value: "+62 814-6015-8336",
    href: "https://wa.me/6281460158336",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bandung, Indonesia",
    href: "#",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Always Open",
    href: "#",
    color: "from-purple-500 to-pink-500"
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Vroxx101", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/_fathirr17", label: "Instagram" },
]

export default function Contact() {
  return (
    <RevealSection className="container-custom py-24 lg:py-32" staggerChildren={true} childrenSelector=".animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 mt-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={option.label}
                className="glass-card p-6 rounded-2xl group hover:scale-[1.02] transition-all animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">{option.label}</h3>
                <a
                  href={option.href}
                  className="text-primary font-medium hover:underline block"
                  target={option.label !== "Location" && option.label !== "Availability" ? "_blank" : undefined}
                  rel={option.label !== "Location" && option.label !== "Availability" ? "noopener noreferrer" : undefined}
                >
                  {option.value}
                </a>
              </div>
            )
          })}
        </div>

        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl font-serif font-bold text-foreground mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <HoverAnimation key={social.label} scale={1.2}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-foreground hover:bg-gradient-to-r from-primary to-secondary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={28} />
                  </a>
                </HoverAnimation>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <HoverAnimation>
            <a
              href="whatsapp://send?phone=6281460158336&text=Hello%20Fathir,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
              className="cta-button flex items-center justify-center gap-3 px-8 py-6 text-lg"
            >
              Send a Message
              <Send size={20} />
            </a>
          </HoverAnimation>
        </div>
      </div>
    </RevealSection>
  )
}
