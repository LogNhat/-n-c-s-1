import { useEffect, useState } from "react";
import projects from "../../../jsons/projects/index.json";

function Projects({ pushProject }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 25;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (selectedProject) {
      pushProject(selectedProject);
    }
  }, [selectedProject, pushProject]);

  return (
    <div className="w-full h-full flex flex-col items-center pt-20 justify-center bg-gray-100">
      {currentProjects.map((project, index) => (
        <div
          key={index}
          className="lg:w-2/3 md:w-9/12 w-10/12 lg:h-60 md:h-120 h-120 mb-10 flex lg:flex-row md:flex-col flex-col border-1 bg-white border-gray-500"
        >
          <img
            onClick={() => setSelectedProject(project)}
            src={project.image_url}
            alt=""
            className="lg:h-full md:h-1/2 h-1/2 object-cover object-top cursor-pointer"
          />
          <div className="p-6">
            <span className="text-md text-gray-500 text-medium">
              {project.location} | {project.category}
            </span>
            <p
              className="text-2xl text-black font-medium line-clamp-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </p>
            <p className="text-md font-thin line-clamp-1">
              <span className="text-md font-medium">
                {project.organization}
              </span>
            </p>
            <p
              className="text-sm font-normal mt-2 mb-2 line-clamp-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.description}
            </p>
            <p className="text-xs font-thin">
              <span className="text-xl text-amber-500 font-medium">
                ${project.funds_raised}
              </span>{" "}
              nhận được trên{" "}
              <span className="text-lg font-medium text-green-500">
                ${project.goal}
              </span>{" "}
              mục tiêu
            </p>
            <div className="h-3 lg:w-[250px] md:w-[200px] w-[200px] bg-amber-100">
              <div
                className="h-full bg-amber-600"
                style={{
                  width: `${project.progress_percentage * 2.5}px`,
                  maxWidth: `${project.progress_percentage * 2}px`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-6 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 rounded cursor-pointer  ${
            currentPage === 1
              ? "bg-gray-300"
              : "bg-amber-600 text-white hover:bg-amber-500"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 mx-1 rounded cursor-pointer ${
              currentPage === page
                ? "bg-amber-600 text-white"
                : "bg-gray-200 hover:bg-amber-500"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 rounded cursor-pointer  ${
            currentPage === totalPages
              ? "bg-gray-300 "
              : "bg-amber-600 text-white hover:bg-amber-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
