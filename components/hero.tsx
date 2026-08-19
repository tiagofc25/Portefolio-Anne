"use client"

import Image from "next/image"

interface HeroProps {
  onNavigate?: (section: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate("experiences")
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-5rem)] bg-background flex flex-col md:flex-row overflow-hidden">
      {/* Background Image - Full width/height on mobile, right half on desktop */}
      <div className="absolute inset-0 md:left-auto md:right-0 md:w-1/2 h-full z-0">
        <Image
          src="/images/anne.png"
          alt="Anne Thiriet - Professional portrait"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Semi-transparent overlay on mobile to ensure text readability */}
        <div className="absolute inset-0 bg-background/75 md:hidden pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row relative z-10 h-full">
        {/* Left: Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-16 md:py-24 space-y-8 md:pr-12 lg:pr-16 min-h-[calc(100vh-5rem)]">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-balance text-foreground">
              Anne Thiriet
            </h1>
            <p className="text-lg md:text-xl text-accent font-semibold tracking-wide">
              MARKETING & PROJECT MANAGEMENT
            </p>
          </div>

          <p className="text-base md:text-lg text-foreground/90 md:text-muted-foreground leading-relaxed max-w-lg font-medium md:font-normal">
            Master 2 student at EFAP. Passionate about digital strategy, strategic project execution, and
            building meaningful professional connections that drive real business impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleViewWork}
              className="px-8 py-3 bg-[#4A1525] text-[#F3ECE0] font-semibold text-sm hover:bg-[#4A1525]/90 transition-all duration-200 hover:shadow-lg"
            >
              View My Work
            </button>
            <a
              href="https://www.linkedin.com/in/anne-thiriet-617b95258/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#4A1525] text-[#4A1525] font-semibold text-sm hover:bg-[#4A1525] hover:text-[#F3ECE0] transition-all duration-200 text-center bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
