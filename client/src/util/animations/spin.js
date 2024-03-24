import { keyframes } from "styled-components"

// KEYFRAMES
export const spin = (spins = 1) => keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(${360*spins}deg);
    }
`
