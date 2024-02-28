"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "styled-components";
import { useCallback, useState } from "react";
import { THEME } from "../../utils/theme";
import useThemeStore from "../../store/themeStore";
import Axios from "axios";
const inter = Inter({ subsets: ["latin"] });

Axios.defaults.baseURL = "http://localhost:8000/api/";
// pass cookie from the backend
Axios.defaults.withCredentials = true;



export default function RootLayout({ children }) {
// utilise le theme du store
    const theme = useThemeStore((state) => state.theme);
   
  return (
      <html lang="en">
          <head>
            <link rel="icon" href="/images/icone.png" />
              <title>CashLink</title>
              <meta name="description" content="Coded by PAPA BN" />
          </head>
          <ThemeProvider theme={THEME[theme]}>
              <Header />
              <body >{children}</body>
          </ThemeProvider>
      </html>
  );
}
