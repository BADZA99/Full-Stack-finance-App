import { styled } from "styled-components";


export const StyledCreditCard = styled.div`
width: 45%;
height: 100%;
/* background: ${({ theme }) => theme.background};
 */
background-color: red;
border-radius: 10px;
/* box shadow en fonction du theme */
box-shadow: 0 0 10px 10px ${({ theme }) => theme.background};

`;