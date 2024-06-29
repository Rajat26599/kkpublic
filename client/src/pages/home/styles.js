import styled from 'styled-components'
import globalStyles from '../../data/constants/globalStyles'
import { SubCardImg } from '../../components/subCard/styles'
import { FeatureCardWrapper } from '../../components/featureCard/styles'
import { spin } from '../../util/animations/spin'
import { moveUp } from '../../util/animations/moveUp'
import { fadeIn } from '../../util/animations/fadeIn'

export const HomeWrapper = styled.div``

// BANNER

export const BannerWrapper = styled.div`
    padding: 0 ${globalStyles.spacing.desktopSideSpacing};
    height: 90vh;
`
export const RightGraphic = styled.div`
    position: absolute;
    left: 50%;
    top: -200px;
    height: 1000px;
    width: 1000px;
    border-radius: 120px;
    background: ${globalStyles.colors.peach};
    transform: rotate(45deg) skew(10deg, 10deg);
    z-index: -999999;
`
export const BannerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const BannerContent = styled.div`
    animation: ${moveUp} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
`

export const HeroImgWrapper = styled.div`
    height: 100%;
    display: grid;
    align-items: end;
`
export const HeroImg = styled.img`
    position: relative;
    height: 500px;
    width: auto;
    animation: ${moveUp} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
    z-index: -9999;
`
export const ProTeacherSubCard = styled.div`
    position: relative;
    top: -40%;
    left: 40%;
    animation: ${fadeIn} 1s ease-in-out;
`
export const GamesSubCard = styled.div`
    position: relative;
    top: -125%;
    left: 80%;

    & ${SubCardImg} {
        animation: ${spin(3)} 1s ease;
    }
`


// MAIN AREA

export const MainAreaWrapper = styled.div`
    position: relative;
    z-index: -999;
`

// KEY FEATURES

export const KeyFeaturesWrapper = styled.div`
    background-color: ${globalStyles.colors.navyBlue};
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 100px ${globalStyles.spacing.desktopSideSpacing};
`
export const KeyFeaturesContent = styled.div`
    width: 50%;
    align-self: center;
`

export const PeachText = styled.span`
    color: ${globalStyles.colors.peach};
`

export const KeyFeatureCards = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    div {
        margin-bottom: 1rem;
        margin-left: 1.5rem;
    }

    div:first-child {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    div:last-child {
        margin-top: -2rem;
    }

    & ${FeatureCardWrapper}:nth-child(1) {
        animation: ${fadeIn} 1s 1s ease-in-out;
    }
    & ${FeatureCardWrapper}:nth-child(2) {
        animation: ${fadeIn} 1s 1.5s ease-in-out;
    }
    & ${FeatureCardWrapper}:nth-child(3) {
        animation: ${fadeIn} 1s 1.25s ease-in-out;
    }
    & ${FeatureCardWrapper}:nth-child(4) {
        animation: ${fadeIn} 1s 1.75s ease-in-out;
    }
`

// Circles

export const CirclesWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100vw;
    background: transparent;
    z-index: -99;
`