import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
const ProjectDonation = ({ project, backProject }) => {
  if (!project) return null;

  return (
    <div className="grid grid-cols-12 gap-4 mx-20">
      <div className="max-w-4xl col-span-8 mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
        <button
          onClick={backProject}
          className=" shadow-lg flex flex-row items-center justify-center 
                    mb-6 px-4 py-2 bg-amber-500 text-white rounded 
                    hover:bg-amber-700 transition sticky top-46"
        >
          <IoChevronBack className="h-full pt-1" />
          <p className="text-center font-medium px-1 cursor-pointer">
            Quay lại
          </p>
        </button>
        <h1 className="text-4xl font-bold mb-10 text-center text-shadow-2xs">
          {project.title}
        </h1>
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-106 object-cover object-top rounded-lg mb-6 shadow-xl border-black/10"
        />

        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-2xl font-semibold text-amber-600">
              ${project.funds_raised?.toLocaleString()} nhận được
            </span>
            <span className="text-gray-600">
              ${project.goal?.toLocaleString()} mục tiêu
            </span>
          </div>
          <div className="w-full bg-amber-100 rounded h-2">
            <div
              className="bg-amber-600 h-2 rounded"
              style={{ width: `${project.progress_percentage}%` }}
            ></div>
          </div>
        </div>

        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Địa điểm:</span>{" "}
          {project.location || "N/A"} <br />
          <span className="font-semibold">Category:</span>{" "}
          {project.category || "N/A"}
        </p>
        <p className="text-gray-700 mb-4 italic">
          bởi <span className="font-semibold">{project.organization}</span>
        </p>

        {/* Sections */}
        <div className="space-y-6 mb-6">
          {project.sections &&
            Object.entries(project.sections).map(([sectionTitle, content]) => (
              <div key={sectionTitle}>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {sectionTitle === "Summary" && "Tóm tắt"}
                  {sectionTitle === "Challenge" && "Thử thách"}
                  {sectionTitle === "Solution" && "Giải pháp"}
                  {sectionTitle === "Long-Term Impact" && "Ảnh hưởng dài hạn"}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">{content}</p>
                {sectionTitle === "Summary" && (
                  <div className="w-full h-full flex justify-between">
                    <div className="flex items-center flex-col">
                      <p className="text-2xl text-green-800 font-bold">
                        {project.statistics.total_goal}
                      </p>
                      <p className="text-nomal font-light">tổng mục tiêu</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-2xl text-green-800 font-bold">
                        {project.statistics.remaining}
                      </p>
                      <p className="text-nomal font-light">tổng quyên góp</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-2xl text-green-800 font-bold">
                        {project.statistics.donors}
                      </p>
                      <p className="text-nomal font-light">nhà tài trợ</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-2xl text-green-800 font-bold">
                        {project.statistics.monthly_donors}
                      </p>
                      <p className="text-nomal font-light">
                        nhà tài trợ hàng tháng
                      </p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-2xl text-green-800 font-bold">
                        {project.statistics.fundraisers}
                      </p>
                      <p className="text-nomal font-light">người tài trợ</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-2xl text-green-800 font-bold">
                        {project.statistics.year ||
                          project.statistics.years ||
                          0}
                      </p>
                      <p className="text-nomal font-light">
                        nhà tài trợ hàng năm
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Resources */}
        {project.resources && project.resources.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Resources</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.resources.map((resource, i) => (
                <li key={i}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {resource.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-4 p-8 rounded-lg shadow-lg mt-10">
        <div className="mb-6 w-full">
          <div className="flex items-center justify-between mb-1">
            <span className="text-3xl font-semibold text-green-600">
              ${project.funds_raised?.toLocaleString()}
            </span>
            <span className="text-gray-600 text-md">
              ủng hộ trên mục tiêu ${project.goal?.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-amber-100 rounded h-2">
            <div
              className="bg-green-600 h-2 rounded"
              style={{ width: `${project.progress_percentage}%` }}
            ></div>
          </div>
          <div className="flex flex-row items-end mt-2">
            <p className="text-xl text-amber-500 font-bold mr-1">
              {project.statistics.fundraisers}
            </p>
            <p className="text-nomal font-light">người tài trợ</p>
          </div>
        </div>
        <button className="w-full mt-5 rounded-sm py-2 bg-amber-500 text-center text-lg text-white font-medium hover:bg-amber-600 cursor-pointer">
          Ủng hộ
        </button>
        <ul>
          {project.gift_options.map((donation, index) => {
            return (
              <li
                key={index}
                className="flex group cursor-pointer p-2 my-3 rounded-md flex-row items-center hover:bg-amber-300 text-gray-800 bg-amber-200 relative"
              >
                <div className="absolute  group-hover:bg-amber-500 w-10 h-full bg-amber-400 right-0 rounded-r-md flex justify-center items-center">
                  <MdNavigateNext className="text-2xl font-bold text-white" />
                </div>
                <div className="text-xl w-10 font-bold mr-4 text-gray-800 ">
                  {donation.amount}$
                </div>
                <div className="mr-10">
                  <p className="text-nm font-medium text-gray-800 line-clamp-1">
                    {donation.description}
                  </p>
                  <p className="text-xs font-thin text-gray-800 line-clamp-1">
                    {donation.impact}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="w-full mt-5 rounded-sm py-2 bg-green-500 text-center text-lg text-white font-medium hover:bg-green-600 cursor-pointer">
          Gửi tặng vật tư
        </button>
      </div>
    </div>
  );
};
export default ProjectDonation;
