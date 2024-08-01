import { ActionButtons, CarouselWrapper, Dot, Dots } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid'

const Carousel = (props) => {
    const { selected, setSelected, len } = props

    const handleNext = () => {
        setSelected(selected === len-1 ? 0 : selected+1)
    }

    const handlePrev = () => {
        setSelected(selected === 0 ? len-1 : selected-1)
    }

    return (
        <CarouselWrapper>
            {props.children}
            <ActionButtons>
                <FontAwesomeIcon icon={faAngleLeft} size='3x' title='Previous' onClick={handlePrev} />
                <FontAwesomeIcon icon={faAngleRight} size='3x' title='Next' onClick={handleNext} />
            </ActionButtons>
            <Dots>
                {
                    [...Array(len)].map((item, index) => (
                        <Dot key={index} bgcolor={selected === index ? 'white' : 'transparent'} onClick={() => setSelected(index)}></Dot>
                    ))
                }
            </Dots>
        </CarouselWrapper>
    )
}

export default Carousel