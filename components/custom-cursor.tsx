"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches
    setIsPointerFine(isFine)

    if (!isFine) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY })
      }, 70)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", handleMouseMove)

    const links = document.querySelectorAll("a, button, .cta-button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter)
      link.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter)
        link.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  if (!isPointerFine) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? "scale(2)" : "scale(1)"}`,
          transition: "transform 0.15s ease-out",
          backgroundColor: "var(--primary)",
        }}
      />

      {/* Follower cursor */}
      <div
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? "scale(1.5)" : "scale(1)"}`,
          opacity: isHovering ? 0.5 : 0.25,
          transition: "transform 0.25s ease-out, opacity 0.2s ease",
          border: "2px solid var(--primary)",
        }}
      />
    </>
  )
}
