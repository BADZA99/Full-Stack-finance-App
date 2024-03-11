"use client";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledAllTransaction } from "./Alltrans";

export default function page() {
    const { user, setUser } = useUserStore();
    const [AllTransactions, setAllTransactions] = useState();

     useEffect(() => {
         getAllTransactions();
     }, []);

    // fonction qui recupere tous les transaction
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
    return (
        <StyledAllTransaction>
            <h1>All Transactions </h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>id compte envoyeur</th>
                        <th>id compte receveur</th>
                        <th>montant</th>
                        <th>type</th>
                        <th>date transaction</th>
                    </tr>
                </thead>
                <tbody>
                    {AllTransactions?.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.sender_account_id}</td>
                            <td>{transaction.receiver_account_id}</td>
                            <td>{transaction.montant}</td>
                            <td
                                style={{
                                    color:
                                        transaction.type_transaction ===
                                        "credit"
                                            ? "green"
                                            : "red",
                                }}
                            >
                                {transaction.type_transaction}
                            </td>
                            <td>
                                {new Date(
                                    transaction.created_at
                                ).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer position="bottom-right" />
        </StyledAllTransaction>
    );
}
