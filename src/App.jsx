import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Goals from "./pages/Goals";
import NavBar from "./components/NavBar";
import EditGoals from "./pages/EditGoals";
import GoalCreateForm from "./pages/GoalCreateForm";
import Login from "./pages/Login";
import CreateAnAccount from "./pages/CreateAnAccount";
import Error from "./pages/Error";
import EditGoalsForm from "./components/EditGoalForm";
import {  useState } from "react";
import UserProfileContext from "./store/UserProfileContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(user);
  return (
    <>
      <UserProfileContext.Provider value={{
        user,
        setUser
      }}>

        <Layout>
          <NavBar />
          <Routes>
            {!user ? (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/createAccount" element={<CreateAnAccount />} />
                <Route
                  path="*"
                  element={<Error message="User not logged in" />}
                />
              </>
            ) : (
              <>
                <Route path="/" element={<Goals />} />
                <Route path="/create" element={<GoalCreateForm />} />
                <Route
                  path="/edit"
                  element={<EditGoals />}
                />
                <Route
                  path="/edit/:id"
                  element={<EditGoalsForm />}
                />
                <Route
                  path="*"
                  element={<Error message="Page does not exist" />}
                />
              </>
            )}
          </Routes>
        </Layout>
      </UserProfileContext.Provider>

    </>
  );
}

export default App;
