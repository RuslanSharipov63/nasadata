"use client";
import { FC } from "react";
import Alert from "@mui/material/Alert";
import { OverridableStringUnion } from '@mui/types';
export type AlertColor = 'success' | 'info' | 'warning' | 'error';
export interface AlertPropsColorOverrides {}

type AlertCustomProps = {
  message: string;
  status?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};

const AlertCustom: FC<AlertCustomProps> = ({message, status}) => {
  return (
    <>
      <Alert severity={status}>{message}</Alert>
    </>
  );
};

export default AlertCustom;
