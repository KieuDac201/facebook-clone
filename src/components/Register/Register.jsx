import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import ReactTooltip from "react-tooltip";
import { signUp, updateUserProfile } from "../../firebase/config";
import "./register.scss";
import { schema } from "./yupSchema";


const Register = ({ setShowRegisterForm }) => {
  const [emailAlreadyError, setEmailAlreadyError] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password, firstName, lastName }) => {
    const res = await signUp(email, password);
    if (res.code === "auth/email-already-in-use") {
      setEmailAlreadyError(true);

    } else {
      const fullName = firstName.trim() + ' ' + lastName.trim()
      updateUserProfile(fullName)
      setEmailAlreadyError(false);
      reset();
      hideForm();
    }
  };

  const hideForm = () => {
    setShowRegisterForm(false);
  };

  const { firstName, lastName, email, password, confirmPassword } = errors;
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
        <form className="register__form-main" onSubmit={handleSubmit(onSubmit)}>
          <div className="register__form-group">
            <input
              type="text"
              placeholder="Họ"
              data-tip={firstName ? firstName?.message : ""}
              {...register("firstName")}
              className={firstName ? "error" : ""}
            />
            <input
              type="text"
              placeholder="Tên"
              data-tip={lastName ? lastName?.message : ""}
              {...register("lastName")}
              className={lastName ? "error" : ""}
            />
          </div>
          <div className="register__form-group">
            <input
              type="text"
              placeholder="Email"
              data-tip={
                (email && emailAlreadyError) || (email && !emailAlreadyError)
                  ? email?.message
                  : !email && emailAlreadyError
                    ? "email da ton tai"
                    : ""
              }
              {...register("email", {
                onChange: () => setEmailAlreadyError(false),
              })}
              className={email || emailAlreadyError ? "error" : ""}
            />
          </div>
          <div className="register__form-group">
            <input
              type="password"
              placeholder="Mật khẩu"
              data-tip={password ? password?.message : ""}
              {...register("password")}
              className={password ? "error" : ""}
            />
          </div>
          <div className="register__form-group">
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              data-tip={confirmPassword ? confirmPassword?.message : ""}
              {...register("confirmPassword")}
              className={confirmPassword ? "error" : ""}
            />
          </div>
          <button className="register__form-btn" type="submit">
            Đăng ký
          </button>
          <ReactTooltip type="error" place="top" effect="float" />
        </form>
      </div>
    </div>
  );
};

export default Register;
