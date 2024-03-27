"use client"
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledAllAccounts } from './AllAccount.styled'
export default function page() {
    const { user, setUser } = useUserStore();
    const [AllAccounts, setAllAccounts] = useState();

      useEffect(() => {
          getAllAccounts();
      }, []);

      // fonction qui recupere tous les comptes
      const getAllAccounts = async () => {
          try {
              const response = await axios.get(`/allAccounts`);
              // console.log("all users", response);
              if (response) {
                  toast.success("Users loaded");
                  setAllAccounts(response.data);
              }else{
                  toast.error("Users not loaded");
              }
          } catch (error) {
              console.error(error);
          }
      };
  return (
      <StyledAllAccounts>
          <h1>All Accounts</h1>
          <table>
              <thead>
                  <tr>
                      <th>id</th>
                      <th>id proprietaire</th>
                      <th>Type Compte</th>
                      <th>Pack associe</th>
                      <th>Plafond</th>
                      <th>Solde</th>
                      <th>Tarif Mensuel</th>
                      <th>Date Creation</th>
                  </tr>
              </thead>
              <tbody>
                  {AllAccounts?.map((account) => (
                      <tr key={account.id}>
                          <td>{account.id}</td>
                          <td>{account.user_id}</td>
                          <td>{account.account_type}</td>
                          <td>{account.pack}</td>
                          <td>{account.plafond}</td>
                          <td>{account.montant} Fcfa</td>
                          <td>{account.max_withdrawal} Fcfa</td>
                          <td>
                              {new Date(account.created_at).toLocaleString()}
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <ToastContainer position="bottom-right" />
      </StyledAllAccounts>
  );
}
