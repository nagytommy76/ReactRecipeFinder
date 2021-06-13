import styled from 'styled-components'

export const StyledNavbar = styled.nav`
   background-color: rgba(5, 5, 5, 0.7);
   width: 100%;
   height: 7rem;
   display: flex;
   position: absolute;
   top: 0;
   justify-content: space-around;
   align-items: center;
   z-index: 5;
   transition: all 0.25s;
   @media (max-width: 815px) {
      background-color: rgba(0, 0, 0, 0.9);
      flex-direction: column;
      height: 100vh;
   }
   &:hover {
      box-shadow: #222 1px 1px 30px;
      background-color: rgba(0, 0, 0, 0.9);
   }
`
