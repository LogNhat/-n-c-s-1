import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
function LoginModal({ onLoginButtonClick, loginRequest }) {
  const [type, setType] = useState("login");
  const handleLoginRequest = () => {
    console.log("s");
    loginRequest();
  };

  switch (type) {
    case "login":
      return (
        <div
          className="w-full h-screen fixed top-0 bg-black/60 z-10 flex justify-center items-center "
          onClick={onLoginButtonClick}
        >
          <div
            className="relative h-126 w-100 bg-white/40 mt-10 rounded-sm backdrop-blur-xs border-2 border-white/50 p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <IoMdClose
              className="absolute top-5 right-5
                                text-white text-xl 
                                  cursor-pointer 
                                  hover:text-white/30"
              onClick={onLoginButtonClick}
            />
            <p className="py-10 mb-10 text-center text-4xl text-white font-medium">
              Đăng nhập
            </p>
            <div
              className="w-80 flex flex-row items-center border-b-1 border-b-white/30 h-10 justify-between mb-5
        "
            >
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Tài khoản Email"
                className="w-full roundedtext-black/30
           hover:text-white hover:shadow-none
            transition-none focus:outline-none focus:ring-0 placeholder-white/50"
              />
              <MdOutlineEmail className="text-white/50 h-full w-6" />
            </div>
            <div className="w-80 flex flex-row items-center border-b-1 border-b-white/30 h-10 justify-between mb-6">
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Mật khẩu"
                className="w-full roundedtext-black/30
           hover:text-white hover:shadow-none
            transition-none focus:outline-none focus:ring-0 placeholder-white/50"
              />
              <RiLockPasswordLine className="text-white/50 h-full w-6" />
            </div>

            <p className="w-full flex justify-end text-sm font-thin text-white/50 cursor-pointer hover:text-black/50 hover:font-nomal">
              Quên mật khẩu
            </p>
            <div className="w-full mt-6 flex justify-center">
              <button
                className="w-full py-2 text-xl bg-amber-600 rounded-sm cursor-pointer text-white"
                onClick={handleLoginRequest}
              >
                Đăng nhập
              </button>
            </div>
            <div className="w-full justify-center flex flex-row mt-3">
              <p className="text-white/50 px-2">Chưa có tài khoản?</p>
              <p
                className="text-md font-medium text-black/80 hover:text-black/50 cursor-pointer"
                onClick={() => {
                  setType("register");
                }}
              >
                Đăng ký
              </p>
            </div>
          </div>
        </div>
      );
    case "register":
      return (
        <div className="w-full h-screen fixed top-0 bg-black/60 z-10 flex justify-center items-center">
          <div className="relative h-126 w-100 bg-white/40 mt-10 rounded-sm backdrop-blur-xs border-2 border-white/50 p-10">
            <IoMdClose
              className="absolute top-5 right-5 
                                text-white text-xl 
                                  cursor-pointer 
                                  hover:text-white/30"
              onClick={onLoginButtonClick}
            />
            <p className="py-10 text-center text-4xl text-white font-medium">
              Đăng ký
            </p>
            <div
              className="w-80 flex flex-row items-center 
                            border-b-1 border-b-white/30 
                            h-10 justify-between mb-5"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Tên tài khoản"
                className="w-full roundedtext-black/30
                          hover:text-white hover:shadow-none
                            transition-none focus:outline-none 
                            focus:ring-0 placeholder-white/50"
              />
              <FaRegUserCircle className="text-white/50 h-full w-6" />
            </div>
            <div
              className="w-80 flex flex-row items-center 
                            border-b-1 border-b-white/30 
                            h-10 justify-between mb-5"
            >
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Tài khoản Email"
                className="w-full roundedtext-black/30
                          hover:text-white hover:shadow-none
                            transition-none focus:outline-none 
                            focus:ring-0 placeholder-white/50"
              />
              <MdOutlineEmail className="text-white/50 h-full w-6" />
            </div>
            <div
              className="w-80 flex flex-row 
                            items-center border-b-1
                            border-b-white/30 h-10 
                            justify-between mb-6"
            >
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Mật khẩu"
                className="w-full roundedtext-black/30
           hover:text-white hover:shadow-none
            transition-none focus:outline-none focus:ring-0 placeholder-white/50"
              />
              <RiLockPasswordLine className="text-white/50 h-full w-6" />
            </div>
            <div className="w-full flex flex-row justify-center items-center">
              <input type="checkbox" name="" id="" className="h-full" />
              <p className=" text-sm px-2 font-thin text-white/50">
                Tuân thủ mọi quy tắc cộng đồng và điều khoản?
              </p>
            </div>

            <div className="w-full mt-6 flex justify-center">
              <button className="w-full py-2 text-xl bg-amber-600 rounded-sm cursor-pointer text-white">
                Đăng ký
              </button>
            </div>
            <div className="w-full justify-center flex flex-row mt-3">
              <p className="text-white/50 px-2">Quay về đăng nhập?</p>
              <p
                className="text-md font-medium 
                          text-black/80 hover:text-black/50 
                            cursor-pointer"
                onClick={() => {
                  setType("login");
                }}
              >
                Đăng nhập
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return <div />;
  }
}

export default LoginModal;
