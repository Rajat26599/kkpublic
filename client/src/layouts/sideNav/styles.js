import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";

export const SideNavWrapper = styled.div`
    position: absolute;
    background: white;
    height: 100%;
    width: 85vw;
    z-index: 9999;
    display: ${props => props.show ? 'block' : 'none'};
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.3rem;
`

export const BrandLogo = styled.img`
    height: 50px;
    width: 50px;
    margin-left: 1rem;
`

export const Close = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    padding: 0.3rem 1rem;
    padding-top: 0.1rem;
    color: ${globalStyles.colors.navyBlue};

    &:active {
        background-color: skyblue;
    }
`

export const Categories = styled.ul`
    margin-top: 2rem;
    list-style: none;
    padding-left: 0;
    cursor: pointer;
`

export const Category = styled.li`
    padding: ${globalStyles.spacing.mobileSideSpacing};
    color: ${globalStyles.colors.navyBlue};

    &:hover {
        background-color: ${globalStyles.colors.peach};
        color: ${globalStyles.colors.white};
    }
`