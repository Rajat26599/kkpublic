import Button from "../../components/button/Button"
import Heading from "../../components/heading/Heading"
import P from "../../components/p/P"
import globalStyles from "../../data/constants/globalStyles"
import { BannerWrapper, RightGraphic, BannerMain, BannerContent, HeroImg, HeroImgWrapper } from "./styles"
import HeroImage from '../../assets/img/hero-img.webp'
import Teacher from '../../assets/vectors/teacher.png'
import Basketball from '../../assets/vectors/basketball.png'
import SubCard from "../../components/subCard/SubCard"
import { ProTeacherSubCard } from "./styles"
import { GamesSubCard } from "./styles"

const Banner = () => {

    return (
        <BannerWrapper>
            <RightGraphic></RightGraphic>
            <BannerMain>
                <BannerContent>
                    <P color={globalStyles.colors.navyBlue}>Here in</P>
                    <Heading level='1' color={globalStyles.colors.peach}>K. K. Public School</Heading>
                    <Heading level='4' color={globalStyles.colors.navyBlue}>We Create Magic For Kids</Heading>
                    <P color={globalStyles.colors.navyBlue}>Dream is often a child's first introduction to school. The learning library surplus of online resources. Hello new learners transition into the scholaristic world of ABCs and 123s.</P>
                    <Button>Book a visit</Button>
                </BannerContent>
                <HeroImgWrapper>
                    <HeroImg src={HeroImage}></HeroImg>
                </HeroImgWrapper>
            </BannerMain>
            
            <ProTeacherSubCard>
                <SubCard
                    imgUrl={Teacher}
                    title='Pro Teachers'
                />
            </ProTeacherSubCard>
            <GamesSubCard>
                <SubCard
                    imgUrl={Basketball}
                    title='Funny Games'
                />
            </GamesSubCard>
        </BannerWrapper>
    )
}

export default Banner