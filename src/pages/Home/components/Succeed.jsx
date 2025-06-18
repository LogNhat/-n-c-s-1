import logo from "../../../../public/imgs/logo.png";
function Succeed() {
  return (
    <div className="grid grid-cols-12 w-ful md:h-[180px]px h-[180px] lg:h-[180px]">
      <div className="lg:col-span-4 md:col-span-12 col-span-12 lg:h-[180px] md:h-[90px] h-[90px] flex flex-row justify-center bg-gray-700">
        <img src={logo} alt="" className="h-full" />
        <div className="flex flex-col items-center justify-center">
          <span className="lg:text-xl md:text-lg text-md font-bold text-amber-500">
            MORE THAN 20 DAYS
          </span>
          <span className="text-center text-white lg:text-2xl md:text-xl text-xl font-extrabold">
            OPEN HANDS <br /> FOR PEACE
          </span>
        </div>
      </div>
      <ul className="bg-amber-400 flex flex-row lg:col-span-8 md:col-span-12 col-span-12 justify-evenly grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 py-5">
        <li className=" flex flex-col justify-center text-white items-center">
          <span className="lg:text-4xl md:text-3xl text-2xl font-medium">
            26
          </span>
          <span className="lg:text-md text-sm md:text-nm font-nomal">Days</span>
        </li>
        <li className=" flex flex-col justify-center text-white items-center">
          <span className="lg:text-4xl md:text-3xl text-2xl font-medium">
            $1.1026M
          </span>
          <span className="lg:text-md text-sm md:text-nm font-nomal">USD</span>
        </li>
        <li className=" flex flex-col justify-center text-white items-center">
          <span className="lg:text-4xl md:text-3xl text-2xl font-medium">
            2006
          </span>
          <span className="lg:text-md text-sm md:text-nm font-nomal">
            Nhà tài trợ
          </span>
        </li>
        <li className=" flex flex-col justify-center text-white items-center">
          <span className="lg:text-4xl md:text-3xl text-2xl font-medium">
            26.100
          </span>
          <span className="lg:text-md text-sm md:text-nm font-nomal">
            Dự án
          </span>
        </li>
        <li className=" flex flex-col justify-center text-white items-center">
          <span className="lg:text-4xl md:text-3xl text-2xl font-medium">
            36 +
          </span>
          <span className="lg:text-md text-sm md:text-nm font-nomal">
            Tỉnh thành
          </span>
        </li>
        <li className=" flex flex-col justify-center text-white items-center">
          <span className="lg:text-4xl md:text-3xl text-2xl font-medium">
            26
          </span>
          <span className="lg:text-md text-sm md:text-nm font-nomal">
            Công ty - tổ chức
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Succeed;
