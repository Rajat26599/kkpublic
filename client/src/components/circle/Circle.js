import globalStyles from "../../data/constants/globalStyles"
import { MyCircle } from "./styles"

const Circle = (props) => {
    return (
        <MyCircle radius={props.radius} bgcolor={props.bgcolor} position={props.position} animationPath={props.animationPath}></MyCircle>
    )
}

Circle.defaultProps = {
    radius: '20px',
    bgcolor: globalStyles.colors.navyBlue,
    position: {x: '10px', y: '10px'},
    animationPath: 1
}

export default Circle
