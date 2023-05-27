import Project from "../components/Project";
import Skill from "../components/Skill";
import '../assets/css/Home.css'
import Contact from "../components/Contact";
import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";



function Home() {
  return (
    <>
      <Welcome></Welcome>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      
    </>
  );
}

export default Home;
