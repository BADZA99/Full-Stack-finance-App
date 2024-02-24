"use client"
import { Reset } from "styled-reset";
import { StyledHome } from "./home.styled";
import useThemeStore from "../../store/themeStore";
import Image from "next/image";


export default function Home() {
   

    return (
        <>
            <Reset />
            <StyledHome>
                <div className="herobanner">
                  <p className="TextHero">
                      <span className="appName">CashLink</span> réinvente la gestion financière avec une plateforme
                      intuitive. <br />Suivez vos comptes, effectuez des transactions
                      sécurisées, et planifiez votre avenir financier avec
                      facilité.
                  </p>
                  <div className="ImageHero">
                      <Image
                          src="/images/icone1.png"
                          alt="hero"
                          width={500}
                          height={500}
                      />
                  </div>
                </div>
            </StyledHome>
        </>
    );
}
