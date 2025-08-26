import { BookOpen, Heart, Mail, Share2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="gradient-primary p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">पढ़ लो Engineers</h3>
                <p className="text-sm text-muted-foreground">Free B.Tech Resources</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering engineering students with free, high-quality study materials 
              and resources to excel in their academic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home
              </a>
              <a href="#notes" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Study Notes
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth text-sm">
                About Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@padhloengineers.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4 text-secondary" />
                <span>Share with fellow engineers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for engineering students</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 पढ़ लो Engineers. All resources are free to use.
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Help us reach more students - Share this website with your friends!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}