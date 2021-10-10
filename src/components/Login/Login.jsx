import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

import { signIn } from '../../firebase/config';
import "./login.scss";
import { schema } from "./yupSchema";

const Login = ({ setShowRegisterForm }) => {
  const [validInput, setValidInput] = useState(true)
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    setLoading(true)
    const user = await signIn(email, password)
    if (user.code === 'auth/user-not-found' || user.code === 'auth/wrong-password') {
      setValidInput(false)
    } else {

      setValidInput(true)
      reset()
    }
    setLoading(false)
  };

  const showRegisterForm = () => {
    setShowRegisterForm(true);
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email", {
            onChange: () => setValidInput(true),
          })}
          className={
            errors.email ? "login__input login__input--error" : "login__input"
          }
          placeholder="Email"
        />
        <p className="login__form-errorText">{errors.email?.message}</p>
        <input
          type="password"
          {...register("password", {
            onChange: () => setValidInput(true),
          })}
          className={
            errors.password ? "login__input login__input--error" : "login__input"
          }
          placeholder="Mật khẩu"
        />
        <p className="login__form-errorText">{errors.password?.message}</p>
        <p className="login__form-errorText">{!validInput && 'email hoặc mật khẩu không đúng!'}</p>
        <div className="login__btn">
          <button type="submit" className="login__btn-submit">
            {loading ? <ClipLoader color="#ffffff" loading={loading} size={30} /> : 'Đăng nhập'}
          </button>
          <div className="login__btn-forgotPass">Quên mật khẩu?</div>
          <button
            className="login__btn-createAcc"
            onClick={showRegisterForm}
            type="button"
          >
            Tạo tài khoản mới
          </button>
        </div>
      </form>
      <div className="login__text">
        <strong>Tạo Trang</strong> dành cho người nổi tiếng, nhãn hiệu hoặc
        doanh nghiệp.
      </div>
    </div>
  );
};

export default Login;
