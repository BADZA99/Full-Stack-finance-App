"use client"
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "styled-components";
import { useCallback, useState } from "react";
import { THEME } from "../../utils/theme";
import useThemeStore from "../../store/themeStore";
import Axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import useUserStore from "../../store/userStore";
import { useEffect } from "react";
import Header from "../components/header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Axios.defaults.baseURL = "http://localhost:8000/api/";
// pass cookie from the backend
Axios.defaults.withCredentials = true;



export default function RootLayout({ children }) {
// utilise le theme du store
    const theme = useThemeStore((state) => state.theme);
    const { user, setUser } = useUserStore();
    const { session, activeSession } = useUserStore();


      const fetchConnectedUser = async () => {
          try {
              const response = await axios.get("/user");
              setUser(response.data);
              activeSession();
          } catch (e) {
              console.log(e);
          }
      };
      useEffect(() => {
          fetchConnectedUser();
          // console.log(user);

      }, []);
   
  return (
      <html lang="en">
          <head>
              <link rel="icon" href="/images/icone.png" />
              <title>CashLink</title>
              <meta name="description" content="Coded by PAPA BN" />
          </head>
          <ThemeProvider theme={THEME[theme]}>
              <Header />
              <body>
                {children}
                </body>
          </ThemeProvider>
      </html>
  );
}
