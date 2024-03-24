import styled from 'styled-components'
import globalStyles from '../../data/constants/globalStyles'

export const HomeWrapper = styled.div``

// BANNER

export const BannerWrapper = styled.div`
    padding: 0 ${globalStyles.spacing.desktopSideSpacing};
    height: 80vh;
`

export const BannerMain = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const BannerContent = styled.div``


export const RightGraphic = styled.div`
    position: absolute;
    left: 50%;
    top: -200px;
    height: 1000px;
    width: 1000px;
    border-radius: 120px;
    background: ${globalStyles.colors.peach};
    transform: rotate(45deg) skew(10deg, 10deg);
    z-index: -9;
`

// MAIN AREA

export const MainAreaWrapper = styled.div``

// KEY FEATURES

export const KeyFeaturesWrapper = styled.div`
    background-color: ${globalStyles.colors.navyBlue};
    display: flex;
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
`