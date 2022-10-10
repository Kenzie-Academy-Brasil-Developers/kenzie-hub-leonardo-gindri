import { DashbaordPage } from "./style";
import Logo from "../../../Images/Logo.png";
import { useEffect, useState } from "react";
import Api from "../../Services/Api/Api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    Api.get("/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    }).then((response) => {
      setUser({
        name: response.data.name,
        course_module: response.data.course_module,
      });
    });
  }, []);

  const navigate = useNavigate();

  function logout(event) {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
  }

  return (
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
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </DashbaordPage>
  );
}
