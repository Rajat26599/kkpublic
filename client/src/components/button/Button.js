import globalStyles from "../../data/constants/globalStyles"
import { MyButton } from "./styles"

const Button = (props) => {
    const { bgcolor, onClick } = props
    return (
        <MyButton bgcolor={bgcolor} onClick={onClick}>
            <strong>{props.children}</strong>
        </MyButton>
    )
}

Button.defaultProps = {
    bgcolor: globalStyles.colors.peach,
}

export default Button