import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api/Api";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import "react-toastify/dist/ReactToastify.min.css";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [gatilho, setGatilho] = useState(false);

  useEffect(() => {
    function Profile() {
      Api.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      }).then((response) => {
        setUser(response.data);
        navigate("/dashboard", { replace: true });
      });
    }
    Profile();
  }, [gatilho]);

  function onSubmitFunction(data) {
    Api.post("/sessions", data)

      .then((response) => {
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        setUser(response.data.user);
        useToast("success", "Login efetuado com sucesso.");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        if (
          err.response.data.message === "Incorrect email / password combination"
        ) {
          useToast("error", "Verifique se email e senha estão corretos.");
        }
      });
  }

  function logout(event) {
    event.preventDefault();
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  function onSubmitCadastro(data) {
    Api.post("/users", data)
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
        setUser,
        logout,
        onSubmitCadastro,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
