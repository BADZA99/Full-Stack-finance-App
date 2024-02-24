import { styled } from "styled-components";

export const StyledHome = styled.div`
    position: relative;
    margin-top: 50px;
    /* background: ${({ theme }) => theme.background}; */
    color: ${({ theme }) => theme.text};
    width: 100vw;
    height: 93vh;
    background-image: url("/images/bg.jpg");
    background-position: center;
    object-fit: cover;
    /* assombrir un peu */
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: overlay;

    .herobanner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        /* border: 1px solid red; */

        .TextHero {
            width: 55%;
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 1.5;
            color: white;
            text-align: center;
        }
        .ImageHero {
            width: 34%;
            height: 34%;
            animation: rotate 3s linear infinite;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .appName {
            color: ${({ theme }) => theme.appname};
            font-size: 2.5rem;
        }

        /* une animation qui fait tourner imgahero  */
        @keyframes rotate {
            /* rotate etape par etape */
            0% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(90deg);
            }
            50% {
                transform: rotate(180deg);
            }
            75% {
                transform: rotate(270deg);
            }
            100% {
                transform: rotate(360deg);
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
    }
`;
