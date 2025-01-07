
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <Experiences/>
      <Projects/>
      <Skills/>
    </div>
  );
}
