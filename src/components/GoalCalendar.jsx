import { Box, Paper, Typography } from "@mui/material";
import React from "react";
  const classes = {
    weekdayLabel: {
      fontSize: "10px",
      lineHeight: "1",
      marginTop: "4px",
    },
    day: {
      width: 10,
      height: 10,
      background: "lightgray",
      borderRadius: "2px",
      color: "transparent",
      fontSize: "10px",
      marginTop: "4px",
    },
    container: {
      background: "darkgray",
      padding: "5px",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      height: "100px",
      flexWrap: "wrap",
      width: "1000px",
    },
  };

export default function GoalCalendar({datesForCompletedGoals}) {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let datesForTheWholeYear;
  let dateOnCalendar = new Date(currentYear, 0, 1);
  let firstDayOfTheYearSet = false;

  while (currentYear == dateOnCalendar.getFullYear()) {
    if(!firstDayOfTheYearSet){
      firstDayOfTheYearSet = true;
      switch (dateOnCalendar.getDay()) {
        case 0:
          datesForTheWholeYear = new Array(6).fill(null, 0, 6);
          break;
        case 1:
          datesForTheWholeYear = new Array();
          break;
        case 2:
          datesForTheWholeYear = new Array(1).fill(null, 0, 1);
          break;
        case 3:
          datesForTheWholeYear = new Array(2).fill(null, 0, 2);
          break;
        case 4:
          datesForTheWholeYear = new Array(3).fill(null, 0, 3);
          break;
        case 5:
          datesForTheWholeYear = new Array(4).fill(null, 0, 4);
          break;
        case 6:
          datesForTheWholeYear = new Array(5).fill(null, 0, 5);
          break;
      } 
    }

    datesForTheWholeYear.push(dateOnCalendar);
    dateOnCalendar = new Date (dateOnCalendar.getTime() + 86400000);
  }


  return (
    <Box sx={classes.container}>
      <Typography key="mon" sx={classes.weekdayLabel} variant="body2">
        Mon
      </Typography>
      <Typography key="tue" sx={classes.weekdayLabel} variant="body2">
        Tue
      </Typography>
      <Typography key="wed" sx={classes.weekdayLabel} variant="body2">
        Wed
      </Typography>
      <Typography key="thu" sx={classes.weekdayLabel} variant="body2">
        Thu
      </Typography>
      <Typography key="fri" sx={classes.weekdayLabel} variant="body2">
        Fri
      </Typography>
      <Typography key="sat" sx={classes.weekdayLabel} variant="body2">
        Sat
      </Typography>
      <Typography key="sun" sx={classes.weekdayLabel} variant="body2">
        Sun
      </Typography>
      {datesForTheWholeYear.map((date) => {
        if (date == null) {
          return <Paper key={Math.random()} sx={{...classes.day,opacity:0}}></Paper>;
        }
        if (datesForCompletedGoals != undefined && datesForCompletedGoals.includes(date.toISOString().slice(0,10))) {
          return <Paper key={date} sx={{...classes.day,backgroundColor:"lightgreen"}}></Paper>;
        }
        return <Paper key={date} sx={classes.day}></Paper>;
      })}
    </Box>
  );
}
