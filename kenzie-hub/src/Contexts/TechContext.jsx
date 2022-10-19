import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api/Api";
import useToast from "../hooks/useToast";
import "react-toastify/dist/ReactToastify.min.css";

export const TechContext = createContext({});

export default function TechProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    Api.get("/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => {});
  }, []);

  const CadastrarTech = (data) => {
    Api.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    })
      .then((response) => {
        useToast("success", "Tecnologia cadastrada");
        setTechs((previewState) => [...previewState, response.data]);
        setModal(false);
      })
      .catch((err) => {
        if (err.response.data.status == "error") {
          useToast("error", "Você já adicionou essa tecnologia.");
        }
      });
  };

  const DeletarTech = (id) => {
    Api.delete(`/users/techs/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    }).then((response) => {
      setTechs(techs.filter((obj) => obj.id != id));
    });
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModal(false);
  };

  return (
    <TechContext.Provider
      value={{
        openModal,
        closeModal,
        modal,
        CadastrarTech,
        techs,
        DeletarTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
