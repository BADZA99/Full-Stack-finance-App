import { styled } from "styled-components";

export const StyledTransactions = styled.div`
    position: absolute;
    top: 5%;
    right: 7%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    width: 70%;
    height: 40vw;
    border: 1px solid red;


    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px;
            border: 1px solid red;
            height: 45%;
            padding: 1%;
            h3{
                font-size: 1.4rem;
            }
            span{
                font-size: 1.4rem;
            }

            // met un box shadow en fonction du theme
            &:hover{
                box-shadow: 0 0 10px rgba(0,0,0,0.3);
            }
           
        }
    }
`;
