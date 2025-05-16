"use client";
import { FC, JSX } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

type CoordinatsEpicType = {
  data: {
    [key: string]: number | string | undefined
  }
};

const CoordinatsEpic: FC<CoordinatsEpicType> = ({ data }) => {
  let newArr = [];

  for (let key in data) {
    newArr.push(
      <List key={data[key] + key}>
        <ListItem>
          <ListItemText primary={`${key}: ${data[key]}`} />
        </ListItem>
      </List>
    );
  }

  return <>{newArr}</>;
};

export default CoordinatsEpic;
