import { NavbarWrapper, BrandLogo, Categories, Category, Hamburger } from "./styles"
import Logo from '../../assets/img/logo.jpg'
import { useEffect, useState } from "react";
import globalStyles from "../../data/constants/globalStyles";
import Heading from "../../components/heading/Heading";
import SideNav from "../sideNav/sideNav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux-toolkit/authSlice";

const Navbar = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0)
    const [showSideNav, setShowSideNav] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const user = useSelector(state => state.authReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const categories = [
        {
            category: 'Home',
            path: '/'
        }, 
        {
            category: 'About us',
            path: 'comingsoon'
        }, 
        {
            category: 'Programs',
            path: 'comingsoon'
        }, 
        {
            category: 'Admission',
            path: 'admission'
        }]

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
            <BrandLogo src={Logo} onClick={() => navigate('/')}></BrandLogo>
            {
                screenWidth > parseInt(globalStyles.devices.laptop.substring(0, globalStyles.devices.laptop.length-2)) ?
                    <Categories>
                        <div>
                            {
                                categories.map((item, index) => (
                                    <Category key={index} onClick={() => navigate(item.path)}>
                                        <Heading level='6'>{item.category}</Heading>
                                    </Category>
                                ))
                            }
                        </div>
                        {
                            user.loggedin && <div>
                                <Category onClick={() => dispatch(logout())}>
                                    <Heading level='6'>Logout</Heading>
                                </Category>
                            </div>
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