import ScrollEffects from "../components/ScrollEffects";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WaveDivider from "../components/WaveDivider";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WaveDivider from="var(--sand)" to="var(--foam)" />
        <Skills />
        <WaveDivider from="var(--foam)" to="var(--sand-soft)" reverse />
        <Experience />
        <WaveDivider from="var(--sand-soft)" to="var(--sea)" />
        <Projects />
        <WaveDivider from="var(--sea)" to="var(--sand)" reverse />
        <Education />
        <WaveDivider from="var(--sand)" to="var(--foam)" />
        <Testimonials />
        <WaveDivider from="var(--foam)" to="var(--sand-deep)" reverse />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
