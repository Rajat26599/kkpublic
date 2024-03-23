import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";

export const MyButton = styled.button`
    background-color: ${props => props.bgcolor};
    border: 2px solid ${props => props.bgcolor};
    padding: 0.2rem 1rem;
    border-radius: 20px;
    min-width: 50px;
    color: ${props => props.bgcolor === globalStyles.colors.peach ? globalStyles.colors.white : globalStyles.colors.navyBlue}
`