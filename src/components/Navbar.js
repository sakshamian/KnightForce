import React from "react";
import "./css/Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../features/sidebarFeatures/sidebarFeatures";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const isloggedin = useSelector((state) => state.loginData.isLoggedIn);
  const username = useSelector((state) => state.loginData.username);
  const isOpen = useSelector((state) => state.sidebarData.isOpen);
  const dispatch = useDispatch();
  return (
    <div className={isOpen ? "navbar" : "navbar open"}>
      <div className="left-heading">
        <button
          onClick={() => {
            dispatch(toggle());
          }}
        >
          <MenuIcon />
        </button>
        <h1>KnightMind</h1>
      </div>
      {isloggedin ? (
        <div className="right-heading">
          <h1>{username}</h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
