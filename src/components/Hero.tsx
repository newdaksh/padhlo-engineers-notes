import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Download, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
export function Hero() {
  return <section id="home" className="pt-24 pb-16 px-4 relative min-h-screen flex items-center" style={{
    backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(16, 185, 129, 0.8)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="drop-shadow-lg">
              Free B.Tech Notes
            </span>
            <br />
            <span className="text-white/90 drop-shadow-lg">for Every Engineer</span>
          </h1>

          <h2 className="text-xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="drop-shadow-lg">
              Specifically for Students in 
            </span>
            <br />
            <span className="text-white/90 drop-shadow-lg">RTU affiliated Colleges</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Access comprehensive study materials, detailed notes, and resources 
            to excel in your engineering journey. <span className="font-semibold text-white">Completely Free!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group bg-white text-white hover:bg-white/95"
              onClick={() => document.getElementById('notes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download Notes
              <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-all" />
            </Button>
            
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="h-5 w-5 text-white" />
              <span className="font-semibold text-white">10,000+</span> Students Helped
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Download className="h-5 w-5 text-white" />
              <span className="font-semibold text-white">500+</span> Free Resources
            </div>
          </div>
        </div>
      </div>
    </section>;
}