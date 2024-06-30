import styled from "styled-components";

export const SideNavWrapper = styled.div`
    position: absolute;
    background: white;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    display: ${props => props.show ? 'block' : 'none'};
`

export const Close = styled.div`
    position: relative;
    right: 0;
    font-size: 3rem;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    padding-top: 0.1rem;
    margin: 0.5rem;

    &:active {
        background-color: skyblue;
    }
`

export const Categories = styled.ul`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    list-style: none;
`

export const Category = styled.li`
    text-align: center;
    padding: 1rem;
`