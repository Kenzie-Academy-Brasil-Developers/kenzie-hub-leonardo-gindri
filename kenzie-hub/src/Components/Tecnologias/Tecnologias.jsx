import { CardTecnologia } from "./style";
import lixeira from "../../../Images/Vector.png";
import { useContext } from "react";
import { TechContext } from "../../Contexts/TechContext";

export default function Tecnologias({ title, status, idTech }) {
  const { DeletarTech } = useContext(TechContext);
  return (
    <CardTecnologia>
      <h2>{title}</h2>
      <div>
        <span>{status}</span>
        <button onClick={(e) => DeletarTech(idTech)} id={idTech}>
          <img src={lixeira} alt="" />
        </button>
      </div>
    </CardTecnologia>
  );
}
