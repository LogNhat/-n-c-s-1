import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../../../../../public/imgs/logo.png";
function Footer() {
  return (
    <div className="h-full w-full bg-gray-700 lg:px-20 md:px-5 px-5 pt-10 ">
      <div className="grid lg:grid-cols-10 items-center gap-2">
        <div className="lg:col-span-2 md:col-span-10 col-span-10 flex flex-row items-center md:justify-center lg:justify-start justify-center">
          <img src={logo} alt="" className="w-20 h-20" />
          <span className="text-xl font-bold text-amber-600">
            Opens Hands <br /> For Peace
          </span>
        </div>
        <p className="lg:col-span-4 md:col-span-10 col-span-10 text-[13px] text-gray-400 flex items-center px-2 lg:text-left md:text-center text-center">
          Open Hands For Peace giúp bạn dễ dàng và an toàn khi cung cấp cho các
          dự án địa phương ở bất cứ đâu, hỗ trợ các tổ chức phi lợi nhuận về vật
          phẩm, chi chí, đồng hành cùng các dự án làm nên những điều tích cực
          trong cuộc sống.
        </p>
        <div className="  flex justify-center  lg:col-span-2 md:col-span-10 col-span-10 ">
          <span className="md:px-10 lg:px-5 px-5 border-2 text-center  text-sm font-md mx-3 py-5 h-5 flex justify-center items-center border-amber-600 text-amber-600 cursor-pointer">
            TRUNG TÂM HỖ TRỢ
          </span>
        </div>
        <div className="flex flex-row justify-around lg:col-span-2 md:col-span-10 col-span-10">
          <Facebook className="cursor-pointer text-gray-500" />
          <Instagram className="cursor-pointer text-gray-500" />
          <Youtube className="cursor-pointer text-gray-500" />
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-500 mt-3" />
      <div className="grid lg:grid-cols-5 md:grid-cols-12 grid-cols-12 gap-2 px-5 py-3 ">
        <div className="lg:col-span-1 md:col-span-4 col-span-6">
          <p className="text-xl font-bold text-amber-600">Nhà tài trợ</p>
          <ul>
            <li className="text-xs font-medium text-white py-1">Cách cho</li>
            <li className="text-xs font-medium text-white py-1">
              Quà tặng từ thiện
            </li>
            <li className="text-xs font-medium text-white py-1">
              Quyên góp danh dự
            </li>
            <li className="text-xs font-medium text-white py-1">
              Bắt đầu gây quỹ
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 md:col-span-4 col-span-6">
          <p className="text-xl font-bold text-amber-600">Về chúng tôi</p>
          <ul>
            <li className="text-xs font-medium text-white py-1">
              Nó hoạt động như thế nào
            </li>
            <li className="text-xs font-medium text-white py-1">
              Cộng đồng chúng tôi
            </li>
            <li className="text-xs font-medium text-white py-1">
              Câu hỏi thường gặp
            </li>
            <li className="text-xs font-medium text-white py-1">
              Liên hệ chúng tôi
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 md:col-span-4 col-span-6">
          <p className="text-xl font-bold text-amber-600">Tài nguyên</p>
          <ul>
            <li className="text-xs font-medium text-white py-1">
              Đăng nhập tài khoản
            </li>
            <li className="text-xs font-medium text-white py-1">
              Cho các tổ chức từ thiện
            </li>
            <li className="text-xs font-medium text-white py-1">
              Đối với doanh nghiệp
            </li>
            <li className="text-xs font-medium text-white py-1">
              Đối với các đối tác sự kiện
            </li>
          </ul>
        </div>
        <div className="lg:ml-5 md:ml-0 ml-0 lg:col-span-1 md:col-span-4 col-span-6">
          <p className="text-xl font-bold text-amber-600">Dự án lớn</p>
          <ul>
            <li className="text-xs font-medium text-white py-1">
              Dự án nuôi em
            </li>
            <li className="text-xs font-medium text-white py-1">
              Biển không rác 2025
            </li>
            <li className="text-xs font-medium text-white py-1">
              Ngày trái đất 2025
            </li>
            <li className="text-xs font-medium text-white py-1">
              Trẻ khuyết tật
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 md:col-span-4 col-span-4 lg:ml-5 md:ml-0 ml-0">
          <p className="text-xl font-bold text-amber-600">Tìm hiểu thêm</p>
          <ul>
            <li className="text-xs font-medium text-white py-1">
              Cách tham gia cộng đồng
            </li>
            <li className="text-xs font-medium text-white py-1">
              Trở thành tổ chức
            </li>
            <li className="text-xs font-medium text-white py-1">
              Cách tham gia dự án
            </li>
            <li className="text-xs font-medium text-white py-1">
              Nhận hỗ trợ từ chuyên viên
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
