import React from 'react'
import { StyledCreditCard } from './card.styled'
import Image from "next/image";


export default function CreditCard({
  type,numero,dateExp,cvv,titulaire
}) {
  // affiche les props
  // console.log("type",type,"numero",numero,"dateExp",dateExp,"cvv",cvv,"titulaire",titulaire);
  return (
      <StyledCreditCard>
            <div className="cardHeader">
              <div className="logoAndPuce">
                <h1 className="logo">CashLink</h1>
                <div className="puce">
                  <Image
                    src={`/images/${type==="gold" ? "puceGold" : type==="premium" ?  "pucePremium": type==="standard" ? "puceBronze":"" }.png`}
                    alt="puce"
                    width={60}
                    height={50}
                  />
                </div>
              </div>
              <h2
                style={{
                  color:
                    type === "gold"
                      ? "#FFD700"
                      : type === "premium"
                      ? "#C0C0C0"
                      : "#CD7F32",
                }}
              >{type}</h2>
            </div>

          <div className="cardInfos">
              <p className="cardNumber">N°: {numero}</p>
              <p>Expire le:  {dateExp}</p>
              <p>Cvv :  {cvv}</p>
          </div>

          <div className="cardFooter">
              <p>Titulaire: {titulaire}</p>
              <div className="visaLogo">
                  <Image
                      src="/images/mastercardlogo.png"
                      alt="visa"
                      width={50}
                      height={50}
                  />
              </div>
          </div>
         
      </StyledCreditCard>
  );
}
