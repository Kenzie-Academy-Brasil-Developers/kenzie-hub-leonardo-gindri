import logo from "../../../Images/logo.png";
import { ContainerRegister } from "./Style";
import Api from "../../Components/Api/Api";
import { useEffect } from "react";
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
  const navigate = useNavigate();

  function loginpage(event) {
    event.preventDefault();
    console.log("22");
    navigate("/");
  }

  function onSubmitFunction(data) {
    console.log(data);
    // Api.post("/users", {
    //   email: "johndoe@email.com",
    //   password: "123456",
    //   name: "John Doe",
    //   bio: "Lorem ipsum dolor emet",
    //   contact: "linkedin/in/johndoe",
    //   course_module: "Segundo Módulo (Frontend avançado)",
    // });
  }

  return (
    <ContainerRegister>
      <div className="header">
        <img src={logo} alt="" />
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
          <span> {errors.name?.message} </span>
          <p>Email</p>
          <input
            type={"text"}
            {...register("email")}
            placeholder={"Digite aqui seu email"}
          />
          <span> {errors.email?.message} </span>
          <p>Senha</p>
          <input
            type={"password"}
            {...register("password")}
            placeholder={"Digite aqui sua senha"}
          />
          <span> {errors.password?.message} </span>
          <p>Confirmar Senha</p>
          <input
            type={"password"}
            {...register("confirmPassword")}
            placeholder={"Confirme sua senha"}
          />
          <span> {errors.confirmPassword?.message} </span>
          <p>Bio</p>
          <input
            type={"text"}
            {...register("bio")}
            placeholder={"Digite aqui sua bio"}
          />
          <span> {errors.bio?.message} </span>
          <p>Contato</p>
          <input
            type={"text"}
            {...register("contact")}
            placeholder={"Digite aqui seu contato"}
          />
          <span> {errors.contact?.message} </span>
          <p>Selecionar Módulo</p>
          <select name="" {...register("course_module")} id="">
            <option value="Primerio Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
          </select>
          <span> {errors.course_module?.message} </span>
          <button type="submit" className="btnCadastrar">
            Cadastrar
          </button>
        </form>
      </div>
    </ContainerRegister>
  );
}
