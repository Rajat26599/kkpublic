import { SocialMediaWrapper, Icon } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeta, faYoutube } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'

const SocialMedia = () => {
    const data = [
        {
            name: 'Youtube',
            icon: faYoutube,
            url: 'https://www.youtube.com/channel/UCR7_aN1sj2z1rGQQzIkC14w'
        },
        {
            name: 'Meta',
            icon: faMeta,
            url: 'https://www.facebook.com/p/K-K-public-school-100054347628939/'
        },
        {
            name: 'Email: kkpublic.skb@gmail.com',
            icon: faEnvelope,
            url: 'mailto:kkpublic.skb@gmail.com'
        }
    ]

    return (
        <SocialMediaWrapper>
            {
                data.map((item, index) => <Icon key={index} title={item.name} href={item.url} target='_blank'><FontAwesomeIcon icon={item.icon} size='2x' /></Icon>)
            }
        </SocialMediaWrapper>
    )
}

export default SocialMedia