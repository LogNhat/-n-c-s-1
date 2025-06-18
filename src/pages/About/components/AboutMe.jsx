import aboutme1 from "../../../../public/imgs/aboutme2.png";
import aboutme2 from "../../../../public/imgs/aboutme.png";
function AboutMe() {
  return (
    <div className="grid grid-cols-2 gap-12 lg:px-40 md:px-20 px-5 pb-20 ">
      <div className="lg:col-span-1 md:col-span-2 col-span-2 flex-col justify-center">
        <img src={aboutme1} alt="" className="rounded-xl w-full" />
        <p className="pt-3 lg:text-left md:text-center text-center lg:text-xl md:text-lg text-md font-medium text-amber-600 pb-2">
          Tổ chức phi lợi nhuận an toàn - dễ dàng đóng góp
        </p>
        <p className="lg:text-left md:text-center text-center lg:text-md md:text-sm text-xs text-gray-800 font-nomal">
          Website được thiết kế với tiêu chí minh bạch và dễ dàng đóng góp, giúp
          mọi người dễ dàng chung tay lan tỏa yêu thương. Open Hands for Peace
          là một tổ chức uy tín, đóng vai trò cầu nối giữa các nhà hảo tâm và
          các tổ chức phi lợi nhuận, góp phần tạo nên những thay đổi tích cực
          cho cộng đồng.
        </p>
      </div>
      <div className="lg:col-span-1 md:col-span-2 col-span-2">
        <img src={aboutme2} alt="" className="rounded-xl w-full" />
        <p className="pt-3 lg:text-left md:text-center text-center lg:text-xl md:text-lg text-md font-medium text-amber-600 pb-2">
          Tận Tâm Giúp Đỡ – Đồng Hành Cùng Cộng Đồng
        </p>
        <p className="lg:text-left md:text-center text-center lg:text-md md:text-sm text-xs text-gray-800 font-nomal">
          Open Hands for Peace là một tổ chức phi lợi nhuận uy tín, luôn sẵn
          sàng hỗ trợ mọi người trong mọi hoàn cảnh. Website được xây dựng với
          tinh thần minh bạch và dễ tiếp cận, nhằm kêu gọi cộng đồng cùng chung
          tay sẻ chia, lan tỏa yêu thương và tạo nên những thay đổi tích cực cho
          xã hội.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
