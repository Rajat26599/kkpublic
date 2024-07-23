import { useNavigate } from "react-router-dom"
import Heading from "../../components/heading/Heading"
import { Li, QuickLinksWrapper, Ul } from "./styles"
import globalStyles from "../../data/constants/globalStyles";

const QuickLinks = () => {
    const navigate = useNavigate();
    return (
        <QuickLinksWrapper>
            <Heading level='3' color={globalStyles.colors.navyBlue}>Quick Links</Heading>
            <Ul>
                <Li onClick={() => navigate('login')}>Login</Li>
            </Ul>
        </QuickLinksWrapper>
    )
}

export default QuickLinks