import Logo from "../../../Images/Logo.png";
import { ContainerRegister } from "./Style";
import Api from "../../Services/Api/Api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toastSuccess = () =>
    toast.success("Conta criada com sucesso.", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const toastFailed = () =>
    toast.error("Ops, algo deu errado!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const navigate = useNavigate();

  function loginpage(event) {
    event.preventDefault();
    console.log("22");
    navigate("/");
  }

  function onSubmitFunction(data) {
    Api.post("/users", data)
      .then(
        (response) => console.log(response.data),
        toastSuccess(),
        setTimeout(() => {
          navigate("/");
        }, 2000)
      )
      .catch((err) => console.log(err));
  }

  return (
    <ContainerRegister>
      <div className="header">
        <img src={Logo} alt="" />
        <button onClick={(event) => loginpage(event)} className="btnVoltar">
          Voltar
        </button>
      </div>
      <div className="divForm">
        <h2>Cria sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <p>Nome</p>
          <input
            type={"text"}
            {...register("name")}
            placeholder={"Digite aqui seu nome"}
          />
          <span className="spanErro"> {errors.name?.message} </span>
          <p>Email</p>
          <input
            type={"text"}
            {...register("email")}
            placeholder={"Digite aqui seu email"}
          />
          <span className="spanErro"> {errors.email?.message} </span>
          <p>Senha</p>
          <input
            type={"password"}
            {...register("password")}
            placeholder={"Digite aqui sua senha"}
          />
          <span className="spanErro"> {errors.password?.message} </span>
          <p>Confirmar Senha</p>
          <input
            type={"password"}
            {...register("confirmPassword")}
            placeholder={"Confirme sua senha"}
          />
          <span className="spanErro"> {errors.confirmPassword?.message} </span>
          <p>Bio</p>
          <input
            type={"text"}
            {...register("bio")}
            placeholder={"Digite aqui sua bio"}
          />
          <span className="spanErro"> {errors.bio?.message} </span>
          <p>Contato</p>
          <input
            type={"text"}
            {...register("contact")}
            placeholder={"Digite aqui seu contato"}
          />
          <span className="spanErro"> {errors.contact?.message} </span>
          <p>Selecionar Módulo</p>
          <select name="" {...register("course_module")} id="">
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <span className="spanErro"> {errors.course_module?.message} </span>
          <button type="submit" className="btnCadastrar">
            Cadastrar
          </button>
        </form>
      </div>
    </ContainerRegister>
  );
}
