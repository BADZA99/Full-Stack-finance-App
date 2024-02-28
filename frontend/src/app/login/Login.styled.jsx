import { styled } from "styled-components";

export const StyledLogin = styled.div`
    margin-top: 50px;
    width: 100vw;
    height: 100dvh;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h1{
        margin-top: 5%;
        font-size: 2.5rem;
        margin-bottom: 3%;
        text-align: center;
    }

    form {
        border: 1px solid #ccc;
        padding: 2%;
        width: 30%;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 5%;
        background: ${({ theme }) => theme.form};
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.text};
        transition: box-shadow 0.3s ease-in-out;
        label {
            font-size: 1.2rem;
            font-weight: bold;
            margin-right: auto;
            margin-bottom: 6%;
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
            margin-bottom: 5%;
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
        }

        .error{
            color: red;
            font-size: 1.2rem;
        }
    }
`;