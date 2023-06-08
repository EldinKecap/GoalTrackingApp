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
  const themeMode = useContext(ThemeModeContext);
  const navigate = useNavigate();

  function deleteGoal(id) {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    axios.delete(serverUrl + "goals/" + id).then(() => {
      navigate("/edit");
    });
  }

  return (
    <>
      {goalsToEdit.map((goal) => {
        return (
          <Box key={goal.id} sx={{mt:"20px", mb:goalsToEdit.indexOf(goal) === goalsToEdit.length - 1 ? "100px":""}}>
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
              
              <AccordionSummary expandIcon={<ExpandMore />} >
                <Typography
                  sx={{ color: themeMode.themeMode == "dark" ? "" : "white" }}
                >
                  {goal.title}
                </Typography>
              </AccordionSummary >
              <AccordionDetails  >
                <Stack spacing={2}>
                  <TextField variant="outlined" label="Enter goal" required />
                  <TextField
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
                    <Button variant="contained" color="primary" fullWidth>
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
