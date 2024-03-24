import styled from "styled-components"
import globalStyles from "../../data/constants/globalStyles"
import { MyP } from "../../components/p/styles"

export const FooterWrapper = styled.div`
    position: relative;
    z-index: -999;
    background-color: ${globalStyles.colors.extraLightPeach};
    width: 100%;
`
export const MyFooter = styled.div`
    display: flex;
`
export const FooterImg = styled.img`
    width: 50%;
`
export const FooterContent = styled.div`
    width: 50%;
    padding: 5rem;
`
export const CopyrightWrapper = styled.div`
    background-color: ${globalStyles.colors.navyBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    & ${MyP} {
        margin: 0;
    }
`