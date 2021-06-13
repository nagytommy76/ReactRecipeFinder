import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavbarListStyle = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-left: 0;
   @media (max-width: 815px) {
      flex-direction: column;
   }
`

export const StyledLi = styled(NavLink)`
   margin: 0 1.2rem 0 1.2rem;
   font-size: 1.3rem;
   color: #fff;
   padding: 1rem;
   border-radius: 7px;
   transition: all 0.2s ease;
   &:hover,
   &:active {
      background-color: #d14200;
   }

   @media (max-width: 815px) {
      text-align: center;
      margin: 0;
   }
`
