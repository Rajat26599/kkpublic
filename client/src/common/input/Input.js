import { MyInput, InputTextWrapper, Label } from "./styles"

export const Input = (props) => {
    return (
        <InputTextWrapper>
            <Label
                htmlFor={props.name}
            >{props.label}</Label>
            <MyInput
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            ></MyInput>
        </InputTextWrapper>
    )
}