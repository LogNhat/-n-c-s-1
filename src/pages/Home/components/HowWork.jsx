import {
  CheckBadgeIcon,
  GiftIcon,
  HomeModernIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
function HowWork() {
  return (
    <div className="w-full h-full py-10 pt-10 bg-gray-200">
      <p className="text-center lg:py-10 md:py-10 lg:pt-0 md:pt-30 pt-30 py-15 text-3xl font-nomal text-gray-800">
        Nó hoạt động như thế nào
      </p>
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-15 md:px-15 px-5 gap-3">
        <li className="hover:p-9 hover:border-1 hover:border-solid hover:border-green-700 cursor-pointer bg-white flex items-center flex-col p-10 ">
          <CheckBadgeIcon className="h-12 w-12 font-thin mb-5 text-green-700" />
          <p className=" overflow-hidden text-gray-950 h-[220px] mb-5 text-center text-md">
            Các tổ chức phi lợi nhuận trên toàn nước áp dụng và tham gia Open
            Hands For Peace để truy cập thêm tài trợ, xây dựng các kỹ năng mới
            và tạo các kết nối quan trọng.
          </p>
          <span className="mb-5 text-center font-bold text-lg text-green-700">
            TỔ CHỨC PHI LỢI NHUẬN
          </span>
        </li>
        <li className="hover:p-9 hover:border-1 hover:border-solid hover:border-amber-500 cursor-pointer bg-white flex items-center flex-col p-10">
          <GiftIcon className="h-12 w-12 font-thin mb-5 text-amber-500" />
          <p className=" overflow-hidden text-gray-950 h-[220px] mb-5 text-center text-md">
            Những người như bạn cung cấp cho các dự án yêu thích của bạn; bạn
            cảm thấy tuyệt vời khi bạn nhận được thông tin cập nhật về cách tiền
            của bạn được đưa vào hoạt động bởi các tổ chức đáng tin cậy.
          </p>
          <span className="mb-5 text-center font-bold text-lg text-amber-500">
            NHÀ TÀI TRỢ
          </span>
        </li>
        <li className="hover:p-9 hover:border-1 hover:border-solid hover:border-blue-500 cursor-pointer bg-white flex items-center flex-col p-10">
          <HomeModernIcon className="h-12 w-12 font-thin mb-5 text-blue-500" />
          <p className=" overflow-hidden text-gray-950 h-[220px] mb-5 text-center text-md">
            Các công ty hào phóng và nhân viên của họ hỗ trợ thêm cho các dự án
            có tác động cao với sự đóng góp và tài trợ, giúp cộng đồng địa
            phương phát triển mạnh.
          </p>
          <span className="mb-5 text-center font-bold text-lg text-blue-500">
            CÔNG TY
          </span>
        </li>
        <li className="hover:p-9 hover:border-1 hover:border-solid hover:border-amber-400 cursor-pointer bg-white flex items-center flex-col p-10">
          <GlobeAsiaAustraliaIcon className="h-12 w-12 font-thin mb-5 text-amber-400" />
          <p className=" overflow-hidden text-gray-950 h-[220px] mb-5 text-center text-md">
            Các tổ chức phi lợi nhuận có kinh phí họ cần để nghe phản hồi và thử
            những cách mới để làm việc; các cộng đồng trên toàn cầu trở nên
            tuyệt vời hơn!
          </p>
          <span className="mb-5 text-center font-bold text-lg text-amber-400">
            TÁC ĐỘNG CỦA CHÚNG TÔI
          </span>
        </li>
      </ul>
    </div>
  );
}

export default HowWork;
