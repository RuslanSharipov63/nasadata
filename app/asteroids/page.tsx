"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchDataAsteroids } from "../../utils/api-requests";
import CircularProgress from "@mui/material/CircularProgress";
import CardForAsteroids from "@/CardForAsteroids";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Asteriods = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["asteroids"],
    queryFn: () => fetchDataAsteroids(),
  });

  if (isPending)
    return <CircularProgress sx={{ marginLeft: "45%", marginTop: "10px" }} />;
  if (error) return <p>Ошибка сервера</p>;

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Grid container spacing={2}>
          {data.near_earth_objects.map((el: any) => {
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={el.id}>
                <CardForAsteroids el={el} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Asteriods;
