import { DashbaordPage } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Logo from "../../../Images/Logo.png";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <DashbaordPage>
          <header>
            <img src={Logo} alt="" />
            <button onClick={(event) => logout(event)}>Sair</button>
          </header>
          <div className="divsorias"></div>
          <main>
            <div>
              <h1>Olá, {user.name}</h1>
              <span>{user.course_module}</span>
            </div>
          </main>
          <div className="divsorias"></div>
          <div className="notification">
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </DashbaordPage>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}
