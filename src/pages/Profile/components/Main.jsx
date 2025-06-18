import { useState } from "react";
import Taikhoan from "./Taikhoan";
  
function Main() {
  const [view, setView] = useState("taikhoan");

  return (
    <div className="w-full flex flex-col items-center h-full">
      <div className="w-2/3 h-full grid grid-cols-5">
        <div className="w-full relative h-full flex flex-col ">
          <div className=""></div>
          <div
            className={`h-2 cursor-pointer relative flex justify-center ${
              view === "taikhoan"
                ? "bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setView("taikhoan");
            }}
          >
            {view === "taikhoan" && (
              <div className="w-0 h-0 border-l-[10px] top-[90%] text border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-gray-700 absolute" />
            )}
          </div>
          <p
            className={`text-lg text-center mt-2 text-gray-300 font-medium ${
              view === "taikhoan" && "text-gray-700"
            }`}
          >
            Tài khoản của tôi
          </p>
        </div>

        <div className="w-full relative h-full flex flex-col ">
          <div
            className={`h-2 cursor-pointer relative flex justify-center ${
              view === "duancuatoi"
                ? "bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setView("duancuatoi");
            }}
          >
            {view === "duancuatoi" && (
              <div className="w-0 h-0 border-l-[10px] top-[90%] text border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-gray-700 absolute" />
            )}
          </div>
          <p
            className={`text-lg text-center mt-2 text-gray-300 font-medium ${
              view === "duancuatoi" && "text-gray-700"
            }`}
          >
            Dự án theo dõi
          </p>
        </div>

        <div className="w-full relative h-full flex flex-col ">
          <div
            className={`h-2 cursor-pointer relative flex justify-center ${
              view === "quyengopcuatoi"
                ? "bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setView("quyengopcuatoi");
            }}
          >
            {view === "quyengopcuatoi" && (
              <div className="w-0 h-0 border-l-[10px] top-[90%] text border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-gray-700 absolute" />
            )}
          </div>
          <p
            className={`text-lg text-center mt-2 text-gray-300 font-medium ${
              view === "quyengopcuatoi" && "text-gray-700"
            }`}
          >
            Quyên góp của tôi
          </p>
        </div>

        <div className="w-full relative h-full flex flex-col ">
          <div
            className={`h-2 cursor-pointer flex justify-center relative ${
              view === "yeuthich"
                ? "bg-gray-700"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setView("yeuthich");
            }}
          >
            {view === "yeuthich" && (
              <div className="w-0 h-0 border-l-[10px] top-[90%] text border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-gray-700 absolute" />
            )}
          </div>
          <p
            className={`text-lg text-center mt-2 text-gray-300 font-medium ${
              view === "yeuthich" && "text-gray-700"
            }`}
          >
            Yêu thích
          </p>
        </div>

        <div className="w-full relative h-full flex flex-col ">
          <div
            className={`h-2 cursor-pointer relative flex justify-center ${
              view === "api" ? "bg-gray-700" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setView("api");
            }}
          >
            {view === "api" && (
              <div className="w-0 h-0 border-l-[10px] top-[90%] text border-r-[10px] border-b-0 border-t-[10px] border-l-transparent border-r-transparent border-t-gray-700 absolute" />
            )}
          </div>
          <p
            className={`text-lg text-center mt-2 text-gray-300 font-medium ${
              view === "api" && "text-gray-700"
            }`}
          >
            API
          </p>
        </div>
      </div>

      {view === "taikhoan" && <Taikhoan />}
      {view === "duancuatoi" && <Taikhoan />}
      {view === "yeuthich" && <Taikhoan />}
      {view === "api" && <Taikhoan />}
      {view === "quyengopcuatoi" && <Taikhoan />}
    </div>
  );
}

export default Main;