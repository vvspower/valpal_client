import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { Routes , Route } from "react-router-dom";
import VerifyEmail from "./components/SignUp/VerifyEmail";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname == '/signup' || location.pathname == '/login'  ? null : <NavBar />}

      
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/verify/:token" element={<VerifyEmail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;
