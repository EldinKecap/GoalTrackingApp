import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThemeModeContext from "../store/ThemeContext";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
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
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseDB";
import { getAuth } from "firebase/auth";

export default function EditGoalsForm() {
  const params = useParams();
  const goalId = params.id;
  const themeMode = useContext(ThemeModeContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [goalName, setGoalName] = useState("");
  const navigate = useNavigate();
  getAuth();

  useEffect(() => {
    const goalRef = doc(db, "goals", goalId);

    getDoc(goalRef).then((goalSnapshot) => {
      const goalTitle = goalSnapshot.data().title;
      setTitle(goalTitle);
      setGoalName(goalTitle);
    });
  }, []);

  function deleteGoal() {
    const goalRef = doc(db, "goals", goalId);

    deleteDoc(goalRef).then(() => {
      navigate("/edit");
    });
  }

  function editGoal() {
    const goalRef = doc(db, "goals", goalId);

    setDoc(goalRef, { title: goalName }, { merge: true }).then(() => {
      navigate("/edit");
    });
  }

  return (
    <Box
      key={goalId}
      sx={{
        mt: "20px",
      }}
    >
      {!title ? (
        <CircularProgress color="secondary" />
      ) : (
        <Paper
          sx={{
            background: themeMode.themeMode == "dark" ? "" : "#1565B6",
            p: "10px",
          }}
        >
          <Stack spacing={2}>
            <Typography>{title}</Typography>
            <TextField
              error={goalName == "" ? true : false}
              value={goalName}
              onChange={(e) => {
                setGoalName(e.currentTarget.value);
              }}
              variant="outlined"
              label="Enter goal"
              required
              inputProps={{ maxLength: 30 }}
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
                  editGoal(goalId);
                }}
                variant="contained"
                color="primary"
                fullWidth
              >
                Edit
              </Button>
            </ButtonGroup>
          </Stack>
          <Dialog open={dialogOpen}>
            <DialogTitle>Are you sure ?</DialogTitle>
            <DialogContent>
              <DialogContentText
                sx={{
                  color: themeMode.themeMode == "dark" ? "white" : "black",
                }}
              >
                If you continue you will delete this goal and lose all progress
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Stop</Button>
              <Button
                onClick={() => {
                  setDialogOpen(false);
                  deleteGoal(goalId);
                }}
                color="warning"
              >
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      )}
    </Box>
  );
}
