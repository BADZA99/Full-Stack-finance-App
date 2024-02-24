import { styled } from "styled-components";

export const StyledAbout = styled.div`
    margin-top: 50px;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10% 5%;
    p {
        font-size: 1.7rem;
        line-height: 1.5;
        width: 70%;
        /* height:60%; */

        .appname {
            color: ${({ theme }) => theme.appname};
            font-size: 2rem;
        }
    }
    .ImageAbout {
        width: 50%;
        height: 70%;
        animation: updown 2s linear infinite;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @keyframes updown {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-20px);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;