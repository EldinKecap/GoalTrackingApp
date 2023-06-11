import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import Goals from "./pages/Goals";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import EditGoals from "./pages/EditGoals";
import GoalCreateForm from "./pages/GoalCreateForm";
import GoalsLoading from "./store/GoalsLoading";
import Login from "./pages/Login";
import TitleBar from "./components/TitleBar";
import CreateAnAccount from "./pages/CreateAnAccount";
import Error from "./pages/Error";

function App() {
  const [goals, setGoals] = useState([]);
  const [goalsLoading, setGoalsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  let location = useLocation();

  // console.log(location);
  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    setGoalsLoading(true);
    fetch(serverUrl + "goals")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setGoals(data);
        setGoalsLoading(false);
      });
  }, [location]);

  return (
    <>
      <Layout>
        {/* <GoalCalendar datesForCompletedGoals={["2023-01-31"]} /> */}
        {/* <GoalCreateForm/> */}
        <TitleBar />
        <NavBar />
        <GoalsLoading.Provider value={goalsLoading}>
          <Routes>
            {!user ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/createAccount" element={<CreateAnAccount />} />
                <Route
                  path="*"
                  element={<Error message="User not logged in" />}
                />
              </>
            ) : (
              <>
                <Route path="/" element={<Goals goals={goals} />} />
                <Route path="/create" element={<GoalCreateForm />} />
                <Route
                  path="/edit"
                  element={<EditGoals goalsToEdit={goals} />}
                />
                <Route
                  path="*"
                  element={<Error message="Page does not exist" />}
                />
              </>
            )}
          </Routes>
        </GoalsLoading.Provider>
      </Layout>
    </>
  );
}

export default App;
