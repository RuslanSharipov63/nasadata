"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchLastImgNatiralColor } from "../utils/api-requests";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import CardForEpic from "./CardForEpic";
import { CardForEpicType } from "../type";

const EpicCustom = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["lastimgepic"],
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchLastImgNatiralColor(),
  });

  if (isPending)
    return <CircularProgress sx={{ marginLeft: "45%", marginTop: "10px" }} />;
  if (error) return <p>Ошибка сервера</p>;

  const {
    image,
    date,
    caption,
    centroid_coordinates,
    dscovr_j2000_position,
    lunar_j2000_position,
    sun_j2000_position,
    attitude_quaternions,
  } = data[0];

  return (
    <>
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        <Typography variant="h5" gutterBottom>
          EPIC - камера DSCOVR Earth Polychromatic Imaging Camera (EPIC).
          Расположена в точке Лагранжа Земля-Солнце, EPIC обеспечивает получение
          полнодисковых изображений Земли и уникальных видов на некоторые
          астрономические события, такие как прохождение Луны по диску Солнца.
          Разработка EPIC API началась в 2015 году и поддерживается командой
          веб-разработчиков Лаборатории атмосферы в отделе наук о Земле Центра
          космических полётов Годдарда.
        </Typography>

          <CardForEpic dataEpic={data[0]} />

      </Box>
    </>
  );
};

export default EpicCustom;
