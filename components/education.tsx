"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown, CheckCircle, GraduationCap } from 'lucide-react'

interface EducationItem {
  id: string
  degree: string
  school: string
  period: string
  specialization: string
  details: string[]
}

const education: EducationItem[] = [
  {
    id: "efap",
    degree: "EFAP",
    school: "Paris, France",
    period: "September 2025 - Present",
    specialization: "Luxury Marketing & Strategic Communication",
    details: [
      "Courses in strategic communication, luxury marketing, and event project management",
      "Training in brand storytelling, press relations, and content creation",
      "Development of creative concepts and participation in real client projects",
      "Management & Project Skills",
    ],
  },
  {
    id: "eiml",
    degree: "Bachelor Luxury Marketing and Management",
    school: "EIML - International School of Luxury Marketing, Paris, France",
    period: "June 2022 - Present",
    specialization: "Communication, Management & Marketing",
    details: [
      "Courses in communication, management and marketing",
      "Courses in fashion history, art history, design history and film history",
      "Courses in press relations and writing techniques",
      "English and Mandarin",
      "Seminars in gemology, textile, perfume and semiology",
    ],
  },
  {
    id: "shihchien",
    degree: "International Exchange Program",
    school: "Shih Chien University",
    period: "September 2025 - January 2026",
    specialization: "4th Year Preparatory Program for MBA - Full English Track",
    details: [
      "Completed courses taught entirely in English focusing on international business, design, and digital innovation",
      "Practiced and improved Mandarin language skills in an immersive environment",
      "Studied cross-cultural management and global marketing strategies",
      "Engaged in creative projects involving digital communication and content creation",
      "Strengthened intercultural communication and adaptability through collaboration with diverse international peers",
    ],
  },
]

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex((el) => el === entry.target)
            if (index !== -1) setExpandedIndex(index)
          }
        })
      },
      { root: null, rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    )

    cardsRef.current.forEach((card) => { if (card) observer.observe(card) })
    return () => observer.disconnect()
  }, [isMobile])

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-background w-full overflow-x-hidden border-t border-border">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16 lg:mb-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-3">
                  Education
                </h2>
              </div>
            </div>
            <div className="h-1 w-20 bg-linear-to-r from-[#4A1525] to-[#4A1525] rounded-full" />
          </div>

          {/* Intro - Paris & Taipei */}
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-8 md:gap-16">
              <h3 className="text-4xl md:text-5xl font-normal tracking-tight text-foreground uppercase">
                Paris
              </h3>
              <div className="h-0.5 w-16 bg-linear-to-r from-[#4A1525] to-[#4A1525] rounded-full" />
              <h3 className="text-4xl md:text-5xl font-normal tracking-tight text-foreground uppercase">
                Taipei
              </h3>
            </div>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              A dual journey of creativity and culture
            </p>

            {/* Images */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl shadow-sm border border-border h-64 md:h-80">
                <Image
                  src="/images/paris.jpg"
                  alt="Paris"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-sm border border-border h-64 md:h-80">
                <Image
                  src="/images/taipei.jpg"
                  alt="Taipei"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Education List */}
          <div className="space-y-4 md:space-y-6 mb-24">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className="group w-full"
                ref={(el) => { cardsRef.current[index] = el }}
                onMouseEnter={!isMobile ? () => setExpandedIndex(index) : undefined}
                onMouseLeave={!isMobile ? () => setExpandedIndex(null) : undefined}
              >
                {/* Timeline line and dot */}
                <div className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center flex-shrink-0 pt-2">
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 bg-[#4A1525] border-[#4A1525]`}
                    />
                    {index !== education.length - 1 && (
                      <div className="w-px h-24 md:h-32 bg-gradient-to-b from-[#4A1525]/60 to-transparent mt-2" />
                    )}
                  </div>

                  {/* Card content */}
                  <div 
                    onClick={() => toggleExpanded(index)}
                    className="w-full text-left pb-4 cursor-pointer focus:outline-none"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="p-4 md:p-6 lg:p-8 border border-border rounded-lg md:rounded-xl hover:border-[#4A1525]/60 transition-[border-color,box-shadow,background-color] duration-300 hover:shadow-lg hover:bg-muted/30">
                      {/* Header with title */}
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground group-hover:text-[#4A1525] transition-colors duration-300 break-words">
                              {edu.degree}
                            </h3>
                          </div>

                          {/* School and period */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 text-sm md:text-base">
                            <span className="font-semibold text-[#4A1525]">{edu.school}</span>
                            <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                              <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 bg-border rounded-full flex-shrink-0" />
                              {edu.period}
                            </span>
                          </div>
                        </div>

                        <ChevronDown
                          size={20}
                          className={`text-[#4A1525] flex-shrink-0 transition-all duration-300 mt-1 ${
                            expandedIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Main description */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{edu.specialization}</p>

                      {/* Expanded content */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div>
                          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50 space-y-4 md:space-y-6">
                            <div>
                              <h4 className="text-xs md:text-sm font-normal text-foreground uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                                <GraduationCap size={14} className="text-[#4A1525] flex-shrink-0" />
                                Details & Coursework
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                {edu.details.map((detail, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-[#4A1525]/5 rounded-lg border border-[#4A1525]/20"
                                  >
                                    <CheckCircle size={14} className="text-[#4A1525] flex-shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm text-foreground">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
