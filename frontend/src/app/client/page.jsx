"use client";
import React, { useState } from "react";
import { StyledDashboard } from "./Dashboard.styled";
import CreditCard from "../../components/CreditCard/CreditCard";

export default function page() {
    const [sendModalOpen, setsendModalOpen] = useState(false);
    const [receiveModalOpen, setreceiveModalOpen] = useState(false);


    return (
        <StyledDashboard>
            <div className="ClientInfos">
                <div className="accountsInfos">
                    <h2>Informations de Compte</h2>
                    <p>Type de Compte : premium</p>
                    <p>Type de pack : gold</p>
                    <p>plafond : 1000€</p>
                    <p>Solde : 5000€</p>
                    <p>retrait mensuel : 2000€</p>
                </div>
                <CreditCard />
            </div>

            <div className="transBtns">
                <button
                    onClick={() => {
                        setsendModalOpen(!sendModalOpen);
                    }}
                >
                    Transfert de l'argent
                </button>
                <button
                    onClick={() => {
                        setreceiveModalOpen(!receiveModalOpen);
                    }}
                >
                    recharger le compte
                </button>
            </div>

            {sendModalOpen && (
                <div className="sendModal">
                    <h2>
                        Envoyer de l'argent{" "}
                        <span
                            onClick={() => {
                                setsendModalOpen(false);
                            }}
                        >
                            X
                        </span>
                    </h2>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Email du destinataire"
                        />
                        <input type="text" placeholder="Montant" />
                        <button>Envoyer</button>
                    </form>
                </div>
            )}

            {receiveModalOpen && (
                <div className="receiveModal">
                    <h2>
                        Recevoir de l'argent <span
                            onClick={() => {
                                setreceiveModalOpen(false);
                            }} 
                        >X</span>
                    </h2>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Email de l'expéditeur"
                        />
                        <input type="text" placeholder="Montant" />
                        <button>Recevoir</button>
                    </form>
                </div>
            )}
        </StyledDashboard>
    );
}
