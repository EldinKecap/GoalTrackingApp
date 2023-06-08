import {
  Add,
  DarkMode,
  DeleteForever,
  Edit,
  LightMode,
  PlaylistAddCheck,
} from "@mui/icons-material";
import { AppBar, Fab, Tooltip, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeModeContext from "../store/ThemeContext";

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
      right: 130,
      margin: "0 auto",
    },
    changeThemeButton: {
      position: "absolute",
      zIndex: 1,
      top: -20,
      left: 130,
      right: 0,
      margin: "0 auto",
    },
    editLink: {
      position: "absolute",
      zIndex: 1,
      top: -10,
      left: 255,
      right: 0,
      margin: "0 auto",
    },
  };

  const ThemeContext = useContext(ThemeModeContext);
  return (
    <AppBar position="fixed" color="primary" sx={classes.navbar}>
      <Link style={{ color: "white" }} to="/create">
        <Tooltip title="Create a goal">
          <Fab
            sx={classes.createGoalLink}
            color="primary"
            aria-label="create a new goal"
          >
            <Add />
          </Fab>
        </Tooltip>
      </Link>
      <Link style={{ color: "white" }} to="/">
        <Tooltip title="Goal List">
          <Fab
            sx={classes.goalListLink}
            color="secondary"
            aria-label="goal list link"
          >
            <PlaylistAddCheck />
          </Fab>
        </Tooltip>
      </Link>
      <Link style={{ color: "white" }} to="/edit">
        <Tooltip title="Edit or Delete Goals">
          <Fab
            sx={classes.editLink}
            color="info"
            aria-label="edit goals"
          >
            <Edit />
          </Fab>
        </Tooltip>
      </Link>
      <Tooltip title="Change theme">
        <Fab
          sx={classes.changeThemeButton}
          color="secondary"
          aria-label="goal list link"
          onClick={() => {
            ThemeContext.setThemeMode(
              ThemeContext.themeMode === "dark" ? "light" : "dark"
            );
          }}
        >
          {ThemeContext.themeMode === "dark" ? <LightMode /> : <DarkMode />}
        </Fab>
      </Tooltip>
    </AppBar>
  );
}
