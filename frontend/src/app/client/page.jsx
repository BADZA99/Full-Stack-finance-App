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
    const [senderInfos, setSenderInfos] = useState();

    const handleReceiveSubmit = (event) => {
        event.preventDefault();
        setCardNumber(event.target.elements[0].value);
        setAmount(event.target.elements[1].value);
        // console.log(amount, cardNumber);

        if (cardNumber && amount > 0) {
            try {
                verifyCreditCard(cardNumber, amount).then((response) => {
                   if (response) {
                       fetchUserByCard(cardNumber).then((receiverInfos) => {
                           console.log(receiverInfos);
                           createTransaction(
                               receiverInfos?.id,
                               UserAccountInfos?.id,
                               "depot",
                               amount
                               );
                               increaseUserAmount(user?.id, amount);
                               decreaseUserAmount(receiverInfos?.user_id, amount);
                               setreceiveModalOpen(false);
                            toast.success("Card verified and transaction created successfully");
                            });
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

    //    increaseUserAmount(user?.id, amount);
    // decreaseUserAmount(receiverInfos?.user_id, amount);
    // setreceiveModalOpen(false);
    // fonction qui retourne un user par sa carte bancaire
    const fetchUserByCard = async (cardNumber) => {
        try {
            const response = await axios.post(`/AccountByCreditCard`, {
                numCarte: cardNumber,
            });
            console.log("user by card response", response.data);
            return response.data;
        } catch (e) {
            console.log(e);
            toast.error("Error during the user by card operation");
        }
    };

    const handleSendSubmit = (event) => {
        event.preventDefault();
        setCardNumber(event.target.elements[0].value);
        setAmount(event.target.elements[1].value);
        console.log(amount, cardNumber);

        if (cardNumber && amount > 0) {
            try {
                verifyCreditCard(cardNumber, amount).then((response) => {
                    if (response) {
                        fetchUserByCard(cardNumber).then((receiverInfos) => {
                            console.log(receiverInfos);
                            createTransaction(
                                UserAccountInfos?.id,
                                receiverInfos?.id,
                                "depot",
                                amount
                            );
                            increaseUserAmount(receiverInfos?.user_id, amount);
                            decreaseUserAmount(user?.id, amount);
                            setsendModalOpen(false);
                            toast.success("Card verified and transaction created successfully");
                        });
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
        }else if(user?.etat === 0){
            setAccess(false);
        }
    }, [session]);

    useEffect(() => {
        fetchConnectedUserAccountInfos(user?.id);
    }, [user]);

    //  cree une fonction qui recupere le compte bancaire  d'un user
    const fetchConnectedUserAccountInfos = async (userId) => {
        try {
            const response = await axios.get(`/accountByUserId/${userId}`);
            console.log("account infos user", response.data);
            setUserAccountInfos(response.data);
            fetchConnectedUserCardInfos(response.data.id);
        } catch (e) {
            console.log(e);
        }
    };

    //fonction qui recupere les infos de la carte bancaire du user
    const fetchConnectedUserCardInfos = async (AccountId) => {
        try {
            const response = await axios.get(
                `/CreditCardByAccountId/${AccountId}`
            );
            console.log("user credit card", response.data);
            setUserCreditCardInfos(response.data[0]);
        } catch (e) {
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
            console.log("increase amount response", response.data);
        } catch (e) {
            console.log(e);
            toast.error("Error during the  increase amount operation");
        }
    };

    // fonction qui diminue le solde du user
    const decreaseUserAmount = async (userId, amount) => {
        try {
            const response = await axios.post(`/DiminuerSolde`, {
                user_id: userId,
                montant: amount,
            });
            console.log("decrease amount response", response.data);
        } catch (e) {
            console.log(e);
            toast.error("Error during the  decrease amount operation");
        }
    };

    // FONCTION QUI VERIFIE LA CARTE BACAIRE
    const verifyCreditCard = async (cardNumber, montant) => {
        try {
            const response = await axios.post(`/VerifierCarte`, {
                numCarte: cardNumber,
                montant: montant,
            });
            console.log("verif carte reponse", response.data);
            return response.data;
        } catch (e) {
            console.log(e);
            toast.error("Error during the verification operation");
        }
    };

    // fonction qui cree une transaction
    const createTransaction = async (
        sender_account_id,
        receiver_account_id,
        type_transaction,
        amount
    ) => {
        try {
            const response = await axios.post(`/newTransaction`, {
                sender_account_id: sender_account_id,
                receiver_account_id: receiver_account_id,
                type_transaction: type_transaction,
                montant: amount,
            });

            if (sender_account_id === receiver_account_id){
                toast.error("You can't send money to yourself");
            }
            
            if (response.status === 201) {
                toast.success("Transaction created successfully");
                SendTransactionSuccessReceiverEmail(response.data.id);
                SendTransactionSuccessSenderEmail(response.data.id);
            } else {
                toast.error("Error during the transaction creation");
            }

        } catch (e) {
            console.log(e);
            // toast.error(`${e}`);
        }
    };

    // foncion qui envoie un email au destinataire de la transaction
    const SendTransactionSuccessReceiverEmail = async (idTransaction) => {
        try {
            const response = await axios.get(`/SendTransactionSuccessReceiverEmail/${idTransaction}`);
            // console.log("send email response", response.data);
            if(response.status === 200){
                toast.success("Email sent to reveiver successfully");
            }
        } catch (e) {
            console.log(e);
        }

    };

    // fonction qui envoie un email a l'expediteur de la transaction
    const SendTransactionSuccessSenderEmail = async (idTransaction) => {
        try {
            const response = await axios.get(`/SendTransactionSuccessSenderEmail/${idTransaction}`);
            // console.log("send email response", response.data);
            if(response.status === 200){
                toast.success("Email sent to sender successfully");
            }
        } catch (e) {
            console.log(e);
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
                    {user?.etat === 1 && user.role_id === 2 && (
                        <>
                            <div className="ClientInfos">
                                <div className="accountsInfos">
                                    <h2>Informations de Compte</h2>
                                    <p>
                                        Type de Compte :{" "}
                                        {UserAccountInfos?.account_type}
                                    </p>
                                    <p>
                                        Type de pack : {UserAccountInfos?.pack}
                                    </p>
                                    <p>
                                        plafond : {UserAccountInfos?.plafond}{" "}
                                        Fcfa
                                    </p>
                                    <p>
                                        Solde : {UserAccountInfos?.montant} Fcfa
                                    </p>
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
                                    dateExp={
                                        UserCreditCardInfos?.date_expiration
                                    }
                                    cvv={UserCreditCardInfos?.cvv}
                                    titulaire={
                                        user?.prenom + " " + user?.nom
                                    }
                                />
                            </div>

                            <div className="transBtns">
                                {UserAccountInfos?.account_type !==
                                    "epargne" && (
                                    <button
                                        onClick={() => {
                                            setsendModalOpen(!sendModalOpen);
                                        }}
                                    >
                                        Transfert de l'argent
                                    </button>
                                )}
                                <button
                                    onClick={() => {
                                        setreceiveModalOpen(!receiveModalOpen);
                                    }}
                                >
                                    recharger le compte
                                </button>
                            </div>
                        </>
                    )}

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
                            <form onSubmit={handleSendSubmit}>
                                <input
                                    type="text"
                                    placeholder="Carte bancaire du destinataire"
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
                            <form onSubmit={handleReceiveSubmit}>
                                <input
                                    type="text"
                                    placeholder="N° carte bancaire"
                                />
                                <input type="text" placeholder="Montant" />
                                <button type="submit">Recevoir</button>
                            </form>
                        </div>
                    )}
                    <ToastContainer position="bottom-right" />
                </StyledDashboard>
            )}
            {!access && <h1>Acces Non autorise</h1>}
        </>
    );
}
