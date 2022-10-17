import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve conter no minimo 6 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "A senha deve conter caracteres especiais e numeros."
    )
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senha deve ser igual"),
  name: yup.string().required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório."),
  contact: yup.string().required("Campo obrigatorio"),
  course_module: yup.string().required("Campo obritório"),
});

export default schema;
