import globalStyles from "../../data/constants/globalStyles"
import { MyButton } from "./styles"

const Button = (props) => {
    const { bgcolor, onClick, type } = props
    return (
        <MyButton bgcolor={bgcolor} onClick={onClick} type={type}>
            <strong>{props.children}</strong>
        </MyButton>
    )
}

Button.defaultProps = {
    bgcolor: globalStyles.colors.peach,
    type: 'button'
}

export default Button