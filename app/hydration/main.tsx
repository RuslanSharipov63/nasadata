"use client";
import { fetchDataPictureDay } from "../../utils/api-requests"; 
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export default function Main() {
  const { data, isPending, error } = useQuery({
    queryKey: ["pictureday"],
    queryFn: () => fetchDataPictureDay(),
  });

  if (isPending) return <CircularProgress />;
  if (error) return <p>Ошибка сервера</p>;
  return (
    <>
      <Container maxWidth="xl" sx={{mt: 2}}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h4" component="h1">
            Астрономическая картина дня
          </Typography>
          <Box sx={{ typography: "body1" }}>дата: {data.date}</Box>
          <Box sx={{ typography: "body1" }}>название: "{data.title}"</Box>
          <Box sx={{ width: "100%" }}>
            <Image
             layout="responsive"
              src={data.url}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
              alt="Picture"
             loading="lazy"
            />
          </Box>
          <Typography variant="h5" component="h1" sx={{ mt: 2 }}>
            описание
          </Typography>
          <Box sx={{ marginTop: "10px" }}>
            <Typography variant="h6" component="h1">
              {data.explanation}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
