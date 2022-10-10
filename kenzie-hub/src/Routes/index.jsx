import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Dashboard from "../Pages/Dashboard/Dashboard";

export default function RoutesAll() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
