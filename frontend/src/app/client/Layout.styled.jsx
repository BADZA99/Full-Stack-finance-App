import { styled } from "styled-components";

export const StyledLayout = styled.div`
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    position: relative;
    margin-top: 50px;
    height: 100vh;
    min-height: 100vh;
    width: 100vw;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */

    StyledSideMenu:hover {
        box-shadow: 0 0 10px 10px ${({ theme }) => theme.background};
    }
`;
