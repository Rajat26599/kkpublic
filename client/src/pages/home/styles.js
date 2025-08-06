import { styled, css } from 'styled-components'
import globalStyles from '../../data/constants/globalStyles'
import { SubCardImg } from '../../components/subCard/styles'
import { FeatureCardWrapper } from '../../components/featureCard/styles'
import { spin } from '../../util/animations/spin'
import { moveUp } from '../../util/animations/moveUp'
import { fadeIn } from '../../util/animations/fadeIn'

export const HomeWrapper = styled.div`
    position: relative;
    overflow: hidden;
`

// BANNER

export const BannerWrapper = styled.div`
    padding: 0 ${globalStyles.spacing.desktopSideSpacing};
    height: 580px;

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        padding-left: ${globalStyles.spacing.laptopSideSpacing};
        padding-right: ${globalStyles.spacing.laptopSideSpacing};
        margin-top: 5rem;
        text-align: center;
    }

    @media screen and (max-width: ${globalStyles.devices.small}) {
        padding-left: ${globalStyles.spacing.mobileSideSpacing};
        padding-right: ${globalStyles.spacing.mobileSideSpacing};
        padding-top: 2rem;
        margin-bottom: 15rem;
        text-align: center;
    }
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

    @media screen and (min-width: ${globalStyles.devices.xlarge}) {
        height: 80vw;
        width: 80vw;
    }
`
export const BannerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        flex-direction: column-reverse;
    }
`
export const BannerContent = styled.div`
    animation: ${moveUp} 1s ease-in-out, ${fadeIn} 1s ease-in-out;

    @media screen and (min-width: ${globalStyles.devices.xlarge}) {
        max-width: 40vw;
    }
    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        width: 100vw;
        background: white;
        padding: ${globalStyles.spacing.laptopSideSpacing};
    }
    @media screen and (max-width: ${globalStyles.devices.small}) {
        width: 100vw;
        background: white;
        padding: 1rem;
    }
`

export const HeroImgWrapper = styled.div`
    height: 100%;
    display: grid;
    align-items: end;

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        margin-top: 4rem;
    }
`
export const HeroImg = styled.img`
    position: relative;
    height: 500px;
    width: auto;
    animation: ${moveUp} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
    z-index: -9999;

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        height: 250px;
    }
`

const commonSubCardStyling = css`
    position: relative;

    @media screen and (max-width: ${globalStyles.devices.small}) {
        position: static;
        display: inline-block;
        transform: scale(0.8);
        margin-top: 2rem;
    }
`

export const ProTeacherSubCard = styled.div`
    ${commonSubCardStyling}
    top: -40%;
    left: 40%;
    animation: ${fadeIn} 1s ease-in-out;

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        top: -93%;
        left: 4%;
    }

    @media screen and (max-width: ${globalStyles.devices.small}) {
        margin-right: 0.4rem;
    }
`
export const GamesSubCard = styled.div`
    ${commonSubCardStyling}
    top: -125%;
    left: 80%;

    & ${SubCardImg} {
        animation: ${spin(3)} 1s ease;
    }
`


// MAIN AREA

export const MainAreaWrapper = styled.div`
    position: relative;
`

// KEY FEATURES

export const KeyFeaturesWrapper = styled.div`
    background-color: ${globalStyles.colors.navyBlue};
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 100px ${globalStyles.spacing.desktopSideSpacing};

    @media screen and (max-width: ${globalStyles.devices.laptop}) {
        flex-direction: column;
        padding-left: ${globalStyles.spacing.laptopSideSpacing};
        padding-right: ${globalStyles.spacing.laptopSideSpacing};
        justify-content: center;
        text-align: center;
    }

    @media screen and (max-width: ${globalStyles.devices.small}) {
        flex-direction: column;
        padding-left: ${globalStyles.spacing.mobileSideSpacing};
        padding-right: ${globalStyles.spacing.mobileSideSpacing};
        justify-content: center;
        text-align: center;
    }
`
export const KeyFeaturesContent = styled.div`
    align-self: center;


    @media screen and (min-width: ${globalStyles.devices.xlarge}) {
        max-width: 40vw;
    }
    @media screen and (max-width: ${globalStyles.devices.small}) {
        width: 100%;
    }
`

export const PeachText = styled.span`
    color: ${globalStyles.colors.peach};
`

export const KeyFeatureCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 510px;

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

    
    @media screen and (min-width: ${globalStyles.devices.small}) and (max-width: ${globalStyles.devices.laptop}) {
        width: 500px;
        justify-content: center;
        margin: auto;
        margin-top: 4rem;
    }

    @media screen and (max-width: ${globalStyles.devices.small}) {
        flex-basis: 100%;
        justify-content: center;

        div {
            margin-bottom: 2rem;
            margin-left: 0;
        }
        div:first-child {
            margin-top: 4rem;
            margin-bottom: 2rem;
        }

        div:last-child {
            margin-top: 0;
        }
    }
`