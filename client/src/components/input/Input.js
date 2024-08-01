import { useEffect, useState } from "react"
import SubText from "../subText/SubText"
import { InputWrapper, Label, MyInput, MyInputWrapper, Icon } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-regular'

const Input = (props) => {
    const { label, type, value, name, onChange, maxLength, minLength, error, onBlur, checked, showEye } = props

    const [ show, setShow ] = useState(false)

    const getType = () => {
        if(showEye) {
            return show ? 'text' : 'password'
        } else {
            return type;
        }
    }
    
    useEffect(() => {
        const toggleShow = () => {
            setShow(!show)
        }
        let icon  = document.getElementById('icon')
        icon.addEventListener('click', toggleShow)
        return () => icon.removeEventListener('click', toggleShow)
    }, [show])

    return (
        <InputWrapper>
            <Label>{label}</Label>

            <MyInputWrapper>            
                <MyInput
                    id='input'
                    name={name} 
                    type={getType()} 
                    value={value} 
                    haserror={error !== ''} 
                    minLength={minLength}
                    maxLength={maxLength}
                    checked={checked} 
                    onChange={onChange} 
                    onBlur={onBlur}
                    ></MyInput>
                { showEye && <Icon id='icon'>{show ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</Icon> }
            </MyInputWrapper>
            <SubText>{error}</SubText>
        </InputWrapper>
    )
}

Input.defaultProps = {
    error: '',
    showEye: false,
}

export default Input