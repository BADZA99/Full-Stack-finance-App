"use client";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { StyledAllUsers } from "./AllUsers.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function page() {
    const { user, setUser } = useUserStore();
    const [AllUsers, setAllUsers] = useState();
    const [Activate, setActivate] = useState(false);

     useEffect(() => {
         getAllUsers();
     }, []);


  


    //  fonction sui recupere tous les users
    const getAllUsers = async () => {
        try {
            const response = await axios.get(`/allUsers`);
            console.log("all users", response);
            if (response) {
                toast.success("Users loaded");
                setAllUsers(response.data);
            }else{
                toast.error("Users not loaded");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // fonction qui active un user
    const activateUser = async (userId) => {
        try {
            const response = await axios.put(`/reactivateUser/${userId}`);
            // console.log("activate user", response);
                 
              if (response) {
               toast.success("User activated");
                   updateUserState(userId, 1);
              } else {
                  toast.error("error during deasctivation");
              }
        } catch (error) {
            console.error(error);
        }
    };
    // fonction qui desactive un user
    const desactivateUser = async (userId) => {
        try {
            const response = await axios.put(`/desactivateUser/${userId}`);
            // console.log("desactivate user", response);
            if(response){
                toast.success("User desactivated");
                updateUserState(userId, 0);
            }else{
                toast.error("error during deasctivation");
            
            }
        } catch (error) {
            console.error(error);
        }
    };

    // fonction qui met a jour l'etat d'un user dans le tableau Allusers
const updateUserState = (id, newState) => {
    setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
            user.id === id ? { ...user, etat: newState } : user
        )
    );
};


    return (
        <StyledAllUsers>
            <h1>Tous les Utilisateurs</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>rib</th>
                        <th>nom</th>
                        <th>prenom</th>
                        <th>email</th>
                        <th>etat</th>
                        <th>role_id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers?.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.rib}</td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{user.etat}</td>
                            <td>{user.role_id}</td>
                            {/* bouton actions */}
                            <td>
                                {user.etat === 0 && (
                                    <button
                                        style={{ backgroundColor: "green" }}
                                        onClick={
                                            () => {
                                                activateUser(user.id);
                                                }
                                        }
                                    >
                                        Activer
                                    </button>
                                )}
                                {user.etat === 1 && (
                                    <button
                                        style={{ backgroundColor: "red" }}
                                        onClick={() => {
                                            desactivateUser(user.id);
                                        }}
                                    >
                                        Desactiver
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer position="bottom-right" />
        </StyledAllUsers>
    );
}
