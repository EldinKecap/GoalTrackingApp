import { Button, Checkbox, FormControlLabel, ListItem } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function GoalsMenu() {
  const [checkBoxValues, setCheckBoxValues] = useState({});
  const drawerWidth = 300;
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
        <ListItem divider sx={classes.listItem}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  const goalName = e.target.value;
                  const goalCompleted = e.target.checked;
                  setCheckBoxValues((prevState) => ({
                    ...prevState,
                    goalName: goalCompleted,
                  }));
                }}
                value={"WorkOut"}
              />
            }
            label="Work Out"
          />
        </ListItem>
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
