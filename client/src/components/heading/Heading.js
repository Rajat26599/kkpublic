const { Heading1, Heading2, Heading3, Heading4 } = require("./styles")

const Heading = (props) => {
    const getHeading = () => {
        switch(props.level) {
            case '1':
                return <Heading1 color={props.color}>{props.children}</Heading1>
            case '2':
                return <Heading2 color={props.color}>{props.children}</Heading2>
            case '3':
                return <Heading3 color={props.color}>{props.children}</Heading3>
            case '4':
                return <Heading4 color={props.color}>{props.children}</Heading4>
            default:
                
        }
    }
    
    return (
        <>
            {getHeading()}
        </>
    )
}

export default Heading