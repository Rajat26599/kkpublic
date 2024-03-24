import styled from "styled-components";

export const MySubCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 150px;
    border: 1px solid white;
    border-radius: 2rem;
    background-image: linear-gradient(-45deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,1) 100%);
    padding: 1rem;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const SubCardImg = styled.img`
    height: 100px;
    width: auto;
`