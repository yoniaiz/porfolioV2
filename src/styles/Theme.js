import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    powderWhite: "#EDF5E1",
    lightGreen: "#8EE4AF",
    darkGreen: "#5CDB95",
    lightBlue: "#379683",
    darkBlue: "#05386B",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  backgroundColor: "#5CDB95"
};

const Theme = ({children}) => {

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
