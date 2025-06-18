import { useState, useEffect, useRef } from "react";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Search from "./components/Search";
import ProjectDonation from "../ProjectDonation";
import SlineBar from "./components/SlineBar";
function Project() {
  const [projectPush, setProjectPush] = useState(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (projectPush != null) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: scrollRef.current, behavior: "smooth" });
      }, 50);
    }
  }, [projectPush]);

  const handelPushProject = (selectProject) => {
    scrollRef.current = window.scrollY;
    setProjectPush(selectProject);
  };
  const handelBackProject = () => {
    setProjectPush(null);
  };

  if (projectPush) {
    return (
      <div className="w-full h-full">
        <SlineBar />
        <ProjectDonation
          project={projectPush}
          backProject={handelBackProject}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Main />
      <SlineBar />
      <Search />
      <Projects pushProject={handelPushProject} />
    </div>
  );
}

export default Project;
