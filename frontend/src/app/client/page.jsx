"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyledDashboard } from "./Dashboard.styled";
import CreditCard from "../../components/CreditCard/CreditCard";
import useUserStore from "../../../store/userStore";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
    const [sendModalOpen, setsendModalOpen] = useState(false);
    const [access, setAccess] = useState(false);
    const [UserAccountInfos, setUserAccountInfos] = useState();
    const [UserCreditCardInfos, setUserCreditCardInfos] = useState();
    const [receiveModalOpen, setreceiveModalOpen] = useState(false);
    const { session, activeSession } = useUserStore();
    const { user, setUser } = useUserStore();
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      setCardNumber(event.target.elements[0].value);
      setAmount(event.target.elements[1].value);
      console.log(amount,cardNumber);

      if (
          cardNumber &&
          amount > 0 
      ) {
           try {
                verifyCreditCard(cardNumber,amount).then((response) => {
                     if (response) {
                            toast.success("Card verified");
                        console.log(user?.id);
                          increaseUserAmount(user?.id, amount);
                     } else {
                          toast.error("Invalid card number");
                     }
                });
            
           } catch (error) {
                console.log(error);
                toast.error("Error during the verification operation");
           }
      }

  };

    useLayoutEffect(() => {
        if (session) {
            setAccess(true);
        }
    }, [session]);

    useEffect(() => {
        fetchConnectedUserAccountInfos(user?.id);

    }, [user]);


    //  cree une fonction qui recupere le compte bancaire  d'un user
    const fetchConnectedUserAccountInfos = async (userId) => {
        try {
            const response = await axios.get(`/accountByUserId/${userId}`);
            console.log("account infos user",response.data);
            setUserAccountInfos(response.data);
            fetchConnectedUserCardInfos(response.data.id);
        } catch (e) {
            console.log(e);
        }
    }

    //fonction qui recupere les infos de la carte bancaire du user
    const fetchConnectedUserCardInfos = async (AccountId) => {
        try {
            const response = await axios.get(
                `/CreditCardByAccountId/${AccountId}`
            );
            console.log("user credit card",response.data);
            setUserCreditCardInfos(response.data[0]);
        }
        catch (e) {
            console.log(e);
        }
    };

    // fonction augmente le solde du user
    const increaseUserAmount = async (userId, amount) => {
        try {
            const response = await axios.post(`/AugmenterSolde`, {
                user_id: userId,
                montant: amount,
            });
            console.log("increase amount response",response.data);
        } catch (e) {
            console.log(e);
            toast.error("Error during the  increase amount operation");
        }
    };


    // FONCTION QUI VERIFIE LA CARTE BACAIRE
    const verifyCreditCard = async (cardNumber,montant) => {
        try {
            const response = await axios.post(`/VerifierCarte`,{
                numCarte: cardNumber,
                montant:montant,

            });
            console.log("verif carte reponse",response.data);
            return response.data;
        } catch (e) {
            console.log(e);
            toast.error("Error during the verification operation");
        }
    };



    // console.log("session: ",session)
    // console.log("user: ",user)
    // console.log("UserAccountInfos: ", UserAccountInfos);
// max_withdrawal;


    return (
        <>
            {access && (
                <StyledDashboard>
                    <div className="ClientInfos">
                        <div className="accountsInfos">
                            <h2>Informations de Compte</h2>
                            <p>
                                Type de Compte :{" "}
                                {UserAccountInfos?.account_type}
                            </p>
                            <p>Type de pack : {UserAccountInfos?.pack}</p>
                            <p>plafond : {UserAccountInfos?.plafond} Fcfa</p>
                            <p>Solde : {UserAccountInfos?.montant} Fcfa</p>
                            <p>
                                retrait mensuel :{" "}
                                {UserAccountInfos?.max_withdrawal} Fcfa
                            </p>
                            <p>RIB : {user?.rib}</p>
                        </div>
                        <CreditCard
                            className="carte"
                            type={UserCreditCardInfos?.type_carte}
                            numero={UserCreditCardInfos?.numero_carte}
                            dateExp={UserCreditCardInfos?.date_expiration}
                            cvv={UserCreditCardInfos?.cvv}
                            titulaire={user?.nom + " " + user?.prenom}
                        />
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
                                Recevoir de l'argent{" "}
                                <span
                                    onClick={() => {
                                        setreceiveModalOpen(false);
                                    }}
                                >
                                    X
                                </span>
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="N° carte bancaire"
                                />
                                <input type="text" placeholder="Montant" />
                                <button>Recevoir</button>
                            </form>
                        </div>
                    )}
                </StyledDashboard>
            )}
            {!access && (
                <h1>
                    Vous n'avez pas accès à cette page veuillez vous
                    authentifier
                </h1>
            )}
        </>
    );
}
