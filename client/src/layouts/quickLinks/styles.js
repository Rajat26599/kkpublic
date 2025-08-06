import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";

export const QuickLinksWrapper = styled.div``

export const Ul = styled.ul`
    padding-inline-start: 0;
`

export const Li = styled.li`
    color: ${globalStyles.colors.navyBlue};
    cursor: pointer;
    list-style-type: none;

    &:hover {
        color: ${globalStyles.colors.peach}; 
    } 
`