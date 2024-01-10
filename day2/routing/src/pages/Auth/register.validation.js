import { object, string, ref } from "yup";

const registerSchema = object({
  email: string().email().required(),
  password: string().min(6).required(),
  confirmPassword: string()
    .oneOf([ref("password")])
    .required(),
});

export default registerSchema;
