import { styled } from "styled-components";


export const StyledCreditCard = styled.div`
    width: 45%;
    height: 100%;
    background: ${({ theme }) => theme.bgCreditCard};

    /* background-color: #292625; */
    /* background-image: linear-gradient(315deg, #29323c 0%, #485563 74%); */
    border-radius: 7px;
    /* box shadow en fonction du theme */
    box-shadow: 0 0 10px 10px ${({ theme }) => theme.text};

    .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 45%;
        padding: 1%;
        .logoAndPuce {
            display: flex;
            align-items: center;
            /* border: 1px solid red; */
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            .logo {
                font-size: 2rem;
                color: ${({ theme }) => theme.text};
            }
            .puce {
                width: 60px;
                height: 50px;
                background-color: ${({ theme }) => theme.text};
                border-radius: 10px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        h2 {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.text};
        }
    }

    .cardInfos {
        margin-top: 1%;
        padding: 1%;
        height: 35%;
        /* border:1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .cardNumber {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.text};
        }
        p {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.text};
        }
    }

    .cardFooter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        padding: 1%;

        p {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.text};
        }

        .visalogo {
            height: 50px;
            width: 50px;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
`;


