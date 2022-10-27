import { createContext, useContext, useEffect, useState } from "react";
import Api from "../Services/Api/Api";
import useToast from "../hooks/useToast";
import "react-toastify/dist/ReactToastify.min.css";
import {
  AuthContext,
  IAuthProviderProps,
  ICadastro,
  IUser,
} from "./AuthContext";

export const TechContext = createContext({} as ITechContext);

interface ITechContext {
  DeletarTech: (id: string) => void;
  openModal: (event: React.SyntheticEvent) => void;
  closeModal: (event: React.SyntheticEvent) => void;
  modal: boolean;
  CadastrarTech: (data: ICadastroData) => void;
  techs: ITechs[];
}

interface ICadastroData {
  status: string;
  title: string;
}

interface IRequisicaoCadastro {
  config: object;
  data: IUser;
  headers: object;
  request: object;
  status: string;
  statusText: string;
  id: string;
}

interface IRequisicaoDelete {
  id: string;
}

interface ITechs {
  title: string;
  status: string;
  id: string;
}

export default function TechProvider({ children }: IAuthProviderProps) {
  const { token } = useContext(AuthContext);
  const [modal, setModal] = useState<boolean>(false);
  const [techs, setTechs] = useState<ITechs[]>([]);

  useEffect(() => {
    Api.get<IUser>("/profile", {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => {});
  }, []);

  const CadastrarTech = (data: ICadastroData) => {
    Api.post<ITechs>("/users/techs", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    })
      .then((response) => {
        useToast("success", "Tecnologia cadastrada");
        setTechs([...techs, response.data]);
        setModal(false);
      })
      .catch((err) => {
        if (err.response.data.status == "error") {
          useToast("error", "Você já adicionou essa tecnologia.");
        }
      });
  };

  const DeletarTech = (id: string) => {
    Api.delete<IRequisicaoDelete>(`/users/techs/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
    }).then((response) => {
      setTechs(techs.filter((obj) => obj.id != id));
    });
  };

  const openModal = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setModal(true);
  };

  const closeModal = (event: React.SyntheticEvent) => {
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
