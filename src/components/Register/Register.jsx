import React from 'react'
import './register.scss'
import { GrClose } from 'react-icons/gr'

const Register = ({ setShowRegisterForm }) => {

  const hideForm = () => {
    setShowRegisterForm(false)
  }

  return (
    <div className="register">
      <div className="register__form">
        <div className="register__form-btnClose" onClick={hideForm}>
          <GrClose />
        </div>
        <div className="register__form-top">
          <h3>Đăng ký</h3>
          <p>Nhanh chóng và dễ dàng.</p>
        </div>
        <div className="register__form-main">
          <div className="register__form-group">
            <input type="text" placeholder="Họ" />
            <input type="text" placeholder="Tên" />
          </div>
          <div className="register__form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="register__form-group">
            <input type="password" placeholder="Mật khẩu" />
          </div>
          <div className="register__form-group">
            <input type="password" placeholder="Xác nhận mật khẩu" />
          </div>
          <button className="register__form-btn">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
