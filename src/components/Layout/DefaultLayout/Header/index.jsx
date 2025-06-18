import { Link } from "react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../../../../../public/imgs/logo.png";

function Header({ onLoginButtonClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer">
            <img src={logo} alt="logo" className="h-12 w-auto mr-2" />
            <span className="text-2xl font-bold font-mono text-amber-900 hover:text-amber-700 transition">
              Open Hands for Peace
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-xl text-gray-800 hover:text-amber-600 transition font-medium"
            >
              Trang chủ
            </Link>
            <Link
              to="/worldmap"
              className="block text-lg text-gray-800 hover:text-amber-600 font-medium"
            >
              World Map
            </Link>
            <Link
              to="/about"
              className="text-xl text-gray-800 hover:text-amber-600 transition font-medium"
            >
              Giới thiệu
            </Link>
            <Link
              to="/project"
              className="text-xl text-gray-800 hover:text-amber-600 transition font-medium"
            >
              Dự án
            </Link>
            <button
              onClick={onLoginButtonClick}
              className="cursor-pointer text-xl px-5 py-1 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600 hover:border-amber-500 transition"
            >
              Đăng nhập
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              <Menu className="h-8 w-8 text-amber-700" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block text-lg text-gray-800 hover:text-amber-600 font-medium"
          >
            Trang chủ
          </Link>
          <Link
            to="/worldmap"
            className="block text-lg text-gray-800 hover:text-amber-600 font-medium"
          >
            World Map
          </Link>
          <Link
            to="/about"
            className="block text-lg text-gray-800 hover:text-amber-600 font-medium"
          >
            Giới thiệu
          </Link>
          <Link
            to="/project"
            className="block text-lg text-gray-800 hover:text-amber-600 font-medium"
          >
            Dự án
          </Link>
          <button className="w-full text-left text-lg px-2 py-1 rounded-md border-2 border-amber-600 bg-amber-500 text-white font-semibold hover:bg-amber-600 hover:border-amber-500 transition">
            Đăng nhập
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
