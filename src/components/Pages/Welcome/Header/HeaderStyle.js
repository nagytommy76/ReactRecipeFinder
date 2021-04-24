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
`

export const H1 = styled(animated.h1)`
    font-size: 3.5rem;
    margin-top: 0;
`