import { DashbaordPage } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Logo from "../../../Images/Logo.png";
import { Navigate } from "react-router-dom";
import Tecnologias from "../../Components/Tecnologias/Tecnologias";
import NovaTecnologia from "../../Components/NovaTecnologia/CadastrarNovaTec";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      {user ? (
        <DashbaordPage>
          <header>
            <img src={Logo} alt="" />
            <button className="btnLogout" onClick={(event) => logout(event)}>
              Sair
            </button>
          </header>
          <div className="divsorias"></div>
          <main>
            <div className="infoUser">
              <h1>Olá, {user.name}</h1>
              <span>{user.course_module}</span>
            </div>
          </main>
          <div className="divsorias"></div>
          <div className="container">
            <div className="headerContainer">
              <h2>Tecnologias</h2>
              <button className="addTecBtn">+</button>
            </div>
            <div className="containerTecnologias">
              <Tecnologias />
            </div>
          </div>
          <NovaTecnologia />
        </DashbaordPage>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}
