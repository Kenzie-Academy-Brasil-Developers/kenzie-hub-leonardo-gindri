import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { useEffect } from "react";

export default function RoutesAll() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    token ? navigate("../dashboard") : navigate("../");
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
