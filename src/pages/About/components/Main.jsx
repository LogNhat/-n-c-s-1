import aboutwebme from "../../../../public/imgs/aboutme.png";
function Main() {
  return (
    <div className="relative w-full h-full">
      <img
        src={aboutwebme}
        alt=""
        className="lg:h-[500px] md:h-[450px] h-full w-full object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0" />

      <div className="absolute lg:top-9/12 md:top-8/12 top-5/12 lg:left-26 lg:left-10 left-5 w-2/3 ">
        <p className="lg:text-4xl md:text-4xl text-xl text-white font-bold mb-3">
          Về Open Hands for Peace
        </p>
        <p className="lg:text-lg md:text-md text-xs font-nomal text-white">
          Là tổ chức phi lợi nhuận hỗ trợ các tổ chức phi lợi nhuận khác bằng
          cách kết nối chúng với các nhà hảo tâm trên toàn quốc.
        </p>
      </div>
    </div>
  );
}

export default Main;
