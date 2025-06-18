import { useState } from "react";
import ProjectHomePage from "./components/ProjectHomePage";
import AboutMe from "./components/AboutMe";
import Succeed from "./components/Succeed";
import HowWork from "./components/HowWork";
import DoSomeThing from "./components/DoSomeThing";
import Community from "./components/Community";
import Folowing from "./components/Folowing";
import "../../../src/index.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full overflow-x-hidden h-full">
      <img
        src="https://i.pinimg.com/736x/86/49/e2/8649e22ecf9e59ce77a0a7543f1c7bf1.jpg"
        alt=""
        className="w-full h-screen fixed top-0 z-[-1]"
      />
      <ProjectHomePage />
      <AboutMe />
      <Succeed />
      <HowWork />
      <DoSomeThing />
      <Community />
      <Folowing />
    </div>
  );
}

export default Home;
