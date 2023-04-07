import './home.css';
import Header from '../header/Header';
import HeaderBase from '../headerBase/HeaderBase';
// import Navbar from '../navbar/Navbar';
import Testimonial from '../testimonial/Testimonial';
import Gallery from '../gallery/Gallery';

const Home = () => {
    return (
        <div id='home'>
            {/* <Navbar /> */}
            <Header />
            <HeaderBase />
            <Testimonial />
            <Gallery />
        </div>
    )
}

export default Home;