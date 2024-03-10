import { styled } from "styled-components";

export const StyledStats = styled.div`
    position: absolute;
    top: 5%;
    right: 7%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    width: 70%;
    height: 40vw;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .bar{
        width: 50%;
        height: 50%;
    }
`;
