import globalStyles from "../../data/constants/globalStyles"
import Heading from "../heading/Heading"
import { MySubCard, SubCardImg } from "./styles"

const SubCard = (props) => {
    return (
        <MySubCard>
            <SubCardImg src={props.imgUrl}></SubCardImg>
            <Heading level='3' color={globalStyles.colors.navyBlue}>{props.title}</Heading>
        </MySubCard>
    )
}

export default SubCard