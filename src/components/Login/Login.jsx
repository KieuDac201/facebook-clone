import React from 'react'
import './login.scss'

const Login = ({ setShowRegisterForm }) => {

  const showRegisterForm = () => {
    setShowRegisterForm(true)
  }


  return (
    <div className="login">
      <div className="login__form" >
        <input type="text" className="login__input" placeholder="Email hoặc số điện thoại" />
        <input type="password" className="login__input" placeholder="Mật khẩu" />
        <div className="login__btn">
          <button className="login__btn-submit">
            Đăng nhập
          </button>
          <div className="login__btn-forgotPass">
            Quên mật khẩu?
          </div>
          <button className="login__btn-createAcc" onClick={showRegisterForm}>
            Tạo tài khoản mới
          </button>
        </div>
      </div>
      <div className="login__text">
        <strong>Tạo Trang</strong> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.

      </div>
    </div>
  )
}

export default Login
