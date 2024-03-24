const { default: KeyFeatures } = require("./KeyFeatures")
const { MainAreaWrapper } = require("./styles")

const MainArea = () => {
    return (
        <MainAreaWrapper>
            <KeyFeatures />
        </MainAreaWrapper>
    )
}

export default MainArea