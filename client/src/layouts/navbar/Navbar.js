import { NavbarWrapper, BrandLogo, Categories, Category, Hamburger } from "./styles"
import Logo from '../../assets/img/logo.jpg'
import { useEffect, useState } from "react";
import globalStyles from "../../data/constants/globalStyles";
import Heading from "../../components/heading/Heading";
import SideNav from "../sideNav/sideNav";

const Navbar = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);
    const [showSideNav, setShowSideNav] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const categories = ['Home', 'About us', 'Programs', 'Admission']

    const handleScroll = () => {
        const newScrollYPosition = window.pageYOffset;
        setScrollYPosition(newScrollYPosition);
    };

    useEffect(() => {
        const handleScreenWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScreenWidth)   
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScreenWidth)
        };
    }, []);

    return (
        <>
        <SideNav categories={categories} showSideNav={showSideNav} setShowSideNav={setShowSideNav} />        
        <NavbarWrapper bgcolor={scrollYPosition >= window.innerHeight-100 ? globalStyles.colors.white : 'transparent'}>
            <BrandLogo src={Logo}></BrandLogo>
            {
                screenWidth > parseInt(globalStyles.devices.small.substring(0, globalStyles.devices.small.length-2)) ?
                    <Categories>
                        {
                            categories.map((item, index) => (
                                <Category key={index}>
                                    <Heading level='6'>{item}</Heading>
                                </Category>
                            ))
                        }
                    </Categories>
                :
                    <Hamburger onClick={() => setShowSideNav(true)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Hamburger>
            }
        </NavbarWrapper>
        </>
    )
}

export default Navbar