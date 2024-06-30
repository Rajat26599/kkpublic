import Heading from '../../components/heading/Heading'
import { SideNavWrapper, Close, Categories, Category } from './styles'

const SideNav = (props) => {
    const { categories, showSideNav, setShowSideNav } = props

    return (
        <SideNavWrapper show={showSideNav}>
            <Close onClick={() => setShowSideNav(false)}>&times;</Close>
            <Categories>
                {
                    categories.map((item, index) => (
                        <Category key={index}>
                            <Heading level='6'>{item}</Heading>
                        </Category>
                    ))
                }
            </Categories>
        </SideNavWrapper>
    )
}

export default SideNav