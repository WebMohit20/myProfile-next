import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection id="home" />
      <AboutMe/>
      <Experiences/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}
