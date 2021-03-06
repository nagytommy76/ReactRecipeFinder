import styled from 'styled-components'
import { animated } from 'react-spring'

import bgImage from '../images/Veggies2.jpg'

export const BackgroundImage = styled.section`
   color: white;
   height: 100vh;
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
   @media (max-width: 815px) {
      font-size: 1.5rem;
      left: 20px;
      width: 70%;
   }
`

export const BasilLeaf = styled(animated.img)`
   position: absolute;
   top: 45%;
   right: 100px;
   @media (max-width: 815px) {
      width: 60%;
   }
`
export const RedPepperImgStyle = styled(animated.img)`
   position: absolute;
   bottom: 10%;
   left: 3%;
   @media (max-width: 815px) {
      width: 5%;
   }
`
export const BlackPepperImgStyle = styled(animated.img)`
   position: absolute;
   z-index: 0;
   top: 5%;
   right: 45%;
   @media (max-width: 815px) {
      display: none;
   }
`
