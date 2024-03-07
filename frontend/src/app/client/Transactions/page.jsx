"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { StyledTransactions } from "../Transactions/transaction.styled";

export default function page() {
    const { user, setUser } = useUserStore();
    const [INFOS, SETINFOS] = useState("");

   useLayoutEffect(() => {
       getUserAccount(user?.id);
   }, [user]);
    // fonction qui retourne le compte d'un user
    const getUserAccount = async (userId) => {
        try {
            const response = await axios.get(`/accountByUserId/${userId}`);
            console.log("account user",response);
            SETINFOS(response.data);
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
            console.log("user transactions",response);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(INFOS);
    return <StyledTransactions>
        <ul>
            <li>Mr/Mme<h3>badara</h3> vous a fait un virement de <h3>150€</h3> le <span>20/10/2024</span></li>
        </ul>
        </StyledTransactions>;
}
