import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";

export const FeatureCardWrapper = styled.div`
    background-color: ${props => props.bgcolor};
    height: 220px;
    width: 220px;
    border-radius: 20px;
    padding: 20px;

    @media screen and (max-width: ${globalStyles.devices.small}) {
        width: 100%;
        height: 100%;
    }
`
export const FeatureCardImg = styled.img`
    margin-top: -50px;
    margin-left: -10px;
    height: 100px;
    width: auto;
`