import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Fathir | Web Developer Portfolio",
  description: "Full-stack Developer creating beautiful, responsive & interactive websites",
  keywords: "Web Developer, React, JavaScript, UI/UX, Portfolio",
  openGraph: {
    title: "Fathir | Web Developer Portfolio",
    description: "Full-stack Developer Portfolio",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#6C63FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased bg-dark text-light overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
