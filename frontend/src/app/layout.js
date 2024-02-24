"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "styled-components";
import { useCallback, useState } from "react";
import { THEME } from "../../utils/theme";
import useThemeStore from "../../store/themeStore";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Finance App",
//   description: "Coded b PAPA BN",
// };

export default function RootLayout({ children }) {
// utilise le theme du store
    const theme = useThemeStore((state) => state.theme);
    // fonction pour changer de thème
    // const toggleTheme = useThemeStore((state) => state.toggleTheme);

    // const [currentTheme, setCurrentTheme] = useState("light");
    // const ToggleTheme = useCallback(() => {
    //     setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    // }, [currentTheme]);
  return (
      <html lang="en">
          <head>
              <title>Finance App</title>
              <meta name="description" content="Coded by PAPA BN" />
          </head>
          <ThemeProvider theme={THEME[theme]}>
              <Header />
              <body >{children}</body>
          </ThemeProvider>
      </html>
  );
}
