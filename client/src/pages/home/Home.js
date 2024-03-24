import Banner from "./Banner"
import MainArea from "./MainArea"
import Navbar from "../../layouts/navbar/Navbar"

import { HomeWrapper } from "./styles"

const Home = () => {
    return (
        <HomeWrapper>
            <Navbar />
            <Banner />
            <MainArea />
        </HomeWrapper>
    )
}

export default Home