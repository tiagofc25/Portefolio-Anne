"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experiences from "@/components/experiences"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const handleNavigate = (id: string) => {
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" })
    setActiveSection(id)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={handleNavigate} />
      
      <main className="flex-1">
        <div className={activeSection === "hero" ? "block animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both" : "hidden"}>
          <Hero onNavigate={handleNavigate} />
        </div>
        
        <div className={activeSection === "about" ? "block animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both" : "hidden"}>
          <About />
        </div>
        
        <div className={activeSection === "education" ? "block animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both" : "hidden"}>
          <Education />
        </div>
        
        <div className={activeSection === "experiences" ? "block animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both" : "hidden"}>
          <Experiences />
        </div>
        
        <div className={activeSection === "contact" ? "block animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both" : "hidden"}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}
