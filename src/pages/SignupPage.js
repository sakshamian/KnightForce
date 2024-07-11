import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";
import { useDispatch } from "react-redux";
import { setProgressBar } from "../features/progressbarFeatures/progressbarFeatures";
const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    open: false,

    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [err, seterr] = React.useState("Signup failed! Please try again");
  const [password, setPassword] = React.useState("");
  const [isdisabled, setdisabled] = React.useState(false);
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdisabled(true);
    dispatch(setProgressBar(true));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome User</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={isdisabled}>
            Sign Up
          </button>
        </form>
        <div className="signup-link">
          Already have an account?{" "}
          <a href="#">
            <Link to="/LoginPage">Login</Link>
          </a>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + vertical}
      >
        <div>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {err}
          </Alert>
        </div>
      </Snackbar>

      <Outlet />
    </div>
  );
};

export default Signup;
