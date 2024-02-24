"use client"
import React from 'react'
import { StyledService } from './services.styled'
import { HiLightBulb } from "react-icons/hi";
import { TbBulbOff } from "react-icons/tb";

export default function Page() {
    return (
        <StyledService>
            <h2>Création de compte</h2>
            <p>
                🏦 Créez un compte avec différents packs : Gold, Premium et
                Standard.
            </p>

            <h2>Génération de carte bancaire</h2>
            <p>
                💳 Après la création d'un compte, une carte bancaire est générée
                pour vous.
            </p>

            <h2>Compte Gold</h2>
            <p>
                💰 Le plafond est de 10 millions avec un retrait maximum de 12
                000 par mois.
            </p>

            <h2>Compte Premium</h2>
            <p>
                💳 Le plafond est de 5 millions avec un retrait maximum de 5 000
                par mois.
            </p>

            <h2>Compte Standard</h2>
            <p>
                💵 Le plafond est de 1 million avec un retrait maximum de 3 000
                FCFA par mois.
            </p>
        </StyledService>
    );
}
