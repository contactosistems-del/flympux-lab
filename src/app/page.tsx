import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { LocalServices } from "@/components/LocalServices";
import { NFC } from "@/components/NFC";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Services />
        <LocalServices />
        <NFC />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
