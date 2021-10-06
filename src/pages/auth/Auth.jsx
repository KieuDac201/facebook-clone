import React from "react";

import Login from '../../components/Login/Login'
import "./auth.scss";
import logo from '../../assets/images/logo.svg'

const Auth = () => {
  return <div className="auth">
    <div className="auth__container">
      <div className="auth__heading">
        <div className="auth__heading-logo">
          <img src={logo} alt="Facebook logo" />
        </div>
        <h3 className="auth__heading-subtitle">
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
        </h3>
      </div>

      <div className="auth__form">
        <Login />
      </div>
    </div>
  </div>;
};

export default Auth;
