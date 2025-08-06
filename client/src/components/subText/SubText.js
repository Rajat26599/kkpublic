import { MySubText } from "./styles"

const SubText = (props) => {
    return (
        <MySubText color={props.color}>{props.children}</MySubText>
    )
}

export default SubText