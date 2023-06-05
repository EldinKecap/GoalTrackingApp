import "./App.css";
import GoalsMenu from "./components/GoalsMenu";
import GoalCreateForm from "./components/GoalCreateForm";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Layout from "./components/Layout";
import GoalCalendar from "./components/GoalCalendar";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Goals from "./pages/Goals";

function App() {
  return (
    <>
      <Layout>
        {/* <GoalCalendar datesForCompletedGoals={["2023-01-31"]} /> */}
        {/* <GoalCreateForm/> */}
        <Routes>
          <Route
            path="/"
            element={<Goals/>}
          />
          <Route
            path="/create"
            element={<GoalCreateForm/>}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
