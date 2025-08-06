import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";
import { Heading6 } from "../../components/heading/styles";

export const NavbarWrapper = styled.div`
    position: fixed;
    display: flex;
    padding: 0 ${globalStyles.spacing.desktopSideSpacing};
    align-items: center;
    z-index: 999;
    background-color: ${props => props.bgcolor};
    width: 100%;
    height: ${globalStyles.other.navbarHeight};
    transition: background-color 0.5s ease-in-out;
    box-shadow: ${props => props.bgcolor === 'transparent' ? 'unset' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'};

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        padding: 0 ${globalStyles.spacing.laptopSideSpacing};
        justify-content: space-between;
    }
    @media screen and (max-width: ${globalStyles.devices.small}) {
        padding: 0 ${globalStyles.spacing.mobileSideSpacing};
        justify-content: space-between;
    }
`

export const BrandLogo = styled.img`
    height: 50px;
    width: 50px;
`

export const Categories = styled.ul`
    list-style-type: none;
    margin: unset;
`

export const Category = styled.li`
    display: inline-block;
    margin: 0 1rem;
    padding: 0.4rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    color: ${globalStyles.colors.navyBlue};

    &:hover {
        background-color: ${globalStyles.colors.peach};
        color: ${globalStyles.colors.white};
    }

    & ${Heading6} {
        margin: 0;
    }
`

export const Hamburger = styled.div`
    padding: 3px;

    div {
        background: ${globalStyles.colors.navyBlue};
        height: 3px;
        margin: 5px 5px 5px auto;
    }
    div:nth-of-type(1) {
        width: 20px;
    }
    div:nth-of-type(2) {
        width: 25px;
    }
    div:nth-of-type(3) {
        width: 16px;
    }
`