import { ContainerLogin } from "./Style";
import logo from "../../../Images/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function registerPage(event) {
    event.preventDefault();
    navigate("/register");
  }

  return (
    <ContainerLogin>
      <img src={logo} alt="" />
      <div className="div">
        <h1 className="teste">Login</h1>
        <form onSubmit={handleSubmit}>
          <span className="spanInput">Email</span>
          <input {...register("email")} placeholder={"Digite seu email"} />
          <span> {errors.email?.message} </span>
          <span className="spanInput">Senha</span>
          <input {...register("password")} placeholder={"Digite sua senha"} />
          <span> {errors.password?.message} </span>
          <button>Entrar</button>
        </form>
        <div className="registerBox">
          <span className="spanRegister">Ainda não possui uma conta?</span>
          <button onClick={(event) => registerPage(event)}>Cadastre-se</button>
        </div>
      </div>
    </ContainerLogin>
  );
}
