import {
  Paper,
  Stack,
  ToggleButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import GoalCalendar from "./GoalCalendar";
import { Check } from "@mui/icons-material";
import { format } from "date-fns";
import GoalCalendarMobile from "./GoalCalendarMobile";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseDB";

const classes = {
  container: {
    overflow: "hidden",
  },
  title: {
    backgroundColor: "calendarHeader.dark",
    color: "white",
  },
};

export default function Goal({ goal }) {
  const mobile = useMediaQuery("(max-width: 1150px)");
  const [goalCompleted, setGoalCompleted] = useState(false);
  const today = format(new Date(), "yyyy-MM-dd");
  function goalCompleteHandler() {
    if (goal.datesWhenCompleted.includes(today)) {
      setGoalCompleted(true);
      return;
    }

    goal.datesWhenCompleted = [...goal.datesWhenCompleted, today];
    const goalRef = doc(db, "goals", goal.id);
    setDoc(goalRef, { datesWhenCompleted: goal.datesWhenCompleted }, { merge: true })
      .then(() => {
        setGoalCompleted(true);
      })
    // console.log(res);
  }

  useEffect(() => {
    if (goal.datesWhenCompleted.includes(today)) {
      setGoalCompleted(true);
    }
  }, []);

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
          <Typography
            ml={2}
            fontSize={mobile ? 17 : 20}
            variant="h6"
            noWrap
            maxWidth={mobile ? 160 : 300}
            minWidth={100}
            mr={1}
          >
            {goal.title}
          </Typography>
          <Tooltip title="Goal completed !" placement="left">
            <ToggleButton
              value={1}
              selected={goalCompleted}
              disabled={goalCompleted}
              onClick={goalCompleteHandler}
              color="success"
            >
              <Check></Check>
            </ToggleButton>
          </Tooltip>
        </Stack>
        {mobile ? (
          <GoalCalendarMobile
            datesForCompletedGoals={goal.datesWhenCompleted}
          />
        ) : (
          <GoalCalendar datesForCompletedGoals={goal.datesWhenCompleted} />
        )}
      </Stack>
    </Paper>
  );
}
