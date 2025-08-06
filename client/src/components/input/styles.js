import styled from "styled-components";
import globalStyles from "../../data/constants/globalStyles";
import { MySubText } from "../subText/styles";

export const InputWrapper = styled.div`
    grid-row-gap: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    ${MySubText} {
        color: red;
    }
`

export const Label = styled.label`
    font-family: MPlusRounded1c;
    font-weight: 900;
    color: ${globalStyles.colors.navyBlue};
`

export const MyInput = styled.input`
    width: 100%;
    padding: 0.4rem 1rem;
    border: 1px solid ${props => props.haserror ? 'red' : 'black'};
    outline-color: ${props => props.haserror ? 'red' : 'black'};
    border-radius: 20px;
`

export const MyInputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
`

export const Icon = styled.span`
    position: absolute;
    right: 10px;
`