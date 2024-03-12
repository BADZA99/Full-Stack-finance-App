import { styled } from "styled-components";

export const StyledStats = styled.div`
    position: absolute;
    top: 5%;
    right: 3%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    width: 80%;
    height: 40vw;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;


    .diagContainer {
        margin-top: 2%;
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .bar {
            width: 400px;
            height: 240px;
            // background: #f2f2f2;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: bold;

            p {
                font-size: 17px;
                color: ${({ theme }) => theme.text};
                margin-top: 3%;
            }
        }

        .Diagcirculaire {
            width: 450px;
            height: 240px;
            // background: #f2f2f2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                font-size: 17px;
                color: ${({ theme }) => theme.text};
                margin-top: 2%;
            }
        }
    }
    .DiagBarre {
        margin-top: 1%;
        width: 70%;
        height: 270px;
        // background: #f2f2f2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        // border: 1px solid red;

        p {
            font-size: 20px;
            color: ${({ theme }) => theme.text};
            margin-top: 3%;
        }
    }
`;
