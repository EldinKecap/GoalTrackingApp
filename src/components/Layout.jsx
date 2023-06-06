import { Box, ThemeProvider , createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import React from "react";


const theme = createTheme({
    palette:{
      mode:"dark",
      primary:purple,
      background:{
        paper: "#001E3C",
        default:"#001E3C"
      }
    },
    
  });

export default function Layout({ children }) {
  const classes = {
    layout: {
      display: "flex",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={classes.layout}>{children}</Box>
    </ThemeProvider>
  );
}
