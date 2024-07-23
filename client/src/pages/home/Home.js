import Banner from "./Banner"
import MainArea from "./MainArea"

import { HomeWrapper } from "./styles"
import Circles from "./Circles"
import Footer from "../../layouts/footer/Footer"

const Home = () => {
    return (
        <HomeWrapper>
            <Circles />
            <Banner />
            <MainArea />
            <Footer />
        </HomeWrapper>
    )
}

export default Home