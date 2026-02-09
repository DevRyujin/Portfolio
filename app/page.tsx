import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden text-slate-200">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
