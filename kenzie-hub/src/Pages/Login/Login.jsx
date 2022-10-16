import { ContainerLogin } from "./Style";
import Logo from "../../../Images/Logo.png";
import * as yup from "yup";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve conter no minimo 6 caracteres")
    .required("Campo obrigatório"),
});

export default function LoginPage() {
  const { onSubmitFunction, user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerLogin>
      <img src={Logo} alt="" />
      <div className="div">
        <h1 className="teste">Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <span className="spanInput">Email</span>
          <input {...register("email")} placeholder={"Digite seu email"} />
          <span className="spanErro"> {errors.email?.message} </span>
          <span className="spanInput">Senha</span>
          <input
            {...register("password")}
            type="password"
            placeholder={"Digite sua senha"}
          />
          <span className="spanErro"> {errors.password?.message} </span>
          <button type="submit">Entrar</button>
        </form>
        <div className="registerBox">
          <span className="spanRegister">Ainda não possui uma conta?</span>

          <Link className="button link" to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </ContainerLogin>
  );
}
