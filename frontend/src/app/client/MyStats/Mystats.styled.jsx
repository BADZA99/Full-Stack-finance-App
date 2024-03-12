import { styled } from "styled-components";

export const StyledMyStats = styled.div`
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

    h1 {
        text-align: center;
        font-size: 30px;
    }

    .diagContainer {
        margin-top: 2%;
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .bar {
            width: 390px;
            height: 260px;
            background: #f2f2f2;
            display: flex;
            align-items: center;
            font-weight: bold;
        }

        .Diagcirculaire {
            width: 390px;
            height: 260px;
            background: #f2f2f2;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .DiagBarre {
        margin-top: 0.5%;
        width: 60%;
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
