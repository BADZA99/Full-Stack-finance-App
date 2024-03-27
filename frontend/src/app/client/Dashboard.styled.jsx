import { styled } from "styled-components";


export const StyledDashboard = styled.div`
    position: absolute;
    top: 5%;
    right: 7%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    width: 70%;
    height: 50vw;
    // border: 1px solid red;

    .ClientInfos {
        display: flex;
        justify-content: space-between;
        margin: 10px;
        // border: 1px solid red;
        height: 45%;
        padding: 1%;

        .accountsInfos {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 10px;
            h2 {
                font-size: 2rem;
            }

            p {
                font-size: 1.2rem;
            }

           
        }
    }
    .transBtns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px;
        // border: 1px solid red;
        height: 10%;
        width: 40%;
        button {
            padding: 1%;
            margin: 1%;
            font-size: 1.2rem;
            border: none;
            border-radius: 5px;
            background: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.btnSignText};
            cursor: pointer;
        }
    }
    .sendModal {
        position: absolute;
        /* le centrer  */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${({ theme }) => theme.background};
        font-family: "Inter", sans-serif;
        color: ${({ theme }) => theme.text};
        width: 30%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            text-align: center;
            font-size: 1.5rem;
            display: flex;
            justify-content: space-between;

            span {
                cursor: pointer;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 10px;
            padding: 1%;
            input {
                padding: 1%;
                margin: 1%;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                color: ${({ theme }) => theme.modalText};
                background: ${({ theme }) => theme.background};
            }
            button {
                padding: 1%;
                margin: 1%;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                background: ${({ theme }) => theme.primary};
                color: ${({ theme }) => theme.btnSignText};
                cursor: pointer;
            }
        }
    }

    .receiveModal {
        position: absolute;
        /* le centrer  */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${({ theme }) => theme.background};
        font-family: "Inter", sans-serif;
        color: ${({ theme }) => theme.text};
        width: 30%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            text-align: center;
            font-size: 1.5rem;
            display: flex;
            justify-content: space-between;

            span {
                cursor: pointer;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 10px;
            padding: 1%;
            input {
                padding: 1%;
                margin: 1%;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                color: ${({ theme }) => theme.modalText};
                background: ${({ theme }) => theme.background};
                border-color: ${({ theme }) => theme.primary};
            }
            button {
                padding: 1%;
                margin: 1%;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                background: ${({ theme }) => theme.primary};
                color: ${({ theme }) => theme.btnSignText};
                cursor: pointer;
                &:hover {
                    background: ${({ theme }) => theme.primaryHover};
                }
            }
        }
    }
`;