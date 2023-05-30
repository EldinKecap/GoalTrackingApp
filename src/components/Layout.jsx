import { Box, ThemeProvider , createTheme } from "@mui/material";
import React from "react";


const theme = createTheme({
    palette:{
      mode:"dark"
    }
  });

export default function Layout({ children }) {
  const classes = {
    layout: {
      display: "flex",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>{children}</Box>
    </ThemeProvider>
  );
}
