import Circle from "../../components/circle/Circle"
import globalStyles from "../../data/constants/globalStyles"
import { CirclesWrapper } from "./styles"

const Circles = () => {
    const peach = globalStyles.colors.peach
    const navyBlue = globalStyles.colors.navyBlue
    const white = globalStyles.colors.white

    const data = [
        {
            radius: '60px',
            bgcolor: navyBlue,
            position: {x: '50%', y: '100px'},
            animationPath: 1,
        },
        {
            radius: '40px',
            bgcolor: navyBlue,
            position: {x: '90%', y: '200px'},
            animationPath: 3,
        },
        {
            radius: '80px',
            bgcolor: white,
            position: {x: '90%', y: '400px'},
            animationPath: 3,
        },
        {
            radius: '60px',
            bgcolor: peach,
            position: {x: '5%', y: '600px'},
            animationPath: 3,
        },
        {
            radius: '80px',
            bgcolor: peach,
            position: {x: '95%', y: '700px'},
            animationPath: 3,
        },
        {
            radius: '40px',
            bgcolor: white,
            position: {x: '90%', y: '900px'},
            animationPath: 3,
        },
        {
            radius: '20px',
            bgcolor: white,
            position: {x: '3%', y: '900px'},
            animationPath: 1,
        },
        {
            radius: '50px',
            bgcolor: peach,
            position: {x: '95%', y: '1100px'},
            animationPath: 2,
        },
        {
            radius: '60px',
            bgcolor: navyBlue,
            position: {x: '80%', y: '1600px'},
            animationPath: 1,
        },
        {
            radius: '40px',
            bgcolor: peach,
            position: {x: '95%', y: '1800px'},
            animationPath: 4,
        }
    ]

    return (
        <CirclesWrapper>
            {
                data.map((item, index) => (
                    <Circle 
                        key={index}
                        radius={item.radius}
                        bgcolor={item.bgcolor}
                        position={item.position}
                        animationPath={item.animationPath}
                    />
                ))
            }
        </CirclesWrapper>   
    )
}

export default Circles