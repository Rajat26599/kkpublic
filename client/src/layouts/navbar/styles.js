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
    height: 100px;
    transition: background-color 0.5s ease-in-out;
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