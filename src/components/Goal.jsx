import { Paper, Stack, ToggleButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoalCalendar from "./GoalCalendar";
import { Check } from "@mui/icons-material";
import { format } from "date-fns";

const classes = {
  container: {
    overflow: "hidden",
  },
  title: {
    backgroundColor: "gray",
  },
};

export default function Goal({ goal }) {
  const [goalCompleted, setGoalCompleted] = useState(false);
  const today = format(new Date(), "yyyy-MM-dd");

  function goalCompleteHandler() { 
    if (goal.datesWhenCompleted.includes(today)) {
      setGoalCompleted(true);
      return
    }
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    goal.datesWhenCompleted = [...goal.datesWhenCompleted, today];
    fetch(serverUrl + "goals/" + goal.id, {
      method: "PATCH",
      body: JSON.stringify({
        datesWhenCompleted: goal.datesWhenCompleted,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGoalCompleted(true);
      });
  }

  useEffect(()=>{
    if (goal.datesWhenCompleted.includes(today)) {
      setGoalCompleted(true);
    }
  },[])

  return (
    <Paper sx={classes.container}>
      <Stack direction={"column"}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          p="4px"
          sx={classes.title}
        >
          <Typography ml={3} variant="body1">
            {goal.title}
          </Typography>
          <ToggleButton
            value={1}
            selected={goalCompleted}
            disabled={goalCompleted}
            onClick={goalCompleteHandler}
          >
            <Check></Check>
          </ToggleButton>
        </Stack>
        <GoalCalendar
          datesForCompletedGoals={goal.datesWhenCompleted}
        ></GoalCalendar>
      </Stack>
    </Paper>
  );
}
