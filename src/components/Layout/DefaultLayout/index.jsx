import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
function DefaultLayout({ children }) {
  const [modalLogin, SetModalLogin] = useState(false);
  const navigator = useNavigate();
  const handleLoginRequest = () => {
    navigator("/profile");
  };

  const handelLogin = () => {
    SetModalLogin(!modalLogin);
  };

  return (
    <div className="relative w-full ">
      <Header onLoginButtonClick={handelLogin} />
      {modalLogin && (
        <LoginModal
          onLoginButtonClick={handelLogin}
          loginRequest={handleLoginRequest}
        />
      )}
      <div className="w-full ">
        <div className=" w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
