import { DashbaordPage } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Logo from "../../../Images/Logo.png";
import { Navigate } from "react-router-dom";
import Tecnologias from "../../Components/Tecnologias/Tecnologias";
import NovaTecnologia from "../../Components/NovaTecnologia/CadastrarNovaTec";
import { TechContext } from "../../Contexts/TechContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const { openModal, modal, techs } = useContext(TechContext);

  return (
    <>
      {user ? (
        <DashbaordPage>
          <header>
            <img src={Logo} id={""} alt="" />
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
              <button onClick={openModal} className="addTecBtn">
                +
              </button>
            </div>
            {techs.length ? (
              <div className="containerTecnologias">
                {techs.map((obj) => (
                  <Tecnologias
                    title={obj.title}
                    status={obj.status}
                    idTech={obj.id}
                    key={obj.id}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          {modal ? <NovaTecnologia /> : null}
        </DashbaordPage>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}
