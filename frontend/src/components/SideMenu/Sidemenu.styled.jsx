
import { styled } from "styled-components";


export const StyledSideMenu = styled.div`
    background: ${({ theme }) => theme.text};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.background};
    position: absolute;
    /* margin-top: 2%; */
    top: 3%;
    left: 0%;
    height: 90vh;
    min-height: 50vh;
    width: 15vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    /* box shadow selon la theme */
    box-shadow: 0 0 10px 2px ${({ theme }) => theme.text};

    .userInfos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 20%;
        margin-top: 5%;
        h3 {
            margin-top: 8%;
            font-size: 1.5rem;
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 50%;
        width: 75%;
        margin-top: 20%;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 5%;
            border-radius: 5px;
            font-size: 1.3rem;
            transition: all 0.2s ease-in-out;
            &:hover {
                background: ${({ theme }) => theme.bgSideMenu};
            }
            a {
                text-decoration: none;
                color: ${({ theme }) => theme.background};
                margin-left: 5%;
            }

            .activeLink {
                color: ${({ theme }) => theme.activeLink};
            }
        }
    }
`;
