import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ThemeModeContext from "../store/ThemeContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useGetGoals from "../hooks/useGetGoals";
import TitleBar from "../components/TitleBar";

export default function EditGoals() {

  const [goals, goalsLoading] = useGetGoals();

  return (
    <>
      <TitleBar title="Choose a goal to edit" />
      {goals.length > 0 ? goals.map((goal) => {
        return (
          <Paper
            key={goal.id}
            sx={{
              mt: "20px",
              mb:
                goals.indexOf(goal) === goals.length - 1
                  ? "100px"
                  : "",
              width: "250px",
              p: "10px"
            }}
          >
            <Link to={"/edit/" + goal.id} style={{ color: "inherit" }}>
              <Typography key={goal.id} noWrap >{goal.title}</Typography>
            </Link>
          </Paper>
        );
      })
        : <Typography variant="h5">No Goals</Typography>
      }
    </>
  );
}
