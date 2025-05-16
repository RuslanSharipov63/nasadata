"use client";
import { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogWindow from "./DialogWindow";
import Link from "next/link";

type CardForAsteroidsProps = {
  el: any;
};

const CardForAsteroids: FC<CardForAsteroidsProps> = ({ el }) => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Астероид. Обозначение: {el.designation}
          </Typography>
          <Typography variant="h6" component="div">
            Имя: {el.name}
          </Typography>
          {el.name_limited && (
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              сокращенное имя: {el.name_limited}
            </Typography>
          )}
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            Оценочный диаметр:
            <br />
            от{" "}
            {el.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
              3
            )}{" "}
            км
            <br />
            до{" "}
            {el.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
              3
            )}{" "}
            км
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            Потенциальная опасность:{" "}
            {el.is_potentially_hazardous_asteroid ? "опасный" : "не опасный"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Яркость: H-{el.absolute_magnitude_h}
          </Typography>
        </CardContent>
        <CardActions>
    
            <DialogWindow
              title="Предупреждение"
              message="Информация о каждом конкретном астероиде находится в необработанном
            виде, и, скорее всего, будет понятна только профессионалам."
            id={el.id}
            />
        </CardActions>
      </Card>
    </>
  );
};

export default CardForAsteroids;
