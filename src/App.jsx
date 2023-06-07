import "./App.css";
import GoalsMenu from "./components/GoalsMenu";
import GoalCreateForm from "./components/GoalCreateForm";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Layout from "./components/Layout";
import GoalCalendar from "./components/GoalCalendar";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Goals from "./pages/Goals";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [goals, setGoals] = useState([]); 
  let location = useLocation();
  console.log(location);
  useEffect(()=>{
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    fetch(serverUrl + "goals")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setGoals(data);
      });
  },[location])

  return (
    <>
      <Layout>
        {/* <GoalCalendar datesForCompletedGoals={["2023-01-31"]} /> */}
        {/* <GoalCreateForm/> */}
        <AppBar elevation={0} >
          <Typography variant="h4" component="h1" m={0.5} > 
            {location.pathname == '/' ? "Goal list" : "Create a goal" }
          </Typography>
        </AppBar>
        <NavBar/>
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

export default App ;
