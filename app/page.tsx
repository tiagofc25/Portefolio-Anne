"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experiences from "@/components/experiences"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = ["hero", "about", "education", "experiences", "contact"]
    
    // Set up an intersection observer to highlight the active navbar link based on scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Trigger when the top of the section reaches 20% from the top of the viewport
        threshold: 0,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={handleNavigate} />
      
      <main className="flex-1">
        <div id="hero"><Hero onNavigate={handleNavigate} /></div>
        <div id="about"><About /></div>
        <div id="education"><Education /></div>
        <div id="experiences"><Experiences /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </div>
  )
}
