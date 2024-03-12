"use client";
import { StyledMyStats } from "./Mystats.styled";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
    const { user, setUser } = useUserStore();
    const [UserTransactions, setUserTransactions] = useState([]);
    const [UserAccountInfos, setUserAccountInfos] = useState();
    const [UsersTransactions, setUsersTransactions] = useState([]);

    useLayoutEffect(() => {
        if (user?.role_id === 2 && user.etat === 1) {
            getUserAccount(user?.id);
        }
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
        <StyledMyStats>
            <h1>Statistiques</h1>
            <div className="DiagBarre">
                <Line
                    data={{
                        labels: UserTransactions?.map((transaction) =>
                            new Date(
                                transaction.created_at
                            ).toLocaleDateString()
                        ),
                        datasets: [
                            {
                                label: "Transactions per Day",
                                data: UserTransactions?.map((transaction) =>
                                    Number(transaction.montant)
                                ),
                                borderColor: "blue",
                                tension: 0.1,
                            },
                        ],
                    }}
                />
                <p>Courbe Historiques de vos transactions</p>
            </div>
            <ToastContainer position="bottom-right" />
        </StyledMyStats>
    );
}
