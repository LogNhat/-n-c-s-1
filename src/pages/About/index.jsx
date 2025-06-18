import Main from "./components/Main";
import Review from "./components/Review";
import AboutMe from "./components/AboutMe";
import Mission from "./components/Mission";
import Develop from "./components/Develop";
import Operate from "./components/Operate";
import Rise from "./components/Rise";
function About() {
  return (
    <div className="relative w-screen h-full select-none">
      <Main />
      <Review />
      <AboutMe />
      <Mission />
      <Rise />
      <Develop />
      <Operate />
    </div>
  );
}

export default About;
