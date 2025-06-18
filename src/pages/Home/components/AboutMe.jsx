function AboutMe() {
  return (
    <div className="w-full h-[450px] lg:h[400px] md:h-[400px] flex justify-center flex-col items-center bg-white">
      <p className="text-center w-10/12 md:w-1/2 lg:w-1/2 text-2xl font-normal text-gray-700">
        Open Hands for Peace kết nối các{" "}
        <span className=" font-medium">tổ chức phi lợi nhuận</span>, <br />
        <span className=" font-medium">nhà tài trợ </span> và
        <span className=" font-medium">các công ty</span> ở hầu hết trên các
        tỉnh thành. Chúng tôi giúp các tổ chức phi lợi nhuận tiếp cận các khoản
        tài trợ, công cụ, đào tạo và hỗ trợ mà họ cần để phục vụ cộng đồng của
        họ.
      </p>
      <span className="mt-6 font-medium text-2xl px-8 py-2 bg-amber-500 rounded-md text-white hover:bg-amber-600 cursor-pointer">
        TÌM HIỂU THÊM
      </span>
    </div>
  );
}

export default AboutMe;
