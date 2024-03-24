import { NavbarWrapper, BrandLogo, Categories, Category } from "./styles"
import Logo from '../../assets/logo.jpg'
import { useEffect, useState } from "react";
import globalStyles from "../../data/constants/globalStyles";

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

    // Now the vertical position is available with `scrollYPosition`
    console.log(scrollYPosition)

    return (
        <NavbarWrapper bgcolor={scrollYPosition >= window.innerHeight-100 ? globalStyles.colors.white : 'transparent'}>
            <BrandLogo src={Logo}></BrandLogo>
            <Categories>
                {
                    categories.map((item, index) => (
                        <Category key={index}>{item}</Category>
                    ))
                }
            </Categories>
        </NavbarWrapper>
    )
}

export default Navbar