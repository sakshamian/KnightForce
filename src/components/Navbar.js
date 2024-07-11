import React from "react";
import "./css/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="navbar">
      <div className="left-heading" onClick={()=> {
        navigate("/");
      }}>
        <h1>KnightForce</h1>
      </div>
    </div>
  );
};

export default Navbar;
