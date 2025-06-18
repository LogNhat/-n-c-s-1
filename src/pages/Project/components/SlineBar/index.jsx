import { Home, User, Settings, Search, X } from "lucide-react";

function SlineBar() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-700 sticky top-14 z-2 shadow-md shadow-black">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-end justify-between p-4 sm:p-6 gap-4 sm:gap-6">
        <div className="relative w-full sm:w-1/3">
          <label
            htmlFor="search"
            className="text-sm font-medium text-gray-200 mb-1 block"
          >
            Search
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300 placeholder-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="w-full sm:w-1/4">
          <label
            htmlFor="location"
            className="text-sm font-medium text-gray-200 mb-1 block"
          >
            Địa điểm
          </label>
          <select
            id="location"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
          >
            <option value="">Tất cả</option>
            <option value="hanoi">Hà Nội</option>
            <option value="danang">Đà Nẵng</option>
            <option value="hcm">Hồ Chí Minh</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4">
          <label
            htmlFor="theme"
            className="text-sm font-medium text-gray-200 mb-1 block"
          >
            Chủ đề
          </label>
          <select
            id="theme"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
          >
            <option value="">Tất cả</option>
            <option value="education">Giáo dục</option>
            <option value="physical-health">Sức khỏe thể chất</option>
            <option value="child-protection">Bảo vệ trẻ em</option>
            <option value="gender-equality">Bình đẳng giới</option>
            <option value="food-security">An ninh lương thực</option>
            <option value="economic-growth">Tăng trưởng kinh tế</option>
            <option value="justice-rights">Công lý & nhân quyền</option>
            <option value="disaster-response">Ứng phó thiên tai</option>
            <option value="mental-health">Sức khỏe tâm thần</option>
            <option value="climate-action">Hành động khí hậu</option>
            <option value="ending-abuse">Chấm dứt bạo lực</option>
            <option value="safe-housing">Nhà ở an toàn</option>
            <option value="disability-rights">Quyền người khuyết tật</option>
            <option value="clean-water">Nước sạch</option>
            <option value="ecosystem-restoration">Phục hồi hệ sinh thái</option>
          </select>
        </div>

        <div className="w-full sm:w-1/4">
          <label
            htmlFor="trust"
            className="text-sm font-medium text-gray-200 mb-1 block"
          >
            Bộ lọc
          </label>
          <select
            id="trust"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
          >
            <option value="">Tất cả</option>
            <option value="verified">Đã theo dõi</option>
            <option value="top-rated">Xếp hạng hàng đầu</option>
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-all duration-300 w-full sm:w-auto">
            <X className="h-5 w-5" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlineBar;
