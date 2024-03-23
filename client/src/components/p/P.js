import { MyP } from "./styles"

const P = (props) => {
    return (
        <MyP color={props.color}>{props.children}</MyP>
    )
}

export default P