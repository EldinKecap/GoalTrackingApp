import { Skeleton, Stack, Typography, useMediaQuery } from "@mui/material";
import Goal from "../components/Goal";
import useGetGoals from "../hooks/useGetGoals";
import TitleBar from "../components/TitleBar";


export default function Goals() {
  const [goals, goalsLoading] = useGetGoals()
  const mobile = useMediaQuery("(max-width: 1150px)");

  return (
    <>
    <TitleBar title={"Goal List"}/>
      <Stack spacing={3} mt={5} mb={5}>
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
        )}
      </Stack>
    </>
  );
}
