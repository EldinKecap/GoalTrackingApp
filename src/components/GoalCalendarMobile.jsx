import { Paper, Stack, Typography } from "@mui/material";
import { addDays, format, getDay } from "date-fns";

const classes = {
  day: {
    width: 10,
    height: 10,
    background: "#0C80D8",
    borderRadius: "2px",
    color: "transparent",
    fontSize: "10px",
    marginTop: "4px",
    ml: "10px",
  },
  datesAndWeekdayLabel: {
    fontSize: "10px",
    lineHeight: "1",
    marginTop: "4px",
  },
};

export default function GoalCalendarMobile({ datesForCompletedGoals }) {
  const currentDate = new Date();
  const currentMonth = format(currentDate, "MMM");
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  let dateOfTheMonth = new Date(currentYear, currentMonthIndex, 1);
  const dayOfTheWeek = getDay(dateOfTheMonth) - 1;
  const allDaysInAMonth = new Array(dayOfTheWeek).fill(null, 0);

  while (dateOfTheMonth.getMonth() == currentMonthIndex) {
    allDaysInAMonth.push(dateOfTheMonth);
    dateOfTheMonth = addDays(dateOfTheMonth, 1);
  }

  return (
    <Paper>
      <Typography variant="h6" mt={1}>
        {currentMonth}
      </Typography>
      <Stack p={2} spacing={1} direction="row">
        <Stack
          height={100}
          width={"100%"}
          flexWrap="wrap"
          direction="column"
          alignItems={"stretch"}
        >
          <Typography
            key="mon"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Mon
          </Typography>
          <Typography
            key="tue"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Tue
          </Typography>
          <Typography
            key="wed"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Wed
          </Typography>
          <Typography
            key="thu"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Thu
          </Typography>
          <Typography
            key="Fri"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Fri
          </Typography>
          <Typography
            key="sat"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Sat
          </Typography>
          <Typography
            key="sun"
            variant="body2"
            sx={classes.datesAndWeekdayLabel}
          >
            Sun
          </Typography>

          {allDaysInAMonth.map((date) => {
            if (date === null)
              return (
                <Paper
                  key={Math.random()}
                  sx={{ ...classes.day, opacity: 0 }}
                ></Paper>
              );
            const formatedDateForComparing = format(date, "yyyy-MM-dd");
            // console.log(formatedDateForComparing);
            if (datesForCompletedGoals.includes(formatedDateForComparing)) {
              return (
                <Paper
                  key={formatedDateForComparing}
                  sx={{ ...classes.day, backgroundColor: "yellowgreen" }}
                >
                  a
                </Paper>
              );
            }
            return (
              <Paper key={formatedDateForComparing} sx={classes.day}>
                a
              </Paper>
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
}
