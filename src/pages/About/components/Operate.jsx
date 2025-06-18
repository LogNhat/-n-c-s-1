import avatar from "../../../../public/imgs/avatar.png";
import { FaStar } from "react-icons/fa";
function Operate() {
  return (
    <div className="w-full h-full pb-10 pt-10">
      <div className="flex flex-row items-center justify-center pt-10 pb-5">
        <FaStar className="w-8 h-5 text-amber-600 font-bold" />
        <p className="text-3xl text-center font-medium text-amber-600">
          Đội ngũ điều hành
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <img src={avatar} alt="" className=" w-1/2 max-w-100 rounded-xl" />
        <p className="text-xl mt-5 font-medium ">Nguyễn Văn Long Nhật</p>
        <p className="text-lg font-nomal text-gray-700">
          Giám đốc Điều hành - Đồng sáng lập
        </p>
      </div>
    </div>
  );
}

export default Operate;
