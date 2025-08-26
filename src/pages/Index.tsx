import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { NotesSection } from "@/components/NotesSection"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <NotesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;