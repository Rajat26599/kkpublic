import { AlertWrapper, MyAlert } from "./styles"

export const Alert = (props) => {
    return (
        <AlertWrapper>
            <MyAlert>{props.children}</MyAlert>
        </AlertWrapper>
    )
} 