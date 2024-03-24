import { NavbarWrapper, BrandLogo, Categories, Category } from "./styles"
import Logo from '../../assets/img/logo.jpg'
import { useEffect, useState } from "react";
import globalStyles from "../../data/constants/globalStyles";
import Heading from "../../components/heading/Heading";

const Navbar = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const categories = ['Home', 'About us', 'Programs', 'Admission']

    const handleScroll = () => {
        const newScrollYPosition = window.pageYOffset;
        setScrollYPosition(newScrollYPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavbarWrapper bgcolor={scrollYPosition >= window.innerHeight-100 ? globalStyles.colors.white : 'transparent'}>
            <BrandLogo src={Logo}></BrandLogo>
            <Categories>
                {
                    categories.map((item, index) => (
                        <Category key={index}>
                            <Heading level='6'>{item}</Heading>
                        </Category>
                    ))
                }
            </Categories>
        </NavbarWrapper>
    )
}

export default Navbar