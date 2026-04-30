import Heading from '../../components/heading/Heading'
import { SideNavWrapper, Header, BrandLogo, Close, Categories, Category } from './styles'
import Logo from '../../assets/img/logo.jpg'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux-toolkit/authSlice'

const SideNav = (props) => {
    const { categories, showSideNav, setShowSideNav } = props
    const user = useSelector(state => state.authReducer)

    const sideNavRef = useRef(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()

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

    const handleCategoryClick = (path) => {
        navigate(path)
        setShowSideNav(false)
    }

    return (
        <SideNavWrapper show={showSideNav} ref={sideNavRef}>
            <Header>
                <BrandLogo src={Logo} onClick={() => navigate('/')}></BrandLogo>
                <Close onClick={() => setShowSideNav(false)}>&times;</Close>
            </Header>
            <Categories>
                {
                    categories.map((item, index) => (
                        <Category key={index} onClick={() => handleCategoryClick(item.path)}>
                            <Heading level='5'>{item.category}</Heading>
                        </Category>
                    ))
                }
                { user.loggedin && <Category onClick={() => dispatch(logout())}>
                        <Heading level='5'>Logout</Heading>
                    </Category>
                }
            </Categories>
        </SideNavWrapper>
    )
}

export default SideNav