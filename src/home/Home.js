import './home.css';
import Header from '../header/Header';
import HeaderBase from '../headerBase/HeaderBase';
// import Navbar from '../navbar/Navbar';
import Testimonial from '../testimonial/Testimonial';
import Gallery from '../gallery/Gallery';
import Footer from '../footer/Footer';
// import Map from '../utils/Map';

const Home = () => {
    return (
        <div id='home'>
            {/* <Navbar /> */}
            <Header />
            <HeaderBase />
            <Testimonial />
            <Gallery />
            <Footer />
            {/* <Map /> */}
        </div>
    )
}

export default Home;