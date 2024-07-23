import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading"
import { PageNotFoundWrapper } from "./styles";

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <PageNotFoundWrapper>
            <Heading level='1'>Page Not Found...</Heading>
            <Button onClick={() => navigate(-1)}>Back</Button>
        </PageNotFoundWrapper>
    )
}

export default NotFound;