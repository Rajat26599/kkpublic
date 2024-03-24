import globalStyles from "../../data/constants/globalStyles"
import { FeatureCardWrapper } from "./styles"

const FeatureCard = (props) => {
    return (
        <FeatureCardWrapper bgcolor={props.bgcolor}>
            {props.children}
        </FeatureCardWrapper>
    )
}

FeatureCard.defaultProps = {
    bgcolor: globalStyles.colors.white,
}

export default FeatureCard