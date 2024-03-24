import Banner from "./Banner"
import MainArea from "./MainArea"
import Navbar from "../../layouts/navbar/Navbar"

import { HomeWrapper } from "./styles"
import Circles from "./Circles"

const Home = () => {
    return (
        <HomeWrapper>
            <Circles />
            <Navbar />
            <Banner />
            <MainArea />
        </HomeWrapper>
    )
}

export default Home