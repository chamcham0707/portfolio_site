import AboutMe from "../components/AboutMe";
import ExternalLinks from "../components/ExternalLinks";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <AboutMe />
      <Skills />
      <ExternalLinks />
      <Projects />
    </div>
  );
};

export default Home;
