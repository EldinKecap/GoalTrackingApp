import { Skeleton, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Goal from "../components/Goal";
import GoalsLoading from "../store/GoalsLoading";
import useGetGoals from "../hooks/useGetGoals";
import db from '../firebase/firebaseDB';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import TitleBar from "../components/TitleBar";


export default function Goals() {
  const [goals, goalsLoading] = useGetGoals()
  return (
    <>
    <TitleBar title={"Goal List"}/>
      <Stack spacing={3} mt={5} mb={5}>
        {!goalsLoading ? goals.length == 0 ? <Typography variant="h5">No Goals</Typography> : (
          goals.map((goal) => {
            console.log(goal);
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
        )}
      </Stack>
    </>
  );
}
