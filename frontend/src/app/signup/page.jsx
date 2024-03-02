"use client"
import React, { useRef } from 'react'
import { StyledSignup } from './Signup.styled'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SignupPage() {
  const [success,setSuccess]=useState();
  const [selectedAccount, setSelectedAccount] = useState("");
    const form = useRef();

   const {
       register,
       watch,
       handleSubmit,
       formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
       try {
           const response = await axios.post("/register", data);
            console.log(response);
        //    console.log(data);
           
        if(response.status === 201){
            CreateAccount(data,response.data.id);
        }

       

        //    router.push("/login");
       
    } catch (error) {
           console.log(error);
           toast.error('Error creating account!');
       }
   };

// cree un nouveau compte
const CreateAccount = async (infosUser,idUser)=>{
    console.log("infos user: ",infosUser,"idUser: ",idUser);
const accountData = {
    // Remplissez ici avec les informations du compte
    account_type: infosUser.compte,
    pack: infosUser.compte === "courant" ? infosUser.pack : "Nopack",
    plafond:
        infosUser.compte === "courant"
            ? infosUser.pack === "gold"
                ? 10000000
                : infosUser.pack === "premium"
                ? 5000000
                : 1000000
            : 0,
    montant:
        infosUser.compte === "courant"
            ? infosUser.pack === "gold"
                ? 10000
                : infosUser.pack === "premium"
                ? 5000
                : 1000
            : 0,
    max_withdrawal:
        infosUser.compte === "courant"
            ? infosUser.pack === "gold"
                ? 12000
                : infosUser.pack === "premium"
                ? 5000
                : 3000
            : 0,
    user_id: idUser,
};
console.log("infos compte: ",accountData)
    await axios
        .post("/newAccount", accountData)
        .then((responseAccount) => {
            console.log("reponse creation compte",responseAccount);
            // envoyer mail
            SendEmail(idUser);
        })
        .catch((error) => {
            console.log(error);
            toast.error("Error creating account");
        });
}

// creer une fonction qui envoie l'email
const SendEmail = async (id) => {
   await axios
        .get(`/sendEmail/${id}`)
        .then((response) => {
            console.log(response);
            
        })
        .catch((error) => {
            console.log(error);
           toast.error("Error on sending email");

        });

}   

const notify = () => toast.success("Signup successful Check your Email");



  return (
      <>
          <StyledSignup>
              <ToastContainer position="bottom-right" />

              <h1>Rejoins la communaute CashLink</h1>
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                  {/* nom,prenom,telephone,email,mot de passe avec leur label */}
                  <label htmlFor="nom">Nom</label>
                  <input
                      type="text"
                      name="nom"
                      id="nom"
                      {...register("nom", {
                          required: true,
                          maxLength: 20,
                          minLength: 5,
                      })}
                  />
                  {errors.nom && errors.nom.type === "required" && (
                      <span>Le champ nom est requis</span>
                  )}
                  {errors.nom && errors.nom.type === "maxLength" && (
                      <span>Le champ nom est trop long</span>
                  )}
                  {errors.nom && errors.nom.type === "minLength" && (
                      <span>Le champ nom est trop court</span>
                  )}

                  <label htmlFor="prenom">Prenom</label>
                  <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      {...register("prenom", {
                          required: true,
                          maxLength: 20,
                          minLength: 5,
                      })}
                  />
                  {errors.nom && errors.nom.type === "required" && (
                      <span>Le champ nom est requis</span>
                  )}
                  {errors.nom && errors.nom.type === "maxLength" && (
                      <span>Le champ nom est trop long</span>
                  )}
                  {errors.nom && errors.nom.type === "minLength" && (
                      <span>Le champ nom est trop court</span>
                  )}

                  <label htmlFor="telephone">Telephone</label>
                  <input
                      type="text"
                      name="telephone"
                      id="telephone"
                      {...register("telephone", {
                          required: true,
                          maxLength: 20,
                          minLength: 5,
                      })}
                  />
                  {errors.nom && errors.nom.type === "required" && (
                      <span>Le champ nom est requis</span>
                  )}
                  {errors.nom && errors.nom.type === "maxLength" && (
                      <span>Le champ nom est trop long</span>
                  )}
                  {errors.nom && errors.nom.type === "minLength" && (
                      <span>Le champ nom est trop court</span>
                  )}

                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      name="email"
                      id="email"
                      {...register("email", {
                          required: true,
                          pattern:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      })}
                  />
                  {errors.email && errors.email.type === "required" && (
                      <span>Le champ email est requis</span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                      <span>Le champ email est invalide</span>
                  )}
                  <label htmlFor="password">Mot de passe</label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      {...register("password", {
                          required: true,
                          maxLength: 20,
                          minLength: 5,
                      })}
                  />
                  {errors.password && errors.password.type === "required" && (
                      <span>Le champ password est requis</span>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                      <span>Le champ password est trop long</span>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                      <span>Le champ password est trop court</span>
                  )}
                  {/* deux input type checkbox */}
                  <div className="typeCompte">
                      <p>compte: </p>
                      <label htmlFor="epargne" className="stlab">
                          epargne
                      </label>
                      <input
                          type="radio"
                          name="compte"
                          id="epargne"
                          value="epargne"
                          onClick={() => setSelectedAccount("epargne")}
                          {...register("compte", { required: true })}
                      />
                      <label htmlFor="courant">courant</label>
                      <input
                          type="radio"
                          name="compte"
                          id="courant"
                          value="courant"
                          onClick={() => setSelectedAccount("courant")}
                          {...register("compte", { required: true })}
                      />
                  </div>
                  {errors.compte && <span>Le champ compte est requis</span>}
                  {selectedAccount === "courant" && (
                      <div className="typePack">
                          <p>Pack: </p>
                          <label htmlFor="gold">Gold</label>
                          <input
                              type="radio"
                              name="pack"
                              id="gold"
                              value="gold"
                              className="input"
                              {...register("pack", { required: true })}
                          />
                          <label htmlFor="premium">Premium</label>
                          <input
                              type="radio"
                              name="pack"
                              id="premium"
                              value="premium"
                              {...register("pack", { required: true })}
                          />
                          <label htmlFor="standard">Standart</label>
                          <input
                              type="radio"
                              name="pack"
                              id="standard"
                              value="standard"
                              {...register("pack", { required: true })}
                          />
                      </div>
                  )}
                  {errors.pack && <span>Le champ pack est requis</span>}
                  <button type="submit">Creer Compte</button>
              </form>
          </StyledSignup>
      </>
  );
}
