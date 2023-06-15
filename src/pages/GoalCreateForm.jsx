import { addDoc, collection } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import FormControl from "@mui/material/FormControl";
import { Alert, Button, TextField } from "@mui/material";
import { useState } from "react";
import db from "../firebase/firebaseDB";
import { useNavigate } from "react-router-dom/dist";
import TitleBar from "../components/TitleBar";

const classes = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  textField: {
    input: { color: "white" },
  }
};

export default function GoalCreateForm() {
  const [goal, setGoal] = useState("");
  const [goalError, setGoalError] = useState(false)
  const [successForm, setSuccessForm] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  function onFormSubmitHandler() {
    if (goal == "") {
      setGoalError(true);
      return;
    }

    setSuccessForm(false);

    getAuth();
    addDoc(collection(db, "goals"), {
      author: user.email,
      datesWhenCompleted: [],
      title: goal
    }).then((data) => {
      console.log(data);
      setSuccessForm(true);
      setTimeout(() => {
        navigate('/')
      }, 500)
    }).catch((error) => {
      console.log(error);
    });

  }

  return (
    <>
      <TitleBar title="Create a goal" />
      <FormControl sx={classes.form}>
        <TextField
          error={goalError}
          variant="outlined"
          label="Enter goal"
          color="info"
          value={goal}
          onChange={(e) => {
            if (e.target.value == "") {
              setGoalError(true);
            } else {
              setGoalError(false);
            }
            setGoal(e.target.value);
          }}
          type="text"
          sx={classes.textField}
          inputProps={{ maxLength: 30 }}
          required
        />
        <Button
          variant="contained"
          color={"secondary"}
          type="submit"
          onClick={onFormSubmitHandler}
        >
          Create
        </Button>
        {successForm ? <Alert severity="success"> Goal Created </Alert> : ""}
      </FormControl>
    </>
  );
}
