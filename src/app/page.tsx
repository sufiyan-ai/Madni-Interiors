import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { FooterCTA } from "@/components/FooterCTA";
import { ShaderBackground } from "@/components/ShaderBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col relative">
      <ShaderBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>
      <FooterCTA />
    </div>
  );
}
