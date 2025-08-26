import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { NotesSection } from "@/components/NotesSection"
import { AboutSection } from "@/components/AboutSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <NotesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;