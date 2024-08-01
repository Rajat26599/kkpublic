import styled from "styled-components"
import globalStyles from "../../data/constants/globalStyles"
import { MyP } from "../../components/p/styles"

export const FooterWrapper = styled.div`
    position: relative;
    background-color: ${globalStyles.colors.extraLightPeach};
    width: 100%;
`
export const MyFooter = styled.div`
    display: flex;

    @media screen and (max-width: ${globalStyles.devices.tablet}) {
        flex-direction: column;
    }
`
export const FooterImg = styled.img`
    width: 50%;

    @media screen and (max-width: ${globalStyles.devices.tablet}) {
        display: none;
    }
`
export const FooterContent = styled.div`
    width: 50%;
    padding: 5rem ${globalStyles.spacing.desktopSideSpacing};

    @media screen and (max-width: ${globalStyles.devices.tablet}) {
        width: 100%;
        padding-left: ${globalStyles.spacing.mobileSideSpacing};
        padding-right: ${globalStyles.spacing.mobileSideSpacing};
        text-align: center;
    }
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