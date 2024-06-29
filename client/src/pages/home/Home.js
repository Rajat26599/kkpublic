import Banner from "./Banner"
import MainArea from "./MainArea"
import Navbar from "../../layouts/navbar/Navbar"

import { HomeWrapper } from "./styles"
import Circles from "./Circles"
import Footer from "../../layouts/footer/Footer"

const Home = () => {
    return (
        <HomeWrapper>
            <Circles />
            <Navbar />
            <Banner />
            <MainArea />
            <Footer />
        </HomeWrapper>
    )
}

export default Home