import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <ThemeProvider>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
