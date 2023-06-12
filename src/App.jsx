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
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import db from "./firebase/firebaseDB";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [goals, setGoals] = useState([]);
  const [goalsLoading, setGoalsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(q);

  // console.log(user);
  let location = useLocation();

  // console.log(location);
  useEffect(() => {
    setGoalsLoading(true);
    async function getGoals() {
      getAuth();
      const q = query(collection(db, "goals"), where("author", "==", "eldinkecap@gmail.com"));
      const querySnapshot = await getDocs(q);
      const goalsList = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc);
        goalsList.push({ id: doc.id, ...doc.data() })
      }
      );
      setGoals(goalsList);
      // console.log(goalsList);
    }

    try {
      getGoals()
    } catch (error) {
      // console.log(error);
    }

    setGoalsLoading(false);

  }, [location]);

  return (
    <>
      <Layout>
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
