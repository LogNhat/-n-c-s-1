import profile from "../../../jsons/profiles";
import { IoCameraReverseSharp } from "react-icons/io5";
function Info() {
  return (
    <div className="w-full h-full flex justify-center my-10">
      <div className="w-2/3 flex flex-row">
        <div className="h-full flex flex-col items-center relative">
          <img
            src={profile.url_img}
            alt=""
            className="w-40 h-40 rounded-[100%] border-4 border-gray-200"
          />
          <button className="w-10 h-10 absolute -bottom-4">
            <IoCameraReverseSharp className="w-full h-full text-gray-400 hover:text-gray-500 cursor-pointer" />
          </button>
        </div>
        <div className="px-5">
          <p className="text-4xl text-gray-600 font-medium">{profile.name}</p>
          <p className="mt-3 text-lg text-gray-600">{profile.email}</p>
          <button className="px-5 py-2 bg-amber-400 text-white rounded-md mt-10 font-medium cursor-pointer hover:bg-amber-500">
            Đổi thông tin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
