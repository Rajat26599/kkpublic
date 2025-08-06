import globalStyles from "../../data/constants/globalStyles"
import { FeatureCardWrapper, FeatureCardImg } from "./styles"

const FeatureCard = (props) => {
    return (
        <FeatureCardWrapper bgcolor={props.bgcolor}>
            {props.imgUrl && <FeatureCardImg src={props.imgUrl}></FeatureCardImg>}
            {props.children}
        </FeatureCardWrapper>
    )
}

FeatureCard.defaultProps = {
    bgcolor: globalStyles.colors.white,
}

export default FeatureCard