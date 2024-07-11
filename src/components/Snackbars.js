import * as React from "react";
import { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Snackbars() {
  let val = 0;
  const [state, setState] = React.useState({
    open: false,
    open2: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open, open2 } = state;
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true, open2: false });
  };

  const handleClose = () => {
    setState({ ...state, open: false, open2: false });
  };
  const handleClickforlogout = (newState) => () => {
    setState({ ...newState, open: false, open2: true });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <div>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            You have successfully logged in!
          </Alert>
        </div>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose}
        key={horizontal + horizontal}
      >
        <div>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            You have successfully logged out!
          </Alert>
        </div>
      </Snackbar>
    </>
  );
}
export default Snackbars;
