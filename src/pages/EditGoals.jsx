import { Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import useGetGoals from "../hooks/useGetGoals";
import TitleBar from "../components/TitleBar";

export default function EditGoals() {
  const [goals] = useGetGoals();

  return (
    <>
      <TitleBar title="Choose a goal to edit" />
      {goals.length > 0 ? (
        goals.map((goal) => {
          return (
            <Paper
              key={goal.id}
              sx={{
                mt: "20px",
                mb: goals.indexOf(goal) === goals.length - 1 ? "100px" : "",
                width: "250px",
                p: "10px",
              }}
            >
              <Link to={"/edit/" + goal.id} style={{ color: "inherit" }}>
                <Typography key={goal.id} noWrap>
                  {goal.title}
                </Typography>
              </Link>
            </Paper>
          );
        })
      ) : (
        <Typography variant="h5">No Goals</Typography>
      )}
    </>
  );
}
