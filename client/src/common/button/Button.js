import { MyButton } from "./styles"

export const Button = (props) => {
    return (
        <MyButton
            onClick={props.onClick}
        >
            {props.children}
        </MyButton>
    )
}