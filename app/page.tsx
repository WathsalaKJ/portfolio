import Navbar from "@/components/Navbar";
import SiteLoader from "@/components/SiteLoader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Publications />
      </main>
      <Footer />
    </>
  );
}
