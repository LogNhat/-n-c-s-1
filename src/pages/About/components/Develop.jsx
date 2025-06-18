import aboutme1 from "../../../../public/imgs/aboutme.png";
import build from "../../../../public/imgs/build.png";
import kiemdinh from "../../../../public/imgs/kiemdinh.png";
function Develop() {
  return (
    <div className="w-full relative h-full lg:pb-60 md:pb-50 pb-30 pt-10 bg-gray-300">
      <div
        className="absolute -top-16 left-1/2 lg:h-[1000px] md:h-[1000px] h-[900px] border-1 border-dashed border-gray-600 my-20"
        style={{
          borderImage:
            "repeating-linear-gradient(180deg, gray 0 16px, transparent 16px 24px) 1",
        }}
      />
      <div
        className="absolute top-9 left-1/2 -translate-x-[19px] w-10 h-[1000px]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 10px, transparent 13px),
          radial-gradient(circle, #000 12px, transparent 14px)`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center",
          backgroundSize: "40px 300px",
        }}
      />
      <div className="grid grid-cols-2 gap-1 h-[300px]">
        <div className="relative lg:col-span-1 flex md:col-span-1 col-span-1 flex-col justify-center items-end lg:pr-10 md:pr-10 pr-5 lg:pl-40 md:pl-20 pl-5 mt-10 h-[300px]">
          <img src={build} alt="" className="rounded-xl w-full max-w-[700px]" />
          <p className="pt-3 lg:text-left md:text-center text-center lg:text-xl md:text-lg text-md font-medium text-gray-800 pb-2">
            Thành lập Open Hands for Peace
          </p>
          <div className="absolute text-xl font-medium px-6 py-1 rounded-md bg-amber-600 text-white top-[140px] -right-[140px]">
            5/2025
          </div>
        </div>
        <div className="col-span-1" />
      </div>
      <div className="grid grid-cols-2 gap-1 h-[300px]">
        <div className="col-span-1" />
        <div className="relative lg:col-span-1 flex md:col-span-1 col-span-1 flex-col justify-center items-start lg:pl-10 md:pl-10 pl-5 lg:pr-40 md:pr-20 pr-5 mt-10 h-[300px]">
          <img
            src={aboutme1}
            alt=""
            className="rounded-xl w-full max-w-[700px]"
          />
          <p className="pt-3 lg:text-left md:text-center text-center lg:text-xl md:text-lg text-md font-medium text-gray-800 pb-2">
            Dự án đầu tiên được khởi động tại Đà Nẵng
          </p>
          <div className="absolute text-xl font-medium px-6 py-1 rounded-md bg-amber-600 text-white top-[140px] -left-[150px]">
            1/6/2025
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 h-[300px]">
        <div className="relative lg:col-span-1 flex md:col-span-1 col-span-1 flex-col justify-center items-end lg:pr-10 md:pr-10 pr-5 lg:pl-40 md:pl-20 pl-5 mt-10 h-[300px]">
          <img
            src={kiemdinh}
            alt=""
            className="rounded-xl w-full max-w-[700px]"
          />
          <p className="pt-3 lg:text-left md:text-center text-center lg:text-xl md:text-lg text-md font-medium text-gray-800 pb-2">
            Open Hands for Peace được hội đồng Khoa Khoa Học Máy Tính kiểm định
          </p>
          <div className="absolute text-xl font-medium px-6 py-1 rounded-md bg-amber-600 text-white top-[140px] -right-[170px]">
            26/6/2025
          </div>
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  );
}

export default Develop;
