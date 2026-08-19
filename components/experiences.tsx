"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Award, Star, Users, CheckCircle, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: "Junior Event Project Manager",
    company: "Cartier",
    period: "January - July",
    description:
      "Contributed to the coordination and production of international High Jewelry events, supporting the development of creative concepts, scenography, and artistic direction while ensuring consistency with Cartier’s brand identity. Collaborated with external partners and internal teams to coordinate event operations, from preparation to on-site execution, contributing to the delivery of high-end experiences in a demanding international environment.",
    highlights: [
      "High Jewelry Event (May 2026): Coordination and production of international luxury events from concept to execution",
      "Artistic direction support: creative concepts, scenography and brand coherence",
      "Management of external partners and on-site event operations"
    ],
    skills: ["Event Management", "Project Management", "Luxury Events", "VIP Relations", "Logistics", "Brand Image"],
    type: "past",
    image: "/images/Cartier-Logo.png",
    imageClassName: "w-32 sm:w-40 md:w-48 object-contain"
  },
  {
    title: "Luxury Events Head Hostess & Coordinator",
    company: "Florence Doré Agency",
    period: "November 2022 – Present",
    description:
      "Supervises and manages teams of hosts and hostesses for high-end events in fashion, luxury, art, and corporate sectors. Coordinates on-site operations, VIP reception, and guest flow management, ensuring adherence to protocol. Trains teams on luxury service standards, professional conduct, and brand image requirements, supporting prestigious events such as product launches, fashion shows, trade fairs, and exclusive dinners with international brands.",
    highlights: [
      "Managed teams for luxury events in fashion, art, and corporate sectors",
      "Coordinated VIP reception and guest flow during high-profile events",
      "Trained staff on luxury service standards and brand image",
      "Handled complex event challenges while maintaining impeccable brand reputation"
    ],
    skills: ["Event Coordination", "Team Management", "Luxury Customer Service", "VIP Reception", "Training & Development", "Problem Solving", "Protocol Compliance", "Brand Image Management"],
    type: "current",
    image: "/images/marques.png"
  },
  {
    title: "Event Project Manager Assistant",
    company: "Social Studio",
    period: "April 2025 - August 2025",
    description:
      "Assisted in coordinating high-end international events for 50 to 4,000 guests. Managed supplier relations, researched venues and vendors, collaborated on creative concepts with designers, handled logistics and on-site operations, and supported budget tracking and administrative tasks. Served as liaison between internal departments and local markets, ensuring seamless guest transfers and event execution.",
    highlights: [
      "Coordinated international events with up to 4,000 guests",
      "Managed supplier relations and venue/vendor research",
      "Collaborated on creative concepts with design teams",
      "Handled logistics, on-site operations, and guest transfers",
      "Supported budget tracking and administrative follow-up"
    ],
    skills: ["Event Coordination", "Logistics Management", "Supplier Relations", "Budget Tracking", "Creative Collaboration", "Team Communication", "Project Management", "Guest Experience Management"],
    type: "past",
    image: "/images/marques2.png"
  },
  {
    title: "Sales Advisor",
    company: "Louis Vuitton",
    period: "June 2023 - September 2023",
    description:
      "Assisted customers throughout the sales process from reception to payment, ensuring a smooth and high-quality experience. Managed visitor reception, stock, and the visual organization of sales areas, providing excellent service to international clientele.",
    highlights: [
      "Provided exceptional service to international customers",
      "Managed stock and inventory efficiently",
      "Ensured optimal visual merchandising of sales areas",
      "Facilitated smooth sales transactions from start to finish"
    ],
    skills: ["Customer Service", "Sales Management", "Stock Management", "Visual Merchandising", "Communication", "Client Relations"],
    type: "past"
  },
  {
    title: "Assistant booker - Emily",
    company: "Models agency",
    period: "December 2023 - March 2024",
    description:
      "Worked as an Assistant Booker at Emily Models Agency, handling the registration and management of actors’ and models’ profiles for advertising campaigns. Responded to client requests for casting and ensured all talent profiles were kept up to date within the agency’s database",
    highlights: [
      "Advertising campaign agency in which I register profiles such as actors and models",
      "Responding to profile requests to produce advertisements",
      "Update profiles registered with the agency",
    ],
    skills: ["Talent Management", "Client Communication", "Profile Registration", "Advertising Coordination", "Database Management", "Attention to Detail", "Organization", "Time Management"],
    type: "past"
  },
  {
    title: "Extras Myrole",
    company: "Myrole",
    period: "December 2023 - March 2024",
    description:
      "Provided exceptional customer service and merchandising support. Managed point-of-sale operations and maintained optimal product displays.",
    highlights: [
      "Extras for some Netflix programmes",
      "Appearances in scenes from films and series",
      "Familiarity with filming scenes",
      "Observation internship at the Musée du Petit Palais",
    ],
    skills: ["Adaptability", "Teamwork", "Communication", "Attention to detail", "Time management", "Cultural awareness"],
    type: "past"
  },
]

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.findIndex((el) => el === entry.target)
          if (index === -1) return

          if (entry.isIntersecting) {
            setExpandedIndex(index)
          } else {
            setExpandedIndex((prev) => (prev === index ? null : prev))
          }
        })
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px", // Trigger when the element is in the middle 30% of the screen
        threshold: 0,
      }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [isMobile])

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-background w-full overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-24">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-foreground tracking-tight mb-3">
                  Professional Experience
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Expert in event coordination and VIP hosting, combining organization, high-end client relations, and operational management for international projects.
                </p>
              </div>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-accent via-accent to-accent/30 rounded-full" />
          </div>

          <div className="space-y-4 md:space-y-6 mb-24">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group w-full"
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                {/* Timeline line and dot - simplified for responsive */}
                <div className="flex gap-4 md:gap-6">
                  <div className="flex flex-col items-center flex-shrink-0 pt-2">
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 ${
                        exp.type === "current" ? "bg-accent border-accent" : "bg-background border-accent"
                      }`}
                    />
                    {index !== experiences.length - 1 && (
                      <div className="w-px h-24 md:h-32 bg-gradient-to-b from-accent/60 to-transparent mt-2" />
                    )}
                  </div>

                  {/* Card content */}
                  <div 
                    onMouseEnter={() => setExpandedIndex(index)}
                    onMouseLeave={() => setExpandedIndex(null)}
                    onClick={() => toggleExpanded(index)}
                    className="w-full text-left pb-4 cursor-pointer focus:outline-none"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="p-4 md:p-6 lg:p-8 border border-border rounded-lg md:rounded-xl hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:bg-muted/30 backdrop-blur-sm">
                      {/* Header with title and badge */}
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 break-words">
                              {exp.title}
                            </h3>
                            {exp.type === "current" && (
                              <span className="px-2 md:px-3 py-1 text-xs font-normal bg-accent text-accent-foreground rounded-full uppercase tracking-wider flex-shrink-0">
                                Current
                              </span>
                            )}
                          </div>

                          {/* Company and period */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 text-sm md:text-base">
                            <span className="font-semibold text-accent">{exp.company}</span>
                            <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                              <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 bg-border rounded-full flex-shrink-0" />
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        <ChevronDown
                          size={20}
                          className={`text-accent flex-shrink-0 transition-all duration-300 mt-1 ${
                            expandedIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Main description */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                      {/* Image */}
                      {exp.image && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img
                            src={exp.image || "/placeholder.svg"}
                            alt={`${exp.title}`}
                            className={exp.imageClassName || "w-full sm:w-1/2 max-h-48 md:max-h-64 rounded-lg object-cover"}
                          />
                        </div>
                      )}

                      {/* Expanded content */}
                      <div 
                        className={`grid transition-all duration-500 ease-in-out ${
                          expandedIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50 space-y-4 md:space-y-6">
                            {/* Highlights */}
                            <div>
                              <h4 className="text-xs md:text-sm font-normal text-foreground uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                                <TrendingUp size={14} className="text-accent flex-shrink-0" />
                                Key Achievements
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                {exp.highlights.map((highlight, i) => (
                                  <div
                                    key={i}
                                    className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-accent/5 rounded-lg border border-accent/20"
                                  >
                                    <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm text-foreground">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Skills */}
                            <div>
                              <h4 className="text-xs md:text-sm font-normal text-foreground uppercase tracking-widest mb-3 md:mb-4">
                                Skills Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="px-2 md:px-4 py-1 md:py-2 bg-accent/10 hover:bg-accent/20 text-accent text-xs md:text-sm font-medium rounded-full border border-accent/30 transition-all duration-200"
                                  >
                                    {skill}
                                  </span>
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
