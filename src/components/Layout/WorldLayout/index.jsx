import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../DefaultLayout/Header";

function WorldLayout({ children }) {
  const [modalLogin, SetModalLogin] = useState(false);
  const navigator = useNavigate();
  const handleLoginRequest = () => {
    navigator("/profile");
  };

  const handelLogin = () => {
    SetModalLogin(!modalLogin);
  };

  return (
    <div className="relative w-full h-full">
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
    </div>
  );
}

export default WorldLayout;
