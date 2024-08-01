import styled from "styled-components";

export const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    iframe {
        width: 100vw;
        height: 500px;
    }
`

export const ActionButtons = styled.div`
    position: absolute;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    color: white;

    &:hover {
        cursor: pointer;
    }
`

export const Dots = styled.div`
    display: flex;
    position: absolute;
    bottom: 10%;
`

export const Dot = styled.div`
    height: 15px;
    width: 15px;
    margin: 10px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: ${props => props.bgcolor};

    &:hover {
        cursor: pointer;
    }
`