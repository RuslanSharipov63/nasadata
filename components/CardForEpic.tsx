"use client";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CoordinatsEpic from "./CoordinatsEpic";
import { CardForEpicType } from "../type";
import Box from "@mui/material/Box";
import theme from "../theme";
import { styled } from "@mui/material/styles";

const coordinats = [
  "centroid_coordinates",
  "dscovr_j2000_position",
  "lunar_j2000_position",
  "sun_j2000_position",
  "attitude_quaternions",
];

const RootChild = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "10px",
  },
  [theme.breakpoints.up("md")]: {
    width: "25%",
    marginLeft: "4.5%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
    marginLeft: "3.5%",
  },
  [theme.breakpoints.up("xl")]: {},
}));

interface EpicCardProps {
  dataEpic: CardForEpicType;
}
const CardForEpic: FC<EpicCardProps> = ({ dataEpic }) => {
  const {
    image,
    date,
    caption,
    centroid_coordinates,
    dscovr_j2000_position,
    lunar_j2000_position,
    sun_j2000_position,
    attitude_quaternions,
  } = dataEpic;

  let dateArr = date.split(" ");
  let newDate = dateArr[0].replace(/\-/g, "/");

  return (
    <Card>
      <CardMedia
        component="img"
        height="auto"
        image={`${process.env.NEXT_PUBLIC_EPIC_API}/${newDate}/png/${image}.png?api_key=${process.env.NEXT_PUBLIC_API_KEY}`}
        alt="земля"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {date}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Описание: {caption}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {coordinats.map((el) => {
            return (
              <RootChild
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "5px",
                  border: "1px solid blue",
                  borderRadius: "5px",
                  width: "250px",
                  marginBottom: "10px",
                }}
                key={el}
              >
                <Typography
                  sx={{
                    mt: 2,
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                  }}
                  variant="h6"
                  component="div"
                >
                  {el}:
                </Typography>
                {el === "centroid_coordinates" && (
                  <CoordinatsEpic data={centroid_coordinates} />
                )}
                {el === "dscovr_j2000_position" && (
                  <CoordinatsEpic data={dscovr_j2000_position} />
                )}
                {el === "lunar_j2000_position" && (
                  <CoordinatsEpic data={lunar_j2000_position} />
                )}
                {el === "sun_j2000_position" && (
                  <CoordinatsEpic data={sun_j2000_position} />
                )}
                {el === "attitude_quaternions" && (
                  <CoordinatsEpic data={attitude_quaternions} />
                )}
              </RootChild>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardForEpic;
