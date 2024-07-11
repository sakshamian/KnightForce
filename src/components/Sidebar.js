import React from "react";
import "./css/Sidebar.css";
import { Outlet } from "react-router-dom";
import { Sidebarlink } from "./Sidebarlink";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  setSmallScreen,
} from "../features/sidebarFeatures/sidebarFeatures";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Sofia"
></link>;
const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebarData.isOpen);
  const dispatch = useDispatch();
  const isSmallScreen = useSelector((state) => state.sidebarData.isSmallScreen);
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      dispatch(setSmallScreen(true));
    } else {
      dispatch(setSmallScreen(false));
    }
  }

  function getCredentials(name) {
    // Split the name into words
    const words = name?.trim()?.split(/\s+/);

    // Check if there are two words
    if (words.length === 2) {
      // Return the first letter of each word
      return words[0][0] + words[1][0];
    } else {
      // Return the first two letters of the single word
      return name?.slice(0, 2);
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
  return (
    <div
      className={isOpen ? "sidebar open" : "sidebar"}
      onClick={
        isSmallScreen
          ? () => {
              dispatch(toggle());
            }
          : () => {}
      }
    >
      <div className="account-header">
      </div>
      <ul>
        <li>
          <Sidebarlink link="/" content="Home" />
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
