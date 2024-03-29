"use client"
import React from 'react'
import { StyledLogin } from './Login.styled'
import { useForm } from 'react-hook-form';
import axios from "axios";
import useUserStore from '../../../store/userStore';
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function page() {
    // appel user et setuser de useUserStore
    const setUser = useUserStore((state) => state.setUser);
    const user = useUserStore((state) => state.user);
    const { session, activeSession } = useUserStore();
    // console.log(user);
    // const router = useRouter();
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/login", data);
            console.log(response);

            if (response.data) {
              const response2 = await axios.get("/user");
              setUser(response2.data);
              activeSession();


              toast.success("You are now logged in");
              router.push("/client");
            }


        } catch (error) {
            // console.log(error);
            // toast.error("Invalid email or password");
        }
    };

    return (
        <StyledLogin>
            <ToastContainer position="bottom-right" />

            <h1>Ravis de vous revoir !</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email",
                        },
                    })}
                />
                {errors.email && (
                    <p className="error">{errors.email.message}</p>
                )}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                />

                {errors.password && (
                    <p className="error">{errors.password.message}</p>
                )}

                <button type="submit">Login</button>
            </form>
        </StyledLogin>
    );
}
