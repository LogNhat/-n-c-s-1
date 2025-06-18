import projects from "../../../jsons/bannerHome/index.json";
import { useRef, useState } from "react";

function ProjectHomePage() {
  const [linkProject, setLinkProject] = useState("highland");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(linkProject);

  return (
    <div className="w-full flex justify-center content-center flex-col bg-white">
      {projects.map((project, index) => {
        if (project.link === linkProject)
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-1 md:h-full
             lg:grid-cols-2 gap-1 lg:h-[520px] w-full py-4 overflow-hidden"
            >
              {/* LEFT: Big image */}
              <div className="relative h-full max-h-full w-full overflow-hidden shadow-md">
                <img
                  src={project.item1.img}
                  alt={project.item1.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute lg:top-100 md:top-2/3 top-1/2 left-2 bg-opacity-50 text-white p-3 w-full">
                  <h3 className="font-semibold lg:text-lg md:text-lg text-md">
                    {project.item1.name}
                  </h3>
                  <p className="lg:text-4xl md:text-4xl text-2xl font-bold">
                    {project.item1.title}
                  </p>
                </div>
              </div>

              {/* RIGHT: 4 small images in 2x2 grid */}
              <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full max-h-full">
                {[
                  project.item2,
                  project.item3,
                  project.item4,
                  project.item5,
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden shadow-sm hover:shadow-lg transition h-full max-h-[calc(500px/2-0.5px)]"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

                    <div className="absolute  lg:top-40 md:top-42 top-1/2 left-2 font-medium  bg-opacity-50 text-gray-100 p-2 text-sm">
                      {item.name}
                    </div>
                    <div className="absolute lg:top-46 md:top-48 top-2/3 left-2 font-bold  bg-opacity-50 text-gray-100 p-2 lg:text-xl md:text-lg text-md leading-5">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
      })}

      <nav className="w-full py-1.5 px-4 bg-amber-100 flex justify-between items-center text-lg sm:text-2xl select-none">
        <span className="font-semibold">PROJECTS:</span>

        {/* Hamburger Button (hiển thị trên màn hình nhỏ) */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menu trên màn hình lớn */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row sm:flex-1 sm:justify-around absolute sm:static top-12 left-0 w-full sm:w-auto bg-amber-100 sm:bg-transparent z-10 sm:z-auto flex-col sm:flex-row`}
        >
          <li
            className="hover:text-red-500 cursor-pointer px-4 py-2 sm:px-6 relative flex justify-center"
            onClick={() => {
              setLinkProject("highland");
              setIsMenuOpen(false); // Đóng menu khi chọn
            }}
          >
            {linkProject === "highland" && (
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-red-500 absolute -top-1.5 sm:-top-1.5" />
            )}
            Vùng cao
          </li>
          <li
            className="hover:text-red-500 cursor-pointer px-4 py-2 sm:px-6 relative flex justify-center"
            onClick={() => {
              setLinkProject("school");
              setIsMenuOpen(false);
            }}
          >
            {linkProject === "school" && (
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-red-500 absolute -top-1.5 sm:-top-1.5" />
            )}
            Trường học
          </li>
          <li
            className="hover:text-red-500 cursor-pointer px-4 py-2 sm:px-6 relative flex justify-center"
            onClick={() => {
              setLinkProject("children");
              setIsMenuOpen(false);
            }}
          >
            {linkProject === "children" && (
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-red-500 absolute -top-1.5 sm:-top-1.5" />
            )}
            Trẻ em
          </li>
          <li
            className="hover:text-red-500 cursor-pointer px-4 py-2 sm:px-6 relative flex justify-center"
            onClick={() => {
              setLinkProject("patient");
              setIsMenuOpen(false);
            }}
          >
            {linkProject === "patient" && (
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-red-500 absolute -top-1.5 sm:-top-1.5" />
            )}
            Bệnh nhân
          </li>
        </ul>

        <div className="hidden sm:block font-medium hover:text-red-500 cursor-pointer">
          SEE ALL
        </div>
      </nav>
    </div>
  );
}

export default ProjectHomePage;
