import KeyFeatures from "./KeyFeatures"
import { MainAreaWrapper } from "./styles"
import YoutubeCarousel from "../../layouts/youtubeCarousel/YoutubeCarousel"

const MainArea = () => {
    return (
        <MainAreaWrapper>
            <KeyFeatures />
            <YoutubeCarousel />
        </MainAreaWrapper>
    )
}

export default MainArea