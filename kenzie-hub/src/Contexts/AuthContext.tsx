import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../Services/Api/Api";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import "react-toastify/dist/ReactToastify.min.css";

export const AuthContext = createContext({} as IAuthContext);

export interface IAuthContext {
  onSubmitFunction: (obj: ILogin) => void;
  user: IUser | null;
  logout: (event: React.SyntheticEvent<Element, Event>) => void;
  onSubmitCadastro: (data: ICadastro) => void;
  loginpage(event: React.SyntheticEvent): void;
  token: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IData {
  data: ReactNode;
}

export interface IRequisicaoApi {
  config: object;
  data: ITeste2;
  headers: object;
  request: object;
  status: number;
  statusText: string;
  user: IUser;
  token: string;
}

interface ITeste2 {
  token: string;
  user: IUser;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ICadastro {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  confirmPassword: string;
}

export interface ITechs {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
  user: IUser;
}

export interface IWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
  techs: ITechs[];
  works: IWorks[];
}

export default function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [gatilho, setGatilho] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    function Profile() {
      Api.get<IUser>("/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      }).then((response) => {
        setUser(response.data);
        navigate("/dashboard", { replace: true });
      });
    }
    Profile();
  }, [gatilho, token, user]);

  function onSubmitFunction(obj: ILogin) {
    Api.post<IRequisicaoApi>("/sessions", obj)

      .then((response) => {
        localStorage.setItem("@TOKEN", response.data.token);
        setUser(response.data.user);
        useToast("success", "Login efetuado com sucesso.");
        navigate("/dashboard", { replace: true });
        setToken(true);
      })
      .catch((err) => {
        if (
          err.response.data.message === "Incorrect email / password combination"
        ) {
          useToast("error", "Verifique se email e senha estão corretos.");
        }
      });
  }

  function logout(event: React.SyntheticEvent) {
    event.preventDefault();
    localStorage.clear();
    setUser(null);
    setToken(false);
    navigate("/");
  }

  function loginpage(event: React.SyntheticEvent) {
    event.preventDefault();
    navigate("/");
  }

  function onSubmitCadastro(data: ICadastro) {
    Api.post<IData>("/users", data)
      .then((response) => {
        useToast("success", "Conta cadastrada com sucesso."),
          navigate("/", { replace: true });
        setGatilho(!gatilho);
      })
      .catch((err) => {
        if (err.response.data.message === "Email already exists") {
          useToast("error", "Esse email já existe.");
        }
      });
  }

  return (
    <AuthContext.Provider
      value={{
        onSubmitFunction,
        user,
        logout,
        onSubmitCadastro,
        loginpage,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
