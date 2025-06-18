function DoSomeThing() {
  return (
    <div className="w-full h-full pt-20 p-15 bg-white">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-gray-700 text-center">
          Hành động cùng chúng tôi
        </p>
        <p className="text-2xl font-thin mt-3 mb-5 text-center">
          Có rất nhiều cách để làm cho những điều tốt đẹp xảy ra
        </p>
      </div>
      <div className="grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="grid grid-rows-2 gap-4">
          <div className="border border-solid border-gray-300 p-8 pb-6">
            <div className="flex flex-row mb-10">
              <div>
                <p className="font-nomal mb-6 text-xl text-black">
                  Tham gia một chiến dịch toàn quốc
                </p>
                <p className="text-md font-nomal text-gray-500 pr-10">
                  Các chiến dịch ngăn chặn ô nhiểm không khí, đất nước, bảo vệ
                  môi trường. Hỗ trợ các trung tâm bảo trợ trẻ em trên toàn
                  quốc.
                </p>
              </div>
              <img
                src="https://www.jg-cdn.com/assets/jg-homepage/54ddcde1fbb112a447b6c2d96ac8dd7e.svg"
                alt=""
                className="w-20"
              />
            </div>
            <a href="" className="font-nomal text-xl text-amber-500">
              Bắt đầu gây quỹ
            </a>
          </div>

          <div className="border border-solid border-gray-300 p-8 pb-6">
            <div className="flex flex-row mb-10">
              <div>
                <p className="font-nomal mb-6 text-xl text-black">
                  Hãy hành động trong trường hợp khẩn cấp
                </p>
                <p className="text-md font-nomal text-gray-500 pr-10">
                  Tăng quỹ để đối phó với một thảm họa tự nhiên hoặc khủng hoảng
                  nhân đạo. Tạo sự khác biệt trong vài phút.
                </p>
              </div>
              <img
                src="https://www.jg-cdn.com/assets/jg-homepage/9e9611983998bf3f192dcbfb32b36cbd.svg"
                alt=""
                className="w-20"
              />
            </div>
            <a href="" className="font-nomal text-xl text-amber-500">
              Bắt đầu gây quỹ
            </a>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="border border-solid border-gray-300 p-8 pb-6">
            <div className="flex flex-row mb-10">
              <div>
                <p className="font-nomal mb-6 text-xl text-black">
                  Giúp đỡ những người có nhu cầu
                </p>
                <p className="text-md font-nomal text-gray-500 pr-10">
                  Cung cấp hỗ trợ trực tiếp cho một cá nhân, gia đình hoặc cộng
                  đồng bằng cách trả chi phí y tế hoặc cung cấp hỗ trợ tài
                  chính.
                </p>
              </div>
              <img
                src="https://www.jg-cdn.com/assets/jg-homepage/3de5adddd64ddb57f52a830c13dccebc.svg"
                alt=""
                className="w-20"
              />
            </div>
            <a href="" className="font-nomal text-xl text-amber-500">
              Bắt đầu gây quỹ
            </a>
          </div>

          <div className="border border-solid border-gray-300 p-8 pb-6">
            <div className="flex flex-row mb-10">
              <div>
                <p className="font-nomal mb-6 text-xl text-black">
                  Tham gia một sự kiện từ thiện
                </p>
                <p className="text-md font-nomal text-gray-500 pr-10">
                  Chọn từ hàng trăm sự kiện chính thức bao gồm marathon, đi xe
                  đạp, Dryathlons và nướng bánh ...
                </p>
              </div>
              <img
                src="https://www.jg-cdn.com/assets/jg-homepage/54ddcde1fbb112a447b6c2d96ac8dd7e.svg"
                alt=""
                className="w-20"
              />
            </div>
            <a href="" className="font-nomal text-xl text-amber-500">
              Bắt đầu gây quỹ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoSomeThing;
