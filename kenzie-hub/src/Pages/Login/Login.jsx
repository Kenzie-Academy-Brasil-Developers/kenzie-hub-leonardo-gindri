import { ContainerLogin } from "./Style";
import Logo from "../../../Images/Logo.png";
import * as yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Api from "../../Services/Api/Api";
import { toast } from "react-toastify";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const toastSuccess = () =>
    toast.success("Acesso permitido.", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const toastFailed = () =>
    toast.error("Acesso negado.", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  function registerPage(event) {
    navigate("/register");
  }

  function onSubmitFunction(data) {
    Api.post("/sessions", data)
      .then(
        (response) => {
          console.log(response.data);
          localStorage.setItem("@TOKEN", response.data.token);
          localStorage.setItem("@USERID", response.data.user.id);
          toastSuccess();
        },
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000)
      )
      .catch((err) => {
        console.log(err);
      });
  }

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
          <button onClick={(event) => registerPage(event)}>Cadastre-se</button>
        </div>
      </div>
    </ContainerLogin>
  );
}
