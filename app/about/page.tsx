"use client"

import { useEffect } from "react"
import { motion } from 'framer-motion'
import Header from "@/components/header"
import { useLoading } from '@/contexts/loading-context'
import Footer from "@/components/footer"

export default function AboutPage() {
  const { finishLoading } = useLoading();

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      finishLoading();
    }, 1800);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Content with initial fade animation */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }} // Delay until after loading screen
      >
        <Header />
        <main className="container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground mb-8">
              This is a sample page to test the loading animations. The same loading animation will appear when navigating to any page.
            </p>
            <div className="bg-card p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.7 + index * 0.1 }}
                    className="bg-muted p-4 rounded-lg"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}