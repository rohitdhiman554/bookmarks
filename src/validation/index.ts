import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup.string().min(2).max(15).required("please enter your name"),
  email: yup.string().email().required("please enter your email"),
  password: yup.string().min(6).required("please enter your password"),
});

export const loginSchema = yup.object({
  email: yup.string().email().required("please enter your email"),
  password: yup.string().required("please enter your password"),
});
