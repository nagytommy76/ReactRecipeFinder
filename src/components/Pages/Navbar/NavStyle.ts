import styled from 'styled-components'

type Prop = { navbarOpen: boolean }

export const StyledNavbar = styled.nav<Prop>`
   background-color: rgba(5, 5, 5, 0.7);
   width: 100%;
   height: 7rem;
   display: flex;
   /* position: absolute; */
   position: fixed;
   top: 0;
   justify-content: space-around;
   align-items: center;
   z-index: 5;
   transition: all 0.6s;
   @media (max-width: 815px) {
      background-color: rgba(0, 0, 0, 0.9);
      flex-direction: column;
      height: ${({ navbarOpen }) => (navbarOpen ? '100vh' : '7rem')};
   }
   &:hover {
      box-shadow: #222 1px 1px 30px;
      background-color: rgba(0, 0, 0, 0.9);
   }
`

export const Title = styled.h1`
   color: #fff;
   font-size: 3rem;
   margin: 0;
   transition: color 0.25s linear;
   &:hover {
      color: #d14200;
   }
   @media (max-width: 815px) {
      font-size: 1.7rem;
      margin: 0 1.4rem 0 0;
      text-align: center;
      width: 100%;
      top: 30px;
   }
`

// Icon Span
export const IconSpan = styled.span`
   color: red;
`

export const Header = styled.header`
   @media (max-width: 815px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 40px;
   }
`
