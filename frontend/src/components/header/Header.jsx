import { StyledHeader } from './Header.styled';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Reset } from "styled-reset";
import useThemeStore from '../../../store/themeStore';

export default function Header() {
     const theme = useThemeStore((state) => state.theme);
     const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const pathname=usePathname();
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
              </div>
              <div className="left">
                  <div className="theme" onClick={toggleTheme}>
                      {theme === "light" ? "☀️" : "🌙"}
                  </div>
                  <Link href="/login">connexion</Link>
                  <Link href="/signup">inscription</Link>
              </div>
          </StyledHeader>
      </>
  );
}
