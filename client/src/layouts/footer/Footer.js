import { CopyrightWrapper, FooterContent, FooterImg, FooterWrapper, MyFooter } from "./styles"
import GirlWithCamera from '../../assets/img/girl-with-camera.webp'
import Heading from "../../components/heading/Heading"
import P from "../../components/p/P"
import globalStyles from "../../data/constants/globalStyles"
import QuickLinks from "../quickLinks/QuickLinks"

const Footer = (props) => {
    return (
        <FooterWrapper>
            <MyFooter>
                <FooterImg src={GirlWithCamera}></FooterImg>
                <FooterContent>
                    <QuickLinks /><br />
                    <Heading level='3' color={globalStyles.colors.navyBlue}>K. K. Public School</Heading>
                    <P color={globalStyles.colors.navyBlue}>
                        In-front of Punjab National Bank, <br />
                        Bara Bazar, Shikohabad - 283135, <br />
                        Uttar Pradesh. India
                    </P>
                </FooterContent>

                {props.children}
            </MyFooter>
            <CopyrightWrapper>
                <P color={globalStyles.colors.white}>Copyright &copy; {(new Date()).getFullYear()} - All rights reserved</P>
            </CopyrightWrapper>
        </FooterWrapper>
    )
}

export default Footer