import { FormWrapper, MyForm } from "./styles"
import Heading from '../heading/Heading'

const Form = (props) => {
    const { heading, width } = props

    const getHeading = () => {
        const headingArr = heading.split(' ')
        const len = headingArr.length
        const heading1 = headingArr.slice(0, len/2)
        const heading2 = headingArr.slice(len/2, len)
        return (
            <Heading level='1'>
                { heading1 }
                <span>{ heading2 }</span>
            </Heading>
        )
    }

    return (
        <FormWrapper>
            { getHeading() }
            <MyForm width={width}>
                {props.children}
            </MyForm>
        </FormWrapper>
    )
}

Form.defaultProps = {
    width: '80%',
}

export default Form