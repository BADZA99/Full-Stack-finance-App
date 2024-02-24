import { styled } from "styled-components";

export const StyledService = styled.div`
    /* margin-top: 50px; */
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 5px;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        margin-top: 50px;
        margin-bottom:10px;
    }
`;
