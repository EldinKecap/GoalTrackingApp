import { Box, Paper, Typography } from "@mui/material";
import React from "react";
  const classes = {
    datesAndWeekdayLabel: {
      fontSize: "10px",
      lineHeight: "1",
      marginTop: "4px",
    },
    day: {
      width: 10,
      height: 10,
      background: "darkgray",
      borderRadius: "2px",
      color: "transparent",
      fontSize: "10px",
      marginTop: "4px",
    },
    datesAndWeekdaysContainer: {
      padding: "5px",
      display: "flex",
      flexDirection: "column",
      height: "100px",
      flexWrap: "wrap",
      width: "1000px",
    },
    monthsContainer:{
      display:"flex",
      justifyContent:"space-around"
    },
    container:{
      background: "gray",
      borderRadius: "5px",
    }
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
    <Box sx={classes.monthsContainer}>
     <div></div>
    <Typography key="jan" sx={classes.datesAndWeekdayLabel} variant="body2">
        Jan
      </Typography>
    <Typography key="feb" sx={classes.datesAndWeekdayLabel} variant="body2">
        Feb
      </Typography>
    <Typography key="mar" sx={classes.datesAndWeekdayLabel} variant="body2">
        Mar
      </Typography>
    <Typography key="apr" sx={classes.datesAndWeekdayLabel} variant="body2">
        Apr
      </Typography>
    <Typography key="may" sx={classes.datesAndWeekdayLabel} variant="body2">
        May
      </Typography>
    <Typography key="jun" sx={classes.datesAndWeekdayLabel} variant="body2">
        Jun
      </Typography>
    <Typography key="jul" sx={classes.datesAndWeekdayLabel} variant="body2">
        Jul
      </Typography>
    <Typography key="aug" sx={classes.datesAndWeekdayLabel} variant="body2">
        Aug
      </Typography>
    <Typography key="sep" sx={classes.datesAndWeekdayLabel} variant="body2">
        Sep
      </Typography>
    <Typography key="oct" sx={classes.datesAndWeekdayLabel} variant="body2">
        Oct
      </Typography>
    <Typography key="nov" sx={classes.datesAndWeekdayLabel} variant="body2">
        Nov
      </Typography>
    <Typography key="dec" sx={classes.datesAndWeekdayLabel} variant="body2">
        Dec
      </Typography>
    </Box>
    <Box sx={classes.datesAndWeekdaysContainer}>
      <Typography key="mon" sx={classes.datesAndWeekdayLabel} variant="body2">
        Mon
      </Typography>
      <Typography key="tue" sx={classes.datesAndWeekdayLabel} variant="body2">
        Tue
      </Typography>
      <Typography key="wed" sx={classes.datesAndWeekdayLabel} variant="body2">
        Wed
      </Typography>
      <Typography key="thu" sx={classes.datesAndWeekdayLabel} variant="body2">
        Thu
      </Typography>
      <Typography key="fri" sx={classes.datesAndWeekdayLabel} variant="body2">
        Fri
      </Typography>
      <Typography key="sat" sx={classes.datesAndWeekdayLabel} variant="body2">
        Sat
      </Typography>
      <Typography key="sun" sx={classes.datesAndWeekdayLabel} variant="body2">
        Sun
      </Typography>
      {datesForTheWholeYear.map((date) => {
        if (date == null) {
          return <Paper key={Math.random()} sx={{...classes.day,opacity:0}}></Paper>;
        }
        // declared here to avoid nulled dates
        const year = date.getFullYear();
        const month = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
        const day = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        const dateInISOStringForComparingWithCompletedGoalsDates = year + "-" + month + "-" + day;
        console.log(dateInISOStringForComparingWithCompletedGoalsDates);

        if (datesForCompletedGoals != undefined && datesForCompletedGoals.includes(dateInISOStringForComparingWithCompletedGoalsDates)) {
          return <Paper key={dateInISOStringForComparingWithCompletedGoalsDates} sx={{...classes.day,backgroundColor:"lightgreen"}}></Paper>;
        }
        return <Paper key={dateInISOStringForComparingWithCompletedGoalsDates} sx={classes.day}></Paper>;
      })}
    </Box>
</Box>
  );
}
