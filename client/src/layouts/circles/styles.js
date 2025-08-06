
import styled from "styled-components"
import globalStyles from "../../data/constants/globalStyles"

export const CirclesWrapper = styled.div`
    position: absolute;
    width: 100vw;
    z-index: 9;

    @media screen and (max-width: ${globalStyles.devices.small}) {
        div:nth-of-type(1) {
            left: 60%;
        }
    }
`