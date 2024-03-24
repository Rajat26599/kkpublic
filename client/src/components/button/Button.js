import globalStyles from "../../data/constants/globalStyles"
import { MyButton } from "./styles"

const Button = (props) => {
    return (
        <MyButton bgcolor={props.bgcolor}>
            <strong>{props.children}</strong>
        </MyButton>
    )
}

Button.defaultProps = {
    bgcolor: globalStyles.colors.peach,
}

export default Button