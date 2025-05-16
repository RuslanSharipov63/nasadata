"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchRangeAsteroids } from "../utils/api-requests";
import CardForAsteroids from "./CardForAsteroids";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";


const Range = () => {
  
  const searchParams2 = useSearchParams();
  const [searchParams] = useSearchParams();
  const startTime = searchParams2.get("start");
  const endTime = searchParams2.get("end");

  const { data, isPending, error } = useQuery({
    queryKey: ["rangeAsteroids", searchParams.toString()],
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchRangeAsteroids(String(startTime), String(endTime)),
  });

  if (isPending)
    return <CircularProgress sx={{ marginLeft: "45%", marginTop: "10px" }} />;
  if (error) return <p>Ошибка сервера</p>;

  const dataAster = data.near_earth_objects;
  const dateRangeAsteroids = [];
  for (let key in dataAster) {
    dateRangeAsteroids.push(key);
  }

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Typography variant="h5" align="center" sx={{mb: 4, color: '#f44336'}}>
        Диапазон: {startTime}  -  {endTime}
      </Typography>
      {dateRangeAsteroids.map((item: any) => {
        return (
          <Box key={item}>
            <Typography variant="h6" align="center">
              {item}
            </Typography>
            <Grid container key={item + "_" + item} spacing={2}>
              {dataAster[item].map((el: any) => {
                return (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    key={el.neo_reference_id}
                  >
                    <CardForAsteroids el={el} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default Range;
