import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    function Profile() {
      Api.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
      }).then((response) => {});
    }
  }, []);

  const toastSuccess = () =>
    toast.success("Acesso permitido.", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  function logout(event) {
    event.preventDefault();
    localStorage.clear();
    setUser(null);
    navigate("/");
  }

  function onSubmitFunction(data) {
    Api.post("/sessions", data)

      .then((response) => {
        console.log(response.data);
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        const { user: userResponse } = response.data;
        setUser(userResponse);
        toastSuccess();

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AuthContext.Provider value={{ onSubmitFunction, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
