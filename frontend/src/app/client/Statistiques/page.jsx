"use client";
import { StyledStats } from "./stats.styled";
import {Chart as ChartJS} from "chart.js/auto";
import {Bar,Doughnut,Line} from "react-chartjs-2"
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";

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
            console.error(error);
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
        }
    };

    // console.log("user transactions", UserTransactions);
    // console.log("users between transactions", UsersTransactions);

    return (
        <StyledStats>
            <h1>Statistiques</h1>
            <div className="bar">
                {/* <Bar
                    data={{
                        labels: UserTransactions.map(
                            (transaction) => transaction.receiver_user
                        ),
                        datasets: [
                            {
                                label: "Montant",
                                data: UserTransactions.map(
                                    (transaction) => transaction.receiver_user
                                ),
                                backgroundColor: "rgba(255, 99, 132, 0.2)",
                                borderColor: "rgba(255, 99, 132, 1)",
                                borderWidth: 1,
                            },
                        ],
                    }}
                    height={200}
                    width={200}
                    options={{
                        maintainAspectRatio: false,
                    }}
                /> */}
            </div>
        </StyledStats>
    );
}
