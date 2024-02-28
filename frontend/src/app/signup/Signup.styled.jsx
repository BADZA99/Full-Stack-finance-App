import { styled } from "styled-components";

export const StyledSignup = styled.div`
    margin-top: 50px;
    width: 100vw;
    height: 100%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 0.5%;
        font-size: 2.5rem;
        margin-bottom: 1%;
        text-align: center;
    }

    form {
        border: 1px solid #ccc;
        padding: 2%;
        width: 30%;
        height: 85vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 2%;
        background: ${({ theme }) => theme.form};
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.text};
        transition: box-shadow 0.3s ease-in-out;
        label {
            font-size: 1.2rem;
            font-weight: bold;
            margin-right: auto;
            margin-bottom: 3%;
            margin-top: 2%;
            color: ${({ theme }) => theme.label};
        }
        input {
            width: 100%;
            padding: 9px;
            border-radius: 5px;
            border: none;
            outline: none;
            background: ${({ theme }) => theme.input};
            color: ${({ theme }) => theme.text};
        }
        button {
            margin-top: 10%;
            width: 40%;
            padding: 10px;
            border-radius: 5px;
            border: none;
            outline: none;
            background: ${({ theme }) => theme.btnSign};
            color: ${({ theme }) => theme.btnSignText};
            cursor: pointer;
            transition: 0.3s;
            &:hover {
                background: ${({ theme }) => theme.btnSignText};
                color: ${({ theme }) => theme.btnSign};
            }
        }

        span {
            color: red;
        }

        .typeCompte {
            /* background-color:blue; */
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 25px;
            line-height: 25px;
            width: 100%;
            label {
                padding-left: 10%;
                font-weight: normal;
            }
            p {
                font-weight: bold;
                font-size: 19px;
                color: ${({ theme }) => theme.label};
            }
        }
        .typePack {
            /* background-color: blue; */
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 25px;
            line-height: 25px;
            width: 100%;
            p {
                font-weight: bold;
                font-size: 19px;
                color: ${({ theme }) => theme.label};
            }
            label {
                padding-left: 6%;

                font-weight: normal;
            }
        }
    }

    form:hover {
        box-shadow: 0 0 10px 10px ${({ theme }) => theme.text};
    }

    .successMessage {
        position: absolute;
        /* centrer */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.success};
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        background-color: ${({ theme }) => theme.background};
    }

    .errorMessage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.danger};
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        background-color: ${({ theme }) => theme.background};
    }
`;