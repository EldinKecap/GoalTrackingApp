import { Add, PlaylistAddCheck } from "@mui/icons-material";
import { AppBar, Fab, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const classes = {
    createGoalLink: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
    navbar: {
      top: "auto",
      bottom: 0,
      height: "50px",
    },
    goalListLink: {
        position: "absolute",
        zIndex: 1,
        top: -20,
        left: 0,
        right: 150,
        margin: "0 auto",
      },
  };
  return (
    <AppBar position="fixed" color="primary" sx={classes.navbar}>
      <Link style={{ color: "white" }} to="/create">
        <Tooltip title="Create a goal">
          <Fab sx={classes.createGoalLink} color="primary" aria-label="create a new goal">
            <Add />
          </Fab>
        </Tooltip>
      </Link>
      <Link style={{ color: "white" }} to="/">
        <Tooltip title="Goal List">
          <Fab sx={classes.goalListLink} color="info" aria-label="goal list link" >
            <PlaylistAddCheck />
          </Fab>
        </Tooltip>
      </Link>
    </AppBar>
  );
}
