import { StyledHeader } from './Header.styled';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Reset } from "styled-reset";
import useThemeStore from '../../../store/themeStore';
import useUserStore from '../../../store/userStore';
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
     const theme = useThemeStore((state) => state.theme);
     const toggleTheme = useThemeStore((state) => state.toggleTheme);
     const setUser= useUserStore((state) => state.setUser);
     const user= useUserStore((state) => state.user);
    
  const pathname=usePathname();
            // console.log(user);

    const logout = async () => {
        try {
            // utilise axios
            const response = await axios.post("/logout");  
            if (response) setUser(null);
            // console.log(user);
            // aller a la page d'acceuil
            // toast
            toast.success("You are now logged out");
            router.push("/");


        } catch (e) {
            console.log(e);
            // toast

        }
    }
  return (
      <>
          <Reset />
          <StyledHeader>
              <Link href="/" className="logo">
                  CashLink
              </Link>
              <div className="middle">
                  <Link href="/">
                      <span className={pathname === "/" ? "activeLink" : ""}>
                          Acceuil
                      </span>
                  </Link>
                  <Link href="/about">
                      <span
                          className={pathname === "/about" ? "activeLink" : ""}
                      >
                          A propos
                      </span>
                  </Link>
                  <Link href="/services">
                      <span
                          className={
                              pathname === "/services" ? "activeLink" : ""
                          }
                      >
                          services
                      </span>
                  </Link>
                  <Link href="/client">
                      <span
                          className={
                              pathname === "/client"
                                  ? "activeLink"
                                  : ""
                          }
                      >
                          Mon profile
                      </span>
                  </Link>
              </div>
              <div className="left">
                  <div className="theme" onClick={toggleTheme}>
                      {theme === "light" ? "☀️" : "🌙"}
                  </div>
                  {user === null ? (
                      <>
                          <Link href="/login">connexion</Link>
                          <Link href="/signup">inscription</Link>
                      </>
                  ) : (
                      <>
                          <Link href="/">
                              <span onClick={logout}>déconnexion</span>
                          </Link>
                      </>
                  )}
              </div>
          </StyledHeader>
      </>
  );
}
