function Folowing() {
  return (
    <div className="w-full h-[500px] flex flex-col justify-center items-center relative">
      <p className="text-3xl font-bold text-gray-900 text-center mb-3 text-white">
        Hành trình của bạn bắt đầu từ đây
      </p>
      <p className="text-xl font-nomal text-center mb-10 text-white">
        Tham gia cùng chúng tôi để chung tay làm nên những điều tích cực
      </p>
      <div className="px-10 py-3 bg-amber-500 text-white text-md rounded-sm hover:bg-amber-600 cursor-pointer">
        Bắt đầu gây quỹ
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default Folowing;
