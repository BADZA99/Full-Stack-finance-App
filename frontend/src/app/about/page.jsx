"use client"

import React from 'react'
import Image from "next/image";
import { StyledAbout } from './About.styled';

export default function page() {
  return (
      <StyledAbout>
          <p>
              <span className="appname">CashLink</span> est bien plus qu'une simple application
              de gestion financière. C'est votre partenaire financier
              intelligent, conçu pour simplifier votre vie quotidienne. Suivez
              vos dépenses, gérez vos comptes en toute simplicité, et atteignez
              vos objectifs financiers plus rapidement. Avec une interface
              conviviale et des fonctionnalités puissantes, CashLink transforme
              la gestion financière en une expérience fluide et agréable.
              Explorez les avantages d'une finance personnelle intelligente avec
              CashLink.
          </p>
          <div className="ImageAbout">
              <Image
                  src="/images/about.png"
                  alt="hero"
                  width={500}
                  height={500}
              />
          </div>
      </StyledAbout>
  );
}
