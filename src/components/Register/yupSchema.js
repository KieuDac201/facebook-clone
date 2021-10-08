import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("Vui lòng nhập họ"),
  lastName: yup.string().required("Vui lòng nhập tên!"),
  email: yup
    .string()
    .email("Email không hợp lệ!")
    .required("Vui lòng nhập email!"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu!")
    .min(8, "Mật khẩu tối thiểu 8 ký tự!"),
  confirmPassword: yup
    .string()
    .required("Xác nhận mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu không khớp!"),
});
