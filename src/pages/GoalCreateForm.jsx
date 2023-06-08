import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const classes = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  textField:{
    input: { color: "white" },
  }
};

export default function GoalCreateForm() {
  const [goal, setGoal] = useState();
  const [goalDescription, setGoalDescription] = useState("");
  const [successForm, setSuccessForm] = useState(false);

  if( goal != undefined && goal.length > 20 ){
    let shortenedGoalName = goal.slice(0,20);
    setGoal(shortenedGoalName)
  }

  function onFormSubmitHandler() {
    if (goal == undefined) {
      setGoal("");
      return;
    }

    if (goal == "") {
      return;
    }

    setSuccessForm(false);

    const serverUrl = import.meta.env.VITE_SERVER_URL;

    fetch(serverUrl + "goals", {
      method: "POST",
      body: JSON.stringify({
        author: "ME",
        title: goal,
        description: goalDescription,
        datesWhenCompleted: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setSuccessForm(true);
        setTimeout(() => {
          setSuccessForm(false);
        }, 1000);
      }
    });
  }

  return (
    
    <FormControl sx={classes.form}>
      <TextField
        error={goal == "" ? true : false}
        variant="outlined"
        label="Enter goal"
        color="info"
        value={goal}
        onChange={(e) => {
          setGoal(e.target.value);
        }}
        type="text"
        sx={classes.textField}
        required
      />
      <TextField
        variant="outlined"
        label="Enter goal description"
        color="info"
        value={goalDescription}
        onChange={(e) => {
          setGoalDescription(e.target.value);
        }}
        type="text"
        sx={classes.textField}
      />
      <Button
        variant="contained"
        color={!successForm ? "secondary" : "success"}
        type="submit"
        onClick={onFormSubmitHandler}
      >
        Create
      </Button>
    </FormControl>
  );
}
