import { Skeleton, Stack, Typography, useMediaQuery } from "@mui/material";
import Goal from "../components/Goal";
import useGetGoals from "../hooks/useGetGoals";
import TitleBar from "../components/TitleBar";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebaseDB";


export default function Goals() {
  const mobile = useMediaQuery("(max-width: 1150px)");
  // PART OF OLD WAY
  // const [goals, goalsLoading] = useGetGoals();
  const [showSkeleton, setShowSkeleton] = useState(true); 
  const [showNoGoals, setShowNoGoals] = useState(false); 

  let [goalsArr,setGoalsArr] = useState([]);
  const [goalsToRender, setGoalsToRender] = useState([]);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      getAuth();
      const goalsList = [];
      const q = query(collection(db, "goals"), where("author", "==", user.email));
      getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              goalsList.push({ id: doc.id, ...doc.data() })
          }
          );
          if (goalsList.length == 0) {
            setShowNoGoals(true);
          }
          setGoalsArr([...goalsList]);
      });
  } catch (error) {
      console.log(error);
  }
  console.log(goalsArr);
  },[])

  useEffect(()=>{

    if (goalsArr.length == 0) {
      setShowSkeleton(false);
      return
    }

    setGoalsToRender((curr)=>[...curr,<Goal key={goalsArr[0].id} goal={goalsArr[0]} />]);
    console.log(goalsArr);
    setGoalsArr(goalsArr.slice(1));

  },[goalsToRender,goalsArr])


  return (
    <>
    <TitleBar title={"Goal List"}/>
      <Stack spacing={3} mt={5} mb={5}>
        {goalsToRender}
        {showSkeleton  ? mobile ? (
            <>
              <Skeleton variant="rounded" height={230} width={220} />
            </>
          ) : (
          <>
            <Skeleton variant="rounded" height={200} width={1030} />
          </>
        ) : ""}
       {
        showNoGoals?<Typography variant="h5">No Goals</Typography>:''
       }
        {/*  OLD WAY
        {!goalsLoading ? goals.length == 0 ? <Typography variant="h5">No Goals</Typography> : (
          goals.map((goal) => {
            return <Goal key={goal.id} goal={goal} />
          }
          )) : mobile ? (
            <>
              <Skeleton variant="rounded" height={230} width={220} />
            </>
          ) : (
          <>
            <Skeleton variant="rounded" height={200} width={1030} />
          </>
        )} */}
      </Stack>
    </>
  );
}
