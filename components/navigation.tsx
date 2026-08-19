"use client"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experiences", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background hover:bg-[#4A1525] border-y border-foreground/10 text-foreground hover:text-background font-sans transition-colors duration-300 group">
      <div className="w-full flex flex-col md:flex-row items-center min-h-[4rem] md:h-20 py-4 md:py-0 relative">
        
        {/* Left: Logo */}
        <div className="flex items-center md:absolute md:left-10 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
          <button
            onClick={() => setActiveSection("hero")}
            className="text-2xl md:text-4xl font-serif tracking-wide uppercase transition-colors duration-300"
            style={{ fontFamily: "serif" }}
          >
            ANNE
          </button>
        </div>

        {/* Center: Main Nav Items */}
        <div 
          className="flex-1 flex items-center justify-center gap-5 sm:gap-8 md:gap-10 overflow-x-auto w-full px-6 pb-1 md:pb-0"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-[10px] sm:text-xs uppercase tracking-[0.15em] transition-colors duration-200 whitespace-nowrap ${
                activeSection === item.id 
                  ? "font-normal opacity-100" 
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
