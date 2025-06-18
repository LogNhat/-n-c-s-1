import { HeartIcon } from "@heroicons/react/24/outline";
import { BsHeartPulseFill } from "react-icons/bs";
function Mission() {
  return (
    <div className="w-full h-full bg-amber-500 flex-col flex justify-center items-center">
      <BsHeartPulseFill className="w-20 h-20 mt-10 text-red-500" />
      <p className="text-2xl font-bold text-white mt-3">Sứ mệnh</p>
      <p className="text-md font-normal text-white text-center lg:px-100 md:px-50 px-8 pb-8">
        "Chúng tôi tích cực hỗ trợ các dự án vì cộng đồng trên khắp cả nước,
        đồng thời tạo sự gắn kết giữa mọi người. Với sứ mệnh lan tỏa yêu thương
        và kết nối những tấm lòng nhân ái, Open Hands for Peace tin rằng mỗi
        hành động sẻ chia đều có thể tạo nên thay đổi tích cực cho xã hội."
      </p>
    </div>
  );
}

export default Mission;
