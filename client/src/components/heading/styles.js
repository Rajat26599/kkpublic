import styled from "styled-components";

const getCommonHeadingStyle = (props) => (`
    color: ${props.color};
`)

export const Heading1 = styled.h1`
    ${props => getCommonHeadingStyle(props)}
`
export const Heading2 = styled.h2`
    ${props => getCommonHeadingStyle(props)}
`
export const Heading3 = styled.h3`
    ${props => getCommonHeadingStyle(props)}
`
export const Heading4 = styled.h4`
    ${props => getCommonHeadingStyle(props)}
`
