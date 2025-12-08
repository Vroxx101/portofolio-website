import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-card rounded-none border-x-0 border-b-0 text-center py-8">
      <div className="container-custom">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          &copy; {currentYear} Fathir. All rights reserved. Crafted with{" "}
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </p>
      </div>
    </footer>
  )
}
