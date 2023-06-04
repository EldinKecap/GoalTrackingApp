import { Button, Checkbox, FormControlLabel, ListItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function GoalsMenu() {
  const [checkBoxValues, setCheckBoxValues] = useState({});
  const [goals, setGoals] = useState([]);
  const drawerWidth = 300;

  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    fetch(serverUrl + "goals")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGoals(data);
      });
  }, []);

  const classes = {
    drawer: {
      width: drawerWidth,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        backgroundColor: "#222",
      },
    },
    title: {
      margin: "10px",
    },
    listItem: {
      justifyContent: "space-around",
      wordBreak: "break-all",
    },
    button: {
      margin: "5%",
    },
  };

  return (
    <Drawer variant="permanent" anchor="left" sx={classes.drawer}>
      <Typography variant="h4" sx={classes.title}>
        Your Goals
      </Typography>
      <List>
        {goals.map((goal) => {
        console.log(goal)
          return (
            <ListItem key={goal.id} divider sx={classes.listItem}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      const goalTitle = e.target.value;
                      const goalCompleted = e.target.checked;
                      setCheckBoxValues((prevState) => ({
                        ...prevState,
                        goalTitle: goalCompleted,
                      }));
                    }}
                    value={goal.title}
                  />
                }
                label={goal.title}
                labelPlacement="start"
              />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="contained"
        onClick={() => {
          console.log(checkBoxValues);
        }}
        sx={classes.button}
      >
        Goals completed
      </Button>
    </Drawer>
  );
}
