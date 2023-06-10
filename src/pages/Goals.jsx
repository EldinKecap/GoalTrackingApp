import { Skeleton, Stack, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Goal from "../components/Goal";
import GoalsLoading from "../store/GoalsLoading";

export default function Goals({ goals }) {
  let goalsLoading = useContext(GoalsLoading);
  const mobile = useMediaQuery("(max-width: 1150px)");

  return (
    <Stack spacing={3} mt={5} mb={5}>
      {!goalsLoading ? (
        goals.map((goal) => <Goal key={goal.id} goal={goal} />)
      ) : mobile ? (
        <>
          <Skeleton variant="rounded" height={230} width={220} />
        </>
      ) : (
        <>
          <Skeleton variant="rounded" height={200} width={1030} />
        </>
      )}
    </Stack>
  );
}
