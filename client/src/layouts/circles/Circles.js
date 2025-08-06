import Circle from "../../components/circle/Circle"
import { CirclesWrapper } from "./styles"

const Circles = (props) => {
    const { data } = props

    return (
        <CirclesWrapper>
            {
                data.map((item, index) => (
                    <Circle 
                        key={index}
                        radius={item.radius}
                        bgcolor={item.bgcolor}
                        position={item.position}
                        animationPath={item.animationPath}
                    />
                ))
            }
        </CirclesWrapper>   
    )
}

Circles.defaultProps = {
    data: []
}

export default Circles