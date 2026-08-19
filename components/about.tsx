"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "Ability to adapt", level: 80 },
    { name: "Good communication skills", level: 95 },
    { name: "Organisational skills", level: 85 },
    { name: "Serious and autonomous", level: 85 },
    { name: "Creative", level: 95 },
    { name: "Good listener", level: 90 },
  ]

  const languages = [
    { language: "French", level: 100 },
    { language: "English", level: 95 },
    { language: "Chinese", level: 50 },
    { language: "Spanish", level: 45 },
    { language: "Italian", level: 20 },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-normal text-foreground mb-4">About Me</h2>
          <div className="h-1 w-16 bg-linear-to-r from-[#4A1525] to-[#4A1525] rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            As a communication student specializing in the luxury, fashion, art, and cinema sectors, I am passionate about these fields and enjoy sharing and developing my interests. Enthusiastic and dynamic, I strive to bring positive energy and actively contribute to projects within my workplace.
          </p>
        </div>

        {/* Skills & Languages */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-normal text-foreground mb-6">Skills</h3>
            <ul className="space-y-4">
              {skills.map((skill, idx) => (
                <li key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-[#4A1525] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-normal text-foreground mb-6">Languages</h3>
            <ul className="space-y-4">
              {languages.map((lang, idx) => (
                <li key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground">{lang.language}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-[#4A1525] rounded-full transition-all duration-1000 ease-out delay-300"
                      style={{ width: isVisible ? `${lang.level}%` : "0%" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-normal text-foreground mb-6">Certifications</h3>
          <div className="bg-card/80 rounded-lg border border-border p-6 hover:border-[#4A1525] transition-all duration-300">
            <p className="text-sm text-muted-foreground">
              I successfully passed the ICDL (International Computer Driving Licence) certification with a score of 75%. This internationally recognized credential validates core digital skills, including word processing, spreadsheets, and IT security. It demonstrates my ability to use essential computer applications effectively in a professional context.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <Image src="/images/icdl.png" alt="ICDL" width={64} height={64} />
            </div>
          </div>
            <div className="mt-6 flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-8">
                <Image src="/images/AiLogo.png" alt="Adobe Illustrator" width={64} height={64} className="mx-auto" />
                <Image src="/images/IdLogo.png" alt="Adobe InDesign" width={64} height={64} className="mx-auto" />
                <Image src="/images/ExcelLogo.png" alt="Microsoft Excel" width={64} height={64} className="mx-auto" />
                <Image src="/images/PptLogo.png" alt="Microsoft PowerPoint" width={64} height={64} className="mx-auto" />
                <Image src="/images/WordLogo.png" alt="Microsoft Word" width={64} height={64} className="mx-auto" />
                <Image src="/images/PsLogo.png" alt="Adobe Photoshop" width={64} height={64} className="mx-auto" />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
