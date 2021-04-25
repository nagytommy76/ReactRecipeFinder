import styled from 'styled-components'
import { animated } from 'react-spring'

import bgImage from '../images/Veggies2.jpg'

export const BackgroundImage = styled.section`
    color: white;
    height: 95vh;
    width: 100%;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    position: relative;
`

export const H1 = styled(animated.h1)`
    position: absolute;
    top: 30%;
    right: 10px;
    width: 50%;
    font-size: 4.5rem;
    margin: 0;
`

export const CucumberImg = styled(animated.img)`
    position: absolute;
    top: 45%;
    right: 100px;
`
export const RedPepperImgStyle = styled(animated.img)`
    position: absolute;
    bottom: 10%;
    left: 3%;
`
export const BlackPepperImgStyle = styled(animated.img)`
    position: absolute;
    z-index: 0;
    top: 5%;
    right: 45%;
`