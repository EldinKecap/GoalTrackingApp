import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import {
  blueGrey,
  blue,
  grey,
  lightBlue,
  indigo,
  purple,
} from "@mui/material/colors";
import React, { useState } from "react";
import ThemeModeContext from "../store/ThemeContext";

export default function Layout({ children }) {
  const [themeMode, setThemeMode] = useState("dark");
  console.log(themeMode);
  const theme = createTheme({
    palette:
      themeMode === "dark"
        ? {
            mode: "dark",
            primary: {
              main: "#1565B6",
            },
            secondary: blue,
            info: grey,
            calendarHeader: {
              main: "#1565B6",
              light: "#1565B6",
              dark: "#1565B6",
              contrastText: "#fff",
            },
            background: {
              paper: "#001E3C",
              default: "#001E3C",
            },
          }
        : {
            mode: "light",
            calendarHeader: {
              main: "#1565B6",
              light: "#1565B6",
              dark: "#1565B6",
              contrastText: "#1565B6",
            },
            secondary: lightBlue,
            background: {
              paper: "white",
              default: "white",
            },
            action:{
              active:"#fff"
            },
            text:{
              secondary:"white"
            }
          },
  });

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        <Stack>{children}</Stack>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
