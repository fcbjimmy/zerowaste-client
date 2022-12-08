import * as yup from "yup";

const capital = /^[A-Z]+[a-zA-Z]*$/;
export const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters long")
    .max(32)
    .matches(capital, "First letter of name must be capitalize")
    .required(),
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("Email is required!"),
  password: yup
    .string()
    .min(5, "Password must be longer than 5 characters!")
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required!")
    .oneOf([yup.ref("password"), null], "Passwords must match!"),
});
