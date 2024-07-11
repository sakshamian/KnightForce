import React from "react";
import Navbar from "./components/Navbar";
import Snackbars from "./components/Snackbars";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/SignupPage";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Friends from "./pages/FriendPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemePage from "./pages/Theme";
import ComingSoon from "./components/ComingSoon";
import ChessBot from "./Bots/ChessBot";
import DifficultyPageforChess from "./Bots/DifficultyPageforChess";
import { useSelector } from "react-redux";

const App = () => {
  const progressbar = useSelector((state) => state.progressBar.isProgressBar);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Content OpenContent">
          <Navbar />
          {progressbar ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress color="success" />
            </Box>
          ) : (
            <></>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ComingSoon" element={<ComingSoon />} />
            <Route
              path="ChessBot"
              element={<ChessBot />}
            />
            <Route
              path="DifficultyPageforChess"
              element={<DifficultyPageforChess />}
            />
            <Route path="/SignupPage" element={<Signup />} />
            <Route
              path="/Friends"
              element={<Friends />}
            />
            <Route path="/ThemePage" element={<ThemePage />} />
          </Routes>
        </div>
        <Snackbars />
      </div>
    </BrowserRouter>
  );
};

export default App;
