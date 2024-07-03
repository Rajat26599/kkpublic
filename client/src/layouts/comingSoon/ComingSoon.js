import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading"
import { ComingSoonWrapper } from "./styles";

const ComingSoon = () => {
    const navigate = useNavigate()

    return (
        <ComingSoonWrapper>
            <Heading level='1'>Coming Soon...</Heading>
            <Button onClick={() => navigate(-1)}>Back</Button>
        </ComingSoonWrapper>
    )
}

export default ComingSoon;