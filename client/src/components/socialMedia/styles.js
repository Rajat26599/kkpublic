import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";

export const SocialMediaWrapper = styled.div``

export const Icon = styled.a`
    margin-left: 20px;
    color: ${globalStyles.colors.navyBlue};

    &:nth-of-type(1) {
        margin-left: 0;
    }
    
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    
`