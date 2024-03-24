import Button from "../../components/button/Button"
import Heading from "../../components/heading/Heading"
import P from "../../components/p/P"
import globalStyles from "../../data/constants/globalStyles"
import { BannerWrapper, RightGraphic, BannerMain, BannerContent } from "./styles"

const Banner = () => {

    return (
        <BannerWrapper>
            <RightGraphic></RightGraphic>
            <BannerMain>
                <BannerContent>
                    <Heading level='1' color={globalStyles.colors.navyBlue}><strong>We Create Magic For Kids</strong></Heading>
                    <P color={globalStyles.colors.navyBlue}>Dream is often a child's first introduction to school. The learning library surplus of online resources. Hello new learners transition into the scholaristic world of ABCs and 123s.</P>
                    <Button>Book a visit</Button>
                </BannerContent>

            </BannerMain>
        </BannerWrapper>
    )
}

export default Banner