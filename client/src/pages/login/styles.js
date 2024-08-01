import styled from "styled-components"
import globalStyles from "../../data/constants/globalStyles"
import { MyButton } from "../../components/button/styles"
import { CirclesWrapper } from "../../layouts/circles/styles"

export const LoginWrapper = styled.div`
    ${MyButton} {
        margin-top: 1rem;
    }

    ${CirclesWrapper} {
        @media screen and (max-width: ${globalStyles.devices.laptop}) {
            display: none;
        }
    }
`

export const Row = styled.div`
    display: flex;
    grid-column-gap: 30px;
`

export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 10px;
`