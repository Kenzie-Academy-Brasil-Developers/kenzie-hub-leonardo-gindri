import React from "react";
import AuthProvider from "./Contexts/AuthContext";
import RoutesAll from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesAll />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;
