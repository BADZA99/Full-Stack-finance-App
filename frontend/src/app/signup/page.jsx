"use client"
import React, { useRef } from 'react'
import { StyledSignup } from './Signup.styled'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from 'react';
import { Resend } from "resend";
import emailjs from '@emailjs/browser';
import Email from '../../components/email/Email';




const resend = new Resend("re_123456789");


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
        //    console.log(response);
        //    console.log(data);
           const accountData = {
               // Remplissez ici avec les informations du compte
               account_type: data.compte,
               pack: data.compte === "courant" ? data.pack : "Nopack",
               plafond:
                   data.compte === "courant"
                       ? data.pack === "gold"
                           ? 10000000
                           : data.pack === "premium"
                           ? 5000000
                           : 1000000
                       : 0,
               montant:
                   data.compte === "courant"
                       ? data.pack === "gold"
                           ? 10000
                           : data.pack === "premium"
                           ? 5000
                           : 1000
                       : 0,
               max_withdrawal:
                   data.compte === "courant"
                       ? data.pack === "gold"
                           ? 12000
                           : data.pack === "premium"
                           ? 5000
                           : 3000
                       : 0,
               user_id: response.data.id,
           };


           const accountResponse = await axios.post("/newAccount", accountData);
              console.log(accountResponse);

            //   const res = await resend.emails.send({
            //       from: "Acme <onboarding@resend.dev>",
            //       to: [`${response.email}`],
            //       subject: "Hello world",
            //       react: <Email/>,
            //   });

           
            console.log(res);
     

         

           router.push("/login");
       } catch (error) {
           console.log(error);
       }
   };

// cree un nouveau compte
// const CreateAccount =(data)=>{
//     axios.post("/register", data)
//     .then((response)=>{
//         console.log(response);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }



    

  return (
      <>
          <StyledSignup>
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
