import React from "react";
import AuthProvider from "./Contexts/AuthContext";
import RoutesAll from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import TechProvider from "./Contexts/TechContext";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AuthProvider>
        <TechProvider>
          <RoutesAll />
        </TechProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
