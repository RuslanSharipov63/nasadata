import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../../providers/ReactQueryProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Header from "@/Header";
import SelectDateForAsteroids from "@/SelectDateForAsteroids";
import { Typography } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "астероиды",
  description: "астероиды, космос",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <div style={{ margin: "5px" }}>
            <Typography sx={{ textAlign: "center", mb: 1.5 }} variant="h6">
              Астероиды
            </Typography>
            <SelectDateForAsteroids />
            {children}
          </div>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ReactQueryProvider>
  );
}
