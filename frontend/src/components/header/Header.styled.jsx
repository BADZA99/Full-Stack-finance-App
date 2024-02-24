import { styled } from "styled-components";

export const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 50px;
    background: ${({ theme }) => theme.background};
    z-index: 100;
    font-family: "Inter", sans-serif;
    /* background: #0d57e0; */

    .logo {
        margin-right: auto;
        font-size: 2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.appname};
        font-style: italic;

    }

    .middle {
        /* background: #0d57e0; */
        align-self: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;

        a{
            color: ${({ theme }) => theme.text};
            text-decoration: none;
            font-size: 1.4rem;
            font-weight: bold;

            span {
                margin: 0 3px;
                color: ${({ theme }) => theme.text};
    
                text-decoration: none;
                font-size: 1.4rem;
                font-weight: bold;
            }
        }

        .activeLink {
            color: ${({ theme }) => theme.danger};
            font-size: 1.3rem;
            font-weight: bold;}
    }

    .left {
        /* background: #0d57e0; */

        margin-left: auto;
        display: flex;
        justify-content: center;
        gap: 5%;
        align-items: center;
        width: 20%;
        a {
            color: ${({ theme }) => theme.background};
            text-decoration: none;
            /* style button */
            padding: 10px 10px;
            border-radius: 5px;
            font-size: 1.2rem;
            font-weight: bold;
            background: ${({ theme }) => theme.text};
            border-radius: 9999px;
            &:hover {
                background: ${({ theme }) => theme.appname};
                color: ${({ theme }) => theme.text};
            }
        }

        .theme{
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s
            
        }
    }
`;
