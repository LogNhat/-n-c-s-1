function Taikhoan() {
  return (
    <div className="w-2/3 mt-10">
      <div className="bg-white border border-gray-300 p-6 mb-8 rounded shadow">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Quyên góp hàng tháng
        </h2>
        <hr className="mb-4" />
        <p className="text-gray-600">
          Bạn hiện không có quyên góp hàng tháng. Nếu bạn muốn Hỗ trợ một dự án
          hàng tháng, trước tiên hãy tìm một dự án, sau đó Chọn tùy chọn "Hàng
          tháng" khi thanh toán.
        </p>
        <div className="mt-6 text-center">
          <a
            href="/search/"
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
          >
            Tìm kiếm dự án
          </a>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-6 rounded shadow mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Đóng góp gần đây
        </h2>
        <hr className="mb-4" />
        <p className="text-gray-600">
          Bạn chưa quyên góp cho một dự án. Nếu bạn muốn hỗ trợ một dự án, khám
          phá các dự án của chúng tôi theo chủ đề và địa điểm, và Tìm người nói
          lên trái tim bạn.
        </p>
        <div className="mt-6 text-center">
          <a
            href="/search/"
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
          >
            Tìm kiếm dự án
          </a>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-6 rounded shadow mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Đặt lại mật khẩu
        </h2>
        <hr className="mb-4" />
        <p className="text-gray-600">
          Để thay đổi mật khẩu của bạn dưới đây, chỉ cần nhập mật khẩu mới của
          bạn hai lần. Mật khẩu phải dài từ 8-20 ký tự.
        </p>
        <div className="w-full grid grid-cols-3 gap-3">
          <div className="flex flex-col">
            <label htmlFor="pass1">Mật khẩu mới</label>
            <input
              type="text"
              name="pass1"
              id="pass1"
              className="border-1 rounded-md border-gray-400 px-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pass2">Nhập lại Mật khẩu</label>
            <input
              type="text"
              name="pass2"
              id="pass2"
              className="border-1 rounded-md border-gray-400 px-2"
            />
          </div>
          <div className="mt-6 ">
            <a
              href="/search/"
              s
              className="px-4 py-1 bg-amber-500 text-white rounded hover:bg-amber-600"
            >
              Đổi mật khẩu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taikhoan;
