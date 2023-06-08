import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { ThemeContext } from "@emotion/react";

export default function EditGoals({ goalsToEdit }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const themeMode = useContext(ThemeModeContext);
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      {goalsToEdit.map((goal) => {
        return (
          <>
            <Dialog open={dialogOpen}>
              <DialogTitle>Are you sure ?</DialogTitle>
              <DialogContent>
                <DialogContentText
                  sx={{
                    color: themeMode.themeMode == "dark" ? "white" : "black",
                  }}
                >
                  If you continue you will delete this goal forever
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button>Stop</Button>
                <Button onClick={() => setDialogOpen(false)} color="warning">
                  Continue
                </Button>
              </DialogActions>
            </Dialog>
            <Accordion sx={{background:themeMode.themeMode == "dark" ? "" : "#1565B6"}}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{color:themeMode.themeMode == "dark" ? "" : "white"}}>{goal.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
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
          </>
        );
      })}
    </>
  );
}
