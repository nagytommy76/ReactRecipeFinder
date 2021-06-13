import styled from 'styled-components'

type Prop = { navbarOpen: boolean }

export const StyledNavbar = styled.nav<Prop>`
   background-color: rgba(5, 5, 5, 0.7);
   width: 100%;
   height: 7rem;
   display: flex;
   position: absolute;
   top: 0;
   justify-content: space-around;
   align-items: center;
   z-index: 5;
   transition: all 0.3s;
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
      font-size: 2rem;
      margin-bottom: 0;
   }
`
