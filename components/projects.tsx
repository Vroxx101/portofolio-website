"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import RevealSection from "@/components/reveal-section"
import { motion } from "framer-motion"

const projects: Project[] = [
  {
    title: "Website Absensi after schola",
    description: "Sistem web responsif untuk manajemen kehadiran siswa dengan basis data backend yang aman dan efisien.",
    image: "/project1.png",
    tech: ["PHP", "HTML", "CSS", "JS", "MySQL"],
    link: "https://absensi.afterschola.com/",
  },
  {
    title: "Company Profile",
    description: "Website profil perusahaan modern yang menampilkan informasi perusahaan, layanan, dan portofolio dengan desain responsif.",
    image: "/project3.png",
    tech: ["JavaScript", "HTML", "CSS", "Next.js"],
    link: "https://kka-afterschola.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Portofolio minimalis dengan animasi halus dan mode gelap untuk menampilkan karya dan keterampilan secara profesional.",
    image: "/project6.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#", // Tambahkan URL proyek di sini
  },
  {
    title: "Website Kemitraan Digital",
    description: "Platform kemitraan digital yang mempromosikan berbagai jenis pendidikan dan kursus untuk memperluas akses pendidikan.",
    image: "/project2.png",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://kodingka.afterschola.com/",
  },
  {
    title: "Website Absensi Magang",
    description: "Solusi web responsif untuk manajemen kehadiran peserta magang dengan basis data terintegrasi untuk pelaporan otomatis.",
    image: "/project4.png",
    tech: ["JavaScript", "HTML", "CSS", "MySQL"],
    link: "https://magang.afterschola.com/",
  },
  {
    title: "Website Cofee Shop",
    description: "Website kafe kopi yang menawan dengan animasi halus, menu interaktif, dan sistem pemesanan yang mudah digunakan.",
    image: "/project5.jpg",
    tech: ["JavaScript", "HTML", "CSS", "MySQL"],
    link: "#",
  },
]

// Tambahkan interface untuk tipe proyek
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

export default function Projects() {
  // Mendapatkan semua teknologi unik dari proyek
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.tech))
  );

  // Menambahkan filter "All" di awal
  const filters = ["All", ...allTechnologies];

  // State untuk filter yang dipilih
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter proyek berdasarkan teknologi yang dipilih
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.tech.includes(activeFilter));

  return (
    <RevealSection className="container-custom py-16 lg:py-24" staggerChildren={true} childrenSelector=".animate-fade-in">
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group glass-card overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 70, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.34, 1.56, 0.64, 1] // Custom cubic-bezier for bouncy effect
            }}
            whileHover={{
              y: -15,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={192}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay on hover */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium backdrop-blur-sm animate-pulse">
                  View Project <ExternalLink size={16} />
                </span>
              </a>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Mobile View Project Button */}
              <div className="mt-auto md:hidden">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project <ExternalLink size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  )
}
