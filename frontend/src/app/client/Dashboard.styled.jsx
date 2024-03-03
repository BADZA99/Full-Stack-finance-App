import { styled } from "styled-components";


export const StyledDashboard = styled.div`
    position: absolute;
    top: 5%;
    right: 7%;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    width: 70%;
    height: 40vw;
    border: 1px solid red;
`;