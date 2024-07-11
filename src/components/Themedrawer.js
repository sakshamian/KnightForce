import React from "react";

import "./css/Themedrawer.css";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeFeatures/themeFeatures";
import { useNavigate } from "react-router-dom";

const ThemeMenu = (props) => {
  var r = document.querySelector(":root");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colorheading = useSelector((state) => state.theme.themeColor);
  const changeTheme = (color) => {
    r.style.setProperty("--themecolor", color);
    dispatch(setTheme(color));
  };


  const changeThemeTeal = () => {
    changeTheme("teal");
    navigate("/");
  };
  const changeThemePurple = () => {
    changeTheme("purple");
    navigate("/");
  };
  const changeThemeBlue = () => {
    changeTheme("blue");
    navigate("/");
  };
  const changeThemeOrange = () => {
    changeTheme("orange");
    navigate("/");
  };
  const changeThemeGreen = () => {
    changeTheme("green");
    navigate("/");
  };
  const changeThemePink = () => {
    changeTheme("pink");
    navigate("/");
  };

  return (
    <div className="themedrawer">
      <div className="headerForTheme">Select Theme Color</div>
      <div className="buttonThemeContainer">
        {colorheading === "teal" ? (
          <button
            className="changeThemeButton tealbtn tealselected"
            onClick={changeThemeTeal}
          >
            Teal
          </button>
        ) : (
          <button
            className="changeThemeButton tealbtn"
            onClick={changeThemeTeal}
          >
            Teal
          </button>
        )}
        {colorheading === "orange" ? (
          <button
            className="changeThemeButton orangebtn orangeselected"
            onClick={changeThemeOrange}
          >
            Orange
          </button>
        ) : (
          <button
            className="changeThemeButton orangebtn"
            onClick={changeThemeOrange}
          >
            Orange
          </button>
        )}
      </div>
      <div className="buttonThemeContainer">
        {colorheading === "purple" ? (
          <button
            className="changeThemeButton purplebtn purpleselected"
            onClick={changeThemePurple}
          >
            Purple
          </button>
        ) : (
          <button
            className="changeThemeButton purplebtn"
            onClick={changeThemePurple}
          >
            Purple
          </button>
        )}
        {colorheading === "pink" ? (
          <button
            className="changeThemeButton pinkbtn pinkselected"
            onClick={changeThemePink}
          >
            Pink
          </button>
        ) : (
          <button
            className="changeThemeButton pinkbtn"
            onClick={changeThemePink}
          >
            Pink
          </button>
        )}
      </div>
      <div className="buttonThemeContainer">
        {colorheading === "blue" ? (
          <button
            className="changeThemeButton bluebtn blueselected"
            onClick={changeThemeBlue}
          >
            Blue
          </button>
        ) : (
          <button
            className="changeThemeButton bluebtn"
            onClick={changeThemeBlue}
          >
            Blue
          </button>
        )}
        {colorheading === "green" ? (
          <button
            className="changeThemeButton greenbtn greenselected"
            onClick={changeThemeGreen}
          >
            Green
          </button>
        ) : (
          <button
            className="changeThemeButton greenbtn"
            onClick={changeThemeGreen}
          >
            Green
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeMenu;
