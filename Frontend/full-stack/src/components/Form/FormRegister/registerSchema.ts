import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().required("* campo obrigatório"),
  email: yup
    .string()
    .required("* campo obrigatório")
    .email("* endereço de e-mail inválido"),
  password: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres"),
  rePassword: yup
    .string()
    .required("* campo obrigatório")
    .min(6, "* mínimo de 6 caracteres")
    .oneOf(
      [yup.ref("password"), null],
      "* necessário que as senhas sejam iguais"
    ),
  img: yup.string(),
  phone: yup.string(),
});
