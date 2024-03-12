"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { StyledTransactions } from "../Transactions/transaction.styled";

export default function page() {
    const { user, setUser } = useUserStore();
    const [UserTransactions, setUserTransactions] = useState([]);
    const [UserAccountInfos, setUserAccountInfos] = useState();
    const [UsersTransactions, setUsersTransactions] = useState([]);

    useLayoutEffect(() => {
        getUserAccount(user?.id);
    }, [user]);
    // fonction qui retourne le compte d'un user
    const getUserAccount = async (userId) => {
        try {
            const response = await axios.get(`/accountByUserId/${userId}`);
            // console.log("account user infos",response);
            setUserAccountInfos(response.data);
            // console.log(response.data);
            if (response.status === 200) {
                getUserTransactions(response.data.id);
            }
        } catch (error) {
            // console.error(error);
            toast.error(error);
        }
    };
    // fonction qui recuperes tous les transactions d'un user
    const getUserTransactions = async (accountId) => {
        try {
            const response = await axios.get(
                `/transactionByAccountId/${accountId}`
            );
            // console.log("user transactions",response);
            setUserTransactions(response.data);
            if (response.status === 200) {
                //    parcourir usertransaction et pour chaque transaction rechercher les userstransactions
                response.data.forEach((transaction) => {
                    getUsersByTransaction(transaction.id);
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // fonction qui retourne les 2 users d'une transsaction
    const getUsersByTransaction = async (transactionId) => {
        try {
            const response = await axios.get(
                `/usersByTransactionId/${transactionId}`
            );
            // console.log("users in transaction",response);
            setUsersTransactions((prevUsersTransactions) => [
                ...prevUsersTransactions,
                ...(Array.isArray(response.data)
                    ? response.data
                    : [response.data]),
            ]);
        } catch (error) {
            console.error(error);
            toast.error(error);

        }
    };

    console.log("user transactions", UserTransactions);
    // console.log("users between transactions", UsersTransactions);
    // console.log("user account info", UserAccountInfos);
    //   type_transaction
    return (
        <StyledTransactions>
            <ul>
                {UsersTransactions?.map((transaction, index) => {
                    return (
                        <li key={index}>
                            {transaction?.receiver_user.id === user?.id
                                ? "Vous avez recu de  "
                                : "Vous avez envoye a "}
                            <h3>
                                {transaction?.receiver_user.id === user?.id
                                    ? transaction?.sender_user.prenom +
                                      " " +
                                      transaction?.sender_user.nom
                                    : transaction?.receiver_user.prenom +
                                      " " +
                                      transaction?.receiver_user.nom}
                            </h3>
                            un {UserTransactions[index]?.type_transaction} de{" "}
                            <h3
                                style={{
                                    color:
                                        UserTransactions[index]
                                            ?.sender_account_id ===
                                        UserAccountInfos?.id
                                            ? "red"
                                            : "green",
                                }}
                            >
                                {UserTransactions[index]?.montant}Fcfa
                            </h3>
                            le{" "}
                            <span>
                                {new Date(
                                    UserTransactions[index]?.created_at
                                ).toLocaleString("en-US", { timeZone: "UTC" })}
                            </span>
                        </li>
                    );
                })}

                {
                    UsersTransactions.length===0 && <h2>Vous n'avez pas encore de transactions</h2>
                }
            </ul>
        </StyledTransactions>
    );
}
