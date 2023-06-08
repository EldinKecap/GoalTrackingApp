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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ThemeModeContext from "../store/ThemeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditGoals({ goalsToEdit }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [goalName, setGoalName] = useState();
  const [goalDescription, setGoalDescription] = useState();
  const themeMode = useContext(ThemeModeContext);
  const navigate = useNavigate();

  if( goalName != undefined && goalName.length >20 ){
    let shortenedGoalName = goalName.slice(0,20);
    setGoalName(shortenedGoalName)
  }

  function deleteGoal(id) {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    axios.delete(serverUrl + "goals/" + id).then(() => {
      navigate("/edit");
    });
  }

  function editGoal(id) {
    if (goalName == "" || goalName == undefined) {
      setGoalName("")
      return;
    }
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    axios
      .patch(serverUrl + "goals/" + id, {
        title: goalName,
        description: goalDescription,
      })
      .then(() => {
        navigate("/");
      });
  }

  return (
    <>
      {goalsToEdit.map((goal) => {
        return (
          <Box
            key={goal.id}
            sx={{
              mt: "20px",
              mb:
                goalsToEdit.indexOf(goal) === goalsToEdit.length - 1
                  ? "100px"
                  : "",
            }}
          >
            <Dialog open={dialogOpen}>
              <DialogTitle>Are you sure ?</DialogTitle>
              <DialogContent>
                <DialogContentText
                  sx={{
                    color: themeMode.themeMode == "dark" ? "white" : "black",
                  }}
                >
                  If you continue you will delete this goal and lose all
                  progress
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setDialogOpen(false)}>Stop</Button>
                <Button
                  onClick={() => {
                    setDialogOpen(false);
                    deleteGoal(goal.id);
                  }}
                  color="warning"
                >
                  Continue
                </Button>
              </DialogActions>
            </Dialog>
            <Accordion
              sx={{
                background: themeMode.themeMode == "dark" ? "" : "#1565B6",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography
                  sx={{ color: themeMode.themeMode == "dark" ? "" : "white" }}
                >
                  {goal.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <TextField
                    error={goalName == "" ? true : false}
                    value={goalName}
                    onChange={(e) => {
                      setGoalName(e.currentTarget.value);
                    }}
                    variant="outlined"
                    label="Enter goal"
                    required
                  />
                  <TextField
                    value={goalDescription}
                    onChange={(e) => {
                      setGoalDescription(e.currentTarget.value);
                    }}
                    variant="outlined"
                    label="Enter goal description"
                  />
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      color="warning"
                      fullWidth
                      onClick={() => {
                        setDialogOpen(true);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        editGoal(goal.id);
                      }}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Edit
                    </Button>
                  </ButtonGroup>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </>
  );
}
