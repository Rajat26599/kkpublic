import styled, { css } from "styled-components";
import { circleMotion } from "../../util/animations/circleMotion";

export const MyCircle = styled.div`
    ${props => (
        css`        
            position: absolute;
            left: ${props.position.x};
            top: ${props.position.y};
            height: ${props.radius};
            width: ${props.radius};
            border-radius: 100%;
            background-color: ${props.bgcolor};
            animation: ${circleMotion(props.animationPath)} 5s infinite ease;

        ` 
    )}
`