import { Button } from "@/components/ui/enhanced-button"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">पढ़ लो Engineers</h1>
              <p className="text-xs text-muted-foreground">Free B.Tech Resources</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#notes" className="text-foreground hover:text-primary transition-smooth">
              Notes
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Feedback
            </a>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="py-2 text-foreground hover:text-primary transition-smooth"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#notes" 
                className="py-2 text-foreground hover:text-primary transition-smooth"
                onClick={toggleMenu}
              >
                Notes
              </a>
              <a 
                href="#contact" 
                className="py-2 text-foreground hover:text-primary transition-smooth"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button variant="hero" size="sm" className="self-start">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}