import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Email không hợp lệ!")
    .required("Vui lòng nhập email!"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu!")
    .min(8, "Mật khẩu tối thiểu 8 ký tự!"),
});
