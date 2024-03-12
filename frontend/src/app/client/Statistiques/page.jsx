"use client";
import { StyledStats } from "./stats.styled";
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
    const [AllAccounts, setAllAccounts] = useState();
    const [AllTransactions, setAllTransactions] = useState([]);
    const [AllUsers, setAllUsers] = useState();

    useLayoutEffect(() => {
        if (user?.role_id === 2 && user.etat === 1) {
            getUserAccount(user?.id);
        }
        if (user?.role_id === 1 && user.etat === 1) {
            getAllAccounts();
            getAllTransactions();
            getAllUsers();
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

    // fonction qui recupere tous les comptes Dde l'application
    const getAllAccounts = async () => {
        try {
            const response = await axios.get(`/allAccounts`);
            // console.log("all users", response);
            if (response) {
                toast.success("Users loaded");
                setAllAccounts(response.data);
            } else {
                toast.error("Users not loaded");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // fonction qui recupere tous les transaction de l'application
    const getAllTransactions = async () => {
        try {
            const response = await axios.get(`/allTransactions`);
            // console.log("all transactions", response);
            if (response) {
                toast.success("Transactions loaded");
                setAllTransactions(response.data);
            } else {
                toast.error("Transactions not loaded");
            }
        } catch (error) {
            console.error(error);
        }
    };

    //  fonction sui recupere tous les users de l'application
    const getAllUsers = async () => {
        try {
            const response = await axios.get(`/allUsers`);
            console.log("all users", response);
            if (response) {
                toast.success("Users loaded");
                setAllUsers(response.data);
            } else {
                toast.error("Users not loaded");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // console.log("user transactions", UserTransactions);
    // console.log("users between transactions", UsersTransactions);
    // console.log("all accounts", AllAccounts);
    // console.log("all transactions", AllTransactions);
    // console.log("all users", AllUsers);
    // const labels = AllAccounts?.map((account) => account.account_type);
    // const data = AllAccounts?.map((account) => account.montant);
    // console.log("infos diag", labels, data);

    // Group accounts by type
    const accountsByType = AllAccounts?.reduce((acc, account) => {
        if (!acc[account.account_type]) {
            acc[account.account_type] = [];
        }
        acc[account.account_type].push(account);
        return acc;
    }, {});

    // Group accounts by pack
    const accountsByPack = AllAccounts?.reduce((acc, account) => {
        if (!acc[account.pack]) {
            acc[account.pack] = [];
        }
        acc[account.pack].push(account);
        return acc;
    }, {});

    // Calculate total amount for each type
    if (accountsByType) {
        for (const type in accountsByType) {
            accountsByType[type] = accountsByType[type].reduce(
                (total, account) => total + Number(account.montant),
                0
            );
        }
    }

    // console.log("accountsByType", accountsByType);
    // console.log("accountsByPack", accountsByPack);
    return (
        <StyledStats>
            <div className="diagContainer">
                <div className="bar">
                    <Bar
                        data={{
                            labels: ["Pack stats"],
                            datasets: [
                                {
                                    label: "Gold",
                                    data: [
                                        accountsByPack?.gold
                                            ? accountsByPack?.gold?.length
                                            : 0,
                                    ],
                                    // bg en vert
                                    backgroundColor: "#36A2EB",
                                    // border radius
                                    borderRadius: 5,
                                },
                                {
                                    label: "standard",
                                    data: [
                                        accountsByPack?.standard
                                            ? accountsByPack?.standard?.length
                                            : 0,
                                    ],
                                    // bg en jaune
                                    backgroundColor: "#FFCE56",
                                    // border radius
                                    borderRadius: 5,
                                    // mettre le texte en gras
                                    font: {
                                        weight: "bold",
                                    },
                                    // augmenter la taille du texte
                                    // fontSize: 20,
                                },
                                {
                                    label: "premium",
                                    data: [
                                        accountsByPack?.premium
                                            ? accountsByPack?.premium?.length
                                            : 0,
                                    ],
                                    // bg en rouge
                                    backgroundColor: "#FF6384",
                                    // border radius
                                    borderRadius: 5,
                                    // mettre le texte en gras
                                    font: {
                                        weight: "bold",
                                    },
                                    // augmenter la taille du texte
                                    // fontSize: 20,
                                    // backgroundColor: "rgba(255, 99, 132, 0.2)",
                                },
                                {
                                    label: "Nopack",
                                    data: [
                                        accountsByPack?.Nopack
                                            ? accountsByPack?.Nopack?.length
                                            : 0,
                                    ],
                                    // bg en bleu
                                    backgroundColor: "#4BC0C0",
                                    // border radius
                                    borderRadius: 5,
                                    // mettre le texte en gras
                                    font: {
                                        weight: "bold",
                                    },
                                    // augmenter la taille du texte
                                    // fontSize: 20,
                                },
                            ],
                        }}
                    />
                    <p>Diagramme des packs dans l'application</p>
                </div>
                <div className="Diagcirculaire">
                    <Doughnut
                        data={{
                            labels: ["Courant", "Epargne"],
                            datasets: [
                                {
                                    label: "Total sold",
                                    data: [
                                        accountsByType?.courant,
                                        accountsByType?.epargne,
                                    ],
                                    backgroundColor: [
                                        "rgb(255, 99, 132)",
                                        "rgb(54, 162, 235)",
                                    ],
                                    hoverOffset: 4,
                                    font: {
                                        weight: "bold",
                                        size: 20,
                                    },
                                },
                                // mettre le texte en gras et augmenter la teille
                            ],
                        }}
                    />
                    <p>
                        Diagramme des types de compte dans
                        l'application
                    </p>
                </div>
            </div>
            <div className="DiagBarre">
                <Line
                    data={{
                        labels: AllTransactions?.map((transaction) =>
                            new Date(
                                transaction.created_at
                            ).toLocaleDateString()
                        ),
                        datasets: [
                            {
                                label: "Transactions Historic",
                                data: AllTransactions?.map((transaction) =>
                                    Number(transaction.montant)
                                ),
                                borderColor: "rgb(75, 192, 192)",
                                tension: 0.1,
                            },
                        ],
                    }}
                />
                <p>
                    Courbe Historiques de tous transactions dans l'application
                </p>
            </div>
            <ToastContainer position="bottom-right" />
        </StyledStats>
    );
}
