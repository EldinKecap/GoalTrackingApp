import { AppBar, Typography } from "@mui/material";
import React from "react";

export default function TitleBar() {
    let title;

    switch (location.pathname) {
        case "/":
            title = "Goal list"
            break;
        case "/create":
            title = "Create a goal"
            break;
        case "/edit":
            title = "Edit a goal"
            break;
        case "/login":
            title = "Login"
            break;
        case "/createAccount":
            title = "Create an account"
            break;
        default:
            title = "Error message";
            break;
    }


  return (
    <AppBar elevation={0}>
      <Typography variant="h4" component="h1" m={0.5}>
        {title}
      </Typography>
    </AppBar>
  );
}
