import "./App.css";
import GoalsMenu from "./components/GoalsMenu";
import GoalCreateForm from "./components/GoalCreateForm";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Layout from "./components/Layout";
import GoalCalendar from "./components/GoalCalendar";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Goals from "./pages/Goals";
import { useEffect, useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(()=>{
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    fetch(serverUrl + "goals")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGoals(data);
      });
  },[])

  return (
    <>
      <Layout>
        {/* <GoalCalendar datesForCompletedGoals={["2023-01-31"]} /> */}
        {/* <GoalCreateForm/> */}
        <Routes>
          <Route
            path="/"
            element={<Goals goals={goals}/>}
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
