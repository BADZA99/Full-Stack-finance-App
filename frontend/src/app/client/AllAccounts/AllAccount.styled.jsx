import { styled } from "styled-components";

export const StyledAllAccounts = styled.div`
    position: absolute;
    top: 5%;
    right: 7%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    width: 70%;
    height: 40vw;
    // border: 1px solid red;

     h1 {
        text-align: center;
        margin-bottom: 20px;
           font-size: 30px;
    }

   

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;

        thead {
            background-color: ${({ theme }) => theme.text};
            color: ${({ theme }) => theme.background};
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }

        //    utilise la couteur des themes
        th {
            background-color: ${({ theme }) => theme.background};
            color: ${({ theme }) => theme.text};
        }

        td button{
     
            color: ${({ theme }) => theme.text};
            padding: 5px 5px;
            margin: 0 5px;
            cursor: pointer;
        }
`;
