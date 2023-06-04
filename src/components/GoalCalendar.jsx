import { Box, Paper } from "@mui/material";
import React from "react";

export default function GoalCalendar() {
  const classes = {
    day: {
      width: 10,
      height: 10,
      background: "lightgray",
      borderRadius: "2px",
      color: "transparent",
      fontSize: "10px",
      marginTop:"4px"
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
  let arr = [];
  for (let index = 0; index <= 365; index++) {
    arr.push(index);
  }

  return (
    <Box sx={classes.container}>
      {arr.map((num) => {
        return <Paper sx={classes.day}>{num}</Paper>;
      })}
    </Box>
  );
}
