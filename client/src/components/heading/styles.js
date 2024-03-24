import styled from "styled-components";

const getCommonHeadingStyle = (props) => (`
    color: ${props.color};
    font-family: MPlusRounded1c;
    font-weight: bolder;
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
export const Heading5 = styled.h5`
    ${props => getCommonHeadingStyle(props)}
`
export const Heading6 = styled.h6`
    ${props => getCommonHeadingStyle(props)}
`
