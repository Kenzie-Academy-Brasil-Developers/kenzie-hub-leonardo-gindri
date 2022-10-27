import Logo from "../../../Images/Logo.png";
import { AuthContext } from "../../Contexts/AuthContext";
import { ContainerRegister } from "./Style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import schema from "../../Validations/validationCadastro";
import { Link } from "react-router-dom";
import { ICadastro } from "../../Contexts/AuthContext";

export default function Cadastro() {
  const { onSubmitCadastro, loginpage } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICadastro>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerRegister>
      <div className="header">
        <img src={Logo} alt="" />
        <Link className="btnVoltar" to={"/"}>
          Voltar
        </Link>
      </div>
      <div className="divForm">
        <h2>Cria sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitCadastro)}>
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
          <select {...register("course_module")} id="">
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
