import Button from "../../components/button/Button"
import FeatureCard from "../../components/featureCard/FeatureCard"
import Heading from "../../components/heading/Heading"
import P from "../../components/p/P"
import globalStyles from "../../data/constants/globalStyles"
import HappyBoy from '../../assets/vectors/happy-boy.png'
import Dices from '../../assets/vectors/dices.png'
import Certificate from '../../assets/vectors/certificate.png'
import Lock from '../../assets/vectors/lock.png'

import { KeyFeaturesWrapper, KeyFeaturesContent, PeachText, KeyFeatureCards } from "./styles"

const KeyFeatures = () => {
    const data = [
        {
            title: 'Home-like Environment',
            text: 'We create home-like environment for children.',
            imgUrl: HappyBoy,
        },
        {
            title: 'Safety and Security',
            text: 'We create home-like environment for children.',
            imgUrl: Lock,
        },
        {
            title: 'Quality Educators',
            text: 'We create home-like environment for children.',
            imgUrl: Certificate,
        },
        {
            title: 'Play to Learn',
            text: 'We create home-like environment for children.',
            imgUrl: Dices,
        }
    ]
    return (
        <KeyFeaturesWrapper>
            <KeyFeaturesContent>
                <Heading level='3' color={globalStyles.colors.white}>
                    <strong>We are <PeachText>K. K. Public</PeachText> and <PeachText>Childhood</PeachText> is our passion</strong>
                </Heading>
                <P color={globalStyles.colors.white}>We are excited and pleased to introduce to you the wonderful, passionate and commited educators who are working at our campus. Please take a moment to meet out family. We invited each of them to describe why they love working with children.</P>
                <Button>Learn more</Button>
            </KeyFeaturesContent>
            <KeyFeatureCards>
                {
                    data.map((item, index) => (
                        <FeatureCard 
                            key={index} 
                            bgcolor={ index === 0 ? globalStyles.colors.peach : globalStyles.colors.white }
                            imgUrl={item.imgUrl}
                            >
                            <Heading level='4' color={index === 0 ? globalStyles.colors.white : globalStyles.colors.navyBlue}>
                                <strong>{item.title}</strong>
                            </Heading>
                            <P color={index === 0 ? globalStyles.colors.white : globalStyles.colors.navyBlue}>{item.text}</P>
                        </FeatureCard>
                    ))
                }
            </KeyFeatureCards>
        </KeyFeaturesWrapper>
    )
}

export default KeyFeatures