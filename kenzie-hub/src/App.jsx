import React from "react";
import RoutesAll from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <RoutesAll />
      <ToastContainer />
    </div>
  );
}

export default App;
