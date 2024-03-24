import { keyframes } from "styled-components"

// KEYFRAMES
const oscillationLength = 10

// [x1, y1, x2, y2]
const translateParams = [[-1,-1,1,1], [1,-1,-1,1], [1,1,-1,-1], [-1,1,1,-1]]

export const circleMotion = (animationPath) => keyframes`
    0%, 100% {
        transform: translate(${translateParams[animationPath-1][0]*oscillationLength}px, ${translateParams[animationPath-1][1]*oscillationLength}px)
    }

    50% {
        transform: translate(${translateParams[animationPath-1][2]*oscillationLength}px, ${translateParams[animationPath-1][3]*oscillationLength}px)
    }
`