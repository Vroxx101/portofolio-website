import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LoadingProvider } from "@/contexts/loading-context"
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
  metadataBase: new URL("https://fathirdev.vercel.app"),
  title: "Fathir — Web Developer Portfolio",
  description:
    "Full-stack Developer specializing in responsive, interactive, and modern web development.",
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Portfolio Website",
    "UI/UX",
    "Web Programmer Indonesia",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fathir — Web Developer Portfolio",
    description:
      "Full-stack Developer specializing in responsive & modern web design.",
    url: "https://fathirdev.vercel.app",
    siteName: "Fathir Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fathir Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fathir — Web Developer Portfolio",
    description:
      "Full-stack Developer specializing in responsive & modern web design.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance boost for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#6C63FF" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>

      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <LoadingProvider>{children}</LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
