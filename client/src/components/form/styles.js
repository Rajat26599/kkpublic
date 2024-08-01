import styled from 'styled-components'
import globalStyle from '../../data/constants/globalStyles'
import { Heading1 } from '../heading/styles'

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;

    ${Heading1} {
        margin-bottom: 2rem;
        text-align: center;
        span {
            color: ${globalStyle.colors.peach};
        }
    }
    
    @media screen and (min-width: ${globalStyle.devices.laptop}) {
        background-color: ${globalStyle.colors.extraLightPeach};
    }
`
export const MyForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 20px;
    width: ${props => props.width};
    background-color: white;
    border-radius: 30px;
    padding: ${globalStyle.spacing.form.desktopSideSpacing};

    @media screen and (max-width: ${globalStyle.devices.laptop}) {
        width: 100%;
        padding: ${globalStyle.spacing.form.laptopSideSpacing};
    }

    @media screen and (max-width: ${globalStyle.devices.small}) {
        width: 100%;
        padding: ${globalStyle.spacing.form.mobileSideSpacing};
    }
`