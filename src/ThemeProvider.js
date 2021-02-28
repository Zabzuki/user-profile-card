import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

export const ThemeContext = React.createContext(theme);

const ThemeProvider = (props) => {
  // State to hold the new background color
  const [color, setColor] = useState(localStorage.getItem("color") || "white");

  let newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      background: {
        card: color,
      },
    },
  };

  const setBackgroundColor = (color) => {
    localStorage.setItem("color", color);
    setColor(color);
  };

  return (
    <ThemeContext.Provider value={setBackgroundColor}>
      <MuiThemeProvider theme={newTheme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
