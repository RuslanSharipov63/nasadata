"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchAsteroid } from "../utils/api-requests";
import CircularProgress from "@mui/material/CircularProgress";


const CardForAsteroid = () => {
  const currentURL = typeof window !== "undefined" ? window.location.href : "";
  const arrCurrentURL = currentURL.split("/");
  const id = arrCurrentURL[arrCurrentURL.length - 1];

  const { data, isPending, error } = useQuery({
    queryKey: ["asteroid"],
    queryFn: ({ signal }: { signal: AbortSignal }) => fetchAsteroid(id),
  });

  if (isPending)
    return <CircularProgress sx={{ marginLeft: "45%", marginTop: "10px" }} />;
  if (error) return <p>Ошибка сервера</p>;



  return <>
  <pre>
    {JSON.stringify(data, null, 4)}
  </pre>
  </>;
};

export default CardForAsteroid;
