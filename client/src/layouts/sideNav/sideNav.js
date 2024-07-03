import Heading from '../../components/heading/Heading'
import { SideNavWrapper, Header, BrandLogo, Close, Categories, Category } from './styles'
import Logo from '../../assets/img/logo.jpg'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SideNav = (props) => {
    const { categories, showSideNav, setShowSideNav } = props
    const sideNavRef = useRef(null)

    const navigate = useNavigate();

    // Close sideNav on outside click
    useEffect(() => {
        const outsideClickListener = (e) => {
            if(showSideNav && !sideNavRef.current.contains(e.target)) {
                setShowSideNav(false)
            }
        }
        if(showSideNav) {
            setTimeout(() => window.addEventListener('click', outsideClickListener), 0)
        }
        return () => {
            window.removeEventListener('click', outsideClickListener)
        }
    }, [showSideNav, setShowSideNav])

    return (
        <SideNavWrapper show={showSideNav} ref={sideNavRef}>
            <Header>
                <BrandLogo src={Logo}></BrandLogo>
                <Close onClick={() => setShowSideNav(false)}>&times;</Close>
            </Header>
            <Categories>
                {
                    categories.map((item, index) => (
                        <Category key={index} onClick={() => navigate('/comingsoon')}>
                            <Heading level='5'>{item}</Heading>
                        </Category>
                    ))
                }
            </Categories>
        </SideNavWrapper>
    )
}

export default SideNav