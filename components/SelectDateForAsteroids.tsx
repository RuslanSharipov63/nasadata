"use client";

import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { getCurrentDateISO } from "@/getDateForAsteroids";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import AlertCustom from "./AlertCustom";
import { redirect } from "next/navigation";

const SelectDateForAsteroids = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [alertStatus, setAlertStatus] = useState<boolean>(false);

  const sendListAsteroid = () => {
    if (!startDate || !endDate) {
      setAlertStatus(true);
      setTimeout(() => {
        setAlertStatus(false);
      }, 1000);
      return;
    }

    let date1 = dayjs(startDate);
    let date2 = dayjs(endDate);
    if (date1.isAfter(date2)) {
      setAlertStatus(true);
      setTimeout(() => {
        setAlertStatus(false);
      }, 1000);
      return;
    }
    const { startTime, endTime } = getCurrentDateISO(
      String(startDate),
      String(endDate)
    );
    let slug = "range";
    redirect(`/asteroids/${slug}?start=${startTime}&end=${endTime}`);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 6, md: 5 }}
          sx={{
            mb: 1.5,
            border: "1px solid grey",
            borderRadius: "5px",
            p: 2,
          }}
        >
          <Typography>
            Cписок астероидов по дате их ближайшего приближения к Земле
          </Typography>
          {alertStatus ? (
            <AlertCustom message="не валидные поля" status="warning" />
          ) : null}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                label="начальная дата"
              />
              <DatePicker
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                label="конечная дата"
              />
            </DemoContainer>
          </LocalizationProvider>
          <Button variant="contained" sx={{ mt: 2 }} onClick={sendListAsteroid}>
            Получить
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectDateForAsteroids;
